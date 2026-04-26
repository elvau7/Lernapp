/* ============================================================
 *  NEUES FACH — VORLAGE (wird von der App nicht genutzt)
 * ============================================================
 *
 *  1. Diese Datei kopieren → z.B. Fächer/cards_meinfach.js
 *  2. Unten `false` durch `true` ersetzen (oder if-Block entfernen)
 *  3. In auth-client.js bei dataScripts den Pfad eintragen:
 *       "Fächer/cards_meinfach.js",
 *
 *  Gleiche id in kk / lt / mc / theory verknüpft Karten mit Theorie
 *  (📖-Button in den Karteikarten).
 *
 * ============================================================ */

if (typeof SUBJECTS !== "undefined" && false) {
  SUBJECTS.push({
    name: "Fachname",
    icon: "📖",
    description: "Kurzbeschreibung des Fachs",

    kk: [
      { id: 1, category: "Kategorie A", question: "Frage 1?", answer: "Antwort 1." },
      { id: 1, category: "Kategorie A", question: "Zweite Karte zu Thema 1?", answer: "Antwort." },
      { id: 2, category: "Kategorie B", question: "Frage zu Thema 2?", answer: "Antwort zu Thema 2." },
    ],

    lt: [
      { id: 1, category: "Kategorie A", question: "Frage zu Thema 1?",
        answer: "Die Antwort enthält eine {{Lücke}} an dieser Stelle." },
      { id: 2, category: "Kategorie B", question: "Frage zu Thema 2?",
        answer: "Hier wird automatisch eine Lücke gewählt." },
    ],

    mc: [
      { id: 1, category: "Kategorie A", question: "Welche Aussage zu Thema 1 ist richtig?",
        options: ["Richtige Antwort", "Falsch A", "Falsch B", "Falsch C"], correct: 0 },
      { id: 2, category: "Kategorie B", question: "Welche Aussage zu Thema 2 ist richtig?",
        options: ["Richtige Antwort", "Falsch A", "Falsch B"], correct: 0 },
    ],

    theory: [
      { id: 1, title: "Thema 1 — Titel", html: `
        <h2>Überschrift</h2>
        <p>Einleitungstext zum Thema.</p>
        <h3>Unterabschnitt</h3>
        <p>Weiterer Text mit <strong>Hervorhebung</strong> und <em>Kursivem</em>.</p>
      `},
      { id: 2, title: "Thema 2 — Titel", html: `
        <h2>Überschrift Thema 2</h2>
        <p>Text...</p>
      `},
      { id: 3, hidden: true, title: "Ergänzung", html: `
        <h2>Ergänzung</h2>
        <p>Nur per 📖 von Karten mit id 3 erreichbar.</p>
      `},
    ],
  });
}
