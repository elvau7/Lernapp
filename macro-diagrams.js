/*
 * Makro-Diagramme Single-File Bundle.
 */
(function registerMacroDiagramsConfig() {
  window.LA_MACRO_DIAGRAMS = {
    title: "Makrooekonomik Diagramme",
    srcDoc: `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Makrooekonomik Diagramm</title><style>/* style.css – Makrooekonomik Diagramm Web App */
/* Color palette matches the Tkinter version */

:root {
  --bg:      #f5f6f8;
  --card:    #ffffff;
  --accent:  #3b6fd4;
  --accent2: #dce8ff;
  --text:    #1a1d23;
  --muted:   #64748b;
  --border:  #dde1e7;
  --danger:  #c0392b;
  --danger-bg: #fdf2f2;
  --font: 'Segoe UI', system-ui, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font);
  font-size: 13px;
  background: var(--bg);
  color: var(--text);
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Top bar ─────────────────────────────────────────────────── */
#topbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  background: var(--card);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
  flex-wrap: wrap;
}

#topbar h1 {
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  white-space: nowrap;
  margin-right: 4px;
}

.topbar-sep { color: var(--border); margin: 0 2px; }

#layout-select, #szenario-select {
  padding: 3px 6px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--card);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;
}

#szenario-select { min-width: 180px; }

.btn {
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--card);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s;
}
.btn:hover { background: var(--accent2); border-color: var(--accent); }

.btn-accent {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.btn-accent:hover { background: #2d5bbf; }

.btn-danger {
  background: var(--danger-bg);
  color: var(--danger);
  border-color: #f5c6c6;
}
.btn-danger:hover { background: #fce4e4; }

.btn-sm { padding: 2px 7px; font-size: 11px; }

/* ── Main layout ─────────────────────────────────────────────── */
#main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* ── Sidebar ─────────────────────────────────────────────────── */
#sidebar {
  width: 340px;
  min-width: 260px;
  background: var(--card);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

#sidebar-scroll {
  overflow-y: auto;
  flex: 1;
  padding: 8px;
}

#sidebar-scroll::-webkit-scrollbar { width: 6px; }
#sidebar-scroll::-webkit-scrollbar-track { background: var(--bg); }
#sidebar-scroll::-webkit-scrollbar-thumb { background: #c0c8d4; border-radius: 3px; }

/* Panel tabs */
#panel-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  background: var(--bg);
  flex-shrink: 0;
}

.panel-tab {
  padding: 3px 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--card);
  cursor: pointer;
  font-size: 12px;
  transition: all 0.15s;
}
.panel-tab.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.panel-tab:hover:not(.active) { background: var(--accent2); }

/* Sections */
.section {
  margin-bottom: 8px;
}

.section-header {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 6px 4px 4px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 6px;
}

/* Form rows */
.form-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
}

.form-row label {
  font-size: 11px;
  color: var(--muted);
  width: 58px;
  flex-shrink: 0;
}

.form-row input[type=text],
.form-row input[type=number],
.form-row select {
  flex: 1;
  padding: 3px 5px;
  border: 1px solid var(--border);
  border-radius: 3px;
  background: var(--card);
  color: var(--text);
  font-size: 12px;
  min-width: 0;
}

.form-row input[type=text]:focus,
.form-row input[type=number]:focus,
.form-row select:focus {
  outline: none;
  border-color: var(--accent);
}

.range-row {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}

.range-row label {
  font-size: 11px;
  color: var(--muted);
  width: 58px;
  flex-shrink: 0;
}

.range-row input[type=range] {
  flex: 1;
  min-width: 0;
  accent-color: var(--accent);
  cursor: pointer;
}

.range-row .range-val {
  width: 40px;
  padding: 2px 4px;
  border: 1px solid var(--border);
  border-radius: 3px;
  font-size: 11px;
  text-align: right;
  background: var(--card);
  color: var(--text);
  flex-shrink: 0;
}

/* Color picker */
.color-btn {
  width: 24px;
  height: 22px;
  border: 1px solid var(--border);
  border-radius: 3px;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

input[type=color] {
  width: 24px;
  height: 22px;
  border: 1px solid var(--border);
  border-radius: 3px;
  cursor: pointer;
  padding: 1px;
  background: var(--card);
  flex-shrink: 0;
}

/* Checkbox rows */
.check-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-size: 12px;
}

.check-row input[type=checkbox] { accent-color: var(--accent); cursor: pointer; }

/* Curve cards */
.curve-card {
  border: 1px solid var(--border);
  border-radius: 5px;
  margin-bottom: 6px;
  background: var(--bg);
  overflow: hidden;
}

.curve-card-header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 7px;
  background: var(--card);
  cursor: pointer;
  user-select: none;
}

.curve-card-header:hover { background: var(--accent2); }

.curve-card-title {
  flex: 1;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.curve-card-body {
  padding: 8px;
  display: none;
}

.curve-card.open .curve-card-body { display: block; }

.curve-card-toggle {
  font-size: 10px;
  color: var(--muted);
  transition: transform 0.15s;
}

.curve-card.open .curve-card-toggle { transform: rotate(90deg); }

/* Add curve buttons */
#add-curve-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

/* Sync row */
.sync-row {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 5px;
  font-size: 11px;
  color: var(--muted);
}
.sync-row select { flex: 1; font-size: 11px; padding: 2px 4px; border: 1px solid var(--border); border-radius: 3px; background: var(--card); }
.sync-row label { flex-shrink: 0; }

/* ── Content area ────────────────────────────────────────────── */
#content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 8px;
  gap: 8px;
}

#chart-container {
  flex: 1;
  min-height: 200px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--card);
  overflow: hidden;
}

#chart { width: 100%; height: 100%; }

/* Bottom panels */
#bottom-panels {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  height: 170px;
}

.bottom-card {
  flex: 1;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 8px;
  min-width: 160px;
  overflow-y: auto;
}

.bottom-card-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 4px;
}

/* Equilibrium list */
.eq-row {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
  font-size: 11px;
}
.eq-row .eq-coords { color: var(--muted); flex-shrink: 0; width: 90px; }
.eq-row input[type=text] {
  flex: 1;
  min-width: 0;
  padding: 2px 4px;
  border: 1px solid var(--border);
  border-radius: 3px;
  font-size: 11px;
  background: var(--card);
}

/* Extra points/arrows */
.extra-item {
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 5px;
  background: var(--bg);
}

.extra-item-header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  background: var(--card);
  cursor: pointer;
}
.extra-item-header:hover { background: var(--accent2); }

.extra-item-body {
  padding: 7px;
  display: none;
}
.extra-item.open .extra-item-body { display: block; }

/* Position group */
.pos-group {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 4px;
}

.pos-group-title {
  font-size: 10px;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 4px;
}

.pos-fields { /* dynamic */ }


/* Muted text */
.muted { color: var(--muted); font-style: italic; font-size: 11px; }

/* Axis range row (min–max inline) */
.axis-range-row {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.axis-range-row label {
  font-size: 11px;
  color: var(--muted);
  width: 18px;
  flex-shrink: 0;
  font-weight: 600;
}
.axis-range-row input[type=number] {
  flex: 1;
  padding: 3px 4px;
  border: 1px solid var(--border);
  border-radius: 3px;
  background: var(--card);
  color: var(--text);
  font-size: 11px;
  min-width: 0;
}
.axis-range-row .sep {
  font-size: 11px;
  color: var(--muted);
  flex-shrink: 0;
}
.axis-range-row .range-label {
  font-size: 10px;
  color: var(--muted);
  flex-shrink: 0;
  width: 28px;
}

/* Custom equation card styles */
.custom-expr-input {
  width: 100%;
  padding: 4px 6px;
  border: 1px solid var(--border);
  border-radius: 3px;
  background: var(--card);
  color: var(--text);
  font-size: 12px;
  font-family: monospace;
  margin-bottom: 4px;
  box-sizing: border-box;
}
.custom-expr-input:focus { outline: none; border-color: var(--accent); }
.custom-expr-error { font-size: 10px; color: var(--danger); margin-bottom: 4px; font-style: italic; }
.custom-mode-toggle {
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
}
.custom-mode-toggle button {
  flex: 1;
  padding: 3px 6px;
  font-size: 11px;
  border: 1px solid var(--border);
  border-radius: 3px;
  background: var(--card);
  cursor: pointer;
}
.custom-mode-toggle button.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

/* Clip group */
.clip-group {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 4px;
}

/* Tooltip-like tag */
.tag {
  display: inline-block;
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  background: var(--accent2);
  color: var(--accent);
  font-weight: 600;
}
</style><script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script></head><body><div id="topbar"><h1>Makrooekonomik Diagramm</h1><span class="topbar-sep">|</span><label style="font-size:12px;color:var(--muted)">Layout:</label><select id="layout-select"><option value="1×1">1×1</option><option value="1+1 (übereinander)">1+1 (übereinander)</option><option value="1+1 (nebeneinander)">1+1 (nebeneinander)</option><option value="2×2">2×2</option></select><span class="topbar-sep">|</span><label style="font-size:12px;color:var(--muted)">Szenario:</label><select id="szenario-select"></select><button class="btn btn-sm" id="szenario-laden-btn">Laden</button><span class="topbar-sep">|</span><button class="btn btn-sm btn-danger" id="reset-btn">Reset</button><span class="topbar-sep">|</span><input id="export-px" type="number" min="100" max="8000" step="100" value="1920" style="width:58px;padding:3px 4px;border:1px solid var(--border);border-radius:4px;font-size:12px;background:var(--card);color:var(--text)" title="Basis-Auflösung in px"><label style="font-size:12px;color:var(--muted)">px ×</label><input id="export-scale" type="number" min="0.5" max="8" step="0.5" value="2" style="width:40px;padding:3px 4px;border:1px solid var(--border);border-radius:4px;font-size:12px;background:var(--card);color:var(--text)" title="Scale-Multiplikator"><button class="btn btn-sm" id="export-png">⬇ PNG</button><button class="btn btn-sm" id="export-svg">⬇ SVG</button></div><div id="main"><div id="sidebar"><div id="panel-tabs"></div><div id="sidebar-scroll"><div id="sidebar-content"></div></div></div><div id="content"><div id="chart-container"><div id="chart"></div></div><div id="bottom-panels"><div class="bottom-card" id="eq-card"><div class="bottom-card-title">Gleichgewichtspunkte</div><div id="eq-list"></div></div><div class="bottom-card" id="extra-punkte-card"><div class="bottom-card-title" style="display:flex;justify-content:space-between;align-items:center"><span>Eigene Punkte</span><button class="btn btn-sm btn-accent" id="add-punkt-btn">+ Punkt</button></div><div id="extra-punkte-list"></div></div><div class="bottom-card" id="extra-pfeile-card"><div class="bottom-card-title" style="display:flex;justify-content:space-between;align-items:center"><span>Eigene Pfeile</span><button class="btn btn-sm btn-accent" id="add-pfeil-btn">+ Pfeil</button></div><div id="extra-pfeile-list"></div></div></div></div></div><script>// curves.js – Math layer ported from islm_ui.py
// =============================================================================

const T_FALLEND      = 'fallend';
const T_STEIGEND     = 'steigend';
const T_LINEAR_FALL  = 'linear_fall';
const T_LINEAR_RISE  = 'linear_rise';
const T_GRAD45       = '45-Grad';
const T_HORIZONTAL   = 'horizontal';
const T_VERTIKAL     = 'vertikal';
const T_CUSTOM       = 'custom';
const ALLE_TYPEN     = [T_FALLEND, T_STEIGEND, T_LINEAR_FALL, T_LINEAR_RISE, T_GRAD45, T_HORIZONTAL, T_VERTIKAL, T_CUSTOM];
const TYP_LABEL      = {
  [T_FALLEND]:     'Fallend (IS/AD)',
  [T_STEIGEND]:    'Steigend (ZZ/AS)',
  [T_LINEAR_FALL]: 'Linear ↘ (y=a−bx)',
  [T_LINEAR_RISE]: 'Linear ↗ (y=c+bx)',
  [T_GRAD45]:      '45°-Linie',
  [T_HORIZONTAL]:  'Horizontal (LM)',
  [T_VERTIKAL]:    'Vertikal (AS klass.)',
  [T_CUSTOM]:      'Eigene Gleichung',
};

// --------------------------------------------------------------------------
// Helpers

function linspace(start, stop, n) {
  const arr = new Array(n);
  const step = (stop - start) / (n - 1);
  for (let i = 0; i < n; i++) arr[i] = start + i * step;
  return arr;
}

function clamp(val, lo, hi) { return Math.max(lo, Math.min(hi, val)); }

// --------------------------------------------------------------------------
// Curve math

/** Compute y for a single x value (returns null for vertical/custom curves) */
function curveYVal(cfg, x) {
  x = Math.max(x, 1e-9);
  switch (cfg.typ) {
    case T_FALLEND:      return cfg.a - cfg.b * Math.pow(x, cfg.k);
    case T_STEIGEND:     return cfg.c + cfg.b_s * Math.pow(x, cfg.k_s);
    case T_LINEAR_FALL:  return cfg.a - cfg.b * x;
    case T_LINEAR_RISE:  return cfg.c + cfg.b_s * x;
    case T_GRAD45:       return x;
    case T_HORIZONTAL:   return cfg.h;
    default:             return null;  // T_VERTIKAL, T_CUSTOM handled elsewhere
  }
}

/** Compute y-array for an x-array */
function curveYArray(cfg, X) {
  if (cfg.typ === T_VERTIKAL || cfg.typ === T_CUSTOM) return null;
  return X.map(x => curveYVal(cfg, x));
}

/** Analytical x from y for falling curve: x = ((a-y)/b)^(1/k) */
function curveXFromY(y, a, b, k) {
  const val = (a - y) / b;
  return val <= 0 ? null : Math.pow(val, 1.0 / k);
}

// --------------------------------------------------------------------------
// Intersection

/** Sign-change intersection detection on a common x-grid */
function schnittpunkte(X, y1, y2) {
  const pts = [];
  const n = X.length;
  for (let i = 0; i < n - 1; i++) {
    const d0 = y1[i] - y2[i];
    const d1 = y1[i+1] - y2[i+1];
    if (d0 === d1) continue;
    if (Math.sign(d0) !== Math.sign(d1)) {
      const xe = X[i] - d0 * (X[i+1] - X[i]) / (d1 - d0);
      const t  = (xe - X[i]) / (X[i+1] - X[i]);
      const ye = y1[i] + t * (y1[i+1] - y1[i]);
      pts.push([xe, ye]);
    }
  }
  return pts;
}

/**
 * Compute intersection(s) of two curves, analytically where possible.
 * Returns array of [xe, ye] pairs within pan's axis bounds.
 */
function schnittpunktZweiKurven(pan, cfg1, cfg2, X) {
  const { xMin, xMax, yMin, yMax } = pan;
  const inBounds = ([xe, ye]) =>
    xe > xMin * 0.99 && xe < xMax * 1.01 && ye > yMin - 0.1 && ye < yMax * 1.01;

  // Horizontal ∩ Falling (analytical)
  if (cfg1.typ === T_HORIZONTAL && cfg2.typ === T_FALLEND) {
    const h = cfg1.h, xe = curveXFromY(h, cfg2.a, cfg2.b, cfg2.k);
    return (xe !== null && inBounds([xe, h])) ? [[xe, h]] : [];
  }
  if (cfg2.typ === T_HORIZONTAL && cfg1.typ === T_FALLEND) {
    return schnittpunktZweiKurven(pan, cfg2, cfg1, X);
  }

  // Horizontal ∩ Rising (analytical)
  if (cfg1.typ === T_HORIZONTAL && cfg2.typ === T_STEIGEND) {
    const h = cfg1.h, val = (h - cfg2.c) / cfg2.b_s;
    if (val > 0) {
      const xe = Math.pow(val, 1.0 / cfg2.k_s);
      if (inBounds([xe, h])) return [[xe, h]];
    }
    return [];
  }
  if (cfg2.typ === T_HORIZONTAL && cfg1.typ === T_STEIGEND) {
    return schnittpunktZweiKurven(pan, cfg2, cfg1, X);
  }

  // Horizontal ∩ Linear Fall (analytical): h = a - b*x → x = (a-h)/b
  if (cfg1.typ === T_HORIZONTAL && cfg2.typ === T_LINEAR_FALL) {
    const h = cfg1.h, xe = (cfg2.a - h) / cfg2.b;
    return (xe > 0 && inBounds([xe, h])) ? [[xe, h]] : [];
  }
  if (cfg2.typ === T_HORIZONTAL && cfg1.typ === T_LINEAR_FALL) {
    return schnittpunktZweiKurven(pan, cfg2, cfg1, X);
  }

  // Horizontal ∩ Linear Rise (analytical): h = c + b*x → x = (h-c)/b
  if (cfg1.typ === T_HORIZONTAL && cfg2.typ === T_LINEAR_RISE) {
    const h = cfg1.h, xe = (h - cfg2.c) / cfg2.b_s;
    return (xe > 0 && inBounds([xe, h])) ? [[xe, h]] : [];
  }
  if (cfg2.typ === T_HORIZONTAL && cfg1.typ === T_LINEAR_RISE) {
    return schnittpunktZweiKurven(pan, cfg2, cfg1, X);
  }

  // Linear Fall ∩ Linear Rise (analytical): a - b*x = c + d*x → x = (a-c)/(b+d)
  if (cfg1.typ === T_LINEAR_FALL && cfg2.typ === T_LINEAR_RISE) {
    const denom = cfg1.b + cfg2.b_s;
    if (Math.abs(denom) < 1e-9) return [];
    const xe = (cfg1.a - cfg2.c) / denom;
    const ye = cfg1.a - cfg1.b * xe;
    return inBounds([xe, ye]) ? [[xe, ye]] : [];
  }
  if (cfg1.typ === T_LINEAR_RISE && cfg2.typ === T_LINEAR_FALL) {
    return schnittpunktZweiKurven(pan, cfg2, cfg1, X);
  }

  // Vertical ∩ anything
  if (cfg1.typ === T_VERTIKAL) {
    if (cfg2.typ === T_VERTIKAL) return [];
    const xv = cfg1.x_v;
    const ye = curveYVal(cfg2, xv);
    return (ye !== null && inBounds([xv, ye])) ? [[xv, ye]] : [];
  }
  if (cfg2.typ === T_VERTIKAL) return schnittpunktZweiKurven(pan, cfg2, cfg1, X);

  // Numerical (covers T_CUSTOM and any remaining combinations)
  const y1a = curveYArray(cfg1, X);
  const y2a = curveYArray(cfg2, X);
  if (!y1a || !y2a) return [];
  return schnittpunkte(X, y1a, y2a).filter(inBounds);
}

// --------------------------------------------------------------------------
// Predefined Scenarios (ported from Python SZENARIEN)

const SZENARIEN = {
  '– Szenario –': null,
  'IS-LM Standard': {
    layout: '1×1',
    panels: [{
      xLabel: 'Produktion Y', yLabel: 'Zinssatz i',
      xMax: 9.0, yMax: 8.5,
      kurven: [
        { typ: T_FALLEND,    a:10, b:2, k:0.6, label:'IS₀',   farbe:'#444444' },
        { typ: T_HORIZONTAL, h:5,             label:'LM(i₀)', farbe:'#cc0000' },
      ],
    }],
  },
  'IS-LM Verschiebung (IS links)': {
    layout: '1×1',
    panels: [{
      xLabel: 'Produktion Y', yLabel: 'Zinssatz i',
      xMax: 9.0, yMax: 8.5,
      kurven: [
        { typ: T_FALLEND,    a:10, b:2, k:0.6, label:'IS₀',   farbe:'#555555' },
        { typ: T_FALLEND,    a:8,  b:2, k:0.6, label:'IS₁',   farbe:'#888888' },
        { typ: T_HORIZONTAL, h:5,             label:'LM(i₀)', farbe:'#cc0000' },
      ],
    }],
  },
  'IS-LM Zinssenkung (LM runter)': {
    layout: '1×1',
    panels: [{
      xLabel: 'Produktion Y', yLabel: 'Zinssatz i',
      xMax: 9.0, yMax: 8.5,
      kurven: [
        { typ: T_FALLEND,    a:10, b:2, k:0.6, label:'IS',     farbe:'#3355cc' },
        { typ: T_HORIZONTAL, h:5,             label:"LM(i₀)",  farbe:'#cc0000' },
        { typ: T_HORIZONTAL, h:4,             label:"LM'(i₁)", farbe:'#ee4400' },
      ],
    }],
  },
  'Geldmarkt (Md-Verschiebung)': {
    layout: '1×1',
    panels: [{
      xLabel: 'Geldmenge M', yLabel: 'Zinssatz i',
      xMax: 9.0, yMax: 8.5,
      kurven: [
        { typ: T_FALLEND,    a:10, b:2, k:0.6, label:"Mᵈ",   farbe:'#ffaaaa' },
        { typ: T_FALLEND,    a:13, b:2, k:0.6, label:"Mᵈ'",  farbe:'#cc0000' },
        { typ: T_HORIZONTAL, h:5,             label:"Mˢ",    farbe:'#444444' },
      ],
    }],
  },
  'Geldmarkt (Ms vertikal)': {
    layout: '1×1',
    panels: [{
      xLabel: 'Geldmenge M', yLabel: 'Zinssatz i',
      xMax: 9.0, yMax: 8.5,
      kurven: [
        { typ: T_FALLEND,  a:10, b:2, k:0.6, label:"Mᵈ",   farbe:'#3355cc' },
        { typ: T_VERTIKAL, x_v:4,            label:"Mˢ",    farbe:'#444444' },
        { typ: T_VERTIKAL, x_v:6,            label:"Mˢ'",   farbe:'#888888' },
      ],
    }],
  },
  'AS-AD Klassisch': {
    layout: '1×1',
    panels: [{
      xLabel: 'Produktion Y', yLabel: 'Preisniveau P',
      xMax: 9.0, yMax: 9.0,
      kurven: [
        { typ: T_FALLEND,  a:12, b:1.5, k:0.7, label:'AD', farbe:'#3355cc' },
        { typ: T_VERTIKAL, x_v:5,              label:'AS', farbe:'#cc0000' },
      ],
    }],
  },
  'ZZ-IS Ableitung': {
    layout: '1+1 (übereinander)',
    title: 'Ableitung der IS-Kurve aus dem ZZ-Diagramm',
    panels: [
      {
        xLabel: 'Produktion Y', yLabel: 'Nachfrage Z',
        xMax: 9.0, yMax: 9.0, verbinden: true,
        kurven: [
          { typ: T_GRAD45,   label:'45°',      farbe:'#666666', ls:'--', lw:1.5 },
          { typ: T_STEIGEND, c:1.5, b_s:0.75, k_s:1.0, label:'ZZ(i₀)', farbe:'#cc0000' },
          { typ: T_STEIGEND, c:2.5, b_s:0.75, k_s:1.0, label:'ZZ(i₁)', farbe:'#ff8888' },
        ],
      },
      {
        xLabel: 'Produktion Y', yLabel: 'Zinssatz i',
        xMax: 9.0, yMax: 8.5,
        kurven: [
          { typ: T_FALLEND,    a:10, b:2, k:0.6, label:'IS',  farbe:'#3355cc' },
          { typ: T_HORIZONTAL, h:5.0, label:'i₀', farbe:'#cc0000', ls:'--', lw:1.5 },
          { typ: T_HORIZONTAL, h:3.5, label:'i₁', farbe:'#ff8888', ls:'--', lw:1.5 },
        ],
      },
    ],
  },
  'ZZ-Diagramm (Nachfrage)': {
    layout: '1×1',
    panels: [{
      xLabel: 'Produktion (Einkommen) Y', yLabel: 'Nachfrage Z',
      xMax: 9.0, yMax: 9.0,
      kurven: [
        { typ: T_GRAD45,   label:'45°',       farbe:'#888888', ls:'--', lw:1.5 },
        { typ: T_STEIGEND, c:1.5, b_s:0.75, k_s:1.0, label:'Nachfrage ZZ', farbe:'#cc0000' },
      ],
    }],
  },
};
</script><script>// app.js – Main application logic
// =============================================================================

// ── State ────────────────────────────────────────────────────────────────────

let _idCounter = 0;
function uid() { return ++_idCounter; }

function newCurve(typ) {
  return {
    id: uid(), typ,
    aktiv: true,
    // Fallend
    a: 10, b: 2, k: 0.6,
    // Steigend
    c: 1.5, b_s: 0.75, k_s: 1.0,
    // Horizontal
    h: 5,
    // Vertikal
    x_v: 4,
    // Display
    label: '', farbe: '#1a1d23', label_farbe: '',
    ls: '-', lw: 2,
    // Axis label
    achsen_label: '', achsen_seite: 'auto',
    // Sync
    sync_ref1: '–', sync_ref2: '–',
    // Clipping / end style
    endCap: 'normal',        // 'normal' | 'along' | 'to_axis'
    xFromMode: 'panel',      // 'panel' | 'custom' | 'at_curve'
    xToMode:   'panel',
    xFromVal:  0,
    xToVal:    12,
    xFromCurve: '–',
    xToCurve:   '–',
    // Vertical clip (y-range)
    yFromMode: 'panel', yToMode: 'panel',
    yFromVal: 0, yToVal: 12,
    yFromCurve: '–', yToCurve: '–',
    // Label positioning & size
    label_pos: 'auto',    // 'auto' | 'manual'
    label_x: 5, label_y: 5,
    label_size: 'M',      // 'S'=9 | 'M'=11 | 'L'=14
    // Axis label positioning & size
    achsen_label_pos: 'auto',
    achsen_label_x: 0, achsen_label_y: 0,
    achsen_label_size: 'M',
    // Custom equation
    customExpr: 'a - b*x',
    customMode: 'parametric', // 'expression' | 'parametric'
    custom_a: 8, custom_b: 1, custom_c: 1,
    // UI state
    open: false,
  };
}

function newPanel() {
  return {
    id: uid(),
    kurven: [],
    extraPunkte: [],
    extraPfeile: [],
    eqOverrides: [],  // {id, label, farbe, sichtbar, xe, ye}
    _letzeEq: [],
    xLabel: 'Y', yLabel: 'i',
    xMin: 0, xMax: 12,
    yMin: 0, yMax: 12,
    gleichgew: true,
    linien: true,
    pfeile: false,
    achsenZahlen: false,
    verbinden: false,
    // Global thickness multiplier (1 = default, 2 = double, etc.)
    thickMult: 1.0,
  };
}

function newExtraPunkt() {
  return {
    id: uid(), label: '', farbe: '#cc0000',
    sichtbar: true, linien: false,
    ptSize: 9,
    modus: 'manuell', x: 5, y: 5,
    kurveRef: '–', kurveX: 5,
    ref1: '–', ref2: '–', ref3: '–',
    open: false,
  };
}

function newExtraPfeil() {
  return {
    id: uid(), label: '', farbe: '#cc0000', sichtbar: true,
    arrowWidth: 2,
    vonModus: 'manuell', vonX: 3, vonY: 3,
    vonKurveRef: '–', vonKurveX: 3,
    vonRef1: '–', vonRef2: '–', vonRef3: '–',
    nachModus: 'manuell', nachX: 6, nachY: 6,
    nachKurveRef: '–', nachKurveX: 6,
    nachRef1: '–', nachRef2: '–', nachRef3: '–',
    open: false,
  };
}

let state = {
  panels: [],
  activePanel: 0,
  layout: '1×1',
  title: '',
  exportScale: 2,
  exportPx: 1920,
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function activePan() { return state.panels[state.activePanel] || state.panels[0]; }

/** Get curve from panel by ref string like 'Kurve 1' */
function getCurveByRef(pan, ref) {
  if (!ref || ref === '–') return null;
  const m = ref.match(/Kurve (\d+)/);
  if (!m) return null;
  return pan.kurven[parseInt(m[1]) - 1] || null;
}

/** Build list of valid curve refs for a panel */
function curveRefOptions(pan) {
  return ['–', ...pan.kurven.map((c, i) => \`Kurve \${i+1}\`)];
}

/** Effective h value (may be synced to intersection) */
function effH(cfg, pan, X) {
  if (cfg.sync_ref1 === '–' || cfg.sync_ref2 === '–') return cfg.h;
  const r1 = getCurveByRef(pan, cfg.sync_ref1);
  const r2 = getCurveByRef(pan, cfg.sync_ref2);
  if (!r1 || !r2) return cfg.h;
  const pts = schnittpunktZweiKurven(pan, r1, r2, X);
  return pts.length > 0 ? pts[0][1] : cfg.h;
}

/** Effective x_v value (may be synced to intersection) */
function effXv(cfg, pan, X) {
  if (cfg.sync_ref1 === '–' || cfg.sync_ref2 === '–') return cfg.x_v;
  const r1 = getCurveByRef(pan, cfg.sync_ref1);
  const r2 = getCurveByRef(pan, cfg.sync_ref2);
  if (!r1 || !r2) return cfg.x_v;
  const pts = schnittpunktZweiKurven(pan, r1, r2, X);
  return pts.length > 0 ? pts[0][0] : cfg.x_v;
}

/** Get effective curve y at a given x (accounts for sync) */
function curveYAtX(cfg, pan, X, xVal) {
  if (cfg.typ === T_VERTIKAL) return null;
  if (cfg.typ === T_HORIZONTAL) return effH(cfg, pan, X);
  if (cfg.typ === T_CUSTOM) return evalCustom(cfg, xVal);
  return curveYVal(cfg, xVal);
}

/** Get effective curve y-array (accounts for sync) */
function effectiveCurveYArray(cfg, pan, X) {
  if (cfg.typ === T_VERTIKAL) return null;
  if (cfg.typ === T_HORIZONTAL) {
    const h = effH(cfg, pan, X);
    return X.map(() => h);
  }
  return curveYArray(cfg, X);
}

/** Effective schnittpunktZweiKurven with sync applied */
function effSchnittpunkt(pan, cfg1, cfg2, X) {
  // Create effective copies for horizontal/vertical
  const eff1 = cfg1.typ === T_HORIZONTAL ? { ...cfg1, h: effH(cfg1, pan, X) }
             : cfg1.typ === T_VERTIKAL   ? { ...cfg1, x_v: effXv(cfg1, pan, X) }
             : cfg1;
  const eff2 = cfg2.typ === T_HORIZONTAL ? { ...cfg2, h: effH(cfg2, pan, X) }
             : cfg2.typ === T_VERTIKAL   ? { ...cfg2, x_v: effXv(cfg2, pan, X) }
             : cfg2;
  return schnittpunktZweiKurven(pan, eff1, eff2, X);
}

/** lfarbe: label color (falls back to curve color) */
function lfarbe(cfg) { return cfg.label_farbe || cfg.farbe; }

/** Compute position for custom point/arrow endpoint */
function berechnePos(pan, modus, x, y, kurveRef, kurveX, ref1, ref2, X, ref3) {
  if (modus === 'manuell') return [x, y];
  if (modus === 'auf Kurve') {
    const cfg = getCurveByRef(pan, kurveRef);
    if (!cfg) return null;
    const ye = curveYAtX(cfg, pan, X, kurveX);
    return ye !== null ? [kurveX, ye] : null;
  }
  if (modus === 'Schnittpunkt') {
    const c1 = getCurveByRef(pan, ref1);
    const c2 = getCurveByRef(pan, ref2);
    if (!c1 || !c2) return null;
    let pts = effSchnittpunkt(pan, c1, c2, X);
    if (ref3 && ref3 !== '–') {
      const c3 = getCurveByRef(pan, ref3);
      if (c3) {
        pts = pts.filter(([xe, ye]) => {
          const yc3 = curveYAtX(c3, pan, X, xe);
          return yc3 !== null && Math.abs(yc3 - ye) < 0.05;
        });
      }
    }
    return pts.length > 0 ? pts[0] : null;
  }
  return null;
}

/** Evaluate a custom equation expression for a given x */
function evalCustom(cfg, x) {
  try {
    const expr = cfg.customExpr.replace(/\^/g, '**');
    if (cfg.customMode === 'expression') {
      return new Function('x', 'Math', 'return (' + expr + ')')(x, Math);
    } else {
      return new Function('x', 'a', 'b', 'c', 'Math', 'return (' + expr + ')')(
        x, cfg.custom_a, cfg.custom_b, cfg.custom_c, Math
      );
    }
  } catch { return null; }
}

const LABEL_SIZES = { S: 9, M: 11, L: 14 };

function dashStyle(ls) {
  if (ls === '--') return 'dash';
  if (ls === ':')  return 'dot';
  return 'solid';
}

function layoutGrid(layout) {
  switch (layout) {
    case '1+1 (übereinander)':  return { rows: 2, cols: 1 };
    case '1+1 (nebeneinander)': return { rows: 1, cols: 2 };
    case '2×2':                 return { rows: 2, cols: 2 };
    default:                    return { rows: 1, cols: 1 };
  }
}

// ── Rendering ────────────────────────────────────────────────────────────────

// Snapshot of the last built figure — used by doExport to avoid stale Plotly state
let _figTraces = [];
let _figLayout  = {};

let renderTimer = null;
function scheduleRender() {
  if (renderTimer) clearTimeout(renderTimer);
  renderTimer = setTimeout(doRender, 80);
}

function doRender() {
  const { rows, cols } = layoutGrid(state.layout);
  const numPanels = rows * cols;
  const panels = state.panels.slice(0, numPanels);
  while (panels.length < numPanels) panels.push(newPanel());

  const traces = [];
  const plotlyLayout = {
    paper_bgcolor: '#f5f6f8',
    plot_bgcolor:  '#f9fafc',
    font: { family: 'Segoe UI, sans-serif', size: 11, color: '#1a1d23' },
    margin: { l: 30, r: 20, t: state.title ? 36 : 16, b: 20 },
    showlegend: false,
    shapes: [],
    annotations: [],
    ...(state.title ? { title: { text: state.title, font: { size: 13 }, x: 0.5 } } : {}),
  };

  if (rows > 1 || cols > 1) {
    plotlyLayout.grid = { rows, columns: cols, pattern: 'independent' };
  }

  const eqAll = [];  // [{panIdx, xe, ye, idx}]

  panels.forEach((pan, pi) => {
    const axKey = pi === 0 ? '' : String(pi + 1);
    const xRef  = pi === 0 ? 'x'  : \`x\${pi + 1}\`;
    const yRef  = pi === 0 ? 'y'  : \`y\${pi + 1}\`;
    const xAxis = pi === 0 ? 'xaxis'  : \`xaxis\${pi + 1}\`;
    const yAxis = pi === 0 ? 'yaxis'  : \`yaxis\${pi + 1}\`;

    const xMin = pan.xMin, xMax = pan.xMax;
    const yMin = pan.yMin, yMax = pan.yMax;
    const dx = xMax - xMin, dy = yMax - yMin;

    const X = linspace(xMin, xMax, 400);

    // Axis config
    plotlyLayout[xAxis] = {
      range: [xMin - dx * 0.02, xMax + dx * 0.14],
      showline: false, zeroline: false,
      showgrid: false,
      showticklabels: pan.achsenZahlen,
      ticks: pan.achsenZahlen ? 'outside' : '',
      tickfont: { size: 10 },
      fixedrange: false,
    };
    plotlyLayout[yAxis] = {
      range: [yMin - dy * 0.02, yMax + dy * 0.14],
      showline: false, zeroline: false,
      showgrid: false,
      showticklabels: pan.achsenZahlen,
      ticks: pan.achsenZahlen ? 'outside' : '',
      tickfont: { size: 10 },
      fixedrange: false,
      scaleanchor: xRef,
      scaleratio: 1,
    };

    // ── Axis arrow lines (shapes) ──────────────────────────────
    const tw = pan.thickMult || 1;
    const lineStyle = { color: '#1a1d23', width: 1.3 * tw };
    plotlyLayout.shapes.push(
      { type:'line', x0: xMin, y0: yMin, x1: xMax + dx*0.06, y1: yMin,
        xref: xRef, yref: yRef, line: lineStyle },
      { type:'line', x0: xMin, y0: yMin, x1: xMin, y1: yMax + dy*0.06,
        xref: xRef, yref: yRef, line: lineStyle },
    );

    // ── Axis arrowheads (annotations) ─────────────────────────
    const arrProps = { showarrow: true, text: '', arrowhead: 2, arrowsize: 1.2,
                       arrowcolor: '#1a1d23', arrowwidth: 1.3 * tw };
    // x-axis arrow
    plotlyLayout.annotations.push({
      ...arrProps,
      x: xMax + dx*0.08, y: yMin, ax: xMax + dx*0.06, ay: yMin,
      xref: xRef, yref: yRef, axref: xRef, ayref: yRef,
    });
    // y-axis arrow
    plotlyLayout.annotations.push({
      ...arrProps,
      x: xMin, y: yMax + dy*0.08, ax: xMin, ay: yMax + dy*0.06,
      xref: xRef, yref: yRef, axref: xRef, ayref: yRef,
    });
    // Axis labels
    if (pan.xLabel) {
      plotlyLayout.annotations.push({
        x: xMax + dx*0.1, y: yMin - dy*0.06,
        xref: xRef, yref: yRef, showarrow: false,
        text: pan.xLabel, font: { size: 12, color: '#1a1d23' },
        xanchor: 'center', yanchor: 'top',
      });
    }
    if (pan.yLabel) {
      plotlyLayout.annotations.push({
        x: xMin - dx*0.05, y: yMax + dy*0.08,
        xref: xRef, yref: yRef, showarrow: false,
        text: pan.yLabel, font: { size: 12, color: '#1a1d23' },
        xanchor: 'right', yanchor: 'middle',
      });
    }

    const aktiv = pan.kurven.filter(c => c.aktiv);

    // ── Curve traces ──────────────────────────────────────────
    aktiv.forEach(cfg => {
      const traceBase = {
        xaxis: xRef, yaxis: yRef,
        mode: 'lines',
        line: {
          color: cfg.farbe,
          width: cfg.lw * (pan.thickMult || 1),
          dash: dashStyle(cfg.ls),
        },
        name: cfg.label || cfg.typ,
        hoverinfo: 'x+y',
      };

      if (cfg.typ === T_VERTIKAL) {
        const xv = effXv(cfg, pan, X);

        // Y-clip
        let yFrom = yMin, yTo = yMax;
        if (cfg.yFromMode === 'custom') {
          yFrom = clamp(cfg.yFromVal, yMin, yMax);
        } else if (cfg.yFromMode === 'at_curve') {
          const rc = getCurveByRef(pan, cfg.yFromCurve);
          if (rc) { const ye = curveYAtX(rc, pan, X, xv); if (ye !== null) yFrom = clamp(ye, yMin, yMax); }
        }
        if (cfg.yToMode === 'custom') {
          yTo = clamp(cfg.yToVal, yMin, yMax);
        } else if (cfg.yToMode === 'at_curve') {
          const rc = getCurveByRef(pan, cfg.yToCurve);
          if (rc) { const ye = curveYAtX(rc, pan, X, xv); if (ye !== null) yTo = clamp(ye, yMin, yMax); }
        }
        if (yFrom > yTo) [yFrom, yTo] = [yTo, yFrom];

        traces.push({ ...traceBase, x: [xv, xv], y: [yFrom, yTo] });

        // EndCap for vertical
        const effLw = cfg.lw * (pan.thickMult || 1);
        if (cfg.endCap === 'along') {
          const tickLen = dx * 0.04;
          plotlyLayout.shapes.push(
            { type:'line', x0:xv-tickLen, y0:yTo,   x1:xv+tickLen, y1:yTo,
              xref:xRef, yref:yRef, line:{color:cfg.farbe, width:effLw, dash:dashStyle(cfg.ls)} },
            { type:'line', x0:xv-tickLen, y0:yFrom, x1:xv+tickLen, y1:yFrom,
              xref:xRef, yref:yRef, line:{color:cfg.farbe, width:effLw, dash:dashStyle(cfg.ls)} }
          );
        } else if (cfg.endCap === 'to_axis') {
          plotlyLayout.shapes.push(
            { type:'line', x0:xMin, y0:yFrom, x1:xv, y1:yFrom,
              xref:xRef, yref:yRef, line:{color:cfg.farbe, width:effLw, dash:dashStyle(cfg.ls)} }
          );
        }

        // Curve label for vertical
        if (cfg.label) {
          let lblX = xv, lblY = null;
          if (cfg.label_pos === 'manual') {
            lblX = cfg.label_x; lblY = cfg.label_y;
          } else {
            lblY = yTo;
          }
          if (lblY !== null) {
            plotlyLayout.annotations.push({
              x: lblX, y: lblY,
              xref: xRef, yref: yRef, showarrow: false,
              text: cfg.label,
              font: { size: LABEL_SIZES[cfg.label_size] || 11, color: lfarbe(cfg), family: 'Segoe UI' },
              xanchor: 'left', yanchor: 'bottom',
              bgcolor: 'rgba(255,255,255,0.7)',
            });
          }
        }

        // Axis label for vertical curve
        if (cfg.achsen_label) {
          let alx = xv, aly = yFrom - dy*0.055, xanch = 'center', yanch = 'top';
          if (cfg.achsen_label_pos === 'manual') {
            alx = cfg.achsen_label_x; aly = cfg.achsen_label_y;
            xanch = 'center'; yanch = 'middle';
          }
          plotlyLayout.annotations.push({
            x: alx, y: aly,
            xref: xRef, yref: yRef, showarrow: false,
            text: cfg.achsen_label, font: { size: LABEL_SIZES[cfg.achsen_label_size] || 10, color: lfarbe(cfg) },
            xanchor: xanch, yanchor: yanch,
          });
        }
      } else {
        // ── Determine x clip range ──────────────────────────
        let xFrom = xMin, xTo = xMax;

        if (cfg.xFromMode === 'custom') {
          xFrom = clamp(cfg.xFromVal, xMin, xMax);
        } else if (cfg.xFromMode === 'at_curve') {
          const rc = getCurveByRef(pan, cfg.xFromCurve);
          if (rc) {
            const pts = effSchnittpunkt(pan, cfg, rc, X);
            if (pts.length > 0) xFrom = pts[0][0];
          }
        }

        if (cfg.xToMode === 'custom') {
          xTo = clamp(cfg.xToVal, xMin, xMax);
        } else if (cfg.xToMode === 'at_curve') {
          const rc = getCurveByRef(pan, cfg.xToCurve);
          if (rc) {
            const pts = effSchnittpunkt(pan, cfg, rc, X);
            if (pts.length > 0) xTo = pts[pts.length - 1][0];
          }
        }

        if (xFrom > xTo) [xFrom, xTo] = [xTo, xFrom];

        // Build filtered X array
        const Xc = X.filter(x => x >= xFrom - 1e-6 && x <= xTo + 1e-6);
        if (Xc.length === 0) return;

        const yArr = cfg.typ === T_CUSTOM
          ? Xc.map(x => evalCustom(cfg, x))
          : effectiveCurveYArray(cfg, pan, Xc);
        // Mask values outside [yMin, yMax] with null to break line
        const yMasked = yArr.map(y => {
          if (y === null || y < yMin - dy*0.02 || y > yMax + dy*0.02) return null;
          return y;
        });

        // ── Apply end-cap style ──────────────────────────────
        let xFinal = [...Xc];
        let yFinal = [...yMasked];

        if (cfg.endCap !== 'normal') {
          const firstI = yFinal.findIndex(y => y !== null);
          let lastI = -1;
          for (let i = yFinal.length - 1; i >= 0; i--) { if (yFinal[i] !== null) { lastI = i; break; } }

          if (firstI !== -1 && lastI !== -1) {
            const x0 = xFinal[firstI], y0 = yFinal[firstI];
            const xN = xFinal[lastI],  yN = yFinal[lastI];
            const lineProps = { color: cfg.farbe, width: cfg.lw, dash: dashStyle(cfg.ls) };

            if (cfg.endCap === 'along') {
              // Horizontal extensions at both ends – the curve "runs along" the boundary level
              xFinal = [xFrom, ...xFinal, xTo];
              yFinal = [y0,    ...yFinal, yN];
            } else if (cfg.endCap === 'to_axis') {
              // Drop vertical lines from both endpoints down to x-axis
              // and horizontal line from first endpoint to y-axis
              plotlyLayout.shapes.push(
                // left end: horizontal to y-axis
                { type:'line', x0:xMin, y0, x1:x0, y1:y0,
                  xref:xRef, yref:yRef, line:lineProps },
                // left end: vertical to x-axis
                { type:'line', x0, y0, x1:x0, y1:yMin,
                  xref:xRef, yref:yRef, line:lineProps },
                // right end: vertical to x-axis
                { type:'line', x0:xN, y0:yN, x1:xN, y1:yMin,
                  xref:xRef, yref:yRef, line:lineProps },
              );
            }
          }
        }

        traces.push({ ...traceBase, x: xFinal, y: yFinal });

        // ── Curve label ────────────────────────────────────────
        if (cfg.label) {
          let lblX = null, lblY = null;
          if (cfg.label_pos === 'manual') {
            lblX = cfg.label_x; lblY = cfg.label_y;
          } else {
            // Auto: end of visible range
            for (let i = xFinal.length - 1; i >= 0; i--) {
              if (yFinal[i] !== null && yFinal[i] !== undefined) {
                lblX = xFinal[i]; lblY = yFinal[i]; break;
              }
            }
          }
          if (lblX !== null && lblY !== null) {
            plotlyLayout.annotations.push({
              x: lblX, y: lblY,
              xref: xRef, yref: yRef, showarrow: false,
              text: cfg.label,
              font: { size: LABEL_SIZES[cfg.label_size] || 11, color: lfarbe(cfg), family: 'Segoe UI' },
              xanchor: 'left', yanchor: 'bottom',
              bgcolor: 'rgba(255,255,255,0.7)',
            });
          }
        }

        // ── Axis label ─────────────────────────────────────────
        if (cfg.achsen_label) {
          let alx = null, aly = null, xanch = 'right', yanch = 'middle';
          if (cfg.achsen_label_pos === 'manual') {
            alx = cfg.achsen_label_x; aly = cfg.achsen_label_y;
            xanch = 'center'; yanch = 'middle';
          } else {
            const seite = cfg.achsen_seite;
            if (cfg.typ === T_HORIZONTAL) {
              const h = effH(cfg, pan, X);
              if (h >= yMin && h <= yMax) { alx = xMin - dx*0.025; aly = h; }
            } else if (cfg.typ === T_FALLEND) {
              if (seite === 'x') {
                const xe = curveXFromY(yMin, cfg.a, cfg.b, cfg.k);
                if (xe && xe > xMin && xe < xMax) {
                  alx = xe; aly = yMin - dy*0.055; xanch = 'center'; yanch = 'top';
                }
              } else {
                const y0 = curveYVal(cfg, xMin + 0.001);
                if (y0 >= yMin && y0 <= yMax) { alx = xMin - dx*0.025; aly = y0; }
              }
            } else if (cfg.typ === T_STEIGEND) {
              if (seite === 'x') {
                const val = (yMin - cfg.c) / Math.max(cfg.b_s, 1e-9);
                if (val > 0) {
                  const xe = Math.pow(val, 1/cfg.k_s);
                  if (xe > xMin && xe < xMax) {
                    alx = xe; aly = yMin - dy*0.055; xanch = 'center'; yanch = 'top';
                  }
                }
              } else {
                const y0 = curveYVal(cfg, xMin + 0.001);
                if (y0 >= yMin && y0 <= yMax) { alx = xMin - dx*0.025; aly = y0; }
              }
            } else if (cfg.typ === T_LINEAR_FALL || cfg.typ === T_LINEAR_RISE) {
              const y0 = curveYVal(cfg, xMin + 0.001);
              if (y0 >= yMin && y0 <= yMax) { alx = xMin - dx*0.025; aly = y0; }
            } else if (cfg.typ === T_GRAD45) {
              if (seite === 'x') {
                alx = yMin; aly = yMin - dy*0.055; xanch = 'center'; yanch = 'top';
              } else {
                alx = xMin - dx*0.025; aly = xMin;
              }
            }
          }
          if (alx !== null && aly !== null) {
            plotlyLayout.annotations.push({
              x: alx, y: aly,
              xref: xRef, yref: yRef, showarrow: false,
              text: cfg.achsen_label,
              font: { size: LABEL_SIZES[cfg.achsen_label_size] || 10, color: lfarbe(cfg) },
              xanchor: xanch, yanchor: yanch,
            });
          }
        }
      }
    });

    // ── Equilibrium points ────────────────────────────────────
    pan._letzeEq = [];
    let eqIdx = 0;

    function addEqPoint(xe, ye) {
      if (!(xe > xMin * 0.01 && xe < xMax * 0.99 && ye > yMin && ye < yMax * 0.99)) return;
      const ov = pan.eqOverrides[eqIdx];
      const sichtbar = ov ? ov.sichtbar : true;
      if (!sichtbar) { eqIdx++; return; }

      const defaultLbl = \`A\${eqIdx}\`;
      const lbl = ov ? (ov.label || defaultLbl) : defaultLbl;
      const ptColor = ov ? (ov.farbe || '#1a1d23') : '#1a1d23';

      pan._letzeEq.push({ xe, ye, idx: eqIdx });
      eqAll.push({ panIdx: pi, xe, ye, idx: eqIdx });

      // Dashed lines to axes (global toggle + per-point override)
      const showLinienX = pan.linien && (ov ? ov.linienX !== false : true);
      const showLinienY = pan.linien && (ov ? ov.linienY !== false : true);
      if (showLinienX) {
        plotlyLayout.shapes.push(
          { type:'line', x0:xe, y0:yMin, x1:xe, y1:ye,
            xref:xRef, yref:yRef, line:{color:'#cccccc', width:0.8, dash:'dash'} }
        );
      }
      if (showLinienY) {
        plotlyLayout.shapes.push(
          { type:'line', x0:xMin, y0:ye, x1:xe, y1:ye,
            xref:xRef, yref:yRef, line:{color:'#cccccc', width:0.8, dash:'dash'} }
        );
      }

      // Point
      const eqPtSize = (ov && ov.ptSize ? ov.ptSize : 8) * (pan.thickMult || 1);
      traces.push({
        x: [xe], y: [ye],
        xaxis: xRef, yaxis: yRef,
        mode: 'markers',
        marker: { color: ptColor, size: eqPtSize },
        hoverinfo: 'x+y',
      });

      // Label
      plotlyLayout.annotations.push({
        x: xe, y: ye,
        xref: xRef, yref: yRef, showarrow: false,
        text: lbl,
        font: { size: Math.round(11 * (pan.thickMult || 1)), color: ptColor },
        xanchor: 'left', yanchor: 'bottom',
        xshift: 6, yshift: 5,
      });

      // Tick values on axes
      if (pan.achsenZahlen) {
        plotlyLayout.annotations.push(
          { x: xMin - dx*0.04, y: ye, xref:xRef, yref:yRef, showarrow:false,
            text: ye.toFixed(2), font:{size:9,color:'#555'}, xanchor:'right', yanchor:'middle' },
          { x: xe, y: yMin - dy*0.06, xref:xRef, yref:yRef, showarrow:false,
            text: xe.toFixed(2), font:{size:9,color:'#555'}, xanchor:'center', yanchor:'top' },
        );
      }

      eqIdx++;
    }

    if (pan.gleichgew) {
      const fall    = aktiv.filter(c => c.typ === T_FALLEND);
      const steig   = aktiv.filter(c => c.typ === T_STEIGEND);
      const linFall = aktiv.filter(c => c.typ === T_LINEAR_FALL);
      const linRise = aktiv.filter(c => c.typ === T_LINEAR_RISE);
      const horiz   = aktiv.filter(c => c.typ === T_HORIZONTAL);
      const vert    = aktiv.filter(c => c.typ === T_VERTIKAL);
      const grad    = aktiv.filter(c => c.typ === T_GRAD45);
      const custom  = aktiv.filter(c => c.typ === T_CUSTOM);

      // Helper: y-array for any non-vertical curve
      function yArr(c) {
        if (c.typ === T_CUSTOM) return X.map(x => evalCustom(c, x));
        if (c.typ === T_HORIZONTAL) { const h = effH(c, pan, X); return X.map(() => h); }
        return curveYArray(c, X);
      }

      // Analytical: Horizontal ∩ Falling
      horiz.forEach(hc => {
        const h = effH(hc, pan, X);
        fall.forEach(fc => {
          const xe = curveXFromY(h, fc.a, fc.b, fc.k);
          if (xe !== null) addEqPoint(xe, h);
        });
        // Analytical: Horizontal ∩ Linear Fall
        linFall.forEach(fc => {
          const xe = (fc.a - h) / fc.b;
          if (xe > 0) addEqPoint(xe, h);
        });
        // Analytical: Horizontal ∩ Linear Rise
        linRise.forEach(fc => {
          const xe = (h - fc.c) / fc.b_s;
          if (xe > 0) addEqPoint(xe, h);
        });
      });

      // Analytical: Linear Fall ∩ Linear Rise
      linFall.forEach(fc => {
        linRise.forEach(rc => {
          const denom = fc.b + rc.b_s;
          if (Math.abs(denom) > 1e-9) {
            const xe = (fc.a - rc.c) / denom;
            addEqPoint(xe, fc.a - fc.b * xe);
          }
        });
      });

      // Vertical ∩ everything
      vert.forEach(vc => {
        const xv = effXv(vc, pan, X);
        [...fall, ...steig, ...linFall, ...linRise, ...grad, ...custom].forEach(c => {
          const ye = curveYAtX(c, pan, X, xv);
          if (ye !== null) addEqPoint(xv, ye);
        });
        horiz.forEach(hc => addEqPoint(xv, effH(hc, pan, X)));
      });

      // Numerical: Steigend + Linear + Custom intersections
      const numCurves = [...steig, ...linFall, ...linRise, ...custom];
      numCurves.forEach((c1, i) => {
        const y1 = yArr(c1);
        if (!y1) return;
        // ∩ 45°
        grad.forEach(() => {
          schnittpunkte(X, y1, X).forEach(([xe,ye]) => addEqPoint(xe, ye));
        });
        // ∩ Horizontal
        horiz.forEach(hc => {
          const h = effH(hc, pan, X);
          schnittpunkte(X, y1, X.map(() => h)).forEach(([xe,ye]) => addEqPoint(xe, ye));
        });
        // ∩ Falling (for non-linFall, non-linRise already handled above)
        fall.forEach(fc => {
          schnittpunkte(X, y1, curveYArray(fc, X)).forEach(([xe,ye]) => addEqPoint(xe, ye));
        });
        // ∩ other numerical curves (above diagonal only to avoid duplicates)
        numCurves.slice(i + 1).forEach(c2 => {
          const y2 = yArr(c2);
          if (!y2) return;
          schnittpunkte(X, y1, y2).forEach(([xe,ye]) => addEqPoint(xe, ye));
        });
      });

      // Falling ∩ Steigend (numerical)
      fall.forEach(fc => {
        const yf = curveYArray(fc, X);
        steig.forEach(sc => {
          schnittpunkte(X, yf, curveYArray(sc, X)).forEach(([xe,ye]) => addEqPoint(xe, ye));
        });
        // 45°
        grad.forEach(() => {
          schnittpunkte(X, yf, X).forEach(([xe,ye]) => addEqPoint(xe, ye));
        });
      });
    }

    // ── Eigene Punkte ─────────────────────────────────────────
    pan.extraPunkte.forEach(ep => {
      if (!ep.sichtbar) return;
      const pos = berechnePos(pan, ep.modus, ep.x, ep.y,
                              ep.kurveRef, ep.kurveX, ep.ref1, ep.ref2, X, ep.ref3);
      if (!pos) return;
      const [xe, ye] = pos;
      if (xe < xMin || xe > xMax || ye < yMin || ye > yMax) return;

      traces.push({
        x: [xe], y: [ye],
        xaxis: xRef, yaxis: yRef,
        mode: 'markers',
        marker: { color: ep.farbe, size: (ep.ptSize || 9) * (pan.thickMult || 1), symbol: 'circle' },
        hoverinfo: 'x+y',
      });

      if (ep.label) {
        plotlyLayout.annotations.push({
          x: xe, y: ye, xref: xRef, yref: yRef, showarrow: false,
          text: ep.label, font: { size: 11, color: ep.farbe },
          xanchor: 'left', yanchor: 'bottom', xshift: 6, yshift: 5,
        });
      }

      if (ep.linien) {
        plotlyLayout.shapes.push(
          { type:'line', x0:xe,y0:yMin,x1:xe,y1:ye, xref:xRef,yref:yRef,
            line:{color:'#cccccc',width:0.8,dash:'dash'} },
          { type:'line', x0:xMin,y0:ye,x1:xe,y1:ye, xref:xRef,yref:yRef,
            line:{color:'#cccccc',width:0.8,dash:'dash'} },
        );
      }
    });

    // ── Eigene Pfeile ─────────────────────────────────────────
    pan.extraPfeile.forEach(epf => {
      if (!epf.sichtbar) return;
      const p0 = berechnePos(pan, epf.vonModus, epf.vonX, epf.vonY,
                             epf.vonKurveRef, epf.vonKurveX,
                             epf.vonRef1, epf.vonRef2, X, epf.vonRef3);
      const p1 = berechnePos(pan, epf.nachModus, epf.nachX, epf.nachY,
                             epf.nachKurveRef, epf.nachKurveX,
                             epf.nachRef1, epf.nachRef2, X, epf.nachRef3);
      if (!p0 || !p1) return;
      const [x0, y0] = p0, [x1, y1] = p1;
      if (Math.abs(x1-x0) < 0.01 && Math.abs(y1-y0) < 0.01) return;

      plotlyLayout.annotations.push({
        x: x1, y: y1, ax: x0, ay: y0,
        xref: xRef, yref: yRef, axref: xRef, ayref: yRef,
        showarrow: true, arrowhead: 2, arrowsize: 1.3,
        arrowcolor: epf.farbe, arrowwidth: (epf.arrowWidth || 2) * (pan.thickMult || 1),
        text: epf.label || '',
        font: { size: Math.round(10 * (pan.thickMult || 1)), color: epf.farbe },
      });
    });

    // ── Verschiebungspfeile ───────────────────────────────────
    if (pan.pfeile) {
      const fall  = aktiv.filter(c => c.typ === T_FALLEND || c.typ === T_LINEAR_FALL);
      const steig = aktiv.filter(c => c.typ === T_STEIGEND || c.typ === T_LINEAR_RISE);
      const horiz = aktiv.filter(c => c.typ === T_HORIZONTAL);
      const vert  = aktiv.filter(c => c.typ === T_VERTIKAL);

      const addShiftArrow = (x0, y0, x1, y1) => {
        if (Math.abs(x1-x0) < 0.05 && Math.abs(y1-y0) < 0.05) return;
        plotlyLayout.annotations.push({
          x: x1, y: y1, ax: x0, ay: y0,
          xref: xRef, yref: yRef, axref: xRef, ayref: yRef,
          showarrow: true, arrowhead: 2, arrowsize: 1.5,
          arrowcolor: 'red', arrowwidth: 2.5, text: '',
        });
      };

      if (fall.length >= 2) {
        const py = yMin + dy * 0.82;
        const x0 = curveXFromY(py, fall[0].a, fall[0].b, fall[0].k);
        const x1 = curveXFromY(py, fall[1].a, fall[1].b, fall[1].k);
        if (x0 && x1 && x0 > 0.05 && x1 > 0.05 && x0 < xMax*0.93 && x1 < xMax*0.93)
          addShiftArrow(x0, py, x1, py);
      }
      if (horiz.length >= 2) {
        const px = xMin + dx * 0.28;
        addShiftArrow(px, effH(horiz[0], pan, X), px, effH(horiz[1], pan, X));
      }
      if (vert.length >= 2) {
        const py = yMin + dy * 0.82;
        addShiftArrow(effXv(vert[0], pan, X), py, effXv(vert[1], pan, X), py);
      }
      if (steig.length >= 2) {
        const xp = xMin + dx * 0.5;
        const y0 = curveYVal(steig[0], xp), y1 = curveYVal(steig[1], xp);
        if (y0 > yMin && y0 < yMax && y1 > yMin && y1 < yMax)
          addShiftArrow(xp, y0, xp, y1);
      }
    }
  });

  // Deep-copy BEFORE Plotly.react() mutates the objects in-place.
  // (Plotly adds domain, scaleanchor results, etc. into the same references.)
  _figTraces = JSON.parse(JSON.stringify(traces));
  _figLayout  = JSON.parse(JSON.stringify(plotlyLayout));

  Plotly.react('chart', traces, plotlyLayout, {
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: ['select2d', 'lasso2d', 'autoScale2d'],
    displaylogo: false,
  });

  // Sync eqOverrides and update UI
  syncEqOverrides(eqAll);
  renderEqList();
}

// ── Equilibrium override sync ─────────────────────────────────────────────────

function syncEqOverrides(eqAll) {
  // Group by panIdx
  const byPanel = {};
  eqAll.forEach(e => {
    if (!byPanel[e.panIdx]) byPanel[e.panIdx] = [];
    byPanel[e.panIdx].push(e);
  });

  state.panels.forEach((pan, pi) => {
    const found = byPanel[pi] || [];
    // Extend eqOverrides if needed
    while (pan.eqOverrides.length < found.length) {
      pan.eqOverrides.push({ id: uid(), label: '', farbe: '', sichtbar: true, linienX: true, linienY: true });
    }
    // Update coordinates
    found.forEach((eq, i) => {
      pan.eqOverrides[i].xe = eq.xe;
      pan.eqOverrides[i].ye = eq.ye;
    });
    // Trim excess
    if (pan.eqOverrides.length > found.length) {
      pan.eqOverrides.length = found.length;
    }
  });
}

// ── UI Rendering ──────────────────────────────────────────────────────────────

function renderAll() {
  renderPanelTabs();
  renderSidebar();
  renderEqList();
  renderExtraPunkte();
  renderExtraPfeile();
  scheduleRender();
}

function renderPanelTabs() {
  const el = document.getElementById('panel-tabs');
  el.innerHTML = '';

  state.panels.forEach((pan, i) => {
    const btn = document.createElement('button');
    btn.className = 'panel-tab' + (i === state.activePanel ? ' active' : '');
    btn.textContent = \`Panel \${i+1}\`;
    btn.onclick = () => { state.activePanel = i; renderAll(); };
    el.appendChild(btn);
  });

  if (state.panels.length < 4) {
    const add = document.createElement('button');
    add.className = 'btn btn-sm btn-accent';
    add.textContent = '+ Panel';
    add.onclick = () => {
      state.panels.push(newPanel());
      state.activePanel = state.panels.length - 1;
      renderAll();
    };
    el.appendChild(add);
  }

  if (state.panels.length > 1) {
    const del = document.createElement('button');
    del.className = 'btn btn-sm btn-danger';
    del.textContent = '✕';
    del.title = 'Panel entfernen';
    del.onclick = () => {
      state.panels.splice(state.activePanel, 1);
      state.activePanel = Math.max(0, state.activePanel - 1);
      renderAll();
    };
    el.appendChild(del);
  }
}

function renderSidebar() {
  const pan = activePan();
  const el = document.getElementById('sidebar-content');
  el.innerHTML = '';

  // ── Panel settings ──
  const sec1 = mkSection('Diagramm');
  el.appendChild(sec1);

  sec1.appendChild(mkFormRow('X-Achse', mkInput('text', pan.xLabel, v => { pan.xLabel = v; scheduleRender(); })));
  sec1.appendChild(mkFormRow('Y-Achse', mkInput('text', pan.yLabel, v => { pan.yLabel = v; scheduleRender(); })));

  // X axis range row
  const xRow = document.createElement('div');
  xRow.className = 'axis-range-row';
  const xLbl = document.createElement('label'); xLbl.textContent = 'X:'; xRow.appendChild(xLbl);
  const xMinL = document.createElement('span'); xMinL.className = 'range-label'; xMinL.textContent = 'min'; xRow.appendChild(xMinL);
  xRow.appendChild(mkNumInput(pan.xMin, v => { pan.xMin = v; scheduleRender(); }, {min:0, max:50, step:0.5}));
  const xSep = document.createElement('span'); xSep.className = 'sep'; xSep.textContent = '–'; xRow.appendChild(xSep);
  const xMaxL = document.createElement('span'); xMaxL.className = 'range-label'; xMaxL.textContent = 'max'; xRow.appendChild(xMaxL);
  xRow.appendChild(mkNumInput(pan.xMax, v => { pan.xMax = v; scheduleRender(); }, {min:1, max:50, step:0.5}));
  sec1.appendChild(xRow);

  // Y axis range row
  const yRow = document.createElement('div');
  yRow.className = 'axis-range-row';
  const yLbl = document.createElement('label'); yLbl.textContent = 'Y:'; yRow.appendChild(yLbl);
  const yMinL = document.createElement('span'); yMinL.className = 'range-label'; yMinL.textContent = 'min'; yRow.appendChild(yMinL);
  yRow.appendChild(mkNumInput(pan.yMin, v => { pan.yMin = v; scheduleRender(); }, {min:0, max:50, step:0.5}));
  const ySep = document.createElement('span'); ySep.className = 'sep'; ySep.textContent = '–'; yRow.appendChild(ySep);
  const yMaxL = document.createElement('span'); yMaxL.className = 'range-label'; yMaxL.textContent = 'max'; yRow.appendChild(yMaxL);
  yRow.appendChild(mkNumInput(pan.yMax, v => { pan.yMax = v; scheduleRender(); }, {min:1, max:50, step:0.5}));
  sec1.appendChild(yRow);

  // Checkboxes
  sec1.appendChild(mkCheckRow('Gleichgewichte', pan.gleichgew, v => { pan.gleichgew = v; renderAll(); }));
  sec1.appendChild(mkCheckRow('Achsenlinien zu Gleichgewichten', pan.linien, v => { pan.linien = v; scheduleRender(); }));
  sec1.appendChild(mkCheckRow('Verschiebungspfeile', pan.pfeile, v => { pan.pfeile = v; scheduleRender(); }));
  sec1.appendChild(mkCheckRow('Achsenwerte anzeigen', pan.achsenZahlen, v => { pan.achsenZahlen = v; scheduleRender(); }));

  // Global thickness multiplier
  {
    const thickRow = document.createElement('div');
    thickRow.className = 'range-row';
    const thickLbl = document.createElement('label');
    thickLbl.textContent = 'Dicke ×';
    thickRow.appendChild(thickLbl);
    const thickSlider = document.createElement('input');
    thickSlider.type = 'range'; thickSlider.min = 0.25; thickSlider.max = 4; thickSlider.step = 0.05;
    thickSlider.value = pan.thickMult || 1;
    thickSlider.style.flex = '1';
    const thickVal = document.createElement('span');
    thickVal.className = 'range-val';
    thickVal.textContent = (pan.thickMult || 1).toFixed(2);
    thickSlider.addEventListener('input', () => {
      pan.thickMult = parseFloat(thickSlider.value);
      thickVal.textContent = pan.thickMult.toFixed(2);
      scheduleRender();
    });
    thickRow.appendChild(thickSlider);
    thickRow.appendChild(thickVal);
    sec1.appendChild(thickRow);
  }

  // ── Curves ──
  const sec2 = mkSection('Kurven');
  el.appendChild(sec2);

  pan.kurven.forEach((cfg, ci) => {
    sec2.appendChild(mkCurveCard(pan, cfg, ci));
  });

  // Add curve buttons
  const addBtns = document.createElement('div');
  addBtns.id = 'add-curve-btns';
  ALLE_TYPEN.forEach(typ => {
    const b = document.createElement('button');
    b.className = 'btn btn-sm';
    b.textContent = '+' + TYP_LABEL[typ].split(' (')[0];
    b.title = TYP_LABEL[typ];
    b.onclick = () => { pan.kurven.push(newCurve(typ)); renderAll(); };
    addBtns.appendChild(b);
  });
  sec2.appendChild(addBtns);
}

function mkSection(title) {
  const div = document.createElement('div');
  div.className = 'section';
  const hdr = document.createElement('div');
  hdr.className = 'section-header';
  hdr.textContent = title;
  div.appendChild(hdr);
  return div;
}

function mkFormRow(lbl, input) {
  const row = document.createElement('div');
  row.className = 'form-row';
  const label = document.createElement('label');
  label.textContent = lbl;
  row.appendChild(label);
  row.appendChild(input);
  return row;
}

function mkInput(type, value, onChange) {
  const inp = document.createElement('input');
  inp.type = type;
  inp.value = value;
  inp.addEventListener('change', () => onChange(inp.value));
  inp.addEventListener('input', () => { if (type !== 'text') onChange(inp.value); });
  return inp;
}

function mkNumInput(value, onChange, opts = {}) {
  const inp = document.createElement('input');
  inp.type = 'number';
  inp.value = value;
  if (opts.min !== undefined) inp.min = opts.min;
  if (opts.max !== undefined) inp.max = opts.max;
  if (opts.step !== undefined) inp.step = opts.step;
  inp.addEventListener('change', () => { const v = parseFloat(inp.value); if (!isNaN(v)) onChange(v); });
  return inp;
}

function mkCheckRow(lbl, checked, onChange) {
  const row = document.createElement('div');
  row.className = 'check-row';
  const cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.checked = checked;
  cb.addEventListener('change', () => onChange(cb.checked));
  const label = document.createElement('label');
  label.textContent = lbl;
  label.style.cursor = 'pointer';
  label.onclick = () => { cb.checked = !cb.checked; onChange(cb.checked); };
  row.appendChild(cb);
  row.appendChild(label);
  return row;
}

function mkColorInput(value, onChange) {
  const inp = document.createElement('input');
  inp.type = 'color';
  inp.value = value || '#3355cc';
  inp.title = 'Farbe wählen';
  inp.addEventListener('input', () => onChange(inp.value));
  return inp;
}

function mkSelect(options, value, onChange) {
  const sel = document.createElement('select');
  options.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o;
    opt.textContent = o;
    if (o === value) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', () => onChange(sel.value));
  return sel;
}

function mkSliderRow(lbl, value, min, max, step, onChange) {
  const row = document.createElement('div');
  row.className = 'range-row';

  const label = document.createElement('label');
  label.textContent = lbl;
  row.appendChild(label);

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = min; slider.max = max; slider.step = step;
  slider.value = value;

  const valInput = document.createElement('input');
  valInput.type = 'number';
  valInput.className = 'range-val';
  valInput.value = parseFloat(value).toFixed(step < 0.1 ? 2 : 1);
  valInput.min = min; valInput.max = max; valInput.step = step;

  slider.addEventListener('input', () => {
    valInput.value = parseFloat(slider.value).toFixed(step < 0.1 ? 2 : 1);
    onChange(parseFloat(slider.value));
  });
  valInput.addEventListener('change', () => {
    const v = clamp(parseFloat(valInput.value) || value, parseFloat(min), parseFloat(max));
    slider.value = v;
    valInput.value = parseFloat(v).toFixed(step < 0.1 ? 2 : 1);
    onChange(v);
  });

  row.appendChild(slider);
  row.appendChild(valInput);
  return row;
}

function mkCurveCard(pan, cfg, ci) {
  const card = document.createElement('div');
  card.className = 'curve-card' + (cfg.open ? ' open' : '');

  const hdr = document.createElement('div');
  hdr.className = 'curve-card-header';

  const toggle = document.createElement('span');
  toggle.className = 'curve-card-toggle';
  toggle.textContent = '▶';

  const colorDot = document.createElement('span');
  colorDot.style.cssText = \`width:10px;height:10px;border-radius:50%;background:\${cfg.farbe};display:inline-block;flex-shrink:0\`;

  const title = document.createElement('span');
  title.className = 'curve-card-title';
  title.textContent = \`K\${ci+1}: \${cfg.label || TYP_LABEL[cfg.typ]}\`;

  const actCb = document.createElement('input');
  actCb.type = 'checkbox'; actCb.checked = cfg.aktiv; actCb.title = 'Aktiv';
  actCb.style.cursor = 'pointer';
  actCb.addEventListener('change', e => { e.stopPropagation(); cfg.aktiv = actCb.checked; scheduleRender(); });

  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-sm btn-danger';
  delBtn.textContent = '✕';
  delBtn.title = 'Kurve entfernen';
  delBtn.addEventListener('click', e => {
    e.stopPropagation();
    pan.kurven.splice(ci, 1);
    renderAll();
  });

  hdr.appendChild(toggle);
  hdr.appendChild(colorDot);
  hdr.appendChild(title);
  hdr.appendChild(actCb);
  hdr.appendChild(delBtn);

  hdr.addEventListener('click', () => {
    cfg.open = !cfg.open;
    card.classList.toggle('open', cfg.open);
    toggle.textContent = cfg.open ? '▼' : '▶';
  });

  const body = document.createElement('div');
  body.className = 'curve-card-body';

  // Parameters per type
  const addSlider = (lbl, key, min, max, step) => {
    body.appendChild(mkSliderRow(lbl, cfg[key], min, max, step, v => {
      cfg[key] = v;
      // Update card title color dot
      colorDot.style.background = cfg.farbe;
      title.textContent = \`K\${ci+1}: \${cfg.label || TYP_LABEL[cfg.typ]}\`;
      scheduleRender();
    }));
  };

  if (cfg.typ === T_FALLEND) {
    addSlider('a', 'a', 1, 20, 0.1);
    addSlider('b', 'b', 0.1, 5, 0.05);
    addSlider('k', 'k', 0.2, 1.5, 0.05);
  } else if (cfg.typ === T_STEIGEND) {
    addSlider('c', 'c', 0, 10, 0.1);
    addSlider('b', 'b_s', 0.1, 5, 0.05);
    addSlider('k', 'k_s', 0.2, 1.5, 0.05);
  } else if (cfg.typ === T_LINEAR_FALL) {
    addSlider('a (Achsenabschnitt)', 'a', 0, 20, 0.1);
    addSlider('b (Steigung)', 'b', 0, 5, 0.05);
  } else if (cfg.typ === T_LINEAR_RISE) {
    addSlider('c (Achsenabschnitt)', 'c', 0, 20, 0.1);
    addSlider('b (Steigung)', 'b_s', 0, 5, 0.05);
  } else if (cfg.typ === T_CUSTOM) {
    // Mode toggle
    const modeToggle = document.createElement('div');
    modeToggle.className = 'custom-mode-toggle';
    ['expression', 'parametric'].forEach(mode => {
      const btn = document.createElement('button');
      btn.textContent = mode === 'expression' ? 'y = f(x)' : 'Parameter (a,b,c)';
      if (cfg.customMode === mode) btn.classList.add('active');
      btn.onclick = () => {
        cfg.customMode = mode;
        modeToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateCustomFields();
        scheduleRender();
      };
      modeToggle.appendChild(btn);
    });
    body.appendChild(modeToggle);

    // Equation input
    const exprHint = document.createElement('div');
    exprHint.style.cssText = 'font-size:10px;color:var(--muted);margin-bottom:3px';
    body.appendChild(exprHint);

    const exprInput = document.createElement('input');
    exprInput.type = 'text';
    exprInput.className = 'custom-expr-input';
    exprInput.value = cfg.customExpr;
    body.appendChild(exprInput);

    const errEl = document.createElement('div');
    errEl.className = 'custom-expr-error';
    body.appendChild(errEl);

    const paramDiv = document.createElement('div');
    body.appendChild(paramDiv);

    function updateCustomFields() {
      if (cfg.customMode === 'expression') {
        exprHint.textContent = 'Nutze x als Variable. z.B.: 10 - 2*x  oder  Math.sqrt(x)';
        paramDiv.innerHTML = '';
      } else {
        exprHint.textContent = 'Nutze x, a, b, c als Variablen. z.B.: a - b*x^c';
        paramDiv.innerHTML = '';
        ['a','b','c'].forEach(p => {
          const key = \`custom_\${p}\`;
          paramDiv.appendChild(mkSliderRow(p, cfg[key], 0.01, 20, 0.05, v => {
            cfg[key] = v; scheduleRender();
          }));
        });
      }
    }
    updateCustomFields();

    exprInput.addEventListener('change', () => {
      cfg.customExpr = exprInput.value;
      // Validate
      try {
        evalCustom(cfg, 1);
        errEl.textContent = '';
      } catch {
        errEl.textContent = 'Ungültige Gleichung';
      }
      scheduleRender();
    });
  } else if (cfg.typ === T_HORIZONTAL) {
    addSlider('h', 'h', 0.25, 12, 0.1);
    // Sync
    const syncRow = document.createElement('div');
    syncRow.className = 'sync-row';
    syncRow.innerHTML = '<label>Sync:</label>';
    const opts = curveRefOptions(pan).filter(r => r !== \`Kurve \${ci+1}\`);
    syncRow.appendChild(mkSelect(opts, cfg.sync_ref1, v => { cfg.sync_ref1 = v; scheduleRender(); }));
    syncRow.appendChild(mkSelect(opts, cfg.sync_ref2, v => { cfg.sync_ref2 = v; scheduleRender(); }));
    body.appendChild(syncRow);
  } else if (cfg.typ === T_VERTIKAL) {
    addSlider('x', 'x_v', 0.25, 12, 0.1);
    // Sync
    const syncRow = document.createElement('div');
    syncRow.className = 'sync-row';
    syncRow.innerHTML = '<label>Sync:</label>';
    const opts = curveRefOptions(pan).filter(r => r !== \`Kurve \${ci+1}\`);
    syncRow.appendChild(mkSelect(opts, cfg.sync_ref1, v => { cfg.sync_ref1 = v; scheduleRender(); }));
    syncRow.appendChild(mkSelect(opts, cfg.sync_ref2, v => { cfg.sync_ref2 = v; scheduleRender(); }));
    body.appendChild(syncRow);
  }

  // Label
  const labelRow = mkFormRow('Label', mkInput('text', cfg.label, v => {
    cfg.label = v;
    title.textContent = \`K\${ci+1}: \${v || TYP_LABEL[cfg.typ]}\`;
    scheduleRender();
  }));
  body.appendChild(labelRow);

  // Label size + position
  {
    const szRow = document.createElement('div');
    szRow.className = 'form-row';
    const szLbl = document.createElement('label');
    szLbl.textContent = 'Größe';
    szRow.appendChild(szLbl);
    ['S','M','L'].forEach(sz => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-sm' + (cfg.label_size === sz ? ' btn-accent' : '');
      btn.textContent = sz;
      btn.onclick = () => {
        cfg.label_size = sz;
        szRow.querySelectorAll('button').forEach(b => b.classList.toggle('btn-accent', b.textContent === sz));
        scheduleRender();
      };
      szRow.appendChild(btn);
    });
    const posLbl = document.createElement('label');
    posLbl.textContent = 'Pos';
    posLbl.style.cssText = 'margin-left:6px;flex-shrink:0';
    szRow.appendChild(posLbl);
    const posSel = mkSelect(['auto','manuell'], cfg.label_pos === 'manual' ? 'manuell' : 'auto', v => {
      cfg.label_pos = v === 'manuell' ? 'manual' : 'auto';
      updateLabelPosFields();
      scheduleRender();
    });
    szRow.appendChild(posSel);
    body.appendChild(szRow);

    const labelPosDiv = document.createElement('div');
    function updateLabelPosFields() {
      labelPosDiv.innerHTML = '';
      if (cfg.label_pos === 'manual') {
        const xRow = mkFormRow('x', mkNumInput(cfg.label_x, v => { cfg.label_x = v; scheduleRender(); }, { step: 0.1 }));
        const yRow = mkFormRow('y', mkNumInput(cfg.label_y, v => { cfg.label_y = v; scheduleRender(); }, { step: 0.1 }));
        labelPosDiv.appendChild(xRow);
        labelPosDiv.appendChild(yRow);
      }
    }
    updateLabelPosFields();
    body.appendChild(labelPosDiv);
  }

  // Colors
  const colorRow = document.createElement('div');
  colorRow.className = 'form-row';
  const clbl = document.createElement('label');
  clbl.textContent = 'Farbe';
  colorRow.appendChild(clbl);
  const cPicker = mkColorInput(cfg.farbe, v => {
    cfg.farbe = v;
    colorDot.style.background = v;
    scheduleRender();
  });
  colorRow.appendChild(cPicker);
  const lclbl = document.createElement('span');
  lclbl.textContent = 'L:'; lclbl.style.cssText = 'font-size:11px;color:var(--muted);flex-shrink:0';
  colorRow.appendChild(lclbl);
  const lPicker = mkColorInput(cfg.label_farbe || cfg.farbe, v => {
    cfg.label_farbe = v;
    scheduleRender();
  });
  colorRow.appendChild(lPicker);
  const lReset = document.createElement('button');
  lReset.className = 'btn btn-sm';
  lReset.textContent = '↺';
  lReset.title = 'Label-Farbe zurücksetzen (= Kurvenfarbe)';
  lReset.onclick = () => { cfg.label_farbe = ''; lPicker.value = cfg.farbe; scheduleRender(); };
  colorRow.appendChild(lReset);
  body.appendChild(colorRow);

  // Style + width
  const styleRow = mkFormRow('Stil', mkSelect(['-', '--', ':'], cfg.ls, v => { cfg.ls = v; scheduleRender(); }));
  body.appendChild(styleRow);

  // Line width slider
  {
    const lwRow = document.createElement('div');
    lwRow.className = 'range-row';
    const lwLbl = document.createElement('label'); lwLbl.textContent = 'Dicke';
    lwRow.appendChild(lwLbl);
    const lwSlider = document.createElement('input');
    lwSlider.type = 'range'; lwSlider.min = 0.5; lwSlider.max = 8; lwSlider.step = 0.5;
    lwSlider.value = cfg.lw;
    const lwVal = document.createElement('span');
    lwVal.className = 'range-val';
    lwVal.textContent = cfg.lw.toFixed(1);
    lwSlider.addEventListener('input', () => {
      cfg.lw = parseFloat(lwSlider.value);
      lwVal.textContent = cfg.lw.toFixed(1);
      scheduleRender();
    });
    lwRow.appendChild(lwSlider); lwRow.appendChild(lwVal);
    body.appendChild(lwRow);
  }

  // Axis label
  body.appendChild(mkFormRow('Achsenl.', mkInput('text', cfg.achsen_label, v => { cfg.achsen_label = v; scheduleRender(); })));
  body.appendChild(mkFormRow('Seite', mkSelect(['auto','x','y'], cfg.achsen_seite, v => { cfg.achsen_seite = v; scheduleRender(); })));

  // Axis label size + position
  {
    const aszRow = document.createElement('div');
    aszRow.className = 'form-row';
    const aszLbl = document.createElement('label');
    aszLbl.textContent = 'A-Größe';
    aszRow.appendChild(aszLbl);
    ['S','M','L'].forEach(sz => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-sm' + (cfg.achsen_label_size === sz ? ' btn-accent' : '');
      btn.textContent = sz;
      btn.onclick = () => {
        cfg.achsen_label_size = sz;
        aszRow.querySelectorAll('button').forEach(b => b.classList.toggle('btn-accent', b.textContent === sz));
        scheduleRender();
      };
      aszRow.appendChild(btn);
    });
    const aposSel = mkSelect(['auto','manuell'], cfg.achsen_label_pos === 'manual' ? 'manuell' : 'auto', v => {
      cfg.achsen_label_pos = v === 'manuell' ? 'manual' : 'auto';
      updateAchsenLabelPosFields();
      scheduleRender();
    });
    const aposLbl = document.createElement('label');
    aposLbl.textContent = 'Pos';
    aposLbl.style.cssText = 'margin-left:6px;flex-shrink:0';
    aszRow.appendChild(aposLbl);
    aszRow.appendChild(aposSel);
    body.appendChild(aszRow);

    const achsenLabelPosDiv = document.createElement('div');
    function updateAchsenLabelPosFields() {
      achsenLabelPosDiv.innerHTML = '';
      if (cfg.achsen_label_pos === 'manual') {
        const xRow = mkFormRow('x', mkNumInput(cfg.achsen_label_x, v => { cfg.achsen_label_x = v; scheduleRender(); }, { step: 0.1 }));
        const yRow = mkFormRow('y', mkNumInput(cfg.achsen_label_y, v => { cfg.achsen_label_y = v; scheduleRender(); }, { step: 0.1 }));
        achsenLabelPosDiv.appendChild(xRow);
        achsenLabelPosDiv.appendChild(yRow);
      }
    }
    updateAchsenLabelPosFields();
    body.appendChild(achsenLabelPosDiv);
  }

  // ── Clip / end-cap settings (not for horiz/vert) ───────────────────────────
  if (cfg.typ !== T_HORIZONTAL && cfg.typ !== T_VERTIKAL) {
    const capHdr = document.createElement('div');
    capHdr.style.cssText = 'font-size:10px;font-weight:600;color:var(--accent);margin:7px 0 4px;border-top:1px solid var(--border);padding-top:5px';
    capHdr.textContent = 'Kurvenenden';
    body.appendChild(capHdr);

    const capDesc = { normal: 'Kurve endet am Rand (Standard)', along: 'Enden laufen entlang der Achse', to_axis: 'Enden gehen zur Achse (L-Form)' };
    const capDescEl = document.createElement('div');
    capDescEl.style.cssText = 'font-size:10px;color:var(--muted);margin-bottom:4px;font-style:italic';
    capDescEl.textContent = capDesc[cfg.endCap] || '';
    const capSel = mkSelect(
      ['normal','along','to_axis'],
      cfg.endCap,
      v => { cfg.endCap = v; capDescEl.textContent = capDesc[v] || ''; scheduleRender(); }
    );
    body.appendChild(mkFormRow('Endstil', capSel));
    body.appendChild(capDescEl);

    // Helper to render clip-mode group (From or To)
    function mkClipGroup(label, modeKey, valKey, curveKey) {
      const grp = document.createElement('div');
      grp.style.cssText = 'background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:5px;margin-bottom:4px';
      const lbl = document.createElement('div');
      lbl.style.cssText = 'font-size:10px;font-weight:600;color:var(--muted);margin-bottom:3px';
      lbl.textContent = label;
      grp.appendChild(lbl);

      const modeOpts = ['panel','custom','at_curve'];
      const mSel = mkSelect(modeOpts, cfg[modeKey], v => {
        cfg[modeKey] = v;
        updateClipFields();
        scheduleRender();
      });
      grp.appendChild(mkFormRow('Modus', mSel));

      const fieldsDiv = document.createElement('div');
      grp.appendChild(fieldsDiv);

      function updateClipFields() {
        fieldsDiv.innerHTML = '';
        if (cfg[modeKey] === 'custom') {
          fieldsDiv.appendChild(mkFormRow('x =', mkNumInput(cfg[valKey], v => { cfg[valKey] = v; scheduleRender(); }, { step: 0.1 })));
        } else if (cfg[modeKey] === 'at_curve') {
          const refOpts = curveRefOptions(pan);
          fieldsDiv.appendChild(mkFormRow('Kurve', mkSelect(refOpts, cfg[curveKey], v => { cfg[curveKey] = v; scheduleRender(); })));
        }
      }
      updateClipFields();
      return grp;
    }

    body.appendChild(mkClipGroup('Start (links)', 'xFromMode', 'xFromVal', 'xFromCurve'));
    body.appendChild(mkClipGroup('Ende (rechts)', 'xToMode',   'xToVal',   'xToCurve'));
  }

  // ── Endstil for vertical curves ───────────────────────────────────────────
  if (cfg.typ === T_VERTIKAL) {
    const capHdr = document.createElement('div');
    capHdr.style.cssText = 'font-size:10px;font-weight:600;color:var(--accent);margin:7px 0 4px;border-top:1px solid var(--border);padding-top:5px';
    capHdr.textContent = 'Kurvenenden';
    body.appendChild(capHdr);

    const capDesc = { normal: 'Kurve endet am Rand (Standard)', along: 'Querstriche oben/unten', to_axis: 'Horizontale Linie zur Y-Achse (L-Form)' };
    const capDescEl = document.createElement('div');
    capDescEl.style.cssText = 'font-size:10px;color:var(--muted);margin-bottom:4px;font-style:italic';
    capDescEl.textContent = capDesc[cfg.endCap] || '';
    const capSel = mkSelect(
      ['normal','along','to_axis'],
      cfg.endCap,
      v => { cfg.endCap = v; capDescEl.textContent = capDesc[v] || ''; scheduleRender(); }
    );
    body.appendChild(mkFormRow('Endstil', capSel));
    body.appendChild(capDescEl);

    // Y-clip groups
    function mkYClipGroup(label, modeKey, valKey, curveKey) {
      const grp = document.createElement('div');
      grp.style.cssText = 'background:var(--bg);border:1px solid var(--border);border-radius:3px;padding:5px;margin-bottom:4px';
      const lbl = document.createElement('div');
      lbl.style.cssText = 'font-size:10px;font-weight:600;color:var(--muted);margin-bottom:3px';
      lbl.textContent = label;
      grp.appendChild(lbl);
      const mSel = mkSelect(['panel','custom','at_curve'], cfg[modeKey], v => {
        cfg[modeKey] = v; updateYFields(); scheduleRender();
      });
      grp.appendChild(mkFormRow('Modus', mSel));
      const fieldsDiv = document.createElement('div');
      grp.appendChild(fieldsDiv);
      function updateYFields() {
        fieldsDiv.innerHTML = '';
        if (cfg[modeKey] === 'custom') {
          fieldsDiv.appendChild(mkFormRow('y =', mkNumInput(cfg[valKey], v => { cfg[valKey] = v; scheduleRender(); }, { step: 0.1 })));
        } else if (cfg[modeKey] === 'at_curve') {
          fieldsDiv.appendChild(mkFormRow('Kurve', mkSelect(curveRefOptions(pan), cfg[curveKey], v => { cfg[curveKey] = v; scheduleRender(); })));
        }
      }
      updateYFields();
      return grp;
    }
    body.appendChild(mkYClipGroup('Unten (yMin)', 'yFromMode', 'yFromVal', 'yFromCurve'));
    body.appendChild(mkYClipGroup('Oben (yMax)',  'yToMode',   'yToVal',   'yToCurve'));
  }

  card.appendChild(hdr);
  card.appendChild(body);
  return card;
}

// ── Equilibrium list ──────────────────────────────────────────────────────────

function renderEqList() {
  const pan = activePan();
  const el = document.getElementById('eq-list');
  el.innerHTML = '';

  if (!pan.eqOverrides.length) {
    el.innerHTML = '<span class="muted">Keine Gleichgewichte gefunden.</span>';
    return;
  }

  pan.eqOverrides.forEach((ov, i) => {
    // Ensure new fields exist on old overrides
    if (ov.linienX === undefined) ov.linienX = true;
    if (ov.linienY === undefined) ov.linienY = true;

    const card = document.createElement('div');
    card.className = 'extra-item' + (ov.open ? ' open' : '');

    // Header row: toggle + checkbox + coords + label input
    const hdr = document.createElement('div');
    hdr.className = 'extra-item-header';

    const toggle = document.createElement('span');
    toggle.style.cssText = 'font-size:10px;color:var(--muted);flex-shrink:0';
    toggle.textContent = ov.open ? '▼' : '▶';

    const cb = document.createElement('input');
    cb.type = 'checkbox'; cb.checked = ov.sichtbar;
    cb.style.flexShrink = '0';
    cb.addEventListener('change', () => { ov.sichtbar = cb.checked; scheduleRender(); });

    const coords = document.createElement('span');
    coords.style.cssText = 'font-size:10px;color:var(--muted);flex-shrink:0;min-width:80px';
    coords.textContent = ov.xe !== undefined
      ? \`(\${ov.xe.toFixed(2)}, \${ov.ye.toFixed(2)})\`
      : '(?, ?)';

    const labelInp = document.createElement('input');
    labelInp.type = 'text';
    labelInp.style.cssText = 'flex:1;min-width:0;padding:2px 4px;border:1px solid var(--border);border-radius:3px;font-size:11px;background:var(--card)';
    labelInp.value = ov.label;
    labelInp.placeholder = \`A\${i}\`;
    labelInp.addEventListener('change', () => { ov.label = labelInp.value; scheduleRender(); });

    hdr.appendChild(toggle);
    hdr.appendChild(cb);
    hdr.appendChild(coords);
    hdr.appendChild(labelInp);

    hdr.addEventListener('click', e => {
      if (e.target === cb || e.target === labelInp) return;
      ov.open = !ov.open;
      card.classList.toggle('open', ov.open);
      toggle.textContent = ov.open ? '▼' : '▶';
    });

    // Body: color + axis line toggles
    const body = document.createElement('div');
    body.className = 'extra-item-body';

    // Color row
    const colorRow = document.createElement('div');
    colorRow.className = 'form-row';
    const colorLbl = document.createElement('label'); colorLbl.textContent = 'Farbe';
    colorRow.appendChild(colorLbl);
    colorRow.appendChild(mkColorInput(ov.farbe || '#1a1d23', v => { ov.farbe = v; scheduleRender(); }));
    body.appendChild(colorRow);

    // Axis lines row
    const linHdr = document.createElement('div');
    linHdr.style.cssText = 'font-size:10px;font-weight:600;color:var(--muted);margin:5px 0 3px';
    linHdr.textContent = 'Achsenlinien';
    body.appendChild(linHdr);

    const linRow = document.createElement('div');
    linRow.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap';

    const mkLinCk = (label, key) => {
      const wrap = document.createElement('label');
      wrap.style.cssText = 'display:flex;align-items:center;gap:3px;font-size:11px;cursor:pointer';
      const ck = document.createElement('input');
      ck.type = 'checkbox';
      ck.checked = ov[key] !== false;
      ck.style.accentColor = 'var(--accent)';
      ck.addEventListener('change', () => { ov[key] = ck.checked; scheduleRender(); });
      const span = document.createElement('span');
      span.textContent = label;
      wrap.appendChild(ck); wrap.appendChild(span);
      return wrap;
    };
    linRow.appendChild(mkLinCk('X-Achse (vertikal)', 'linienX'));
    linRow.appendChild(mkLinCk('Y-Achse (horizontal)', 'linienY'));
    body.appendChild(linRow);

    // Point size
    if (ov.ptSize === undefined) ov.ptSize = 8;
    const ptSzRow = document.createElement('div');
    ptSzRow.className = 'range-row';
    const ptSzLbl = document.createElement('label'); ptSzLbl.textContent = 'Größe';
    ptSzRow.appendChild(ptSzLbl);
    const ptSzSlider = document.createElement('input');
    ptSzSlider.type = 'range'; ptSzSlider.min = 2; ptSzSlider.max = 20; ptSzSlider.step = 1;
    ptSzSlider.value = ov.ptSize;
    const ptSzVal = document.createElement('span'); ptSzVal.className = 'range-val';
    ptSzVal.textContent = ov.ptSize;
    ptSzSlider.addEventListener('input', () => { ov.ptSize = parseInt(ptSzSlider.value); ptSzVal.textContent = ov.ptSize; scheduleRender(); });
    ptSzRow.appendChild(ptSzSlider); ptSzRow.appendChild(ptSzVal);
    body.appendChild(ptSzRow);

    card.appendChild(hdr);
    card.appendChild(body);
    el.appendChild(card);
  });
}

// ── Extra Punkte ──────────────────────────────────────────────────────────────

function renderExtraPunkte() {
  const pan = activePan();
  const el = document.getElementById('extra-punkte-list');
  el.innerHTML = '';
  pan.extraPunkte.forEach((ep, i) => el.appendChild(mkExtraPunktCard(pan, ep, i)));
}

function mkExtraPunktCard(pan, ep, i) {
  const card = document.createElement('div');
  card.className = 'extra-item' + (ep.open ? ' open' : '');

  const hdr = document.createElement('div');
  hdr.className = 'extra-item-header';

  const toggle = document.createElement('span');
  toggle.style.fontSize = '10px'; toggle.style.color = 'var(--muted)';
  toggle.textContent = ep.open ? '▼' : '▶';

  const title = document.createElement('span');
  title.style.flex = '1'; title.style.fontSize = '12px';
  title.textContent = ep.label || \`Punkt \${i+1}\`;

  const cb = document.createElement('input');
  cb.type = 'checkbox'; cb.checked = ep.sichtbar; cb.title = 'Sichtbar';
  cb.addEventListener('change', e => { e.stopPropagation(); ep.sichtbar = cb.checked; scheduleRender(); });

  const del = document.createElement('button');
  del.className = 'btn btn-sm btn-danger'; del.textContent = '✕';
  del.addEventListener('click', e => {
    e.stopPropagation();
    pan.extraPunkte.splice(i, 1);
    renderExtraPunkte(); scheduleRender();
  });

  hdr.appendChild(toggle); hdr.appendChild(title);
  hdr.appendChild(cb); hdr.appendChild(del);
  hdr.addEventListener('click', () => {
    ep.open = !ep.open;
    card.classList.toggle('open', ep.open);
    toggle.textContent = ep.open ? '▼' : '▶';
  });

  const body = document.createElement('div');
  body.className = 'extra-item-body';

  // Label + color
  body.appendChild(mkFormRow('Label', mkInput('text', ep.label, v => { ep.label = v; title.textContent = v || \`Punkt \${i+1}\`; scheduleRender(); })));
  body.appendChild(mkFormRow('Farbe', mkColorInput(ep.farbe, v => { ep.farbe = v; scheduleRender(); })));
  body.appendChild(mkCheckRow('Achsenlinien', ep.linien, v => { ep.linien = v; scheduleRender(); }));

  // Point size
  {
    const ptSzRow = document.createElement('div');
    ptSzRow.className = 'range-row';
    const ptSzLbl = document.createElement('label'); ptSzLbl.textContent = 'Größe';
    ptSzRow.appendChild(ptSzLbl);
    const ptSzSlider = document.createElement('input');
    ptSzSlider.type = 'range'; ptSzSlider.min = 2; ptSzSlider.max = 20; ptSzSlider.step = 1;
    ptSzSlider.value = ep.ptSize || 9;
    const ptSzVal = document.createElement('span'); ptSzVal.className = 'range-val';
    ptSzVal.textContent = ep.ptSize || 9;
    ptSzSlider.addEventListener('input', () => { ep.ptSize = parseInt(ptSzSlider.value); ptSzVal.textContent = ep.ptSize; scheduleRender(); });
    ptSzRow.appendChild(ptSzSlider); ptSzRow.appendChild(ptSzVal);
    body.appendChild(ptSzRow);
  }

  // Position
  body.appendChild(mkPosGroup(pan, 'Position', ep, 'modus', 'x', 'y', 'kurveRef', 'kurveX', 'ref1', 'ref2', 'ref3'));

  card.appendChild(hdr); card.appendChild(body);
  return card;
}

// ── Extra Pfeile ──────────────────────────────────────────────────────────────

function renderExtraPfeile() {
  const pan = activePan();
  const el = document.getElementById('extra-pfeile-list');
  el.innerHTML = '';
  pan.extraPfeile.forEach((epf, i) => el.appendChild(mkExtraPfeilCard(pan, epf, i)));
}

function mkExtraPfeilCard(pan, epf, i) {
  const card = document.createElement('div');
  card.className = 'extra-item' + (epf.open ? ' open' : '');

  const hdr = document.createElement('div');
  hdr.className = 'extra-item-header';

  const toggle = document.createElement('span');
  toggle.style.fontSize = '10px'; toggle.style.color = 'var(--muted)';
  toggle.textContent = epf.open ? '▼' : '▶';

  const title = document.createElement('span');
  title.style.flex = '1'; title.style.fontSize = '12px';
  title.textContent = epf.label || \`Pfeil \${i+1}\`;

  const cb = document.createElement('input');
  cb.type = 'checkbox'; cb.checked = epf.sichtbar; cb.title = 'Sichtbar';
  cb.addEventListener('change', e => { e.stopPropagation(); epf.sichtbar = cb.checked; scheduleRender(); });

  const del = document.createElement('button');
  del.className = 'btn btn-sm btn-danger'; del.textContent = '✕';
  del.addEventListener('click', e => {
    e.stopPropagation();
    pan.extraPfeile.splice(i, 1);
    renderExtraPfeile(); scheduleRender();
  });

  hdr.appendChild(toggle); hdr.appendChild(title);
  hdr.appendChild(cb); hdr.appendChild(del);
  hdr.addEventListener('click', () => {
    epf.open = !epf.open;
    card.classList.toggle('open', epf.open);
    toggle.textContent = epf.open ? '▼' : '▶';
  });

  const body = document.createElement('div');
  body.className = 'extra-item-body';

  body.appendChild(mkFormRow('Label', mkInput('text', epf.label, v => { epf.label = v; title.textContent = v || \`Pfeil \${i+1}\`; scheduleRender(); })));
  body.appendChild(mkFormRow('Farbe', mkColorInput(epf.farbe, v => { epf.farbe = v; scheduleRender(); })));

  // Arrow width
  {
    const awRow = document.createElement('div');
    awRow.className = 'range-row';
    const awLbl = document.createElement('label'); awLbl.textContent = 'Dicke';
    awRow.appendChild(awLbl);
    const awSlider = document.createElement('input');
    awSlider.type = 'range'; awSlider.min = 0.5; awSlider.max = 8; awSlider.step = 0.5;
    awSlider.value = epf.arrowWidth || 2;
    const awVal = document.createElement('span'); awVal.className = 'range-val';
    awVal.textContent = (epf.arrowWidth || 2).toFixed(1);
    awSlider.addEventListener('input', () => { epf.arrowWidth = parseFloat(awSlider.value); awVal.textContent = epf.arrowWidth.toFixed(1); scheduleRender(); });
    awRow.appendChild(awSlider); awRow.appendChild(awVal);
    body.appendChild(awRow);
  }

  body.appendChild(mkPosGroup(pan, 'Von', epf, 'vonModus', 'vonX', 'vonY', 'vonKurveRef', 'vonKurveX', 'vonRef1', 'vonRef2', 'vonRef3'));
  body.appendChild(mkPosGroup(pan, 'Nach', epf, 'nachModus', 'nachX', 'nachY', 'nachKurveRef', 'nachKurveX', 'nachRef1', 'nachRef2', 'nachRef3'));

  card.appendChild(hdr); card.appendChild(body);
  return card;
}

// ── Position group (manuell / auf Kurve / Schnittpunkt) ───────────────────────

function mkPosGroup(pan, groupTitle, obj, modusKey, xKey, yKey, kurveRefKey, kurveXKey, ref1Key, ref2Key, ref3Key) {
  const grp = document.createElement('div');
  grp.className = 'pos-group';

  const titleEl = document.createElement('div');
  titleEl.className = 'pos-group-title';
  titleEl.textContent = groupTitle;
  grp.appendChild(titleEl);

  const modusOpts = ['manuell', 'auf Kurve', 'Schnittpunkt'];
  const mSel = mkSelect(modusOpts, obj[modusKey], v => {
    obj[modusKey] = v;
    updateFields();
    scheduleRender();
  });
  grp.appendChild(mkFormRow('Modus', mSel));

  const fieldsDiv = document.createElement('div');
  fieldsDiv.className = 'pos-fields';
  grp.appendChild(fieldsDiv);

  function updateFields() {
    fieldsDiv.innerHTML = '';
    const modus = obj[modusKey];
    const refOpts = curveRefOptions(pan);

    if (modus === 'manuell') {
      fieldsDiv.appendChild(mkFormRow('x', mkNumInput(obj[xKey], v => { obj[xKey] = v; scheduleRender(); }, { step: 0.1 })));
      fieldsDiv.appendChild(mkFormRow('y', mkNumInput(obj[yKey], v => { obj[yKey] = v; scheduleRender(); }, { step: 0.1 })));
    } else if (modus === 'auf Kurve') {
      fieldsDiv.appendChild(mkFormRow('Kurve', mkSelect(refOpts, obj[kurveRefKey], v => { obj[kurveRefKey] = v; scheduleRender(); })));
      fieldsDiv.appendChild(mkFormRow('x', mkNumInput(obj[kurveXKey], v => { obj[kurveXKey] = v; scheduleRender(); }, { step: 0.1 })));
    } else if (modus === 'Schnittpunkt') {
      fieldsDiv.appendChild(mkFormRow('K1', mkSelect(refOpts, obj[ref1Key], v => { obj[ref1Key] = v; scheduleRender(); })));
      fieldsDiv.appendChild(mkFormRow('K2', mkSelect(refOpts, obj[ref2Key], v => { obj[ref2Key] = v; scheduleRender(); })));
      if (ref3Key) {
        fieldsDiv.appendChild(mkFormRow('K3', mkSelect(refOpts, obj[ref3Key], v => { obj[ref3Key] = v; scheduleRender(); })));
      }
    }
  }

  updateFields();
  return grp;
}

// ── Scenarios ─────────────────────────────────────────────────────────────────

function loadSzenario(name) {
  const sz = SZENARIEN[name];
  if (!sz) return;

  state.panels = sz.panels.map(pd => {
    const pan = newPanel();
    pan.xLabel = pd.xLabel || 'Y';
    pan.yLabel = pd.yLabel || 'i';
    pan.xMin   = pd.xMin || 0;
    pan.xMax   = pd.xMax || 12;
    pan.yMin   = pd.yMin || 0;
    pan.yMax   = pd.yMax || 12;
    if (pd.verbinden !== undefined) pan.verbinden = pd.verbinden;

    pan.kurven = (pd.kurven || []).map(kd => {
      const cfg = newCurve(kd.typ);
      Object.assign(cfg, kd);
      cfg.id = uid();
      return cfg;
    });
    return pan;
  });

  state.layout = sz.layout || '1×1';
  state.title  = sz.title  || '';
  state.activePanel = 0;

  document.getElementById('layout-select').value = state.layout;
  renderAll();
}

// ── Export helpers ────────────────────────────────────────────────────────────

// (computeExportDims replaced by inline logic in doExport)

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  // Default panel with IS-LM
  const pan = newPanel();
  pan.xLabel = 'Y'; pan.yLabel = 'i';
  pan.xMax = 12; pan.yMax = 12;
  pan.kurven.push({ ...newCurve(T_FALLEND),    a:10, b:2, k:0.6, label:'IS', farbe:'#1a1d23' });
  pan.kurven.push({ ...newCurve(T_HORIZONTAL), h:5,             label:'LM', farbe:'#cc0000' });
  state.panels = [pan];

  // Szenario dropdown
  const szSel = document.getElementById('szenario-select');
  Object.keys(SZENARIEN).forEach(name => {
    const opt = document.createElement('option');
    opt.value = name; opt.textContent = name;
    szSel.appendChild(opt);
  });

  document.getElementById('szenario-laden-btn').onclick = () => {
    loadSzenario(szSel.value);
  };

  document.getElementById('layout-select').addEventListener('change', e => {
    state.layout = e.target.value;
    scheduleRender();
  });

  document.getElementById('reset-btn').onclick = () => {
    state.panels = [];
    _idCounter = 0;
    init();
  };

  document.getElementById('add-punkt-btn').onclick = () => {
    activePan().extraPunkte.push(newExtraPunkt());
    renderExtraPunkte(); scheduleRender();
  };

  document.getElementById('add-pfeil-btn').onclick = () => {
    activePan().extraPfeile.push(newExtraPfeil());
    renderExtraPfeile(); scheduleRender();
  };

  function doExport(format) {
    const { rows, cols } = layoutGrid(state.layout);
    const width  = (state.exportPx || 1920) * cols;
    const height = (state.exportPx || 1920) * rows;

    // Deep-copy the snapshot layout so no Plotly-internal domains leak in.
    // Remove scaleanchor so the plot fills the canvas exactly.
    const exportLayout = JSON.parse(JSON.stringify(_figLayout));
    exportLayout.paper_bgcolor = '#ffffff';
    exportLayout.plot_bgcolor  = '#ffffff';
    // Remove scaleanchor AND the domain Plotly computed from it.
    // Plotly mutates the layout after react(), adding domain:[0, 0.xx] based
    // on scaleanchor — that stale domain is what caused the portrait crop.
    ['xaxis','xaxis2','xaxis3','xaxis4',
     'yaxis','yaxis2','yaxis3','yaxis4'].forEach(key => {
      if (exportLayout[key]) {
        delete exportLayout[key].scaleanchor;
        delete exportLayout[key].scaleratio;
        delete exportLayout[key].domain;   // let Plotly fill the full canvas
        // In the live chart, scaleanchor causes Plotly to expand the rendered
        // axis range beyond what we specify. Without it, annotations placed
        // slightly outside the range (axis labels, eq coordinate labels) get
        // clipped. Add extra margin so all annotations stay visible.
        if (exportLayout[key].range) {
          const [lo, hi] = exportLayout[key].range;
          const span = hi - lo;
          exportLayout[key].range = [lo - span * 0.06, hi + span * 0.06];
        }
      }
    });

    Plotly.toImage({ data: _figTraces, layout: exportLayout }, {
      format, width, height,
      ...(format === 'png' ? { scale: state.exportScale } : {}),
    }).then(dataUrl => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'Diagramm.' + format;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  document.getElementById('export-px').addEventListener('change', e => {
    state.exportPx = Math.max(100, parseInt(e.target.value) || 1920);
  });
  document.getElementById('export-scale').addEventListener('change', e => {
    state.exportScale = Math.max(0.5, parseFloat(e.target.value) || 2);
  });

  document.getElementById('export-png').addEventListener('click', () => doExport('png'));
  document.getElementById('export-svg').addEventListener('click', () => doExport('svg'));

  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
</script></body></html>`,
  };
})();
