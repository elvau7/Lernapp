# Lernapp (6. Semester)

Statische Web-App mit **Supabase-Login**, **React-UI** (`app-react-compiled.js`) und Lerninhalten als JavaScript-Dateien unter `Fächer/`. Kein npm-Build im Projektroot nötig zum Betrieb — lokal per einfachem HTTP-Server starten (siehe `TESTEN.md`).

---

## Schnellstart

1. `supabase-config.js` mit URL und Anon-Key deines Supabase-Projekts füllen (siehe unten).
2. Statischen Server im Projektordner starten, z. B. `python -m http.server 5500`, dann `http://127.0.0.1:5500` öffnen.
3. Schritt-für-Schritt inkl. Handy im gleichen WLAN: **`TESTEN.md`**.

---

## Konfiguration

### Supabase (`supabase-config.js`)

- `url`, `anonKey`: Project Settings → API in Supabase.
- `usernameDomain`: Domain für synthetische E-Mails (Standard `users.local`). Login-UI fragt nur **Benutzername + Passwort**; intern wird `benutzername@<usernameDomain>` an `signInWithPassword` übergeben. Nutzer im Dashboard daher mit genau dieser E-Mail anlegen.
- `userLevels`: Map `benutzername` (kleingeschrieben) → Level-String (`admin`, `economics`, `molekularbiologie`, …).
- `defaultLevel`: Level, wenn der Nutzer nicht in `userLevels` vorkommt.
- `levelSubjectAccess`: pro Level eine Liste von **Fachnamen** (`subject.name`), die dieser Gruppe angezeigt werden. `admin` sieht alle Fächer (Filter wird nicht angewendet).

### App-Titel und Login-Oberfläche (`index.html`)

- `<title>` im `<head>`
- `<h1>` und Untertitel im Login-Block (`#screen-login`)

Die Kursliste und Lernscreens rendern in `#react-root` (React).

---

## Neue Fächer und Karten

1. Vorlage kopieren: `Fächer/cards_VORLAGE_neues_fach.js` → z. B. `Fächer/cards_meinfach.js`.
2. In der neuen Datei `SUBJECTS.push({ ... })` aktivieren (in der Vorlage steht ein `if (... && false)`-Schutz).
3. In **`auth-client.js`** im Array `dataScripts` den Pfad eintragen, **nach** `Fächer/cards.js` und **vor** `app-react-compiled.js` (Reihenfolge: erst Daten, dann UI):
   ```js
   "Fächer/cards_meinfach.js",
   ```
4. Optional: Nutzer-Level und `levelSubjectAccess` in `supabase-config.js` anpassen, damit das neue Fach für die richtige Gruppe sichtbar ist.

### `Fächer/cards.js`

Enthält nur `const SUBJECTS = [];` plus Kommentare — **nicht** durch ein großes Monolith-Array ersetzen. Pro Fach eigene Datei mit `SUBJECTS.push({...})`.

### Mix-Modus (Karteikarten + MC)

Am Subject-Objekt `mixedKkMc: true` setzen (nur sinnvoll wenn `kk` und `mc` beide nicht leer sind). Dann erscheint der Modus „Mix: Karten & MC“.

### Stoffwechselwege (Pathways)

Optional: am Subject ein Array `pathways` (siehe z. B. `Fächer/cards_biochemie.js`). Dann erscheint der Lernmodus „Stoffwechselwege“.

---

## Karten-Format

### Karteikarte

```js
{id: 1, question: "Was ist ATP?", answer: "Adenosintriphosphat — Energieträger der Zelle.", category: "Energiestoffwechsel"},
```

### Lückentext

```js
{id: 1, category: "Energiestoffwechsel", question: "Was ist ATP?",
 answer: "ATP steht für {{Adenosintriphosphat}} und ist der wichtigste {{Energieträger}} der Zelle."},
```

