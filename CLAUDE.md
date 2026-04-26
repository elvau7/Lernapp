# CLAUDE.md — Lernapp (React + Supabase)

## Zweck

Lernapp für mehrere Fächer: Login über **Supabase**, Kurse und Lernmodi in **React** (`app-react-compiled.js`), Inhalte als statische JS-Dateien unter **`Fächer/`** (`SUBJECTS.push`). GitHub-Pages-tauglich als reine Client-App, sofern Supabase-CORS und Keys passen.

---

## Architektur

| Datei/Ordner | Zweck |
|--------------|--------|
| `index.html` | Login-Screen (`#screen-login`), `#react-root` für React; Stylesheets; Skript-Reihenfolge |
| `style.css` | Login und ggf. globale Klassen; React nutzt überwiegend Inline-Styles |
| `auth-client.js` | Supabase-Client, Login/Session, `dataScripts` nacheinander laden, Fächer nach Level filtern, `app-react-compiled.js` laden |
| `supabase-config.js` | `window.SUPABASE_CONFIG`: `url`, `anonKey`, `usernameDomain`, `userLevels`, `defaultLevel`, `levelSubjectAccess` |
| `app-react-compiled.js` | Gesamte App-UI nach Login (Kurswahl, Modi, KK, LT, MC, Theorie, Fortschritt, Makro, Pathways, …) |
| `Fächer/cards.js` | `const SUBJECTS = [];` — zuerst unter den Fachskripten laden |
| `Fächer/cards_<fach>.js` | Pro Fach `SUBJECTS.push({ name, icon, description, kk, lt, mc, theory, … })` |
| `macro-diagrams.js` | Makro-Diagramm-Modus (wird in `dataScripts` geladen) |
| `lib/katex.min.js`, `lib/katex.min.css`, `lib/auto-render.min.js`, `lib/fonts/` | KaTeX, lokal |
| `lib/react.production.min.js`, `lib/react-dom.production.min.js` | React, lokal |

**CDN (Ausnahmen):** `index.html` lädt `@supabase/supabase-js` und Google Fonts von externen URLs. KaTeX primär aus `lib/`.

**Ladereihenfolge (vereinfacht):**

1. `style.css`, `lib/katex.min.css`
2. `lib/katex.min.js`, `lib/auto-render.min.js`
3. `lib/react*.min.js`
4. Supabase SDK (CDN)
5. `supabase-config.js` → `auth-client.js` (lädt dynamisch:) `Fächer/cards.js`, weitere `Fächer/cards_*.js`, `macro-diagrams.js`, dann `app-react-compiled.js`

Karten-Dateien stehen **nicht** als feste Liste in `index.html`, sondern im Array `dataScripts` in `auth-client.js`.

---

## App-Flow (logisch)

```
Login (HTML) → Session ok → React mount (#react-root)
  → Kurswahl → Moduswahl (KK, KK-SR, LT, MC, Theorie, Pathways?, Mix?, Fortschritt)
  → jeweiliger Screen → Theorie-Leser bei Bedarf
```

Auf der Kursübersicht: optional **Makro-Diagramme** (Kachel), nur wenn `LA_ACCESS_LEVEL` `economics` oder `admin` ist.

Globale Hilfs-Variablen nach Login (u. a.): `window.LA_SUPABASE`, `window.LA_USERNAME`, `window.LA_USER_PROGRESS_ID`, `window.LA_ACCESS_LEVEL`, `window.SUBJECTS`.

---

## Konfiguration

### `supabase-config.js`

- `usernameDomain`: synthetische E-Mail `user@domain` für `signInWithPassword`.
- `userLevels`: Username → Level; nicht gelistete Nutzer erhalten `defaultLevel`.
- `levelSubjectAccess`: Level → Array von **exakten** `subject.name`-Strings, die angezeigt werden.
- **`admin`**: `applySubjectAccessFilter` in `auth-client.js` überspringt die Filterung — alle `SUBJECTS` bleiben sichtbar.

### Kein `APP_PASSWORD` / `STORAGE_KEY`

Auth und Session laufen über Supabase; kein separates Passwort in einer `app.js` mehr.

### App-Titel

In `index.html`: `<title>`, Login-Überschrift und ggf. weitere statische Texte.

---

## Datenstruktur (Fach-Objekt)

Kern wie in der Vorlage:

```js
SUBJECTS.push({
  name: "Fachname",
  icon: "📖",
  description: "Kurzbeschreibung",
  kk: [ { id: 1, question: "…", answer: "…", category: "…" }, … ],
  lt: [ { id: 1, category: "…", question: "…", answer: "… {{Lücke}} …" }, … ],
  mc: [ { id: 1, category: "…", question: "…", options: […], correct: 0 }, … ],
  theory: [ { id: 1, title: "…", html: `<h2>…</h2>` }, … ],
});
```

**Optionen:**

- `mixedKkMc: true` — Modus „Mix: Karten & MC“, wenn `kk` und `mc` beide nicht leer.
- `pathways: [ … ]` — Modus „Stoffwechselwege“ (siehe Biochemie-Karten).
- `question_html` / `answer_html` auf KK-Karten statt reiner Strings, wo nötig.

### ID-Verknüpfung

Unverändert: gemeinsamer `id`-Raum für `kk`, `lt`, `mc`, `theory`; `hidden: true` bei Theorie blendet nur die Übersicht aus, 📖 bleibt.

---

## Fortschritt

`app-react-compiled.js` nutzt `window.LA_SUPABASE` und `LA_USER_PROGRESS_ID`, Tabelle **`user_progress`** (`progress` JSON, `updated_at`). Schema/RLS in Supabase bereitstellen, wenn Cloud-Sync gewünscht ist.

---

## KaTeX

Selbst gehostet unter `lib/`. Auto-Render wird nach relevanten UI-Updates angestoßen (siehe React-Code).

### Backslash in Template-Literals

Wie in der alten Vorlage: Befehle, die mit `\f`, `\b`, `\t`, `\r`, `\v`, `\n` **beginnen**, müssen in **Backtick-Strings** als `\\frac`, `\\beta`, `\\neq`, usw. geschrieben werden. Zeilenumbrüche in normalen `answer`-Strings bleiben `\n`.

---

## Design

React-Theme nutzt u. a. Schriftarten DM Sans / Playfair (Google Fonts in `index.html`). Für reines CSS außerhalb React: **`style.css`** — bevorzugt bestehende Patterns; keine harten Hex-Werte, wo Variablen etabliert sind.

---

## Was NICHT annehmen

- ❌ Keine zentrale `app.js` im Root für Lernlogik — das ist `app-react-compiled.js` + `auth-client.js`.
- ❌ Fachinhalte nicht in `Fächer/cards.js` als riesiges Array hängen — eine Datei pro Fach + `dataScripts`.
- ❌ `theory_html` in KK — Theorie nur im `theory`-Array.
- ❌ Ohne `\\`-Escaping problematische LaTeX-Präfixe in Template-Literals.
- ⚠️ „Keine API-Calls“ gilt nicht — Supabase wird aktiv genutzt.

---

## Modul-Präfixe (Legacy / Mental Model)

Die alte Vanille-App nutzte `kk_`, `lt_`, `mc_`, `tl_` in einer `app.js`. In der React-Version sind das **Komponenten/Handler im Bundle**; bei Suchen nach Logik in erster Linie **`app-react-compiled.js`** durchsuchen.
