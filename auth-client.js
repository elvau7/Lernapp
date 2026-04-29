const loginScreen = document.getElementById("screen-login");
const reactRoot = document.getElementById("react-root");
const usernameInput = document.getElementById("login-username");
const passwordInput = document.getElementById("login-password");
const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementById("signup-btn");
const loginError = document.getElementById("login-errmsg");
const loginEye = document.getElementById("login-eye");
const mobileHelpBtn = document.getElementById("mobile-help-btn");
const mobileHelpDialog = document.getElementById("mobile-help-dialog");
const mobileHelpClose = document.getElementById("mobile-help-close");
const adminOpenBtn = document.getElementById("admin-open-btn");
const logoutBtn = document.getElementById("logout-btn");
const adminPanel = document.getElementById("admin-panel");
const adminCloseBtn = document.getElementById("admin-close-btn");
const adminRefreshBtn = document.getElementById("admin-refresh-btn");
const adminTabPendingBtn = document.getElementById("admin-tab-pending");
const adminTabAllBtn = document.getElementById("admin-tab-all");
const adminTableHeadRow = document.getElementById("admin-table-head-row");
const adminTableBody = document.getElementById("admin-table-body");
const adminMessage = document.getElementById("admin-message");

let appLoaded = false;
let supabaseClient = null;
let usernameDomain = "users.local";
let levelSubjectAccess = {};
let defaultLevel = "molekularbiologie";
let currentAccessLevel = "molekularbiologie";
let profileTable = "profiles";
let currentUserId = null;
let currentUserRole = null;
let adminListRpc = "admin_list_pending_users";
let adminListAllRpc = "admin_list_all_users";
let adminUpdateRpc = "admin_update_user_status";
let adminView = "pending";

function isMobileDevice() {
  return window.matchMedia("(pointer:coarse)").matches;
}

function setError(message) {
  loginError.textContent = message || "";
}

function showLogin() {
  loginScreen.style.display = "flex";
  reactRoot.style.display = "none";
  if (mobileHelpBtn) {
    mobileHelpBtn.classList.toggle("hidden", !isMobileDevice());
  }
  if (adminOpenBtn) adminOpenBtn.classList.add("hidden");
  if (logoutBtn) logoutBtn.classList.add("hidden");
  if (adminPanel) adminPanel.classList.add("hidden");
}

function showApp() {
  loginScreen.style.display = "none";
  reactRoot.style.display = "block";
  if (logoutBtn) logoutBtn.classList.remove("hidden");
}

