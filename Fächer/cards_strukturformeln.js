/* Strukturformeln — nur vorhandene Moleküle; KK + durchgemischte MC aus MOLECULE_MAPPING. */
(function () {
  const mapping = typeof globalThis !== "undefined" ? globalThis.MOLECULE_MAPPING : null;

  const imgHtml = (relPath, boxH) => {
    if (!relPath) return '<p style="color:#999;font-size:13px">Kein Skelett-SVG</p>';
    const safe = String(relPath).replace(/^assets\//, "").replace(/"/g, "");
    return `<div style="width:100%;height:${boxH}px;display:flex;align-items:center;justify-content:center"><img src="${safe}" alt="" style="width:100%;height:100%;object-fit:contain;display:block" loading="lazy"/></div>`;
  };

  const categoryKey = (path) => {
    const mo = (path || "").match(/molecules\/vorhanden\/([^/]+)\//);
    return mo ? mo[1] : "other";
  };

  const categoryLabel = (key) => {
    if (key === "other") return "Sonstiges";
    return key.replace(/_/g, " ");
  };

  const displayName = (m) => m.name;
  const nameHtml = (name) =>
    `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;padding:8px 10px;font-family:'Playfair Display',serif;font-size:clamp(28px,5vw,46px);font-weight:600;line-height:1.15">${String(name || "")}</div>`;

  const MAX_MC_OPTIONS = 4;

  /**
   * Bis zu vier Moleküle aus derselben Kategorie: immer die Ziel-Struktur dabei;
   * bei mehr als vier Einträgen vier aufeinanderfolgende (zyklisch sortiert nach slug).
   */
  const pickMcPool = (pool, targetSlug) => {
    const sorted = [...pool].sort((a, b) => String(a.slug).localeCompare(String(b.slug)));
    if (sorted.length <= MAX_MC_OPTIONS) {
      return sorted.slice().sort((a, b) => displayName(a).localeCompare(displayName(b)));
    }
    const ix = sorted.findIndex((m) => m.slug === targetSlug);
    if (ix < 0) return sorted.slice(0, MAX_MC_OPTIONS);
    const circ = [];
    for (let k = 0; k < MAX_MC_OPTIONS; k++) circ.push(sorted[(ix + k) % sorted.length]);
    return circ.sort((a, b) => displayName(a).localeCompare(displayName(b)));
  };
  const shuffleMcOptions = (options, correctIndex, extras) => {
    const order = options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const out = { options: order.map((i) => options[i]), correct: order.indexOf(correctIndex) };
    if (extras) {
      for (const key of Object.keys(extras)) {
        const arr = extras[key] || [];
        out[key] = order.map((i) => arr[i]);
      }
    }
    return out;
  };

  if (!Array.isArray(mapping) || mapping.length === 0) {
    console.warn("Strukturformeln: MOLECULE_MAPPING fehlt — molecules/molecule_mapping_bundle.js vor dieser Datei laden.");
    SUBJECTS.push({
      name: "Strukturformeln",
      icon: "🧪",
      description: "Moleküldaten nicht geladen.",
      mixedKkMc: false,
      kk: [],
      lt: [],
      mc: [],
      theory: [],
    });
    return;
  }

  const mols = mapping.filter((m) => m.skeletal && m.slug && String(m.skeletal).includes("molecules/vorhanden/"));
  const groups = {};
  for (const mol of mols) {
    const k = categoryKey(mol.skeletal);
    if (!groups[k]) groups[k] = [];
    groups[k].push(mol);
  }

  const groupKeys = Object.keys(groups).sort((a, b) => a.localeCompare(b));

  let nextId = 1;
  const kk = [];
  const mc = [];

  kk.push({
    id: nextId++,
    category: "",
    question: "Was ist der Unterschied zwischen Summenformel und Strukturformel?",
    answer:
      "- Summenformel: Gibt nur Anzahl der Atome je Element an (z. B. C6H12O6)\n- Strukturformel: Zeigt zusätzlich, wie Atome miteinander verbunden sind",
  });

  for (const gk of groupKeys) {
    const pool = groups[gk];
    for (const mol of pool) {
      kk.push({
        id: nextId++,
        category: "",
        question_html: `<div style="text-align:center">${imgHtml(mol.skeletal, 360)}</div>`,
        answer_html: nameHtml(displayName(mol)),
      });
      kk.push({
        id: nextId++,
        category: "",
        question_html: nameHtml(displayName(mol)),
        answer_html: `<div style="text-align:center">${imgHtml(mol.skeletal, 360)}</div>`,
      });
    }
  }

  for (const gk of groupKeys) {
    const pool = groups[gk];
    if (pool.length < 2) continue;
    const label = categoryLabel(gk);
    for (const mol of pool) {
      const poolOpts = pickMcPool(pool, mol.slug);
      const correct = poolOpts.findIndex((m) => m.slug === mol.slug);
      const names = poolOpts.map(displayName);
      const svgs = poolOpts.map((o) => imgHtml(o.skeletal, 176));
      const nameQ = shuffleMcOptions(names, correct);
      const imgQ = shuffleMcOptions(
        poolOpts.map((_, i) => String.fromCharCode(65 + i)),
        correct,
        { options_html: svgs, option_labels: names }
      );

      mc.push({
        id: nextId++,
        category: label,
        question: "Welcher Name passt zu dieser Skelettformel?",
        question_html: `<div style="text-align:center">${imgHtml(mol.skeletal, 230)}<p style="margin:10px 0 0;font-size:14px;font-family:'DM Sans',sans-serif">Welcher Name passt?</p></div>`,
        options: nameQ.options,
        correct: nameQ.correct,
      });

      mc.push({
        id: nextId++,
        category: label,
        question: `Welche Skelettformel gehört zu „${displayName(mol)}“?`,
        options: imgQ.options,
        options_html: imgQ.options_html,
        option_labels: imgQ.option_labels,
        correct: imgQ.correct,
      });
    }
  }

  mc.push({
    id: nextId++,
    category: "Grundlagen",
    question: "Welche Aussage zur Strukturformel ist richtig?",
    options: [
      "Sie zeigt Bindungen zwischen Atomen.",
      "Sie zeigt nur die Anzahl der Atome ohne Bindungen.",
      "Sie ist immer identisch mit der Summenformel.",
    ],
    correct: 0,
  });

  SUBJECTS.push({
    name: "Strukturformeln",
    icon: "🧪",
    description: `Skelettformeln aus dem Molekülkatalog (${mols.length} Strukturen), Karten beidseitig und MC je Kategorieordner.`,
    mixedKkMc: true,
    kk,
    lt: [],
    mc,
    theory: [],
  });
})();