- `{{Wort}}` → Eingabefeld mit Tipp; ohne `{{...}}` → automatische Lückenwahl.
- Zeilenumbrüche mit `\n`, Aufzählungen mit `- ` am Zeilenanfang.

### Mathematische Formeln (KaTeX)

KaTeX liegt unter `lib/` und wird nach Inhalts-Updates gerendert.

In **Template-Literals** (Backticks) müssen LaTeX-Befehle, die in JavaScript als `\f`, `\b`, `\t`, `\r`, `\v` oder `\n` interpretiert würden, mit **doppeltem Backslash** geschrieben werden (z. B. `\\frac`, `\\beta`, `\\neq`, `\\text{...}`). In normalen Anführungsstrings ohne dieses Problem können einfache Backslashes oft ausreichen — siehe ausführlich `CLAUDE.md`.

### Theorie

Wie in der Vorlage: `theory`-Array mit `id`, `title`, `html`; optional `hidden: true` (nur über 📖-Button von KK/LT/MC, nicht in der Theorie-Übersicht).

### Multiple Choice

- `correct`: ein Index oder Array von Indizes bei mehreren richtigen Antworten.
- Tastatur: `1`–`9`, `Enter`, `→` (Details in `CLAUDE.md`).

### ID-Verknüpfung

`kk`, `lt`, `mc` und `theory` teilen sich die `id` pro Fach; gleiche `id` = gleiches Thema und gemeinsamer 📖-Theorie-Button, sofern ein `theory`-Eintrag existiert.

---

## Supabase Auth (E-Mail-Provider)

- Unter Authentication → Providers **E-Mail** aktivieren.
- Nutzer mit E-Mail `name@users.local` (oder deiner `usernameDomain`) anlegen.

### Lernfortschritt (optional, empfohlen)

Die App synchronisiert Fortschritt in die Tabelle **`user_progress`** (Spalten u. a. `user_id`, `progress` (JSON), `updated_at`). Tabelle und RLS in Supabase anlegen, sonst bleibt die App nutzbar, Cloud-Sync kann fehlschlagen (Fehler in der Konsole).

---

## Makro-Diagramme

- Daten/Logik: `macro-diagrams.js` (wird wie ein Fachskript geladen, trägt keine `SUBJECTS` ein, sondern registriert die Makro-Ansicht).
- Sichtbarkeit: nur für Zugriffslevel **`economics`** oder **`admin`** (hardcodiert in `app-react-compiled.js`).

---

## Technische Übersicht

| Pfad | Zweck |
|------|--------|
| `index.html` | Shell: Login, `#react-root`, Skript-Tags |
| `style.css` | Globales Layout + Login |
| `auth-client.js` | Supabase-Init, Login, Session, dynamisches Laden von `dataScripts`, dann `app-react-compiled.js` |
| `supabase-config.js` | URL, Keys, Level, Fach-Sichtbarkeit |
| `app-react-compiled.js` | React-UI (Lernmodi, Fortschritt, Theorie, …) |
| `Fächer/cards.js` | `SUBJECTS = []` |
| `Fächer/cards_*.js` | `SUBJECTS.push(...)` pro Fach |
| `Fächer/cards_VORLAGE_neues_fach.js` | Kopier-Vorlage für neue Fächer |
| `macro-diagrams.js` | Makro-Diagramm-Modus |
| `lib/` | KaTeX, React (production), Fonts |

**Externe Skripte (CDN):** `@supabase/supabase-js`, Google Fonts — **KaTeX** und **React**-Bundles liegen zusätzlich unter `lib/`.

---

## UI-Code ändern

Die gebündelte Oberfläche liegt in **`app-react-compiled.js`**. Eine unbearbeitete Quelle kann unter `Unbrauchbar/` liegen; zum Mitführen einer Build-Pipeline ist dieses Repo nicht zwingend vorkonfiguriert — nach Änderungen am React-Code muss neu gebündelt bzw. die kompilierte Datei aktualisiert werden.