function setAdminMessage(message, tone = "") {
  if (!adminMessage) return;
  adminMessage.textContent = message || "";
  adminMessage.classList.remove("error", "success");
  if (tone) adminMessage.classList.add(tone);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isAdmin() {
  return currentUserRole === "admin";
}

function toggleAdminButton() {
  if (!adminOpenBtn) return;
  if (isAdmin()) {
    adminOpenBtn.classList.remove("hidden");
  } else {
    adminOpenBtn.classList.add("hidden");
    if (adminPanel) adminPanel.classList.add("hidden");
  }
}

function openAdminPanel() {
  if (!adminPanel || !isAdmin()) return;
  adminPanel.classList.remove("hidden");
}

function closeAdminPanel() {
  if (!adminPanel) return;
  adminPanel.classList.add("hidden");
}

function openMobileHelp() {
  if (!mobileHelpDialog) return;
  mobileHelpDialog.classList.remove("hidden");
}

function closeMobileHelp() {
  if (!mobileHelpDialog) return;
  mobileHelpDialog.classList.add("hidden");
}

function setAdminView(nextView) {
  adminView = nextView === "all" ? "all" : "pending";
  if (adminTabPendingBtn) adminTabPendingBtn.classList.toggle("active", adminView === "pending");
  if (adminTabAllBtn) adminTabAllBtn.classList.toggle("active", adminView === "all");
}

function renderAdminTableHead() {
  if (!adminTableHeadRow) return;
  if (adminView === "all") {
    adminTableHeadRow.innerHTML = `
      <th>Nutzer</th>
      <th>Status</th>
      <th>Anfrage</th>
      <th>Letzte Anmeldung</th>
      <th>Rolle</th>
      <th>Aktion</th>
    `;
    return;
  }
  adminTableHeadRow.innerHTML = `
    <th>Nutzer</th>
    <th>Anfrage</th>
    <th>Rolle</th>
    <th>Aktion</th>
  `;
}

function renderRows(rows) {
  if (!adminTableBody) return;
  if (!Array.isArray(rows) || rows.length === 0) {
    adminTableBody.innerHTML = `
      <tr>
        <td colspan="${adminView === "all" ? "6" : "4"}">Keine Eintraege vorhanden.</td>
      </tr>
    `;
    return;
  }

  adminTableBody.innerHTML = rows
    .map(row => {
      const userId = escapeHtml(row.id);
      const username = escapeHtml(row.username);
      const requestedAt = row.requested_at
        ? new Date(row.requested_at).toLocaleString("de-AT")
        : "-";
      const lastSignInAt = row.last_sign_in_at
        ? new Date(row.last_sign_in_at).toLocaleString("de-AT")
        : "-";
      const selectedRole = normalizeRole(row.role);
      const roleOptions = ["molekularbiologie", "economics", "admin"]
        .map(role => {
          const selected = role === selectedRole ? "selected" : "";
          return `<option value="${role}" ${selected}>${role}</option>`;
        })
        .join("");
      const status = normalizeStatus(row.status);
      const statusCell = adminView === "all"
        ? `<td><span class="admin-status-pill ${status}">${escapeHtml(status)}</span></td>`
        : "";
      const lastSignInCell = adminView === "all"
        ? `<td>${escapeHtml(lastSignInAt)}</td>`
        : "";
      const actionButtons = adminView === "all"
        ? `
          <button type="button" class="admin-action-btn approve" data-action="approve">Aktiv</button>
          <button type="button" class="admin-action-btn block" data-action="block">Blockieren</button>
          <button type="button" class="admin-action-btn" data-action="pending">Pending</button>
        `
        : `
          <button type="button" class="admin-action-btn approve" data-action="approve">Freischalten</button>
          <button type="button" class="admin-action-btn block" data-action="block">Blockieren</button>
        `;

      return `
        <tr data-user-id="${userId}">
          <td>${username}</td>
          ${statusCell}
          <td>${requestedAt}</td>
          ${lastSignInCell}
          <td>
            <select class="admin-role-select">${roleOptions}</select>
          </td>
          <td>
            <div class="admin-actions">
              ${actionButtons}
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

async function loadAdminData() {
  if (!isAdmin()) return;
  setAdminMessage("Lade Anfragen...");
  const rpcName = adminView === "all" ? adminListAllRpc : adminListRpc;
  const { data, error } = await supabaseClient.rpc(rpcName);
  if (error) throw error;
  renderAdminTableHead();
  renderRows(Array.isArray(data) ? data : []);
  setAdminMessage("");
}

async function applyAdminDecision(userId, status, role) {
  const { error } = await supabaseClient.rpc(adminUpdateRpc, {
    p_user_id: userId,
    p_status: status,
    p_role: role,
  });
  if (error) throw error;
}

function exposeAccessLevel(level) {
  window.LA_ACCESS_LEVEL = String(level || defaultLevel || "molekularbiologie").trim().toLowerCase();
}

function normalizeStatus(status) {
  return String(status || "pending").trim().toLowerCase();
}

function normalizeRole(role) {
  return String(role || "").trim().toLowerCase();
}

function isKnownRole(role) {
  if (role === "admin") return true;
  return Object.prototype.hasOwnProperty.call(levelSubjectAccess, role);
}

async function loadProfile(userId) {
  if (!userId) return null;
  const { data, error } = await supabaseClient
    .from(profileTable)
    .select("status, role")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  return {
    status: normalizeStatus(data.status),
    role: normalizeRole(data.role),
  };
}

async function ensureActiveProfile(user) {
  const profile = await loadProfile(user?.id);
  currentUserId = user?.id || null;
  if (!profile) {
    await supabaseClient.auth.signOut();
    throw new Error("Dein Zugang wird noch vorbereitet. Bitte spaeter erneut versuchen.");
  }
  if (profile.status === "blocked") {
    await supabaseClient.auth.signOut();
    throw new Error("Dein Konto wurde gesperrt. Bitte kontaktiere den Admin.");
  }
  if (profile.status !== "active") {
    await supabaseClient.auth.signOut();
    throw new Error("Registrierungsanfrage gesendet. Bitte auf Freischaltung warten.");
  }
  if (!profile.role || !isKnownRole(profile.role)) {
    await supabaseClient.auth.signOut();
    throw new Error("Keine gueltige Rolle gefunden. Bitte kontaktiere den Admin.");
  }
  currentAccessLevel = profile.role;
  currentUserRole = currentAccessLevel;
  exposeAccessLevel(currentAccessLevel);
  toggleAdminButton();
  return profile;
}

function applySubjectAccessFilter() {
  if (!Array.isArray(window.SUBJECTS)) return;
  if (currentAccessLevel === "admin") return;

  const allowedSubjects = levelSubjectAccess[currentAccessLevel] || [];
  const allowedSet = new Set(
    allowedSubjects.map(name => String(name || "").trim().toLowerCase())
  );
  window.SUBJECTS = window.SUBJECTS.filter(subject =>
    allowedSet.has(String(subject?.name || "").trim().toLowerCase())
  );
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

async function bootApp() {
  if (appLoaded) return;
  appLoaded = true;

  // Data scripts must load before app-react-compiled.js
  const dataScripts = [
    "Fächer/cards.js",
    "Fächer/cards_public_econ.js",
    "Fächer/cards_micro2.js",
    "Fächer/cards_oekonometrie1.js",
    "Fächer/cards_gender_economics.js",
    "Fächer/cards_bwl.js",
    "Fächer/cards_finanz.js",
    "Fächer/cards_biochemie.js",
    "Fächer/cards_biochemie_skripte.js",
    "Fächer/cards_soziologie.js",
    "Fächer/cards_vertragsrecht.js",
    "molecules/molecule_mapping_bundle.js",
    "Fächer/cards_strukturformeln.js",
    "macro-diagrams.js",
  ];
  for (const src of dataScripts) {
    await loadScript(src);
  }
  applySubjectAccessFilter();
  await loadScript("app-react-compiled.js");
}

async function checkSession() {
  if (!supabaseClient) {
    showLogin();
    return;
  }
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (!data?.session) {
      showLogin();
      return;
    }
    const userEmail = String(data.session.user?.email || "").toLowerCase();
    const username = userEmail.split("@")[0] || "";
    window.LA_USERNAME = username;
    if (data.session.user?.id) {
      window.LA_USER_PROGRESS_ID = data.session.user.id;
    }
    await ensureActiveProfile(data.session.user);
    await bootApp();
    showApp();
  } catch (error) {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    currentUserId = null;
    currentUserRole = null;
    toggleAdminButton();
    setError(error?.message || "Session konnte nicht geladen werden.");
    showLogin();
  }
}

async function login() {
  setError("");
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  if (!username || !password) {
    setError("Bitte Benutzername und Passwort eingeben.");
    return;
  }
  if (!/^[a-z0-9._-]+$/.test(username)) {
    setError("Benutzername darf nur a-z, 0-9, Punkt, Unterstrich und Bindestrich enthalten.");
    return;
  }
  const email = `${username}@${usernameDomain}`;

  loginButton.disabled = true;
  loginButton.textContent = "Pruefe...";
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data?.user?.id) {
      window.LA_USER_PROGRESS_ID = data.user.id;
    }
    window.LA_USERNAME = username;
    await ensureActiveProfile(data.user);
    await bootApp();
    showApp();
  } catch (error) {
    currentUserId = null;
    currentUserRole = null;
    toggleAdminButton();
    setError(error.message || "Login fehlgeschlagen.");
    passwordInput.value = "";
    passwordInput.focus();
  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "Einloggen";
  }
}

async function requestSignup() {
  setError("");
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  if (!username || !password) {
    setError("Bitte Benutzername und Passwort eingeben.");
    return;
  }
  if (!/^[a-z0-9._-]+$/.test(username)) {
    setError("Benutzername darf nur a-z, 0-9, Punkt, Unterstrich und Bindestrich enthalten.");
    return;
  }

  const email = `${username}@${usernameDomain}`;
  signupButton.disabled = true;
  signupButton.textContent = "Sende Anfrage...";
  loginButton.disabled = true;
  try {
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    setError("Registrierungsanfrage gesendet. Du wirst nach Freischaltung informiert.");
    passwordInput.value = "";
  } catch (error) {
    setError(error.message || "Registrierungsanfrage fehlgeschlagen.");
  } finally {
    signupButton.disabled = false;
    signupButton.textContent = "Registrierungsanfrage stellen";
    loginButton.disabled = false;
  }
}

async function logout() {
  setError("");
  try {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
  } catch (error) {
    setError(error?.message || "Abmeldung fehlgeschlagen.");
  } finally {
    currentUserId = null;
    currentUserRole = null;
    closeAdminPanel();
    toggleAdminButton();
    showLogin();
  }
}

loginButton.addEventListener("click", login);
if (signupButton) {
  signupButton.addEventListener("click", requestSignup);
}
if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}
passwordInput.addEventListener("keydown", event => {
  if (event.key === "Enter") login();
});
usernameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") login();
});
loginEye.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
if (adminOpenBtn) {
  adminOpenBtn.addEventListener("click", async () => {
    openAdminPanel();
    setAdminView("pending");
    try {
      await loadAdminData();
    } catch (error) {
      setAdminMessage(error.message || "Anfragen konnten nicht geladen werden.", "error");
    }
  });
}
if (adminCloseBtn) {
  adminCloseBtn.addEventListener("click", closeAdminPanel);
}
if (adminRefreshBtn) {
  adminRefreshBtn.addEventListener("click", async () => {
    try {
      await loadAdminData();
    } catch (error) {
      setAdminMessage(error.message || "Aktualisierung fehlgeschlagen.", "error");
    }
  });
}
if (adminTabPendingBtn) {
  adminTabPendingBtn.addEventListener("click", async () => {
    setAdminView("pending");
    try {
      await loadAdminData();
    } catch (error) {
      setAdminMessage(error.message || "Pending-Nutzer konnten nicht geladen werden.", "error");
    }
  });
}
if (adminTabAllBtn) {
  adminTabAllBtn.addEventListener("click", async () => {
    setAdminView("all");
    try {
      await loadAdminData();
    } catch (error) {
      setAdminMessage(error.message || "Alle Nutzer konnten nicht geladen werden.", "error");
    }
  });
}
if (adminPanel) {
  adminPanel.addEventListener("click", event => {
    if (event.target === adminPanel) {
      closeAdminPanel();
    }
  });
}
if (adminTableBody) {
  adminTableBody.addEventListener("click", async event => {
    const button = event.target.closest("button[data-action]");
    if (!button || !isAdmin()) return;
    const row = button.closest("tr[data-user-id]");
    if (!row) return;

    const userId = row.dataset.userId;
    const action = button.dataset.action;
    const roleSelect = row.querySelector(".admin-role-select");
    const role = normalizeRole(roleSelect?.value || "molekularbiologie");
    const status = action === "approve" ? "active" : action === "pending" ? "pending" : "blocked";

    if (userId === currentUserId && status !== "active") {
      setAdminMessage("Du kannst dein eigenes Konto nicht deaktivieren.", "error");
      return;
    }

    button.disabled = true;
    setAdminMessage("Speichere...", "");
    try {
      await applyAdminDecision(userId, status, role);
      setAdminMessage("Aenderung gespeichert.", "success");
      await loadAdminData();
    } catch (error) {
      setAdminMessage(error.message || "Speichern fehlgeschlagen.", "error");
    } finally {
      button.disabled = false;
    }
  });
}
if (mobileHelpBtn) {
  mobileHelpBtn.addEventListener("click", openMobileHelp);
}
if (mobileHelpClose) {
  mobileHelpClose.addEventListener("click", closeMobileHelp);
}
if (mobileHelpDialog) {
  mobileHelpDialog.addEventListener("click", event => {
    if (event.target === mobileHelpDialog) {
      closeMobileHelp();
    }
  });
}
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMobileHelp();
  }
});

function initSupabase() {
  const supabaseRef = window.supabase;
  const config = window.SUPABASE_CONFIG || {};
  if (!supabaseRef?.createClient) {
    setError("Supabase SDK wurde nicht geladen.");
    return false;
  }
  if (!config.url || !config.anonKey) {
    setError("Bitte SUPABASE_CONFIG in supabase-config.js setzen.");
    return false;
  }
  if (config.usernameDomain) {
    usernameDomain = String(config.usernameDomain).trim().toLowerCase();
  }
  if (config.levelSubjectAccess && typeof config.levelSubjectAccess === "object") {
    levelSubjectAccess = Object.fromEntries(
      Object.entries(config.levelSubjectAccess).map(([level, subjects]) => [
        String(level).trim().toLowerCase(),
        Array.isArray(subjects) ? subjects : [],
      ])
    );
  }
  if (config.defaultLevel) {
    defaultLevel = String(config.defaultLevel).trim().toLowerCase();
  }
  if (config.profileTable) {
    profileTable = String(config.profileTable).trim();
  }
  if (config.adminListRpc) {
    adminListRpc = String(config.adminListRpc).trim();
  }
  if (config.adminListAllRpc) {
    adminListAllRpc = String(config.adminListAllRpc).trim();
  }
  if (config.adminUpdateRpc) {
    adminUpdateRpc = String(config.adminUpdateRpc).trim();
  }
  supabaseClient = supabaseRef.createClient(config.url, config.anonKey);
  window.LA_SUPABASE = supabaseClient;
  return true;
}

if (initSupabase()) {
  checkSession();
} else {
  showLogin();
}

