/*
 * ============================================================
 *  KARTEN-DATEN  —  cards.js
 * ============================================================
 *
 *  Jedes Fach wird in einer eigenen Datei definiert und hier
 *  per SUBJECTS.push({...}) eingetragen.
 *
 *  Neue Fächer: Vorlage Fächer/cards_VORLAGE_neues_fach.js kopieren,
 *  in auth-client.js (dataScripts) den Pfad eintragen.
 *
 *  ID-Verknüpfung: kk, lt, mc und theory teilen sich einen
 *  gemeinsamen id-Namespace pro Fach. Gleiche id = gleiches Thema.
 *  hidden: true auf theory-Einträgen blendet sie aus der
 *  Theorie-Übersicht aus, 📖-Button funktioniert trotzdem.
 *
 *  Mix-Modus (Karteikarten + MC in einer zufälligen Runde):
 *  Am Subject-Objekt mixedKkMc: true setzen (nur sichtbar wenn
 *  sowohl kk- als auch mc-Arrays nicht leer sind). Dann erscheint
 *  „Mix: Karten & MC“ in der Modusliste.
 *  Nur im Mix (nicht im reinen MC-Modus): MC-Einträge dürfen optional
 *  question_html (HTML/SVG) und options_html (Array, gleiche Länge wie
 *  options) setzen; leer fehlend → Text aus question bzw. options[i].
 *  Bei rein grafischen Optionen optional option_labels (Kurztext pro
 *  Index) für die „Richtig:“-Zeile, sonst „Antwort A“ … .
 *
 * ============================================================
 */

const SUBJECTS = [];
