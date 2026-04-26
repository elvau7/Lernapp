const loginScreen = document.getElementById("screen-login");
const reactRoot = document.getElementById("react-root");
const usernameInput = document.getElementById("login-username");
const passwordInput = document.getElementById("login-password");
const loginButton = document.getElementById("login-btn");
const loginError = document.getElementById("login-errmsg");
const loginEye = document.getElementById("login-eye");

let appLoaded = false;
let supabaseClient = null;
let usernameDomain = "users.local";
let userLevels = {};
let levelSubjectAccess = {};
let defaultLevel = "economics";
let currentAccessLevel = "economics";

function setError(message) {
  loginError.textContent = message || "";
}

function showLogin() {
  loginScreen.style.display = "flex";
  reactRoot.style.display = "none";
}

function showApp() {
  loginScreen.style.display = "none";
  reactRoot.style.display = "block";
}

function getAccessLevelForUsername(username) {
  const normalized = String(username || "").trim().toLowerCase();
  return userLevels[normalized] || defaultLevel;
}

function exposeAccessLevel(level) {
  window.LA_ACCESS_LEVEL = String(level || defaultLevel || "economics").trim().toLowerCase();
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
    currentAccessLevel = getAccessLevelForUsername(username);
    exposeAccessLevel(currentAccessLevel);
    await bootApp();
    showApp();
  } catch {
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
  currentAccessLevel = getAccessLevelForUsername(username);
  exposeAccessLevel(currentAccessLevel);
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
    await bootApp();
    showApp();
  } catch (error) {
    setError(error.message || "Login fehlgeschlagen.");
    passwordInput.value = "";
    passwordInput.focus();
  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "Einloggen";
  }
}

loginButton.addEventListener("click", login);
passwordInput.addEventListener("keydown", event => {
  if (event.key === "Enter") login();
});
usernameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") login();
});
loginEye.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
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
  if (config.userLevels && typeof config.userLevels === "object") {
    userLevels = Object.fromEntries(
      Object.entries(config.userLevels).map(([username, level]) => [
        String(username).trim().toLowerCase(),
        String(level).trim().toLowerCase(),
      ])
    );
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
  supabaseClient = supabaseRef.createClient(config.url, config.anonKey);
  window.LA_SUPABASE = supabaseClient;
  return true;
}

if (initSupabase()) {
  checkSession();
} else {
  showLogin();
}

