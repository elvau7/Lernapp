const bioPdf = (path) =>
  `<iframe src="${encodeURI(path)}" style="width:100%;height:100%;border:1px solid #ddd;border-radius:10px"></iframe>`;

SUBJECTS.push({
  name: "Biochemie Skripte",
  icon: "📄",
  description: "Skriptteile als PDF (13 Teile).",
  kk: [],
  lt: [],
  mc: [],
  theory: [],
  scriptPdfs: [
    { id: 1, title: "Teil 1 Grundlagen", html: bioPdf("Skripte/Biochemie/Teil 1 Grundlagen/Teil 1 Grundlagen.pdf") },
    { id: 2, title: "Teil 2 Aminosäuren", html: bioPdf("Skripte/Biochemie/Teil 2 Aminosäuren/Teil 2 Aminosäuren.pdf") },
    { id: 3, title: "Teil 3 Struktur und Funktion von Proteinen", html: bioPdf("Skripte/Biochemie/Teil 3 Struktur und Funktion von Proteinen/Teil 3 Struktur und Funktion von Proteinen.pdf") },
    { id: 4, title: "Teil 4 Kohlenhydrate", html: bioPdf("Skripte/Biochemie/Teil 4 Kohlenhydrate/Teil 4 Kohlenhydrate.pdf") },
    { id: 5, title: "Teil 5 Enzyme", html: bioPdf("Skripte/Biochemie/Teil 5 Enzyme/Teil 5 Enzyme.pdf") },
    { id: 6, title: "Teil 6 Kohlenhydratstoffwechsel", html: bioPdf("Skripte/Biochemie/Teil 6 Kohlenhydratstoffwechsel/Teil 6 Kohlenhydratstoffwechsel.pdf") },
    { id: 7, title: "Teil 7 Regulation des Kohlenhydratstoffwechsels", html: bioPdf("Skripte/Biochemie/Teil 7 Regulation des Kohlenhydratstoffwechsels/Teil 7 Regulation des Kohlenhydratstoffwechsels.pdf") },
    { id: 8, title: "Teil 8 Lipide", html: bioPdf("Skripte/Biochemie/Teil 8 Lipide/Teil 8 Lipide.pdf") },
    { id: 9, title: "Teil 9 Membranen", html: bioPdf("Skripte/Biochemie/Teil 9 Membranen/Teil 9 Membranen.pdf") },
    { id: 10, title: "Teil 10 Lipidverwertung", html: bioPdf("Skripte/Biochemie/Teil 10 Lipidverwertung/Teil 10 Lipidverwertung.pdf") },
    { id: 11, title: "Teil 11 Lipidsynthese", html: bioPdf("Skripte/Biochemie/Teil 11 Lipidsynthese/Teil 11 Lipidsynthese.pdf") },
    { id: 12, title: "Teil 12 Zellatmung", html: bioPdf("Skripte/Biochemie/Teil 12 Zellatmung/Teil 12 Zellatmung.pdf") },
    { id: 13, title: "Teil 13 Aminosäuren und Porphyrinstoffwechsel", html: bioPdf("Skripte/Biochemie/Teil 13 Aminosäuren und Porphyrinstoffwechsel/Teil 13 Aminosäuren und Porphyrinstoffwechsel.pdf") }
  ]
});
