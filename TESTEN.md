# Testanleitung (PC + Handy)

Diese Anleitung zeigt dir Schritt fuer Schritt, wie du die App lokal am PC startest und auf dem Handy testest.

## 1) Vorbereitung

- PC und Handy muessen im selben WLAN sein.
- Projektordner auf dem PC oeffnen: `app_6_semester_neu`
- Die Dateien muessen lokal vorhanden sein (inkl. `index.html`).

## 2) App am PC lokal starten

Du hast drei einfache Moeglichkeiten. Nimm eine davon.

### Option A: VS Code Live Server (am bequemsten)

1. In VS Code die Datei `index.html` oeffnen.
2. Rechtsklick in die Datei -> `Open with Live Server`.
3. Der Browser oeffnet sich, z. B. mit `http://127.0.0.1:5500`.

### Option B: Python HTTP Server

1. Terminal im Projektordner oeffnen.
2. Befehl starten:
   - `python -m http.server 5500`
3. Im PC-Browser pruefen:
   - `http://127.0.0.1:5500`

### Option C: Node (falls installiert)

1. Terminal im Projektordner oeffnen.
2. Beispiel mit `npx`:
   - `npx serve -l 5500`
3. Im PC-Browser pruefen:
   - `http://127.0.0.1:5500`

## 3) Lokale IP vom PC herausfinden

1. Auf Windows `Win + R` druecken, `cmd` eingeben, Enter.
2. `ipconfig` ausfuehren.
3. Adapter mit deinem WLAN suchen.
4. `IPv4-Adresse` notieren, z. B. `192.168.178.34`.

## 4) App am Handy aufrufen

1. Am Handy Browser oeffnen (iPhone: Safari, Android: Chrome).
2. URL eingeben:
   - `http://DEINE-IP:5500`
   - Beispiel: `http://192.168.178.34:5500`
3. App sollte jetzt auf dem Handy sichtbar sein.

## 5) Nach Code-Aenderungen richtig neu laden

Wichtig: Mobile Browser cachen stark.

- Seite am Handy neu laden.
- Wenn Aenderungen fehlen:
  - URL mit Cache-Buster aufrufen:
    - `http://192.168.178.34:5500/?v=2`
    - bei Bedarf `v=3`, `v=4`, ...
  - Oder Tab komplett schliessen und neu oeffnen.

## 6) Kurzer Testplan fuer deine aktuellen Themen

### A) Flip auf dem Handy testen

1. Fach oeffnen.
2. `Karteikarten` starten.
3. Karte antippen.
4. Erwartung: Karte dreht zuverlaessig um.

### B) Stoffwechselwege-Karten testen

1. Fach mit `Stoffwechselwege` oeffnen.
2. `Karteikarten` und `Karteikarten (Wiederholung)` pruefen.
3. Erwartung am Handy:
   - kein Scrollen in der Karte
   - Inhalt sichtbar und kompakt dargestellt

## 7) Hauefige Probleme + Loesungen

- **Handy erreicht URL nicht**
  - PC und Handy wirklich im gleichen WLAN?
  - Richtige IPv4 verwendet?
  - Port korrekt (z. B. `5500`)?
  - Windows-Firewall blockiert den Port eventuell.

- **Aenderung am Handy nicht sichtbar**
  - Cache-Buster `?v=...` verwenden.
  - Tab neu starten.
  - Server wirklich im richtigen Projektordner gestartet?

- **Tippen reagiert trotzdem nicht**
  - Erst mit Cache-Buster testen.
  - Anderen Browser versuchen (Safari vs. Chrome).
  - Genaue Geraetekombi notieren (z. B. iPhone 13, iOS Version, Safari).

## 8) Optional: Schneller Workflow fuer dich

1. Server einmal starten und laufen lassen.
2. PC: Code aendern und speichern.
3. Handy: Seite mit `?v=neueZahl` neu laden.
4. Testschritte durchklicken.

So bekommst du am schnellsten verlässliche Ergebnisse auf Handy und PC.
