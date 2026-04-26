const bioScriptHtml = (path) => {
  const encodedPath = encodeURI(path);
  const srcDoc = `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html, body { margin: 0; padding: 0; background: #fff; }
    body { font-family: "DM Sans", system-ui, sans-serif; color: #1f1f1f; }
    #status { padding: 14px 16px; color: #666; font-size: 14px; }
    #content { padding: 10px 16px 20px; }
    .figure pre { white-space: pre-wrap; }
  </style>
</head>
<body>
  <div id="status">Skript wird geladen…</div>
  <div id="content"></div>
  <script>
    (async function () {
      const statusEl = document.getElementById("status");
      const contentEl = document.getElementById("content");
      try {
        const res = await fetch("${encodedPath}");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const raw = await res.text();
        const parsed = new DOMParser().parseFromString(raw, "text/html");
        const source = parsed.querySelector("main.page .content") || parsed.querySelector("main.page") || parsed.body;
        contentEl.innerHTML = source ? source.innerHTML : raw;
        statusEl.remove();

        const tikzBlocks = Array.from(contentEl.querySelectorAll("pre")).filter(pre =>
          /\\\\begin\\{tikzpicture\\}/.test(pre.textContent || "")
        );
        for (const pre of tikzBlocks) {
          const tikzScript = document.createElement("script");
          tikzScript.type = "text/tikz";
          tikzScript.textContent = pre.textContent || "";
          pre.replaceWith(tikzScript);
        }

        window.MathJax = {
          tex: { inlineMath: [["\\\\(", "\\\\)"]], displayMath: [["\\\\[", "\\\\]"]] },
          svg: { fontCache: "global" }
        };
        const mj = document.createElement("script");
        mj.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
        mj.async = true;
        document.head.appendChild(mj);

        const tj = document.createElement("script");
        tj.src = "https://cdn.jsdelivr.net/npm/tikzjax@0.12.0/tikzjax.js";
        tj.defer = true;
        document.head.appendChild(tj);
      } catch (err) {
        statusEl.textContent = "Skript konnte nicht geladen werden: " + (err && err.message ? err.message : "Unbekannter Fehler");
      }
    })();
  </script>
</body>
</html>`;
  const escapedSrcDoc = srcDoc
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return `
    <div style="display:flex;flex-direction:column;gap:12px;height:100%;">
      <div style="display:flex;justify-content:flex-end;">
        <a
          href="${encodedPath}"
          target="_blank"
          rel="noopener noreferrer"
          style="display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border:1px solid #cfcfcf;border-radius:10px;text-decoration:none;font-size:13px;font-weight:600;color:#2b2b2b;background:#f9f9f9;"
        >
          Skript extern öffnen
        </a>
      </div>
      <iframe
        srcdoc="${escapedSrcDoc}"
        sandbox="allow-scripts allow-same-origin"
        style="width:100%;height:100%;min-height:520px;border:1px solid #ddd;border-radius:10px"
      ></iframe>
    </div>
  `;
};

SUBJECTS.push({
  name: "Biochemie Skripte",
  icon: "📄",
  description: "🚧 Work in Progress - Skriptteile als HTML (13 Teile).",
  kk: [],
  lt: [],
  mc: [],
  theory: [],
  scriptPdfs: [
    { id: 1, title: "Teil 1 Grundlagen", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_1_Grundlagen.html") },
    { id: 2, title: "Teil 2 Aminosäuren", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_2_Aminosaeuren.html") },
    { id: 3, title: "Teil 3 Struktur und Funktion von Proteinen", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_3_Struktur_und_Funktion_von_Proteinen.html") },
    { id: 4, title: "Teil 4 Kohlenhydrate", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_4_Kohlenhydrate.html") },
    { id: 5, title: "Teil 5 Enzyme", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_5_Enzyme.html") },
    { id: 6, title: "Teil 6 Kohlenhydratstoffwechsel", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_6_Kohlenhydratstoffwechsel.html") },
    { id: 7, title: "Teil 7 Regulation des Kohlenhydratstoffwechsels", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_7_Regulation_des_Kohlenhydratstoffwechsels.html") },
    { id: 8, title: "Teil 8 Lipide", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_8_Lipide.html") },
    { id: 9, title: "Teil 9 Membranen", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_9_Membranen.html") },
    { id: 10, title: "Teil 10 Lipidverwertung", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_10_Lipidverwertung.html") },
    { id: 11, title: "Teil 11 Lipidsynthese", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_11_Lipidsynthese.html") },
    { id: 12, title: "Teil 12 Zellatmung", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_12_Zellatmung.html") },
    { id: 13, title: "Teil 13 Aminosäuren und Porphyrinstoffwechsel", html: bioScriptHtml("Skripte_HTML/Biochemie/Teil_13_Aminosaeuren_und_Porphyrinstoffwechsel.html") }
  ]
});
