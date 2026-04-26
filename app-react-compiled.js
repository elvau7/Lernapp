const ACCENT = "#C4892A";
const PROG_KEY = "la_prog";
const THEME_KEY = "lernapp_theme_v1";
const GLOBAL_KEY = "__global";
const PROGRESS_TABLE = "user_progress";
function getProgKey() {
  const id = typeof window !== "undefined" && window.LA_USER_PROGRESS_ID;
  return id ? `${PROG_KEY}_${id}` : PROG_KEY;
}
const ELISABETH_PATHWAYS_IMG = "assets/stoffwechsel-fertig.png";
const isElisabethPathwaysCelebrationUser = () => {
  const u = typeof window !== "undefined" && window.LA_USERNAME;
  return String(u || "").trim().toLowerCase() === "elisabeth";
};
const CARD_R = 12;
const PW_COLOR = "#6C7BFA";
const MIX_COLOR = "#7C6BA8";
const getTheme = (isDark) => ({
  bg: isDark ? "#1C1C1A" : "#FAF9F6",
  cardBg: isDark ? "#2A2A27" : "#FFFFFF",
  surface: isDark ? "#333330" : "#F2F0EC",
  text: isDark ? "#F0EDE8" : "#1A1916",
  subtext: isDark ? "#9A9690" : "#7A7670",
  border: isDark ? "1px solid #333330" : "1px solid #EDEAE4",
  input: isDark ? "#262623" : "#F0EEE9",
  tag: isDark ? "#2E2E2B" : "#EDEAE4",
  accent: ACCENT,
  isDark
});
const initGlobalMeta = () => ({ studyDays: [], streak: 0 });
const loadProgress = () => {
  try {
    const key = getProgKey();
    let raw = localStorage.getItem(key);
    if ((!raw || raw === "{}") && key !== PROG_KEY) {
      const legacy = localStorage.getItem(PROG_KEY);
      if (legacy && legacy !== "{}") {
        localStorage.setItem(key, legacy);
        raw = legacy;
      }
    }
    const obj = JSON.parse(raw || "{}");
    if (!obj[GLOBAL_KEY]) obj[GLOBAL_KEY] = initGlobalMeta();
    return obj;
  } catch {
    return { [GLOBAL_KEY]: initGlobalMeta() };
  }
};
const getLocalProgressTimestamp = (progress) => Number(progress?.[GLOBAL_KEY]?.updatedAt || 0);
const stampProgress = (progress, ts = Date.now()) => {
  if (!progress[GLOBAL_KEY]) progress[GLOBAL_KEY] = initGlobalMeta();
  progress[GLOBAL_KEY].updatedAt = ts;
};
const getProgressClient = () => typeof window !== "undefined" ? window.LA_SUPABASE || null : null;
const pullCloudProgress = async (userId) => {
  const client = getProgressClient();
  if (!client || !userId) return null;
  const { data, error } = await client.from(PROGRESS_TABLE).select("progress, updated_at").eq("user_id", userId).maybeSingle();
  if (error || !data || !data.progress || typeof data.progress !== "object") return null;
  return {
    progress: data.progress,
    ts: data.updated_at ? new Date(data.updated_at).getTime() : getLocalProgressTimestamp(data.progress)
  };
};
const pushCloudProgress = async (userId, progress) => {
  const client = getProgressClient();
  if (!client || !userId || !progress || typeof progress !== "object") return false;
  const nowIso = (/* @__PURE__ */ new Date()).toISOString();
  const payload = JSON.parse(JSON.stringify(progress));
  stampProgress(payload);
  const { error } = await client.from(PROGRESS_TABLE).upsert(
    { user_id: userId, progress: payload, updated_at: nowIso },
    { onConflict: "user_id" }
  );
  return !error;
};
const initCP = () => ({
  fc: [],
  fb: [],
  mc: { best: 0, attempts: 0 },
  th: [],
  pw: {},
  lastStudied: null,
  sessions: 0,
  sr: {}
});
const calendarDayKey = (ts = Date.now()) => {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
const computeStreakFromDays = (studyDays) => {
  if (!studyDays?.length) return 0;
  const set = new Set(studyDays);
  let streak = 0;
  const check = /* @__PURE__ */ new Date();
  if (!set.has(calendarDayKey(check.getTime()))) {
    check.setDate(check.getDate() - 1);
  }
  for (let i = 0; i < 730; i++) {
    const k = calendarDayKey(check.getTime());
    if (set.has(k)) {
      streak++;
      check.setDate(check.getDate() - 1);
    } else break;
  }
  return streak;
};
const touchStudyDay = (root) => {
  if (!root[GLOBAL_KEY]) root[GLOBAL_KEY] = initGlobalMeta();
  const g = root[GLOBAL_KEY];
  const today = calendarDayKey();
  if (!g.studyDays.includes(today)) g.studyDays = [...g.studyDays, today].sort();
  g.streak = computeStreakFromDays(g.studyDays);
};
const computeStreak = (root) => computeStreakFromDays(root?.[GLOBAL_KEY]?.studyDays || []);
const getTheoryItems = (course) => course?.scriptPdfs || course?.theory || [];
const getTheoryModeLabel = (course) => course?.scriptPdfs ? "Skript" : "Theorie";
const getTheoryModeDescription = (course) => course?.scriptPdfs ? "PDF-Skripte lesen" : "Erklärungen lesen";
const findTheorySectionIdx = (course, topicId) => {
  if (topicId == null) return -1;
  const list = getTheoryItems(course);
  return list.findIndex((t) => t.id === topicId);
};
const shuffleIndices = (n) => {
  const o = Array.from({ length: n }, (_, i) => i);
  for (let i = o.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [o[i], o[j]] = [o[j], o[i]];
  }
  return o;
};
const buildSrQueue = (course, p, now = Date.now()) => {
  const cards = course.kk || [];
  const sr = p?.sr || {};
  const indices = [];
  for (let i = 0; i < cards.length; i++) {
    const st = sr[String(i)];
    const due = st ? st.due : 0;
    if (due <= now) indices.push(i);
  }
  indices.sort((a, b) => {
    const da = sr[String(a)]?.due ?? 0;
    const db = sr[String(b)]?.due ?? 0;
    return da - db;
  });
  return indices;
};
const applySrRating = (srMap, cardIndex, quality) => {
  const key = String(cardIndex);
  const cur = srMap[key] || { ef: 2.5, intervalDays: 0, due: 0, reps: 0 };
  let { ef, intervalDays, reps } = cur;
  const dayMs = 864e5;
  if (quality === "hard") {
    ef = Math.max(1.3, ef - 0.2);
    intervalDays = 1 / 48;
    reps = 0;
  } else if (quality === "good") {
    reps += 1;
    if (reps <= 1) intervalDays = 1;
    else intervalDays = Math.max(1, Math.round(intervalDays * ef));
  } else {
    ef = Math.min(3, ef + 0.12);
    reps += 1;
    const base = intervalDays > 0 ? intervalDays : 1;
    intervalDays = Math.max(1, Math.round(base * ef * 1.25));
  }
  const dueMs = intervalDays < 1 ? intervalDays * dayMs : intervalDays * dayMs;
  const due = Date.now() + dueMs;
  return { ...srMap, [key]: { ef, intervalDays, due, reps } };
};
const pathwayStagePct = (tuple) => {
  if (!tuple || !Array.isArray(tuple) || tuple.length < 2 || !tuple[1]) return 0;
  return Math.min(Math.max(tuple[0] / tuple[1], 0), 1);
};
const calcPathwaysProgress = (course, p) => {
  const list = course.pathways || [];
  if (!list.length) return 0;
  const bag = p?.pw || {};
  let sum = 0;
  list.forEach((pw) => {
    const sc = bag[pw.name] || {};
    const s1 = pathwayStagePct(sc.s1);
    const s2 = pathwayStagePct(sc.s2);
    sum += (s1 + s2) / 2;
  });
  return sum / list.length;
};
const calcCompletion = (course, p) => {
  if (!p) return { fc: 0, fb: 0, mc: 0, th: 0, pw: 0, overall: 0 };
  const fcT = (course.kk || []).length;
  const fbT = (course.lt || []).length;
  const mcT = (course.mc || []).length;
  const thT = getTheoryItems(course).filter((t) => !t.hidden).length;
  const pwT = (course.pathways || []).length;
  const fc = fcT ? Math.min((p.fc?.length ?? 0) / fcT, 1) : 0;
  const fb = fbT ? Math.min((p.fb?.length ?? 0) / fbT, 1) : 0;
  const mc = mcT ? Math.min((p.mc?.best ?? 0) / mcT, 1) : 0;
  const th = thT ? Math.min((p.th?.length ?? 0) / thT, 1) : 0;
  const pw = pwT ? calcPathwaysProgress(course, p) : 0;
  const tots = [fcT, fbT, mcT, thT, pwT];
  const vals = [fc, fb, mc, th, pw];
  const active = tots.filter((t) => t > 0).length;
  const overall = active ? vals.filter((_, i) => tots[i] > 0).reduce((a, b) => a + b, 0) / active : 0;
  return { fc, fb, mc, th, pw, overall };
};
const relTime = (ts) => {
  if (!ts) return null;
  const d = Math.floor((Date.now() - ts) / 864e5);
  if (d === 0) return "Heute";
  if (d === 1) return "Gestern";
  if (d < 7) return `Vor ${d} Tagen`;
  return new Date(ts).toLocaleDateString("de-AT", { day: "numeric", month: "short" });
};
const getTopics = (course) => {
  const seen = /* @__PURE__ */ new Set();
  [...course.kk || [], ...course.lt || [], ...course.mc || []].forEach((x) => x.category && seen.add(x.category));
  return [...seen].slice(0, 4);
};
function courseSupportsKkMcMix(course) {
  return !!(course && course.mixedKkMc === true && (course.kk || []).length > 0 && (course.mc || []).length > 0);
}
function buildKkMcMixPlan(kkLen, mcLen) {
  const steps = [];
  for (let i = 0; i < kkLen; i++) steps.push({ kind: "kk", idx: i });
  for (let j = 0; j < mcLen; j++) steps.push({ kind: "mc", idx: j });
  for (let s = steps.length - 1; s > 0; s--) {
    const j = Math.floor(Math.random() * (s + 1));
    const t = steps[s];
    steps[s] = steps[j];
    steps[j] = t;
  }
  return steps;
}
const parseLtItem = (item) => {
  const blanks = [];
  if (item.answer && item.answer.includes("{{")) {
    const text = item.answer.replace(/\{\{([^}]+)\}\}/g, (_, w) => {
      blanks.push(w.trim());
      return `{${w.trim()}}`;
    });
    return { text, blanks, question: item.question, category: item.category };
  }
  const tokens = item.answer.split(/(\s+)/);
  let wi = 0;
  const parts = tokens.map((tok) => {
    if (/\s+/.test(tok)) return tok;
    const clean = tok.replace(/[.,;:!?()»«„"]/g, "");
    if (clean.length >= 4 && wi++ % 3 === 2) {
      blanks.push(clean);
      return `{${clean}}` + tok.slice(clean.length);
    }
    wi++;
    return tok;
  });
  return { text: parts.join(""), blanks, question: item.question, category: item.category };
};
const normalizeMc = (item) => ({
  ...item,
  q: item.question,
  correct: Array.isArray(item.correct) ? item.correct : [item.correct]
});
function mcMixFriendlyOptionLabel(mcQ, idx) {
  const lab = mcQ.option_labels && mcQ.option_labels[idx];
  if (lab != null && String(lab).trim() !== "") return String(lab);
  const oh = mcQ.options_html && mcQ.options_html[idx];
  if (oh != null && String(oh).trim() !== "") return "Antwort " + String.fromCharCode(65 + idx);
  return String(mcQ.options[idx] ?? "");
}
function renderMixMcQuestion(mcQ, th, qopts) {
  const compact = !!(qopts && qopts.compact);
  const marginBottom = qopts && qopts.marginBottom;
  const style = { fontFamily: "'Playfair Display',serif", fontSize: compact ? 20 : 30, color: th.text, lineHeight: 1.25, margin: 0 };
  if (marginBottom != null) style.marginBottom = marginBottom;
  if (mcQ.question_html) {
    return /* @__PURE__ */ React.createElement("div", { style, dangerouslySetInnerHTML: { __html: String(mcQ.question_html) } });
  }
  return /* @__PURE__ */ React.createElement("p", { style }, mcQ.q);
}
function renderMixMcOptionBody(mcQ, i, opt, oopts) {
  const { compact, th, mcConfirmed, mcSels } = oopts;
  const rawHtml = mcQ.options_html && mcQ.options_html[i];
  const html = rawHtml != null && String(rawHtml).trim() !== "" ? String(rawHtml) : "";
  const right = mcConfirmed && mcQ.correct.includes(i);
  const wrongSel = mcConfirmed && mcSels.has(i) && !mcQ.correct.includes(i);
  const color = right ? "#4A7C59" : wrongSel ? "#C4892A" : th.text;
  const fontSize = compact ? 18 : 24;
  if (html) {
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, width: "100%", height: "100%", fontSize, color, lineHeight: 1.25 }, dangerouslySetInnerHTML: { __html: html } });
  }
  return /* @__PURE__ */ React.createElement("span", { style: { fontSize, color, width: "100%", textAlign: "center", fontFamily: "'Playfair Display',serif", lineHeight: 1.2 } }, opt);
}
function mcUsesImageOptions(mcQ) {
  return !!(mcQ && Array.isArray(mcQ.options_html) && mcQ.options_html.some((h) => h != null && String(h).trim() !== ""));
}
function mcOptionGridStyle(hasImageOptions, compact) {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: compact ? 10 : 12,
    marginBottom: compact ? 12 : 14
  };
}
function mcOptionRowStyle(hasImageOptions, baseStyle, compact) {
  if (!hasImageOptions) {
    return {
      ...baseStyle,
      minHeight: compact ? 86 : 98
    };
  }
  return {
    ...baseStyle,
    minHeight: compact ? 190 : 236,
    alignItems: "stretch",
    padding: compact ? "9px 9px" : "12px 12px"
  };
}
function pathwayNormalize(t) {
  let s = String(t || "");
  s = s.replace(/\s*\([^)]*\)/g, "").toLowerCase().trim();
  s = s.replace(/\u2080/g, "0").replace(/\u2081/g, "1").replace(/\u2082/g, "2").replace(/\u2083/g, "3").replace(/\u2084/g, "4").replace(/\u2085/g, "5").replace(/\u2086/g, "6").replace(/\u2087/g, "7").replace(/\u2088/g, "8").replace(/\u2089/g, "9");
  s = s.replace(/\u2070/g, "0").replace(/\u00b9/g, "1").replace(/\u00b2/g, "2").replace(/\u00b3/g, "3").replace(/\u2074/g, "4").replace(/\u2075/g, "5").replace(/\u2076/g, "6").replace(/\u2077/g, "7").replace(/\u2078/g, "8").replace(/\u2079/g, "9");
  s = s.replace(/\u207a/g, "+").replace(/\u207b/g, "-");
  s = s.replace(/\u03b1/g, "alpha").replace(/\u03b2/g, "beta").replace(/\u03b3/g, "gamma");
  s = s.replace(/c/g, "k");
  return s;
}
function pathwayNormArr(arr) {
  return arr.map(pathwayNormalize).sort();
}
function pathwayNormArrMatch(a, b) {
  const na = pathwayNormArr(a), nb = pathwayNormArr(b);
  if (na.length !== nb.length) return false;
  for (let i = 0; i < na.length; i++) if (na[i] !== nb[i]) return false;
  return true;
}
function buildPathwayPool(reactions) {
  const pool = [];
  let gidx = 0;
  reactions.forEach((rxn) => {
    rxn.substrates.forEach((t) => pool.push({ text: t, gidx: gidx++, used: false }));
    pool.push({ text: rxn.enzyme, gidx: gidx++, used: false });
    rxn.products.forEach((t) => pool.push({ text: t, gidx: gidx++, used: false }));
  });
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}
function initPathwayS1Slots(reactions) {
  return reactions.map((rxn) => {
    const row = [];
    rxn.substrates.forEach((_, i) => row.push({ type: "sub", idx: i, gidx: null }));
    row.push({ type: "enz", idx: 0, gidx: null });
    rxn.products.forEach((_, i) => row.push({ type: "prod", idx: i, gidx: null }));
    return row;
  });
}
const stripHtml = (html) => {
  const d = document.createElement("div");
  d.innerHTML = html || "";
  return (d.textContent || d.innerText || "").replace(/\s+/g, " ").trim();
};
function useIsMobile() {
  const mqCoarse = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(pointer: coarse)") : null;
  const [mob, setMob] = React.useState(typeof window !== "undefined" && (window.innerWidth < 768 || !!mqCoarse?.matches));
  React.useEffect(() => {
    const mq = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(pointer: coarse)") : null;
    const h = () => setMob(window.innerWidth < 768 || !!mq?.matches);
    window.addEventListener("resize", h);
    if (mq?.addEventListener) mq.addEventListener("change", h);
    else if (mq?.addListener) mq.addListener(h);
    return () => {
      window.removeEventListener("resize", h);
      if (mq?.removeEventListener) mq.removeEventListener("change", h);
      else if (mq?.removeListener) mq.removeListener(h);
    };
  }, []);
  return mob;
}
function useKaTeX(ref, deps = []) {
  React.useEffect(() => {
    if (!ref.current || typeof renderMathInElement === "undefined") return;
    renderMathInElement(ref.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }, deps);
}
const PATTERNS = [
  { bg: "#E8DCC8", fg: "#C4892A", type: "diag" },
  { bg: "#D4E0D4", fg: "#4A7C59", type: "cross" },
  { bg: "#D0D8E8", fg: "#3A5A8C", type: "dots" },
  { bg: "#E8D4D4", fg: "#8C3A3A", type: "diag" },
  { bg: "#E4DDF0", fg: "#6A3A8C", type: "cross" },
  { bg: "#D8E8E0", fg: "#2A7C6A", type: "dots" },
  { bg: "#F0E4D0", fg: "#8C6A2A", type: "diag" },
  { bg: "#D8DCE8", fg: "#3A4A7C", type: "cross" }
];
function Thumbnail({ idx, width = 100, height = 100, radius = 8 }) {
  const p = PATTERNS[idx % PATTERNS.length];
  const id = `pt-${idx}-${width}-${height}`;
  const pw = p.type === "cross" ? 14 : p.type === "dots" ? 10 : 12;
  const tpl = p.type === "diag" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { width: "12", height: "12", fill: p.bg }), /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "12", x2: "12", y2: "0", stroke: p.fg, strokeWidth: "1.5", strokeOpacity: "0.35" })) : p.type === "cross" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { width: "14", height: "14", fill: p.bg }), /* @__PURE__ */ React.createElement("line", { x1: "7", y1: "0", x2: "7", y2: "14", stroke: p.fg, strokeWidth: "1", strokeOpacity: "0.25" }), /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "7", x2: "14", y2: "7", stroke: p.fg, strokeWidth: "1", strokeOpacity: "0.25" })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { width: "10", height: "10", fill: p.bg }), /* @__PURE__ */ React.createElement("circle", { cx: "5", cy: "5", r: "1.5", fill: p.fg, fillOpacity: "0.3" }));
  return /* @__PURE__ */ React.createElement("svg", { width, height, style: { display: "block", flexShrink: 0, borderRadius: radius } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id, patternUnits: "userSpaceOnUse", width: pw, height: pw }, tpl)), /* @__PURE__ */ React.createElement("rect", { width, height, fill: `url(#${id})`, rx: radius }));
}
function ProgressRing({ pct, size = 52, stroke = 4, color, bg }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ * (1 - Math.min(pct, 1));
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, style: { transform: "rotate(-90deg)", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: bg || "rgba(128,128,128,0.2)", strokeWidth: stroke }), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: size / 2,
      cy: size / 2,
      r,
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeDasharray: circ,
      strokeDashoffset: off,
      strokeLinecap: "round",
      style: { transition: "stroke-dashoffset 0.6s ease" }
    }
  ));
}
const IcoFlash = () => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "5", width: "20", height: "14", rx: "3" }), /* @__PURE__ */ React.createElement("line", { x1: "7", y1: "12", x2: "17", y2: "12" }));
const IcoFill = () => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 20h9" }), /* @__PURE__ */ React.createElement("path", { d: "M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" }));
const IcoMC = () => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("polyline", { points: "9 12 11 14 15 10" }));
const IcoMix = () => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 0, width: 20, height: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { transform: "scale(0.42)", transformOrigin: "center" } }, /* @__PURE__ */ React.createElement(IcoFlash, null)), /* @__PURE__ */ React.createElement("div", { style: { transform: "scale(0.42)", transformOrigin: "center" } }, /* @__PURE__ */ React.createElement(IcoMC, null)));
const IcoBook = () => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M4 19.5A2.5 2.5 0 016.5 17H20" }), /* @__PURE__ */ React.createElement("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" }));
const IcoChart = () => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "20", x2: "18", y2: "10" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "20", x2: "12", y2: "4" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "20", x2: "6", y2: "14" }));
const IcoSun = () => /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "5" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), /* @__PURE__ */ React.createElement("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), /* @__PURE__ */ React.createElement("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), /* @__PURE__ */ React.createElement("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), /* @__PURE__ */ React.createElement("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }));
const IcoMoon = () => /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" }));
const ChevL = ({ c = "#999", s = 18 }) => /* @__PURE__ */ React.createElement("svg", { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: c, strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "15 18 9 12 15 6" }));
const ChevR = ({ c = "#999", s = 18 }) => /* @__PURE__ */ React.createElement("svg", { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: c, strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "9 18 15 12 9 6" }));
function TopBar({ label, backLabel, onBack, th, right }) {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 14px", borderBottom: th.border } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 14, padding: 0 } }, /* @__PURE__ */ React.createElement(ChevL, { c: th.subtext }), backLabel), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15, fontWeight: 600, color: th.text } }, label), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 60, display: "flex", justifyContent: "flex-end" } }, right || null)));
}
function useMCState(qs, updateProgress, courseName) {
  const [idx, setIdx] = React.useState(0);
  const [sels, setSels] = React.useState(/* @__PURE__ */ new Set());
  const [confirmed, setConfirmed] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const sessionRef = React.useRef(false);
  const q = qs[idx];
  const isMulti = q.correct.length > 1;
  const isAllCorrect = confirmed && q.correct.length === sels.size && q.correct.every((c) => sels.has(c));
  const toggle = (i) => {
    if (confirmed) return;
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(courseName, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
    setSels((prev) => {
      const next2 = new Set(prev);
      if (isMulti) {
        if (next2.has(i)) next2.delete(i);
        else next2.add(i);
      } else {
        next2.clear();
        next2.add(i);
      }
      return next2;
    });
    if (!isMulti) setConfirmed(true);
  };
  const confirm = () => setConfirmed(true);
  const next = () => {
    const ns = score + (isAllCorrect ? 1 : 0);
    if (idx < qs.length - 1) {
      setIdx((i) => i + 1);
      setSels(/* @__PURE__ */ new Set());
      setConfirmed(false);
      setScore(ns);
    } else {
      updateProgress(courseName, (p) => {
        p.mc.attempts = (p.mc.attempts || 0) + 1;
        p.mc.best = Math.max(p.mc.best || 0, ns);
      });
      setScore(ns);
      setDone(true);
    }
  };
  const reset = () => {
    setIdx(0);
    setSels(/* @__PURE__ */ new Set());
    setConfirmed(false);
    setScore(0);
    setDone(false);
  };
  const optBg = (i, cardBg) => {
    if (!confirmed) return cardBg;
    if (q.correct.includes(i)) return "#4A7C5915";
    if (sels.has(i)) return "#C4892A15";
    return cardBg;
  };
  const optBorder = (i, border) => {
    if (!confirmed) return sels.has(i) ? "1px solid #99999966" : border;
    if (q.correct.includes(i)) return "1px solid #4A7C5960";
    if (sels.has(i)) return "1px solid #C4892A60";
    return border;
  };
  return { idx, q, isMulti, isAllCorrect, sels, confirmed, score, done, toggle, confirm, next, reset, optBg, optBorder };
}
function MCOptionIcon({ i, q, confirmed, sels, isMulti, th }) {
  const isCorrect = q.correct.includes(i);
  const isSelected = sels.has(i);
  const radius = isMulti ? 3 : 13;
  let bg = th.surface, icon = null;
  if (confirmed && isCorrect) {
    bg = "#4A7C59";
    icon = "check";
  } else if (confirmed && isSelected && !isCorrect) {
    bg = "#C4892A";
    icon = "x";
  } else if (!confirmed && isSelected) {
    bg = ACCENT;
  }
  return /* @__PURE__ */ React.createElement("div", { style: { width: 26, height: 26, borderRadius: radius, background: bg, border: !confirmed && !isSelected ? `1px solid ${th.isDark ? "#55555566" : "#CCCCCC"}` : void 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.15s" } }, icon === "check" && /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "#FFF", strokeWidth: "2.5", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" })), icon === "x" && /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "#FFF", strokeWidth: "2.5", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), !icon && isSelected && /* @__PURE__ */ React.createElement("svg", { width: "8", height: "8", viewBox: "0 0 8 8" }, /* @__PURE__ */ React.createElement("circle", { cx: "4", cy: "4", r: "3", fill: "#FFF" })), !icon && !isSelected && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: th.subtext, fontWeight: 600 } }, String.fromCharCode(65 + i)));
}
function CoursesScreen({ th, progress, onSelect, onProgress, toggleTheme, isDark, onMacro }) {
  const [search, setSearch] = React.useState("");
  const accessLevel = typeof window !== "undefined" && window.LA_ACCESS_LEVEL ? String(window.LA_ACCESS_LEVEL).toLowerCase() : "economics";
  const canAccessMacroDiagrams = (accessLevel === "economics" || accessLevel === "admin") && typeof onMacro === "function";
  const filtered = SUBJECTS.filter(
    (s) => search === "" || s.name.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", minHeight: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif", overflowY: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 24px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: th.subtext, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 } }, "Lernapp"), /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 28, fontFamily: "'Playfair Display',serif", fontWeight: 500, color: th.text, lineHeight: 1.2 } }, "Deine F\xE4cher")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: onProgress, style: { display: "flex", alignItems: "center", gap: 5, background: th.surface, border: th.border, borderRadius: 20, padding: "7px 14px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 500, color: th.subtext } }, /* @__PURE__ */ React.createElement(IcoChart, null), " Fortschritt"), /* @__PURE__ */ React.createElement("button", { onClick: toggleTheme, style: { display: "flex", alignItems: "center", justifyContent: "center", background: th.surface, border: th.border, borderRadius: 20, width: 36, height: 36, cursor: "pointer", color: th.subtext } }, isDark ? /* @__PURE__ */ React.createElement(IcoSun, null) : /* @__PURE__ */ React.createElement(IcoMoon, null)))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }, width: "15", height: "15", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "5", stroke: th.subtext, strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("line", { x1: "11", y1: "11", x2: "14.5", y2: "14.5", stroke: th.subtext, strokeWidth: "1.5", strokeLinecap: "round" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: search,
      onChange: (e) => setSearch(e.target.value),
      placeholder: "Fach suchen\u2026",
      style: { width: "100%", height: 42, background: th.input, border: "none", borderRadius: 10, paddingLeft: 40, paddingRight: 16, fontSize: 15, color: th.text, fontFamily: "'DM Sans',sans-serif", outline: "none" }
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 24px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, filtered.map((s, i) => {
    const p = progress[s.name];
    const comp = calcCompletion(s, p);
    const started = comp.overall > 0;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s.name,
        onClick: () => onSelect(s),
        style: { background: th.cardBg, borderRadius: CARD_R, border: th.border, overflow: "hidden", cursor: "pointer", transition: "transform 0.15s" },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-2px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = ""
      },
      /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Thumbnail, { idx: i, width: 200, height: 108, radius: 0 }), started && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 6, right: 6 } }, /* @__PURE__ */ React.createElement(ProgressRing, { pct: comp.overall, size: 28, stroke: 2.5, color: ACCENT, bg: th.isDark ? "#1C1C1Aaa" : "#FAF9F6aa" }))),
      /* @__PURE__ */ React.createElement("div", { style: { padding: "11px 12px 13px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 500, color: th.text, lineHeight: 1.35 } }, s.name), started ? /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: ACCENT, marginTop: 5, fontWeight: 500 } }, Math.round(comp.overall * 100), "% abgeschlossen") : /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 5 } }, s.description || ""))
    );
  }), canAccessMacroDiagrams && /* @__PURE__ */ React.createElement(
    "div",
    {
      key: "__macro",
      onClick: onMacro,
      style: { background: th.cardBg, borderRadius: CARD_R, border: th.border, overflow: "hidden", cursor: "pointer", transition: "transform 0.15s" },
      onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-2px)",
      onMouseLeave: (e) => e.currentTarget.style.transform = ""
    },
    /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: 108, background: "#2563EB22", display: "flex", alignItems: "center", justifyContent: "center" } },
      /* @__PURE__ */ React.createElement("svg", { width: 40, height: 40, viewBox: "0 0 24 24", fill: "none", stroke: "#2563EB", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" },
        /* @__PURE__ */ React.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
      )
    ),
    /* @__PURE__ */ React.createElement("div", { style: { padding: "11px 12px 13px" } },
      /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 500, color: th.text, lineHeight: 1.35 } }, "Makro-Diagramme"),
      /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 5 } }, "Interaktive Modellgrafiken")
    )
  )));
}
function ModesScreen({ course, th, progress, onMode, onBack, onProgress }) {
  const ci = SUBJECTS.findIndex((s) => s.name === course.name);
  const p = progress[course.name];
  const comp = calcCompletion(course, p);
  const topics = getTopics(course);
  const modes = [
    { id: "flashcards", icon: /* @__PURE__ */ React.createElement(IcoFlash, null), label: "Karteikarten", desc: "Fragen & Antworten", color: "#C4892A", count: `${p?.fc?.length || 0}/${(course.kk || []).length}`, pct: comp.fc },
    { id: "flashcards-sr", icon: /* @__PURE__ */ React.createElement(IcoFlash, null), label: "Karteikarten (Wiederholung)", desc: "Abstandswiederholung", color: "#A66C1E", count: "SR", pct: Math.min(1, Object.keys(p?.sr || {}).length / Math.max(1, (course.kk || []).length) * 0.5) },
    { id: "fillblanks", icon: /* @__PURE__ */ React.createElement(IcoFill, null), label: "L\xFCckentext", desc: "L\xFCcken ausf\xFCllen", color: "#4A7C59", count: `${p?.fb?.length || 0}/${(course.lt || []).length}`, pct: comp.fb },
    { id: "mc", icon: /* @__PURE__ */ React.createElement(IcoMC, null), label: "Multiple Choice", desc: "Auswahlfragen", color: ACCENT, count: p?.mc?.attempts ? `Best ${p.mc.best}/${(course.mc || []).length}` : `${(course.mc || []).length} Fragen`, pct: comp.mc },
    { id: "theory-index", icon: /* @__PURE__ */ React.createElement(IcoBook, null), label: getTheoryModeLabel(course), desc: getTheoryModeDescription(course), color: "#8C3A5A", count: `${p?.th?.length || 0}/${getTheoryItems(course).filter((t) => !t.hidden).length}`, pct: comp.th },
    ...(course.pathways || []).length ? [{ id: "pathways", icon: /* @__PURE__ */ React.createElement(IcoBook, null), label: "Stoffwechselwege", desc: "Zuordnen & freie Eingabe (S1 + S2)", color: PW_COLOR, count: comp.pw >= 0.999 ? "\u2713" : `${Math.round(comp.pw * 100)}%`, pct: comp.pw }] : [],
    ...(courseSupportsKkMcMix(course) ? [{ id: "kk-mc-mix", icon: /* @__PURE__ */ React.createElement(IcoMix, null), label: "Gemischt", desc: "Karten und Fragen in zuf\xE4lliger Reihenfolge", color: MIX_COLOR, count: `${(course.kk || []).length} KK + ${(course.mc || []).length} MC`, pct: (comp.fc + comp.mc) / 2 }] : [])
  ].filter((m) => {
    if (m.id === "flashcards" && !(course.kk || []).length) return false;
    if (m.id === "flashcards-sr" && !(course.kk || []).length) return false;
    if (m.id === "fillblanks" && !(course.lt || []).length) return false;
    if (m.id === "mc" && !(course.mc || []).length) return false;
    if (m.id === "theory-index" && !getTheoryItems(course).length) return false;
    if (m.id === "kk-mc-mix" && !courseSupportsKkMcMix(course)) return false;
    return true;
  });
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", minHeight: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif", overflowY: "auto" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 14, padding: "12px 0" } }, /* @__PURE__ */ React.createElement(ChevL, { c: th.subtext }), "Start"), comp.overall > 0 && /* @__PURE__ */ React.createElement("button", { onClick: onProgress, style: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 13, padding: "12px 0" } }, /* @__PURE__ */ React.createElement(IcoChart, null), " Fortschritt")), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 24px 0" } }, /* @__PURE__ */ React.createElement(Thumbnail, { idx: ci, width: "100%", height: 148, radius: CARD_R }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, marginBottom: 10 } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 21, fontFamily: "'Playfair Display',serif", fontWeight: 500, color: th.text, lineHeight: 1.25 } }, course.name), comp.overall > 0 ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 } }, /* @__PURE__ */ React.createElement(ProgressRing, { pct: comp.overall, size: 36, stroke: 3, color: ACCENT, bg: th.surface }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 600, color: th.text } }, Math.round(comp.overall * 100), "% abgeschlossen"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext } }, relTime(p?.lastStudied)))) : /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext, marginTop: 5 } }, course.description || "")), topics.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10, marginBottom: 20 } }, topics.map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: { padding: "4px 11px", borderRadius: 20, background: th.tag, border: th.border, fontSize: 11, color: th.subtext } }, t)))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 24px 40px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, fontWeight: 600, color: th.subtext, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 } }, "Lernmodi"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, modes.map((m, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: m.id,
      onClick: () => onMode(m.id),
      className: "anim-slide",
      style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "transform 0.15s", animationDelay: `${i * 0.05}s` },
      onMouseEnter: (e) => e.currentTarget.style.transform = "translateX(4px)",
      onMouseLeave: (e) => e.currentTarget.style.transform = ""
    },
    /* @__PURE__ */ React.createElement("div", { style: { width: 42, height: 42, borderRadius: 10, background: m.color + "22", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: m.color } }, m.icon),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: th.text } }, m.label), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 1 } }, m.desc), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${Math.min(m.pct, 1) * 100}%`, height: "100%", background: m.color, borderRadius: 2, transition: "width 0.5s" } }))),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: m.pct >= 1 ? "#4A7C59" : m.color, fontWeight: 600, whiteSpace: "nowrap" } }, m.pct >= 1 ? "\u2713 Fertig" : m.count), /* @__PURE__ */ React.createElement(ChevR, { c: th.subtext }))
  )))));
}
function FlashcardsScreen({ course, th, progress, updateProgress, onBack, srMode, onOpenTheory }) {
  const cards = course.kk || [];
  const pathwaysCourse = Array.isArray(course.pathways) && course.pathways.length > 0;
  const isMobile = typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia?.("(pointer: coarse)").matches);
  const pathwaysMobile = pathwaysCourse && isMobile;
  const compact = typeof window !== "undefined" && window.innerWidth <= 430;
  const cardHeight = pathwaysMobile ? compact ? "clamp(220px, 40vh, 420px)" : "clamp(240px, 44vh, 500px)" : compact ? "clamp(250px, 50vh, 520px)" : "clamp(280px, 56vh, 640px)";
  const fcStackStyle = isMobile ? { position: "relative", width: "100%", maxWidth: "100%", flex: 1, minHeight: 0, height: "auto", alignSelf: "stretch", cursor: "pointer", touchAction: "manipulation", WebkitTapHighlightColor: "transparent", boxSizing: "border-box" } : { position: "relative", width: "100%", maxWidth: "100%", flex: 1, minHeight: 0, height: cardHeight, cursor: "pointer", touchAction: "manipulation", WebkitTapHighlightColor: "transparent", boxSizing: "border-box" };
  const [order, setOrder] = React.useState(() => shuffleIndices(cards.length));
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const sessionRef = React.useRef(false);
  const cardRef = React.useRef();
  const p = progress[course.name] || initCP();
  const seen = p?.fc?.length || 0;
  React.useEffect(() => {
    setOrder(shuffleIndices(cards.length));
    setIdx(0);
    setFlipped(false);
    setDone(false);
    sessionRef.current = false;
  }, [course.name, cards.length, srMode]);
  const queue = srMode ? buildSrQueue(course, p) : [];
  const origIdx = srMode ? queue[0] ?? -1 : order[idx];
  const card = origIdx >= 0 ? cards[origIdx] : null;
  const theoryIdx = card ? findTheorySectionIdx(course, card.id) : -1;
  useKaTeX(cardRef, [origIdx, srMode, idx]);
  const onFlashcardStackClick = (e) => {
    if (e.target && typeof e.target.closest === "function" && e.target.closest("a, button, input, textarea, select, label")) return;
    setFlipped((f) => !f);
  };
  const onFlashcardStackKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };
  const markSeen = (i) => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (pp) => {
        pp.sessions = (pp.sessions || 0) + 1;
      });
    }
    updateProgress(course.name, (pp) => {
      if (!pp.fc.includes(i)) pp.fc.push(i);
    });
  };
  const nextLinear = () => {
    markSeen(origIdx);
    if (idx < cards.length - 1) {
      setIdx((i) => i + 1);
      setFlipped(false);
    } else {
      setDone(true);
      setFlipped(false);
    }
  };
  const prevLinear = () => {
    if (idx > 0) {
      setIdx((i) => i - 1);
      setFlipped(false);
    }
  };
  const srRate = (quality) => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (pp) => {
        pp.sessions = (pp.sessions || 0) + 1;
      });
    }
    updateProgress(course.name, (pp) => {
      pp.sr = applySrRating(pp.sr || {}, origIdx, quality);
      if (!pp.fc.includes(origIdx)) pp.fc.push(origIdx);
    });
    setFlipped(false);
  };
  const renderCardText = (text, isAnswer) => {
    if (!text) return null;
    const html = isAnswer ? text.replace(/\n/g, "<br>").replace(/^- /gm, "\u2022 ") : text;
    return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%" }, dangerouslySetInnerHTML: { __html: html } });
  };
  const srEmpty = srMode && queue.length === 0;
  const topLabel = srMode ? "Karten \xB7 Wiederholung" : "Karteikarten";
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", minHeight: 0, background: th.bg, fontFamily: "'DM Sans',sans-serif", display: "flex", flexDirection: "column", overflow: isMobile ? "hidden" : void 0 } }, /* @__PURE__ */ React.createElement(TopBar, { label: topLabel, backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { padding: compact ? "10px 16px 12px" : "12px 24px 18px", flexShrink: isMobile ? 0 : void 0 } }, !srMode && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7, flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, done ? cards.length : idx + 1, " von ", cards.length), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: ACCENT, fontWeight: 500 } }, seen, "/", cards.length, " gesehen"), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setOrder(shuffleIndices(cards.length));
        setIdx(0);
        setFlipped(false);
        setDone(false);
      },
      style: { fontSize: 12, fontWeight: 600, color: th.text, background: th.surface, border: th.border, borderRadius: 8, padding: "5px 10px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Mischen"
  ))), srMode && !srEmpty && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, queue.length, " f\xE4llig"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "#A66C1E", fontWeight: 500 } }, "Abstandswiederholung")), !srMode && /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${(done ? cards.length : idx) / Math.max(cards.length, 1) * 100}%`, height: "100%", background: ACCENT, borderRadius: 2, transition: "width 0.3s" } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", alignItems: isMobile ? "stretch" : "center", padding: compact ? "0 16px 16px" : "0 24px 24px", width: "100%" }, ref: cardRef }, srEmpty ? /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text, fontWeight: 500, textAlign: "center" } }, "Keine Karten f\xE4llig"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: th.subtext, textAlign: "center", maxWidth: 280 } }, "Alle Karten sind gerade eingeplant. Schau sp\xE4ter wieder vorbei oder \xFCbe im normalen Karteikarten-Modus."), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: onBack,
      style: { marginTop: 8, padding: "10px 22px", background: th.cardBg, border: th.border, borderRadius: 10, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", color: th.text }
    },
    "Zur\xFCck"
  )) : done && !srMode ? /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("div", { style: { width: 64, height: 64, borderRadius: "50%", background: ACCENT + "33", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: ACCENT, strokeWidth: "2.2", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" }))), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 24, color: th.text, fontWeight: 500 } }, "Alle durch!"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: th.subtext } }, cards.length, " Karten in dieser Runde."), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setIdx(0);
        setFlipped(false);
        setDone(false);
        setOrder(shuffleIndices(cards.length));
      },
      style: { marginTop: 8, padding: "11px 28px", background: ACCENT, color: "#FFF", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Nochmal"
  )) : card ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "fc-stack", role: "button", tabIndex: 0, "aria-label": "Karte umdrehen", onClick: onFlashcardStackClick, onKeyDown: onFlashcardStackKeyDown, style: fcStackStyle }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: compact ? "16px 16px 12px" : "20px 24px 16px", gap: 8, background: th.cardBg, border: th.border, borderRadius: CARD_R + 4, boxSizing: "border-box", overflow: "hidden", opacity: flipped ? 0 : 1, visibility: flipped ? "hidden" : "visible", pointerEvents: flipped ? "none" : "auto", zIndex: flipped ? 0 : 1, transition: "opacity 0.2s ease" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 } }, "Frage"), card.category && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: th.subtext, flexShrink: 0 } }, card.category), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: isMobile ? "auto" : "auto", WebkitOverflowScrolling: "touch", fontFamily: "'Playfair Display',serif", fontSize: pathwaysMobile ? compact ? 14 : 16 : compact ? 16 : 18, color: th.text, textAlign: "center", lineHeight: pathwaysMobile ? 1.35 : 1.5 } }, renderCardText(card.question_html || card.question, false)), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: th.subtext, marginTop: 4, flexShrink: 0 } }, "Tippen zum Umdrehen")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: compact ? "16px 16px 12px" : "20px 24px 16px", gap: 8, background: ACCENT + "15", border: `1.5px solid ${ACCENT}44`, borderRadius: CARD_R + 4, boxSizing: "border-box", overflow: "hidden", opacity: flipped ? 1 : 0, visibility: flipped ? "visible" : "hidden", pointerEvents: flipped ? "auto" : "none", zIndex: flipped ? 1 : 0, transition: "opacity 0.2s ease" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 } }, "Antwort"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: isMobile ? "auto" : "auto", WebkitOverflowScrolling: "touch", fontSize: pathwaysMobile ? compact ? 12 : 13 : compact ? 14 : 15, color: th.text, textAlign: "center", lineHeight: pathwaysMobile ? 1.45 : 1.65 } }, renderCardText(card.answer_html || card.answer, true)))), theoryIdx >= 0 && onOpenTheory && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: (e) => {
        e.stopPropagation();
        onOpenTheory(theoryIdx);
      },
      style: { marginTop: isMobile ? 8 : 12, alignSelf: "stretch", padding: "10px 14px", background: th.surface, border: th.border, borderRadius: 10, color: "#8C3A5A", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", flexShrink: 0 }
    },
    "\u{1F4D6} Zum Theorie-Abschnitt"
  ), srMode && flipped && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 16, width: "100%", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, textAlign: "center" } }, "Wie gut kanntest du die Antwort?"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: (e) => {
        e.stopPropagation();
        srRate("hard");
      },
      style: { flex: 1, height: 48, background: th.cardBg, border: th.border, borderRadius: 10, color: th.text, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Schwer"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: (e) => {
        e.stopPropagation();
        srRate("good");
      },
      style: { flex: 1, height: 48, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Gut"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: (e) => {
        e.stopPropagation();
        srRate("easy");
      },
      style: { flex: 1, height: 48, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Einfach"
  ))), !srMode && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginTop: isMobile ? 10 : 22, width: "100%", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: prevLinear,
      disabled: idx === 0,
      style: { flex: 1, height: 50, background: th.cardBg, border: th.border, borderRadius: 10, color: idx === 0 ? th.subtext : th.text, fontSize: 14, cursor: idx === 0 ? "default" : "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }
    },
    /* @__PURE__ */ React.createElement(ChevL, { c: idx === 0 ? th.subtext : th.text }),
    " Zur\xFCck"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: nextLinear,
      style: { flex: 1, height: 50, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }
    },
    idx === cards.length - 1 ? "Fertig" : "Weiter",
    " ",
    /* @__PURE__ */ React.createElement(ChevR, { c: "#FFF" })
  ))) : null));
}
function pathwaysPwReducer(state, action) {
  const pathways = action.pathways || state.pathways;
  const pw = pathways[state.idx] || { name: "", reactions: [] };
  const writeScore = (name, patch, updateProgress, courseName) => {
    updateProgress(courseName, (p) => {
      if (!p.pw) p.pw = {};
      p.pw[name] = Object.assign({}, p.pw[name], patch);
    });
  };
  switch (action.type) {
    case "init":
      return { view: "home", idx: 0, pathways, s1: null, s2: null, flash: null };
    case "home":
      return { ...state, view: "home", s1: null, s2: null, flash: null };
    case "start_s1": {
      const i = action.idx;
      const p = pathways[i];
      return {
        ...state,
        idx: i,
        view: "s1",
        flash: null,
        s1: {
          pool: buildPathwayPool(p.reactions).map((x) => ({ ...x })),
          slots: initPathwayS1Slots(p.reactions).map((row) => row.map((s) => ({ ...s }))),
          row: 0,
          done: [],
          hint: [],
          sel: null
        },
        s2: null
      };
    }
    case "s1_select": {
      if (state.view !== "s1" || !state.s1) return state;
      const g = action.gidx;
      const pool = state.s1.pool.map((p) => ({ ...p }));
      const item = pool.find((p) => p.gidx === g);
      if (!item || item.used) return state;
      const sel = state.s1.sel === g ? null : g;
      return { ...state, s1: { ...state.s1, sel } };
    }
    case "s1_slot": {
      if (state.view !== "s1" || !state.s1) return state;
      const { ri, flatIdx } = action;
      const s1 = state.s1;
      if (ri !== s1.row || s1.done.includes(ri)) return state;
      const slots = s1.slots.map((r) => r.map((s) => ({ ...s })));
      const pool = s1.pool.map((p) => ({ ...p }));
      const row = slots[ri];
      const slot = row[flatIdx];
      if (slot.gidx != null) {
        const pi2 = pool.find((p) => p.gidx === slot.gidx);
        if (pi2) pi2.used = false;
        row[flatIdx] = { ...slot, gidx: null };
        return { ...state, s1: { ...s1, pool, slots, sel: null } };
      }
      if (s1.sel == null) return state;
      const pi = pool.find((p) => p.gidx === s1.sel);
      if (pi) pi.used = true;
      row[flatIdx] = { ...slot, gidx: s1.sel };
      const newS1 = { ...s1, pool, slots, sel: null };
      if (!row.every((s) => s.gidx != null)) return { ...state, s1: newS1 };
      const rxn = pw.reactions[ri];
      const placedSubs = row.filter((s) => s.type === "sub").map((s) => pool.find((p) => p.gidx === s.gidx)?.text || "");
      const enzS = row.find((s) => s.type === "enz");
      const placedEnz = pool.find((p) => p.gidx === enzS.gidx)?.text || "";
      const placedProds = row.filter((s) => s.type === "prod").map((s) => pool.find((p) => p.gidx === s.gidx)?.text || "");
      const ok = pathwayNormArrMatch(placedSubs, rxn.substrates) && pathwayNormalize(placedEnz) === pathwayNormalize(rxn.enzyme) && pathwayNormArrMatch(placedProds, rxn.products);
      if (ok) {
        const done = [...s1.done, ri].sort((a, b) => a - b);
        const cc = done.filter((r) => !s1.hint.includes(r)).length;
        writeScore(pw.name, { s1: [cc, done.length] }, action.updateProgress, action.courseName);
        if (ri < pw.reactions.length - 1) return { ...state, s1: { ...newS1, done, row: ri + 1 } };
        return { ...state, view: "s1done", s1: { ...newS1, done } };
      }
      return { ...state, s1: newS1, flash: { kind: "s1", ri } };
    }
    case "s1_clear_flash": {
      if (!state.s1 || !state.flash || state.flash.kind !== "s1") return state;
      const ri = state.flash.ri;
      const slots = state.s1.slots.map((r, rj) => {
        if (rj !== ri) return r.map((s) => ({ ...s }));
        return r.map((s) => ({ ...s, gidx: null }));
      });
      const pool = state.s1.pool.map((p) => ({ ...p, used: false }));
      return { ...state, flash: null, s1: { ...state.s1, slots, pool, sel: null } };
    }
    case "s1_hint": {
      if (state.view !== "s1" || !state.s1) return state;
      const ri = state.s1.row;
      if (state.s1.done.includes(ri)) return state;
      const rxn = pw.reactions[ri];
      const pool = state.s1.pool.map((p) => ({ ...p }));
      const slots = state.s1.slots.map((r) => r.map((s) => ({ ...s })));
      const row = slots[ri];
      row.forEach((slot) => {
        let ct;
        if (slot.type === "sub") ct = rxn.substrates[slot.idx];
        else if (slot.type === "enz") ct = rxn.enzyme;
        else ct = rxn.products[slot.idx];
        const pi = pool.find((p) => !p.used && pathwayNormalize(p.text) === pathwayNormalize(ct));
        if (pi) {
          slot.gidx = pi.gidx;
          pi.used = true;
        }
      });
      const hint = [...state.s1.hint, ri];
      const done = [...state.s1.done, ri].sort((a, b) => a - b);
      const cc = done.filter((r) => !hint.includes(r)).length;
      writeScore(pw.name, { s1: [cc, done.length] }, action.updateProgress, action.courseName);
      if (ri < pw.reactions.length - 1) return { ...state, s1: { ...state.s1, pool, slots, hint, done, row: ri + 1, sel: null } };
      return { ...state, view: "s1done", s1: { ...state.s1, pool, slots, hint, done, sel: null } };
    }
    case "start_s2": {
      const i = state.idx;
      const p = pathways[i];
      const vals = {};
      p.reactions.forEach((rxn, ri) => {
        rxn.substrates.forEach((_, si) => {
          vals[`${ri}-sub-${si}`] = "";
        });
        vals[`${ri}-enz-0`] = "";
        rxn.products.forEach((_, pi) => {
          vals[`${ri}-prod-${pi}`] = "";
        });
      });
      return { ...state, view: "s2", s2: { row: 0, done: [], hint: [], vals }, flash: null };
    }
    case "s2_change": {
      if (!state.s2) return state;
      return { ...state, s2: { ...state.s2, vals: { ...state.s2.vals, [action.key]: action.val } } };
    }
    case "s2_check": {
      if (state.view !== "s2" || !state.s2) return state;
      const ri = state.s2.row;
      if (state.s2.done.includes(ri)) return state;
      const rxn = pw.reactions[ri];
      const v = state.s2.vals;
      const subs = rxn.substrates.map((_, si) => (v[`${ri}-sub-${si}`] || "").trim());
      const enz = (v[`${ri}-enz-0`] || "").trim();
      const prods = rxn.products.map((_, pi) => (v[`${ri}-prod-${pi}`] || "").trim());
      const ok = pathwayNormArrMatch(subs, rxn.substrates) && pathwayNormalize(enz) === pathwayNormalize(rxn.enzyme) && pathwayNormArrMatch(prods, rxn.products);
      if (ok) {
        const done = [...state.s2.done, ri].sort((a, b) => a - b);
        const cc = done.filter((r) => !state.s2.hint.includes(r)).length;
        writeScore(pw.name, { s2: [cc, done.length] }, action.updateProgress, action.courseName);
        if (ri < pw.reactions.length - 1) return { ...state, s2: { ...state.s2, done, row: ri + 1 } };
        return { ...state, view: "s2done", s2: { ...state.s2, done } };
      }
      return { ...state, flash: { kind: "s2", ri } };
    }
    case "s2_hint": {
      if (state.view !== "s2" || !state.s2) return state;
      const ri = state.s2.row;
      if (state.s2.done.includes(ri)) return state;
      const rxn = pw.reactions[ri];
      const vals = { ...state.s2.vals };
      rxn.substrates.forEach((t, si) => {
        vals[`${ri}-sub-${si}`] = t;
      });
      vals[`${ri}-enz-0`] = rxn.enzyme;
      rxn.products.forEach((t, pi) => {
        vals[`${ri}-prod-${pi}`] = t;
      });
      const hint = [...state.s2.hint, ri];
      const done = [...state.s2.done, ri].sort((a, b) => a - b);
      const cc = done.filter((r) => !hint.includes(r)).length;
      writeScore(pw.name, { s2: [cc, done.length] }, action.updateProgress, action.courseName);
      if (ri < pw.reactions.length - 1) return { ...state, s2: { ...state.s2, vals, hint, done, row: ri + 1 } };
      return { ...state, view: "s2done", s2: { ...state.s2, vals, hint, done } };
    }
    case "final":
      return { ...state, view: "final" };
    case "s2_clear_flash":
      return { ...state, flash: null };
    case "noop":
      return state;
    default:
      return state;
  }
}
function PathwaysScreen({ course, th, progress, updateProgress, onBack, hideTopBar }) {
  const pathways = course.pathways || [];
  const isMobile = typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia?.("(pointer: coarse)").matches);
  const sessionRef = React.useRef(false);
  const bumpSession = () => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
  };
  const [st, dispatch] = React.useReducer(pathwaysPwReducer, pathways, (p) => ({
    view: "home",
    idx: 0,
    pathways: p,
    s1: null,
    s2: null,
    flash: null
  }));
  React.useEffect(() => {
    if (!st.flash || st.flash.kind !== "s1") return void 0;
    const t = setTimeout(() => dispatch({ type: "s1_clear_flash", pathways, updateProgress, courseName: course.name }), 1500);
    return () => clearTimeout(t);
  }, [st.flash, pathways, course.name, updateProgress]);
  React.useEffect(() => {
    if (!st.flash || st.flash.kind !== "s2") return void 0;
    const t = setTimeout(() => dispatch({ type: "s2_clear_flash" }), 1600);
    return () => clearTimeout(t);
  }, [st.flash]);
  if (!pathways.length) {
    return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, display: "flex", flexDirection: "column", fontFamily: "'DM Sans',sans-serif" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "Stoffwechselwege", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: th.subtext, fontSize: 14 } }, "Keine Stoffwechselwege in den Fachdaten."));
  }
  const pw = pathways[st.idx] || pathways[0];
  const pwStore = progress[course.name] && progress[course.name].pw || {};
  const btnG = {
    padding: "9px 14px",
    borderRadius: 10,
    border: th.border,
    background: th.cardBg,
    color: th.text,
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "'DM Sans',sans-serif"
  };
  const btnP = (bg) => ({
    padding: "9px 16px",
    borderRadius: 10,
    border: "none",
    background: bg,
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans',sans-serif"
  });
  const pBar = (cur, tot) => /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2, marginTop: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${tot ? cur / tot * 100 : 0}%`, height: "100%", background: PW_COLOR, borderRadius: 2, transition: "width 0.35s" } }));
  const renderS1 = () => {
    const s1 = st.s1;
    if (!s1) return null;
    const poolOuterStyle = isMobile ? { borderTop: th.border, padding: "10px 14px", background: th.surface, flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" } : { borderTop: th.border, padding: "10px 14px", background: th.surface };
    const poolChipBoxStyle = isMobile ? { display: "flex", flexWrap: "wrap", gap: 6, flex: 1, minHeight: 0, maxHeight: "none", overflowY: "auto", alignContent: "flex-start", paddingRight: 2 } : { display: "flex", flexWrap: "wrap", gap: 6, maxHeight: "min(32vh, 240px)", minHeight: "min(18vh, 140px)", overflowY: "auto", alignContent: "flex-start", paddingRight: 2 };
    const total = pw.reactions.length;
    const done = s1.done.length;
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", minHeight: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, "Stufe 1 \xB7 ", done, "/", total), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: PW_COLOR, fontWeight: 600 } }, pw.name)), pBar(done, total)), /* @__PURE__ */ React.createElement("div", { style: { flex: isMobile ? "2 1 0" : "1 1 0", minHeight: 0, overflowY: "auto", padding: "10px 20px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, fontWeight: 600, color: th.subtext, marginBottom: 8 } }, "# \xB7 Substrate \u2192 Enzym \u2192 Produkte"), pw.reactions.map((rxn, ri) => {
      const rowDone = s1.done.includes(ri);
      const active = ri === s1.row && !rowDone;
      const rowSlots = s1.slots[ri] || [];
      let fi = 0;
      const bits = [];
      const pushSlot = (key, slot, isEnz) => {
        const myFlat = fi;
        fi++;
        const filled = slot.gidx != null ? s1.pool.find((p) => p.gidx === slot.gidx) : null;
        bits.push(
          /* @__PURE__ */ React.createElement(
            "button",
            {
              type: "button",
              key,
              onClick: () => {
                bumpSession();
                dispatch({ type: "s1_slot", ri, flatIdx: myFlat, pathways, updateProgress, courseName: course.name });
              },
              style: {
                minWidth: isEnz ? 150 : 104,
                padding: "6px 8px",
                borderRadius: 6,
                border: st.flash && st.flash.kind === "s1" && st.flash.ri === ri && active ? "1px solid #c2410c" : `1px solid ${active ? PW_COLOR : th.isDark ? "#444" : "#ddd"}`,
                background: rowDone ? th.isDark ? "#1a2e1f" : "#ecfdf3" : th.surface,
                color: th.text,
                fontSize: 12,
                cursor: rowDone ? "default" : "pointer",
                fontFamily: "'DM Sans',sans-serif"
              }
            },
            filled ? filled.text : "\xB7\xB7\xB7"
          )
        );
      };
      rxn.substrates.forEach((_, si) => {
        if (si) bits.push(/* @__PURE__ */ React.createElement("span", { key: `+${ri}s${si}`, style: { color: th.subtext } }, "+"));
        pushSlot(`s${ri}-${si}`, rowSlots[fi], false);
      });
      bits.push(/* @__PURE__ */ React.createElement("span", { key: `a${ri}`, style: { margin: "0 6px", color: th.subtext } }, "\u2192"));
      pushSlot(`e${ri}`, rowSlots[fi], true);
      bits.push(/* @__PURE__ */ React.createElement("span", { key: `b${ri}`, style: { margin: "0 6px", color: th.subtext } }, "\u2192"));
      rxn.products.forEach((_, pi) => {
        if (pi) bits.push(/* @__PURE__ */ React.createElement("span", { key: `+${ri}p${pi}`, style: { color: th.subtext } }, "+"));
        pushSlot(`p${ri}-${pi}`, rowSlots[fi], false);
      });
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: ri,
          style: {
            borderRadius: 8,
            border: th.border,
            marginBottom: 8,
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            opacity: rowDone ? 1 : active ? 1 : 0.55,
            background: rowDone ? th.isDark ? "#1a2e1f" : "#ecfdf3" : active ? PW_COLOR + (th.isDark ? "22" : "18") : th.cardBg
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: th.subtext } }, ri + 1, "."),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 } }, bits)
      );
    })), /* @__PURE__ */ React.createElement("div", { style: poolOuterStyle }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 10, color: th.subtext, marginBottom: 6, flexShrink: 0 } }, "Terme"), /* @__PURE__ */ React.createElement("div", { style: poolChipBoxStyle }, s1.pool.map((it) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: it.gidx,
        type: "button",
        disabled: it.used,
        onClick: () => {
          bumpSession();
          dispatch({ type: "s1_select", gidx: it.gidx });
        },
        style: {
          ...btnG,
          border: s1.sel === it.gidx ? "none" : th.border,
          background: s1.sel === it.gidx ? PW_COLOR : it.used ? th.surface : th.cardBg,
          color: s1.sel === it.gidx ? "#fff" : it.used ? th.subtext : th.text,
          opacity: it.used ? 0.45 : 1
        }
      },
      it.text
    )))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, padding: "12px 14px 18px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "home" }) }, "\u2630 Men\xFC"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => {
      bumpSession();
      dispatch({ type: "start_s1", idx: st.idx, pathways, updateProgress, courseName: course.name });
    } }, "\u21BA Reset"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => {
      bumpSession();
      dispatch({ type: "s1_hint", pathways, updateProgress, courseName: course.name });
    } }, "\u{1F4A1} L\xF6sung"), s1.done.includes(pw.reactions.length - 1) && /* @__PURE__ */ React.createElement("button", { type: "button", style: btnP(PW_COLOR), onClick: () => dispatch({ type: "start_s2", pathways, updateProgress, courseName: course.name }) }, "\u25B6 Stufe 2")));
  };
  const renderS2 = () => {
    const s2 = st.s2;
    if (!s2) return null;
    const total = pw.reactions.length;
    const done = s2.done.length;
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", minHeight: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, "Stufe 2 \xB7 ", done, "/", total), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: PW_COLOR, fontWeight: 600 } }, pw.name)), pBar(done, total)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflowY: "auto", padding: "10px 20px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, fontWeight: 600, color: th.subtext, marginBottom: 8 } }, "# \xB7 Eingabe"), pw.reactions.map((rxn, ri) => {
      const rowDone = s2.done.includes(ri);
      const active = ri === s2.row && !rowDone;
      const bits = [];
      const inp = (key, w) => /* @__PURE__ */ React.createElement(
        "input",
        {
          key,
          value: s2.vals[key] || "",
          disabled: !active || rowDone,
          onChange: (e) => dispatch({ type: "s2_change", key, val: e.target.value }),
          onKeyDown: (e) => {
            if (e.key === "Enter" && active) dispatch({ type: "s2_check", pathways, updateProgress, courseName: course.name });
          },
          style: {
            width: w,
            padding: "6px 8px",
            borderRadius: 6,
            border: st.flash && st.flash.kind === "s2" && st.flash.ri === ri ? "1px solid #c2410c" : `1px solid ${th.isDark ? "#555" : "#ccc"}`,
            background: rowDone ? th.isDark ? "#1a2e1f" : "#ecfdf3" : th.input,
            color: th.text,
            fontSize: 12,
            fontFamily: "'DM Sans',sans-serif"
          }
        }
      );
      rxn.substrates.forEach((_, si) => {
        if (si) bits.push(/* @__PURE__ */ React.createElement("span", { key: `+${ri}s${si}`, style: { color: th.subtext } }, "+"));
        bits.push(inp(`${ri}-sub-${si}`, 96));
      });
      bits.push(/* @__PURE__ */ React.createElement("span", { key: `ar${ri}`, style: { margin: "0 6px", color: th.subtext } }, "\u2192"));
      bits.push(inp(`${ri}-enz-0`, 132));
      bits.push(/* @__PURE__ */ React.createElement("span", { key: `br${ri}`, style: { margin: "0 6px", color: th.subtext } }, "\u2192"));
      rxn.products.forEach((_, pi) => {
        if (pi) bits.push(/* @__PURE__ */ React.createElement("span", { key: `+${ri}p${pi}`, style: { color: th.subtext } }, "+"));
        bits.push(inp(`${ri}-prod-${pi}`, 96));
      });
      return /* @__PURE__ */ React.createElement("div", { key: ri, style: { borderRadius: 8, border: th.border, marginBottom: 8, padding: "8px 10px", display: "flex", alignItems: "center", gap: 6, opacity: rowDone ? 1 : active ? 1 : 0.55, background: th.cardBg } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: th.subtext } }, ri + 1, "."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" } }, bits));
    })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, padding: "12px 14px 18px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "home" }) }, "\u2630 Men\xFC"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "start_s2", pathways, updateProgress, courseName: course.name }) }, "\u21BA Reset"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "s2_hint", pathways, updateProgress, courseName: course.name }) }, "\u{1F4A1} L\xF6sung"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnP(PW_COLOR), onClick: () => dispatch({ type: "s2_check", pathways, updateProgress, courseName: course.name }) }, "\u2713 Pr\xFCfen"), s2.done.includes(pw.reactions.length - 1) && /* @__PURE__ */ React.createElement("button", { type: "button", style: btnP("#0d9488"), onClick: () => dispatch({ type: "final" }) }, "\u{1F4CA} Gesamt")));
  };
  let main = null;
  if (st.view === "home") {
    main = /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, padding: "12px 20px 24px", overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: th.subtext, marginBottom: 14, flexShrink: 0 } }, pathways.length, " Wege \xB7 Fortschritt wird in \u201EMein Fortschritt\u201C mitgez\xE4hlt."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, flex: 1, minHeight: 0, overflowY: "auto" } }, pathways.map((p, i) => {
      const sc = pwStore[p.name] || {};
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: p.name,
          type: "button",
          onClick: () => {
            bumpSession();
            dispatch({ type: "start_s1", idx: i, pathways, updateProgress, courseName: course.name });
          },
          style: { textAlign: "left", background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "14px 16px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: th.text } }, p.name), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 4 } }, p.reactions.length, " Reaktionen")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: PW_COLOR, fontWeight: 600, textAlign: "right" } }, sc.s1 ? `S1 ${sc.s1[0]}/${sc.s1[1]}` : "S1 \u2014", /* @__PURE__ */ React.createElement("br", null), sc.s2 ? `S2 ${sc.s2[0]}/${sc.s2[1]}` : "S2 \u2014")),
        /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: {
          width: `${(() => {
            const a = (sc.s1 && sc.s1[1] ? sc.s1[0] / sc.s1[1] : 0) + (sc.s2 && sc.s2[1] ? sc.s2[0] / sc.s2[1] : 0);
            const n = (sc.s1 && sc.s1[1] ? 1 : 0) + (sc.s2 && sc.s2[1] ? 1 : 0);
            return n ? a / n * 100 : 0;
          })()}%`,
          height: "100%",
          background: PW_COLOR,
          borderRadius: 2
        } }))
      );
    })));
  } else if (st.view === "s1") {
    main = renderS1();
  } else if (st.view === "s1done") {
    const sc = pwStore[pw.name] && pwStore[pw.name].s1;
    const correct = sc ? sc[0] : 0;
    const total = sc ? sc[1] : pw.reactions.length;
    const pct = total ? correct / total : 0;
    main = /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 40, marginBottom: 8 } }, "\u{1F389}"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text } }, "Stufe 1 abgeschlossen"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 26, fontWeight: 700, color: pct >= 1 ? "#16a34a" : pct >= 0.5 ? PW_COLOR : "#c2410c", margin: "12px 0" } }, correct, " / ", total), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 300, marginTop: 12 } }, /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "home" }) }, "\u2630 Men\xFC"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => {
      bumpSession();
      dispatch({ type: "start_s1", idx: st.idx, pathways, updateProgress, courseName: course.name });
    } }, "\u21BA Nochmal"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnP(PW_COLOR), onClick: () => dispatch({ type: "start_s2", pathways, updateProgress, courseName: course.name }) }, "\u25B6 Weiter zu Stufe 2")));
  } else if (st.view === "s2") {
    main = renderS2();
  } else if (st.view === "s2done") {
    const sc = pwStore[pw.name] && pwStore[pw.name].s2;
    const correct = sc ? sc[0] : 0;
    const total = sc ? sc[1] : pw.reactions.length;
    const pct = total ? correct / total : 0;
    main = /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 40, marginBottom: 8 } }, "\u{1F3C6}"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text } }, "Stufe 2 abgeschlossen"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 26, fontWeight: 700, color: pct >= 1 ? "#16a34a" : pct >= 0.5 ? PW_COLOR : "#c2410c", margin: "12px 0" } }, correct, " / ", total), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 300, marginTop: 12 } }, /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "home" }) }, "\u2630 Men\xFC"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnG, onClick: () => dispatch({ type: "start_s2", pathways, updateProgress, courseName: course.name }) }, "\u21BA Nochmal"), /* @__PURE__ */ React.createElement("button", { type: "button", style: btnP("#0d9488"), onClick: () => dispatch({ type: "final" }) }, "\u{1F4CA} Gesamtauswertung")));
  } else if (st.view === "final") {
    let totC = 0;
    let totT = 0;
    pathways.forEach((p) => {
      const sc = pwStore[p.name] || {};
      if (sc.s1 && sc.s1[1]) {
        totC += sc.s1[0];
        totT += sc.s1[1];
      }
      if (sc.s2 && sc.s2[1]) {
        totC += sc.s2[0];
        totT += sc.s2[1];
      }
    });
    main = /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden", padding: "12px 20px 24px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 600, color: th.text, marginBottom: 12 } }, "\xDCberblick"), isElisabethPathwaysCelebrationUser() && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16, borderRadius: CARD_R, overflow: "hidden", border: th.border, background: th.cardBg } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: ELISABETH_PATHWAYS_IMG,
        alt: "Stoffwechsel fertig",
        style: { width: "100%", maxHeight: 360, objectFit: "cover", display: "block" }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, pathways.map((p) => {
      const sc = pwStore[p.name] || {};
      return /* @__PURE__ */ React.createElement("div", { key: p.name, style: { background: th.surface, border: th.border, borderRadius: CARD_R, padding: "12px 14px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 600, color: th.text } }, p.name), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: th.subtext, marginTop: 6 } }, "S1: ", sc.s1 ? `${sc.s1[0]}/${sc.s1[1]}` : "\u2014", " \xB7 S2: ", sc.s2 ? `${sc.s2[0]}/${sc.s2[1]}` : "\u2014"));
    })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, padding: 16, background: th.cardBg, border: th.border, borderRadius: CARD_R, textAlign: "center" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext } }, "Gesamtpunktzahl (S1 + S2)"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 24, fontWeight: 700, color: PW_COLOR, marginTop: 4 } }, totT ? `${totC} / ${totT}` : "\u2014")), /* @__PURE__ */ React.createElement("button", { type: "button", style: { ...btnG, marginTop: 16, width: "100%" }, onClick: () => dispatch({ type: "home" }) }, "\u2190 Zur\xFCck"));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, display: "flex", flexDirection: "column", fontFamily: "'DM Sans',sans-serif", minHeight: 0, overflow: isMobile ? "hidden" : void 0 } }, !hideTopBar && /* @__PURE__ */ React.createElement(TopBar, { label: "Stoffwechselwege", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", paddingTop: hideTopBar ? 14 : 0, overflow: isMobile ? "hidden" : void 0 } }, main));
}
function FillBlanksScreen({ course, th, progress, updateProgress, onBack }) {
  const exercises = React.useMemo(() => (course.lt || []).map(parseLtItem), [course]);
  const [page, setPage] = React.useState(0);
  const [allAns, setAllAns] = React.useState(() => exercises.map((e) => e.blanks.map(() => "")));
  const [checked, setChecked] = React.useState(false);
  const sessionRef = React.useRef(false);
  const ex = exercises[page];
  const ans = allAns[page];
  const p = progress[course.name];
  if (!exercises.length) return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "L\xFCckentext", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("p", { style: { color: th.subtext, fontSize: 14 } }, "Keine L\xFCckentext-Aufgaben verf\xFCgbar.")));
  const setAns = (bi, val) => {
    setAllAns((a) => {
      const n = a.map((r) => [...r]);
      n[page][bi] = val;
      return n;
    });
    setChecked(false);
  };
  const isOk = (bi) => ans[bi].trim().toLowerCase() === ex.blanks[bi].toLowerCase();
  const allOk = ex.blanks.every((_, bi) => isOk(bi));
  const doCheck = () => {
    setChecked(true);
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p2) => {
        p2.sessions = (p2.sessions || 0) + 1;
      });
    }
    if (allOk) updateProgress(course.name, (p2) => {
      if (!p2.fb.includes(page)) p2.fb.push(page);
    });
  };
  const renderText = () => {
    let bi = 0;
    const parts = ex.text.split(/\{[^}]+\}/);
    const result = [];
    parts.forEach((part, pi) => {
      result.push(/* @__PURE__ */ React.createElement("span", { key: `p${pi}` }, part));
      if (pi < parts.length - 1) {
        const bIdx = bi++;
        const ok = checked ? isOk(bIdx) : null;
        result.push(
          /* @__PURE__ */ React.createElement(
            "input",
            {
              key: `b${pi}`,
              value: ans[bIdx],
              onChange: (e) => setAns(bIdx, e.target.value),
              style: { display: "inline-block", width: 118, height: 30, background: th.surface, border: `1.5px solid ${checked ? ok ? "#4A7C59" : ACCENT : "#99999955"}`, borderRadius: 6, color: checked ? ok ? "#4A7C59" : ACCENT : th.text, fontSize: 14, textAlign: "center", margin: "0 3px", fontFamily: "'DM Sans',sans-serif", verticalAlign: "middle", outline: "none" }
            }
          )
        );
      }
    });
    return result;
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "L\xFCckentext", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 24px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, "Aufgabe ", page + 1, " von ", exercises.length), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "#4A7C59", fontWeight: 500 } }, p?.fb?.length || 0, "/", exercises.length, " erledigt")), /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${page / exercises.length * 100}%`, height: "100%", background: "#4A7C59", borderRadius: 2, transition: "width 0.3s" } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" }, key: page, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 2, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, fontWeight: 600, color: "#4A7C59", textTransform: "uppercase", letterSpacing: "0.07em" } }, "L\xFCckentext"), ex.question && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext, fontWeight: 500 } }, ex.question), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 16, color: th.text, lineHeight: 2.1 } }, renderText()), checked && /* @__PURE__ */ React.createElement("div", { style: { padding: "13px 16px", borderRadius: 10, background: allOk ? "#4A7C5915" : ACCENT + "12", border: `1px solid ${allOk ? "#4A7C5940" : ACCENT + "33"}` }, className: "anim-pop" }, allOk ? /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: "#4A7C59", fontWeight: 500 } }, "\u2713 Richtig! Gut gemacht.") : /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: ACCENT } }, "\u2717 L\xF6sung: ", /* @__PURE__ */ React.createElement("strong", null, ex.blanks.join(", "))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, paddingBottom: 28 } }, page > 0 && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setPage((p2) => p2 - 1);
        setChecked(false);
      },
      style: { height: 50, padding: "0 16px", background: th.cardBg, border: th.border, borderRadius: 10, color: th.subtext, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", gap: 4 }
    },
    /* @__PURE__ */ React.createElement(ChevL, { c: th.subtext }),
    "Zur\xFCck"
  ), !checked && /* @__PURE__ */ React.createElement("button", { onClick: doCheck, style: { flex: 1, height: 50, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Pr\xFCfen"), checked && page < exercises.length - 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setPage((p2) => p2 + 1);
    setChecked(false);
  }, style: { flex: 1, height: 50, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "N\xE4chste \u2192"), checked && page === exercises.length - 1 && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setPage(0);
        setAllAns(exercises.map((e) => e.blanks.map(() => "")));
        setChecked(false);
      },
      style: { flex: 1, height: 50, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Von vorne"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setAllAns((a) => {
          const n = a.map((r) => [...r]);
          n[page] = ex.blanks.map(() => "");
          return n;
        });
        setChecked(false);
      },
      style: { height: 50, padding: "0 14px", background: "transparent", border: th.border, borderRadius: 10, color: th.subtext, fontSize: 13, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Reset"
  ))));
}
function KkMcMixScreen({ course, th, progress, updateProgress, onBack, onOpenTheory }) {
  const cards = course.kk || [];
  const qs = React.useMemo(() => (course.mc || []).map(normalizeMc), [course]);
  const kkLen = cards.length;
  const mcLen = qs.length;
  const [roundKey, setRoundKey] = React.useState(0);
  const plan = React.useMemo(() => buildKkMcMixPlan(kkLen, mcLen), [kkLen, mcLen, roundKey]);
  const [pos, setPos] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [mcSels, setMcSels] = React.useState(() => /* @__PURE__ */ new Set());
  const [mcConfirmed, setMcConfirmed] = React.useState(false);
  const sessionRef = React.useRef(false);
  const cardRef = React.useRef();
  const mcCorrectRef = React.useRef(0);
  const compact = typeof window !== "undefined" && window.innerWidth <= 430;
  const totalSteps = plan.length;
  const done = pos >= totalSteps;
  const step = !done ? plan[pos] : null;
  const kkCard = step && step.kind === "kk" ? cards[step.idx] : null;
  const mcQ = step && step.kind === "mc" ? qs[step.idx] : null;
  const hasImageOptions = mcUsesImageOptions(mcQ);
  const theoryIdx = kkCard ? findTheorySectionIdx(course, kkCard.id) : -1;
  const isMulti = mcQ && mcQ.correct.length > 1;
  const isAllCorrect = !!(mcQ && mcConfirmed && mcQ.correct.length === mcSels.size && mcQ.correct.every((c) => mcSels.has(c)));
  React.useEffect(() => {
    setPos(0);
    setFlipped(false);
    setMcSels(/* @__PURE__ */ new Set());
    setMcConfirmed(false);
    sessionRef.current = false;
    mcCorrectRef.current = 0;
  }, [roundKey]);
  React.useEffect(() => {
    setFlipped(false);
    setMcSels(/* @__PURE__ */ new Set());
    setMcConfirmed(false);
  }, [pos]);
  useKaTeX(cardRef, [pos, step?.kind, flipped, mcConfirmed, roundKey, totalSteps]);
  const bumpSession = () => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
  };
  const markKkSeen = (i) => {
    bumpSession();
    updateProgress(course.name, (pp) => {
      if (!pp.fc.includes(i)) pp.fc.push(i);
    });
  };
  const finishMcRoundStats = (mcRight) => {
    updateProgress(course.name, (p) => {
      p.mc = p.mc || { best: 0, attempts: 0 };
      p.mc.attempts = (p.mc.attempts || 0) + 1;
      p.mc.best = Math.max(p.mc.best || 0, mcRight);
    });
  };
  const advanceKk = () => {
    if (!step || step.kind !== "kk") return;
    markKkSeen(step.idx);
    if (pos + 1 >= totalSteps) {
      finishMcRoundStats(mcCorrectRef.current);
      setPos(totalSteps);
    } else setPos((p) => p + 1);
    setFlipped(false);
  };
  const mcToggle = (i) => {
    if (!mcQ || mcConfirmed) return;
    bumpSession();
    setMcSels((prev) => {
      const next2 = /* @__PURE__ */ new Set(prev);
      if (isMulti) {
        if (next2.has(i)) next2.delete(i);
        else next2.add(i);
      } else {
        next2.clear();
        next2.add(i);
      }
      return next2;
    });
    if (!isMulti) setMcConfirmed(true);
  };
  const mcAdvance = () => {
    if (!step || step.kind !== "mc" || !mcConfirmed || !mcQ) return;
    const ok = mcQ.correct.length === mcSels.size && mcQ.correct.every((c) => mcSels.has(c));
    if (ok) mcCorrectRef.current++;
    if (pos + 1 >= totalSteps) {
      finishMcRoundStats(mcCorrectRef.current);
      setPos(totalSteps);
    } else setPos((p) => p + 1);
  };
  const mcOptBg = (i, cardBg) => {
    if (!mcQ || !mcConfirmed) return cardBg;
    if (mcQ.correct.includes(i)) return "#4A7C5915";
    if (mcSels.has(i)) return "#C4892A15";
    return cardBg;
  };
  const mcOptBorder = (i, border) => {
    if (!mcQ || !mcConfirmed) return mcSels.has(i) ? "1px solid #99999966" : border;
    if (mcQ.correct.includes(i)) return "1px solid #4A7C5960";
    if (mcSels.has(i)) return "1px solid #C4892A60";
    return border;
  };
  const renderCardText = (text, isAnswer) => {
    if (!text) return null;
    const html = isAnswer ? String(text).replace(/\n/g, "<br>").replace(/^- /gm, "\u2022 ") : String(text);
    return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%" }, dangerouslySetInnerHTML: { __html: html } });
  };
  if (!kkLen || !mcLen) {
    return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "Gemischt", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("p", { style: { color: th.subtext, fontSize: 14 } }, "F\xFCr den Mix-Modus werden Karteikarten und MC-Eintr\xE4ge ben\xF6tigt.")));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "Gemischt", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { padding: compact ? "8px 16px 10px" : "10px 24px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, done ? "Runde fertig" : `Schritt ${pos + 1} von ${totalSteps}`)), /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${done ? 100 : totalSteps ? pos / totalSteps * 100 : 0}%`, height: "100%", background: MIX_COLOR, borderRadius: 2, transition: "width 0.3s" } })), /* @__PURE__ */ React.createElement("div", { ref: cardRef, style: { flex: 1, padding: compact ? "0 16px 16px" : "0 24px 24px", overflowY: "auto", minHeight: 0 } }, done ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 280, gap: 14 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text, fontWeight: 500, textAlign: "center" } }, "Runde geschafft!"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: th.subtext, textAlign: "center" } }, "MC-Aufgaben in dieser Runde richtig: ", mcCorrectRef.current, " / ", mcLen), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setRoundKey((k) => k + 1), style: { marginTop: 8, padding: "11px 28px", background: MIX_COLOR, color: "#FFF", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Neue Mischung")) : kkCard ? /* @__PURE__ */ React.createElement("div", { key: `kk-${pos}` }, /* @__PURE__ */ React.createElement("div", { className: "flip-card", role: "button", tabIndex: 0, onClick: () => setFlipped((f) => !f), onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  }, style: { width: "100%", maxWidth: "100%", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { className: `flip-inner${flipped ? " flipped" : ""}`, style: { width: "100%", height: compact ? "clamp(360px, 66vh, 720px)" : "clamp(380px, 68vh, 760px)" } }, /* @__PURE__ */ React.createElement("div", { className: "flip-front", style: { width: "100%", height: "100%", background: th.cardBg, border: th.border, borderRadius: CARD_R + 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: compact ? "16px 16px 14px" : "18px 20px 14px", gap: 10, overflow: "hidden", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: MIX_COLOR, textTransform: "uppercase", letterSpacing: "0.1em" } }, "Frage"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: "auto", fontFamily: "'Playfair Display',serif", fontSize: compact ? 24 : 30, color: th.text, textAlign: "center", lineHeight: 1.2 } }, renderCardText(kkCard.question_html || kkCard.question, false))), /* @__PURE__ */ React.createElement("div", { className: "flip-back", style: { width: "100%", height: "100%", background: MIX_COLOR + "18", border: `1.5px solid ${MIX_COLOR}44`, borderRadius: CARD_R + 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: compact ? "16px 16px 14px" : "18px 20px 14px", gap: 10, overflow: "hidden", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: MIX_COLOR, textTransform: "uppercase", letterSpacing: "0.1em" } }, "Antwort"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: "auto", fontSize: compact ? 22 : 28, color: th.text, textAlign: "center", lineHeight: 1.2 } }, renderCardText(kkCard.answer_html || kkCard.answer, true))))), theoryIdx >= 0 && onOpenTheory && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
    e.stopPropagation();
    onOpenTheory(theoryIdx);
  }, style: { marginTop: 12, width: "100%", padding: "10px 14px", background: th.surface, border: th.border, borderRadius: 10, color: "#8C3A5A", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "\uD83D\uDCD6 Zum Theorie-Abschnitt"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: advanceKk, style: { marginTop: 16, width: "100%", height: compact ? 46 : 50, background: MIX_COLOR, border: "none", borderRadius: 10, color: "#FFF", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, pos + 1 >= totalSteps ? "Runde beenden" : "Weiter \u2192")) : mcQ ? /* @__PURE__ */ React.createElement("div", { key: `mc-${pos}-${mcQ.id ?? pos}`, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 2, padding: compact ? "14px 14px" : "18px 18px", marginBottom: compact ? 10 : 12 } }, renderMixMcQuestion(mcQ, th, { compact }), isMulti && !mcConfirmed && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: MIX_COLOR, marginTop: 8, fontWeight: 600 } }, "Mehrere Antworten m\xF6glich")), /* @__PURE__ */ React.createElement("div", { style: mcOptionGridStyle(hasImageOptions, compact) }, mcQ.options.map((opt, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      onClick: () => mcToggle(i),
      style: mcOptionRowStyle(hasImageOptions, { background: mcOptBg(i, th.cardBg), border: mcOptBorder(i, th.border), borderRadius: CARD_R, padding: compact ? "10px 12px" : "13px 15px", cursor: mcConfirmed ? "default" : "pointer", display: "flex", alignItems: "center", gap: compact ? 10 : 12, transition: "all 0.15s" }, compact)
    },
    !hasImageOptions && /* @__PURE__ */ React.createElement(MCOptionIcon, { i, q: mcQ, confirmed: mcConfirmed, sels: mcSels, isMulti, th }),
    renderMixMcOptionBody(mcQ, i, opt, { compact, th, mcConfirmed, mcSels })
  ))), isMulti && !mcConfirmed && mcSels.size > 0 && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setMcConfirmed(true), style: { width: "100%", height: compact ? 44 : 48, background: MIX_COLOR, border: "none", borderRadius: 10, color: "#FFF", fontSize: compact ? 14 : 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", marginBottom: compact ? 8 : 10 }, className: "anim-pop" }, "Antworten pr\xFCfen"), mcConfirmed && /* @__PURE__ */ React.createElement("div", { style: { padding: compact ? "11px 12px" : "13px 15px", borderRadius: 10, background: isAllCorrect ? "#4A7C5912" : ACCENT + "10", border: `1px solid ${isAllCorrect ? "#4A7C5940" : ACCENT + "33"}`, marginBottom: compact ? 10 : 12 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: compact ? 12 : 13, color: isAllCorrect ? "#4A7C59" : ACCENT, lineHeight: 1.5 } }, /* @__PURE__ */ React.createElement("strong", null, isAllCorrect ? "\u2713 Richtig \u2014 " : "\u2717 Falsch \u2014 "), mcQ.explanation || (isAllCorrect ? "Gut gemacht!" : `Richtig: ${mcQ.correct.map((c) => mcMixFriendlyOptionLabel(mcQ, c)).join(", ")}`))), mcConfirmed && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: mcAdvance, style: { width: "100%", height: compact ? 46 : 50, background: MIX_COLOR, border: "none", borderRadius: 10, color: "#FFF", fontSize: compact ? 14 : 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", marginBottom: 12 }, className: "anim-pop" }, pos + 1 >= totalSteps ? "Runde beenden" : "Weiter \u2192")) : null)));
}
function DeskKkMcMix({ course, th, progress, updateProgress, onOpenTheory }) {
  const cards = course.kk || [];
  const qs = React.useMemo(() => (course.mc || []).map(normalizeMc), [course]);
  const kkLen = cards.length;
  const mcLen = qs.length;
  const [roundKey, setRoundKey] = React.useState(0);
  const plan = React.useMemo(() => buildKkMcMixPlan(kkLen, mcLen), [kkLen, mcLen, roundKey]);
  const [pos, setPos] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [mcSels, setMcSels] = React.useState(() => /* @__PURE__ */ new Set());
  const [mcConfirmed, setMcConfirmed] = React.useState(false);
  const sessionRef = React.useRef(false);
  const cardRef = React.useRef();
  const mcCorrectRef = React.useRef(0);
  const totalSteps = plan.length;
  const done = pos >= totalSteps;
  const step = !done ? plan[pos] : null;
  const kkCard = step && step.kind === "kk" ? cards[step.idx] : null;
  const mcQ = step && step.kind === "mc" ? qs[step.idx] : null;
  const hasImageOptions = mcUsesImageOptions(mcQ);
  const theoryIdx = kkCard ? findTheorySectionIdx(course, kkCard.id) : -1;
  const isMulti = mcQ && mcQ.correct.length > 1;
  const isAllCorrect = !!(mcQ && mcConfirmed && mcQ.correct.length === mcSels.size && mcQ.correct.every((c) => mcSels.has(c)));
  React.useEffect(() => {
    setPos(0);
    setFlipped(false);
    setMcSels(/* @__PURE__ */ new Set());
    setMcConfirmed(false);
    sessionRef.current = false;
    mcCorrectRef.current = 0;
  }, [roundKey]);
  React.useEffect(() => {
    setFlipped(false);
    setMcSels(/* @__PURE__ */ new Set());
    setMcConfirmed(false);
  }, [pos]);
  useKaTeX(cardRef, [pos, step?.kind, flipped, mcConfirmed, roundKey, totalSteps]);
  const bumpSession = () => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
  };
  const markKkSeen = (i) => {
    bumpSession();
    updateProgress(course.name, (pp) => {
      if (!pp.fc.includes(i)) pp.fc.push(i);
    });
  };
  const finishMcRoundStats = (mcRight) => {
    updateProgress(course.name, (p) => {
      p.mc = p.mc || { best: 0, attempts: 0 };
      p.mc.attempts = (p.mc.attempts || 0) + 1;
      p.mc.best = Math.max(p.mc.best || 0, mcRight);
    });
  };
  const advanceKk = () => {
    if (!step || step.kind !== "kk") return;
    markKkSeen(step.idx);
    if (pos + 1 >= totalSteps) {
      finishMcRoundStats(mcCorrectRef.current);
      setPos(totalSteps);
    } else setPos((p) => p + 1);
    setFlipped(false);
  };
  const mcToggle = (i) => {
    if (!mcQ || mcConfirmed) return;
    bumpSession();
    setMcSels((prev) => {
      const next2 = /* @__PURE__ */ new Set(prev);
      if (isMulti) {
        if (next2.has(i)) next2.delete(i);
        else next2.add(i);
      } else {
        next2.clear();
        next2.add(i);
      }
      return next2;
    });
    if (!isMulti) setMcConfirmed(true);
  };
  const mcAdvance = () => {
    if (!step || step.kind !== "mc" || !mcConfirmed || !mcQ) return;
    const ok = mcQ.correct.length === mcSels.size && mcQ.correct.every((c) => mcSels.has(c));
    if (ok) mcCorrectRef.current++;
    if (pos + 1 >= totalSteps) {
      finishMcRoundStats(mcCorrectRef.current);
      setPos(totalSteps);
    } else setPos((p) => p + 1);
  };
  const mcOptBg = (i, cardBg) => {
    if (!mcQ || !mcConfirmed) return cardBg;
    if (mcQ.correct.includes(i)) return "#4A7C5915";
    if (mcSels.has(i)) return "#C4892A15";
    return cardBg;
  };
  const mcOptBorder = (i, border) => {
    if (!mcQ || !mcConfirmed) return mcSels.has(i) ? "1px solid #99999966" : border;
    if (mcQ.correct.includes(i)) return "1px solid #4A7C5960";
    if (mcSels.has(i)) return "1px solid #C4892A60";
    return border;
  };
  const renderCardText = (text, isAnswer) => {
    if (!text) return null;
    const html = isAnswer ? String(text).replace(/\n/g, "<br>").replace(/^- /gm, "\u2022 ") : String(text);
    return /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: html } });
  };
  const deskH = "clamp(420px, 72vh, 900px)";
  if (!kkLen || !mcLen) return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px", color: th.subtext } }, "Keine Daten f\xFCr Mix-Modus.");
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px" }, ref: cardRef }, done ? /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "32px 0" }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text, marginBottom: 8 } }, "Runde geschafft!"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: th.subtext, marginBottom: 16 } }, "MC richtig: ", mcCorrectRef.current, " / ", mcLen), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setRoundKey((k) => k + 1), style: { padding: "10px 26px", background: MIX_COLOR, color: "#FFF", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Neue Mischung")) : kkCard ? /* @__PURE__ */ React.createElement("div", { key: `dkk-${pos}` }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, "Schritt ", pos + 1, "/", totalSteps)), /* @__PURE__ */ React.createElement("div", { className: "flip-card", style: { cursor: "pointer", maxWidth: "100%" }, role: "button", tabIndex: 0, onClick: () => setFlipped((f) => !f), onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  } }, /* @__PURE__ */ React.createElement("div", { className: `flip-inner${flipped ? " flipped" : ""}`, style: { width: "100%", height: deskH } }, /* @__PURE__ */ React.createElement("div", { className: "flip-front", style: { width: "100%", height: "100%", background: th.surface, borderRadius: CARD_R, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "24px 28px 20px", gap: 12, overflow: "hidden", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: MIX_COLOR, textTransform: "uppercase", letterSpacing: "0.1em" } }, "Frage"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: "auto", fontFamily: "'Playfair Display',serif", fontSize: 34, color: th.text, textAlign: "center", lineHeight: 1.15 } }, renderCardText(kkCard.question_html || kkCard.question, false))), /* @__PURE__ */ React.createElement("div", { className: "flip-back", style: { width: "100%", height: "100%", background: MIX_COLOR + "15", borderRadius: CARD_R, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "24px 28px 20px", gap: 12, overflow: "hidden", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: MIX_COLOR, textTransform: "uppercase", letterSpacing: "0.1em" } }, "Antwort"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: "auto", fontSize: 30, color: th.text, textAlign: "center", lineHeight: 1.15 } }, renderCardText(kkCard.answer_html || kkCard.answer, true))))), theoryIdx >= 0 && onOpenTheory && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
    e.stopPropagation();
    onOpenTheory(theoryIdx);
  }, style: { marginTop: 14, width: "100%", padding: "10px 14px", background: th.surface, border: th.border, borderRadius: 10, color: "#8C3A5A", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "\uD83D\uDCD6 Zum Theorie-Abschnitt"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: advanceKk, style: { marginTop: 18, width: "100%", height: 44, background: MIX_COLOR, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, pos + 1 >= totalSteps ? "Runde beenden" : "Weiter \u2192")) : mcQ ? /* @__PURE__ */ React.createElement("div", { key: `dmc-${pos}` }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, "Schritt ", pos + 1, "/", totalSteps), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: MIX_COLOR, fontWeight: 600 } }, "Multiple Choice")), renderMixMcQuestion(mcQ, th, { compact: false, marginBottom: 8 }), isMulti && !mcConfirmed && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: MIX_COLOR, fontWeight: 600, marginBottom: 12 } }, "Mehrere Antworten m\xF6glich"), !isMulti && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }), /* @__PURE__ */ React.createElement("div", { style: mcOptionGridStyle(hasImageOptions, false) }, mcQ.options.map((opt, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      onClick: () => mcToggle(i),
      style: mcOptionRowStyle(hasImageOptions, { background: mcOptBg(i, th.cardBg), border: mcOptBorder(i, th.border), borderRadius: CARD_R, padding: "12px 15px", cursor: mcConfirmed ? "default" : "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all 0.15s" }, false)
    },
    !hasImageOptions && /* @__PURE__ */ React.createElement(MCOptionIcon, { i, q: mcQ, confirmed: mcConfirmed, sels: mcSels, isMulti, th }),
    renderMixMcOptionBody(mcQ, i, opt, { compact: false, th, mcConfirmed, mcSels })
  ))), isMulti && !mcConfirmed && mcSels.size > 0 && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setMcConfirmed(true), style: { width: "100%", height: 44, background: MIX_COLOR, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", marginBottom: 10 }, className: "anim-pop" }, "Antworten pr\xFCfen"), mcConfirmed && /* @__PURE__ */ React.createElement("div", { style: { padding: "11px 14px", borderRadius: 10, background: isAllCorrect ? "#4A7C5912" : ACCENT + "10", border: `1px solid ${isAllCorrect ? "#4A7C5940" : ACCENT + "33"}`, marginBottom: 12 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: isAllCorrect ? "#4A7C59" : ACCENT, lineHeight: 1.5 } }, /* @__PURE__ */ React.createElement("strong", null, isAllCorrect ? "\u2713 Richtig \u2014 " : "\u2717 Falsch \u2014 "), mcQ.explanation || (isAllCorrect ? "Gut gemacht!" : `Richtig: ${mcQ.correct.map((c) => mcMixFriendlyOptionLabel(mcQ, c)).join(", ")}`))), mcConfirmed && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: mcAdvance, style: { width: "100%", height: 44, background: MIX_COLOR, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }, className: "anim-pop" }, pos + 1 >= totalSteps ? "Runde beenden" : "Weiter \u2192")) : null);
}
function MultipleChoiceScreen({ course, th, progress, updateProgress, onBack }) {
  const qs = React.useMemo(() => (course.mc || []).map(normalizeMc), [course]);
  const compact = typeof window !== "undefined" && window.innerWidth <= 430;
  const mc = useMCState(qs, updateProgress, course.name);
  const { idx, q, isMulti, isAllCorrect, sels, confirmed, score, done, toggle, confirm, next, reset, optBg, optBorder } = mc;
  const hasImageOptions = mcUsesImageOptions(q);
  const p = progress[course.name];
  if (!qs.length) return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "Multiple Choice", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("p", { style: { color: th.subtext, fontSize: 14 } }, "Keine MC-Fragen verf\xFCgbar.")));
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(TopBar, { label: "Multiple Choice", backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { padding: compact ? "8px 16px 10px" : "10px 24px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, "Frage ", idx + 1, " von ", qs.length), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: ACCENT, fontWeight: 500 } }, p?.mc?.attempts ? `Best ${p.mc.best}/${qs.length} \xB7 ${p.mc.attempts}\xD7` : `${score} richtig`)), /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${idx / qs.length * 100}%`, height: "100%", background: ACCENT, borderRadius: 2, transition: "width 0.3s" } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: compact ? "0 16px" : "0 24px", overflowY: "auto" } }, done ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 14 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("div", { style: { width: 88, height: 88, borderRadius: "50%", background: ACCENT + "20", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 600, color: ACCENT } }, score, "/", qs.length)), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 24, color: th.text, fontWeight: 500 } }, score === qs.length ? "Perfekt!" : score >= qs.length / 2 ? "Gut gemacht!" : "Weiter \xFCben!"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: th.subtext } }, score, " von ", qs.length, " richtig."), p?.mc?.attempts > 1 && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: ACCENT } }, "Bestes Ergebnis: ", p.mc.best, "/", qs.length), /* @__PURE__ */ React.createElement("button", { onClick: reset, style: { marginTop: 10, padding: "11px 28px", background: ACCENT, color: "#FFF", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Nochmal")) : /* @__PURE__ */ React.createElement("div", { key: idx, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 2, padding: compact ? "14px 14px" : "18px 18px", marginBottom: compact ? 10 : 12 } }, renderMixMcQuestion(q, th, { compact }), isMulti && !confirmed && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: ACCENT, marginTop: 8, fontWeight: 600 } }, "Mehrere Antworten m\xF6glich")), /* @__PURE__ */ React.createElement("div", { style: mcOptionGridStyle(hasImageOptions, compact) }, q.options.map((opt, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      onClick: () => toggle(i),
      style: mcOptionRowStyle(hasImageOptions, { background: optBg(i, th.cardBg), border: optBorder(i, th.border), borderRadius: CARD_R, padding: compact ? "10px 12px" : "13px 15px", cursor: confirmed ? "default" : "pointer", display: "flex", alignItems: "center", gap: compact ? 10 : 12, transition: "all 0.15s" }, compact)
    },
    !hasImageOptions && /* @__PURE__ */ React.createElement(MCOptionIcon, { i, q, confirmed, sels, isMulti, th }),
    renderMixMcOptionBody(q, i, opt, { compact, th, mcConfirmed: confirmed, mcSels: sels })
  ))), isMulti && !confirmed && sels.size > 0 && /* @__PURE__ */ React.createElement("button", { onClick: confirm, style: { width: "100%", height: compact ? 44 : 48, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: compact ? 14 : 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", marginBottom: compact ? 8 : 10 }, className: "anim-pop" }, "Antworten pr\xFCfen"), confirmed && /* @__PURE__ */ React.createElement("div", { style: { padding: compact ? "11px 12px" : "13px 15px", borderRadius: 10, background: isAllCorrect ? "#4A7C5912" : ACCENT + "10", border: `1px solid ${isAllCorrect ? "#4A7C5940" : ACCENT + "33"}`, marginBottom: compact ? 10 : 12 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: compact ? 12 : 13, color: isAllCorrect ? "#4A7C59" : ACCENT, lineHeight: 1.5 } }, /* @__PURE__ */ React.createElement("strong", null, isAllCorrect ? "\u2713 Richtig \u2014 " : "\u2717 Falsch \u2014 "), q.explanation || (isAllCorrect ? "Gut gemacht!" : `Richtig: ${q.correct.map((c) => mcMixFriendlyOptionLabel(q, c)).join(", ")}`))), confirmed && /* @__PURE__ */ React.createElement("button", { onClick: next, style: { width: "100%", height: compact ? 46 : 50, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: compact ? 14 : 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", marginBottom: compact ? 12 : 24 }, className: "anim-pop" }, idx === qs.length - 1 ? "Ergebnis sehen" : "N\xE4chste Frage \u2192"))));
}
function TheoryIndexScreen({ course, th, progress, onSection, onBack }) {
  const thColor = "#8C3A5A";
  const p = progress[course.name];
  const thRead = p?.th || [];
  const visible = getTheoryItems(course).map((t, i) => ({ ...t, _idx: i })).filter((t) => !t.hidden);
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", minHeight: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement(TopBar, { label: getTheoryModeLabel(course), backLabel: course.name, onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "'Playfair Display',serif", fontSize: 21, color: th.text, fontWeight: 500, marginBottom: 4 } }, course.name), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext, marginBottom: 6 } }, visible.length, " Abschnitte"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${thRead.length / (visible.length || 1) * 100}%`, height: "100%", background: thColor, borderRadius: 2, transition: "width 0.5s" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: thColor, fontWeight: 600, flexShrink: 0 } }, thRead.length, "/", visible.length, " gelesen")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, visible.map((sec, i) => {
    const isRead = thRead.includes(sec._idx);
    const preview = stripHtml(sec.html).slice(0, 100);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: sec._idx,
        onClick: () => onSection(sec._idx),
        className: "anim-slide",
        style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "16px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "transform 0.15s", animationDelay: `${i * 0.05}s` },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateX(4px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = ""
      },
      /* @__PURE__ */ React.createElement("div", { style: { width: 32, height: 32, borderRadius: 8, background: isRead ? "#4A7C5918" : thColor + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, isRead ? /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#4A7C59", strokeWidth: "2.5", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" })) : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 600, color: thColor } }, i + 1)),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: th.text, marginBottom: 3 } }, sec.title), preview && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, lineHeight: 1.4 } }, preview, "\u2026")),
      /* @__PURE__ */ React.createElement(ChevR, { c: th.subtext })
    );
  }))));
}
function TheoryReaderScreen({ course, th, progress, updateProgress, sectionIdx, onBack }) {
  const visible = getTheoryItems(course).map((t, i) => ({ ...t, _idx: i })).filter((t) => !t.hidden);
  const startPos = visible.findIndex((t) => t._idx === sectionIdx);
  const [pos, setPos] = React.useState(Math.max(0, startPos));
  const sec = visible[pos];
  const isScriptMode = !!course?.scriptPdfs;
  const thColor = "#8C3A5A";
  const contentRef = React.useRef();
  useKaTeX(contentRef, [pos]);
  React.useEffect(() => {
    if (!sec) return;
    updateProgress(course.name, (p) => {
      if (!p.th.includes(sec._idx)) p.th.push(sec._idx);
      p.sessions = (p.sessions || 0) + (p.th.includes(sec._idx) ? 0 : 1);
    });
  }, [pos]);
  if (!sec) return null;
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif", display: "flex", flexDirection: "column", overflow: isScriptMode ? "hidden" : void 0 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 14px", borderBottom: th.border } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 14, padding: 0 } }, /* @__PURE__ */ React.createElement(ChevL, { c: th.subtext }), getTheoryModeLabel(course)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, pos + 1, " / ", visible.length))), /* @__PURE__ */ React.createElement("div", { style: isScriptMode ? { flex: 1, minHeight: 0, overflow: "hidden", padding: "8px 8px 0" } : { flex: 1, overflow: "auto", padding: "20px 24px 0" }, key: pos, className: "anim-slide", ref: contentRef }, !isScriptMode && /* @__PURE__ */ React.createElement("div", { style: { borderLeft: `3px solid ${thColor}`, paddingLeft: 14, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 10, fontWeight: 600, color: thColor, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 } }, "Abschnitt ", pos + 1), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "'Playfair Display',serif", fontSize: 23, color: th.text, fontWeight: 500, lineHeight: 1.25 } }, sec.title)), /* @__PURE__ */ React.createElement("div", { className: "theory-content", style: isScriptMode ? { height: "100%", width: "100%", maxWidth: "none" } : void 0, dangerouslySetInnerHTML: { __html: sec.html || "" } }), !isScriptMode && /* @__PURE__ */ React.createElement("div", { style: { height: 20 } })), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px 28px", borderTop: th.border, background: th.bg, display: "flex", gap: 10, flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPos((i) => i - 1),
      disabled: pos === 0,
      style: { flex: 1, height: 50, background: pos === 0 ? "transparent" : th.cardBg, border: th.border, borderRadius: 10, color: pos === 0 ? th.subtext : th.text, fontSize: 14, cursor: pos === 0 ? "default" : "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }
    },
    /* @__PURE__ */ React.createElement(ChevL, { c: pos === 0 ? th.subtext : th.text }),
    "Zur\xFCck"
  ), pos < visible.length - 1 ? /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPos((i) => i + 1),
      style: { flex: 1, height: 50, background: thColor, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }
    },
    "Weiter",
    /* @__PURE__ */ React.createElement(ChevR, { c: "#FFF" })
  ) : /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onBack,
      style: { flex: 1, height: 50, background: th.cardBg, border: th.border, borderRadius: 10, color: th.text, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Zur\xFCck zur Liste"
  )));
}
function ProgressScreen({ th, progress, onBack, onCourse, onResetAll }) {
  const started = SUBJECTS.filter((s) => calcCompletion(s, progress[s.name]).overall > 0);
  const totalSessions = SUBJECTS.reduce((sum, s) => sum + (progress[s.name]?.sessions || 0), 0);
  const totalCards = SUBJECTS.reduce((sum, s) => sum + (progress[s.name]?.fc?.length || 0), 0);
  const streak = computeStreak(progress);
  const mostRecent = SUBJECTS.reduce((best, s) => {
    const t = progress[s.name]?.lastStudied || 0;
    return t > best.t ? { t, s } : best;
  }, { t: 0, s: null });
  const modeColors = ["#C4892A", "#4A7C59", ACCENT, "#8C3A5A", PW_COLOR];
  const modeLabels = ["KK", "LT", "MC", "Th.", "SW"];
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", minHeight: "100%", background: th.bg, fontFamily: "'DM Sans',sans-serif" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement(TopBar, { label: "Fortschritt", backLabel: "Start", onBack, th }), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 24px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: 10 } }, onResetAll && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: onResetAll,
      style: { fontSize: 12, color: ACCENT, background: "none", border: `1px solid ${ACCENT}55`, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Fortschritt zur\xFCcksetzen"
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 } }, [
    { label: "Gestartet", value: started.length, total: SUBJECTS.length },
    { label: "Sessions", value: totalSessions, total: null },
    { label: "KK gesehen", value: totalCards, total: null },
    { label: "Streak", value: streak, total: null, hint: "Tage in Folge mit Lernen" }
  ].map(({ label, value, total, hint }) => /* @__PURE__ */ React.createElement("div", { key: label, style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "12px 10px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 500, color: th.text, lineHeight: 1 } }, value, total ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, "/", total) : ""), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 10, color: th.subtext, marginTop: 4, lineHeight: 1.3 } }, label), hint && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 9, color: th.subtext, marginTop: 2, opacity: 0.85 } }, hint)))), mostRecent.s && /* @__PURE__ */ React.createElement("div", { style: { background: ACCENT + "12", border: `1px solid ${ACCENT}30`, borderRadius: CARD_R, padding: "12px 14px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: ACCENT, strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("polyline", { points: "12 6 12 12 16 14" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: ACCENT, fontWeight: 600 } }, "Zuletzt gelernt ", relTime(mostRecent.t)), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 1 } }, mostRecent.s.name)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onCourse(mostRecent.s),
      style: { marginLeft: "auto", background: ACCENT, border: "none", borderRadius: 8, padding: "6px 12px", color: "#FFF", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", flexShrink: 0 }
    },
    "Weiter"
  )), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, fontWeight: 600, color: th.subtext, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 } }, "Alle F\xE4cher")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 24px 40px", display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" } }, SUBJECTS.map((s, i) => {
    const p = progress[s.name];
    const comp = calcCompletion(s, p);
    const go = comp.overall > 0;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s.name,
        onClick: () => onCourse(s),
        className: "anim-slide",
        style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, overflow: "hidden", cursor: "pointer", transition: "transform 0.12s", animationDelay: `${i * 0.04}s` },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-1px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = ""
      },
      /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(ProgressRing, { pct: comp.overall, size: 48, stroke: 3.5, color: go ? ACCENT : "#CCCCCC44", bg: th.surface }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700, color: go ? ACCENT : th.subtext } }, Math.round(comp.overall * 100), "%"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 600, color: th.text, lineHeight: 1.3 } }, s.name), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 3 } }, go ? `${relTime(p?.lastStudied)} \xB7 ${p?.sessions || 0} Sessions` : "Noch nicht gestartet")), /* @__PURE__ */ React.createElement(ChevR, { c: th.subtext })), go && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "grid", gridTemplateColumns: (s.pathways || []).length ? "repeat(5, 1fr)" : "repeat(4, 1fr)", gap: 6 } }, [
        [comp.fc, 0],
        [comp.fb, 1],
        [comp.mc, 2],
        [comp.th, 3],
        ...(s.pathways || []).length ? [[comp.pw, 4]] : []
      ].map(([pct, mi]) => /* @__PURE__ */ React.createElement("div", { key: mi }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 3 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: th.subtext } }, modeLabels[mi]), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: modeColors[mi], fontWeight: 600 } }, Math.round(pct * 100), "%")), /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct * 100}%`, height: "100%", background: modeColors[mi], borderRadius: 2, transition: "width 0.5s" } }))))))
    );
  })));
}
function MobileApp({ th, isDark, progress, updateProgress, toggleTheme, onResetAllProgress }) {
  const saved = React.useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("la_mob") || "{}");
    } catch {
      return {};
    }
  }, []);
  const [screen, setScreen] = React.useState(saved.screen || "courses");
  const [course, setCourse] = React.useState(() => saved.name ? SUBJECTS.find((s) => s.name === saved.name) || null : null);
  const [theorySec, setTheorySec] = React.useState(0);
  const [macroBackScreen, setMacroBackScreen] = React.useState("courses");
  const accessLevel = typeof window !== "undefined" && window.LA_ACCESS_LEVEL ? String(window.LA_ACCESS_LEVEL).toLowerCase() : "economics";
  const canAccessMacroDiagrams = accessLevel === "economics" || accessLevel === "admin";
  const go = (s) => {
    setScreen(s);
    localStorage.setItem("la_mob", JSON.stringify({ screen: s, name: course?.name }));
  };
  const selectCourse = (s) => {
    setCourse(s);
    localStorage.setItem("la_mob", JSON.stringify({ screen: "modes", name: s.name }));
    setScreen("modes");
  };
  const handleMode = (id) => {
    if (id === "pathways") {
      go("pathways");
      return;
    }
    go(id);
  };
  const openMacroFromCourses = () => {
    setMacroBackScreen("courses");
    go("macro-diagrams");
  };
  const p = { course, th, progress, updateProgress, isDark };
  const openTheory = (secIdx) => {
    setTheorySec(secIdx);
    go("theory-reader");
  };
  const screens = {
    courses: /* @__PURE__ */ React.createElement(CoursesScreen, { th, isDark, progress, onSelect: selectCourse, onProgress: () => go("progress"), toggleTheme, onMacro: openMacroFromCourses }),
    progress: /* @__PURE__ */ React.createElement(ProgressScreen, { th, progress, onBack: () => go("courses"), onCourse: (s) => {
      setCourse(s);
      go("modes");
    }, onResetAll: onResetAllProgress }),
    modes: course && /* @__PURE__ */ React.createElement(ModesScreen, { ...p, onMode: handleMode, onBack: () => go("courses"), onProgress: () => go("progress") }),
    pathways: course && /* @__PURE__ */ React.createElement(PathwaysScreen, { course, th, progress, updateProgress, onBack: () => go("modes") }),
    "macro-diagrams": canAccessMacroDiagrams && /* @__PURE__ */ React.createElement(MacroDiagramsScreen, { th, onBack: () => go(macroBackScreen), backLabel: macroBackScreen === "courses" ? "Fächer" : "Alle Modi" }),
    flashcards: course && /* @__PURE__ */ React.createElement(FlashcardsScreen, { ...p, onBack: () => go("modes"), srMode: false, onOpenTheory: openTheory }),
    "flashcards-sr": course && /* @__PURE__ */ React.createElement(FlashcardsScreen, { ...p, onBack: () => go("modes"), srMode: true, onOpenTheory: openTheory }),
    fillblanks: course && /* @__PURE__ */ React.createElement(FillBlanksScreen, { ...p, onBack: () => go("modes") }),
    mc: course && /* @__PURE__ */ React.createElement(MultipleChoiceScreen, { ...p, onBack: () => go("modes") }),
    "kk-mc-mix": course && courseSupportsKkMcMix(course) && /* @__PURE__ */ React.createElement(KkMcMixScreen, { ...p, onBack: () => go("modes"), onOpenTheory: openTheory }),
    "theory-index": course && /* @__PURE__ */ React.createElement(TheoryIndexScreen, { ...p, onSection: (i) => {
      setTheorySec(i);
      go("theory-reader");
    }, onBack: () => go("modes") }),
    "theory-reader": course && /* @__PURE__ */ React.createElement(TheoryReaderScreen, { ...p, sectionIdx: theorySec, onBack: () => go("theory-index") })
  };
  const noPageScroll = screen === "pathways" || screen === "flashcards" || screen === "flashcards-sr" || screen === "macro-diagrams";
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100dvh", maxHeight: "100dvh", background: th.bg, overflow: "hidden", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflow: noPageScroll ? "hidden" : "auto", display: "flex", flexDirection: "column" } }, screens[screen] || screens.courses));
}
function DeskCourses({ th, progress, onSelect }) {
  const [search, setSearch] = React.useState("");
  const filtered = SUBJECTS.filter((s) => search === "" || s.name.toLowerCase().includes(search.toLowerCase()));
  return /* @__PURE__ */ React.createElement("div", { className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginBottom: 20, maxWidth: 360 } }, /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }, width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "5", stroke: th.subtext, strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("line", { x1: "11", y1: "11", x2: "14.5", y2: "14.5", stroke: th.subtext, strokeWidth: "1.5", strokeLinecap: "round" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: search,
      onChange: (e) => setSearch(e.target.value),
      placeholder: "Fach suchen\u2026",
      style: { width: "100%", height: 38, background: th.input, border: th.border, borderRadius: 9, paddingLeft: 36, paddingRight: 14, fontSize: 14, color: th.text, fontFamily: "'DM Sans',sans-serif", outline: "none" }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 } }, filtered.map((s, i) => {
    const p = progress[s.name];
    const comp = calcCompletion(s, p);
    const started = comp.overall > 0;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s.name,
        onClick: () => onSelect(s),
        style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, overflow: "hidden", cursor: "pointer", transition: "transform 0.15s,box-shadow 0.15s" },
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = th.isDark ? "0 8px 24px rgba(0,0,0,0.3)" : "0 8px 24px rgba(0,0,0,0.09)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Thumbnail, { idx: i, width: "100%", height: 120, radius: 0 }), started && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 8, right: 8, background: th.isDark ? "rgba(28,28,26,0.85)" : "rgba(250,249,246,0.85)", borderRadius: 20, padding: "3px 8px 3px 4px", display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement(ProgressRing, { pct: comp.overall, size: 18, stroke: 2, color: ACCENT, bg: th.surface }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700, color: ACCENT } }, Math.round(comp.overall * 100), "%"))),
      /* @__PURE__ */ React.createElement("div", { style: { padding: "13px 14px 16px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 500, color: th.text, lineHeight: 1.35 } }, s.name), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: started ? ACCENT : th.subtext, marginTop: 5, fontWeight: started ? 500 : 400 } }, started ? `${relTime(p?.lastStudied)} \xB7 ${p?.sessions} Sessions` : s.description || ""))
    );
  })));
}
function DeskProgress({ th, progress, onCourse, onResetAll }) {
  const started = SUBJECTS.filter((s) => calcCompletion(s, progress[s.name]).overall > 0);
  const totalSessions = SUBJECTS.reduce((sum, s) => sum + (progress[s.name]?.sessions || 0), 0);
  const totalCards = SUBJECTS.reduce((sum, s) => sum + (progress[s.name]?.fc?.length || 0), 0);
  const streak = computeStreak(progress);
  const modeColors = ["#C4892A", "#4A7C59", ACCENT, "#8C3A5A", PW_COLOR];
  const modeLabels = ["KK", "LT", "MC", "Th.", "SW"];
  return /* @__PURE__ */ React.createElement("div", { className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: 14 } }, onResetAll && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: onResetAll,
      style: { fontSize: 13, color: ACCENT, background: "none", border: `1px solid ${ACCENT}55`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Fortschritt zur\xFCcksetzen"
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 } }, [{ l: "F\xE4cher gestartet", v: started.length, t: SUBJECTS.length }, { l: "Gesamte Sessions", v: totalSessions, t: null }, { l: "Karten gesehen", v: totalCards, t: null }, { l: "Streak (Tage)", v: streak, t: null }].map(({ l, v, t }) => /* @__PURE__ */ React.createElement("div", { key: l, style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "18px 20px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 500, color: th.text, marginBottom: 4 } }, v, t ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: th.subtext } }, "/", t) : ""), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext } }, l)))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, SUBJECTS.map((s, i) => {
    const p = progress[s.name];
    const comp = calcCompletion(s, p);
    const go = comp.overall > 0;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s.name,
        onClick: () => onCourse(s),
        style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "16px 18px", cursor: "pointer", transition: "transform 0.15s" },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-2px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = ""
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: go ? 12 : 0 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(ProgressRing, { pct: comp.overall, size: 44, stroke: 3, color: go ? ACCENT : "#CCCCCC44", bg: th.surface }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, fontWeight: 700, color: go ? ACCENT : th.subtext } }, Math.round(comp.overall * 100), "%"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, fontWeight: 600, color: th.text, lineHeight: 1.3 } }, s.name), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, marginTop: 2 } }, go ? `${relTime(p?.lastStudied)} \xB7 ${p?.sessions} Sessions` : "Noch nicht gestartet"))),
      go && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: (s.pathways || []).length ? "repeat(5, 1fr)" : "repeat(4, 1fr)", gap: 8 } }, [
        [comp.fc, 0],
        [comp.fb, 1],
        [comp.mc, 2],
        [comp.th, 3],
        ...(s.pathways || []).length ? [[comp.pw, 4]] : []
      ].map(([pct, mi]) => /* @__PURE__ */ React.createElement("div", { key: mi }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 3 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: th.subtext } }, modeLabels[mi]), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: modeColors[mi], fontWeight: 600 } }, Math.round(pct * 100), "%")), /* @__PURE__ */ React.createElement("div", { style: { height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct * 100}%`, height: "100%", background: modeColors[mi], borderRadius: 2 } })))))
    );
  })));
}
function DeskModes({ th, progress, course, onMode, onBackToCourses }) {
  const ci = SUBJECTS.findIndex((s) => s.name === course.name);
  const p = progress[course.name];
  const comp = calcCompletion(course, p);
  const topics = getTopics(course);
  const modes = [
    { id: "flashcards", icon: /* @__PURE__ */ React.createElement(IcoFlash, null), label: "Karteikarten", color: "#C4892A", desc: `${p?.fc?.length || 0}/${(course.kk || []).length} gesehen`, pct: comp.fc },
    { id: "flashcards-sr", icon: /* @__PURE__ */ React.createElement(IcoFlash, null), label: "Karteikarten (Wiederholung)", color: "#A66C1E", desc: "Abstandswiederholung (f\xE4llige Karten)", pct: Math.min(1, Object.keys(p?.sr || {}).length / Math.max(1, (course.kk || []).length) * 0.5) },
    { id: "fillblanks", icon: /* @__PURE__ */ React.createElement(IcoFill, null), label: "L\xFCckentext", color: "#4A7C59", desc: `${p?.fb?.length || 0}/${(course.lt || []).length} erledigt`, pct: comp.fb },
    { id: "mc", icon: /* @__PURE__ */ React.createElement(IcoMC, null), label: "Multiple Choice", color: ACCENT, desc: p?.mc?.attempts ? `Best ${p.mc.best}/${(course.mc || []).length} \xB7 ${p.mc.attempts}\xD7` : `${(course.mc || []).length} Fragen`, pct: comp.mc },
    { id: "theory-index", icon: /* @__PURE__ */ React.createElement(IcoBook, null), label: getTheoryModeLabel(course), color: "#8C3A5A", desc: `${p?.th?.length || 0}/${getTheoryItems(course).filter((t) => !t.hidden).length} gelesen`, pct: comp.th },
    ...(course.pathways || []).length ? [{ id: "pathways", icon: /* @__PURE__ */ React.createElement(IcoBook, null), label: "Stoffwechselwege", color: PW_COLOR, desc: comp.pw >= 0.999 ? "Abgeschlossen" : `${Math.round(comp.pw * 100)}% Wege`, pct: comp.pw }] : [],
    ...(courseSupportsKkMcMix(course) ? [{ id: "kk-mc-mix", icon: /* @__PURE__ */ React.createElement(IcoMix, null), label: "Gemischt", color: MIX_COLOR, desc: `${(course.kk || []).length} KK + ${(course.mc || []).length} MC`, pct: (comp.fc + comp.mc) / 2 }] : [])
  ].filter((m) => {
    if (m.id === "flashcards" && !(course.kk || []).length) return false;
    if (m.id === "flashcards-sr" && !(course.kk || []).length) return false;
    if (m.id === "fillblanks" && !(course.lt || []).length) return false;
    if (m.id === "mc" && !(course.mc || []).length) return false;
    if (m.id === "theory-index" && !getTheoryItems(course).length) return false;
    if (m.id === "pathways" && !(course.pathways || []).length) return false;
    if (m.id === "kk-mc-mix" && !courseSupportsKkMcMix(course)) return false;
    return true;
  });
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 700 }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4, overflow: "hidden", display: "flex", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Thumbnail, { idx: ci, width: 260, height: 160, radius: 0 })), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "'Playfair Display',serif", fontSize: 20, color: th.text, fontWeight: 500, margin: "0 0 8px", lineHeight: 1.3 } }, course.name), comp.overall > 0 ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 } }, /* @__PURE__ */ React.createElement(ProgressRing, { pct: comp.overall, size: 38, stroke: 3, color: ACCENT, bg: th.surface }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: th.text } }, Math.round(comp.overall * 100), "% abgeschlossen"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext } }, relTime(p?.lastStudied), " \xB7 ", p?.sessions, " Sessions"))) : /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext, marginBottom: 12 } }, course.description || ""), topics.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, topics.map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: { fontSize: 11, padding: "3px 10px", borderRadius: 20, background: th.tag, border: th.border, color: th.subtext } }, t))))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, modes.map((m) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: m.id,
      onClick: () => onMode(m.id),
      style: { background: th.cardBg, border: th.border, borderRadius: CARD_R, padding: "18px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "transform 0.15s" },
      onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-2px)",
      onMouseLeave: (e) => e.currentTarget.style.transform = ""
    },
    /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 11, background: m.color + "1E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: m.color } }, m.icon),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: th.text } }, m.label), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: m.pct >= 1 ? "#4A7C59" : m.color, fontWeight: 500, marginTop: 2 } }, m.pct >= 1 ? "\u2713 Abgeschlossen" : m.desc), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${Math.min(m.pct, 1) * 100}%`, height: "100%", background: m.color, borderRadius: 2, transition: "width 0.5s" } }))),
    /* @__PURE__ */ React.createElement(ChevR, { c: th.subtext })
  ))));
}
function DeskFlash({ th, course, progress, updateProgress, srMode, onOpenTheory }) {
  const cards = course.kk || [];
  const [order, setOrder] = React.useState(() => shuffleIndices(cards.length));
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const sessionRef = React.useRef(false);
  const cardRef = React.useRef();
  React.useEffect(() => {
    setOrder(shuffleIndices(cards.length));
    setIdx(0);
    setFlipped(false);
    setDone(false);
    sessionRef.current = false;
  }, [course.name, cards.length, srMode]);
  const prog = progress[course.name] || initCP();
  const queue = srMode ? buildSrQueue(course, prog) : [];
  const origIdx = srMode ? queue[0] ?? -1 : order[idx];
  const card = origIdx >= 0 ? cards[origIdx] : null;
  const theoryIdx = card ? findTheorySectionIdx(course, card.id) : -1;
  useKaTeX(cardRef, [origIdx, srMode, idx]);
  const deskCardH = "clamp(260px, 48vh, 560px)";
  const onDeskFlashcardClick = (e) => {
    if (e.target && typeof e.target.closest === "function" && e.target.closest("a, button, input, textarea, select, label")) return;
    setFlipped((f) => !f);
  };
  const onDeskFlashcardKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };
  const markSeen = (i) => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
    updateProgress(course.name, (p) => {
      if (!p.fc.includes(i)) p.fc.push(i);
    });
  };
  const nextLinear = () => {
    markSeen(origIdx);
    if (idx < cards.length - 1) {
      setIdx((i) => i + 1);
      setFlipped(false);
    } else {
      setDone(true);
      setFlipped(false);
    }
  };
  const prevLinear = () => {
    if (idx > 0) {
      setIdx((i) => i - 1);
      setFlipped(false);
    }
  };
  const srRate = (quality) => {
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
    updateProgress(course.name, (p) => {
      p.sr = applySrRating(p.sr || {}, origIdx, quality);
      if (!p.fc.includes(origIdx)) p.fc.push(origIdx);
    });
    setFlipped(false);
  };
  const renderCardText = (text, isAnswer) => {
    if (!text) return null;
    const html = isAnswer ? text.replace(/\n/g, "<br>").replace(/^- /gm, "\u2022 ") : text;
    return /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: html } });
  };
  const srEmpty = srMode && queue.length === 0;
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px" }, ref: cardRef }, srEmpty ? /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "36px 0" }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text, marginBottom: 8 } }, "Keine Karten f\xE4llig"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: th.subtext } }, "Alle Karten sind eingeplant \u2014 sp\xE4ter erneut \xF6ffnen oder normalen Karteikarten-Modus nutzen.")) : done && !srMode ? /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 0" }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 24, color: th.text, marginBottom: 12 } }, "Alle durch!"), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setIdx(0);
        setFlipped(false);
        setDone(false);
        setOrder(shuffleIndices(cards.length));
      },
      style: { padding: "10px 26px", background: ACCENT, color: "#FFF", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Nochmal"
  )) : card ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 8 } }, !srMode && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, idx + 1, "/", cards.length), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, "Klicken zum Umdrehen"), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setOrder(shuffleIndices(cards.length));
        setIdx(0);
        setFlipped(false);
        setDone(false);
      },
      style: { fontSize: 12, fontWeight: 600, color: th.text, background: th.surface, border: th.border, borderRadius: 8, padding: "5px 10px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "Mischen"
  ))), srMode && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, queue.length, " f\xE4llig \xB7 Wiederholung")), /* @__PURE__ */ React.createElement("div", { className: "fc-stack", role: "button", tabIndex: 0, "aria-label": "Karte umdrehen", onClick: onDeskFlashcardClick, onKeyDown: onDeskFlashcardKeyDown, style: { position: "relative", width: "100%", maxWidth: "100%", cursor: "pointer", touchAction: "manipulation", WebkitTapHighlightColor: "transparent", boxSizing: "border-box", height: deskCardH } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "20px 24px 16px", gap: 8, background: th.surface, borderRadius: CARD_R, boxSizing: "border-box", overflow: "hidden", opacity: flipped ? 0 : 1, visibility: flipped ? "hidden" : "visible", pointerEvents: flipped ? "none" : "auto", zIndex: flipped ? 0 : 1, transition: "opacity 0.2s ease" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 } }, "Frage"), card.category && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: th.subtext, flexShrink: 0 } }, card.category), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: "auto", WebkitOverflowScrolling: "touch", fontFamily: "'Playfair Display',serif", fontSize: 19, color: th.text, textAlign: "center", lineHeight: 1.45 } }, renderCardText(card.question_html || card.question, false))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "20px 24px 16px", gap: 8, background: ACCENT + "15", border: `1.5px solid ${ACCENT}44`, borderRadius: CARD_R, boxSizing: "border-box", overflow: "hidden", opacity: flipped ? 1 : 0, visibility: flipped ? "visible" : "hidden", pointerEvents: flipped ? "auto" : "none", zIndex: flipped ? 1 : 0, transition: "opacity 0.2s ease" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 } }, "Antwort"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, width: "100%", overflowY: "auto", WebkitOverflowScrolling: "touch", fontSize: 15, color: th.text, textAlign: "center", lineHeight: 1.65 } }, renderCardText(card.answer_html || card.answer, true)))), theoryIdx >= 0 && onOpenTheory && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: (e) => {
        e.stopPropagation();
        onOpenTheory(theoryIdx);
      },
      style: { marginTop: 14, width: "100%", padding: "10px 14px", background: th.surface, border: th.border, borderRadius: 10, color: "#8C3A5A", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "\u{1F4D6} Zum Theorie-Abschnitt"
  ), srMode && flipped && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: th.subtext, textAlign: "center", marginBottom: 8 } }, "Wie gut kanntest du die Antwort?"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
    e.stopPropagation();
    srRate("hard");
  }, style: { flex: 1, height: 44, background: th.surface, border: th.border, borderRadius: 10, fontSize: 13, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", color: th.text } }, "Schwer"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
    e.stopPropagation();
    srRate("good");
  }, style: { flex: 1, height: 44, background: ACCENT, border: "none", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", color: "#FFF" } }, "Gut"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
    e.stopPropagation();
    srRate("easy");
  }, style: { flex: 1, height: 44, background: "#4A7C59", border: "none", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", color: "#FFF" } }, "Einfach"))), !srMode && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 18 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: prevLinear,
      disabled: idx === 0,
      style: { flex: 1, height: 44, background: th.surface, border: th.border, borderRadius: 10, color: idx === 0 ? th.subtext : th.text, fontSize: 14, cursor: idx === 0 ? "default" : "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "\u2190 Zur\xFCck"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: nextLinear,
      style: { flex: 1, height: 44, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    idx === cards.length - 1 ? "Fertig" : "Weiter \u2192"
  ))) : null);
}
function DeskFill({ th, course, progress, updateProgress }) {
  const exercises = React.useMemo(() => (course.lt || []).map(parseLtItem), [course]);
  const [page, setPage] = React.useState(0);
  const [allAns, setAllAns] = React.useState(() => exercises.map((e) => e.blanks.map(() => "")));
  const [checked, setChecked] = React.useState(false);
  const sessionRef = React.useRef(false);
  if (!exercises.length) return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px", color: th.subtext } }, "Keine Aufgaben verf\xFCgbar.");
  const ex = exercises[page];
  const ans = allAns[page];
  const setAns = (bi, val) => {
    setAllAns((a) => {
      const n = a.map((r) => [...r]);
      n[page][bi] = val;
      return n;
    });
    setChecked(false);
  };
  const isOk = (bi) => ans[bi].trim().toLowerCase() === ex.blanks[bi].toLowerCase();
  const allOk = ex.blanks.every((_, bi) => isOk(bi));
  const doCheck = () => {
    setChecked(true);
    if (!sessionRef.current) {
      sessionRef.current = true;
      updateProgress(course.name, (p) => {
        p.sessions = (p.sessions || 0) + 1;
      });
    }
    if (allOk) updateProgress(course.name, (p) => {
      if (!p.fb.includes(page)) p.fb.push(page);
    });
  };
  const renderText = () => {
    let bi = 0;
    const parts = ex.text.split(/\{[^}]+\}/);
    const r = [];
    parts.forEach((part, pi) => {
      r.push(/* @__PURE__ */ React.createElement("span", { key: `p${pi}` }, part));
      if (pi < parts.length - 1) {
        const bIdx = bi++;
        const ok = checked ? isOk(bIdx) : null;
        r.push(/* @__PURE__ */ React.createElement(
          "input",
          {
            key: `b${pi}`,
            value: ans[bIdx],
            onChange: (e) => setAns(bIdx, e.target.value),
            style: { display: "inline-block", width: 120, height: 28, background: th.surface, border: `1.5px solid ${checked ? ok ? "#4A7C59" : ACCENT : "#99999955"}`, borderRadius: 6, color: checked ? ok ? "#4A7C59" : ACCENT : th.text, fontSize: 14, textAlign: "center", margin: "0 3px", fontFamily: "'DM Sans',sans-serif", verticalAlign: "middle", outline: "none" }
          }
        ));
      }
    });
    return r;
  };
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px", display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, "Aufgabe ", page + 1, "/", exercises.length), checked && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: allOk ? "#4A7C59" : ACCENT, fontWeight: 600 } }, allOk ? "\u2713 Richtig" : "\u2717 Falsch")), /* @__PURE__ */ React.createElement("div", { style: { background: th.surface, borderRadius: CARD_R, padding: "20px 22px" }, key: page, className: "anim-slide" }, ex.question && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext, marginBottom: 10 } }, ex.question), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 16, color: th.text, lineHeight: 2.1 } }, renderText()), checked && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, padding: "10px 12px", borderRadius: 8, background: allOk ? "#4A7C5914" : ACCENT + "10", border: `1px solid ${allOk ? "#4A7C5940" : ACCENT + "33"}` } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: allOk ? "#4A7C59" : ACCENT } }, allOk ? "\u2713 Richtig!" : "L\xF6sung: " + ex.blanks.join(", ")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setPage((p) => p - 1);
        setChecked(false);
      },
      disabled: page === 0,
      style: { height: 44, padding: "0 16px", background: th.surface, border: th.border, borderRadius: 10, color: page === 0 ? th.subtext : th.text, fontSize: 14, cursor: page === 0 ? "default" : "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "\u2190 Zur\xFCck"
  ), !checked && /* @__PURE__ */ React.createElement("button", { onClick: doCheck, style: { flex: 1, height: 44, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Pr\xFCfen"), checked && page < exercises.length - 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setPage((p) => p + 1);
    setChecked(false);
  }, style: { flex: 1, height: 44, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Weiter \u2192"), checked && page === exercises.length - 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setPage(0);
    setAllAns(exercises.map((e) => e.blanks.map(() => "")));
    setChecked(false);
  }, style: { flex: 1, height: 44, background: "#4A7C59", border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Von vorne")));
}
function DeskMC({ th, course, progress, updateProgress }) {
  const qs = React.useMemo(() => (course.mc || []).map(normalizeMc), [course]);
  if (!qs.length) return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px", color: th.subtext } }, "Keine MC-Fragen verf\xFCgbar.");
  const mc = useMCState(qs, updateProgress, course.name);
  const { idx, q, isMulti, isAllCorrect, sels, confirmed, score, done, toggle, confirm, next, reset, optBg, optBorder } = mc;
  const hasImageOptions = mcUsesImageOptions(q);
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px" } }, done ? /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "32px 0" }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("div", { style: { width: 76, height: 76, borderRadius: "50%", background: ACCENT + "20", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 600, color: ACCENT } }, score, "/", qs.length)), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, color: th.text, marginBottom: 6 } }, score === qs.length ? "Perfekt!" : "Gut gemacht!"), /* @__PURE__ */ React.createElement("button", { onClick: reset, style: { marginTop: 12, padding: "10px 26px", background: ACCENT, color: "#FFF", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Nochmal")) : /* @__PURE__ */ React.createElement("div", { key: idx, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: th.subtext } }, "F", idx + 1, "/", qs.length), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: ACCENT, fontWeight: 600 } }, score, " richtig")), renderMixMcQuestion(q, th, { compact: false, marginBottom: 8 }), isMulti && !confirmed && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: ACCENT, fontWeight: 600, marginBottom: 12 } }, "Mehrere Antworten m\xF6glich"), !isMulti && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }), /* @__PURE__ */ React.createElement("div", { style: mcOptionGridStyle(hasImageOptions, false) }, q.options.map((opt, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      onClick: () => toggle(i),
      style: mcOptionRowStyle(hasImageOptions, { background: optBg(i, th.cardBg), border: optBorder(i, th.border), borderRadius: CARD_R, padding: "12px 15px", cursor: confirmed ? "default" : "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all 0.15s" }, false)
    },
    !hasImageOptions && /* @__PURE__ */ React.createElement(MCOptionIcon, { i, q, confirmed, sels, isMulti, th }),
    renderMixMcOptionBody(q, i, opt, { compact: false, th, mcConfirmed: confirmed, mcSels: sels })
  ))), isMulti && !confirmed && sels.size > 0 && /* @__PURE__ */ React.createElement("button", { onClick: confirm, style: { width: "100%", height: 44, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", marginBottom: 10 }, className: "anim-pop" }, "Antworten pr\xFCfen"), confirmed && /* @__PURE__ */ React.createElement("div", { style: { padding: "11px 14px", borderRadius: 10, background: isAllCorrect ? "#4A7C5912" : ACCENT + "10", border: `1px solid ${isAllCorrect ? "#4A7C5940" : ACCENT + "33"}`, marginBottom: 12 }, className: "anim-pop" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: isAllCorrect ? "#4A7C59" : ACCENT, lineHeight: 1.5 } }, /* @__PURE__ */ React.createElement("strong", null, isAllCorrect ? "\u2713 Richtig \u2014 " : "\u2717 Falsch \u2014 "), q.explanation || (isAllCorrect ? "Gut gemacht!" : `Richtig: ${q.correct.map((c) => mcMixFriendlyOptionLabel(q, c)).join(", ")}`))), confirmed && /* @__PURE__ */ React.createElement("button", { onClick: next, style: { width: "100%", height: 44, background: ACCENT, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }, className: "anim-pop" }, idx === qs.length - 1 ? "Ergebnis \u2192" : "Weiter \u2192")));
}
function DeskTheoryIndex({ th, course, progress, onSection }) {
  const thColor = "#8C3A5A";
  const p = progress[course.name];
  const thRead = p?.th || [];
  const visible = getTheoryItems(course).map((t, i) => ({ ...t, _idx: i })).filter((t) => !t.hidden);
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 34px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 3, background: th.surface, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${thRead.length / (visible.length || 1) * 100}%`, height: "100%", background: thColor, borderRadius: 2, transition: "width 0.5s" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: thColor, fontWeight: 600 } }, thRead.length, "/", visible.length, " gelesen")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, visible.map((sec, i) => {
    const isRead = thRead.includes(sec._idx);
    const preview = stripHtml(sec.html).slice(0, 100);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: sec._idx,
        onClick: () => onSection(sec._idx),
        className: "anim-slide",
        style: { background: th.surface, borderRadius: CARD_R, padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "transform 0.15s", animationDelay: `${i * 0.05}s` },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateX(4px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = ""
      },
      /* @__PURE__ */ React.createElement("div", { style: { width: 30, height: 30, borderRadius: 8, background: isRead ? "#4A7C5918" : thColor + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, isRead ? /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "#4A7C59", strokeWidth: "2.5", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" })) : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 600, color: thColor } }, i + 1)),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: th.text, marginBottom: 2 } }, sec.title), preview && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: th.subtext } }, preview, "\u2026")),
      /* @__PURE__ */ React.createElement(ChevR, { c: th.subtext })
    );
  })));
}
function DeskTheoryReader({ th, course, progress, updateProgress, sectionIdx, onBack, onChange }) {
  const visible = getTheoryItems(course).map((t, i) => ({ ...t, _idx: i })).filter((t) => !t.hidden);
  const startPos = visible.findIndex((t) => t._idx === sectionIdx);
  const [pos, setPos] = React.useState(Math.max(0, startPos));
  const sec = visible[pos];
  const isScriptMode = !!course?.scriptPdfs;
  const thColor = "#8C3A5A";
  const ref = React.useRef();
  useKaTeX(ref, [pos]);
  React.useEffect(() => {
    if (!sec) return;
    updateProgress(course.name, (p) => {
      if (!p.th.includes(sec._idx)) p.th.push(sec._idx);
    });
    onChange(sec._idx);
  }, [pos]);
  if (!sec) return null;
  return /* @__PURE__ */ React.createElement("div", { style: isScriptMode ? { padding: "14px 14px 10px", height: "100%", display: "flex", flexDirection: "column", minHeight: 0 } : { padding: "30px 34px" }, ref }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 13, display: "flex", alignItems: "center", gap: 4, padding: 0 } }, /* @__PURE__ */ React.createElement(ChevL, { c: th.subtext }), "Alle Abschnitte"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext, marginLeft: "auto" } }, pos + 1, "/", visible.length)), !isScriptMode && /* @__PURE__ */ React.createElement("div", { style: { borderLeft: `3px solid ${thColor}`, paddingLeft: 14, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 10, fontWeight: 600, color: thColor, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 } }, "Abschnitt ", pos + 1), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "'Playfair Display',serif", fontSize: 20, color: th.text, fontWeight: 500 }, key: pos, className: "anim-slide" }, sec.title)), /* @__PURE__ */ React.createElement("div", { key: pos, className: "anim-slide theory-content", style: isScriptMode ? { flex: 1, minHeight: 0, maxWidth: "none", width: "100%", overflow: "hidden" } : void 0, dangerouslySetInnerHTML: { __html: sec.html || "" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 18, paddingTop: 18, borderTop: th.border } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPos((i) => i - 1),
      disabled: pos === 0,
      style: { flex: 1, height: 42, background: th.surface, border: th.border, borderRadius: 10, color: pos === 0 ? th.subtext : th.text, fontSize: 14, cursor: pos === 0 ? "default" : "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    "\u2190 Zur\xFCck"
  ), pos < visible.length - 1 ? /* @__PURE__ */ React.createElement("button", { onClick: () => setPos((i) => i + 1), style: { flex: 1, height: 42, background: thColor, border: "none", borderRadius: 10, color: "#FFF", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Weiter \u2192") : /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { flex: 1, height: 42, background: th.surface, border: th.border, borderRadius: 10, color: th.text, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" } }, "Zur\xFCck zur Liste")));
}
function MacroDiagramsScreen({ th, onBack, backLabel }) {
  const cfg = typeof window !== "undefined" ? window.LA_MACRO_DIAGRAMS || {} : {};
  const iframeUrl = cfg.iframeUrl || "";
  const srcDoc = cfg.srcDoc || "";
  const frameTitle = cfg.title || "Makrooekonomik Diagramme";
  const frameProps = srcDoc ? { srcDoc, sandbox: "allow-scripts allow-downloads" } : { src: iframeUrl };
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", background: th.bg, display: "flex", flexDirection: "column" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 14px", borderBottom: th.border } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 14, padding: 0 } }, /* @__PURE__ */ React.createElement(ChevL, { c: th.subtext }), backLabel || "Alle Modi"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: th.subtext } }, "Interaktive Makro-Diagramme"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, padding: "16px 20px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", borderRadius: CARD_R + 4, overflow: "hidden", border: th.border, background: th.cardBg } }, /* @__PURE__ */ React.createElement("iframe", { ...frameProps, title: frameTitle, style: { width: "100%", height: "100%", border: "0", background: "#fff" } }))));
}
function DesktopApp({ th, isDark, progress, updateProgress, toggleTheme, onResetAllProgress }) {
  const [screen, setScreen] = React.useState("courses");
  const [course, setCourse] = React.useState(null);
  const [theorySec, setTheorySec] = React.useState(0);
  const accessLevel = typeof window !== "undefined" && window.LA_ACCESS_LEVEL ? String(window.LA_ACCESS_LEVEL).toLowerCase() : "economics";
  const canAccessMacroDiagrams = accessLevel === "economics" || accessLevel === "admin";
  const go = (s) => {
    setScreen(s);
  };
  const selectCourse = (s) => {
    setCourse(s);
    go("modes");
  };
  const openTheory = (secIdx) => {
    setTheorySec(secIdx);
    go("theory-reader");
  };
  const sidebarBg = th.isDark ? "#141412" : "#F2F0EC";
  const navBorder = th.isDark ? "1px solid #2A2A28" : "1px solid #E5E2DB";
  const navItems = [
    { id: "courses", label: "F\xE4cher", ico: "M3 12h18M3 6h18M3 18h18" },
    { id: "progress", label: "Fortschritt", ico: "M12 20V10M8 20V14M16 20V6M4 20h16" },
    ...canAccessMacroDiagrams ? [{ id: "macro-diagrams", label: "Makro-Diagramme", ico: "M4 19h16M7 16l3-4 3 2 4-6" }] : []
  ];
  const studyModes = [
    ...(course?.kk || []).length ? [{ id: "flashcards", label: "Karteikarten", color: "#C4892A" }] : [],
    ...(course?.kk || []).length ? [{ id: "flashcards-sr", label: "Karten Wiederholung", color: "#A66C1E" }] : [],
    ...(course?.lt || []).length ? [{ id: "fillblanks", label: "L\xFCckentext", color: "#4A7C59" }] : [],
    ...(course?.mc || []).length ? [{ id: "mc", label: "Multiple Choice", color: ACCENT }] : [],
    ...(courseSupportsKkMcMix(course) ? [{ id: "kk-mc-mix", label: "Gemischt", color: MIX_COLOR }] : []),
    ...(getTheoryItems(course).length ? [{ id: "theory-index", label: "Theorie", color: "#8C3A5A" }] : []),
    ...(course?.pathways || []).length ? [{ id: "pathways", label: "Stoffwechselwege", color: PW_COLOR }] : []
  ];
  const headerTitle = () => {
    if (screen === "courses") return { title: "F\xE4cher\xFCbersicht", sub: `${SUBJECTS.length} F\xE4cher` };
    if (screen === "progress") return { title: "Mein Fortschritt", sub: `${SUBJECTS.filter((s) => calcCompletion(s, progress[s.name]).overall > 0).length} F\xE4cher in Bearbeitung` };
    if (screen === "modes" && course) return { title: course.name, sub: course.description || "" };
    if (screen === "flashcards") return { title: "Karteikarten", sub: `${course?.kk?.length || 0} Karten \xB7 ${course?.name}` };
    if (screen === "flashcards-sr") return { title: "Karteikarten \xB7 Wiederholung", sub: `Abstandswiederholung \xB7 ${course?.name}` };
    if (screen === "fillblanks") return { title: "L\xFCckentext", sub: `${course?.lt?.length || 0} Aufgaben \xB7 ${course?.name}` };
    if (screen === "mc") return { title: "Multiple Choice", sub: `${course?.mc?.length || 0} Fragen \xB7 ${course?.name}` };
    if (screen === "kk-mc-mix") return { title: "Gemischt", sub: `${course?.kk?.length || 0} Karten + ${course?.mc?.length || 0} MC \xB7 ${course?.name}` };
    if (screen === "theory-index") return { title: "Theorie", sub: `${(course?.theory || []).filter((t) => !t.hidden).length} Abschnitte \xB7 ${course?.name}` };
    if (screen === "theory-reader") return { title: getTheoryItems(course)[theorySec]?.title || getTheoryModeLabel(course), sub: course?.name };
    if (screen === "macro-diagrams") return { title: "Makro-Diagramme", sub: "Interaktive Modellgrafiken" };
    if (screen === "pathways") return { title: "Stoffwechselwege", sub: `${(course?.pathways || []).length} Wege \xB7 ${course?.name}` };
    return { title: "", sub: "" };
  };
  const { title, sub } = headerTitle();
  const p = { course, th, progress, updateProgress };
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100vh", background: th.bg, display: "flex", fontFamily: "'DM Sans',sans-serif", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 224, background: sidebarBg, display: "flex", flexDirection: "column", padding: "28px 0", flexShrink: 0, borderRight: navBorder } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "0 24px 28px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 600, color: th.text } }, "Lern", /* @__PURE__ */ React.createElement("span", { style: { color: ACCENT } }, "app"))), /* @__PURE__ */ React.createElement("nav", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "0 12px" } }, navItems.map((item) => {
    const active = screen === item.id;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: item.id,
        onClick: () => go(item.id),
        style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, background: active ? th.isDark ? "#2A2A27" : "#FFF" : "transparent", cursor: "pointer" }
      },
      /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: active ? ACCENT : th.subtext, strokeWidth: "1.8", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: item.ico })),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: active ? 500 : 400, color: active ? th.text : th.subtext } }, item.label)
    );
  })), course && !["courses", "progress"].includes(screen) && /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 12px 0", borderTop: navBorder, marginTop: 12 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 10, fontWeight: 600, color: th.subtext, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 12px", marginBottom: 6 } }, "Lernmodi"), studyModes.map((m) => {
    const active = screen === m.id || screen === "theory-reader" && m.id === "theory-index" || screen === "pathways" && m.id === "pathways" || screen === "kk-mc-mix" && m.id === "kk-mc-mix";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: m.id,
        onClick: () => go(m.id),
        style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, background: active ? th.isDark ? "#2A2A27" : "#FFF" : "transparent", cursor: "pointer", marginBottom: 2 }
      },
      /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: "50%", background: m.color, flexShrink: 0 } }),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: active ? 500 : 400, color: active ? th.text : th.subtext } }, m.label)
    );
  })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", padding: "0 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "12px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleTheme,
      style: { display: "flex", alignItems: "center", gap: 8, background: "none", border: th.border, borderRadius: 8, padding: "7px 12px", cursor: "pointer", color: th.subtext, fontFamily: "'DM Sans',sans-serif", fontSize: 13, width: "100%" }
    },
    isDark ? /* @__PURE__ */ React.createElement(IcoSun, null) : /* @__PURE__ */ React.createElement(IcoMoon, null),
    isDark ? "Heller Modus" : "Dunkler Modus"
  )))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 36px", borderBottom: th.border, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 21, fontFamily: "'Playfair Display',serif", fontWeight: 500, color: th.text } }, title), sub && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: th.subtext, marginTop: 1 } }, sub)), !["courses", "progress"].includes(screen) && course && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        if (screen === "modes") {
          setCourse(null);
          go("courses");
        } else {
          go("modes");
        }
      },
      style: { display: "flex", alignItems: "center", gap: 7, padding: "8px 16px", background: th.cardBg, border: th.border, borderRadius: 8, color: th.text, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }
    },
    /* @__PURE__ */ React.createElement(ChevL, { c: th.text, s: 16 }),
    screen === "modes" ? "Zur Fach\xFCbersicht" : "Alle Modi"
  )), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflow: "auto", padding: "28px 36px", display: "flex", flexDirection: "column" } }, screen === "courses" && /* @__PURE__ */ React.createElement(DeskCourses, { th, progress, onSelect: selectCourse }), screen === "progress" && /* @__PURE__ */ React.createElement(DeskProgress, { th, progress, onCourse: (s) => {
    setCourse(s);
    go("modes");
  }, onResetAll: onResetAllProgress }), screen === "modes" && course && /* @__PURE__ */ React.createElement(DeskModes, { th, progress, course, onMode: go, onBackToCourses: () => {
    setCourse(null);
    go("courses");
  } }), screen === "pathways" && course && /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto", width: "100%", flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4, flex: 1, minHeight: 480, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(PathwaysScreen, { hideTopBar: true, course, th, progress, updateProgress, onBack: () => go("modes") }))), screen === "macro-diagrams" && canAccessMacroDiagrams && /* @__PURE__ */ React.createElement("div", { style: { width: "100%", flex: 1, minHeight: 0 } }, /* @__PURE__ */ React.createElement(MacroDiagramsScreen, { th, onBack: () => {
    setCourse(null);
    go("courses");
  }, backLabel: "F\xE4cher" })), screen === "flashcards" && course && /* @__PURE__ */ React.createElement("div", { className: "anim-slide desk-flashcards-shell" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskFlash, { ...p, srMode: false, onOpenTheory: openTheory }))), screen === "flashcards-sr" && course && /* @__PURE__ */ React.createElement("div", { className: "anim-slide desk-flashcards-shell" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskFlash, { ...p, srMode: true, onOpenTheory: openTheory }))), screen === "fillblanks" && course && /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 580, margin: "0 auto" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskFill, { ...p }))), screen === "mc" && course && /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1080, width: "100%", margin: "0 auto" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskMC, { ...p }))), screen === "kk-mc-mix" && course && courseSupportsKkMcMix(course) && /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1240, width: "100%", margin: "0 auto" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskKkMcMix, { ...p, onOpenTheory: openTheory }))), screen === "theory-index" && course && /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 580, margin: "0 auto" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskTheoryIndex, { ...p, onSection: (i) => {
    setTheorySec(i);
    go("theory-reader");
  } }))), screen === "theory-reader" && course && /* @__PURE__ */ React.createElement("div", { style: course?.scriptPdfs ? { width: "100%", height: "100%", minHeight: 0, margin: 0 } : { maxWidth: 580, margin: "0 auto" }, className: "anim-slide" }, /* @__PURE__ */ React.createElement("div", { style: course?.scriptPdfs ? { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4, width: "100%", height: "100%", minHeight: 0, display: "flex", flexDirection: "column" } : { background: th.cardBg, border: th.border, borderRadius: CARD_R + 4 } }, /* @__PURE__ */ React.createElement(DeskTheoryReader, { ...p, sectionIdx: theorySec, onBack: () => go("theory-index"), onChange: setTheorySec }))))));
}
function App() {
  const [isDark, setIsDark] = React.useState(
    () => (localStorage.getItem(THEME_KEY) || "dark") === "dark"
  );
  const [progress, setProgress] = React.useState(loadProgress);
  const syncReadyRef = React.useRef(false);
  const lastPushedRef = React.useRef("");
  const syncTimerRef = React.useRef(null);
  const userIdRef = React.useRef(typeof window !== "undefined" ? window.LA_USER_PROGRESS_ID || null : null);
  const isMobile = useIsMobile();
  const th = getTheme(isDark);
  React.useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);
  React.useEffect(() => {
    const userId = typeof window !== "undefined" ? window.LA_USER_PROGRESS_ID || null : null;
    userIdRef.current = userId;
    if (!userId) {
      syncReadyRef.current = true;
      return;
    }
    let cancelled = false;
    (async () => {
      const cloud = await pullCloudProgress(userId);
      if (cancelled) return;
      const local = loadProgress();
      const localTs = getLocalProgressTimestamp(local);
      const cloudTs = cloud?.ts || 0;
      if (cloud && cloudTs > localTs) {
        const merged = cloud.progress;
        if (!merged[GLOBAL_KEY]) merged[GLOBAL_KEY] = initGlobalMeta();
        localStorage.setItem(getProgKey(), JSON.stringify(merged));
        setProgress(merged);
        lastPushedRef.current = JSON.stringify(merged);
      } else {
        const payload = JSON.parse(JSON.stringify(local));
        stampProgress(payload);
        localStorage.setItem(getProgKey(), JSON.stringify(payload));
        setProgress(payload);
        await pushCloudProgress(userId, payload);
        lastPushedRef.current = JSON.stringify(payload);
      }
      syncReadyRef.current = true;
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  React.useEffect(() => {
    const userId = userIdRef.current;
    if (!syncReadyRef.current || !userId) return;
    const payload = JSON.stringify(progress);
    if (payload === lastPushedRef.current) return;
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(async () => {
      const ok = await pushCloudProgress(userId, progress);
      if (ok) lastPushedRef.current = payload;
    }, 1200);
    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [progress]);
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };
  const updateProgress = (courseName, updater) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (!next[GLOBAL_KEY]) next[GLOBAL_KEY] = initGlobalMeta();
      if (!next[courseName]) {
        next[courseName] = initCP();
      } else {
        next[courseName] = {
          ...next[courseName],
          fc: [...next[courseName].fc || []],
          fb: [...next[courseName].fb || []],
          th: [...next[courseName].th || []],
          mc: { ...next[courseName].mc || { best: 0, attempts: 0 } },
          pw: JSON.parse(JSON.stringify(next[courseName].pw || {})),
          sr: { ...next[courseName].sr || {} }
        };
      }
      updater(next[courseName]);
      next[courseName].lastStudied = Date.now();
      touchStudyDay(next);
      stampProgress(next);
      localStorage.setItem(getProgKey(), JSON.stringify(next));
      return next;
    });
  };
  const resetAllProgress = () => {
    if (!window.confirm("Gesamten Fortschritt f\xFCr dieses Konto l\xF6schen? (Alle F\xE4cher, Karten, Streak)")) return;
    const empty = { [GLOBAL_KEY]: initGlobalMeta() };
    stampProgress(empty);
    localStorage.setItem(getProgKey(), JSON.stringify(empty));
    setProgress(empty);
  };
  return isMobile ? /* @__PURE__ */ React.createElement(MobileApp, { th, isDark, progress, updateProgress, toggleTheme, onResetAllProgress: resetAllProgress }) : /* @__PURE__ */ React.createElement(DesktopApp, { th, isDark, progress, updateProgress, toggleTheme, onResetAllProgress: resetAllProgress });
}
ReactDOM.createRoot(document.getElementById("react-root")).render(/* @__PURE__ */ React.createElement(App, null));
