/* Biochemie — auto-generated from biochem-cards-source + pathways/data.js.
 * Quelle: biochem-cards-source/{kk_cards,lt_cards,mc_cards,theory_cards}.js und pathways/data.js (PATHWAYS)
 * Neu generieren: node scripts/build-biochem-cards.mjs
 */
SUBJECTS.push({
  "name": "Biochemie",
  "icon": "🧬",
  "description": "Karteikarten, Lückentext, Theorie und Stoffwechselwege (Quellen: biochem-cards-source + pathways/data.js).",
  "kk": [
    {
      "id": 5,
      "question": "Wie sind Proteine gebunden, wie werden sie gespalten und welche Wechselwirkungen stabilisieren sie?",
      "answer": "- Aminosäuren sind über Säureamidbindungen (Peptidbindungen) verknüpft; entstehen unter Wasserabspaltung zwischen einer Amino- und Carboxy-Gruppe\n- Spaltung: Hydrolyse durchgeführt von Hydrolasen (Proteasen/Peptidasen)\n- Endopeptidasen: Pepsin (im Magen), Trypsin (im Darm)\n- Exopeptidasen: Aminopeptidase, Carboxypeptidase\n- Wechselwirkungen im Protein:\n- H-Brücken (durch Hitze denaturierbar)\n- Ionische Wechselwirkungen (durch Säuren/Basen angreifbar - z. B. Trichloressigsäure)\n- Hydrophobe Wechselwirkungen (durch organische Lösungsmittel (Alkohol/Aceton) oder Harnstoff denaturierbar)\n- Disulfidbrücken (Zerstörung durch Reduktionsmittel - z. B. Mercaptoethanol)\n- Biosynthese: an Ribosomen durch Translation aus Aminosäuren\n- Industrielle Synthese: Festphasen-Peptidsynthese (Wachsende Peptidkette an Festphase gebunden, N-Terminale Schutzgruppen (Fmoc) und C-Terminale Aktivierung (DCC))",
      "category": "Proteine"
    },
    {
      "id": 4,
      "question": "Wie misst man optisch aktive Substanzen?",
      "answer": "- Mittels Polarimeter:\n- Aufbau: Lichtquelle -> Polarisator -> Probenrohr -> Analysator\n- Polarisator und Analysator sind gekreuzt (keine optisch aktive Probe im Weg => kein Licht tritt durch Analysator)\n- Dient z. B. der Unterscheidung von Enantiomeren\n- Mittels Photometer: Messung von Substanzen, die im UV/Vis-Bereich Licht absorbieren\n- Aufbau: Lichtquelle -> Monochromator -> Probenküvette -> Detektor\n- Dient z. B. zur Detektion von aromatischen Aminosäuren",
      "category": "Proteine"
    },
    {
      "id": 5,
      "question": "Was sind Primär-, Sekundär-, Tertiär- und Quartärstruktur von Proteinen und wie bestimmt man die Primärstruktur?",
      "answer": "- Struktur:\n- Primärstruktur = Aminosäuresequenz\n- Sekundärstruktur (Helices, Faltblätter, Loops) stabilisiert durch H-Brücken\n- Tertiärstruktur: räumliche Anordnung einer Polypeptidkette durch Kombination verschiedener Sekundärstrukturelemente (stabilisiert durch ionische/hydrophobe Wechselwirkungen, Disulfidbrücken usw.)\n- Quartärstruktur: Zusammenlagerung mehrerer Tertiärstrukturen, besteht also aus mehreren Peptidketten\n- Methoden zur Bestimmung der Primärstruktur:\n- Sanger-Sequenzierung: Derivatisierung der 1. AS am N-Terminus mit FDNB, HCl wird hinzugefügt (Hydrolyse), chromatographische Identifizierung der FDNB-derivatisierten AS\n- Edman-Abbau: Derivatisierung der 1. AS am N-Terminus mit Phenylisothiocyanat (im basischen), Freisetzen der derivatisierten AS mit Flusssäure, HPLC-Identifizierung der derivatisierten AS",
      "category": "Proteine"
    },
    {
      "id": 5,
      "question": "Wie unterscheiden sich α-Helix und β-Faltblatt hinsichtlich Aufbau, H-Brücken und Aminosäuren pro Periode?",
      "answer": "- α-Helix\n- H-Brücken verlaufen innerhalb einer Helix parallel zur Helixachse zwischen einer AS n und n+4, Seitenketten zeigen nach außen\n- Ganghöhe: 3,6 AS = 5,4 Å\n- Meist rechtsgängig = im Uhrzeigersinn\n- Insgesamt 3-6 Windungen = 10-20 AS\n- Helixbrecher: Prolin, Gly\n- Helixbildner: Glu, Ala, Leu, Met\n- β-Faltblatt\n- H-Brücken verbinden unterschiedliche beta-Stränge, Seitenketten zeigen jeweils abwechselnd in beide Richtungen\n- Antiparallel: 7 Å = 0,7 nm = 2 AS, H-Brücken verlaufen gerade\n- Parallel: 6,5 Å = 0,65 nm = 2 AS, H-Brücken verlaufen im Winkel\n- Aus 2-15 Beta-Strängen (jeweils 6-10 AS)\n- Faltblattbrecher: Glu, Asp, Pro\n- Faltblattbildner: Ile, Val, Tyr",
      "category": "Proteine"
    },
    {
      "id": 4,
      "question": "Wie ist die Grundstruktur proteinogener Aminosäuren und wie werden sie eingeteilt?",
      "answer": "- Grundstruktur: Carboxygruppe + Aminogruppe, wobei die Aminogruppe in der Fischer-Projektion links steht (L-Aminosäuren)\n- Ampholyte und Dipole\n- Einteilung: hydrophob/aromatisch, hydrophil, geladen",
      "category": "Proteine"
    },
    {
      "id": 6,
      "question": "Wie kann man Proteine trennen und was ist FPLC?",
      "answer": "1. Nach Ladung\n- Unterschiedliche Löslichkeit\n- Ionenaustauschchromatographie\n- Elektrophoretische Trennung\n- Isoelektrischer Punkt\n2. Nach Molekülgröße\n- Gelfiltration\n- SDS-PAGE\n- Dialyse\n- Massenspektrometrie\n3. Nach Affinität\n- Affinitätschromatographie\n4. Nach hydratisierter Dichte\n- Ultrazentrifugation\n- FPLC = Fast Protein Liquid Chromatography\n- Funktionsweise wie HPLC, jedoch mit niedrigeren Drücken (schonender)",
      "category": "Proteine"
    },
    {
      "id": 4,
      "question": "Welche Aminosäuren sind photometrisch aktiv und wozu misst man das?",
      "answer": "- Aromatische Aminosäuren: Phenylalanin, Tyrosin, Tryptophan\n- Messung mittels Photometer oder Fluoreszenzlöschung unter UV-Licht\n- Photometer: misst Lichtabsorption durch Probe (Lichtquelle -> Monochromator -> Küvette -> Detektor)",
      "category": "Proteine"
    },
    {
      "id": 4,
      "question": "Wie werden Tyrosin und Cystein synthetisiert und was sind bedingt essenzielle Aminosäuren?",
      "answer": "- Bedingt essenzielle Aminosäuren: zur Synthese benötigt der Körper andere essenzielle Aminosäuren, sie sind im Wachstum oder in der Regeneration essenziell\n- Cysteinsynthese:\n1. SAM-Synthase: Methionin + ATP -> S-Adenosylmethionin + PPi\n2. Methyltransferase: SAM -> S-Adenosylhomocystein\n3. Hydrolase: SAH -> Homocystein + Adenosin\n4. Cystathionin-Synthase, Pyridoxalphosphat: Homocystein + Serin -> Cystathionin\n5. Cystathionin-Lyase, Pyridoxalphosphat: Cystathionin -> Cystein + α-Ketobutyrat + NH3\n- Tyrosinsynthese: durch Hydroxylierung von Phenylalanin (Phenylalanin Hydroxylase, Tetrahydrobiopterin)",
      "category": "Proteine"
    },
    {
      "id": 7,
      "question": "Wie ist Keratin aufgebaut und wo kommt es vor?",
      "answer": "- α-Keratin:\n- Struktur: aus 2 rechtsgängigen α-Helices in Coiled-coil-Struktur (linkshändig ineinander gewunden, innen hydrophobe Reste für enge Packung)\n- Vorkommen: Strukturprotein im Haar (mit vielen Disulfidbrücken), mechanische Schutzschicht der Haut (Epidermiszellen produzieren Keratin)\n- β-Keratin (Fibroin)\n- Struktur: β-Faltblätter in vielen Ebenen, dazwischen nur Ala und Gly (Verzahnung)\n- Vorkommen: Seidenfasern",
      "category": "Proteine"
    },
    {
      "id": 4,
      "question": "Was ist Glutathion, wie ist es aufgebaut und welche Funktion hat es?",
      "answer": "- Struktur: besteht aus Glu, Cys, Gly\n- Reduzierte Form: GSH\n- Oxidierte Form: GSSG (2 GSH über Disulfidbrücke verbunden)\n- Funktion: Antioxidans (macht reaktive Sauerstoffspezies durch Reduktion unschädlich)\n- 2 GSH + H2O2 -> GSSG + H2O\n- katalysiert durch Glutathion-Peroxidase\n- Regeneration: Reduktion von GSSG durch NADPH\n- GSSG + NADPH + H+ -> 2 GSH + NADP+\n- katalysiert durch Glutathion-Reduktase",
      "category": "Proteine"
    },
    {
      "id": 10,
      "question": "Was ist allosterische Hemmung und welches Beispiel gibt es aus dem Stoffwechsel?",
      "answer": "- Allosterische Effektoren binden nicht an das aktive Zentrum des Enzyms und verschieben das Gleichgewicht zwischen R- und T-Zustand\n- Allosterische Hemmung:\n- Verschiebung Richtung T-Zustand\n- Km wird größer\n- Allosterische Aktivatoren:\n- Verschiebung Richtung R-Zustand\n- Km wird kleiner\n- Bsp.: Phosphofructokinase (phosphoryliert Fructose-6-Phosphat -> Fructose-1,6-Bisphosphat)\n- Allosterisch inhibiert durch: ATP und Citrat\n- Allosterisch aktiviert durch: niedriges ATP, hohes AMP/ADP, Fructose-2,6-Bisphosphat",
      "category": "Enzyme"
    },
    {
      "id": 10,
      "question": "Welche Hauptklassen von Enzymen gibt es und nenne je ein Beispiel.",
      "answer": "- Oxidoreduktasen (Katalysieren Redoxreaktionen)\n- Bsp.: Dehydrogenasen (Isocitrat-Dehydrogenase katalysiert Isocitrat -> α-Ketoglutarat + CO2, wobei NAD+ -> NADH + H+)\n- Transferasen (Katalysieren die Übertragung funktioneller Gruppen)\n- Bsp.: Kinasen (Pyruvatkinase katalysiert Phosphoenolpyruvat + ADP -> Pyruvat + ATP)\n- Hydrolasen (katalysieren hydrolytische Spaltung)\n- Bsp.: HSL (Diacylglycerid + H2O -> Monoacylglycerid + Fettsäure)\n- Lyasen (katalysiert nicht-hydrolytische Spaltung)\n- Bsp.: Aldolasen (Aldolase B katalysiert Fructose-1-Phosphat -> Glycerinaldehyd + Dihydroxyacetonphosphat)\n- Isomerasen (Katalysieren Umwandlung zwischen isomeren Strukturen)\n- Bsp.: Mutasen (Phosphoglycerat-Mutase katalysiert 3-Phosphoglycerat -> 2-Phosphoglycerat)\n- Ligasen (Katalysieren Verknüpfung zweier Moleküle unter ATP/GTP-Verbrauch)\n- Bsp.: Pyruvat-Carboxylase (Pyruvat + CO2 + ATP -> Oxalacetat + ADP + Pi)",
      "category": "Enzyme"
    },
    {
      "id": 10,
      "question": "Welche fünf Formen der Enzymregulation gibt es und nenne jeweils eine Reaktion oder ein Beispiel.",
      "answer": "- Allosterisch: Regulator bindet nicht ans aktive Zentrum\n- Bsp.: Allosterische Regulation von Phosphofructokinase durch ATP/Citrat (Inhibierung) oder niedriges ATP/hohes AMP/ADP/F2,3BP (Aktivierung)\n- Isoenzyme: auf Ebene der Genexpression, Isoformen unterscheiden sich z. B. in AS-Sequenz und Regulation\n- Bsp.: Phosphofructokinase 2 ist bifunktionell (Kinase (F6P -> F2,6-BP) und Phosphatase (F2,6-BP -> F6P)) -> Leber-Isoform: Proteinkinase A aktiviert Phosphatase-Aktivität; Herz-Isoform: Proteinkinase A aktiviert Kinase-Aktivität\n- Kovalente Modifikation: Phosphorylierung, Acetylierung, Ubiquitinierung\n- Bsp.: PKB wird durch Phosphorylierung aktiviert\n- Aktivierung durch Zymogenspaltung (Zymogen = inaktives Vorläuferprotein)\n- Bsp.: Durch sauren pH im Magen wird Pepsinogen (Zymogen) zu Pepsin (aktiv) gespalten\n- Aktivierung durch Co-Aktivatoren\n- Bsp.: Pyruvatkinase in der Glykolyse (Phosphoenolpyruvat -> Pyruvat) nur aktiv bei Bindung von Mg2+",
      "category": "Enzyme"
    },
    {
      "id": 10,
      "question": "Welche Arten der Enzymhemmung gibt es und wie unterscheiden sie sich in der Lineweaver-Burk-Auftragung?",
      "answer": "- Kompetitiv: Inhibitor bindet am aktiven Zentrum und verdrängt das Substrat\n- Km steigt, vmax bleibt gleich\n- Lineweaver-Burk-Auftragung wird steiler, Schnittpunkt mit der x-Achse nach rechts verschoben, Schnittpunkt mit der y-Achse bleibt gleich\n- Unkompetitiv: Inhibitor bindet an den Enzym-Substrat-Komplex außerhalb des aktiven Zentrums\n- Km wird kleiner, vmax wird kleiner\n- Lineweaver-Burk-Auftragung verschiebt sich nach links, Schnittpunkt mit der x-Achse nach links verschoben, Schnittpunkt mit der y-Achse nach oben verschoben, Steigung bleibt gleich\n- Gemischt: Inhibitor bindet sowohl an E als auch an den ES-Komplex\n- Km wird größer oder kleiner, vmax wird kleiner\n- Schnittpunkt aller Lineweaver-Burk-Diagramme oberhalb der x-Achse\n- Suizid-Hemmung (irreversibel): Inhibitor bindet am aktiven Zentrum des Enzyms, wird wie ein Substrat umgesetzt, das entstandene Produkt bindet irreversibel",
      "category": "Enzyme"
    },
    {
      "id": 10,
      "question": "Was ist Enzymaktivität, in welchen Einheiten wird sie angegeben und wie bestimmt man sie?",
      "answer": "- Enzymaktivität ist ein Maß für die katalytische Leistung eines Enzyms und gibt die Menge an umgesetzten Substrat pro Zeiteinheit an\n- Einheiten: kat = mol/s oder IU = µmol/min\n- Abhängig von Temperatur, Inhibitoren, pH, Enzym- und Substratkonzentration\n- Experimentelle Bestimmung: es wird die Anfangsgeschwindigkeit der Umsetzung gemessen (z. B. photometrisch)",
      "category": "Enzyme"
    },
    {
      "id": 10,
      "question": "Welche thermodynamische Rolle spielen Enzyme und wozu braucht man sie?",
      "answer": "- Enzyme setzen die Aktivierungsenergie herab, indem sie Übergangszustände thermodynamisch stabilisieren, und ermöglichen somit, dass Reaktionen schneller ablaufen\n- Sie machen aber keine thermodynamisch unmöglichen Reaktionen möglich, sondern die \"Hilfe\" ist ausschließlich kinetischer Natur\n- Enzyme ermöglichen:\n- höhere Reaktionsgeschwindigkeit\n- mildere Reaktionsbedingungen\n- größere Reaktionsspezifität\n- Möglichkeit der Regulation",
      "category": "Enzyme"
    },
    {
      "id": 13,
      "question": "Welche Metabolite der Glykolyse liefern ATP und wie ist das thermodynamisch erklärt?",
      "answer": "- Zuerst wird ATP verbraucht (investiert):\n- Phosphorylierung von Glucose zu Glucose-6-Phosphat\n- Phosphorylierung von Fructose-6-Phosphat zu Fructose-1,6-Bisphosphat\n- Dann wird ATP gewonnen, und zwar in der Substratkettenphosphorylierung:\n- Dephosphorylierung: 1,3-Bisphosphoglycerat + ADP -> 3-Phosphoglycerat + ATP\n- Enzym: Phosphoglyceratkinase\n- 1,3-Bisphosphoglycerat entsteht zuvor durch Oxidation. Die hierbei gespeicherte Energie wird nun in Form von ATP nutzbar.\n- Dephosphorylierung: Phosphoenolpyruvat + ADP -> Pyruvat + ATP\n- Enzym: Pyruvatkinase\n- Das Produkt Enolpyruvat tautomerisiert direkt zu Pyruvat, was das Gleichgewicht stark nach rechts verschiebt.\n- Das Gruppenübertragungspotential der Metaboliten muss jeweils größer sein als das von ATP (stärker negatives ΔG bei der Abspaltung des Phosphats).\n- 2 ATP werden investiert, 2 × 2 ATP werden frei => Nettogewinn von 2 ATP pro Glucose",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 13,
      "question": "Wie wird Pyruvat bei Säugern aerob und anaerob weiterverwendet?",
      "answer": "- Aerob: im Mitochondrium vollständige Oxidation zu CO2 und H2O (Citratzyklus)\n- Zuerst wird Pyruvat in oxidativer Decarboxylierung zu Acetyl-CoA umgewandelt\n- Dieser Weg dient der ATP-Synthese\n- Anaerob: im Cytoplasma wird Pyruvat zu Lactat reduziert (Milchsäuregärung)\n- z. B. in den Muskeln, wenn diese nicht genug Sauerstoff erhalten (Sprint)\n- Dieser Weg dient der Regenerierung von NAD+\n- Anaerob: im Cytoplasma wird Pyruvat zu Ethanol reduziert (alkoholische Gärung)\n- Dem Menschen fehlt das Enzym Pyruvat-Decarboxylase, er kann also keine alkoholische Gärung betreiben (dafür z. B. Hefe)\n- Dieser Weg dient der Regenerierung von NAD+",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 12,
      "question": "In welchen Stoffwechselwegen ist Glucose Substrat und in welchen Produkt?",
      "answer": "- Substrat:\n- Glykolyse (im Cytosol: Glucose -> Pyruvat) dient der Energiegewinnung (2 ATP) und der Pyruvat-Synthese\n- Pentosephosphatweg (im Cytosol: Glucose -> Ribose) dient der Regenerierung von NADPH und der Synthese von Nukleotiden\n- Glykogensynthese (Glucose -> Glykogen) dient der Speicherung von Glucose\n- Lipidsynthese (Glucose -> Pyruvat -> Acetyl-CoA)\n- Produkt:\n- Gluconeogenese (Pyruvat -> Glucose) dient der Aufrechterhaltung des Blutzuckerspiegels\n- Glykogenabbau (Glykogen -> Glucose) dient der schnellen Glucosebereitstellung",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 13,
      "question": "Welche Bedeutung hat Glucose-6-phosphat und in welchen Stoffwechselwegen ist es Substrat oder Produkt?",
      "answer": "- Glucose wird nach dem Transport in die Zelle sofort von Hexokinase phosphoryliert, was die Rückdiffusion verhindert (negative Ladung des Phosphatrestes) und Energie speichert\n- Eine Dephosphorylierung zu Glucose ist nur im ER von Leber und Niere möglich\n- G6P dient als Ausgangsstoff für viele Stoffwechselwege und kann im Cytosol entweder in der Glykolyse oder im Pentosephosphatweg verwendet werden:\n- Glykolyse (bei hohem NADPH-Spiegel): G6P -> Pyruvat\n- Pentosephosphatweg (bei niedrigem NADPH-Spiegel): G6P -> Ribose-5-P\n- Bei Glucoseüberschuss kann es in der Glykogensynthese als Glykogen angelegt werden\n- Es entsteht als Produkt bei der Gluconeogenese und dem Glykogenabbau\n- Zusammenspiel im Cori-Zyklus:\n- Im Muskel: Glykolyse (G6P -> Pyruvat -> Lactat)\n- In der Leber: Gluconeogenese (Lactat -> Pyruvat -> G6P)\n- Dazwischen Transport von Lactat und Glucose über das Blut",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 13,
      "question": "Welche irreversiblen Schritte der Glykolyse müssen in der Gluconeogenese umgangen werden?",
      "answer": "- Jene drei Schritte müssen umgangen werden, die einen zu großen Anstieg der freien Energie mit sich führen (in der Glykolyse also irreversibel verlaufen)\n1. Glykolyse: Phosphoenolpyruvat -> Pyruvat (Pyruvatkinase im Cytosol)\n- Glykoneogenese: Transport von Pyruvat ins Mitochondrium, Carboxylierung von Pyruvat zu Oxaloacetat (Pyruvat-Carboxylase, Cofaktor Biotin, ATP-Verbrauch), Phosphorylierung und Decarboxylierung von Oxaloacetat zu Phosphoenolpyruvat (PEP-Carboxykinase), Austransport von PEP ins Cytosol\n2. Glykolyse: Fructose-6-Phosphat -> Fructose-1,6-Bisphosphat (Phosphofructokinase)\n- Gluconeogenese: Hydrolyse von F16BP zu F6P (Fructose-1,6-Bisphosphatase, kein ATP generiert)\n3. Glykolyse: Glucose -> G6P\n- Gluconeogenese (nur im ER von Leber/Niere): Dephosphorylierung von G6P zu Glucose (Glucose-6-Phosphatase)",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 13,
      "question": "Wie läuft die Glykolyse ab?",
      "answer": "1. Phosphorylierung durch Hexokinase: Glucose + ATP -> G6P + ADP\n2. Isomerisierung durch Glucose-6-Phosphat-Isomerase: G6P -> Fructose-6-Phosphat\n3. Phosphorylierung durch Phosphofructokinase: F6P + ATP -> Fructose-1,6-Bisphosphat + ADP\n4. Spaltung durch Aldolase A: F1,6BP -> Glycerinaldehyd-3-Phosphat + Dihydroxyaceton-Phosphat\n- Isomerisierung durch Triosephaosphat-Isomerase: Dihydroxyaceton-Phosphat -> Glycerinaldehyd-3-Phosphat\n5. Oxidation/Phosphorylierung durch Glycerinaldehyd-3-Phosphat-Dehydrogenase: Glycerinaldehyd-3-Phosphat + Pi + NAD+ -> 1,3-Bisphosphoglycerat + NADH + H+\n6. Dephosphorylierung durch Phosphoglycerat-Kinase: 1,3-Bisphosphoglycerat + ADP > 3-Phosphoglycerat + ATP\n7. Umlagern der Phosphoryls durch Phosphoglycerat-Mutase: 3-Phosphoglycerat -> 2-Phosphoglycerat (Zwischenprodukt: 2,3-Bisphosphoglycerat)\n8. Dehydratisierung durch Enolase: 2-Phosphoglycerat -> Phosphoenolpyruvat + H2O\n9. Dephosphorylierung durch Pyruvat-Kinase: PEP + ADP -> Pyruvat + ATP -> Nettoreaktion: Glucose + 2 NAD+ + 2 ADP + 2 Pi -> 2 Pyruvat + 2 NADH + 2 H+ + 2 ATP + 2 H2O",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 18,
      "question": "Wie wird Fructose abgebaut und warum kann das medizinisch zur Fettleber beitragen?",
      "answer": "- Fructose wird in der Leber in Glycerinaldehyd-3-Phosphat umgewandelt und in die Glykolyse eingeschleust:\n1. Phosphorylierung durch Fructokinase: Fructose + ATP -> Fructose-1-Phosphat + ADP\n2. Spaltung durch Aldolase B: Fructose-1-Phosphat -> Dihydroxyacetonphosphat + Glycerinaldehyd\n3. Isomerisierung durch Triosephosphat-Isomerase: Dihydroxyacetonphosphat -> Glycerinaldehyd-3-Phosphat => in die Glykolyse eingeschleust\n4. Phosphorylierung durch Glycerinaldehyd-Kinase: Glycerinaldehyd + ATP -> Glycerinaldehyd-3-Phosphat + ADP => in die Glykolyse eingeschleust\n- Dieser Weg umgeht jedoch die stark regulierte Phosphofructokinase, die gewöhnlich z. B. durch ATP allosterisch inhibiert wird, um eine Überproduktion an Pyruvat zu verhindern. Diese Kontrolle fehlt bei der Fructose-Verwertung in der Leber (keine Rückkopplung über ATP/Citrat/Insulin), weshalb es zu erhöhter Fettsynthese kommen kann (durch erhöhte Produktion von Pyruvat und dadurch Acetyl-CoA sowie gleichzeitige Synthese von Glycerol).",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 14,
      "question": "Wie werden Glykogen synthetisiert und abgebaut und was ist ihre physiologische Bedeutung?",
      "answer": "- Glykogen ist die Speicherform der Glucose bei Tier und Mensch und wird bei Glucose-Überschuss in Skelettmuskeln und Leber abgelagert. Glucose allein ist nämlich zu osmotisch aktiv, weshalb sie zu Polymeren verknüpft werden muss.\n- Struktur: Die Glucose ist α1,4-glykosidisch und an Verzweigungen α1,6-glykosidisch verknüpft.\n- Durch die verzweigte Struktur kann Glykogen bei niedrigem Glucosespiegel schnell abgebaut werden.\n- Synthese (bei Glucose-Überschuss, durch Insulin): Glucose-6-Phosphat wird aktiviert, indem es zu Glucose-1-Phosphat isomerisiert wird (Phosphoglucomutase) und dann an UDP gehängt wird (Glucose-1-Phosphat-UDP-Transferase): UTP + Glucose-1-Phosphat -> UDP-Glucose + PPi. Die Glykogen-Synthase hängt dann die Glucose an ein nichtreduzierendes Ende der wachsenden Glykogenkette.\n- Glykogenin: Da die Glykogen-Synthase keine neue Kette starten kann, sondern nur an mindestens 7 bestehende Glucose-Moleküle anknüpfen kann, wird ein Primer benötigt: Glykogenin. Dieses überträgt die ersten Glucose-Einheiten auf einen Tyrosinrest, bis die Glykogen-Synthase übernimmt.\n- Branching-Enzym: Die Glykogen-Synthase kann nur α1,4-Verknüpfungen bilden; daher erzeugt das Branching-Enzym α1,6-Verzweigungen.\n- Abbau (bei Glucose-Mangel, durch Glucagon/Katecholamine):\n- Zum Abspalten der Glucose wird ein Orthophosphat hinzugefügt und Glucose-1-Phosphat wird frei (Enzym: Glykogen-Phosphorylase, Coenzym: Pyridoxalphosphat)\n- Debranching-Enzym: Die Glykogen-Phosphorylase stoppt 4 Reste vor der α1,6-Bindung. Die Transferaseaktivität des Debranching-Enzyms transferiert 3 Reste an ein anderes nichtreduzierendes Ende und die Glucosidase-Aktivität spaltet die letzte Glucose hydrolytisch.",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 14,
      "question": "Wie unterscheiden sich Stärke und Glykogen in Aufbau und Funktion?",
      "answer": "- Beides sind Speicherpolysaccharide aus α-Glucose, Stärke bei Pflanzen und Glykogen bei Tieren/Menschen; sie dienen der Senke der osmotischen Aktivität von Glucose\n- Glykogen Speicherort: Leber und Muskeln\n- Stärke Speicherort: Plastide\n- Aufbau von Stärke: aus Amylose (α1,4-glykosidisch verknüpft, bildet eine helikale Struktur) und Amylopektin (α1,4- und teils α1,6-glykosidisch verknüpft)\n- Aufbau von Glykogen: aus Glucose, welche α1,4- und α1,6-glykosidisch verknüpft ist (mehr als Stärke)\n- Die 1,6-Verknüpfungen sorgen für Knicke, insgesamt ist Glykogen stärker verzweigt als Stärke\n- Glykogen hat sehr viel nicht-reduzierende Enden, um schnellen Abbau zu ermöglichen",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 15,
      "question": "Wie verläuft der Pentosephosphatweg bis Ribulose-5-phosphat und welche Bedeutung hat er?",
      "answer": "- Der oxidative Teil des Pentosephosphatwegs regeneriert das Reduktionsäquivalent NADPH im Cytosol und stellt Ribose zur Verfügung, welche in sich teilenden Zellen der Nukleotidsynthese dient\n- Es handelt sich um einen Alternativweg zur Glykolyse: Die Menge an cytosolischem NADPH entscheidet, ob Glykolyse (viel NADPH vorhanden, Hemmung von G6P-Dehydrogenase) oder Pentosephosphatweg (wenig NADPH vorhanden, Aktivierung von G6P-Dehydrogenase) betrieben wird\n- Oxidation durch G6P-Dehydrogenase: G6P + NADP+ -> 6-Phosphoglucon-δ-lacton + NADPH + H+\n- Hydrolytische Ringöffnung durch Lactonase: 6-Phosphoglucon-δ-lacton + H2O -> 6-Phosphogluconat\n- Oxidative Decarboxylierung durch 6-Phosphogluconat-Dehydrogenase: 6-Phosphogluconat + NADP+ -> Ribulose-5-Phosphat + NADPH + H+ + CO2\n- Isomerisierung durch Phosphopentose-Isomerase: Ribulose-5-Phosphat -> Ribose-5-Phosphat\n- Im nicht-oxidativen Teil des Pentosephosphatwegs können entstandene Pentosen durch Transketolase und Transaldolase wieder in Hexosen umgewandelt werden",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 15,
      "question": "Wofür wird NADPH gebraucht?",
      "answer": "- NADPH ist das Hauptreduktionsäquivalent des Anabolismus (Stoffaufbau) und dient der Biosynthese sowie Schutzfunktionen; NADH gehört zum Katabolismus (Abbau)\n- Biosynthese der Fettsäuren und von Cholesterin (Ketoacyl-ACP-Reduktase, Enoyl-ACP-Reduktase)\n- Entgiftung reaktiver Sauerstoffspezies: Glutathion wird oxidiert, wenn Wasserstoffperoxid zu Wasser reduziert wird (Enzym: Glutathion-Peroxidase). NADPH regeneriert die reduzierte Form von Glutathion (Enzym: Glutathion-Reduktase)\n- NADPH wird vor allem im oxidativen Pentosephosphatweg im Cytosol bereitgestellt und kann indirekt mittels Malat-Aspartat-Shuttle zwischen Cytosol und Mitochondrium gekoppelt werden. Außerdem wird es durch das Malatenzym regeneriert.",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 12,
      "question": "Wie ist Lactose aufgebaut und wie wird sie im Körper weiterverwertet?",
      "answer": "- Struktur: β-Galaktose + β-Glucose (β1,4-glykosidisch verbunden)\n- Disaccharide werden im Darm zunächst hydrolytisch gespalten. In diesem Fall durch Lactase, es entstehen Galaktose und Glucose, erst die Monosaccharide können resorbiert werden.\n- Lactoseintoleranz bedeutet einen Mangel an Lactase\n- Glucose kann direkt in die Glykolyse/Glykogensynthese/Pentosephosphatweg einfließen\n- Galaktose wird in der Leber mittels UDP-Glucose in Glucose umgewandelt:\n1. Phosphorylierung durch Galactokinase: Galactose + ATP -> Galactose-1-Phosphat + ADP\n2. Gruppenübertragung durch Galaktose-1-Phosphat-Uridinyltransferase: Galaktose-1-P + UDP-Glucose -> UDP-Galaktose + Glucose-1-Phosphat\n- G1P wird in G6P umgewandelt und in die Glykolyse eingeschleust\n3. Isomerisierung durch UDP-Galaktose-Epimerase: UDP-Galactose -> UDP-Glucose (diese kann nun weitere Galaktose aktivieren)",
      "category": "Glucosestoffwechsel"
    },
    {
      "id": 13,
      "question": "Welche Wege des Glucosestoffwechsels gibt es und wie werden sie reguliert?",
      "answer": "- Glucose kann 4 Zentrale Wege einschlagen:\n1. Aufbau von Makromolekülen (wenn Bausteine notwendig sind)\n2. Glykolyse: Glucose -> Pyruvat (wenn Energie notwendig ist)\n- Glykoneogenese ist die Rückgewinnung von Glucose aus Pyruvat/Lactat usw.\n3. Glykogen-Synthese: Glucose -> Glykogen (bei Energieüberschuss)\n- Glykogenolyse ist die Rückgewinnung von Glucose aus Glykogen\n4. Pentosephosphatweg: Glucose -> Ribose (wenn Reduktionsäquivalent NADPH notwendig ist)\n- Hormonelle Regulation:\n- Insulin reguliert die Glykolyse und Glykogen-Synthese hoch, die Glykoneogenese und Glykogenolyse runter\n- Glucagon/Katecholamine regulieren die Glykolyse und Glykogen-Synthese runter, die Glykoneogenese und Glykogenolyse hoch\n- Allosterische Regulation:\n- Glykogensynthase durch G6P aktiviert\n- Phosphofruktokinase durch ATP und Citrat inhibiert, durch AMP/ADP, F2,6-BP aktiviert\n- Durch direkte Modifikationen:\n- Pyruvatkinase aktiviert durch hohen Glucosespiegel (wird dephosphoryliert), inhibiert durch niedrigen Glucosespiegel (wird phosphoryliert)\n- Transkriptionelle Regulation:\n- Insulin reprimiert die Transkription der Glyconeogeneseenzyme und induziert die Transkription der Glykolyseenzyme\n- cAMP reprimiert die Transkription der Glykolyseenzyme und induziert die Transkription der Glykoneogeneseenzyme",
      "category": "Regulation des Glucosestoffwechsels"
    },
    {
      "id": 14,
      "question": "Wie reguliert Insulin den Glykogenstoffwechsel?",
      "answer": "- Insulin ist ein Hormon, das bei hohem Glucosespiegel im Blut ausgeschüttet wird und den Glykogenstoffwechsel entsprechend reguliert.\n- Synthese: Insulin wird in β-Zellen der Langerhansschen Inseln im Pankreas synthetisiert und muss durch das Abspalten des C-Peptids aus Proinsulin aktiviert werden. Die Sekretion wird durch Glucose stimuliert: Durch ATP-Bildung bei der Glykolyse steigt der Ca2+-Spiegel in der Zelle, wodurch Insulinvesikel mit der Plasmamembran fusionieren.\n- Signalweiterleitung: Insulin bindet an Insulinrezeptoren, wodurch die β-Untereinheit der Rezeptoren im Inneren der Zelle phosphoryliert wird und eine Signalkaskade anstößt, an deren Ende PKB phosphoryliert (= aktiviert) wird:\n- IRS-1 bindet an phosphorylierte β-Untereinheiten -> wird selbst phosphoryliert\n- PI3K bindet an phosphoryliertes IRS-1 -> phosphoryliert PIP2 zu PIP3\n- PIP3 dient als Bindestelle für PDK1\n- PDK1 phosphoryliert PKB -> aktiviertes PKB\n- PKB phosphoryliert GSK3 (dadurch bleibt die Glykogen-Synthase aktiv) und aktiviert Prozesse, die GLUT4 aus Speichervesikeln an die Plasmamembran bringen\n- Mehr Glucose kann aufgenommen werden; ein hoher Glucose-6-Phosphat-Spiegel aktiviert die Glykogen-Synthase allosterisch\n- PKB reguliert:\n- Glykolyse hoch, Gluconeogenese runter\n- Lipogenese hoch, Lipolyse runter\n- Glucoseaufnahme hoch\n- Glykogensynthese hoch, Glykogenolyse runter",
      "category": "Regulation des Glucosestoffwechsels"
    },
    {
      "id": 20,
      "question": "Was ist Sphingomyelin, wie ist es aufgebaut und wo kommt es vor?",
      "answer": "- Sphingolipide sind Strukturlipide in Membranen und besitzen den Aminoalkohol Sphingosin als Rückgrat: am C2 ist eine Fettsäure über eine Säureamidbindung gebunden, am C3 eine polare Gruppe\n- Sphingomyelin: polare Gruppe aus Phosphocholin oder Phosphoethanolamin\n- Fördert die Bildung von Lipid-Rafts an Membranen und bindet verstärkt Cholesterin\n- Besonders häufig in Membranen der Myelinscheide um Nerven\n- Synthese: aus Serin und Palmitoyl-CoA",
      "category": "Lipide & Membranen"
    },
    {
      "id": 19,
      "question": "Wie werden Lipide eingeteilt und was sind typische Grundstrukturen und Beispiele?",
      "answer": "- Energiespeicherlipide: Fette, Öle\n- Triglyceride aus Glycerol, verestert mit 3 Fettsäuren\n- Strukturlipide: Membranlipide (amphipathisch)\n- Glycerophospholipide aus Glycerol, verestert mit 2 Fettsäuren und am C3 mit Phosphorsäure plus einem Rest (z. B. Cholin bei Phosphatidylcholin)\n- Sphingolipide aus dem Aminoalkohol Sphingosin als Rückgrat mit Fettsäure am C2 über Säureamidbindung und am C3 einer polaren Gruppe (z. B. Phosphocholin bei Sphingomyelin)\n- Biologisch aktive Lipide: Signallipide, Cofaktoren, Pigmente\n- Eicosanoide: aus Arachidonsäure (Fettsäure 20:4), z. B. Thromboxan, Leukotrien, Prostaglandine\n- Steroidhormone: aus dem Perhydrocyclopentanophenanthren-Grundgerüst, z. B. Testosteron\n- Vitamin A, E und K: Grundstruktur aus Isopreneinheiten",
      "category": "Lipide & Membranen"
    },
    {
      "id": 23,
      "question": "Welche Funktionen hat Cholesterin, wie beeinflusst es Membranen und wofür ist es Vorstufe?",
      "answer": "- Funktion: lagert sich in Membran ein und fungiert als Fluiditätsbuffer (macht Membran weniger fluide bei Wärme, mehr fluide bei Kälte); oft Teil von Lipid Rafts\n- Struktur: Steroid-Grundgerüst mit Alkylkette am C17 + Polarer Kopf am C3\n- In der Membran liegt es meist verestert mit FS vor\n- Synthese: in der Leber aus Acetyl-CoA-Einheiten und anschließende Veresterung durch Acetyl-CoA-Cholesterin-Acyltransferase (ACAT)\n- Transport im Blut in Lipoproteinpartikeln:\n- Von Gewebe zu Leber -> HDL\n- Von Leber zu Gewebe -> LDL\n- Ausgangssubstanz für: Steroidhormone (z. B. Testosteron), Vitamin D, Gallensäure",
      "category": "Lipide & Membranen"
    },
    {
      "id": 20,
      "question": "Wie sind biologische Membranen aufgebaut, wovon hängt ihre Fluidität ab und wie funktioniert aktiver Transport?",
      "answer": "- Aufbau: Doppelschicht aus amphipathischen Strukturlipiden, wobei die hydrophilen Kopfgruppen jeweils nach innen (wässriger Kern der Zelle) und außen (wässriges Umgebungsmilieu) zeigen\n- Aufbau ist asymmetrisch: Außen viel Glykolipide, Phosphatidylcholin, Sphingomyelin; innen Phosphatidylethanolamin, Phosphatidylserin, Phosphatidylinositol-4,5-bisphosphat\n- In Membran eingelagert sind außerdem Proteine und Sterole\n- Fluidität: abhängig von der Menge an gesättigten Fettsäuren (je mehr gesättigte, desto starrer) und Cholesteringehalt (wirkt als Fluiditätspuffer: erhöht Fluidität unterhalb und reduziert Fluidität oberhalb der Übergangstemperatur)\n- Transport entgegen dem elektrochemischen Gradienten muss immer an eine exergone Reaktion gekoppelt sein:\n- Primärer aktiver Transport: ATP wird hydrolysiert\n- Sekundärer aktiver Transport: gleichzeitiger Transport eines Stoffes entlang Gradient; dieser muss jedoch unter ATP-Verbrauch wieder zurücktransportiert werden, um den Gradienten aufrecht zu erhalten",
      "category": "Lipide & Membranen"
    },
    {
      "id": 23,
      "question": "Wie werden Nahrungsfette verdaut und wie werden Lipide im Blut transportiert?",
      "answer": "- Verdauung:\n- Nahrungslipide (meist Triglyceride) werden zu 30% im Mund gespalten.\n- Der Rest wird im Dünndarm durch Gallensalze emulgiert, um sie für Lipasen leichter zugänglich zu machen. Pankreatische Lipasen spalten die Triglyceride\n- Resorption ins Darmepithel und Reveresterung. Dann werden die Triglyceride in Chylomikrone verpackt und durch Exocytose in die Lymphe und darüber ins Blut entlassen.\n- Transport: über Lipoproteine\n- Chylomikronen: Triglycerid-reich (aus Darmepithelzellen ins Blut, wo sie von Lipoproteinlipasen angegriffen werden, die Triglyceride zu Fettsäuren und Glycerol spalten)\n- VLDL: Triglycerid-reich (aus der Leber ins Blut, wo sie von Lipoproteinlipasen angegriffen werden, die Triglyceride zu Fettsäuren und Glycerol spalten)\n- IDL: Triglycerid-/Cholesterin-reich\n- LDL: Cholesterinreich (Transport von der Leber zum Gewebe)\n- HDL: Cholesterinreich (Transport vom Gewebe zur Leber)\n- Freie Fettsäuren werden an Albumin gebunden im Blut transportiert\n- Speicherung in Lipid Droplets der Adipozyten und Abbau bei Bedarf durch Lipasen:\n- ATGL (Adipose Triglycerid Lipase) spaltet erste Fettsäure ab => Diglycerid\n- HSL (Hormonsensitive Lipase) spaltet zweite Fettsäure ab => Monoglycerid\n- MGL (Monoglycerid Lipase) spaltet dritte Fettsäure ab => Glycerol",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 23,
      "question": "Wie verläuft die Cholesterinbiosynthese und für welche Stoffe ist Cholesterin Vorstufe?",
      "answer": "- Die Cholesterinbiosynthese findet im Cytosol der Leberzellen statt und nutzt Acetyl-CoA als Grundbaustein\n1. Thiolase: 2 Acetyl-CoA -> Acetoacetyl-CoA + CoA-SH\n2. HMG-CoA-Synthase: Acetoacetyl-CoA + Acetyl-CoA -> HMG-CoA + CoA-SH\n3. HMG-CoA-Reduktase: HMG-CoA + NADPH + H+ -> Mevalonat + NADP+ + CoA-SH\n4. Mevalonat-5-Phosphotransferase: Mevalonat + ATP -> 5-Phosphomevalonat + ADP\n5. Phosphomevalonat-Kinase: 5-Phosphomevalonat + ATP -> 5-Pyrophosphomevalonat + ADP\n6. Pyrophosphomevalonat-Decarboxylase: Pyrophosphomevalonat + ATP -> CO2 + ADP + Pi + aktiviertes Isopren\n7. Kondensation von 6 Isopreneinheiten zu Squalen\n8. Cyclisierung zum Lanosterol und Modifikation zum fertigen Cholesterin\n- Cholesterin ist die Vorstufe von Gallensäuren, Vitamin D und Steroidhormonen",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 22,
      "question": "Wie verläuft die Fettsäurebiosynthese aus Acetyl-CoA und wo findet sie statt?",
      "answer": "Fettsäurebiosynthese findet im Cytosol am FAS (Komplex mit 7 aktiven Zentren) statt und macht aus Acetyl-CoA eine Acyl-Kette: Acetyl-CoA Carboxylase (ACC): Acetyl-CoA + HCO3- + ATP -> Malonyl-CoA + ADP + Pi\n- Cofaktor: Biotin Acetyl-CoA-ACP-Transacetylase: überträgt Acetyl-Gruppe auf ACP, dann weiter auf KS Malonyl-CoA-ACP-Transferase: überträgt Malony-Gruppe auf ACP β-Ketoacyl-ACP-Synthase: Kondensation von Acetyl- und Malonyl-Gruppe zu βKetoacyl-ACP Ketoacyl-ACP-Reduktase: β-Ketoacyl-ACP + NADPH + H+ -> β-Hydroxyacyl-ACP + NADP+ Hydroxyacyl-ACP-Dehydratase: β-Hydroxyacyl-ACP -> trans-Acetenoyl-ACP + H2O Enoyl-ACP-Reduktase: trans-Enoyl-ACP + NADPH + H+ -> Acyl-ACP + NADP+ Acetyl-CoA-ACP-Transacetylase: überträgt verlängerte Acyl-Kette auf KS",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 19,
      "question": "Wie werden TAGs synthetisiert und abgebaut, welche Funktion haben sie und wie werden sie transportiert?",
      "answer": "- TAG-Synthese aus Acyl-CoA (aktiviert durch Acyl-CoA-Synthase unter ATP-Verbrauch) und Glycerin-3-Phosphat (aus DHAP durch Glycerin-3-Phosphat-Dehydrogenase und Glycerol-Kinase)\n- Organell: ER\n1. Acyltransferase (GPAT): Acyl-CoA + Glycerin-3-Phosphat -> Lysophosphatidat + CoA-SH\n2. Acyltransferase (LPAT): Acyl-CoA + Lysophosphatidat -> Phosphatidat + CoA-SH\n3. Phosphatidat-Phosphatase: Phosphatidat -> Diacylglycerol\n4. Acyltransferase (DGAT): Diacylglycerol + Acyl-CoA -> Triacylglycerol + CoA-SH\n- TAG dient als Energiespeicher: Da Lipide ohne Hydrathülle gespeichert werden können, ist dies die effizienteste Speicherform\n- Speicherung in Lipid-Droplets der Adipozyten des Fettgewebes, umgeben von Perilipin (verhindert Abbau)\n- TAG-Abbau zu Glycerol und Fettsäuren:\n- Organell: Cytosol\n1. ATGL spaltet die 1. Fettsäure ab -> Diacylglycerol\n2. HSL spaltet die 2. Fettsäure ab -> Monoacylglycerol\n3. MGL spaltet die 3. Fettsäure ab -> Glycerol\n- Fettsäuren für die β-Oxidation, Glycerol als DHAP in die Glykolyse\n- Transportsysteme:\n- Freie Fettsäuren im Blut an Albumin gebunden\n- Nahrungs-TAGs in Chylomikronen\n- In der Leber synthetisierte TAGs in VLDL",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 21,
      "question": "Wie werden die Produkte der β-Oxidation in der Atmungskette verwendet?",
      "answer": "- Die Beta-Oxidation spaltet nach und nach Acetyl-CoA von der Acylkette der Fettsäuren ab.\n- Produkte:\n- Acetyl-CoA geht in den Citratzyklus, wird oxidiert und die gewonnenen Reduktionsäquivalente werden in der Atmungskette zum Aufbau eines Protonengradienten verwendet (Übertragen ihre Elektronen auf die Komplexe der Atmungskette, die durch die Redox-Energie Protonen aus der Matrix pumpen)\n- FADH2 (entsteht bei der Oxidation von Acyl-CoA zu trans-Enoyl-CoA durch die Acyl-CoA Dehydrogenase) überträgt seine Elektronen in der Atmungskette direkt auf Ubichinon.\n- NADH (ensteht bei der Oxidation von β-Hydroxyacyl-CoA zu β-Ketoacyl-CoA durch die β-Hydroxyacyl-CoA Dehydrogenase) überträgt seine Elektronen in der Atmungskette auf Komplex I.",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 21,
      "question": "Wie werden ungeradzahlige Fettsäuren abgebaut und wie füllen sie den Citratzyklus auf?",
      "answer": "- Ablauf der normalen β-Oxidation: Acyl-CoA -> trans-Enoyl-CoA -> β-Hydroxyacyl-CoA -> β-Ketoacyl-CoA -> spaltet ein Acetyl-CoA ab\n- Bei geradzahligen Fettsäuren bleibt demnach am Ende ein Acetyl-CoA übrig\n- Ablauf bei ungeradzahligen Fettsäuren: Am Ende des letzten Zyklus bleibt ein Propionyl-CoA übrig\n1. Carboxylierung von Propionyl-CoA zu Methylmalonyl-CoA durch Propionyl-CoA Carboxylase\n2. Umlagerung des Methylmalonyl-CoA zu Succinyl-CoA durch die Methylmalonyl-CoA Mutase. Hierzu ist Coenzym B12 mit Co-Zentrum notwendig\n- Succinyl-CoA ist ein Citratzyklus Intermediat, die Reaktion ist also anaplerotisch (füllt den Citratzyklus nach). Es kann außerdem über Oxalacetat zur Gluconeogenese verwendet werden (das geht bei geradzahligen Fettsäuren nicht).",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 21,
      "question": "Wie läuft die Ketonkörpersynthese ab und welche Krankheit kann daraus entstehen?",
      "answer": "- Im Mitochondrium der Leberzellen kann Acetyl-CoA (Produkt der β-Oxidation) in wasserlösliche Ketonkörper umgebaut werden, die dann über das Blut an andere Organe geliefert werden und dort der Energieversorgung dienen. Vorkommen bei Hunger/Fasten oder Insulinmangel.\n- Ketonkörper: Acetoacetat, Aceton, Hydroxybutyrat\n1. 2 Acetyl-CoA -> Acetoacetyl-CoA + CoA-SH (Thiolase)\n2. Acetoacetyl-CoA + Acetyl-CoA + H2O -> HMG-CoA + CoA-SH (HMG-CoA-Synthase)\n3. HMG-CoA -> Acetoacetat + Acetyl-CoA (HMG-CoA-Lyase)\n4. Entweder Decarboxylierung: Acetoacetat -> Aceton + CO2\n5. Oder Reduktion: Acetoacetat + NADH + H+ -> Hydroxybutyrat + NAD+ (Hydroxybutyrat-Dehydrogenase)\n- Krankheit: Ketoazidose (Ketonkörpersynthese ohne Fasten, als Folge von Diabetes Typ I)\n1. Insulin wirkt nicht mehr -> intrazelluläre Glucosekonzentration sinkt\n2. Gluconeogenese wird erhöht und zieht Oxalacetat aus dem Citratzyklus ab -> Citratzyklus verarmt\n3. In der β-Oxidation produziertes Acetyl-CoA kann nicht mehr über den Citratzyklus abgebaut werden -> akkumuliert\n4. Ketonkörpersynthese wird als alternativer Abbauweg aktiv",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 21,
      "question": "Wie werden Fettsäuren für die β-Oxidation ins Mitochondrium und Acetyl-CoA für die Fettsäuresynthese ins Cytosol transportiert?",
      "answer": "- Transport der Fettsäuren ins Mitochondrium:\n- Im Cytosol wird die Fettsäure mit CoA-SH zu Acyl-CoA aktiviert (Fatty-Acyl-CoA-Synthase, ATP -> AMP + PPi)\n- Für den Transport durch die undurchlässige Mitochondrienmembran muss der Acylrest dann auf Carnitin übertragen werden (Carnitin-Acyltransferase)\n- Acylcarnitin/Carnitin-Antiporter: transportiert Acylcarnitin in die Matrix und Carnitin hinaus\n- In der Matrix wird die Fettsäure wieder auf CoA übertragen (Carnitin-Acyltransferase)\n- Transport von Acetyl-CoA ins Cytosol: Citrat-Shuttle\n- Citrat wird ins Cytosol transportiert\n- Citrat-Lyase: Citrat + ATP + CoA-SH -> Oxalacetat + ADP + Pi + Acetyl-CoA -> Fettsäuresynthese\n- Malat-Dehydrogenase: Oxalacetat + NADH + H+ -> Malat + NAD+\n- Malatenzym: Malat + NADP+ -> Pyruvat + NADPH + H+ + CO2\n- Transport von Pyruvat ins Mitochondrium\n- Pyruvat-Carboxylase: Pyruvat + CO2 + ATP -> Oxalacetat + ADP + Pi -> Citratzyklus",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 21,
      "question": "Wie gelangen Elektronen aus der β-Oxidation in die Atmungskette und wie hoch ist die Ausbeute aus Palmitinsäure?",
      "answer": "- Die bei der Oxidation freiwerdenden Elektronen werden in die Atmungskette eingeschleust, wo Komplex I, III und IV sie dafür nutzen einen Protonengradienten aufzubauen, den Komplex V (ATP-Synthase) wiederum zur ATP-Synthese nutzt\n- Elektronen von NADH (entsteht bei der Oxidation von β-Hydroxyacyl-CoA zu β-Ketoacyl-CoA durch die β-Hydroxyacyl-CoA Dehydrogenase) werden an Komplex I (NADH-Dehydrogenase) weitergegeben. Pro NADH können 2,5 ATP synthetisiert werden.\n- Elektronen von FADH2 (entsteht bei der Oxidation von Acyl-CoA zu trans-Enoyl-CoA durch die Acyl-CoA Dehydrogenase) werden direkt an Ubichinon gegeben. Pro FADH2 könne nur 1,5 ATP synthetisiert werden, da es Komplex I überspringt.\n- Ausbeute: Palmitinsäure (16:0) durchläuft 7 Zyklen β-Oxidation\n- β-Oxidation: 7 NADH = 17,5 ATP; 7 FADH2 = 10,5 ATP; 7 H2O\n- Aus 8 Acetyl-CoA, die in den Citratzyklus laufen: 16 H2O; 24 NADH = 60 ATP; 8 FADH2 = 12 ATP; 8 GTP = 8 ATP; 16 CO2 = 108 ATP + 23 H2O + 16 CO2",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 23,
      "question": "Welche Lipoproteine gibt es und wie funktionieren sie im Stoffwechsel?",
      "answer": "- Lipoproteine sind Partikel, die hydrophobe Lipide im Blut transportieren:\n- Chylomikronen: Triglycerid-reich (aus Darmepithelzellen ins Blut, wo sie von Lipoproteinlipasen angegriffen werden, die Triglyceride zu Fettsäuren und Glycerol spalten)\n- VLDL: Triglycerid-reich (aus der Leber ins Blut, wo sie von Lipoproteinlipasen angegriffen werden, die Triglyceride zu Fettsäuren und Glycerol spalten)\n- IDL: Triglycerid-/Cholesterin-reich\n- LDL: Cholesterinreich (Transport von der Leber zum Gewebe)\n- HDL: Cholesterinreich (Transport vom Gewebe zur Leber)\n- Exogener Weg (Nahrungslipide):\n- Chylomikrone (triglycerid-reich) werden im Darmepithel gebildet und übers Blut zur Leber transportiert. Dabei spalten Lipoproteinlipasen (aktiviert durch Apo-CII) die TAGs in Fettsäuren und Glycerol.\n- Die verarmten Chylomikrone gelangen in die Leber (Aufnahme über ApoE)\n- Endogener Weg (Leberlipide)\n- VLDL in Leber synthetisiert und ins Blut gelassen. Dabei spalten Lipoproteinlipasen TAGs in Fettsäuren und Glycerol. Sie werden zu IDL.\n- Rücktransport in die Leber oder zu LDL (cholesterinreich).\n- Aufnahme von LDL ins Gewebe (über Apo-B100)\n- Rücktransport zur Leber als HDL.",
      "category": "Lipidstoffwechsel"
    },
    {
      "id": 16,
      "question": "Was sind anaplerotische Reaktionen und welche sind die wichtigsten?",
      "answer": "=Reaktionen, die Zwischenprodukte des Citratzyklus synthetisieren und diesen somit wieder auffüllen. Das ist notwendig, da viele Intermediate für den Aminosäure- und Fettsäure-Stoffwechsel verbraucht werden und der Citratzyklus sonst zum Erliegen kommen würde\n- Pyruvat-Carboxylase (Cofaktor: Biotin): Pyruvat + CO2 + ATP -> Oxaloacetat + ADP + Pi In Leber und Niere; nach der Oxidation von Lactat zu Pyruvat (Vorbereitung für Gluconeogenese)\n- Transaminierung durch Aminotransferasen: z. B. Aspartat + α-Ketoglutarat -> Glutamat + Oxaloacetat\n- Aminosäureabbau: Glutamat + NAD+ -> α-Ketoglutarat + NH4+ + NADH (Glutamat Dehydrogenase)\n- Möglich (laut Folien) aber läuft in diese Richtung tatsächlich selten ab:\n- PEP-Carboxykinase: PEP + CO2 + GDP -> Oxaloacetat + GTP\n- In Herz und Skelettmuskel\n- Malic Enzyme: Pyruvat -> Malat",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 16,
      "question": "Was ist der Zweck des Citratzyklus und welche Enzyme und Reaktionen umfasst er?",
      "answer": "- Der Citratzyklus dient der Oxidation von Acetyl-CoA und dadurch der Freisetzung von Reduktionsäquivalenten (NADH und FADH2), die in der Elektronentransportkette und oxidativen Phosphorylierung dann in Wärme und/oder ATP umgewandelt werden können.\n- Viele Intermediate des Citratzyklus werden außerdem genutzt für den Aminosäureund Fettsäurestoffwechsel.\n1. Citrat-Synthase: Acetyl-CoA + Oxalacetat -> Citrat\n2. Aconitase: Citrat -> Isocitrat\n3. Isocitrat-Dehydrogenase: Isocitrat + NAD+ -> α-Ketoglutarat + NADH + H+ + CO2\n4. α-Ketoglutarat Dehydrogenase: α-Ketoglutarat + NAD+ CoA-SH -> Succinyl-CoA + CO2 + NADH\n5. Succinyl-CoA Synthase: Succinyl-CoA -> Succinat + CoA-SH\n- Substratketten Phosphorylierung: GDP -> GTP, dann GTP + ADP -> GDP + ATP\n6. Succinat Dehydrogenase: Succinat + FAD+ -> Fumarat + FADH2\n7. Fumarase: Fumarat + H2O -> Malat\n8. Malat-Dehydrogenase: Malat + NAD+ -> Oxalacetat + NADH + H+",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 16,
      "question": "Wie machen Pflanzen mit dem Glyoxylatzyklus aus Acetyl-CoA Zucker?",
      "answer": "- Der Glyoxylatzyklus dient Pflanzen, Pilzen und Bakterien zum Aufbau von Kohlenstoffverbindungen aus Acetyl-CoA (bei Tieren im Citratzyklus nicht möglich, weil CO2 abgespalten wird und verloren geht).\n- Aus 2 Acetyl-CoA wird ein Succinat, welches dann im Citratzyklus zu Malat umgewandelt werden kann, dieses kann in der Gluconeogenese (Malat -> Oxaloacetat -> Glucose) zu Zucker umgewandelt werden.\n- Wichtig ist die Kompartimentierung: Glyoxylatzyklus findet in Glyoxysomen statt, um die Oxidation von Acetyl-CoA zu CO2 zu verhindern.\n1. Citrat-Synthase: Acetyl-CoA + Oxalacetat -> Citrat\n2. Aconitase: Citrat -> Isocitrat\n3. Isocitratlyase: Isocitrat -> Succinat + Glyoxylat\n4. Malat-Synthase: Glyoxylat + Acetyl-CoA -> Malat\n5. Malat-Dehydrogenase: Malat + NAD+ -> Oxalacetat + NADH + H+",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 16,
      "question": "In welchen Reaktionen ist Oxalessigsäure Substrat und in welchen Produkt?",
      "answer": "Substrat:\n- Citratzyklus: Oxalacetat + Acetyl-CoA -> Citrat (Citrat-Synthase)\n- Citratzyklus dient der Generierung von Reduktionsäquivalenten NADH und FADH2\n- Gluconeogenese: Oxalacetat -> Phosphoenolpyruvat + CO2 (PEP-Carboxykinase)\n- Gluconeogenese dient der Generation von Glucose bei niedrigem Blutzucker Spiegel\n- Transaminierung: Oxalacetat + Glutamat -> Aspartat + α-Ketoglutarat (Aspartat-Aminotransferase)\n- Dient der Aminosäuresynthese\n- Produkt:\n- Anaplerotische Reaktion: Pyruvat + CO2 + ATP -> Oxalacetat (Pyruvat-Carboxylase)\n- Dient dem \"Auffüllen\" des Citratzyklus mit Substrat\n- Malat/Aspartat Shuttle: Malat + NAD+ -> Oxalacetat + NADH + H+ (Malat-Dehydrogenase)\n- Dient dem Ein- und Austransport von NADH ins Mitochondrium\n- Transaminierung: Aspartat + α-Ketoglutarat -> Oxalacetat + Glutamat (Aspartat-Aminotransferase\n- Dient unter Anderem dem Harnstoffzyklus, da Glutamat dann oxidativ desaminiert werden kann",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 16,
      "question": "Wie bauen Pflanzen Glucose aus Fettsäuren auf?",
      "answer": "- Pflanzen können Fettsäuren zu Glucose umbauen, da sie den Glyoxylatzyklus betreiben können.\n1. β-Oxidation: Fettsäuren -> Acetyl-CoA\n- Im Glyoxysom\n2. Glyoxylatzyklus: 2 Acetyl-CoA -> Succinat\n- Die CO2-abspaltenden Schritte des Citratzyklus werden umgangen\n- Wichtige Enzyme: Isocitrat-Lyase und Malat-Synthase\n- Im Glyoxysom\n3. Citratzyklus: Succinat -> Fumarat -> Malat -> Oxalacetat\n- Im Mitochondrium\n4. PEP-Carboxykinase: Oxalacetat -> Phosphoenolpyruvat\n- Im Mitochondrium\n5. Gluconeogenese: Phosphoenolpyruvat -> Glucose\n- Im Cytosol",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 17,
      "question": "Wie funktioniert die ATP-Synthese in der Atmungskette und wie gelangt ATP ins Cytoplasma?",
      "answer": "- Die ATP-Synthase ist Komplex 5 der Atmungskette, sitzt an der inneren Mitochondrienmembran und wandelt die Energie des Protonengradienten in ATP um\n- Die Komplexe 1-4 übertragen Elektronen der Reduktionsäquivalente (NADH und FADH2 - stammen aus dem Citratzyklus/β-Oxidation) stufenweise auf O2, welches zu H2O reduziert wird. Die hierbei freiwerdende Redox-Energie verwenden Komplex 1,3 und 4 um Protonen in den Intermembranraum zu pumpen. Ein elektrochemischer Gradient über die Membran wird aufgebaut (=Konzentrationsgradient und Spannung).\n- ATP-Synthase besteht aus 2 Untereinheiten: F0 und F1\n- F0 = Kanal + Rotor, hier strömen Protonen zurück in die Matrix (Konzentrationsausgleich) und Protonenmotorische Kraft in Rotationskraft umgewandelt\n- F1 = katalytische Einheit; an einem hexamerisch angeordneten Komplex aus 3 α- und β-Untereinheiten wird ADP + Pi aufgenommen, zu ATP kondensiert und dieses in die Matrix abgegeben (2,7 H+ benötigt pro ATP); dieser zyklische Ablauf wird durch eine Konformationsänderung der Untereinheiten ermöglicht, welche durch die Rotation induziert wird\n- Transporter über die innere Mitochondrienmembran ins Cytoplasma notwendig, da sie undurchlässig ist (ATP kann nicht diffundieren)\n- ATP/ADP-Translokase: Antiporter, der die Spannung an der Membran nutzt (negativer geladenes ATP wird aus der negativeren Matrix austransportiert)\n- Pi wird separat über H+ Symporter eintransportiert",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 17,
      "question": "Welche physiologische Bedeutung hat die Atmungskette, welche prosthetischen Gruppen besitzen die Komplexe und was passiert bei Cyanidvergiftung?",
      "answer": "- Die Atmungskette wandelt die im Stoffwechsel durch Oxidation gewonnene Reduktionsäquivalente (NADH und FADH2) in für die Zelle nutzbare Energie in Form von ATP oder in Wärme um. Pro Glucose gewinnen wir 32 ATP, das ist aber nur bei aeroben Bedingungen möglich.\n- Reduktionsäquivalente werden regeneriert: werden in Glykolyse, Pyruvatdehydrogenase, Citratzyklus, β-Oxidation benötigt\n- Komplexe mit prosthetischen Gruppen:\n- Komplex I (NADH Dehydrogenase) mit FMN und FeS-Zentren\n- Komplex II (Succinat Dehydrogenase) mit FMN und FeS-Zentren\n- Komplex III (Cytochrom c Reduktase) mit Cytochrom b (+Häm), Cytochrom c (+Häm) und Rieske-FeS-Zentrum\n- Komplex IV (Cytochrom c Oxidase) mit Cytochrom a (+Häm) und Kupferzentren\n- Cyanid hemmt Komplex IV, indem es an Fe3+ von Häm a bindet; die Elektronenübertragung ist blockiert",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 18,
      "question": "Welche Bedeutung hat der Malat-Aspartat-Shuttle für den NADH-Transport ins Mitochondrium?",
      "answer": "- Der Malat-Aspartat-Shuttle transportiert NADH zwischen Cytosol und Mitochondrium, da NADH nicht durch die Mitochondrienmembran diffundieren kann.\n- Der Shuttle macht cytosolisches NADH für die Elektronentransportkette im Mitochondrium zugänglich, damit dort Energie in Form von ATP produziert werden kann.\n- Im Cytoplasma:\n1. Aspartat + α-Ketoglutarat -> Glutamat + Oxalacetat (Aspartat-Aminotransferase)\n2. Oxalacetat -> Malat (Malat-Dehydrogenase; NADH -> NAD+)\n- NAD+ wird im Cytoplasma frei\n3. Antiporter: Malat wird ins Mitochondrium transportiert, α-Ketoglutarat wird austransportiert\n- Im Mitochondrium:\n4. Malat -> Oxalacetat (Malat-Dehydrogenase; NAD+ -> NADH)\n- NADH wird im Mitochondrium frei\n5. Oxalacetat + Glutamat -> α-Ketoglutarat + Aspartat (Aspartat-Aminotransferase)\n6. Antiporter: Aspartat wird ins Cytosol austransportiert, Glutamat wird eintransportiert\n- Alternativ: Glycerin-3-Phosphat-Shuttle\n1. Im Cytosol: Reduktion von Dihydroxyacetonphosphat zu Glycerin-3-Phosphat (NADH -> NAD+)\n2. An der Mitochondrienmembran: Oxidation von Glycerin-3-Phosphat zu Dihydroxyacetonphosphat (FAD+ -> FADH2)\n- FADH2 liefert Elektronen direkt an Ubichinon",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 17,
      "question": "Was bedeutet Entkopplung der Atmungskette?",
      "answer": "- Bedeutet es wird der aufgebaute Protonengradient der Mitochondrienmembran genutzt, um Wärme zu produzieren und so die Körpertemperatur aufrecht zu erhalten anstatt ATP-Synthese\n- Ablauf in braunen Fettzellen; vor allem bei Neugeborenen, aber auch bei Erwachsenen möglich im Schulterbereich\n- Entweder durch Kanäle (UCP1) oder mittels Dinitrophenol\n- DNP nimmt im Intermembranraum Protonen auf, diffundiert durch die Membran und gibt die Protonen dort wieder ab. Vorgang entlang des elektrochemischen Gradienten => Durch Entladung des Gradienten wird potenzielle Energie in Wärme umgewandelt",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 17,
      "question": "Welcher Prozess im Körper verbraucht O₂ und wie funktionieren die Komplexe der Atmungskette, besonders Komplex IV?",
      "answer": "- O2-Verbrauch: In der Atmungskette werden Elektronen (von Reduktionsäquivalenten aus Citratzyklus) auf O2 übertragen, welches zu H2O reduziert wird (genauer geschieht die Reduktion von Sauerstoff am Komplex IV). Durch die freiwerdende Energie wird ein Protonengradient aufgebaut, der zur ATP-Synthese genutzt wird.\n- Beteiligte Komplexe:\n- Komplex I (NADH Dehydrogenase mit FMN und FeS-Zentren): oxidiert NADH zu NAD+ und reduziert dann Coenzym Q von Ubichinon zu Ubichinol; pumpt mit gewonnener Energie 4 Protonen in den Intermembranraum\n- Komplex II (Succinat Dehydrogenase mit FMN und FeS-Proteine): oxidiert FADH2 zu FAD und reduziert dann Coenzym Q von Ubichinon zu Ubichinol\n- Komplex III (Cytochrom C Reduktase mit Cytochrom b (+Häm), Cytochrom c (+Häm) und Rieske-FeS-Zentrum): Oxidiert Coenzym Q und reduziert dann Cytochrom C am Häm (Fe3+ -> Fe2+); pumpt 4 Protonen\n- Komplex IV (Cytochrom C Oxidase mit Cytochrom a, a3 (+Häm) und Kupferzentrum): oxidiert Cytochrom C und reduziert O2 zu H2O (1/2 O2 + 2H+ -> H2O); pumpt 4 Protonen",
      "category": "Citrat Zyklus & Zellatmung"
    },
    {
      "id": 26,
      "question": "Welche biogenen Amine entstehen aus Tryptophan, wie werden sie gebildet und was bewirken sie?",
      "answer": "- Aus Tryptophan werden die biogenen Amine Serotonin und Melatonin hergestellt:\n- Serotonin-Synthese: Tryptophan wird hydroxyliert (Cofaktor: Tetrahydrobiopterin) und anschließend decarboxyliert (Cofaktor: Pyridoxalphosphat)\n- Melatonin-Synthese: Serotonin wird acetyliert (N-Acetyltransferase, Cofaktor: Acetyl-CoA) und anschließend methyliert (Methyltransferase, Cofaktor: SAM)\n- Serotonin: Wirkung auf Hydroxytryptamin-Rezeptoren (Schlaf-Wach-Verhalten, Appetit, Stimmung), bei Mangel Depression\n- Melatonin: Wirkung auf Melatonin-Rezeptoren (Schlafhormon, Wachstumshormon, aktiviert das Immunsystem)\n- Wird in Gehirn, Retina und Darm gebildet; die N-Acetyltransferase wird durch Dunkelheit phosphoryliert (also aktiviert) und durch Licht gehemmt",
      "category": "Aminosäurestoffwechsel"
    },
    {
      "id": 26,
      "question": "Wie verläuft der Harnstoffzyklus, wo findet er statt und was sind die Folgen von Defekten?",
      "answer": "- Im Harnstoffzyklus wird neurotoxisches Ammonium (entsteht beim Abbau von Aminosäuren) in Harnstoff umgewandelt. Dieser wird über das Blut in die Niere transportiert und als Abfallprodukt ausgeschieden.\n- Ort: in der mitochondrialen Matrix (Carbamylphosphat-Synthese und Citrullin-Synthese) und im Cytoplasma (restlicher Zyklus); der Transport von Citrullin und Ornithin zwischen Mitochondrium und Cytoplasma findet über ORNT1 statt\n1. Carbamylphosphat-Synthase 1: HCO3- + NH4+ + 2 ATP -> Carbamylphosphat + 2 ADP + Pi\n2. Ornithin-Carbamyltransferase: Carbamylphosphat + Ornithin -> Citrullin + Pi\n3. Argininosuccinat-Synthase: Citrullin + Aspartat + ATP -> Argininosuccinat + AMP + PPi\n4. Argininosuccinatlyase: Argininosuccinat -> Fumarat + Arginin\n5. Arginase: Arginin + H2O -> Ornithin + Harnstoff\n- Nettoreaktion: NH4+ + HCO3- + 3 ATP + Aspartat + 2 H2O -> Harnstoff + 2 ADP + AMP + 4 Pi + Fumarat\n- Jegliche Defekte führen zu einer Anhäufung von Ammonium im Blut (= Hyperammonämie), was vor allem zu Schäden im Gehirn führt.",
      "category": "Aminosäurestoffwechsel"
    },
    {
      "id": 26,
      "question": "Wie werden Aminosäuren bei Säugern abgebaut und was geschieht mit Amino- und Carboxygruppe?",
      "answer": "- Proteine werden im Magen und Dünndarm von verschiedenen Hydrolasen in einzelne Aminosäuren gespalten (z. B. Pepsin und Trypsin), diese gelangen dann über erleichterte Diffusion ins Blut.\n- Die Aminogruppe wird meist über Transaminierung auf α-Ketoglutarat übertragen und dann über Desaminierung abgespalten:\n1. Aminotransferase: α-Ketoglutarat + Aminosäure -> Glutamat + α-Ketonsäure\n- z. B.: Alanin-Aminotransferase: α-Ketoglutarat + Alanin <-> Glutamat + Pyruvat\n- Cofaktor: Pyridoxalphosphat\n2. Glutamat-Dehydrogenase: Glutamat + H2O + NADP+ -> α-Ketoglutarat + NH4+ + NADH + H+ -> Der Stickstoff wird als NH4+ frei, welches dann im Harnstoff-Zyklus zu Harnstoff umgewandelt und ausgeschieden wird.\n- Das Kohlenstoffgerüst gelangt in den Glucosestoffwechsel als Citratzyklus Intermediat (z. B. als Oxalacetat) und kann hier in die Gluconeogenese, den Citratzyklus oder die Fettsäuresynthese einfließen.",
      "category": "Aminosäurestoffwechsel"
    },
    {
      "id": 18,
      "question": "Wie funktioniert der Glucose-Alanin-Zyklus und wann ist er besonders wichtig?",
      "answer": "- Der Glucose-Alanin-Zyklus dient dem Transport von Ammonium aus dem Muskel, welches neurotoxisch wirkt und daher als Alanin oder Glutamin transportiert werden muss.\n- Physiologische Bedeutung: Transport des Stickstoffs in nicht-toxischer Form (da im Muskel kein Harnstoff-Zyklus stattfindet), Kopplung des Stickstoff- und Kohlenstoff-Zyklus, Erhalt des Blutzuckerspiegels\n- Relevant besonders bei langandauernder körperlicher Belastung oder Hunger, wenn in Muskeln Proteine zum Energiegewinn abgebaut werden müssen\n- Grundidee: Im Muskel wird über die Glykolyse Pyruvat bereitgestellt, welches durch Alanin-Aminotransferase in Alanin umgewandelt wird. Alanin wird übers Blut zur Leber transportiert und dort wieder zurück in Pyruvat umgewandelt, welches in die Gluconeogenese einfließt. Die Glucose kann wieder zurück zum Muskel transportiert werden. Dabei entsteht in der Leber auch Glutamat, von dem NH4+ abgespalten wird und durch den Harnstoffzyklus ausgeschieden wird. Kurz:\n- Im Muskel: Glykolyse -> Pyruvat -> Alanin; gleichzeitig: Glutamat -> αKetoglutarat\n- Transport des Alanins übers Blut zur Leber\n- In der Leber: Alanin -> Pyruvat -> Gluconeogenese; gleichzeitig: αKetoglutarat -> Glutamat -> Harnzyklus\n- Transport der Glucose übers Blut zum Muskel\n- Wichtige Enzyme: Transaminierung in beide Richtungen durch AlaninAminotransferase mit Pyridoxalphosphat als Cofaktor",
      "category": "Aminosäurestoffwechsel"
    },
    {
      "id": 26,
      "question": "Wie wird Phenylalanin zu Tyrosin umgesetzt, wofür dient Tyrosin als Ausgangsstoff und welche Erkrankungen sind relevant?",
      "answer": "- Tyrosin-Synthese: Phenylalanin + O2 -> Tyrosin\n- Enzym: Phenylalanin-Hydroxylase\n- Das zweite O-Atom macht aus Tetrahydrobiopterin Hydroxybiopterin\n- Tyrosin dient als Ausgangsstoff für die Synthese von: Dopamin, Noradrenalin, Adrenalin, Melanin und Schilddrüsenhormonen\n- Erkrankungen:\n- Phenylketonurie: Defekt der Phenylalanin-Hydroxylase führt zur Anreicherung von Phenylalanin und damit zu Phenyllactat\n- Parkinson: Dopaminmangel durch Degeneration dopaminsynthetisierender Neuronen\n- Albinismus: Tyrosinase oder Phenylalaninhydroxylase sind mutiert und es wird kein Melanin gebildet",
      "category": "Aminosäurestoffwechsel"
    },
    {
      "id": 26,
      "question": "Wie verläuft der Methionin-Zyklus und welche Rolle spielt SAM?",
      "answer": "- Methionin-Zyklus: Methionin -> SAM -> S-Adenosylhomocystein -> Homocystein -> Methionin\n1. SAM-Synthase: Methionin + ATP -> S-Adenosylmethionin + PPi + Pi\n2. Methyltransferase: SAM -> S-Adenosylhomocystein\n3. Hydrolase: S-Adenosylhomocystein + H2O -> Adenosin + Homocystein\n4. Methionin-Synthase (Cofaktor: Cobalamin): Homocystein -> Methionin\n- S-Adenosylmethionin (SAM) entsteht aus Methionin und ist ein wichtiger Methylgruppendonor für Methyltransferasen\n- Struktur: Adenin + Methionin über Schwefel am C5 der Ribose\n- Bsp.: Coenzym bei der Methylierung von Noradrenalin zu Adrenalin\n- Beim Abbau von Methionin wird dieses in Homocystein umgewandelt und dann mit Serin zusammen zu Succinyl-CoA umgebaut, welches in den Citratzyklus einfließen kann\n- Methionin -> SAM -> S-Adenosylhomocystein -> Homocystein (+ Serin) -> Cystathionin -> α-Ketobutyrat -> Succinyl-CoA",
      "category": "Aminosäurestoffwechsel"
    },
    {
      "id": 8,
      "question": "Wie ist Hämoglobin aufgebaut, wie bindet es Sauerstoff und wie wirken Bohr-Effekt und Regulation?",
      "answer": "- Tetramer aus 4 Untereinheiten (2 α + 2 β): jeweils mit einem Häm aus Porphyrinring mit Eisen als Zentralatom\n- Fe hat 6 Bindestellen: 4 an Porphyrin-N, 1 an Histidin des Hämoglobins, 1 an O2\n- Bindung von O2 ist reversibel und kooperativ\n- Allosterie/Kooperativität: Untereinheiten können in R-Zustand (Oxy-Hämoglobin, hohe O2 Affinität, Fe liegt in Porphyrinebene) und T-Zustand (Desoxy-Hämoglobin, niedrige O2 Affinität) vorliegen -> Wenn eine Untereinheit O2 bindet, so steigt die Affinität an allen anderen Untereinheiten\n- Sorgt für eine sigmoide Bindungskurve (kooperative Bindung): bei hohem O2 Partialdruck (Lunge) ist die Affinität höher, bei niedrigem Partialdruck (Gewebe) geringer\n- Regulation: sorgt dafür, dass O2 in der Lunge aufgenommen und im Gewebe abgegeben wird\n- Bohr Effekt: niedriger pH (im Gewebe durch hohe CO2-Konzentration) begünstigt T-Zustand -> O2 Abgabe\n- 2,3-Bisphosphoglycerat (in Erythrozyten vorhanden) stabilisiert den T-Zustand (Bindekurve in Vollblut daher im Vergleich zu reinem Hämoglobin nach rechts verschoben)\n- Carbamat-Bildung: Aminogruppe am N-Terminalen Ende des Hämoglobins haben CO2 als Carbamat gebunden -> stabilisiert T-Zustand\n- Höhere Temperaturen verringern die O2-affinität",
      "category": "Hämoglobin"
    },
    {
      "id": 8,
      "question": "Welche Bedeutung hat 2,3-BPG, wie wird es gebildet und wie beeinflusst es die O₂-Bindung?",
      "answer": "- In der Glykolyse: Substratkettenphosphorylierung, wobei 1,3-BPG zu 3-Phosphoglycerat dephosphoryliert wird (Enzym: Phosphoglyceratkinase; ADP -> ATP)\n- Alternativer Weg in Erythrozyten: Rapoport-Luebering-Zyklus\n- 1,3-BPG wird zu 2,3-BPG umgelagert (Enzym: 1,3-BPG-Mutase)\n- 2,3-BPG wird zu 3-Phosphoglycerat dephosphoryliert (Enzym: BPG-Phosphatase; kein ATP generiert)\n- 2,3-BPG wirkt in den Erythrozyten als allosterischer Effektor auf Hämoglobin: stabilisiert den T-Zustand -> O2-Affinität sinkt und O2 kann leichter abgegeben werden (Bindekurve in Vollblut daher im Vergleich zu reinem Hämoglobin nach rechts verschoben)",
      "category": "Hämoglobin"
    },
    {
      "id": 8,
      "question": "Wie entsteht Bilirubin, was ist direktes und indirektes Bilirubin und wie wird es ausgeschieden?",
      "answer": "- Bilirubin entsteht beim Abbau von Häm und muss wasserlöslich gemacht werden, damit es ausgeschieden werden kann:\n1. Öffnen des Häm-Rings zum linearen Tetrapyrrol, wobei CO und Fe abgespalten werden => Biliverdin\n- Enzym: Hämoxygenase\n2. Reduktion der Methinbrücke zur Methylgruppe => indirektes Bilirubin\n- Enzym: Biliverdin-Reduktase, NADPH + H+ -> NADP+\n3. Glucuronidierung zu direktem Bilirubin (hydrophil)\n- Durch UDP-Glucuronat\n4. Ausscheidung über Urin oder Stuhl",
      "category": "Hämoglobin"
    },
    {
      "id": 8,
      "question": "Wie werden O₂ und CO₂ transportiert und wie hängen Hämoglobin-Affinität und Sättigungskurve mit dem Partialdruck zusammen?",
      "answer": "- Transport von O2: kooperativ und reversibel an das Fe des Häms im Hämoglobin gebunden und so aus der Lunge ins Gewebe transportiert\n- Regulierbar durch pH-Wert (Bohr-Effekt: Bei niedrigem pH sinkt die O2-Affinität) und 2,3-BPG (allosterischer Effektor senkt die Bindeaffinität)\n- Transport von CO2: Der Chlorid-Hydrogencarbonat-Austauscher (Antiporter der Erythrozytenmembran) sorgt für den Transport vom Gewebe in die Lunge, wo CO2 abgeatmet wird\n- Im Gewebe: Erythrozyten nehmen CO2 auf; es wird in Hydrogencarbonat umgewandelt, Hydrogencarbonat wird abgegeben (Antiporter: Cl- wird aufgenommen)\n- Transport über das Blut zur Lunge\n- In der Lunge: Erythrozyten nehmen HCO3- auf (Antiporter: geben Cl- ab) und wandeln es in CO2 um\n- CO2 wird abgegeben und abgeatmet\n- Ein kleiner Teil des CO2 wird gelöst im Plasma oder gebunden an die N-Termini der Erythrozyten (als Carbaminohämoglobin, nicht an derselben Bindestelle wie O2) transportiert\n- Die Hämoglobin-Sättigungskurve verläuft sigmoid, da die O2-Bindung kooperativ ist (wenn eine der 4 Untereinheiten bindet, steigt die Affinität der anderen Untereinheiten)\n- Bei hohem O2-Partialdruck (Lunge) liegt das meiste Hämoglobin mit O2 gebunden vor (R-Zustand ist begünstigt)\n- Bei niedrigem O2-Partialdruck (Gewebe) liegt das meiste Hämoglobin ungebunden vor (T-Zustand ist begünstigt)",
      "category": "Hämoglobin"
    },
    {
      "id": 8,
      "question": "Was ist der Unterschied zwischen Vollblut und reinem Hämoglobin in Bezug auf Struktur, Kooperativität und O₂-Affinität?",
      "answer": "- Struktur: Oligomer aus 2 × α- und 2 × β-Untereinheiten, jeweils mit einer Häm-Gruppe (Porphyrinring mit Fe2+ als Zentralatom)\n- Kooperativität: Die Bindung eines O2 an eine der 4 Untereinheiten begünstigt die Bindung von O2 an die anderen Untereinheiten -> sigmoide Bindungskurve\n- T-Zustand: geringe O2-Affinität\n- R-Zustand: hohe O2-Affinität\n- Allosterische Modulation der Affinität: Der T-Zustand wird durch 2,3-BPG, CO2, H+ und Hitze begünstigt\n- In Vollblut (Hämoglobin befindet sich in Erythrozyten) wirken diese allosterischen Effektoren, weshalb die Bindungskurve nach rechts verschoben ist (Hämoglobin ist weniger O2-affin), da 2,3-BPG als allosterischer Inhibitor vorhanden ist",
      "category": "Hämoglobin"
    },
    {
      "id": 4,
      "question": "Wie sieht die allgemeine Struktur einer α-Aminosäure aus?",
      "answer": "Ein zentrales α-C-Atom ist an eine Aminogruppe (H₂N), eine Carboxylgruppe (COOH), ein H-Atom und eine variable Seitenkette R gebunden.",
      "category": "Aminosäuren – Grundlagen",
      "question_html": "<p>Wie sieht die allgemeine Struktur einer α-Aminosäure aus?</p>",
      "answer_html": "<p>Ein zentrales α-C-Atom ist an eine Aminogruppe (H₂N), eine Carboxylgruppe (COOH), ein H-Atom und eine variable Seitenkette R gebunden.</p>"
    },
    {
      "id": 4,
      "question": "Was unterscheidet die 20 proteinogenen Aminosäuren strukturell voneinander?",
      "answer": "Die Seitenkette R. Amino- und Carboxylgruppe sind bei allen gleich, die chemischen Eigenschaften werden vor allem durch R bestimmt.",
      "category": "Aminosäuren – Grundlagen",
      "question_html": "<p>Was unterscheidet die 20 proteinogenen Aminosäuren strukturell voneinander?</p>",
      "answer_html": "<p>Die Seitenkette R. Amino- und Carboxylgruppe sind bei allen gleich, die chemischen Eigenschaften werden vor allem durch R bestimmt.</p>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Glycin",
      "answer": "Glycin (Gly, G)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Glycin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">H</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Glycin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Gly</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>G</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Alanin",
      "answer": "Alanin (Ala, A)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Alanin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Alanin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Ala</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>A</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Valin",
      "answer": "Valin (Val, V)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Valin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH(CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan>)<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Valin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Val</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>V</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Leucin",
      "answer": "Leucin (Leu, L)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Leucin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CH(CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan>)<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Leucin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Leu</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>L</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Isoleucin",
      "answer": "Isoleucin (Ile, I)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Isoleucin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH(CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan>)-CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Isoleucin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Ile</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>I</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Serin",
      "answer": "Serin (Ser, S)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Serin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>OH</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Serin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Ser</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>S</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Threonin",
      "answer": "Threonin (Thr, T)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Threonin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH(OH)-CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Threonin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Thr</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>T</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Cystein",
      "answer": "Cystein (Cys, C)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Cystein\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>SH</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Cystein</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Cys</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>C</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Methionin",
      "answer": "Methionin (Met, M)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Methionin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-S-CH<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Methionin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Met</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>M</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Asparaginsäure",
      "answer": "Asparaginsäure (Asp, D)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Asparaginsäure\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-COOH</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Asparaginsäure</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Asp</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>D</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Glutaminsäure",
      "answer": "Glutaminsäure (Glu, E)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Glutaminsäure\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-COOH</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Glutaminsäure</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Glu</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>E</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Asparagin",
      "answer": "Asparagin (Asn, N)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Asparagin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CONH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Asparagin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Asn</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>N</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Glutamin",
      "answer": "Glutamin (Gln, Q)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Glutamin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-CONH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Glutamin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Gln</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>Q</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Lysin",
      "answer": "Lysin (Lys, K)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Lysin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">(CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>)<tspan baseline-shift=\"sub\" font-size=\"12\">4</tspan>-NH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Lysin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Lys</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>K</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Arginin",
      "answer": "Arginin (Arg, R)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Arginin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">(CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>)<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan>-NH-C(=NH)-NH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan></text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Arginin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Arg</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>R</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Histidin",
      "answer": "Histidin (His, H)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Histidin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-Imidazol</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Histidin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>His</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>H</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Phenylalanin",
      "answer": "Phenylalanin (Phe, F)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Phenylalanin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-Phenyl</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Phenylalanin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Phe</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>F</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Tyrosin",
      "answer": "Tyrosin (Tyr, Y)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Tyrosin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-Phenyl-OH</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Tyrosin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Tyr</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>Y</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Tryptophan",
      "answer": "Tryptophan (Trp, W)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 210\" width=\"320\" height=\"210\" role=\"img\" aria-label=\"Strukturformel von Tryptophan\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"194\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>-Indol</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Tryptophan</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Trp</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>W</strong></div>\n</div>"
    },
    {
      "id": 4,
      "question": "Erkenne die Aminosäure anhand ihrer Strukturformel: Prolin",
      "answer": "Prolin (Pro, P)",
      "category": "Aminosäuren – Zuordnung",
      "question_html": "<div class=\"aa-question-structure\">\n  <div class=\"prompt\">Welche Aminosäure ist das?</div>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 232\" width=\"320\" height=\"232\" role=\"img\" aria-label=\"Strukturformel von Prolin\"><rect x=\"8\" y=\"8\" width=\"304\" height=\"216\" rx=\"18\" ry=\"18\" fill=\"#ffffff\" stroke=\"#d9e2f2\" stroke-width=\"2\"/><line x1=\"160\" y1=\"105\" x2=\"90\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"235\" y2=\"105\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"55\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"105\" x2=\"160\" y2=\"155\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"160\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#111827\">C</text><text x=\"55\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>N</text><text x=\"270\" y=\"112\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">COOH</text><text x=\"160\" y=\"43\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"22\" fill=\"#111827\">H</text><text x=\"160\" y=\"185\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">(CH<tspan baseline-shift=\"sub\" font-size=\"12\">2</tspan>)<tspan baseline-shift=\"sub\" font-size=\"12\">3</tspan> → NH</text><text x=\"160\" y=\"207\" text-anchor=\"middle\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"21\" fill=\"#111827\">(Ring)</text></svg>\n</div>",
      "answer_html": "<div class=\"aa-answer\">\n  <div class=\"aa-meta\"><strong>Prolin</strong></div>\n  <div>Drei-Buchstaben-Code: <strong>Pro</strong></div>\n  <div>Ein-Buchstaben-Code: <strong>P</strong></div>\n</div>"
    }
  ],
  "lt": [
    {
      "id": 1,
      "category": "Proteine",
      "question": "Wie sind Proteine gebunden, wie werden sie gespalten und welche Wechselwirkungen stabilisieren sie?",
      "answer": "- Aminosäuren sind über {{Peptidbindungen}} verknüpft; entstehen unter {{Wasserabspaltung}} zwischen einer {{Amino}}- und {{Carboxy}}-Gruppe\n- Spaltung: {{Hydrolyse}} durchgeführt von Hydrolasen (Proteasen/Peptidasen)\n- Endopeptidasen: {{Pepsin}} (im Magen), {{Trypsin}} (im Darm)\n- Exopeptidasen: {{Aminopeptidase}}, {{Carboxypeptidase}}\n- Wechselwirkungen im Protein:\n- {{H-Brücken}} (durch {{Hitze}} denaturierbar)\n- {{Ionische}} {{Wechselwirkungen}} (durch Säuren/Basen angreifbar - z. B. {{Trichloressigsäure}})\n- {{Hydrophobe}} Wechselwirkungen (durch {{organische}} Lösungsmittel ({{Alkohol}}/{{Aceton}}) oder {{Harnstoff}} denaturierbar)\n- {{Disulfidbrücken}} (Zerstörung durch {{Reduktionsmittel}} - z. B. Mercaptoethanol)\n- Biosynthese: an {{Ribosomen}} durch Translation aus {{Aminosäuren}}\n- {{Industrielle}} Synthese: Festphasen-Peptidsynthese (Wachsende {{Peptidkette}} an Festphase gebunden, N-Terminale Schutzgruppen (Fmoc) und C-Terminale Aktivierung (DCC))"
    },
    {
      "id": 2,
      "category": "Proteine",
      "question": "Wie misst man optisch aktive Substanzen?",
      "answer": "- Mittels {{Polarimeter}}:\n- Aufbau: {{Lichtquelle}} -> {{Polarisator}} -> {{Probenrohr}} -> {{Analysator}}\n- {{Polarisator}} und {{Analysator}} sind gekreuzt (keine optisch aktive Probe im Weg => kein Licht tritt durch {{Analysator}})\n- Dient z. B. der Unterscheidung von {{Enantiomeren}}\n- Mittels {{Photometer}}: Messung von Substanzen, die im UV/Vis-Bereich Licht absorbieren\n- Aufbau: Lichtquelle -> Monochromator -> Probenküvette -> Detektor\n- Dient z. B. zur Detektion von aromatischen Aminosäuren"
    },
    {
      "id": 3,
      "category": "Proteine",
      "question": "Was sind Primär-, Sekundär-, Tertiär- und Quartärstruktur von Proteinen und wie bestimmt man die Primärstruktur?",
      "answer": "- Primärstruktur = Aminosäuresequenz\n- Sekundärstruktur (Helices, Faltblätter, Loops) stabilisiert durch H-Brücken\n- Tertiärstruktur: räumliche Anordnung einer Polypeptidkette\n- Quartärstruktur: Zusammenlagerung mehrerer Tertiärstrukturen\n- Sanger-Sequenzierung: Derivatisierung der 1. AS am N-Terminus mit FDNB\n- Edman-Abbau: Derivatisierung der 1. AS am N-Terminus mit Phenylisothiocyanat"
    },
    {
      "id": 4,
      "category": "Proteine",
      "question": "Wie unterscheiden sich α-Helix und β-Faltblatt?",
      "answer": "- α-Helix: H-Brücken innerhalb einer Helix parallel zur Helixachse zwischen AS n und n+4\n- Ganghöhe: 3,6 AS = 5,4 Å\n- Helixbrecher: Prolin, Gly\n- β-Faltblatt: H-Brücken verbinden unterschiedliche beta-Stränge\n- Antiparallel: 7 Å, H-Brücken verlaufen gerade\n- Parallel: 6,5 Å, H-Brücken verlaufen im Winkel\n- Faltblattbrecher: Glu, Asp, Pro"
    },
    {
      "id": 5,
      "category": "Proteine",
      "question": "Wie ist die Grundstruktur proteinogener Aminosäuren?",
      "answer": "- Grundstruktur: Carboxygruppe + Aminogruppe, wobei die Aminogruppe in der Fischer-Projektion links steht (L-Aminosäuren)\n- Ampholyte und Dipole\n- Einteilung: hydrophob/aromatisch, hydrophil, geladen"
    },
    {
      "id": 6,
      "category": "Proteine",
      "question": "Wie kann man Proteine trennen und was ist FPLC?",
      "answer": "- Nach Ladung: Ionenaustauschchromatographie, Elektrophoretische Trennung, Isoelektrischer Punkt\n- Nach Molekülgröße: Gelfiltration, SDS-PAGE, Dialyse, Massenspektrometrie\n- Nach Affinität: Affinitätschromatographie\n- FPLC = Fast Protein Liquid Chromatography\n- Funktionsweise wie HPLC, jedoch mit niedrigeren Drücken"
    },
    {
      "id": 7,
      "category": "Enzyme",
      "question": "Was ist allosterische Hemmung?",
      "answer": "- Allosterische Effektoren binden nicht an das aktive Zentrum des Enzyms\n- Allosterische Hemmung: Verschiebung Richtung T-Zustand, Km wird größer\n- Allosterische Aktivatoren: Verschiebung Richtung R-Zustand, Km wird kleiner\n- Bsp.: Phosphofructokinase inhibiert durch ATP und Citrat\n- Aktiviert durch AMP/ADP, Fructose-2,6-Bisphosphat"
    },
    {
      "id": 8,
      "category": "Enzyme",
      "question": "Welche Hauptklassen von Enzymen gibt es?",
      "answer": "- Oxidoreduktasen: Katalysieren Redoxreaktionen, Bsp.: Dehydrogenasen\n- Transferasen: Übertragung funktioneller Gruppen, Bsp.: Kinasen\n- Hydrolasen: hydrolytische Spaltung, Bsp.: HSL\n- Lyasen: nicht-hydrolytische Spaltung, Bsp.: Aldolasen\n- Isomerasen: Umwandlung zwischen isomeren Strukturen, Bsp.: Mutasen\n- Ligasen: Verknüpfung zweier Moleküle unter ATP-Verbrauch, Bsp.: Pyruvat-Carboxylase"
    },
    {
      "id": 9,
      "category": "Enzyme",
      "question": "Welche Arten der Enzymhemmung gibt es?",
      "answer": "- Kompetitiv: Inhibitor bindet am aktiven Zentrum, Km steigt, vmax bleibt gleich\n- Unkompetitiv: Inhibitor bindet an ES-Komplex, Km kleiner, vmax kleiner\n- Gemischt: Inhibitor bindet an E und ES-Komplex, vmax kleiner\n- Suizid-Hemmung: irreversibel, Inhibitor wird wie Substrat umgesetzt"
    },
    {
      "id": 10,
      "category": "Glucosestoffwechsel",
      "question": "Welche Metabolite der Glykolyse liefern ATP?",
      "answer": "- Phosphorylierung von Glucose zu G6P: ATP verbraucht\n- Phosphorylierung von F6P zu F1,6BP: ATP verbraucht\n- 1,3-Bisphosphoglycerat + ADP -> 3-Phosphoglycerat + ATP (Phosphoglyceratkinase)\n- Phosphoenolpyruvat + ADP -> Pyruvat + ATP (Pyruvatkinase)\n- Nettogewinn: 2 ATP pro Glucose"
    },
    {
      "id": 11,
      "category": "Glucosestoffwechsel",
      "question": "Wie wird Pyruvat bei Säugern aerob und anaerob weiterverwendet?",
      "answer": "- Aerob: Citratzyklus im Mitochondrium, vollständige Oxidation zu CO2 und H2O\n- Anaerob: Lactat durch Milchsäuregärung im Cytoplasma (Regenerierung von NAD+)\n- Anaerob: Ethanol durch alkoholische Gärung (Hefe, nicht beim Menschen)\n- Pyruvat-Decarboxylase fehlt beim Menschen"
    },
    {
      "id": 12,
      "category": "Glucosestoffwechsel",
      "question": "Wie läuft die Glykolyse ab?",
      "answer": "1. Hexokinase: Glucose + ATP -> G6P + ADP\n2. Glucose-6-Phosphat-Isomerase: G6P -> F6P\n3. Phosphofructokinase: F6P + ATP -> F1,6BP + ADP\n4. Aldolase A: F1,6BP -> GAP + DHAP\n5. Glycerinaldehyd-3-Phosphat-Dehydrogenase: GAP + Pi + NAD+ -> 1,3-BPG + NADH\n6. Phosphoglycerat-Kinase: 1,3-BPG + ADP -> 3-PG + ATP\n7. Phosphoglycerat-Mutase: 3-PG -> 2-PG\n8. Enolase: 2-PG -> PEP + H2O\n9. Pyruvat-Kinase: PEP + ADP -> Pyruvat + ATP"
    },
    {
      "id": 13,
      "category": "Glucosestoffwechsel",
      "question": "Welche irreversiblen Schritte der Glykolyse müssen in der Gluconeogenese umgangen werden?",
      "answer": "1. PEP -> Pyruvat (Pyruvatkinase): Pyruvat-Carboxylase + PEP-Carboxykinase\n2. F6P -> F1,6BP (Phosphofructokinase): Fructose-1,6-Bisphosphatase\n3. Glucose -> G6P (Hexokinase): Glucose-6-Phosphatase (nur ER von Leber/Niere)"
    },
    {
      "id": 14,
      "category": "Regulation des Glucosestoffwechsels",
      "question": "Welche Wege des Glucosestoffwechsels gibt es und wie werden sie reguliert?",
      "answer": "- Glykolyse: Glucose -> Pyruvat (Insulin aktiviert, Glucagon hemmt)\n- Gluconeogenese: Pyruvat -> Glucose (Glucagon aktiviert, Insulin hemmt)\n- Glykogensynthese (Insulin aktiviert, Glucagon hemmt)\n- Glykogenolyse (Glucagon aktiviert, Insulin hemmt)\n- Pentosephosphatweg: Glucose -> Ribose (bei niedrigem NADPH)\n- Phosphofructokinase: inhibiert durch ATP, Citrat; aktiviert durch AMP, ADP, F2,6-BP"
    },
    {
      "id": 15,
      "category": "Lipide & Membranen",
      "question": "Wie werden Lipide eingeteilt?",
      "answer": "- Energiespeicherlipide: Triglyceride aus Glycerol + 3 Fettsäuren\n- Strukturlipide: Glycerophospholipide, Sphingolipide\n- Biologisch aktive Lipide: Eicosanoide, Steroidhormone, Vitamine A/E/K\n- Sphingomyelin: Aminoalkohol Sphingosin + Fettsäure + Phosphocholin\n- Cholesterin: Fluiditätsbuffer in Membranen"
    },
    {
      "id": 16,
      "category": "Lipidstoffwechsel",
      "question": "Wie verläuft die Cholesterinbiosynthese?",
      "answer": "1. Thiolase: 2 Acetyl-CoA -> Acetoacetyl-CoA\n2. HMG-CoA-Synthase: + Acetyl-CoA -> HMG-CoA\n3. HMG-CoA-Reduktase: HMG-CoA + NADPH -> Mevalonat\n4. Mevalonat-Kinase: Mevalonat + ATP -> 5-Phosphomevalonat\n5. Decarboxylierung zu aktiviertem Isopren\n6. Kondensation zu Squalen -> Cyclisierung -> Cholesterin\n- Vorstufe von Gallensäuren, Vitamin D, Steroidhormonen"
    },
    {
      "id": 17,
      "category": "Lipidstoffwechsel",
      "question": "Wie werden ungeradzahlige Fettsäuren abgebaut?",
      "answer": "- β-Oxidation läuft normal bis Propionyl-CoA übrig bleibt\n1. Propionyl-CoA-Carboxylase: Propionyl-CoA -> Methylmalonyl-CoA\n2. Methylmalonyl-CoA-Mutase (Coenzym B12): Methylmalonyl-CoA -> Succinyl-CoA\n- Succinyl-CoA ist Citratzyklus-Intermediat (anaplerotisch)\n- Kann über Oxalacetat zur Gluconeogenese verwendet werden"
    },
    {
      "id": 18,
      "category": "Citrat Zyklus & Zellatmung",
      "question": "Was ist der Zweck des Citratzyklus und welche Reaktionen umfasst er?",
      "answer": "1. Citrat-Synthase: Acetyl-CoA + Oxalacetat -> Citrat\n2. Aconitase: Citrat -> Isocitrat\n3. Isocitrat-Dehydrogenase: Isocitrat + NAD+ -> α-Ketoglutarat + NADH + CO2\n4. α-Ketoglutarat-Dehydrogenase: -> Succinyl-CoA + NADH + CO2\n5. Succinyl-CoA-Synthase: -> Succinat + GTP\n6. Succinat-Dehydrogenase: Succinat + FAD -> Fumarat + FADH2\n7. Fumarase: Fumarat + H2O -> Malat\n8. Malat-Dehydrogenase: Malat + NAD+ -> Oxalacetat + NADH"
    },
    {
      "id": 19,
      "category": "Citrat Zyklus & Zellatmung",
      "question": "Wie funktioniert die ATP-Synthese in der Atmungskette?",
      "answer": "- Komplexe I-IV übertragen Elektronen von NADH/FADH2 auf O2\n- Komplex I: NADH -> NAD+, pumpt 4 Protonen (FMN, FeS-Zentren)\n- Komplex II: FADH2 -> FAD, pumpt keine Protonen\n- Komplex III: Cytochrom-c-Reduktase, pumpt 4 Protonen\n- Komplex IV: Cytochrom-c-Oxidase, reduziert O2 zu H2O, pumpt 4 Protonen\n- ATP-Synthase (Komplex V): F0 Kanal + F1 katalytische Einheit, 2,7 H+ pro ATP\n- ATP/ADP-Translokase transportiert ATP ins Cytoplasma"
    },
    {
      "id": 20,
      "category": "Citrat Zyklus & Zellatmung",
      "question": "Welche Bedeutung hat der Malat-Aspartat-Shuttle?",
      "answer": "- Transportiert NADH zwischen Cytosol und Mitochondrium\n- Im Cytoplasma: Oxalacetat -> Malat (NADH -> NAD+)\n- Antiporter: Malat ins Mitochondrium, α-Ketoglutarat raus\n- Im Mitochondrium: Malat -> Oxalacetat (NAD+ -> NADH)\n- Aspartat-Aminotransferase: Oxalacetat + Glutamat -> α-Ketoglutarat + Aspartat"
    },
    {
      "id": 21,
      "category": "Aminosäurestoffwechsel",
      "question": "Wie verläuft der Harnstoffzyklus?",
      "answer": "1. Carbamylphosphat-Synthase: HCO3- + NH4+ + 2ATP -> Carbamylphosphat\n2. Ornithin-Carbamyltransferase: Carbamylphosphat + Ornithin -> Citrullin\n3. Argininosuccinat-Synthase: Citrullin + Aspartat + ATP -> Argininosuccinat\n4. Argininosuccinatlyase: Argininosuccinat -> Fumarat + Arginin\n5. Arginase: Arginin + H2O -> Ornithin + Harnstoff\n- Defekte führen zu Hyperammonämie"
    },
    {
      "id": 22,
      "category": "Aminosäurestoffwechsel",
      "question": "Wie wird Phenylalanin zu Tyrosin umgesetzt?",
      "answer": "- Phenylalanin + O2 -> Tyrosin (Phenylalanin-Hydroxylase, Tetrahydrobiopterin)\n- Tyrosin ist Ausgangsstoff für: Dopamin, Noradrenalin, Adrenalin, Melanin\n- Phenylketonurie: Defekt der Phenylalanin-Hydroxylase\n- Parkinson: Dopaminmangel\n- Albinismus: kein Melanin"
    },
    {
      "id": 23,
      "category": "Hämoglobin",
      "question": "Wie ist Hämoglobin aufgebaut und wie bindet es Sauerstoff?",
      "answer": "- Tetramer: 2α + 2β Untereinheiten, jeweils mit Häm (Porphyrinring + Fe2+)\n- Bindung von O2 ist reversibel und kooperativ\n- R-Zustand: hohe O2-Affinität (Oxy-Hämoglobin)\n- T-Zustand: niedrige O2-Affinität (Desoxy-Hämoglobin)\n- Bohr-Effekt: niedriger pH begünstigt T-Zustand\n- 2,3-BPG stabilisiert T-Zustand\n- Sigmoide Bindungskurve"
    },
    {
      "id": 24,
      "category": "Glucosestoffwechsel",
      "question": "Wie läuft der Pentosephosphatweg (oxidative Phase) ab?",
      "answer": "1. Glucose-6-Phosphat-Dehydrogenase: Glucose-6-P + NADP+ → 6-Phosphogluconolacton + NADPH\n2. Lactonase: 6-Phosphogluconolacton + H2O → 6-Phosphogluconat\n3. 6-Phosphogluconat-Dehydrogenase: 6-Phosphogluconat + NADP+ → Ribulose-5-P + NADPH + CO2\n4. Ribulose-5-Phosphat-Isomerase: Ribulose-5-P → Ribose-5-P\n- Produkte: 2 NADPH, 1 CO2, Ribose-5-P (für Nukleotidsynthese)\n- Reguliert durch NADPH/NADP+-Verhältnis"
    },
    {
      "id": 25,
      "category": "Glucosestoffwechsel",
      "question": "Was ist die Funktion der nicht-oxidativen Phase des Pentosephosphatwegs?",
      "answer": "- Interkonvertierung von Zuckern (C3–C7) via Transketolase und Transaldolase\n- Transketolase: überträgt 2C-Einheiten (Coenzym Thiaminpyrophosphat)\n- Transaldolase: überträgt 3C-Einheiten\n- Erlaubt Rückführung von Ribulose-5-P in Glykolyse (als F6P und GAP)\n- Ermöglicht Anpassung an zellulären Bedarf: NADPH, Ribose-5-P oder ATP"
    },
    {
      "id": 26,
      "category": "Glucosestoffwechsel",
      "question": "Wie wird Fructose in der Leber abgebaut (Fructolyse)?",
      "answer": "1. Fructokinase: Fructose + ATP → Fructose-1-Phosphat + ADP\n2. Aldolase B: Fructose-1-P → Glycerinaldehyd + DHAP\n3. Glycerinaldehyd-Kinase: Glycerinaldehyd + ATP → Glycerinaldehyd-3-P\n- DHAP und GAP fließen in die Glykolyse ein\n- Unterschied zu Glucose: Schritt vor PFK-1 (kein allosterisches Limit)\n- Hereditäre Fructoseintoleranz: Aldolase-B-Defekt → Fructose-1-P Akkumulation → Hypoglykämie, Leberschäden"
    },
    {
      "id": 27,
      "category": "Glucosestoffwechsel",
      "question": "Wie wird Galaktose zu Glucose-1-Phosphat umgewandelt (Leloir-Weg)?",
      "answer": "1. Galaktokinase: Galaktose + ATP → Galaktose-1-P\n2. Galaktose-1-P-Uridyltransferase: Galaktose-1-P + UDP-Glucose → Glucose-1-P + UDP-Galaktose\n3. UDP-Galaktose-4-Epimerase: UDP-Galaktose → UDP-Glucose\n- Glucose-1-P → Glucose-6-P (Phosphoglucomutase) → Glykolyse\n- Klassische Galaktosämie: Defekt der Uridyltransferase → Galaktose-1-P Akkumulation → Katarakt, Leberzirrhose"
    },
    {
      "id": 28,
      "category": "Glykogenstoffwechsel",
      "question": "Wie wird Glykogen synthetisiert?",
      "answer": "- Glucose-6-P → Glucose-1-P (Phosphoglucomutase)\n- Glucose-1-P + UTP → UDP-Glucose + PPi (UDP-Glucose-Pyrophosphorylase)\n- Glykogensynthase: überträgt Glucose von UDP-Glucose auf wachsende Kette (α-1,4-glycosidisch)\n- Branching-Enzym: überträgt 6–8 Glucose-Einheiten auf C6-OH (α-1,6-Verzweigung)\n- Glycogenin: Starterprotein (autoglykosyliert sich selbst)\n- Aktivierung durch Insulin: Dephosphorylierung der Glykogensynthase"
    },
    {
      "id": 29,
      "category": "Glykogenstoffwechsel",
      "question": "Wie wird Glykogen abgebaut (Glykogenolyse)?",
      "answer": "- Glykogenphosphorylase: Glucose-1-P + Pi abspalten (α-1,4-glycosidische Bindungen)\n- Debranching-Enzym: überträgt 3 Reste auf freies Ende + hydrolysiert α-1,6-Bindung → freie Glucose\n- Glucose-1-P → Glucose-6-P (Phosphoglucomutase)\n- Leber: Glucose-6-Phosphatase → freie Glucose (ins Blut)\n- Muskel: keine Glucose-6-Phosphatase → G6P geht in Glykolyse\n- Aktivierung durch Glucagon/Adrenalin (PKA-Kaskade)"
    },
    {
      "id": 30,
      "category": "Glykogenstoffwechsel",
      "question": "Wie reguliert Glucagon/Adrenalin den Glykogenstoffwechsel?",
      "answer": "- Glucagon (Leber) / Adrenalin (Leber + Muskel) binden an G-Protein-gekoppelten Rezeptor\n- Adenylatzyklase aktiviert → cAMP steigt → PKA wird aktiv\n- PKA phosphoryliert:\n  1. Phosphorylase-Kinase (aktiv) → Glykogenphosphorylase-b → a (aktiv)\n  2. Glykogensynthase (inaktiv)\n- Insulin wirkt gegenteilig: Phosphatasen → Dephosphorylierung\n- Amplifikationskaskade: kleines Signal → große Stoffwechselantwort"
    },
    {
      "id": 31,
      "category": "Lipidstoffwechsel",
      "question": "Wie verläuft die β-Oxidation einer gesättigten Fettsäure?",
      "answer": "- Aktivierung: Fettsäure + CoA + ATP → Acyl-CoA + AMP + PPi (Acyl-CoA-Synthetase)\n- Transport: Carnitin-Shuttle (Carnitin-Acyltransferase I+II) über innere Mitochondrienmembran\n- Pro Zyklus (4 Schritte):\n  1. Acyl-CoA-Dehydrogenase: → trans-Δ2-Enoyl-CoA + FADH2\n  2. Enoyl-CoA-Hydratase: + H2O → L-3-Hydroxyacyl-CoA\n  3. 3-Hydroxyacyl-CoA-Dehydrogenase: → 3-Ketoacyl-CoA + NADH\n  4. Thiolase: + CoA → Acetyl-CoA + Acyl-CoA (verkürzt um 2C)\n- Palmitoyl-CoA (C16): 7 Zyklen → 8 Acetyl-CoA, 7 FADH2, 7 NADH"
    },
    {
      "id": 32,
      "category": "Lipidstoffwechsel",
      "question": "Was ist Ketogenese und wann findet sie statt?",
      "answer": "- Ort: Leber-Mitochondrien, bei Hunger, Diabetes mellitus Typ 1\n- Ursache: Acetyl-CoA übersteigt Oxalacetat-Kapazität des Citratzyklus\n1. Thiolase: 2 Acetyl-CoA → Acetoacetyl-CoA\n2. HMG-CoA-Synthase: + Acetyl-CoA → HMG-CoA\n3. HMG-CoA-Lyase: → Acetoacetat + Acetyl-CoA\n4. β-Hydroxybutyrat-Dehydrogenase: Acetoacetat → β-Hydroxybutyrat\n- Ketonkörper: Acetoacetat, β-Hydroxybutyrat, Aceton\n- Nutzung: Herz, Niere, Gehirn (bei längerem Fasten)"
    },
    {
      "id": 33,
      "category": "Lipidstoffwechsel",
      "question": "Wie werden Fettsäuren synthetisiert?",
      "answer": "- Ort: Cytosol; Acyl-Carrier-Protein (ACP) trägt wachsende Kette\n- Start: Acetyl-CoA → Malonyl-CoA (Acetyl-CoA-Carboxylase, Biotin, rate-limiting)\n- Fettsäuresynthase (FAS): multienzym Komplex, 7 aktive Domänen\n- Pro Verlängerungsrunde (2C):\n  1. Kondensation: Acetyl + Malonyl → Acetoacetyl-ACP + CO2\n  2. Reduktion: NADPH\n  3. Dehydratisierung\n  4. Reduktion: NADPH\n- Produkt: Palmitoyl-ACP (C16) nach 7 Zyklen\n- Regulation: Citrat aktiviert ACC; Palmitoyl-CoA hemmt ACC"
    },
    {
      "id": 34,
      "category": "Lipidstoffwechsel",
      "question": "Was sind Eicosanoide und wie werden sie gebildet?",
      "answer": "- Abgeleitet von C20-Fettsäuren (v.a. Arachidonsäure)\n- Arachidonsäure freigesetzt durch Phospholipase A2 aus Membranphospholipiden\n- COX-Weg (Cyclooxygenase): → Prostaglandine, Thromboxane\n  - COX-1: konstitutiv; COX-2: induzierbar (Entzündung)\n  - Aspirin: irreversible Acetylierung von COX (hemmt Prostaglandinsynthese)\n- LOX-Weg (Lipoxygenase): → Leukotriene (Entzündung, Bronchospasmus)\n- Funktion: lokale Gewebshormone (Schmerz, Entzündung, Thrombozytenaggregation)"
    },
    {
      "id": 35,
      "category": "Lipidstoffwechsel",
      "question": "Wie wird Cholesterin transportiert und reguliert?",
      "answer": "- Transport als Lipoproteine: LDL, HDL, VLDL, Chylomikronen\n- LDL: transportiert Cholesterin zur Peripherie (ApoB-100-Rezeptor)\n- HDL: reverser Cholesterintransport zur Leber\n- LDL-Rezeptor-Aufnahme: Endozytose → Lysosom → freies Cholesterin\n- Regulation HMG-CoA-Reduktase:\n  - Transkriptionell: SREBP (niedrig Cholesterin → aktiv)\n  - Posttranslational: Phosphorylierung (AMPK hemmt)\n  - Statine: kompetitive Inhibitoren der HMG-CoA-Reduktase"
    },
    {
      "id": 36,
      "category": "Aminosäurestoffwechsel",
      "question": "Wie werden Aminogruppen für die Harnstoffsynthese gesammelt?",
      "answer": "- Transaminierung: Aminosäure + α-Ketoglutarat → α-Ketosäure + Glutamat (Aminotransferase, PLP)\n- Oxidative Desaminierung: Glutamat + NAD+ → α-Ketoglutarat + NH4+ (Glutamat-Dehydrogenase)\n- NH4+ ist toxisch → muss in Harnstoff umgewandelt werden\n- Glucose-Alanin-Zyklus: Muskel sendet Alanin zur Leber\n  - Muskel: Pyruvat + Glutamat → Alanin + α-Ketoglutarat\n  - Leber: Alanin → Pyruvat + NH4+ → Harnstoff + Gluconeogenese"
    },
    {
      "id": 37,
      "category": "Aminosäurestoffwechsel",
      "question": "Welche Aminosäuren sind glukogen, welche ketogen?",
      "answer": "- Glukogen (→ Pyruvat oder Citratzyklus-Intermediate → Gluconeogenese):\n  Ala, Arg, Asn, Asp, Cys, Gln, Glu, Gly, His, Met, Pro, Ser, Thr, Val\n- Ketogen (→ Acetyl-CoA oder Acetoacetyl-CoA → Ketonkörper):\n  Leu, Lys (rein ketogen)\n- Sowohl gluko- als auch ketogen:\n  Ile, Phe, Tyr, Trp, Thr\n- Wichtig: Leucin und Lysin können nicht für Gluconeogenese genutzt werden"
    },
    {
      "id": 38,
      "category": "Aminosäurestoffwechsel",
      "question": "Was ist die Bedeutung von Pyridoxalphosphat (PLP) im Aminosäurestoffwechsel?",
      "answer": "- PLP (Vitamin B6) ist Coenzym für Transaminasen (z.B. ALAT, ASAT)\n- Reaktionsmechanismus: Schiff-Base zwischen PLP und Aminosäure\n- ALAT (Alanin-Aminotransferase): Alanin + α-KG ↔ Pyruvat + Glutamat (Lebermarker)\n- ASAT (Aspartat-Aminotransferase): Aspartat + α-KG ↔ Oxalacetat + Glutamat (Herzmarker)\n- Weitere PLP-Reaktionen: Decarboxylierungen (DOPA → Dopamin), Racemisierungen\n- PLP-Mangel: Pellagra-ähnliche Symptome, Anfälle"
    },
    {
      "id": 39,
      "category": "Aminosäurestoffwechsel",
      "question": "Wie wird Tryptophan zu Niacin (NAD+) abgebaut?",
      "answer": "- Tryptophan → Kynurenin (Tryptophan-2,3-Dioxygenase)\n- Kynurenin → 3-Hydroxykynurenin → 3-Hydroxyanthranilat\n- → Quinolinat → Nicotinat → NAD+\n- 60 mg Tryptophan liefern ~1 mg Niacin\n- Niacin (Vitamin B3) ist Bestandteil von NAD+/NADH und NADP+/NADPH\n- Mangel: Pellagra (Dermatitis, Diarrhö, Demenz – 3 Ds)\n- Indol-Seitenweg: Tryptophan → Serotonin → Melatonin"
    },
    {
      "id": 40,
      "category": "Nucleotidstoffwechsel",
      "question": "Wie erfolgt die De-novo-Synthese von Purinnucleotiden?",
      "answer": "- Start: Ribose-5-P → PRPP (Phosphoribosyl-Pyrophosphat, rate-limiting)\n- Aufbau des Purinrings schrittweise auf PRPP (10 Enzymschritte)\n- Kohlenstoffquellen: Glycin, Aspartat, Glutamin, Formylgruppen (Tetrahydrofolat), CO2\n- Produkt: IMP (Inosinmonophosphat) → AMP oder GMP\n- Reguliert durch Rückkopplung: AMP/GMP hemmen eigene Synthese\n- Glutaminantagonisten (z.B. Azaserin) hemmen Purinsynthese (Chemotherapie)"
    },
    {
      "id": 41,
      "category": "Nucleotidstoffwechsel",
      "question": "Wie werden Purine abgebaut und was ist Gicht?",
      "answer": "- AMP → IMP → Hypoxanthin → Xanthin → Harnsäure (Xanthinoxidase)\n- GMP → Guanin → Xanthin → Harnsäure\n- Harnsäure ist schwer löslich → Urat-Kristalle in Gelenken → Gicht\n- Allopurinol: kompetitiver Inhibitor der Xanthinoxidase (Gichttherapie)\n- Febuxostat: nicht-kompetitiver Inhibitor\n- Lesch-Nyhan-Syndrom: HGPRT-Defekt → kein Salvage-Weg → Harnsäureakkumulation"
    },
    {
      "id": 42,
      "category": "Nucleotidstoffwechsel",
      "question": "Wie werden Pyrimidinnucleotide synthetisiert?",
      "answer": "- Im Gegensatz zu Purinen: Pyrimidinring erst aufgebaut, dann an Ribose geknüpft\n- Carbamoylphosphat-Synthase II (Cytosol): CO2 + Glutamin + ATP → Carbamoylphosphat\n- + Aspartat → Carbamoylaspartat → Dihydroorotat → Orotat\n- Orotat + PRPP → OMP → UMP (decarboxyliert)\n- UMP → UDP → UTP → CTP\n- Hemmung durch PALA (N-Phosphonoacetyl-L-Aspartat) → Chemotherapie\n- CAD: trifunktionelles Enzym (CPS II + ATCase + DHOase)"
    },
    {
      "id": 43,
      "category": "Enzyme",
      "question": "Was sind Coenzyme und wie unterscheiden sie sich von Cofaktoren?",
      "answer": "- Cofaktoren: nicht-Protein-Komponenten (Metallionen oder organische Moleküle)\n- Coenzyme: organische Cofaktoren, meist Vitaminderivate\n- Prosthetische Gruppe: fest (kovalent) gebunden, z.B. FAD, Häm\n- Lose gebundene Coenzyme (Cosubstrate): NAD+, NADP+, CoA, ATP\n- Wichtige Coenzyme und Vitamine:\n  NAD+/NADH (B3), FAD/FADH2 (B2), CoA (B5), TPP (B1), PLP (B6), Biotin (B7), FH4 (B9), Cobalamin (B12)"
    },
    {
      "id": 44,
      "category": "Enzyme",
      "question": "Was ist die Michaelis-Menten-Kinetik?",
      "answer": "- v = (vmax × [S]) / (Km + [S])\n- vmax: Maximalgeschwindigkeit bei Substratsättigung\n- Km: Michaelis-Konstante = [S] bei v = vmax/2; Maß für Substrataffinität (kleiner Km = höhere Affinität)\n- Lineweaver-Burk-Plot (Doppelreziprokplot): 1/v gegen 1/[S]\n  - x-Achsenabschnitt: -1/Km; y-Achsenabschnitt: 1/vmax\n- Kompetitiver Inhibitor: Km↑, vmax gleich (parallele y-Achsen-Schnitt im LB-Plot)\n- Unkompetitiver: Km↓, vmax↓ (parallele Geraden im LB-Plot)"
    },
    {
      "id": 45,
      "category": "Enzyme",
      "question": "Was ist kooperative Kinetik und wann tritt sie auf?",
      "answer": "- Sigmoide (S-förmige) Sättigungskurve statt hyperbolisch\n- Hill-Koeffizient n > 1: positive Kooperativität (Bindung eines Liganden erleichtert weitere Bindung)\n- Hill-Gleichung: v = vmax × [S]^n / (K0,5^n + [S]^n)\n- Beispiele: Hämoglobin (O2-Bindung), Phosphofructokinase, Aspartattranscarbamoylase\n- Vorteil: steiles An/Aus-Schaltverhalten bei geringer Konzentrationsänderung\n- K0,5 analog zu Km (Konzentration bei halbmaximaler Aktivität)"
    },
    {
      "id": 46,
      "category": "Proteine",
      "question": "Was sind posttranslationale Modifikationen?",
      "answer": "- Phosphorylierung: Ser, Thr, Tyr durch Kinasen; reguliert Aktivität, Lokalisation\n- Glykosylierung: N-glykosidisch (Asn) oder O-glykosidisch (Ser/Thr); ER und Golgi\n- Ubiquitinierung: markiert Proteine für proteasomalen Abbau (26S-Proteasom)\n- Acetylierung: N-Terminus oder Lys; z.B. Histonacetylierung → Transkriptionsaktivierung\n- Methylierung: Lys, Arg; Histonmodifikation\n- Sumoylierung: SUMO-Anhängung; reguliert Kernproteine\n- Lipidmodifikationen: Myristylierung, Palmitoylierung, GPI-Anker"
    },
    {
      "id": 47,
      "category": "Proteine",
      "question": "Wie funktioniert die Signalpeptid-gesteuerte Proteinsortierung?",
      "answer": "- Signalpeptid (N-terminal, 15–30 hydrophobe AS) dirigiert Proteine ins ER-Lumen\n- SRP (Signal Recognition Particle) erkennt Signalpeptid → RER-Bindung\n- Co-translationale Translokation durch Translokon (Sec61-Komplex)\n- Signalpeptid wird durch Signalpeptidase abgespalten\n- ER → Golgi → Sekretionsweg oder Lysosomen (Mannose-6-P Markierung)\n- Kernimport: Kernlokalisationssignal (NLS) + Importin\n- Mitochondrien: N-terminale Präsequenz + TOM/TIM-Komplex"
    },
    {
      "id": 48,
      "category": "Citrat Zyklus & Zellatmung",
      "question": "Was sind anaplerotische Reaktionen im Citratzyklus?",
      "answer": "- Anaplerotisch = auffüllend (ergänzen Citratzyklus-Intermediate)\n- Wichtigste Reaktion: Pyruvat-Carboxylase: Pyruvat + CO2 + ATP → Oxalacetat\n  - Aktiviert durch Acetyl-CoA (Signal: genug Substrat vorhanden)\n- Phosphoenolpyruvat-Carboxylase (Pflanzen, Bakterien)\n- Propionyl-CoA → Succinyl-CoA (aus ungeradzahligen Fettsäuren)\n- Glutamat → α-Ketoglutarat (Transaminierung)\n- Isocitrat-Lyase (Glyoxylatzyklus, Bakterien/Pflanzen): kein Kohlenstoffverlust"
    },
    {
      "id": 49,
      "category": "Citrat Zyklus & Zellatmung",
      "question": "Wie funktioniert die Atmungskettenhemmung und welche Entkoppler gibt es?",
      "answer": "- Elektronentransportkette (ETC): Komplex I-IV; Protonengradient treibt ATP-Synthase\n- Entkoppler: zerstören Protonengradient ohne ATP zu produzieren → Energie als Wärme\n  - DNP (2,4-Dinitrophenol): lipophile schwache Säure, transportiert H+ durch Membran\n  - UCP1 (Thermogenin): braunes Fettgewebe, Säuglinge, Winterschläfer\n- ETC-Inhibitoren:\n  - Komplex I: Rotenon, Amytal\n  - Komplex III: Antimycin A\n  - Komplex IV: Cyanid (CN-), CO, H2S\n  - Oligomycin: hemmt ATP-Synthase (F0-Kanal)\n- ATP/ADP-Kontrolle: Regulation des Protonenflusses"
    },
    {
      "id": 50,
      "category": "Citrat Zyklus & Zellatmung",
      "question": "Wie viel ATP liefert die vollständige Oxidation von Glucose?",
      "answer": "- Glykolyse: 2 ATP (netto) + 2 NADH (zytoplasmatisch)\n- Pyruvat-Dehydrogenase: 2 NADH (mitochondrial) + 2 CO2\n- Citratzyklus (×2): 6 NADH + 2 FADH2 + 2 GTP\n- Atmungskette: NADH → ~2,5 ATP; FADH2 → ~1,5 ATP\n- Zytosol-NADH (via Malat-Aspartat-Shuttle): ~2,5 ATP\n- Gesamtbilanz: ~30–32 ATP pro Glucose (theoretisch)\n- Früher: 36–38 ATP (veraltet, nicht stöchiometrisch)"
    },
    {
      "id": 51,
      "category": "Regulation des Glucosestoffwechsels",
      "question": "Wie wirkt Insulin auf den Glukosestoffwechsel?",
      "answer": "- Insulin bindet an Tyrosinkinase-Rezeptor → Autophosphorylierung → IRS-1/2\n- PI3K → PIP3 → PDK1 → Akt/PKB\n- Effekte:\n  - GLUT4-Translokation zur Plasmamembran (Muskel, Fettgewebe)\n  - Glykogensynthase aktiviert (Dephosphorylierung)\n  - Glykolyse ↑ (PFK-2 aktiv → F2,6-BP ↑)\n  - Gluconeogenese ↓ (PEPCK-Transkription ↓)\n  - Fettsäuresynthese ↑ (SREBP-1c aktiviert ACC)\n  - Proteinbiosynthese ↑ (mTORC1)"
    },
    {
      "id": 52,
      "category": "Regulation des Glucosestoffwechsels",
      "question": "Wie wirkt Glucagon auf den Stoffwechsel?",
      "answer": "- Glucagon (aus α-Zellen des Pankreas) bei Hypoglykämie\n- Bindet an GPCR → Gs → Adenylatzyklase → cAMP ↑ → PKA\n- Leber:\n  - Glykogenolyse ↑ (Phosphorylase-Aktivierung)\n  - Gluconeogenese ↑ (Transkription von PEPCK, G6Pase)\n  - Glykolyse ↓ (PFK-2 inaktiv → F2,6-BP ↓)\n  - Fettoxidation ↑\n- Keine Wirkung auf Muskel (kein Glucagonrezeptor im Muskel)\n- Gegenspieler: Insulin"
    },
    {
      "id": 53,
      "category": "Lipide & Membranen",
      "question": "Was sind Phospholipide und wie sind Membranen aufgebaut?",
      "answer": "- Phospholipide: Glycerophospholipide (Glycerol + 2 Fettsäuren + Phosphat + Kopfgruppe)\n- Häufige Köpfgruppen: Cholin (PC), Ethanolamin (PE), Serin (PS), Inositol (PI)\n- Lipid-Doppelschicht: amphiphil → hydrophobe Schwänze innen, hydrophile Köpfe außen\n- Fluidität abhängig von:\n  - Temperatur, Kettenlänge, Sättigungsgrad\n  - Cholesterin: bei niedrigen T → Fluidität ↑ (verhindert kristalline Phase); bei hohen T → ↓\n- Membranproteine: integral (Transmembran) vs. peripher\n- Lipid-Rafts: Mikrodomänen mit Sphingolipiden + Cholesterin"
    },
    {
      "id": 54,
      "category": "Lipide & Membranen",
      "question": "Was ist die Funktion von Sphingolipiden?",
      "answer": "- Sphingolipide: Aminoalkohol Sphingosin + Fettsäure → Ceramid (Grundstruktur)\n- Ceramid + Phosphocholin → Sphingomyelin (Myelinscheiden)\n- Ceramid + Glucose/Galactose → Cerebrosid (Glykolipide)\n- Ceramid + Oligosaccharide → Ganglioside (neuronale Signalgebung)\n- Ceramid selbst: proapoptotisches Signalmolekül\n- Sphingomyelinase: spaltet Sphingomyelin → Ceramid + Phosphocholin\n- Niemann-Pick-Krankheit: Sphingomyelinase-Defekt → Sphingomyelin-Akkumulation"
    },
    {
      "id": 55,
      "category": "Proteine",
      "question": "Welche Techniken gibt es zur Strukturaufklärung von Proteinen?",
      "answer": "- Röntgenkristallographie: Kristall → Beugungsmuster → 3D-Struktur (hohe Auflösung)\n- NMR-Spektroskopie: Lösung; bis ~50 kDa; Dynamik sichtbar\n- Kryo-Elektronenmikroskopie (Cryo-EM): große Komplexe; schnell aufgestiegen\n- Massenspektrometrie: Molekülmasse, Sequenzierung (MALDI, ESI)\n- Circulardichroismus (CD): Sekundärstrukturgehalt; schnell\n- AlphaFold2: KI-basierte Strukturvorhersage (Nobelpreis 2024 zugehörig)"
    },
    {
      "id": 56,
      "category": "Hämoglobin",
      "question": "Was ist Myoglobin und wie unterscheidet es sich von Hämoglobin?",
      "answer": "- Myoglobin: monomer, 1 Häm-Gruppe; in Muskel\n- Hyperbole O2-Bindungskurve (kein Kooperativität)\n- P50 (O2-Partialdruck bei 50% Sättigung): ~2,8 mmHg (niedriger als Hb ~26 mmHg)\n- Nimmt O2 von Hb auf und speichert es im Muskel\n- Kein Bohr-Effekt, keine BPG-Bindung\n- Bei Muskelschaden: Myoglobin im Urin (Myoglobinurie) → Nierenschaden\n- Strukturell: 8 Helices (A–H), Häm zwischen His F8 (proximal) und His E7 (distal)"
    },
    {
      "id": 57,
      "category": "Hämoglobin",
      "question": "Welche Hämoglobinopathien gibt es?",
      "answer": "- Sichelzellanämie: HbS (Glu6Val in β-Kette); HbS polymerisiert im Desoxyzustand\n  → Sichelförmige Erythrozyten → Hämolyse, Vasookklusion\n  - Malariaschutz bei Heterozygoten (Selektionsvorteil)\n- Thalassämien: verminderte Synthese von α- oder β-Globinketten\n  - α-Thalassämie: HBA1/2-Gen-Deletionen\n  - β-Thalassämie: HBB-Mutationen (Stopp, Splicing, Promotor)\n- HbF (fetales Hb): 2α + 2γ; höhere O2-Affinität als HbA\n- Methämoglobin: Fe3+ statt Fe2+; kein O2-Transport; reduziert durch Methämoglobinreduktase"
    },
    {
      "id": 58,
      "category": "Enzyme",
      "question": "Was ist der Unterschied zwischen reversiblen und irreversiblen Inhibitoren?",
      "answer": "- Reversible Inhibitoren: nicht-kovalente Bindung an Enzym\n  - Kompetitiv: am aktiven Zentrum; durch [S]-Erhöhung überwindbar\n  - Unkompetitiv: nur an ES-Komplex; z.B. bestimmte Herbizide\n  - Nicht-kompetitiv (gemischt): an E und ES; vmax ↓ unwiderruflich\n- Irreversible Inhibitoren: kovalente Bindung → Enzym dauerhaft inaktiv\n  - Organophosphate: Acetylcholinesterase (Nervenkampfstoffe, Insektizide)\n  - Aspirin: COX-1/COX-2 Acetylierung\n  - Penicillin: Transpeptidase (Zellwandsynthese Bakterien)\n  - TPCK, TLCK: Chymotrypsin/Trypsin (Forschung)"
    },
    {
      "id": 59,
      "category": "Glucosestoffwechsel",
      "question": "Was sind die Schlüsselenzyme der Glykolyse und ihre Regulationspunkte?",
      "answer": "- Hexokinase (HK): irreversibel; hemmt sich durch G6P (Produkthemmung)\n  - Glucokinase (Leber, Pankreas): kein G6P-Feedback, hoher Km → Glucosesensor\n- Phosphofructokinase-1 (PFK-1): wichtigstes Regulationsenzym\n  - Aktivatoren: AMP, ADP, Fructose-2,6-Bisphosphat (F2,6-BP)\n  - Inhibitoren: ATP, Citrat, NADH\n- Pyruvatkinase (PK):\n  - Aktiviert durch F1,6-BP (feed-forward)\n  - Inhibiert durch ATP, Alanin, Acetyl-CoA\n  - Leber-PK durch Glucagon/PKA phosphoryliert → inaktiv"
    },
    {
      "id": 60,
      "category": "Glucosestoffwechsel",
      "question": "Wie wird Pyruvat zu Acetyl-CoA oxidiert?",
      "answer": "- Pyruvat-Dehydrogenase-Komplex (PDC): im Mitochondrium-Matrix\n- 3 Enzyme + 5 Coenzyme:\n  1. E1 (Pyruvat-Decarboxylase, TPP): CO2 abgespalten, Hydroxyethyl-TPP\n  2. E2 (Dihydrolipoamid-Transacetylase, Lipoamid, CoA): Acetyl-CoA\n  3. E3 (Dihydrolipoamid-Dehydrogenase, FAD, NAD+): NADH\n- Regulierung:\n  - PDK (Kinase): phosphoryliert/inaktiviert E1 (hohe NADH, Acetyl-CoA, ATP)\n  - PDP (Phosphatase): aktiviert (Insulin, Ca2+, Mg2+)\n- Thiaminmangel: Beriberi (PDC-Funktion gestört)"
    },
    {
      "id": 61,
      "category": "Vitamins & Cofaktoren",
      "question": "Welche Vitamine sind wasserlöslich und welche Funktionen haben sie?",
      "answer": "- B1 (Thiamin → TPP): Decarboxylierungen (PDC, α-KGDC, Transketolase)\n- B2 (Riboflavin → FMN, FAD): Elektronen-Carrier in Redoxreaktionen\n- B3 (Niacin → NAD+, NADP+): wichtigster Elektronencarrier; Mangel: Pellagra\n- B5 (Pantothensäure → Coenzym A): Acyl-Gruppen-Übertragung\n- B6 (Pyridoxin → PLP): Transaminierungen, Decarboxylierungen\n- B7 (Biotin): CO2-Fixierung (Carboxylasen: ACC, Pyruvat-Carboxylase)\n- B9 (Folat → Tetrahydrofolat): C1-Übertragungen (Purine, Thymidin)\n- B12 (Cobalamin): Methylmalonyl-CoA-Mutase, Methionin-Synthase\n- C (Ascorbat): Antioxidans, Kollagensynthese (Prolin-Hydroxylase)"
    },
    {
      "id": 62,
      "category": "Vitamins & Cofaktoren",
      "question": "Welche Vitamine sind fettlöslich und was sind ihre Funktionen?",
      "answer": "- Vitamin A (Retinol): Sehzyklus (11-cis-Retinal + Opsin), Genregulation (RAR)\n- Vitamin D (Cholecalciferol): Calciumhomöostase; Synthese in Haut (UV), Aktivierung in Leber (25-OH) und Niere (1,25-(OH)2; Calcitriol)\n  - Zielgene: Calbindin, TRPV6 (Ca2+-Resorption im Darm)\n- Vitamin E (Tocopherol): lipophiles Antioxidans, schützt PUFA\n- Vitamin K (Phyllochinon): γ-Carboxylierung von Glutamatresten (Gerinnungsfaktoren II, VII, IX, X; Protein C, S)\n  - Warfarin: Antagonist von Vitamin K"
    },
    {
      "id": 63,
      "category": "Aminosäurestoffwechsel",
      "question": "Wie werden schwefelhaltige Aminosäuren metabolisiert?",
      "answer": "- Methionin: essenziell; Methylgruppendonor als S-Adenosylmethionin (SAM)\n  - SAM → SAH → Homocystein → Methionin (Vitamin B12, B9) oder Cystein (Transsulfurierung)\n- Homocysteinämie: Risikofaktor für Atherosklerose\n- Cystein: Biosynthese aus Homocystein + Serin (Cystathionin-β-Synthase, PLP)\n- Taurin: aus Cystein; Gallensäurekonjugation\n- Glutathion (γ-Glu–Cys–Gly): wichtigstes intrazelluläres Antioxidans\n  - Glutathionperoxidase: H2O2 + 2 GSH → GSSG + 2 H2O\n  - Glutathionreduktase: GSSG + NADPH → 2 GSH"
    },
    {
      "id": 64,
      "category": "Aminosäurestoffwechsel",
      "question": "Wie verlaufen die Biosynthesewege der Neurotransmitter?",
      "answer": "- Dopamin: Tyrosin → L-DOPA (Tyrosinhydroxylase, BH4) → Dopamin (DOPA-Decarboxylase, PLP)\n- Noradrenalin: Dopamin → Noradrenalin (Dopamin-β-Hydroxylase, Ascorbat)\n- Adrenalin: Noradrenalin → Adrenalin (PNMT, SAM)\n- Serotonin: Tryptophan → 5-HTP (Tryptophanhydroxylase) → Serotonin (AADC)\n  → Melatonin: Serotonin (Zirbeldrüse)\n- GABA: Glutamat → GABA (Glutamatdecarboxylase, PLP)\n- Acetylcholin: Cholin + Acetyl-CoA → ACh (Cholinacetyltransferase)"
    },
    {
      "id": 65,
      "category": "Regulation des Glucosestoffwechsels",
      "question": "Was ist AMPK und wie beeinflusst sie den Stoffwechsel?",
      "answer": "- AMPK (AMP-aktivierte Proteinkinase): zellulärer Energiesensor\n- Aktivierung durch AMP (und ADP), Phosphorylierung durch LKB1 und CaMKKβ\n- Aktivierung wenn ATP-Spiegel sinkt (Hunger, Bewegung, Metformin)\n- Katabole Wirkungen (aktiviert):\n  - Glykolyse ↑\n  - Fettsäureoxidation ↑ (Phosphorylierung/Hemmung von ACC → Malonyl-CoA ↓ → Carnitin-Shuttle aktiv)\n  - Glukoseaufnahme ↑ (GLUT4)\n- Anabole Wirkungen (gehemmt):\n  - Fettsäuresynthese ↓ (ACC inaktiviert)\n  - Cholesterinsynthese ↓ (HMG-CoA-Reduktase inaktiviert)\n  - Proteinbiosynthese ↓ (mTOR gehemmt)\n- Metformin: aktiviert AMPK indirekt"
    }
  ],
  "mc": [],
  "theory": [
    {
      "id": 1,
      "title": "Leben – Definition und Entstehung",
      "html": "\n    <h2>Leben – Definition und Entstehung</h2>\n    <p><strong>Leben</strong> ist kein einzelnes Merkmal, sondern ein Bündel charakteristischer Eigenschaften, das ein System als lebendig auszeichnet. Zu den zentralen Kriterien zählen:</p>\n    <ul>\n      <li><strong>Kompartimentierung:</strong> Eine physikalische Barriere (z.B. Membran) grenzt das System von der Umwelt ab und schafft einen definierten Innenraum mit eigenem pH-Wert, spezifischen Reaktionen und Molekülen. Gleichzeitig steht das System in Wechselwirkung mit der Umwelt.</li>\n      <li><strong>Stoffwechsel:</strong> Das System kann Stoffe aufnehmen, umwandeln und Energie gewinnen. Der Stoffwechsel passt sich an Umweltveränderungen an und ist selbstregulierend.</li>\n      <li><strong>Reproduktion &amp; Vererbung:</strong> Lebende Systeme können sich vermehren und genetische Information weitergeben.</li>\n      <li><strong>Wachstum, Entwicklung &amp; Differenzierung:</strong> Komplexere Lebewesen durchlaufen geordnete Entwicklungsprogramme.</li>\n      <li><strong>Evolutionäre Anpassung:</strong> Populationen verändern sich über Generationen durch Mutation und Selektion.</li>\n    </ul>\n\n    <hr>\n\n    <h3>Entstehung des Lebens</h3>\n    <p>Das Leben begann vor etwa <strong>3,8 Milliarden Jahren</strong>. Für seinen Ursprung gibt es mehrere Hypothesen:</p>\n    <ul>\n      <li><strong>Ursuppen-Theorie (Miller-Urey):</strong> Aus einer wässrigen Lösung einfacher Verbindungen (CH₄, NH₃, H₂O, H₂) entstanden unter Energieeinwirkung (UV-Licht, Blitze) erste komplexe Biomoleküle wie Aminosäuren und Nukleotide.</li>\n      <li><strong>Hydrothermale Schlote:</strong> An Tiefsee-Unterwasserschloten und tektonischen Störungszonen herrschten Bedingungen (Temperatur, pH-Gradient, Mineralien), die chemische Reaktionen und Konzentration von Molekülen begünstigt haben könnten.</li>\n      <li><strong>Panspermie-Hypothese:</strong> Bakterielles Leben oder seine Vorläufer wurden durch Kometen oder Meteoriten auf die Erde transportiert — damit wird der Ursprung ins Weltall verlagert, aber nicht erklärt.</li>\n    </ul>\n\n    <h3>Chemische Evolution</h3>\n    <p>Bei der <strong>chemischen Evolution</strong> entstanden schrittweise komplexere organische Moleküle aus einfachen Ausgangsverbindungen wie Alkoholen, organischen Säuren sowie Purinen und Pyrimidinen. Durch <strong>Polymerisierung</strong> bildeten sich erste Makromoleküle wie Proto-RNA oder Proto-Peptide.</p>\n\n    <h3>RNA-Welt und Entstehung des Stoffwechsels</h3>\n    <p>Die <strong>RNA-Welt-Hypothese</strong> postuliert, dass RNA der erste Informationsträger und zugleich Katalysator war. RNA-Moleküle (Ribozyme) konnten sich unter bestimmten Bedingungen selbst replizieren und primitive chemische Prozesse steuern — ein Bindeglied zwischen Stoffwechsel und Vererbung auf dem Weg zu frühen Prokaryoten. RNA ist jedoch instabil und empfindlich gegenüber RNasen; die langlebigere DNA übernahm später die Funktion des stabilen Informationsspeichers.</p>\n    <p>Die <strong>Kompartimentierung</strong> durch Fettsäuren bzw. Detergenzien war essenziell für die Entstehung eines geregelten Stoffwechsels: Erst abgegrenzte Räume ermöglichten gerichtete Reaktionen und den Aufbau von Konzentrationsgradienten. Ohne Enzyme sind nichtenzymatische Reaktionen kaum möglich; erst der Einsatz von Katalysatoren ermöglichte einen geordneten Stoffwechsel.</p>\n  "
    },
    {
      "id": 2,
      "title": "Elementare Zusammensetzung und molekulare Dimensionen",
      "html": "\n    <h2>Elementare Zusammensetzung des Menschen</h2>\n    <p>Der menschliche Körper besteht zu rund <strong>63 % aus Sauerstoff</strong> und <strong>10 % aus Wasserstoff</strong> — zusammen ergibt das etwa 73 % Wasser (H₂O), das mengenmäßig dominierende Biomolekül. Dazu kommen:</p>\n    <ul>\n      <li><strong>~20 % Kohlenstoff</strong> — das strukturelle Gerüst aller organischen Moleküle</li>\n      <li><strong>Makroelemente:</strong> N, Ca, P, S, Cl, Na, Mg</li>\n      <li><strong>Spurenelemente (Mikroelemente):</strong> Fe, Zn, Cu, Mn, I, B, Co, Se, Cr, Mo</li>\n    </ul>\n\n    <hr>\n\n    <h3>Zelltypen: Prokaryonten und Eukaryonten</h3>\n    <p>Alle Lebewesen lassen sich in zwei fundamentale Zelltypen einteilen:</p>\n    <table>\n      <thead><tr><th>Merkmal</th><th>Prokaryonten</th><th>Eukaryonten</th></tr></thead>\n      <tbody>\n        <tr><td>Zellkern</td><td>Nein (Nucleoid)</td><td>Ja (membranumhüllt)</td></tr>\n        <tr><td>Organellen</td><td>Keine membranumhüllten</td><td>ER, Golgi, Mitochondrien, …</td></tr>\n        <tr><td>Typische Strukturen</td><td>Pili, Plasmide, Flagellum, Kapsel, Zellwand</td><td>Zytoskelett, Ribosomen (80S)</td></tr>\n        <tr><td>Beispiele</td><td>Bakterien, Archaeen</td><td>Pilze, Pflanzen, Tiere</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Phylogenetischer Baum des Lebens</h3>\n    <p>Aus einem gemeinsamen Vorfahren (LUCA – Last Universal Common Ancestor) entstanden zwei Hauptäste: <strong>Eubakterien</strong> und <strong>Archaeen</strong>. Aus einem Zweig der Archaeen gingen später durch Endosymbiose die <strong>Eukaryoten</strong> hervor. Die Endosymbionten-Hypothese erklärt die Entstehung von Mitochondrien (aus α-Proteobakterien) und Chloroplasten (aus Cyanobakterien) durch Aufnahme in eine Wirtszelle.</p>\n\n    <hr>\n\n    <h3>Molekulare Dimensionen</h3>\n    <p>Biologische Moleküle und Strukturen erstrecken sich über viele Größenordnungen:</p>\n    <ul>\n      <li><strong>Zellorganellen:</strong> ~1 µm (10⁰ µm)</li>\n      <li><strong>Makromoleküle (Proteine, DNA):</strong> ~10³ Da bis 10⁶ Da</li>\n      <li><strong>Monomereinheiten:</strong> ~10⁶ Da (z.B. größere Untereinheiten)</li>\n      <li><strong>Mikromoleküle (Cofaktoren, Metabolite):</strong> ~10² bis 10³ Da</li>\n    </ul>\n    <p>Als Referenz gilt: Das Auge enthält ca. <strong>6 Millionen Zapfen</strong> (Farbsehen) und <strong>120 Millionen Stäbchen</strong> (Dämmerungssehen) mit einer Auflösung von 2–4 Bogenminuten (≈ 0,5 mm auf 1 m bzw. ≈ 100 µm auf 25 cm).</p>\n  "
    },
    {
      "id": 3,
      "title": "Wasser, Bindungen und physikochemische Grundlagen",
      "html": "\n    <h2>Wasser und Bindungstypen</h2>\n    <p>Wasser ist das Lösungsmittel des Lebens. Seine besonderen Eigenschaften beruhen auf <strong>Wasserstoffbrückenbindungen</strong> (H-Brücken) zwischen dem schwach positiv geladenen H-Atom eines Donors und einem freien Elektronenpaar eines Akzeptors (O, N). Dabei gilt:</p>\n    <ul>\n      <li>H-Brücken-Länge: ~0,177 nm (kovalente O-H-Bindung: ~0,0965 nm)</li>\n      <li>Typische Donor-Akzeptor-Paare: Keto/Hydroxyl, Amino/Hydroxyl, Ether/Amino, komplementäre DNA-Basen, Peptidgruppen, Hydroxylgruppen in Polysacchariden</li>\n    </ul>\n\n    <h3>Weitere nichtkovalente Wechselwirkungen</h3>\n    <ul>\n      <li><strong>Dipol-Dipol-Wechselwirkungen:</strong> Zwischen permanenten Dipolen (z.B. C=O-Gruppen)</li>\n      <li><strong>London-Dispersionskräfte (van-der-Waals):</strong> Zwischen vorübergehend induzierten Dipolen; van-der-Waals-Radius H: ~120 pm, O: ~140 pm</li>\n      <li><strong>Hydrophober Effekt:</strong> Aliphatische Moleküle in Wasser lagern sich durch Entropiegewinn zusammen → Dispersion, Clusterbildung oder Mizellierung</li>\n      <li><strong>Ionenbindungen:</strong> Zwischen entgegengesetzt geladenen Gruppen</li>\n    </ul>\n\n    <h3>Kolligative Eigenschaften des Wassers</h3>\n    <p>Gelöste Stoffe verändern physikalische Eigenschaften des Wassers konzentrationsabhängig:</p>\n    <ul>\n      <li><strong>Siedepunktserhöhung</strong></li>\n      <li><strong>Gefrierpunktserniedrigung</strong></li>\n      <li><strong>Dampfdruckerniedrigung</strong></li>\n      <li><strong>Osmotischer Druck</strong></li>\n    </ul>\n\n    <h3>Diffusion, Osmose und Tonie</h3>\n    <p>Bei der <strong>Diffusion</strong> ist die Membran für Lösungsmittel und gelösten Stoff permeabel — Konzentrationsunterschiede werden ausgeglichen. Bei der <strong>Osmose</strong> ist die Membran nur für das Lösungsmittel (Wasser) permeabel, sodass Wasser in Richtung der höheren Solut-Konzentration strömt.</p>\n    <ul>\n      <li><strong>Isoton:</strong> Gleiche Konzentration intra- und extrazellulär → keine Nettobewegung</li>\n      <li><strong>Hyperton (außen):</strong> Höhere externe Konzentration → Wasser tritt aus der Zelle → Zelle schrumpft (Plasmolyse)</li>\n      <li><strong>Hypoton (außen):</strong> Niedrigere externe Konzentration → Wasser tritt in die Zelle → Zelle schwillt an (Hämolyse)</li>\n    </ul>\n\n    <hr>\n\n    <h3>Dissoziation, pH-Wert und Puffersysteme</h3>\n    <p><strong>Dissoziation</strong> (Deprotonierung) beschreibt die Abgabe von H⁺. Bei Wasser: H₂O ⇌ H⁺ + OH⁻. Die <strong>Dissoziationskonstante K</strong> gibt das Gleichgewichtsverhältnis von Edukten und Produkten an; die <strong>Säurekonstante Ka</strong> (bzw. pKa = −lg Ka) beschreibt die Stärke einer Säure.</p>\n    <p>Das <strong>Bicarbonat-Puffersystem</strong> des Blutes nutzt das Gleichgewicht CO₂/H₂CO₃/HCO₃⁻/CO₃²⁻. Kennwerte: pKa(Kohlensäure) ≈ 6,12, pKa(Hydrogencarbonat) ≈ 10,33. Der physiologische Blut-pH liegt bei ~7,4 und wird über die <strong>Henderson-Hasselbalch-Gleichung</strong> berechnet:</p>\n    <p><strong>pH = pKa + log ([A⁻] / [HA])</strong></p>\n    <p>Lunge (CO₂-Abatmung) und Niere (HCO₃⁻-Ausscheidung) regulieren den pH-Wert gemeinsam. Abweichungen führen zu Azidose (pH &lt; 7,35) oder Alkalose (pH &gt; 7,45).</p>\n  "
    },
    {
      "id": 4,
      "title": "Aminosäuren",
      "html": "\n    <h2>Aminosäuren – Bausteine der Proteine</h2>\n    <p>Aminosäuren (AS) sind <strong>organische Verbindungen</strong> mit einer Aminogruppe (–NH₂) und einer Carboxylgruppe (–COOH) am zentralen α-Kohlenstoff. Nur <strong>L-Aminosäuren</strong> sind proteinogen und biologisch aktiv — die D-Form kommt kaum in Proteinen vor (Ausnahme: Zellwand von Bakterien).</p>\n\n    <h3>Klassifikation nach Essenzialität</h3>\n    <ul>\n      <li><strong>Essenziell (9):</strong> His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val — müssen mit der Nahrung aufgenommen werden</li>\n      <li><strong>Bedingt essenziell (7):</strong> Asp, Arg, Cys, Glu, Gly, Pro, Tyr — in bestimmten Situationen (Wachstum, Krankheit) nicht ausreichend synthetisierbar</li>\n      <li><strong>Nicht essenziell (4):</strong> Ala, Asn, Gln, Ser — können vom Körper selbst hergestellt werden</li>\n    </ul>\n\n    <h3>Optische Aktivität und Stereochemie</h3>\n    <p>Aminosäuren (außer Glycin) besitzen ein <strong>chirales Zentrum</strong> am α-Kohlenstoff und drehen polarisiertes Licht — sie sind optisch aktiv. Die Analyse erfolgt mit einem <strong>Polarimeter</strong> (Aufbau: Lichtquelle → Polarisator → Proberohr → Analysator). L-AS drehen die Polarisationsebene gemäß ihrer jeweiligen optischen Aktivität.</p>\n\n    <h3>Nachweis von Aminosäuren</h3>\n    <ul>\n      <li><strong>Photometrie:</strong> Quantitativer Nachweis nach dem Lambert-Beer'schen Gesetz (Absorption proportional zur Konzentration)</li>\n      <li><strong>Biuret-Reaktion:</strong> Nachweis von Peptidbindungen (ab Tripeptid) → violett-blau</li>\n      <li><strong>Ninhydrin-Reaktion:</strong> Nachweis freier α-Aminogruppen → violett-purpurn (Ausnahme Prolin: gelb)</li>\n    </ul>\n\n    <hr>\n\n    <h3>Peptidbindung und Peptide</h3>\n    <p>Aminosäuren verknüpfen sich über <strong>Peptidbindungen</strong> (–CO–NH–), die durch Kondensation unter Wasserabspaltung entstehen. Wichtige Eigenschaften:</p>\n    <ul>\n      <li><strong>Planarität:</strong> Die Peptidbindung ist durch Mesomerie (~40 % Doppelbindungscharakter) starr und planar. Das Sauerstoffatom zieht Elektronendichte an.</li>\n      <li><strong>Torsionswinkel:</strong> Die Winkel Φ (um die N–Cα-Bindung) und Ψ (um die Cα–C-Bindung) sind prinzipiell frei drehbar, werden aber durch sterische Hinderung stark eingeschränkt und bestimmen die Sekundärstruktur (Ramachandran-Diagramm).</li>\n      <li><strong>Seitenketten</strong> liegen aufgrund sterischer Hinderung meist in trans-Position.</li>\n    </ul>\n    <p>Kombinationszahl: Dipeptide ~400, Tripeptide ~8000 mögliche Kombinationen; Proteine (z.B. aus 100 AS) hätten astronomisch viele Sequenzmöglichkeiten (~10¹³⁰). Beispiele für Peptide: Hormone (Insulin), Gifte (Toxine), Nahrungsmittelbestandteile. Beispiele für Proteine: Enzyme, Strukturproteine, Transportproteine.</p>\n\n    <h3>Glutathion (GSH/GSSG)</h3>\n    <p>Glutathion ist ein wichtiges Tripeptid (γ-Glu-Cys-Gly) mit antioxidativer Funktion. Die Oxidation GSH → GSSG (Disulfid) wird durch die <strong>Glutathion-Peroxidase</strong> katalysiert; die Rückreduktion GSSG → 2 GSH durch die <strong>Glutathion-Reduktase</strong> (benötigt NADPH).</p>\n  "
    },
    {
      "id": 5,
      "title": "Proteinstruktur",
      "html": "\n    <h2>Proteinstruktur – von der Sequenz zur Funktion</h2>\n    <p>Die Funktion eines Proteins ist direkt an seine dreidimensionale Struktur geknüpft, die sich auf vier Ebenen beschreiben lässt:</p>\n\n    <h3>Primärstruktur</h3>\n    <p>Die <strong>lineare Aminosäuresequenz</strong> vom N-Terminus (Amino-Ende) zum C-Terminus (Carboxy-Ende). Sie ist genetisch codiert und bestimmt alle übergeordneten Strukturebenen. Disulfidbrücken zwischen Cysteinresten (→ Cystin) stabilisieren die native Struktur, sind aber bei der Sequenzierung problematisch: Sie müssen zuerst durch Reduktion (z.B. Mercaptoethanol) gespalten und mit Iodacetat blockiert werden.</p>\n    <p>Methoden zur Sequenzbestimmung:</p>\n    <ul>\n      <li><strong>Sanger-Methode:</strong> Markierung und Identifikation des N-terminalen Endes</li>\n      <li><strong>Edman-Abbau:</strong> Schrittweise Abspaltung und Identifikation der N-terminalen Aminosäure</li>\n    </ul>\n\n    <h3>Sekundärstruktur</h3>\n    <p>Lokale, regelmäßige Faltungsmuster, stabilisiert durch H-Brücken zwischen Peptidbindungen:</p>\n    <ul>\n      <li><strong>α-Helix:</strong> Meist rechtsgängig, 3,6 AS/Windung, Ganghöhe 0,54 nm. Beständig und flexibel. Prolin wirkt als Helixbrecher. Typisch kurz (~3–6 Windungen).</li>\n      <li><strong>β-Faltblatt:</strong> 2–15 parallele oder antiparallele Stränge (6–10 AS je Strang). Wiederholungseinheit parallel: 0,65 nm, antiparallel: 0,7 nm. Eher weiche, flexible Filamente.</li>\n      <li><strong>Kollagen-Tripelhelix:</strong> Sehr stabil, kaum dehnbar. Drei linksgängige Helices umeinander gedreht.</li>\n      <li><strong>β-Turns und Schleifen:</strong> Verbinden Sekundärstrukturelemente.</li>\n    </ul>\n\n    <h3>Tertiärstruktur</h3>\n    <p>Die <strong>vollständige dreidimensionale Faltung</strong> einer Polypeptidkette, stabilisiert durch:</p>\n    <ul>\n      <li>Kovalente Bindungen: Disulfidbrücken (–S–S–)</li>\n      <li>Nichtkovalente Wechselwirkungen: Hydrophobe Wechselwirkungen, H-Brücken, Ionenbindungen, van-der-Waals-Kräfte</li>\n    </ul>\n    <p>Die grundlegende Regel: <strong>Hydrophobe Reste orientieren sich nach innen</strong>, hydrophile Reste nach außen (Wasser).</p>\n\n    <h3>Quartärstruktur</h3>\n    <p>Anordnung mehrerer Polypeptidketten (Untereinheiten/Protomere) zum <strong>Multimerprotein</strong>. Beispiel: Hämoglobin (2α + 2β-Untereinheiten) oder Antikörper (2 schwere + 2 leichte Ketten).</p>\n\n    <hr>\n\n    <h3>Keto-Enol-Tautomerie</h3>\n    <p>Keto- und Enol-Form besitzen dieselbe Summenformel aber unterschiedliche Strukturen — dieses Gleichgewicht ist wichtig für die Ausbildung von H-Brücken zwischen gegenüberliegenden Peptidkettenabschnitten und erklärt die H-Brückendonor/-Akzeptor-Eigenschaften von Nukleobasen.</p>\n  "
    },
    {
      "id": 6,
      "title": "Proteinfaltung, Denaturierung und Proteintrennung",
      "html": "\n    <h2>Proteinfaltung</h2>\n    <p>Wie findet ein Protein seine native Struktur? Das <strong>Levinthal-Paradoxon</strong> zeigt: Ein Protein mit 100 AS hätte bei rein zufälliger Konformationssuche astronomisch viele Möglichkeiten — eine rein zufällige Faltung wäre zeitlich unmöglich. Tatsächlich folgt die Faltung einem gerichteten, hierarchischen Prozess:</p>\n    <ol>\n      <li>Bildung lokaler Sekundärstrukturen (α-Helices, β-Faltblätter)</li>\n      <li>Hydrophobe Kollaps: Hydrophobe Bereiche orientieren sich nach innen</li>\n      <li>Wechselwirkungen zwischen Sekundärstrukturelementen → Tertiärstruktur</li>\n    </ol>\n    <p>Das <strong>Faltungstrichter-Modell</strong> beschreibt die freie Energie während der Faltung als trichterförmige Energielandschaft. <strong>Molten Globules</strong> sind kompakte, teils gefaltete Zwischenzustände mit nativem hydrophoben Kern, aber noch nicht fixierten Tertiärwechselwirkungen.</p>\n\n    <h3>Chaperone</h3>\n    <p><strong>Molekulare Chaperone</strong> (z.B. HSP70, GroEL/GroES) unterstützen die korrekte Faltung, verhindern Fehlaggregation und ermöglichen Proteintransport, Multimerbildung und Translokation. Wichtige stabilisierende Enzyme:</p>\n    <ul>\n      <li><strong>Protein-Disulfid-Isomerase:</strong> Katalysiert die Bildung und Umordnung von Disulfidbrücken</li>\n      <li><strong>Peptidyl-Prolyl-cis-trans-Isomerase:</strong> Beschleunigt die Isomerisierung von Peptidyl-Prolin-Bindungen</li>\n    </ul>\n\n    <h3>Fehlfaltung und Prionerkrankungen</h3>\n    <p>Fehlerhafte Proteinfaltung führt zu Aggregatbildung und schweren Erkrankungen:</p>\n    <ul>\n      <li><strong>Alzheimer:</strong> β-Amyloid-Plaques (aus APP-Prozessierung) und neurofibrilläre Tangles (fehlgefaltetes Tau-Protein)</li>\n      <li><strong>BSE/Scrapie/CJD:</strong> Prionerkrankungen — fehlgefaltete PrPSc-Proteine induzieren normale PrPC-Proteine zur Fehlfaltung. Scrapie ist die Prionerkrankung bei Schafen.</li>\n    </ul>\n\n    <hr>\n\n    <h3>Denaturierung von Proteinen</h3>\n    <p>Denaturierung bezeichnet den Verlust der nativen Sekundär-, Tertiär- und/oder Quartärstruktur unter Erhalt der Primärstruktur. Dadurch gehen biologische Aktivität und Funktion verloren. Ursachen:</p>\n    <ul>\n      <li>Physikalisch: Hitze, mechanische Einwirkung</li>\n      <li>Chemisch: Säuren, Basen, Harnstoff (denaturiert durch Konkurrenz um H-Brücken), organische Lösungsmittel, Reduktionsmittel (Mercaptoethanol spaltet Disulfidbrücken), Oxidation, Salze</li>\n    </ul>\n    <p>Der Übergang native → teildenaturiert ist oft reversibel (<strong>Renaturierung</strong>: nach Entfernen des Denaturierungsmittels kann das Protein zur aktiven Form zurückfalten, Anfinsen-Experiment). Der Übergang zu vollständiger Denaturierung ist meist irreversibel.</p>\n\n    <h3>Ausfällung von Proteinen</h3>\n    <p>Proteine können gefällt werden durch starke Säuren (Trichloressigsäure, Sulfosalicylsäure, Pikrinsäure, Perchlorsäure, Wolframsäure) oder durch Salze (<strong>Hofmeister-Reihe</strong>):</p>\n    <ul>\n      <li><strong>Anionen (stabilisierend → destabilisierend):</strong> SO₄²⁻ &lt; H₂PO₄⁻ &lt; Acetat⁻ &lt; Cl⁻ &lt; Br⁻ &lt; ClO₄⁻ &lt; SCN⁻</li>\n      <li><strong>Kationen:</strong> NH₄⁺, Cs⁺, K⁺, Na⁺ &lt; Mg²⁺ &lt; Li⁺ &lt; Ca²⁺ &lt; Ba²⁺</li>\n    </ul>\n    <p>Hochkonzentrierte Salzlösungen entziehen den Proteinen ihre Hydrathülle (Salting-out). Globuline werden früher gefällt als Albumine.</p>\n\n    <hr>\n\n    <h3>Proteintrennung und -charakterisierung</h3>\n\n    <h4>Chromatographie</h4>\n    <ul>\n      <li><strong>Ionenaustausch-Chromatographie:</strong> Trennung nach Ladung. Negativ geladene Matrix → positiv geladene Proteine binden stärker; Elution durch Salzgradient. Typische Gruppen: Carboxymethyl (CM) als Kationentauscher, Diethylaminoethyl (DEAE) als Anionentauscher.</li>\n      <li><strong>Größenausschluss-Chromatographie (Gelfiltration):</strong> Poröses Polymer; kleine Moleküle dringen in die Poren ein und eluieren später. Große Moleküle eluieren zuerst.</li>\n      <li><strong>Affinitätschromatographie:</strong> Spezifische Bindung eines Proteins an immobilisierten Liganden; sehr selektiv.</li>\n    </ul>\n\n    <h4>Elektrophorese</h4>\n    <ul>\n      <li><strong>SDS-PAGE:</strong> SDS (Natriumdodecylsulfat) verleiht Proteinen einheitliche negative Ladung → Trennung nach Molekülmasse im Polyacrylamidgel.</li>\n      <li><strong>Isoelektrische Fokussierung (IEF):</strong> Trennung nach isoelektrischem Punkt (pI) in einem pH-Gradienten.</li>\n      <li><strong>2D-Elektrophorese:</strong> Kombination aus IEF (1. Dimension) und SDS-PAGE (2. Dimension) → sehr hohe Auflösung.</li>\n      <li><strong>Papier-Elektrophorese:</strong> Einfache Trennung nach Ladung auf Papierträger in Puffer.</li>\n    </ul>\n\n    <h4>Weitere Methoden</h4>\n    <ul>\n      <li><strong>Dialyse:</strong> Größentrennung über semipermeable Membran (kleine Moleküle diffundieren heraus).</li>\n      <li><strong>Dichtezentrifugation:</strong> Isopyknische Zentrifugation im CsCl- oder Saccharose-Gradienten — Proteine/DNA setzen sich an ihrer Gleichgewichtsdichte ab.</li>\n      <li><strong>Massenspektrometrie (Proteomik):</strong> Proteine → Peptidverdau (Trypsin) → LC-Trennung → Ionisierung (ESI/MALDI) → Massenbestimmung und Fragmentierung → Sequenzinformation.</li>\n      <li><strong>Protein-Kristallographie &amp; NMR:</strong> Strukturbestimmung auf atomarer Ebene.</li>\n    </ul>\n\n    <p>Die <strong>Löslichkeit</strong> eines Proteins ist bei stärkerer Ladung (weit vom pI) höher; am pI ist sie minimal. Am isoelektrischen Punkt wandern Proteine im elektrischen Feld nicht.</p>\n\n    <h4>Peptidsynthese (Schutzgruppenstrategie)</h4>\n    <p>Peptide werden synthetisch durch <strong>Festphasensynthese (Fmoc-Strategie)</strong> hergestellt: (1) Bindung der C-terminalen AS an Harz, (2) Fmoc-Schutzgruppe (Fluorenylmethoxycarbonyl) mit Base entfernen, (3) nächste Fmoc-AS mit DCC (Dicyclohexylcarbodiimid) aktivieren und kuppeln, (4) Wiederholung.</p>\n  "
    },
    {
      "id": 7,
      "title": "Faserproteine – Keratin, Kollagen und Seide",
      "html": "\n    <h2>Faserproteine</h2>\n    <p>Faserproteine (Skleroproteine) bilden mechanisch belastbare Strukturen. Ihre Eigenschaften hängen direkt von ihrer Sekundärstruktur ab.</p>\n\n    <h3>Keratin</h3>\n    <p>Keratine sind die wichtigsten Strukturproteine von Haut, Haaren, Nägeln und Federn. Es gibt zwei Gruppen:</p>\n    <ul>\n      <li><strong>Typ I (sauer, Nr. 9–20):</strong> Bilden Heterofilamente mit Typ II</li>\n      <li><strong>Typ II (neutral bis basisch, Nr. 1–8):</strong> Kommen hauptsächlich in Epithelien, Keratinozyten und der Hornhaut vor</li>\n    </ul>\n    <p>Die α-Helices zweier Keratinketten wickeln sich zu einer rechtsgängigen <strong>Coiled-Coil-Struktur</strong>, die durch hydrophobe Wechselwirkungen stabilisiert wird. Zwei Coiled-Coil-Dimere bilden ein Protofilament, vier Protofilamente eine Protofibrillen, und acht Protofibrillenbündel eine Mikrofibrille.</p>\n    <p><strong>Dauerwelle (chemisch):</strong> Thioalkohol reduziert Disulfidbrücken (Helixstruktur wird flexibel) → Haar in neue Form gebracht → Wasserstoffperoxid oxidiert neue Disulfidbrücken.</p>\n\n    <h3>Kollagen</h3>\n    <p>Kollagen ist das häufigste Protein im menschlichen Körper (~30 % des Gesamtproteins). <strong>Fibrilläre Kollagene</strong> (Typ I, II, III, V, XI) machen ~90 % aller Kollagene aus.</p>\n    <p><strong>Aufbau:</strong> Je drei genetisch codierte α-Ketten bilden eine <strong>Tripelhelix</strong> (links gedreht) — Prokollagen → Kollagen. Jede dritte Position ist obligatorisch Glycin (kleinste AS → Raum im Zentrum der Helix). Typische Sequenz: Gly–X–Y (X oft Pro, Y oft Hydroxyprolin oder Hydroxylysin).</p>\n    <p><strong>Stabilisierung</strong> durch <strong>4-Hydroxyprolin</strong> (aus Prolin durch 4-Hydroxyprolin-Hydroxylase, benötigt Vitamin C und Fe²⁺) und <strong>5-Hydroxylysin</strong>. In EM-Aufnahmen erkennbar an charakteristischen Querstreifungen (~64 nm Periodizität).</p>\n\n    <h4>Pathobiochemie des Kollagens</h4>\n    <table>\n      <thead><tr><th>Erkrankung</th><th>Ursache</th></tr></thead>\n      <tbody>\n        <tr><td>Skorbut</td><td>Vitamin-C-Mangel → gestörte Prolinhydroxylierung</td></tr>\n        <tr><td>Osteogenesis imperfecta</td><td>Mutation in Kollagen Typ I → brüchige Knochen</td></tr>\n        <tr><td>Ehlers-Danlos-Syndrom</td><td>Fehlerhafte Hydroxylierung oder Unterproduktion bestimmter Kollagene</td></tr>\n        <tr><td>Lathyrismus</td><td>Hemmung der Lysyloxidase (Quervernetzung gestört)</td></tr>\n        <tr><td>Marfan-Syndrom</td><td>Fibrillenmutation (Fibrillin-1)</td></tr>\n        <tr><td>Arthrose</td><td>Knorpelabnutzung (Kollagen Typ II-Abbau)</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Seide (Fibroin)</h3>\n    <p>Seidenfibroin besteht aus repetitiven Sequenzen (Gly–Ser–Gly–Ala–Gly–Ala) und bildet <strong>antiparallele β-Faltblätter</strong>. Glycin- und Alaninreste ragen abwechselnd nach oben und unten (Abstände: Gly-Seite ~3,5 Å, Ala-Seite ~5,7 Å). Aus β-Faltblättern entstehen Nanofibrillen → Fibrillen → Faser aus Fibroin mit Sericin-Kittmasse. Seide ist weich und flexibel, da β-Faltblätter keine feste Quervernetzung aufweisen.</p>\n  "
    },
    {
      "id": 8,
      "title": "Hämoglobin und Myoglobin",
      "html": "\n    <h2>Hämoglobin und Myoglobin – Sauerstofftransport und -speicherung</h2>\n\n    <h3>Strukturvergleich</h3>\n    <table>\n      <thead><tr><th>Eigenschaft</th><th>Myoglobin (Mb)</th><th>Hämoglobin (Hb)</th></tr></thead>\n      <tbody>\n        <tr><td>Struktur</td><td>Monomer</td><td>Tetramer (2α + 2β)</td></tr>\n        <tr><td>Häm-Gruppen</td><td>1</td><td>4</td></tr>\n        <tr><td>Aminosäuren</td><td>153</td><td>~574 (4 Ketten)</td></tr>\n        <tr><td>Funktion</td><td>O₂-Speicherung im Muskel</td><td>O₂-Transport im Blut</td></tr>\n        <tr><td>O₂-Bindungskurve</td><td>Hyperbolisch (hohe Affinität)</td><td>Sigmoidal (kooperativ)</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Häm – die prosthetische Gruppe</h3>\n    <p>Häm (= Ferroprotoporphyrin IX) besteht aus einem <strong>Porphyrinringsystem</strong> (4 Pyrrolringe über Methinbrücken verbunden) mit Fe²⁺ als Zentralatom. Das Eisen bindet O₂ reversibel; Fe³⁺ (Methämoglobin) kann keinen Sauerstoff binden.</p>\n    <p>Absorptionsspektrum: Oxyhämoglobin hat Maxima bei ~540 nm und ~580 nm; Deoxyhämoglobin besitzt ein Maximum bei ~560 nm.</p>\n\n    <h3>T-Form und R-Form – Kooperativität</h3>\n    <p>Hämoglobin wechselt zwischen zwei Konformationen:</p>\n    <ul>\n      <li><strong>T-Form (tense/gespannt):</strong> Desoxyhämoglobin, niedrige O₂-Affinität, bindet Protonen und 2,3-BPG stärker</li>\n      <li><strong>R-Form (relaxed/entspannt):</strong> Oxyhämoglobin, hohe O₂-Affinität</li>\n    </ul>\n    <p>Beim Übergang T → R verschiebt sich die F-Helix, das proximale Histidin rückt näher an den Porphyrinring → sigmoidale Bindungskurve durch <strong>positive Kooperativität</strong>: Bindung eines O₂-Moleküls erleichtert die Bindung des nächsten. Diese Kooperativität ermöglicht effiziente Beladung in der Lunge (hoher pO₂) und Entladung im Gewebe (niedriger pO₂).</p>\n\n    <h3>Effektoren der O₂-Affinität</h3>\n    <ul>\n      <li><strong>Bohr-Effekt:</strong> Sinkender pH (↑ CO₂, ↑ H⁺) senkt O₂-Affinität → erleichtert Abgabe im aktiven Gewebe. Umgekehrt: steigender pH erhöht Affinität.</li>\n      <li><strong>CO₂-Transport:</strong> Im Gewebe: CO₂ → H₂CO₃ → H⁺ + HCO₃⁻ (Carboanhydrase); Chloridshift (HCO₃⁻ raus, Cl⁻ rein). In der Lunge umgekehrt. CO₂ kann auch direkt an Hb binden (Carbamat).</li>\n      <li><strong>2,3-Bisphosphoglycerat (2,3-BPG):</strong> Entsteht in Erythrozyten im Rapoport-Luebering-Zyklus (Nebenweg der Glykolyse). Stabilisiert T-Form → senkt O₂-Affinität → fördert Abgabe. Bei Höhenanpassung steigt 2,3-BPG-Konzentration an.</li>\n      <li><strong>Temperatur:</strong> Erhöhte Temperatur senkt O₂-Affinität.</li>\n      <li><strong>Fetales Hämoglobin (HbF):</strong> γ-Ketten statt β-Ketten; bindet 2,3-BPG schwächer → höhere O₂-Affinität → sichert O₂-Versorgung des Fetus über die Plazenta.</li>\n    </ul>\n\n    <h3>Körperkerntemperaturen und Hb-Funktion</h3>\n    <ul>\n      <li>Normaltemperatur: 35–37 °C</li>\n      <li>Unterkühlung Abwehrstadium: 35–32 °C</li>\n      <li>Erschöpfungsstadium: 32–30 °C; Lähmungsstadium: 30–27 °C; Scheintod: &lt; 27 °C</li>\n    </ul>\n\n    <h3>Pathophysiologie</h3>\n    <ul>\n      <li><strong>Hämoglobinopathien:</strong> Mutationen in Globingenen (z.B. HbS bei Sichelzellanämie: Glu→Val in β-Kette → unlösliche Fasern, Polymerisation im Deoxyzustand)</li>\n      <li><strong>Thalassämien:</strong> Defekte der Globinsynthese (α- oder β-Thalassämie)</li>\n      <li><strong>Porphyrien:</strong> Defekte der Hämsynthese</li>\n    </ul>\n  "
    },
    {
      "id": 9,
      "title": "Immunsystem und Antikörper",
      "html": "\n    <h2>Immunsystem und Antikörper</h2>\n\n    <h3>Angeborenes vs. adaptives Immunsystem</h3>\n    <table>\n      <thead><tr><th>Merkmal</th><th>Angeboren</th><th>Adaptiv (erworben)</th></tr></thead>\n      <tbody>\n        <tr><td>Reaktionszeit</td><td>Sofort (Minuten–Stunden)</td><td>Tage bis Wochen</td></tr>\n        <tr><td>Spezifität</td><td>Unspezifisch (Muster-Erkennung)</td><td>Hoch spezifisch (Antigen-spezifisch)</td></tr>\n        <tr><td>Gedächtnis</td><td>Nein</td><td>Ja (Gedächtniszellen)</td></tr>\n        <tr><td>Zellen</td><td>Makrophagen, NK-Zellen, Granulozyten</td><td>T- und B-Lymphozyten</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Primäre Immunantwort</h3>\n    <ol>\n      <li>Erreger eindringen → Phagozytose durch Makrophagen</li>\n      <li>Antigen-Präsentation an T-Lymphozyten (MHC-Komplex)</li>\n      <li>Aktivierung von zytotoxischen T-Zellen und B-Lymphozyten</li>\n      <li>B-Zellen differenzieren zu Plasmazellen → Antikörperproduktion</li>\n      <li>Bildung von Gedächtniszellen (Basis für Sekundärantwort)</li>\n    </ol>\n\n    <h3>Aufbau eines Antikörpers (Immunglobulins)</h3>\n    <p>Ein Antikörper besteht aus <strong>zwei schweren Ketten (Heavy Chains, H)</strong> und <strong>zwei leichten Ketten (Light Chains, L)</strong>, verbunden durch Disulfidbrücken (Y-Form). Jede Kette besteht aus variablen (V) und konstanten (C) Domänen:</p>\n    <ul>\n      <li><strong>Fab-Fragment:</strong> Antigen-Bindungsstelle (variable Domänen VH + VL)</li>\n      <li><strong>Fc-Fragment:</strong> Effektorfunktionen (Komplementaktivierung, Fc-Rezeptorbindung)</li>\n    </ul>\n    <p><strong>IgM</strong> ist ein Pentamer (5 Antikörpereinheiten + J-Kette) — wichtig in der frühen Immunantwort.</p>\n\n    <h3>Antigen-Antikörper-Reaktionen</h3>\n    <p>Die Bindung von Antikörper an Antigen führt zur <strong>Komplexbildung</strong> und kann <strong>Agglutination</strong> (Verklumpen) oder Präzipitation bewirken. Bei Antigenüberschuss wird die Präzipitation gehemmt. Die <strong>Immundiffusion</strong> nutzt die konzentrationsabhängige Ausbreitung zur Quantifizierung.</p>\n\n    <h3>Diagnostische Methoden</h3>\n    <ul>\n      <li><strong>ELISA (Enzyme-Linked Immunosorbent Assay):</strong> Direkt, indirekt oder als Sandwich-Format. Antigen/Antikörper wird an Oberfläche gebunden, Nachweis über enzymgekoppelten Antikörper und Farbreaktion.</li>\n      <li><strong>Western Blot:</strong> Proteine per SDS-PAGE trennen → auf Membran übertragen → spezifischer Antikörpernachweis.</li>\n      <li><strong>Hybridom-Technik (monoklonale Antikörper):</strong> Maus immunisieren → B-Zellen isolieren → Fusion mit Myelomzellen → HAT-Selektion → Klon mit spezifischem Antikörper identifizieren und vermehren.</li>\n    </ul>\n  "
    },
    {
      "id": 10,
      "title": "Enzyme – Klassen, Cofaktoren und Wirkprinzipien",
      "html": "\n    <h2>Enzyme</h2>\n    <p>Enzyme sind biologische Katalysatoren (meist Proteine, selten RNA = Ribozyme). Vorteile enzymkatalysierter Reaktionen:</p>\n    <ul>\n      <li>Stark erhöhte Reaktionsgeschwindigkeit (bis 10¹⁷-fach)</li>\n      <li>Mildere Reaktionsbedingungen (pH, Temperatur)</li>\n      <li>Hohe Substrat- und Reaktionsspezifität</li>\n      <li>Präzise Regulationsmöglichkeiten (allosterisch, durch Phosphorylierung etc.)</li>\n    </ul>\n\n    <h3>Enzymklassen (EC-Nomenklatur)</h3>\n    <table>\n      <thead><tr><th>Klasse</th><th>Katalysierte Reaktion</th><th>Beispiel</th></tr></thead>\n      <tbody>\n        <tr><td>1. Oxidoreduktasen</td><td>Redoxreaktionen (Elektronenübertragung)</td><td>Lactat-Dehydrogenase</td></tr>\n        <tr><td>2. Transferasen</td><td>Gruppenübertragung</td><td>Nucleosidmonophosphat-Kinase, ALT</td></tr>\n        <tr><td>3. Hydrolasen</td><td>Hydrolyse (Bindungsspaltung mit H₂O)</td><td>Chymotrypsin, Pepsin</td></tr>\n        <tr><td>4. Lyasen</td><td>Spaltung/Bildung ohne Hydrolyse/Redox</td><td>Fumarase, Pyruvat-Decarboxylase</td></tr>\n        <tr><td>5. Isomerasen</td><td>Umlagerungen innerhalb eines Moleküls</td><td>Triosephosphat-Isomerase, PGI</td></tr>\n        <tr><td>6. Ligasen</td><td>Knüpfung kovalenter Bindungen + ATP</td><td>Aminoacyl-tRNA-Synthetase, ACC</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Cofaktoren</h3>\n    <p>Viele Enzyme benötigen Nicht-Protein-Komponenten:</p>\n    <ul>\n      <li><strong>Prosthetische Gruppe:</strong> Fest (kovalent) gebunden (z.B. FAD, Häm, Biotin)</li>\n      <li><strong>Coenzym:</strong> Lose gebunden, dissoziiert nach der Reaktion (z.B. NAD⁺, NADP⁺, CoA)</li>\n      <li><strong>Metallionen (Metalloenzyme):</strong> Z.B. Fe²⁺ in Hämoglobin und Cytochromen, Zn²⁺ in Carboanhydrase, Mg²⁺ in Kinasen</li>\n    </ul>\n    <p>Das <strong>Apoenzym</strong> (inaktiv, nur Protein) + Cofaktor = <strong>Holoenzym</strong> (aktiv).</p>\n\n    <h3>Wichtige Coenzyme im Überblick</h3>\n    <ul>\n      <li><strong>NAD⁺/NADH + H⁺:</strong> Elektronen- und Hydridübertragung in Katabolicroutinen (Glykolyse, Citratzyklus)</li>\n      <li><strong>NADP⁺/NADPH:</strong> Reduktionsäquivalente für anabole Prozesse (Fettsäurebiosynthese, Pentosephosphatweg)</li>\n      <li><strong>FAD/FADH₂:</strong> Elektronen-/Wasserstoffübertragung (z.B. Succinat-DH, β-Oxidation)</li>\n      <li><strong>Coenzym Q (Ubichinon/CoQ10):</strong> Mobiler Elektronenträger der Atmungskette in der Membran</li>\n      <li><strong>ATP:</strong> Energieträger, Phosphatgruppendonor. Gibbs-Energie einer Phosphoesterbindung: ~−20,5 kJ/mol. ATP kann als Energieträger, Energielieferant und Cofaktor fungieren.</li>\n      <li><strong>Acetyl-CoA:</strong> C₂-Gruppenüberträger; Ausgangspunkt für Fettsäuresynthese, Ketonkörper, Cholesterinsynthese, Citratzyklus</li>\n      <li><strong>TPP (Thiaminpyrophosphat/Vitamin B₁):</strong> Cofaktor bei oxidativer Decarboxylierung (Pyruvat-DH, α-Ketoglutarat-DH, Transketolase)</li>\n    </ul>\n\n    <h3>Hemmung von Enzymen – ein Beispiel</h3>\n    <p><strong>Sarin</strong> ist ein Organophosphat, das die Acetylcholinesterase irreversibel hemmt → Acetylcholin kann nicht mehr abgebaut werden → dauerhafte Nervenstimulation → letal in geringen Konzentrationen. Dies illustriert die enorme physiologische Bedeutung der Enzymregulation.</p>\n  "
    },
    {
      "id": 11,
      "title": "Acetyl-CoA und ATP – zentrale Stoffwechsel-Carrefours",
      "html": "\n    <h2>Acetyl-CoA – zentrales Knotenmolekül des Stoffwechsels</h2>\n    <p>Acetyl-CoA besteht aus:</p>\n    <ul>\n      <li>Acetylgruppe (CH₃–CO–)</li>\n      <li>β-Mercaptoethylaminrest (–SH enthaltend)</li>\n      <li>Pantothensäure (Vitamin B5)</li>\n      <li>Adenosin-3′-Phosphat</li>\n    </ul>\n    <p>Es wird gebildet durch den <strong>Pyruvat-Dehydrogenase-Komplex (PDH)</strong> aus Pyruvat (oxidative Decarboxylierung, irreversibel): Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH. Der PDH-Komplex benötigt fünf Cofaktoren: TPP, Lipoamid, FAD, NAD⁺, CoA.</p>\n\n    <h3>Verzweigungspunkt im Stoffwechsel</h3>\n    <p>Acetyl-CoA verbindet Abbau und Aufbau:</p>\n    <ul>\n      <li><strong>Katabolismus:</strong> Einschleusung in den Citratzyklus</li>\n      <li><strong>Anabolismus:</strong> Ausgangspunkt für Fettsäurebiosynthese, Cholesterinsynthese (über HMG-CoA), Ketonkörpersynthese, Steroide</li>\n    </ul>\n    <p>Da Acetyl-CoA nicht direkt durch die innere Mitochondrienmembran kann, wird es als <strong>Citrat</strong> (via Tricarboxylat/Citrat-Transporter) ins Cytosol exportiert und dort durch ATP-Citrat-Lyase wieder zu Acetyl-CoA und Oxalacetat gespalten.</p>\n\n    <hr>\n\n    <h3>ATP – die Energiewährung der Zelle</h3>\n    <p>ATP (Adenosintriphosphat) ist das universelle Energieüberträgermolekül. Typische Reaktionen:</p>\n    <ul>\n      <li>S + ATP → S–Pi + ADP (Phosphorylierung)</li>\n      <li>S₁ + S₂ + ATP → S₁–S₂ + ADP + Pi (Kondensation/Aktivierung)</li>\n    </ul>\n    <p>ATP-Moleküle werden täglich mehr als <strong>1000-mal recycelt</strong>. ADP ist der wichtigste <strong>Regulator der Atmungskette</strong> (Atmungskontrolle). Anorganisches Phosphat wird über einen H⁺-Symporter in die Mitochondrienmatrix transportiert.</p>\n  "
    },
    {
      "id": 12,
      "title": "Kohlenhydrate – Struktur und Stereochemie",
      "html": "\n    <h2>Kohlenhydrate</h2>\n    <p>Kohlenhydrate (Saccharide) sind Polyhydroxyaldehyde (Aldosen) oder Polyhydroxyketone (Ketosen). Biologische Beispiele: Stärke, Glykogen, Zellulose, Chitin, Zucker in DNA/RNA, Glykoproteine.</p>\n\n    <h3>Klassifikation</h3>\n    <ul>\n      <li><strong>Aldosen:</strong> Aldehydgruppe am C1. Beispiele: Glyceraldehyd (Aldotriose), Ribose (Aldopentose), Glucose, Mannose, Galactose (Aldohexosen)</li>\n      <li><strong>Ketosen:</strong> Ketogruppe am C2. Beispiele: Dihydroxyaceton (Ketotriose), Ribulose, Xylulose (Ketopentosen), Fructose (Ketohexose)</li>\n    </ul>\n    <p>Die beiden Triosen Glyceraldehyd und Dihydroxyaceton sind <strong>Konstitutionsisomere</strong>; vom Glyceraldehyd gibt es D- und L-Stereoisomere (D-Form dominiert in der Biologie).</p>\n\n    <h3>Stereoisomerie bei Kohlenhydraten</h3>\n    <ul>\n      <li><strong>Enantiomere:</strong> Bild und Spiegelbild (D/L-System)</li>\n      <li><strong>Diastereomere:</strong> Nicht spiegelbildliche Stereoisomere</li>\n      <li><strong>Epimere:</strong> Unterscheiden sich nur an einem asymmetrischen C-Atom. D-Mannose (C2-Epimer) und D-Galactose (C4-Epimer) sind Epimere der Glucose.</li>\n      <li><strong>Anomere:</strong> Unterscheiden sich am anomeren C-Atom (entsteht bei Ringbildung); α- und β-Anomer</li>\n    </ul>\n\n    <h3>Ringformen und Mutarotation</h3>\n    <p><strong>Pyranose (6-Ring):</strong> Bei Glucose reagiert die C1-Aldehydgruppe mit der C5-OH → stabiler 6-gliedriger Ring mit einem Sauerstoff (Halbacetal). Dabei entstehen α-D-Glucopyranose (OH an C1 axial) und β-D-Glucopyranose (OH an C1 äquatorial).</p>\n    <p><strong>Furanose (5-Ring):</strong> Bei Fructose reagiert C2-Keto mit C5-OH → 5-Ring. Auch hier α/β-Anomere möglich.</p>\n    <p><strong>Mutarotation:</strong> In wässriger Lösung stellen sich Gleichgewichte zwischen den Ringformen und der offenkettigen Form ein. Für Glucose bei 20 °C: ~36 % α-Pyranose, ~64 % β-Pyranose, &lt;1 % offenkettig. Für Fructose: β-Pyranoseform dominant.</p>\n\n    <hr>\n\n    <h3>Kohlenhydrate in Organismen</h3>\n    <p><strong>Pflanzen:</strong> Photosynthese → G3P → Glucose-6-phosphat → Stärke, Saccharose, Zellulose. <strong>Tiere:</strong> Lactat → Pyruvat → PEP → Glucose-6-phosphat → Blutzucker, Glykogen. Diese Unterschiede spiegeln anabole (Pflanzen: CO₂-Fixierung) vs. recycelnde (Tiere: Cori-Zyklus) Strategien wider.</p>\n  "
    },
    {
      "id": 13,
      "title": "Glykolyse",
      "html": "\n    <h2>Glykolyse – der universelle Glucoseabbauweg</h2>\n    <p>Die <strong>Glykolyse</strong> ist der anaerobe Abbau von Glucose zu 2 Pyruvat im Cytosol. Sie liefert Energie (ATP, NADH) und Zwischenprodukte für viele weitere Stoffwechselwege. Ziel: Energiegewinnung als ATP und Bereitstellung von Biosynthesevorstufen.</p>\n\n    <h3>Die 10 Schritte der Glykolyse</h3>\n    <table>\n      <thead><tr><th>Schritt</th><th>Enzym</th><th>Reaktion / Besonderheit</th></tr></thead>\n      <tbody>\n        <tr><td>1</td><td>Hexokinase / Glucokinase</td><td>Glucose + ATP → Glucose-6-P + ADP. Hält Glucose in der Zelle fest; irreversibel.</td></tr>\n        <tr><td>2</td><td>Phosphoglucose-Isomerase</td><td>Glucose-6-P ⇌ Fructose-6-P. Vorbereitung für Spaltung.</td></tr>\n        <tr><td>3</td><td>Phosphofructokinase-1 (PFK-1)</td><td>F-6-P + ATP → F-1,6-bP + ADP. Schrittmacherschritt; irreversibel; reguliert durch AMP(+), ATP(−), Citrat(−), F-2,6-bP(+).</td></tr>\n        <tr><td>4</td><td>Aldolase</td><td>F-1,6-bP → DHAP + G3P. Spaltung des C6-Moleküls.</td></tr>\n        <tr><td>5</td><td>Triosephosphat-Isomerase</td><td>DHAP ⇌ G3P. Beide Hälften werden verwertbar.</td></tr>\n        <tr><td>6</td><td>G3P-Dehydrogenase (GAPDH)</td><td>G3P + NAD⁺ + Pi → 1,3-BPG + NADH. Oxidation + Phosphorylierung.</td></tr>\n        <tr><td>7</td><td>Phosphoglycerat-Kinase</td><td>1,3-BPG + ADP → 3-PG + ATP. Substratkettenphosphorylierung.</td></tr>\n        <tr><td>8</td><td>Phosphoglycerat-Mutase</td><td>3-PG → 2-PG. Verschiebung der Phosphatgruppe.</td></tr>\n        <tr><td>9</td><td>Enolase</td><td>2-PG → PEP + H₂O. Bildung einer energiereichen Enolphosphatbindung.</td></tr>\n        <tr><td>10</td><td>Pyruvat-Kinase</td><td>PEP + ADP → Pyruvat + ATP. Irreversibel; reguliert.</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Energiebilanz</h3>\n    <p>Pro Glucose: <strong>Netto 2 ATP</strong>, <strong>2 NADH</strong>, <strong>2 Pyruvat</strong>. (Brutto 4 ATP, minus 2 investierte = netto 2 ATP.)</p>\n\n    <h3>Irreversible Schritte</h3>\n    <p>Drei Schritte sind physiologisch irreversibel: (1) Glucose → G6P, (3) F6P → F1,6bP, (10) PEP → Pyruvat. Sie müssen in der Gluconeogenese durch spezielle Bypass-Enzyme umgangen werden.</p>\n\n    <hr>\n\n    <h3>Gluconeogenese – die Umkehrung der Glykolyse</h3>\n    <p>Neue Glucosesynthese aus Nicht-Kohlenhydratvorstufen (Pyruvat, Lactat, Aminosäuren, Glycerol) findet hauptsächlich in <strong>Leber und Niere</strong> statt. Wichtige Orte: Mitochondrien (Pyruvat → OAA) und endoplasmatisches Retikulum (G6P → Glucose).</p>\n    <p>Bypass-Enzyme der Gluconeogenese:</p>\n    <ul>\n      <li><strong>Pyruvat-Carboxylase:</strong> Pyruvat + CO₂ + ATP → Oxalacetat (in Mitochondrien, benötigt Biotin)</li>\n      <li><strong>PEPCK (PEP-Carboxykinase):</strong> Oxalacetat + GTP → PEP + CO₂</li>\n      <li><strong>Fructose-1,6-Bisphosphatase:</strong> F-1,6-bP + H₂O → F-6-P + Pi (regulierter Schritt)</li>\n      <li><strong>Glucose-6-Phosphatase:</strong> G-6-P + H₂O → Glucose + Pi (nur in Leber/Niere)</li>\n    </ul>\n    <p><strong>Biotin</strong> ist dabei die prosthetische Gruppe der Pyruvat-Carboxylase — es überträgt die Carboxylgruppe kovalent.</p>\n  "
    },
    {
      "id": 14,
      "title": "Glykogenstoffwechsel",
      "html": "\n    <h2>Glykogen – Glykogensynthese, -abbau und Regulation</h2>\n    <p><strong>Glykogen</strong> ist das Glucosespeicherpolysaccharid tierischer Zellen. Es ist stark verzweigt (α-1,4-glykosidische Ketten, α-1,6-Verzweigungen alle ~8–12 Glucosereste) und ermöglicht schnellen Glucoseabruf. Leber (~100 g) und Muskel (~400 g) sind die wichtigsten Speicherorte.</p>\n\n    <h3>Glykogensynthese (Glykogenese)</h3>\n    <ol>\n      <li>Glucose → Glucose-6-phosphat (Hexokinase/Glucokinase)</li>\n      <li>G6P → Glucose-1-phosphat (Phosphoglucomutase)</li>\n      <li>G1P + UTP → <strong>UDP-Glucose</strong> + PPi (UDP-Glucose-Pyrophosphorylase) — aktivierte Form</li>\n      <li><strong>Glykogensynthase</strong>: Fügt Glucosereste über α-1,4-Bindungen an bestehende Glykogenkette an</li>\n      <li><strong>Branching-Enzym</strong> (Amylo-(1,4→1,6)-Transglucosylase): Erzeugt α-1,6-Verzweigungen → erhöht Löslichkeit und Zahl der nichtreduzierenden Enden</li>\n    </ol>\n\n    <h3>Glykogenabbau (Glykogenolyse)</h3>\n    <ol>\n      <li><strong>Glykogenphosphorylase</strong>: Phosphorolytische Spaltung α-1,4-glykosidischer Bindungen → Glucose-1-phosphat (ab 4 Reste vor Verzweigung stopp)</li>\n      <li><strong>Debranching-Enzym</strong>: Transferase-Aktivität (3 Reste umsetzen) + α-1,6-Glucosidase-Aktivität (freies Glucose freisetzen)</li>\n      <li>G1P → G6P (Phosphoglucomutase)</li>\n      <li>In der Leber: G6P → Glucose (Glucose-6-Phosphatase); im Muskel: G6P direkt in Glykolyse</li>\n    </ol>\n\n    <h3>Funktionelle Unterschiede Leber vs. Muskel</h3>\n    <table>\n      <thead><tr><th>Merkmal</th><th>Leberglykogen</th><th>Muskelglykogen</th></tr></thead>\n      <tbody>\n        <tr><td>Funktion</td><td>Blutzuckerhomöostase</td><td>Lokale Energieversorgung</td></tr>\n        <tr><td>Glucose-6-Phosphatase</td><td>Ja → freie Glucose ins Blut</td><td>Nein → bleibt im Muskel</td></tr>\n        <tr><td>Menge</td><td>~100 g (~5–6 % des Lebergewichts)</td><td>~400 g (niedrigere Konzentration)</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Regulation</h3>\n    <p>Glykogenstoffwechsel und Glykolyse werden reziprok reguliert:</p>\n    <ul>\n      <li><strong>Glucagon/Adrenalin:</strong> → cAMP ↑ → PKA → Glykogenphosphorylase aktivieren, Glykogensynthase hemmen</li>\n      <li><strong>Insulin:</strong> → Phosphodiesterase → cAMP ↓ → Glykogensynthase aktivieren, Abbau hemmen</li>\n      <li><strong>Glykogenosen:</strong> Angeborene Enzymdefekte (z.B. Typ I = Morbus von Gierke: Glucose-6-Phosphatase-Defekt → Hypoglykämie + Lebervergrößerung)</li>\n    </ul>\n  "
    },
    {
      "id": 15,
      "title": "Pentosephosphatweg",
      "html": "\n    <h2>Pentosephosphatweg (PPW)</h2>\n    <p>Der Pentosephosphatweg ist ein alternativer Glucoseabbauweg im Cytosol. Er dient nicht primär der Energiegewinnung, sondern der Bereitstellung von:</p>\n    <ul>\n      <li><strong>NADPH</strong> (Reduktionsäquivalente für Anabolismus und antioxidativen Schutz)</li>\n      <li><strong>Ribose-5-phosphat</strong> (Nukleotid- und Nukleinsäurebiosynthese)</li>\n    </ul>\n\n    <h3>Oxidativer Teil (irreversibel)</h3>\n    <p>Glucose-6-phosphat + 2 NADP⁺ + H₂O → Ribulose-5-phosphat + CO₂ + 2 NADPH + 2 H⁺</p>\n\n    <h3>Nichtoxidativer Teil (reversibel)</h3>\n    <p>Durch Transketolase (benötigt TPP) und Transaldolase werden Pentosephosphate in Glykolyseintermediate überführt:</p>\n    <p>3 Ribulose-5-phosphat ⇌ 2 Fructose-6-phosphat + Glycerinaldehyd-3-phosphat</p>\n    <p>Der nichtoxidative Teil verbindet PPW und Glykolyse. Fructose-6-phosphat kann über beide Wege gebildet werden und steht im Fließgleichgewicht.</p>\n  "
    },
    {
      "id": 16,
      "title": "Citratzyklus",
      "html": "\n    <h2>Citratzyklus (Krebszyklus)</h2>\n    <p>Der Citratzyklus ist der zentrale katabole Weg in der Mitochondrienmatrix, der Acetyl-CoA vollständig zu CO₂ oxidiert und dabei Reduktionsäquivalente für die Atmungskette bereitstellt.</p>\n\n    <h3>Die 8 Schritte</h3>\n    <table>\n      <thead><tr><th>Enzym</th><th>Reaktion</th><th>Produkte</th></tr></thead>\n      <tbody>\n        <tr><td>Citrat-Synthase</td><td>Acetyl-CoA + Oxalacetat → Citrat</td><td>CoA-SH</td></tr>\n        <tr><td>Aconitase</td><td>Citrat ⇌ Isocitrat (über Cis-Aconitat)</td><td>—</td></tr>\n        <tr><td>Isocitrat-Dehydrogenase</td><td>Isocitrat → α-Ketoglutarat</td><td>CO₂, NADH</td></tr>\n        <tr><td>α-Ketoglutarat-Dehydrogenase</td><td>α-Ketoglutarat → Succinyl-CoA</td><td>CO₂, NADH (ähnlich PDH)</td></tr>\n        <tr><td>Succinyl-CoA-Synthetase</td><td>Succinyl-CoA → Succinat</td><td>GTP (= ATP)</td></tr>\n        <tr><td>Succinat-Dehydrogenase (Komplex II)</td><td>Succinat → Fumarat</td><td>FADH₂</td></tr>\n        <tr><td>Fumarase</td><td>Fumarat + H₂O → Malat</td><td>—</td></tr>\n        <tr><td>Malat-Dehydrogenase</td><td>Malat → Oxalacetat</td><td>NADH</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Bilanz pro Acetyl-CoA</h3>\n    <p>3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂</p>\n\n    <h3>Regulation</h3>\n    <p>Aktiviert durch ADP, Ca²⁺ (Isocitrat-DH und α-Ketoglutarat-DH); gehemmt durch ATP, NADH, Succinyl-CoA (Produkthemmung). Schlüsselenzyme: Citrat-Synthase, Isocitrat-DH, α-Ketoglutarat-DH.</p>\n\n    <h3>Amphibole Funktion</h3>\n    <p>Der Citratzyklus ist <strong>amphibol</strong>: Neben dem Abbau dienen seine Intermediate als Vorstufen für Biosynthesen (Oxalacetat → Gluconeogenese, α-Ketoglutarat → Glutamat, Succinyl-CoA → Häm-Synthese). <strong>Anaplerotische Reaktionen</strong> (z.B. Pyruvat-Carboxylase: Pyruvat → Oxalacetat) füllen diese Intermediate wieder auf.</p>\n  "
    },
    {
      "id": 17,
      "title": "Atmungskette und oxidative Phosphorylierung",
      "html": "\n    <h2>Atmungskette und oxidative Phosphorylierung</h2>\n    <p>Die Atmungskette liegt in der inneren Mitochondrienmembran und überträgt Elektronen von NADH/FADH₂ auf O₂, wobei ein <strong>Protonengradient</strong> über die innere Membran aufgebaut wird, der die ATP-Synthese antreibt (chemiosmotisches Modell nach Mitchell).</p>\n\n    <h3>Die Komplexe der Atmungskette</h3>\n    <table>\n      <thead><tr><th>Komplex</th><th>Bezeichnung</th><th>Funktion</th><th>H⁺-Pumpen</th></tr></thead>\n      <tbody>\n        <tr><td>I</td><td>NADH-Ubichinon-Oxidoreduktase</td><td>NADH → Ubichinon; 4 H⁺ pumpen</td><td>Ja</td></tr>\n        <tr><td>II</td><td>Succinat-Dehydrogenase</td><td>FADH₂ → Ubichinon</td><td>Nein</td></tr>\n        <tr><td>—</td><td>Ubichinon (CoQ)</td><td>Mobiler Elektronenträger (in der Membran)</td><td>—</td></tr>\n        <tr><td>III</td><td>Cytochrom-bc1-Komplex</td><td>Ubichinol → Cytochrom c; Q-Zyklus</td><td>Ja</td></tr>\n        <tr><td>—</td><td>Cytochrom c</td><td>Mobiler Träger im Intermembranraum</td><td>—</td></tr>\n        <tr><td>IV</td><td>Cytochrom-c-Oxidase</td><td>Cytochrom c → O₂ → H₂O</td><td>Ja</td></tr>\n        <tr><td>V</td><td>ATP-Synthase (F₀F₁)</td><td>H⁺-Gradient → ATP-Synthese</td><td>Rückwärts</td></tr>\n      </tbody>\n    </table>\n\n    <h3>P/O-Verhältnis</h3>\n    <p>NADH: ~2,5 ATP; FADH₂: ~1,5 ATP (FADH₂ speist Elektronen nach Komplex I ein → weniger Protonenpumpen). Gesamtausbeute pro Glucose: ~30–32 ATP.</p>\n\n    <h3>Entkoppler und Inhibitoren</h3>\n    <ul>\n      <li><strong>Entkoppler (z.B. DNP):</strong> Nehmen Protonen im Intermembranraum auf, transportieren sie durch die Membran in die Matrix → Protonengradient kollabiert → Energie als Wärme; Atmung läuft, aber keine ATP-Synthese.</li>\n      <li><strong>UCP1/Thermogenin:</strong> Physiologischer Entkoppler in braunem Fettgewebe → Thermogenese; wichtig bei Neugeborenen und Kälteanpassung. Kälte stimuliert Bildung von braunem Fettgewebe.</li>\n      <li><strong>Inhibitoren:</strong> CN⁻ hemmt Komplex IV; Oligomycin hemmt ATP-Synthase; Rotenon hemmt Komplex I.</li>\n    </ul>\n\n    <h3>Mitochondriale Besonderheiten</h3>\n    <p>Mitochondrien haben ein eigenes <strong>zirkuläres Genom</strong> (37 Gene: 13 Atmungskettenproteine, 22 tRNAs, 2 rRNAs). Die mitochondriale DNA ist mutationsanfällig (hohe ROS-Exposition) und wird <strong>überwiegend mütterlich</strong> vererbt.</p>\n    <p>Unterstützt die <strong>Endosymbionten-Hypothese</strong>: Mitochondrien entstanden aus α-Proteobakteria, die von einer Wirtszelle aufgenommen wurden. In Bakterien liegt die Atmungskette in der Plasmamembran; der elektrochemische Gradient treibt ATP-Synthase oder Flagellenmotor an.</p>\n\n    <h3>Reaktive Sauerstoffspezies (ROS) und antioxidative Abwehr</h3>\n    <p>An Ubichinon kann O₂ ein Elektron aufnehmen → <strong>Superoxid-Radikal (O₂·⁻)</strong> → weitere ROS (H₂O₂, OH·).</p>\n    <p>Antioxidative Schutzsysteme:</p>\n    <ul>\n      <li><strong>Superoxid-Dismutase:</strong> O₂·⁻ + O₂·⁻ + 2 H⁺ → H₂O₂ + O₂</li>\n      <li><strong>Glutathion-Peroxidase:</strong> H₂O₂ + 2 GSH → 2 H₂O + GSSG</li>\n      <li><strong>Glutathion-Reduktase:</strong> GSSG + NADPH + H⁺ → 2 GSH + NADP⁺</li>\n      <li><strong>Nicht-enzymatisch:</strong> Tocopherol (Vit. E), β-Carotin, Ascorbat (Vit. C), Glutathion, Harnsäure</li>\n    </ul>\n  "
    },
    {
      "id": 18,
      "title": "Zentrale Stoffwechselzyklen und Shuttle-Systeme",
      "html": "\n    <h2>Zentrale Stoffwechselzyklen</h2>\n\n    <h3>Cori-Zyklus</h3>\n    <p>Verbindet <strong>Muskel und Leber</strong>: Im anaerob arbeitenden Muskel entsteht Lactat (aus Pyruvat + NADH durch Lactat-DH). Lactat wird über das Blut zur Leber transportiert, dort durch Gluconeogenese zu Glucose resynthetisiert und zum Muskel zurückgeliefert. Funktion: Recycling von Lactat; Bereitstellung von Energie ohne O₂ im Muskel.</p>\n\n    <h3>Glucose-Alanin-Zyklus</h3>\n    <p>Ebenfalls Muskel–Leber-Kommunikation: Pyruvat wird im Muskel durch <strong>ALT (Alanin-Aminotransferase)</strong> zu Alanin transaminiert (gleichzeitig wird Glutamat zu α-Ketoglutarat). Alanin gelangt über das Blut zur Leber, wo es wieder zu Pyruvat umgewandelt und für die Gluconeogenese genutzt wird. Stickstofftransport: Alanin trägt den Aminogruppen-Stickstoff zur Leber für den Harnstoffzyklus.</p>\n\n    <h3>Harnstoffzyklus</h3>\n    <p>Entgiftung von <strong>NH₄⁺</strong> (toxisch, v.a. für das Gehirn) durch Einbau in ausscheidbaren Harnstoff (CO(NH₂)₂) in der Leber. Läuft teils in Mitochondrien, teils im Cytosol ab. Enzymdefekte führen zu <strong>Hyperammonämie</strong> → neurologische Symptome bis zur hepatischen Enzephalopathie.</p>\n\n    <h3>Rapoport-Luebering-Zyklus</h3>\n    <p>Nebenweg der Glykolyse in <strong>Erythrozyten</strong>: 1,3-BPG → 2,3-BPG (statt direkt ATP-Bildung). 2,3-Bisphosphoglycerat <strong>stabilisiert den T-Zustand des Hämoglobins</strong> und erleichtert so die O₂-Abgabe im Gewebe.</p>\n\n    <hr>\n\n    <h3>Shuttle-Systeme</h3>\n\n    <h4>Malat-Aspartat-Shuttle</h4>\n    <p>Hauptweg zum Transport cytosolischer Reduktionsäquivalente (NADH) in die Mitochondrienmatrix, da die innere Mitochondrienmembran für NADH nicht permeabel ist. Schlüsselenzyme: <strong>GOT/AST (Aspartat-Aminotransferase)</strong> und Malat-DH. Netto: NADH(cytosol) → NADH(mitochondrial) → ~2,5 ATP.</p>\n\n    <h4>Citrat-Transporter (Tricarboxylat-Transporter)</h4>\n    <p>Exportiert Citrat aus der Mitochondrienmatrix ins Cytosol. Dort wird es durch ATP-Citrat-Lyase gespalten → Acetyl-CoA (für Fettsäuresynthese) + Oxalacetat.</p>\n\n    <hr>\n\n    <h3>Pyruvat – zentraler Metabolit</h3>\n    <p>Pyruvat steht am Kreuzungspunkt mehrerer Stoffwechselwege:</p>\n    <ul>\n      <li>→ Acetyl-CoA: PDH (oxidative Decarboxylierung, irreversibel, mitochondrial)</li>\n      <li>→ Lactat: Lactat-DH (anaerob; regeneriert NAD⁺)</li>\n      <li>→ Alanin: ALT (Transaminierung; Glucose-Alanin-Zyklus)</li>\n      <li>→ Oxalacetat: Pyruvat-Carboxylase (Gluconeogenese, anaplerotisch)</li>\n    </ul>\n\n    <h3>Fructose-Stoffwechsel</h3>\n    <p>Fructose wird im Darm und in der Leber durch spezifische Enzyme in Glykolyse-Intermediate umgewandelt: In der Leber Fructokinase → Fructose-1-phosphat → Aldolase B → DHAP + Glycerinaldehyd. In Muskel/anderen Geweben: Hexokinase → Fructose-6-phosphat → direkt in Glykolyse.</p>\n\n    <h3>UDP-Glucose</h3>\n    <p>UDP-Glucose ist die aktivierte Glucoseform (aus G1P + UTP). Sie dient der Glykogensynthese (Glykogensynthase), der Biosynthese von Glucuroniden (z.B. Bilirubinkonjugation) und anderen Transferreaktionen.</p>\n  "
    },
    {
      "id": 19,
      "title": "Lipide – Klassifikation, Fettsäuren und Triacylglycerine",
      "html": "\n    <h2>Lipide</h2>\n    <p>Lipide werden nach ihrer biologischen Funktion klassifiziert:</p>\n    <ul>\n      <li><strong>Energiespeicherlipide:</strong> Triacylglycerine (Fette und Öle)</li>\n      <li><strong>Strukturlipide:</strong> Membranlipide (Glycerophospholipide, Sphingolipide, Cholesterin)</li>\n      <li><strong>Biologisch aktive Lipide:</strong> Signallipide (Eicosanoide, Inositolphosphate), Cofaktoren (Vit. K), Pigmente (Carotinoide)</li>\n    </ul>\n\n    <h3>Fettsäuren</h3>\n    <p>Fettsäuren sind Carbonsäuren mit langen Kohlenwasserstoffketten. Wichtige Eigenschaften:</p>\n    <ul>\n      <li><strong>Gesättigte FS</strong> (keine Doppelbindungen): Bei 25 °C meist fest/wachsartig (C12–C24); dichte Packung möglich</li>\n      <li><strong>Ungesättigte FS</strong> (eine oder mehrere Doppelbindungen): Bei 25 °C meist flüssig; cis-Doppelbindungen erzeugen Knick → lockere Packung. Ausnahme: Transfettsäuren (gestreckte Konformation → ähnlich gesättigt)</li>\n      <li><strong>Essentielle FS:</strong> Mehrfach ungesättigte FS, deren erste Doppelbindung nach dem 9. Kohlenstoff liegt (ω-6 und ω-3, z.B. Linolsäure, α-Linolensäure)</li>\n      <li><strong>Löslichkeit:</strong> Nimmt mit Kettenlänge ab; freie FS kommen in wässriger Umgebung nur an Albumin gebunden vor</li>\n      <li>Bei physiologischem pH (7,4) liegen Fettsäuren überwiegend ionisiert als Carboxylate vor</li>\n    </ul>\n\n    <h3>Triacylglycerine (Triglyceride)</h3>\n    <p>Glycerol + 3 Fettsäuren (verestert) = Triacylglycerin. Eigenschaften:</p>\n    <ul>\n      <li>Unpolar, geringere Dichte als Wasser (schwimmen)</li>\n      <li>Hauptspeicherfett des Fettgewebes (energiedichter als Glykogen: ~38 kJ/g vs. ~17 kJ/g)</li>\n      <li>Ranzigkeit: Oxidative Spaltung von Doppelbindungen bei Luftkontakt → Aldehyde, kurze Carbonsäuren</li>\n    </ul>\n    <p>Beispiele: Olivenöl (viel C18:1 ungesättigt), Butter (gemischt, viel C16–C18 gesättigt), Fleischfett (vorwiegend C16–C18 gesättigt und einfach ungesättigt).</p>\n  "
    },
    {
      "id": 20,
      "title": "Membranlipide und biologische Membranen",
      "html": "\n    <h2>Membranlipide und biologische Membranen</h2>\n    <p>Membranlipide sind <strong>amphiphil</strong>: Sie besitzen einen <strong>hydrophilen Kopf</strong> (polar) und einen <strong>hydrophoben Schwanz</strong> (unpolar). In wässriger Umgebung bilden sie spontan Mizellen (kugelige Aggregate), Lipiddoppelschichten oder Liposome (geschlossene Vesikel).</p>\n\n    <h3>Glycerophospholipide</h3>\n    <p>Grundgerüst: Glycerol + 2 Fettsäuren (sn-1, sn-2) + Phosphatgruppe + polare Kopfgruppe. Wichtige Vertreter:</p>\n    <ul>\n      <li><strong>Phosphatidylcholin (PC):</strong> Häufigstes Phospholipid tierischer Zellen; zwitterionisch</li>\n      <li><strong>Phosphatidylethanolamin (PE):</strong> Inneres Membranblatt; beteiligt an Membranfusion</li>\n      <li><strong>Phosphatidylserin (PS):</strong> Negativ geladen; innen; Signal für Apoptose wenn außen exponiert</li>\n      <li><strong>Phosphatidylinositol (PI):</strong> Signaltransduktion (PIP₂ → IP₃ + DAG)</li>\n      <li><strong>Cardiolipin:</strong> Innere Mitochondrienmembran; wichtig für Atmungskettenfunktion</li>\n    </ul>\n    <p>Synthese über den <strong>Kennedy-Weg</strong> aus Glycerol-3-phosphat und Acyl-CoA (Phosphatidat als Grundbaustein).</p>\n\n    <h3>Sphingolipide</h3>\n    <p>Grundgerüst: <strong>Sphingosin</strong> (langkettiger Aminoalkohol) statt Glycerol.</p>\n    <ul>\n      <li><strong>Ceramid:</strong> Sphingosin + Fettsäure (Amidbindung) → zentraler Vorläufer</li>\n      <li><strong>Sphingomyelin:</strong> Ceramid + Phosphocholin; in Nervengewebe und Myelin</li>\n      <li><strong>Cerebroside:</strong> Ceramid + ein Zuckerrest; im Nervensystem</li>\n      <li><strong>Ganglioside:</strong> Ceramid + Oligosaccharide + Sialinsäure; Zelloberflächenfunktionen, v.a. im ZNS</li>\n    </ul>\n    <p>Glycosphingolipide sitzen hauptsächlich auf der Außenseite der Zellmembran und sind wichtig für Zell-Zell-Erkennung (Blutgruppenantigene!).</p>\n    <p>Synthese: Sphinganin (aus Palmitoyl-CoA + Serin) → N-Acylsphinganin → Ceramid → + Kopfgruppen.</p>\n\n    <h3>Membranaufbau und Fluidität</h3>\n    <p>Das <strong>Fluid-Mosaik-Modell</strong> (Singer &amp; Nicolson, 1972): Die Membran ist eine dynamische Lipiddoppelschicht mit lateral beweglichen integralen und peripheren Proteinen. Hydrophile Kopfgruppen zeigen nach außen, hydrophobe Schwänze innen.</p>\n    <p>Fluidität hängt ab von:</p>\n    <ul>\n      <li>Sättigungsgrad der Fettsäuren (ungesättigt → mehr Fluidität)</li>\n      <li>Kettenlänge (kürzer → mehr Fluidität)</li>\n      <li>Temperatur (höher → mehr Fluidität)</li>\n      <li>Cholesterin: Puffert Fluiditätsänderungen (bei hoher Temp. → steifer; bei niedriger Temp. → verhindert Kristallisation)</li>\n    </ul>\n    <p><strong>Lipid Rafts:</strong> Cholesterin- und sphingolipidreiche Mikrodomänen; Plattformen für Signalübertragung.</p>\n    <p><strong>Membranasymmetrie:</strong> Beide Membranblätter haben unterschiedliche Lipidzusammensetzung. Laterale Diffusion (innerhalb eines Blatts): schnell. Flip-Flop (zwischen Blättern): langsam, benötigt Flippasen.</p>\n\n    <h3>Eicosanoide – biologisch aktive Lipide</h3>\n    <p>Aus <strong>Arachidonsäure</strong> (20:4, ω-6) durch Cyclooxygenase (COX) oder Lipoxygenase gebildet:</p>\n    <ul>\n      <li><strong>Prostaglandine:</strong> Lokale Signalmoleküle bei Entzündung, Schmerz, Gefäßregulation</li>\n      <li><strong>Thromboxane:</strong> Thrombozytenaggregation und Vasokonstriktion</li>\n      <li><strong>Leukotriene:</strong> Atemwegsregulation, Entzündung (z.B. bei Asthma)</li>\n    </ul>\n    <p>NSAIDs (z.B. Aspirin, Ibuprofen) hemmen COX → analgetisch, antipyretisch, antiphlogistisch.</p>\n\n    <h3>Lipasen</h3>\n    <p>Lipasen hydrolysieren Esterbindungen von Lipiden. Wichtig für Verdauung (Pankreaslipase), Lipolyse im Fettgewebe (hormonsensitive Lipase) und Lipidumbau in Membranen (Phospholipasen A₁, A₂, C, D).</p>\n  "
    },
    {
      "id": 21,
      "title": "Fettsäureabbau – β-Oxidation und Ketonkörper",
      "html": "\n    <h2>β-Oxidation – Fettsäureabbau im Mitochondrium</h2>\n    <p>Fettsäuren werden schrittweise im Mitochondrium abgebaut. Voraussetzung: Aktivierung und Import.</p>\n\n    <h3>Aktivierung und Carnitin-Shuttle</h3>\n    <ol>\n      <li>Im Cytosol: Fettsäure + CoA + ATP → Acyl-CoA + AMP + PPi (Acyl-CoA-Synthetase)</li>\n      <li>Kurz- und mittelkettige FS passieren die innere Membran direkt</li>\n      <li>Langkettige FS (&gt;C12): Acylgruppe wird auf <strong>Carnitin</strong> übertragen (Carnitin-Palmitoyltransferase I, CPT-I; gehemmt durch Malonyl-CoA!); als Acylcarnitin über die Membran; auf der Matrixseite wieder auf CoA übertragen (CPT-II)</li>\n    </ol>\n\n    <h3>Vier Schritte der β-Oxidation (pro Zyklus)</h3>\n    <ol>\n      <li><strong>Oxidation:</strong> Acyl-CoA → 2-trans-Enoyl-CoA + FADH₂ (Acyl-CoA-Dehydrogenase)</li>\n      <li><strong>Hydratation:</strong> 2-trans-Enoyl-CoA + H₂O → L-3-Hydroxyacyl-CoA (Enoyl-CoA-Hydratase)</li>\n      <li><strong>Oxidation:</strong> L-3-Hydroxyacyl-CoA → 3-Ketoacyl-CoA + NADH (3-Hydroxyacyl-CoA-Dehydrogenase)</li>\n      <li><strong>Thiolyse:</strong> 3-Ketoacyl-CoA + CoA → Acetyl-CoA + verkürztes Acyl-CoA (Thiolase/β-Ketothiolase)</li>\n    </ol>\n    <p>Pro Zyklus: 1 FADH₂ + 1 NADH + 1 Acetyl-CoA; Fettsäure um 2 C-Atome verkürzt.</p>\n    <p>Beispiel Palmitat (C16:0): 7 Zyklen → 8 Acetyl-CoA + 7 FADH₂ + 7 NADH → ~106 ATP (netto nach Aktivierungskosten).</p>\n\n    <h3>Ketonkörper</h3>\n    <p>Bei Fasten, Kohlenhydratmangel oder unbehandeltem Diabetes mellitus Typ 1 überschreitet Acetyl-CoA die Kapazität des Citratzyklus (Oxalacetat-Mangel) → <strong>Ketogenese in der Leber</strong>:</p>\n    <ul>\n      <li>2 Acetyl-CoA → Acetoacetyl-CoA → HMG-CoA → <strong>Acetoacetat</strong></li>\n      <li>Acetoacetat → <strong>β-Hydroxybutyrat</strong> (NADH-abhängig) oder spontan → <strong>Aceton</strong> (flüchtig, Atemluft)</li>\n    </ul>\n    <p>Die Leber selbst kann Ketonkörper nicht verwerten (fehlt Succinyl-CoA:Acetoacetat-CoA-Transferase). Periphere Gewebe (Herz, Gehirn, Niere) bauen Ketonkörper über <strong>Ketolyse</strong> ab: zurück zu Acetyl-CoA → Citratzyklus. Bei extremer Ketonkörperbildung → Ketoazidose (gefährlich bei Typ-1-Diabetes).</p>\n  "
    },
    {
      "id": 22,
      "title": "Fettsäuresynthese",
      "html": "\n    <h2>Fettsäuresynthese – anaboler Aufbau von Fettsäuren</h2>\n    <p>Die Fettsäuresynthese ist der Umkehrweg zur β-Oxidation, findet aber im <strong>Cytosol</strong> statt und verwendet andere Enzyme und Coenzyme. Vereinfacht: aus Zucker wird Fett (Acetyl-CoA aus der Glykolyse wird zu Fettsäuren).</p>\n\n    <h3>Schrittmacherreaktion: Acetyl-CoA-Carboxylase (ACC)</h3>\n    <p>Acetyl-CoA + CO₂ + ATP → <strong>Malonyl-CoA</strong> + ADP + Pi</p>\n    <p>Benötigt Biotin als prosthetische Gruppe. Regulation: Aktiviert durch Citrat und Insulin; gehemmt durch Malonyl-CoA (hemmt auch CPT-I → verhindert gleichzeitigen Abbau!), Palmitoyl-CoA, AMPK (Phosphorylierung).</p>\n\n    <h3>Fettsäuresynthase (FAS) – der Multienzymkomplex</h3>\n    <p>In Vertebraten: ein großes Polypeptid mit <strong>7 Domänen / aktiven Zentren</strong>. In Bakterien/Pflanzen: separate Untereinheiten; in Hefe: zwei getrennte Polypeptide.</p>\n    <p>Das <strong>Acyl-Carrier-Protein (ACP)</strong> trägt die wachsende Fettsäurekette zwischen den Aktivzentren.</p>\n\n    <h3>Reaktionszyklus (je +C₂)</h3>\n    <ol>\n      <li><strong>Beladung:</strong> ACP + Acetyl-CoA (Starter) + Malonyl-CoA</li>\n      <li><strong>Kondensation:</strong> β-Ketoacyl-ACP-Synthase (KS): Acetyl + Malonyl → 3-Ketobutyryl-ACP + CO₂ (exergon durch CO₂-Abspaltung)</li>\n      <li><strong>Reduktion 1:</strong> β-Ketoacyl-ACP-Reduktase: Ketogruppe → OH (NADPH)</li>\n      <li><strong>Dehydratation:</strong> β-Hydroxyacyl-ACP-Dehydratase: OH → Doppelbindung + H₂O</li>\n      <li><strong>Reduktion 2:</strong> Enoyl-ACP-Reduktase: Doppelbindung → gesättigt (NADPH)</li>\n      <li><strong>Translokation:</strong> Acylgruppe wird auf KS übertragen → neuer Zyklus</li>\n    </ol>\n    <p>Nach 7 Zyklen: <strong>Palmitat</strong> (C16:0) wird freigesetzt. Gesamtbilanz für Palmitat: 8 Acetyl-CoA + 7 ATP + 14 NADPH → Palmitat + 8 CoA + 7 ADP + 7 Pi + 14 NADP⁺ + 6 H₂O</p>\n\n    <h3>NADPH-Quellen für die Fettsäuresynthese</h3>\n    <ul>\n      <li><strong>Pentosephosphatweg:</strong> Hauptquelle (2 NADPH pro G6P)</li>\n      <li><strong>Malatenzym:</strong> Malat + NADP⁺ → Pyruvat + CO₂ + NADPH</li>\n    </ul>\n    <p>Enge Verbindung mit dem Kohlenhydratstoffwechsel: Glykolyse → Pyruvat → Acetyl-CoA → Citrat → ins Cytosol → Acetyl-CoA (Fettsäuresynthese) + Oxalacetat → Malat → NADPH (Malatenzym).</p>\n\n    <h3>Kettenverlängerung und Desaturierung</h3>\n    <p>Über Palmitat hinaus: Verlängerung durch Elongasen (im ER oder Mitochondrium). Einbau von Doppelbindungen durch Desaturasen (bis Δ9 im Menschen möglich → daher Linolsäure und α-Linolensäure essenziell).</p>\n  "
    },
    {
      "id": 23,
      "title": "Cholesterinstoffwechsel und Lipoproteine",
      "html": "\n    <h2>Cholesterinstoffwechsel</h2>\n    <p>Cholesterin ist essenzieller Bestandteil tierischer Membranen (reguliert Fluidität) und Ausgangsstoff für Steroidhormone (Cortisol, Aldosteron, Östrogen, Progesteron, Testosteron), Gallensäuren und Vitamin D.</p>\n\n    <h3>Biosynthese (aus Acetyl-CoA)</h3>\n    <ol>\n      <li>3 Acetyl-CoA → HMG-CoA (via Acetoacetyl-CoA)</li>\n      <li><strong>HMG-CoA-Reduktase</strong> (Schrittmacherenzym, Statinhemmung): HMG-CoA + 2 NADPH → <strong>Mevalonat</strong></li>\n      <li>Mevalonat → aktivierte Isopreneinheiten (IPP, DMAPP)</li>\n      <li>6 Isopreneinheiten → <strong>Squalen</strong> (C30, linear)</li>\n      <li>Squalen → Lanosterol → Cholesterin (Cyclisierung und ~20 Modifikationsschritte)</li>\n    </ol>\n\n    <h3>Regulation der Cholesterinsynthese</h3>\n    <ul>\n      <li>HMG-CoA-Reduktase: Phosphorylierung durch AMPK/Glucagon hemmt; Dephosphorylierung durch Insulin aktiviert; Proteolyse reguliert Menge</li>\n      <li><strong>SREBPs (Sterol Regulatory Element-Binding Proteins):</strong> Transkriptionsfaktoren, die bei Cholesterinmangel die Expression der HMG-CoA-Reduktase und des LDL-Rezeptors hochregulieren</li>\n      <li><strong>ACAT:</strong> Verestert überschüssiges Cholesterin zur Speicherung</li>\n      <li><strong>Statine:</strong> Kompetitive HMG-CoA-Reduktase-Hemmer → wichtigstes Medikament zur Senkung des LDL-Cholesterins</li>\n    </ul>\n\n    <h3>Isoprenoide – Produkte des Mevalonat-Wegs</h3>\n    <p>Neben Cholesterin entstehen: Vitamin A, E, K; Carotinoide; Pflanzenhormone (Giberelline); Ubichinon (CoQ10); Dolichole; Gummi; Chlorophyll-Seitenketten.</p>\n\n    <h3>Cholesterinverteilung und -ester</h3>\n    <ul>\n      <li><strong>In der Leber:</strong> Einbau in Membranen, Umwandlung zu Gallensäuren (via 7α-Hydroxylase), Veresterung durch ACAT (zu Cholesterinestern) und Export via VLDL</li>\n      <li><strong>In extrahepatischen Geweben:</strong> Membranen, Steroidhormonsynthese (v.a. Nebenniere, Gonaden), Vitamin-D-Synthese (Haut)</li>\n      <li><strong>Cholesterinester:</strong> Durch ACAT (intrazellulär) oder LCAT (auf HDL) gebildet; Speicher- und Transportform</li>\n    </ul>\n\n    <h3>Gallensäuren</h3>\n    <p>Gallensäuren sind polare Cholesterinderivate, die in der Leber aus Cholesterin synthetisiert, in der Gallenblase gespeichert und nach einer Mahlzeit in den Dünndarm sezerniert werden. Dort emulgieren <strong>Gallensalze</strong> Fette → Mizellenbildung → erleichtert Fettverdauung und Resorption. Gallensäuren werden im enterohepatischen Kreislauf zu ~95 % rückresorbiert.</p>\n\n    <hr>\n\n    <h3>Lipoproteine – Fettransport im Blut</h3>\n    <p>Da Lipide wasserunlöslich sind, werden sie in <strong>Lipoproteinen</strong> transportiert (Kern aus Triacylglycerinen/Cholesterinestern, Hülle aus Phospholipiden, Cholesterin und Apolipoproteinen):</p>\n    <table>\n      <thead><tr><th>Lipoprotein</th><th>Dichte</th><th>Hauptfunktion</th><th>Apolipoprotein</th></tr></thead>\n      <tbody>\n        <tr><td>Chylomikronen</td><td>sehr niedrig</td><td>Transport Nahrungslipide (Darm → Gewebe)</td><td>ApoB-48, ApoC-II</td></tr>\n        <tr><td>VLDL</td><td>sehr niedrig</td><td>Transport endogener Lipide (Leber → Gewebe)</td><td>ApoB-100, ApoC-II</td></tr>\n        <tr><td>IDL</td><td>intermediate</td><td>Zwischenform; Umbau zu LDL</td><td>ApoB-100</td></tr>\n        <tr><td>LDL</td><td>niedrig</td><td>Cholesterin zu Geweben; „schlechtes\" Cholesterin</td><td>ApoB-100</td></tr>\n        <tr><td>HDL</td><td>hoch</td><td>Reverser Cholesterintransport (Gewebe → Leber); „gutes\" Cholesterin</td><td>ApoA-I</td></tr>\n      </tbody>\n    </table>\n    <p><strong>Lipoproteinlipase (LPL)</strong> an Kapillarendothelien (aktiviert durch ApoC-II): spaltet Triacylglycerine → freie Fettsäuren für das Gewebe.</p>\n\n    <h3>LDL-Rezeptor und rezeptorvermittelte Endozytose</h3>\n    <ol>\n      <li>LDL bindet mit ApoB-100 an LDL-Rezeptor → Clathrin-beschichtete Grube</li>\n      <li>Einstülpung → clathrinbeschichtetes Vesikel → Clathrin recycelt</li>\n      <li>Fusion mit Endosom → pH-Abfall → LDL dissoziiert → Rezeptor recycelt</li>\n      <li>Fusion mit Lysosom → Abbau von Cholesterinestern → freies Cholesterin</li>\n    </ol>\n\n    <h3>Atherosklerose</h3>\n    <p>Entstehung: Endothelschädigung (Hypertonie, Rauchen, Entzündung) → LDL dringt in Intima ein → oxidative Modifikation → Aufnahme durch Makrophagen über <strong>Scavenger-Rezeptoren</strong> → cholesterinreiche <strong>Schaumzellen</strong> → Bildung fibröser Kappe und Lipidkern → <strong>Atherom</strong>. Plaqueruptur → Thrombusbildung → Myokardinfarkt/Schlaganfall.</p>\n\n    <h3>Verdauung und Resorption von Fetten</h3>\n    <p>Gallensalze emulgieren Fette → intestinale Lipasen (Pankreaslipase + Colipase) hydrolysieren Triacylglycerine → freie Fettsäuren + Monoacylglycerine → Mizellenaufnahme in Enterozyten → Resynthese zu Triacylglycerinen → Chylomikronenbildung → Abgabe in Lymphe.</p>\n  "
    },
    {
      "id": 24,
      "title": "Membranproteine und Membrantransport",
      "html": "\n    <h2>Membranproteine</h2>\n    <p>Membranproteine übernehmen Transport-, Rezeptor-, Enzym- und Ankerfunktionen. Man unterscheidet:</p>\n    <ul>\n      <li><strong>Integrale Membranproteine:</strong> Fest in die Lipiddoppelschicht eingebettet; viele sind <strong>Transmembranproteine</strong> mit hydrophoben α-Helices oder β-Fass-Strukturen (Porine)</li>\n      <li><strong>Periphere Membranproteine:</strong> Assoziieren mit der Membranoberfläche über elektrostatische Wechselwirkungen oder via Lipidanker (GPI, Acylierung)</li>\n    </ul>\n    <p>Das <strong>Fluid-Mosaik-Modell</strong> beschreibt lateral bewegliche Proteine und Lipide. Beweglichkeit wird eingeschränkt durch Zytoskelett, Zellkontakte, Lipid Rafts und Proteincluster.</p>\n\n    <hr>\n\n    <h3>Transportmechanismen</h3>\n    <table>\n      <thead><tr><th>Typ</th><th>Richtung</th><th>Energie</th><th>Beispiele</th></tr></thead>\n      <tbody>\n        <tr><td>Passive Diffusion</td><td>Mit Gradient</td><td>Keine</td><td>O₂, CO₂, Ethanol, kleine unpolare Moleküle</td></tr>\n        <tr><td>Erleichterte Diffusion</td><td>Mit Gradient</td><td>Keine (Kanal/Carrier)</td><td>GLUT-Transporter (Glucose), Aquaporine (Wasser), Ionenkanäle</td></tr>\n        <tr><td>Primär aktiver Transport</td><td>Gegen Gradient</td><td>ATP direkt</td><td>Na⁺/K⁺-ATPase, Ca²⁺-ATPase, ABC-Transporter</td></tr>\n        <tr><td>Sekundär aktiver Transport</td><td>Gegen Gradient</td><td>Ionengradient (indirekt)</td><td>SGLT (Na⁺/Glucose-Symport), Na⁺/Ca²⁺-Antiport</td></tr>\n      </tbody>\n    </table>\n\n    <h3>Transportprotein-Typen</h3>\n    <ul>\n      <li><strong>Uniporter:</strong> Transportiert einen Stoff in eine Richtung (z.B. GLUT1)</li>\n      <li><strong>Symporter:</strong> Zwei Stoffe gleichzeitig in dieselbe Richtung (z.B. SGLT: Na⁺ und Glucose)</li>\n      <li><strong>Antiporter:</strong> Zwei Stoffe in entgegengesetzte Richtungen (z.B. Na⁺/K⁺-ATPase, Cl⁻/HCO₃⁻-Antiport in Erythrozyten)</li>\n    </ul>\n    <p>Carrier-vermittelter Transport ist <strong>sättigbar</strong> (limitierte Bindungsstellen) und <strong>spezifisch</strong> (Substratselektivität nach Größe, Ladung, Struktur).</p>\n\n    <h3>Na⁺/K⁺-ATPase (Natrium-Kalium-Pumpe)</h3>\n    <p>Primär aktiver Antiporter: Pro ATP-Hydrolyse → <strong>3 Na⁺ aus</strong> + <strong>2 K⁺ in</strong> die Zelle. Aufbau und Aufrechterhaltung des Membranpotenzials und der Ionengradienten (Basis für Erregung, sekundär aktiven Transport). Etwa 25 % des ATP-Grundumsatzes des Menschen!</p>\n\n    <h3>Glucosetransport</h3>\n    <ul>\n      <li><strong>GLUT-Transporter:</strong> Erleichterte Diffusion entlang des Glucosegradienten. GLUT4 wird durch Insulin in Muskel und Fettgewebe an die Membran mobilisiert.</li>\n      <li><strong>SGLT (Sodium-Glucose-Linked Transporter):</strong> Sekundär aktiv, nutzt Na⁺-Gradienten. Wichtig in Darm (SGLT1) und Niere (SGLT2). SGLT2-Hemmer (Gliflozine) sind Diabetesmedikamente.</li>\n    </ul>\n\n    <h3>ABC-Transporter</h3>\n    <p>ATP-binding cassette transporter: Riesige Familie von ATP-abhängigen Transportern für Lipide, Ionen, Toxine, Medikamente. Wichtig: MDR1 (Multidrug-Resistenz in Krebszellen), CFTR (Chloridkanal, bei Mukoviszidose mutiert), ABCA1 (Cholesterinexport, Grundlage HDL-Bildung).</p>\n\n    <h3>Membranpotenzial und elektrochemischer Gradient</h3>\n    <p>Das Membranpotenzial entsteht durch ungleiche Ionenverteilung und selektive Permeabilität (Ruhepotenzial ~−70 mV in Nervenzellen). Der <strong>elektrochemische Gradient</strong> setzt sich aus Konzentrationsgradient + elektrischem Potenzialunterschied zusammen. Aquaporine ermöglichen schnellen, selektiven Wassertransport (wichtig in Niere, roten Blutkörperchen).</p>\n  "
    },
    {
      "id": 25,
      "title": "Photosynthese",
      "html": "\n    <h2>Photosynthese – Lichtenergie zu chemischer Energie</h2>\n    <p>Photosynthese ist der Prozess, durch den Pflanzen, Algen und Cyanobakterien Lichtenergie in chemische Energie (ATP, NADPH) umwandeln und CO₂ zu organischen Verbindungen fixieren. Gesamtreaktion: 6 CO₂ + 6 H₂O + Licht → C₆H₁₂O₆ + 6 O₂</p>\n    <p>Ort: <strong>Chloroplasten</strong> (in Pflanzen/Algen). Lichtabhängige Reaktionen: in den <strong>Thylakoidmembranen</strong>. Calvin-Zyklus: im <strong>Stroma</strong>.</p>\n\n    <h3>Lichtabhängige Reaktionen – die Z-Schema-Kette</h3>\n    <p>Zwei Photosysteme arbeiten hintereinander (Z-Schema):</p>\n    <ul>\n      <li><strong>Photosystem II (PSII):</strong> Chlorophyll-P680 absorbiert Licht → Elektronen werden angeregt → Wasseroxidation (Photolyse: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻) → Elektronen fließen auf Plastoquinon</li>\n      <li><strong>Elektronentransportkette:</strong> Plastoquinon → Cytochrom b6f-Komplex → Plastocyanin (analog zur mitochondrialen Atmungskette; baut Protonengradienten im Thylakoidlumen auf)</li>\n      <li><strong>Photosystem I (PSI):</strong> Chlorophyll-P700 wird erneut durch Licht angeregt → Ferredoxin → <strong>Ferredoxin-NADP⁺-Reduktase → NADPH</strong></li>\n    </ul>\n    <p><strong>Photophosphorylierung:</strong> Der Protonengradient über der Thylakoidmembran (lumen saurer als Stroma) treibt die <strong>ATP-Synthase (CF₀CF₁)</strong> an → ATP. Analoge zur oxidativen Phosphorylierung in Mitochondrien.</p>\n\n    <h3>Chlorophyll und weitere Pigmente</h3>\n    <p>Chlorophyll a und b sind Magnesium-Porphyrine; sie absorbieren Blau (~430 nm) und Rot (~680 nm), reflektieren Grün. <strong>Akzessorische Pigmente</strong> (Carotinoide, Phycobiline) erweitern das Absorptionsspektrum und übertragen Energie auf die Reaktionszentren.</p>\n\n    <hr>\n\n    <h3>Calvin-Zyklus (Dunkelreaktion / lichtunabhängige Reaktion)</h3>\n    <p>Drei Phasen, im Stroma ablaufend:</p>\n    <ol>\n      <li><strong>CO₂-Fixierung:</strong> CO₂ + Ribulose-1,5-bisphosphat (<strong>RuBP</strong>) → 2× 3-Phosphoglycerat (3-PGA) durch <strong>Rubisco</strong> (RuBP-Carboxylase/Oxygenase)</li>\n      <li><strong>Reduktion:</strong> 3-PGA + ATP + NADPH → Glycerinaldehyd-3-phosphat (G3P)</li>\n      <li><strong>Regeneration des CO₂-Akzeptors:</strong> 5/6 des G3P → RuBP (ATP-verbrauchend, via Pentosephosphat-ähnliche Reaktionen)</li>\n    </ol>\n    <p>Für je 3 CO₂ fixiert: 9 ATP + 6 NADPH → 1 G3P (netto). G3P → Stärke (Chloroplast), Saccharose (Export), Aminosäuren etc.</p>\n\n    <h3>C3- vs. C4-Pflanzen und Photorespiration</h3>\n    <p><strong>C3-Pflanzen:</strong> Erstes stabiles Produkt ist 3-PGA (C3); bei hohem O₂/niedrigem CO₂-Verhältnis oxygeniert Rubisco RuBP → <strong>Photorespiration</strong> (Energieverlust). <strong>C4-Pflanzen</strong> (Mais, Zuckerrohr) konzentrieren CO₂ vorab im Mesophyll → kein Photorespirationsverlust. <strong>CAM-Pflanzen</strong> (Kakteen) fixieren CO₂ nachts als Malat.</p>\n  "
    },
    {
      "id": 26,
      "title": "Aminosäure- und Proteinstoffwechsel",
      "html": "\n    <h2>Aminosäure- und Proteinstoffwechsel</h2>\n\n    <h3>Stickstoffbilanz</h3>\n    <p>Die Stickstoffbilanz (N-Bilanz) = N-Aufnahme (Nahrungsprotein) − N-Ausscheidung (Harnstoff, NH₄⁺, Harnsäure im Urin):</p>\n    <ul>\n      <li><strong>Ausgeglichen:</strong> Erwachsene in Ruhe (Aufnahme = Abbau)</li>\n      <li><strong>Positiv:</strong> Wachstum, Schwangerschaft, Ausdauertraining → Nettoproteinsynthese</li>\n      <li><strong>Negativ:</strong> Mangelernährung, Infektionen, starker Katabolismus → Nettoproteinabbau</li>\n    </ul>\n\n    <h3>Proteinverdauung</h3>\n    <ol>\n      <li><strong>Magen:</strong> Pepsinogen → Pepsin (durch HCl, ~pH 2); Pepsin spaltet Proteine in große Fragmente (~15 % der Proteolyse)</li>\n      <li><strong>Dünndarm:</strong> Pankreatische Endopeptidasen (Trypsin, Chymotrypsin, Elastase) → kleinere Peptide. Exopeptidasen (Aminopeptidase vom N-Terminus, Carboxypeptidase vom C-Terminus) → freie Aminosäuren und Di-/Tripeptide</li>\n      <li><strong>Enterozyten:</strong> Di-/Tripeptide werden über H⁺/Peptid-Cotransporter (PepT1) aufgenommen und intrazellulär zu Aminosäuren hydrolysiert</li>\n    </ol>\n\n    <h3>Aminosäure-Pool und Schicksale der Aminosäuren</h3>\n    <p>Freie Aminosäuren speisen sich aus Nahrung, körpereigenem Proteinabbau (ständiger Umsatz) und endogener Synthese. Mögliche Schicksale:</p>\n    <ul>\n      <li><strong>Proteinsynthese</strong></li>\n      <li><strong>Synthese anderer N-haltiger Verbindungen</strong> (Nukleotide, Porphyrine, Neurotransmitter, Kreatin)</li>\n      <li><strong>Transamination:</strong> Aminogruppe auf α-Ketoglutarat → Glutamat → Harnstoffzyklus; Kohlenstoffgerüst → Gluconeogenese oder Citratzyklus</li>\n      <li><strong>Energiegewinnung:</strong> Glucogene AS → Glucose/Pyruvat/OAA; Ketogene AS → Acetyl-CoA/Acetoacetat</li>\n    </ul>\n\n    <h3>Hämsynthese und Häm-Abbau</h3>\n    <p><strong>Häm-Synthese:</strong> Mehrstufiger Biosyntheseweg: Succinyl-CoA + Glycin → δ-Aminolävulinat (ALA) → Porphobilinogen → Uroporphyrinogen → Protoporphyrin IX + Fe²⁺ → Häm. Läuft teils in Mitochondrien, teils im Cytosol. Wichtig in Knochenmark (Erythropoese), Leber.</p>\n    <p><strong>Porphyrien:</strong> Enzymdefekte in der Hämsynthese; Akkumulation toxischer Porphyrin-Intermediate.</p>\n    <p><strong>Häm-Abbau:</strong> Alte Erythrozyten in Knochenmark, Leber, Milz werden abgebaut. Häm → Biliverdin (durch Hämoxygenase) → <strong>indirektes Bilirubin</strong> (fettlöslich, an Albumin gebunden) → Leber → <strong>Glucuronidierung</strong> (UDP-Glucuronosyltransferase) → <strong>direktes Bilirubin</strong> (wasserlöslich) → Galle → Darm → Urobilinogen (farbgebend in Urin/Stuhl). Bei Störung: Ikterus (Gelbsucht).</p>\n\n    <h3>Proteinfunktionen im Überblick</h3>\n    <p>Proteine erfüllen nahezu alle zellulären Funktionen: Strukturproteine (Keratin, Kollagen), Enzyme, Hormonsignalgeber (Insulin, Glucagon), Rezeptoren, Antikörper, Transporter (Hämoglobin, Albumin), Regulatoren der Genexpression (Transkriptionsfaktoren), motorische Proteine (Myosin, Kinesin). Indirekt tragen sie auch zur Blutzuckerhomöostase bei (glucogene Aminosäuren).</p>\n  "
    },
    {
      "id": 27,
      "title": "Blutgerinnung",
      "html": "\n    <h2>Blutgerinnung – proteolytische Aktivierungskaskade</h2>\n    <p>Die Hämostase erfolgt in mehreren Schritten: (1) Vasokonstriktion, (2) primärer Plättchenpfropf (Thrombozytenaggregation), (3) Gerinnungskaskade → stabiles Fibringerinnsel.</p>\n\n    <h3>Gerinnungskaskade</h3>\n    <p>Zwei Wege aktivieren den gemeinsamen Weg:</p>\n    <ul>\n      <li><strong>Extrinsischer Weg (Gewebsfaktor-Weg):</strong> Gewebsfaktor (TF) + Faktor VII → Aktivierung von Faktor X</li>\n      <li><strong>Intrinsischer Weg (Kontaktaktivierungsweg):</strong> Faktor XII (Hageman-Faktor) → Kaskade über XI, IX, VIII → Faktor X</li>\n      <li><strong>Gemeinsamer Weg:</strong> Faktor Xa + Va → Prothrombinase-Komplex → Prothrombin → <strong>Thrombin</strong> (Serinprotease)</li>\n    </ul>\n    <p>Thrombin: Spaltet Fibrinopeptide A und B von Fibrinogen → Fibrinmonomere polymerisieren → lockeres Fibrinnetz → Faktor XIII (durch Thrombin aktiviert) vernetzt Fibrin kovalent → stabiles Gerinnsel.</p>\n\n    <h3>Pathologien</h3>\n    <ul>\n      <li><strong>Hämophilie A/B:</strong> Faktor-VIII-(A) oder IX-(B)-Defekt → gestörte Gerinnung</li>\n      <li><strong>Thrombophilie:</strong> Überschießende Gerinnungsaktivierung (z.B. Faktor-V-Leiden)</li>\n      <li><strong>Vitamin K:</strong> Notwendig für die Carboxylierung der Faktoren II, VII, IX, X (funktionelle Aktivierung). Cumarinantagonisten (Warfarin) hemmen Vitamin-K-Epoxid-Reduktase → Antikoagulation.</li>\n    </ul>\n  "
    }
  ],
  "pathways": [
    {
      "name": "Galaktose-Abbau (Leloir-Weg)",
      "reactions": [
        {
          "substrates": [
            "Laktose"
          ],
          "enzyme": "Laktase",
          "products": [
            "Galaktose",
            "D-Glucose"
          ]
        },
        {
          "substrates": [
            "Galaktose",
            "ATP"
          ],
          "enzyme": "Galaktokinase",
          "products": [
            "Galaktose-1-Phosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Galaktose-1-Phosphat",
            "UDP-Glucose"
          ],
          "enzyme": "Galaktose-1-Phosphat-Uridylyltransferase",
          "products": [
            "Glucose-1-Phosphat",
            "UDP-Galaktose"
          ]
        },
        {
          "substrates": [
            "UDP-Galaktose"
          ],
          "enzyme": "UDP-Galaktose-4-Epimerase",
          "products": [
            "UDP-Glucose"
          ]
        },
        {
          "substrates": [
            "Glucose-1-Phosphat"
          ],
          "enzyme": "Phosphoglucomutase",
          "products": [
            "Glucose-6-Phosphat"
          ]
        }
      ]
    },
    {
      "name": "Glutathion-Zyklus",
      "reactions": [
        {
          "substrates": [
            "2 GSH",
            "H₂O₂"
          ],
          "enzyme": "Glutathion-Peroxidase",
          "products": [
            "GSSG",
            "2 H₂O"
          ]
        },
        {
          "substrates": [
            "GSSG",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Glutathion-Reduktase",
          "products": [
            "2 GSH",
            "NADP⁺"
          ]
        }
      ]
    },
    {
      "name": "Fructose-Abbau",
      "reactions": [
        {
          "substrates": [
            "Fructose",
            "ATP"
          ],
          "enzyme": "Fructokinase",
          "products": [
            "Fructose-1-Phosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Fructose-1-Phosphat"
          ],
          "enzyme": "Aldolase B",
          "products": [
            "Glycerinaldehyd",
            "Dihydroxyacetonphosphat"
          ]
        },
        {
          "substrates": [
            "Glycerinaldehyd",
            "ATP"
          ],
          "enzyme": "Glycerinaldehyd-Kinase",
          "products": [
            "Glycerinaldehyd-3-Phosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Dihydroxyacetonphosphat"
          ],
          "enzyme": "Triosephosphat-Isomerase",
          "products": [
            "Glycerinaldehyd-3-Phosphat"
          ]
        }
      ]
    },
    {
      "name": "Pentosephosphat-Weg (oxidative Phase)",
      "reactions": [
        {
          "substrates": [
            "Glucose-6-Phosphat",
            "NADP⁺"
          ],
          "enzyme": "Glucose-6-Phosphat-Dehydrogenase",
          "products": [
            "6-Phosphogluconolakton",
            "NADPH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "6-Phosphogluconolakton",
            "H₂O"
          ],
          "enzyme": "Laktonase",
          "products": [
            "6-Phosphoglukonat"
          ]
        },
        {
          "substrates": [
            "6-Phosphoglukonat",
            "NADP⁺"
          ],
          "enzyme": "6-Phosphoglukonat-Dehydrogenase",
          "products": [
            "Ribulose-5-Phosphat",
            "CO₂",
            "NADPH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "Ribulose-5-Phosphat"
          ],
          "enzyme": "Ribulose-5-Phosphat-Isomerase",
          "products": [
            "Ribose-5-Phosphat"
          ]
        }
      ]
    },
    {
      "name": "Pentosephosphat-Weg (nicht-oxidative Phase)",
      "reactions": [
        {
          "substrates": [
            "Ribulose-5-Phosphat"
          ],
          "enzyme": "Ribulose-5-Phosphat-Isomerase",
          "products": [
            "Ribose-5-Phosphat"
          ]
        },
        {
          "substrates": [
            "Ribulose-5-Phosphat"
          ],
          "enzyme": "Ribulose-5-Phosphat-Epimerase",
          "products": [
            "Xylulose-5-Phosphat"
          ]
        },
        {
          "substrates": [
            "Ribose-5-Phosphat",
            "Xylulose-5-Phosphat"
          ],
          "enzyme": "Transketolase",
          "products": [
            "Sedoheptulose-7-Phosphat",
            "Glycerinaldehyd-3-Phosphat"
          ]
        },
        {
          "substrates": [
            "Sedoheptulose-7-Phosphat",
            "Glycerinaldehyd-3-Phosphat"
          ],
          "enzyme": "Transaldolase",
          "products": [
            "Fructose-6-Phosphat",
            "Erythrose-4-Phosphat"
          ]
        },
        {
          "substrates": [
            "Xylulose-5-Phosphat",
            "Erythrose-4-Phosphat"
          ],
          "enzyme": "Transketolase",
          "products": [
            "Fructose-6-Phosphat",
            "Glycerinaldehyd-3-Phosphat"
          ]
        }
      ]
    },
    {
      "name": "Tyrosin-Synthese",
      "reactions": [
        {
          "substrates": [
            "L-Phenylalanin",
            "O₂",
            "BH4"
          ],
          "enzyme": "Phenylalanin-Hydroxylase",
          "products": [
            "L-Tyrosin",
            "H₂O",
            "BH2"
          ]
        },
        {
          "substrates": [
            "BH2",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Dihydropteridin-Reduktase",
          "products": [
            "BH4",
            "NADP⁺"
          ]
        }
      ]
    },
    {
      "name": "Cystein-Synthese",
      "reactions": [
        {
          "substrates": [
            "Serin",
            "Homocystein"
          ],
          "enzyme": "Cystathionin-β-Synthase",
          "products": [
            "Cystathionin",
            "H₂O"
          ]
        },
        {
          "substrates": [
            "Cystathionin",
            "H₂O"
          ],
          "enzyme": "Cystathionin-γ-Lyase",
          "products": [
            "Cystein",
            "α-Ketobutyrat",
            "NH₃"
          ]
        }
      ]
    },
    {
      "name": "Glykolyse",
      "reactions": [
        {
          "substrates": [
            "Glucose",
            "ATP"
          ],
          "enzyme": "Hexokinase",
          "products": [
            "Glucose-6-Phosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Glucose-6-Phosphat"
          ],
          "enzyme": "Phosphoglucose-Isomerase",
          "products": [
            "Fructose-6-Phosphat"
          ]
        },
        {
          "substrates": [
            "Fructose-6-Phosphat",
            "ATP"
          ],
          "enzyme": "Phosphofructokinase-1",
          "products": [
            "Fructose-1,6-Bisphosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Fructose-1,6-Bisphosphat"
          ],
          "enzyme": "Aldolase",
          "products": [
            "Dihydroxyacetonphosphat",
            "Glycerinaldehyd-3-Phosphat"
          ]
        },
        {
          "substrates": [
            "Dihydroxyacetonphosphat"
          ],
          "enzyme": "Triosephosphat-Isomerase",
          "products": [
            "Glycerinaldehyd-3-Phosphat"
          ]
        },
        {
          "substrates": [
            "Glycerinaldehyd-3-Phosphat",
            "NAD⁺",
            "Pi"
          ],
          "enzyme": "Glycerinaldehyd-3-Phosphat-Dehydrogenase",
          "products": [
            "1,3-Bisphosphoglycerat",
            "NADH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "1,3-Bisphosphoglycerat",
            "ADP"
          ],
          "enzyme": "Phosphoglycerat-Kinase",
          "products": [
            "3-Phosphoglycerat",
            "ATP"
          ]
        },
        {
          "substrates": [
            "3-Phosphoglycerat"
          ],
          "enzyme": "Phosphoglycerat-Mutase",
          "products": [
            "2-Phosphoglycerat"
          ]
        },
        {
          "substrates": [
            "2-Phosphoglycerat"
          ],
          "enzyme": "Enolase",
          "products": [
            "Phosphoenolpyruvat",
            "H₂O"
          ]
        },
        {
          "substrates": [
            "Phosphoenolpyruvat",
            "ADP"
          ],
          "enzyme": "Pyruvat-Kinase",
          "products": [
            "Pyruvat",
            "ATP"
          ]
        }
      ]
    },
    {
      "name": "Glukoneogenese",
      "reactions": [
        {
          "substrates": [
            "Pyruvat",
            "CO₂",
            "ATP"
          ],
          "enzyme": "Pyruvat-Carboxylase",
          "products": [
            "Oxalacetat",
            "ADP",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Oxalacetat",
            "GTP"
          ],
          "enzyme": "PEPCK",
          "products": [
            "Phosphoenolpyruvat",
            "CO₂",
            "GDP"
          ]
        },
        {
          "substrates": [
            "Phosphoenolpyruvat",
            "H₂O"
          ],
          "enzyme": "Enolase",
          "products": [
            "2-Phosphoglycerat"
          ]
        },
        {
          "substrates": [
            "2-Phosphoglycerat"
          ],
          "enzyme": "Phosphoglycerat-Mutase",
          "products": [
            "3-Phosphoglycerat"
          ]
        },
        {
          "substrates": [
            "3-Phosphoglycerat",
            "ATP"
          ],
          "enzyme": "Phosphoglycerat-Kinase",
          "products": [
            "1,3-Bisphosphoglycerat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "1,3-Bisphosphoglycerat",
            "NADH",
            "H⁺"
          ],
          "enzyme": "Glycerinaldehyd-3-Phosphat-Dehydrogenase",
          "products": [
            "Glycerinaldehyd-3-Phosphat",
            "NAD⁺",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Glycerinaldehyd-3-Phosphat",
            "Dihydroxyacetonphosphat"
          ],
          "enzyme": "Aldolase",
          "products": [
            "Fructose-1,6-Bisphosphat"
          ]
        },
        {
          "substrates": [
            "Fructose-1,6-Bisphosphat",
            "H₂O"
          ],
          "enzyme": "Fructose-1,6-Bisphosphatase",
          "products": [
            "Fructose-6-Phosphat",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Fructose-6-Phosphat"
          ],
          "enzyme": "Phosphoglucose-Isomerase",
          "products": [
            "Glucose-6-Phosphat"
          ]
        },
        {
          "substrates": [
            "Glucose-6-Phosphat",
            "H₂O"
          ],
          "enzyme": "Glucose-6-Phosphatase",
          "products": [
            "Glucose",
            "Pi"
          ]
        }
      ]
    },
    {
      "name": "Citratcyclus",
      "reactions": [
        {
          "substrates": [
            "Acetyl-CoA",
            "Oxalacetat",
            "H₂O"
          ],
          "enzyme": "Citrat-Synthase",
          "products": [
            "Citrat",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Citrat"
          ],
          "enzyme": "Aconitase",
          "products": [
            "Isocitrat"
          ]
        },
        {
          "substrates": [
            "Isocitrat",
            "NAD⁺"
          ],
          "enzyme": "Isocitrat-Dehydrogenase",
          "products": [
            "α-Ketoglutarat",
            "CO₂",
            "NADH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "α-Ketoglutarat",
            "NAD⁺",
            "CoA"
          ],
          "enzyme": "α-Ketoglutarat-Dehydrogenase-Komplex",
          "products": [
            "Succinyl-CoA",
            "CO₂",
            "NADH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "Succinyl-CoA",
            "GDP",
            "Pi"
          ],
          "enzyme": "Succinyl-CoA-Synthetase",
          "products": [
            "Succinat",
            "GTP",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Succinat",
            "FAD"
          ],
          "enzyme": "Succinat-Dehydrogenase",
          "products": [
            "Fumarat",
            "FADH₂"
          ]
        },
        {
          "substrates": [
            "Fumarat",
            "H₂O"
          ],
          "enzyme": "Fumarase",
          "products": [
            "Malat"
          ]
        },
        {
          "substrates": [
            "Malat",
            "NAD⁺"
          ],
          "enzyme": "Malat-Dehydrogenase",
          "products": [
            "Oxalacetat",
            "NADH",
            "H⁺"
          ]
        }
      ]
    },
    {
      "name": "Cholesterinbiosynthese",
      "reactions": [
        {
          "substrates": [
            "Acetyl-CoA",
            "Acetyl-CoA"
          ],
          "enzyme": "Acetyl-CoA-Acetyltransferase",
          "products": [
            "Acetoacetyl-CoA",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Acetoacetyl-CoA",
            "Acetyl-CoA",
            "H₂O"
          ],
          "enzyme": "HMG-CoA-Synthase",
          "products": [
            "HMG-CoA",
            "CoA"
          ]
        },
        {
          "substrates": [
            "HMG-CoA",
            "2 NADPH",
            "2 H⁺"
          ],
          "enzyme": "HMG-CoA-Reduktase",
          "products": [
            "Mevalonat",
            "CoA",
            "2 NADP⁺"
          ]
        },
        {
          "substrates": [
            "Mevalonat",
            "ATP"
          ],
          "enzyme": "Mevalonat-Kinase",
          "products": [
            "Mevalonat-5-Phosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Mevalonat-5-Phosphat",
            "ATP"
          ],
          "enzyme": "Phosphomevalonat-Kinase",
          "products": [
            "Mevalonat-5-Pyrophosphat",
            "ADP"
          ]
        },
        {
          "substrates": [
            "Mevalonat-5-Pyrophosphat",
            "ATP"
          ],
          "enzyme": "Mevalonat-Pyrophosphat-Decarboxylase",
          "products": [
            "Isopentenylpyrophosphat",
            "CO₂",
            "ADP",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Isopentenylpyrophosphat"
          ],
          "enzyme": "Isopentenylpyrophosphat-Isomerase",
          "products": [
            "Dimethylallylpyrophosphat"
          ]
        },
        {
          "substrates": [
            "Dimethylallylpyrophosphat",
            "Isopentenylpyrophosphat"
          ],
          "enzyme": "Prenyltransferase",
          "products": [
            "Geranylpyrophosphat",
            "PPi"
          ]
        },
        {
          "substrates": [
            "Geranylpyrophosphat",
            "Isopentenylpyrophosphat"
          ],
          "enzyme": "Prenyltransferase",
          "products": [
            "Farnesylpyrophosphat",
            "PPi"
          ]
        },
        {
          "substrates": [
            "2 Farnesylpyrophosphat",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Squalen-Synthase",
          "products": [
            "Squalen",
            "2 PPi",
            "NADP⁺"
          ]
        },
        {
          "substrates": [
            "Squalen",
            "O₂",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Squalen-Monooxygenase",
          "products": [
            "Squalen-2,3-Epoxid",
            "NADP⁺",
            "H₂O"
          ]
        },
        {
          "substrates": [
            "Squalen-2,3-Epoxid"
          ],
          "enzyme": "Lanosterin-Synthase",
          "products": [
            "Lanosterin"
          ]
        },
        {
          "substrates": [
            "Lanosterin"
          ],
          "enzyme": "Weitere Enzyme (19 Schritte)",
          "products": [
            "Cholesterin"
          ]
        }
      ]
    },
    {
      "name": "Fettsäurebiosynthese",
      "reactions": [
        {
          "substrates": [
            "Acetyl-CoA",
            "CO₂",
            "ATP"
          ],
          "enzyme": "Acetyl-CoA-Carboxylase",
          "products": [
            "Malonyl-CoA",
            "ADP",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Acetyl-CoA",
            "ACP"
          ],
          "enzyme": "Acetyl-CoA-ACP-Transacylase",
          "products": [
            "Acetyl-ACP",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Malonyl-CoA",
            "ACP"
          ],
          "enzyme": "Malonyl-CoA-ACP-Transacylase",
          "products": [
            "Malonyl-ACP",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Acetyl-ACP",
            "Malonyl-ACP"
          ],
          "enzyme": "β-Ketoacyl-ACP-Synthase",
          "products": [
            "Acetoacetyl-ACP",
            "ACP",
            "CO₂"
          ]
        },
        {
          "substrates": [
            "Acetoacetyl-ACP",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "β-Ketoacyl-ACP-Reduktase",
          "products": [
            "D-3-Hydroxybutyryl-ACP",
            "NADP⁺"
          ]
        },
        {
          "substrates": [
            "D-3-Hydroxybutyryl-ACP"
          ],
          "enzyme": "3-Hydroxyacyl-ACP-Dehydratase",
          "products": [
            "Crotonyl-ACP",
            "H₂O"
          ]
        },
        {
          "substrates": [
            "Crotonyl-ACP",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Enoyl-ACP-Reduktase",
          "products": [
            "Butyryl-ACP",
            "NADP⁺"
          ]
        },
        {
          "substrates": [
            "Palmitoyl-ACP",
            "H₂O"
          ],
          "enzyme": "Thioesterase",
          "products": [
            "Palmitat",
            "ACP"
          ]
        }
      ]
    },
    {
      "name": "TAG-Synthese aus Acyl-CoA",
      "reactions": [
        {
          "substrates": [
            "Glycerin-3-Phosphat",
            "Acyl-CoA"
          ],
          "enzyme": "Glycerin-3-Phosphat-Acyltransferase",
          "products": [
            "Lyso-Phosphatidsäure",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Lyso-Phosphatidsäure",
            "Acyl-CoA"
          ],
          "enzyme": "1-Acylglycerin-3-Phosphat-Acyltransferase",
          "products": [
            "Phosphatidsäure",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Phosphatidsäure",
            "H₂O"
          ],
          "enzyme": "Phosphatidsäure-Phosphatase",
          "products": [
            "Diacylglycerin",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Diacylglycerin",
            "Acyl-CoA"
          ],
          "enzyme": "Diacylglycerin-Acyltransferase",
          "products": [
            "Triacylglycerin",
            "CoA"
          ]
        }
      ]
    },
    {
      "name": "Abbau von ungeradzahligen Fettsäuren",
      "reactions": [
        {
          "substrates": [
            "Propionyl-CoA",
            "CO₂",
            "ATP"
          ],
          "enzyme": "Propionyl-CoA-Carboxylase",
          "products": [
            "D-Methylmalonyl-CoA",
            "ADP",
            "Pi"
          ]
        },
        {
          "substrates": [
            "D-Methylmalonyl-CoA"
          ],
          "enzyme": "Methylmalonyl-CoA-Epimerase",
          "products": [
            "L-Methylmalonyl-CoA"
          ]
        },
        {
          "substrates": [
            "L-Methylmalonyl-CoA"
          ],
          "enzyme": "Methylmalonyl-CoA-Mutase",
          "products": [
            "Succinyl-CoA"
          ]
        }
      ]
    },
    {
      "name": "Ketonkörpersynthese",
      "reactions": [
        {
          "substrates": [
            "Acetyl-CoA",
            "Acetyl-CoA"
          ],
          "enzyme": "Thiolase",
          "products": [
            "Acetoacetyl-CoA",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Acetoacetyl-CoA",
            "Acetyl-CoA",
            "H₂O"
          ],
          "enzyme": "HMG-CoA-Synthase",
          "products": [
            "HMG-CoA",
            "CoA"
          ]
        },
        {
          "substrates": [
            "HMG-CoA"
          ],
          "enzyme": "HMG-CoA-Lyase",
          "products": [
            "Acetoacetat",
            "Acetyl-CoA"
          ]
        },
        {
          "substrates": [
            "Acetoacetat",
            "NADH",
            "H⁺"
          ],
          "enzyme": "β-Hydroxybutyrat-Dehydrogenase",
          "products": [
            "β-Hydroxybutyrat",
            "NAD⁺"
          ]
        },
        {
          "substrates": [
            "Acetoacetat"
          ],
          "enzyme": "Acetoacetat-Decarboxylase",
          "products": [
            "Aceton",
            "CO₂"
          ]
        }
      ]
    },
    {
      "name": "Citrat-Shuttle",
      "reactions": [
        {
          "substrates": [
            "Acetyl-CoA",
            "Oxalacetat",
            "H₂O"
          ],
          "enzyme": "Citrat-Synthase",
          "products": [
            "Citrat",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Citrat",
            "CoA",
            "ATP"
          ],
          "enzyme": "ATP-Citrat-Lyase",
          "products": [
            "Acetyl-CoA",
            "Oxalacetat",
            "ADP",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Oxalacetat",
            "NADH",
            "H⁺"
          ],
          "enzyme": "Malat-Dehydrogenase",
          "products": [
            "Malat",
            "NAD⁺"
          ]
        },
        {
          "substrates": [
            "Malat",
            "NADP⁺"
          ],
          "enzyme": "Malatenzym",
          "products": [
            "Pyruvat",
            "CO₂",
            "NADPH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "Pyruvat",
            "CO₂",
            "ATP"
          ],
          "enzyme": "Pyruvat-Carboxylase",
          "products": [
            "Oxalacetat",
            "ADP",
            "Pi"
          ]
        }
      ]
    },
    {
      "name": "Glyoxylatzyklus",
      "reactions": [
        {
          "substrates": [
            "Acetyl-CoA",
            "Oxalacetat",
            "H₂O"
          ],
          "enzyme": "Citrat-Synthase",
          "products": [
            "Citrat",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Citrat"
          ],
          "enzyme": "Aconitase",
          "products": [
            "Isocitrat"
          ]
        },
        {
          "substrates": [
            "Isocitrat"
          ],
          "enzyme": "Isocitrat-Lyase",
          "products": [
            "Succinat",
            "Glyoxylat"
          ]
        },
        {
          "substrates": [
            "Glyoxylat",
            "Acetyl-CoA",
            "H₂O"
          ],
          "enzyme": "Malat-Synthase",
          "products": [
            "Malat",
            "CoA"
          ]
        },
        {
          "substrates": [
            "Malat",
            "NAD⁺"
          ],
          "enzyme": "Malat-Dehydrogenase",
          "products": [
            "Oxalacetat",
            "NADH",
            "H⁺"
          ]
        }
      ]
    },
    {
      "name": "Malat-Aspartat-Shuttle",
      "reactions": [
        {
          "substrates": [
            "Oxalacetat",
            "NADH",
            "H⁺"
          ],
          "enzyme": "Malat-Dehydrogenase (Zytoplasma)",
          "products": [
            "Malat",
            "NAD⁺"
          ]
        },
        {
          "substrates": [
            "Malat",
            "NAD⁺"
          ],
          "enzyme": "Malat-Dehydrogenase (Mitochondrium)",
          "products": [
            "Oxalacetat",
            "NADH",
            "H⁺"
          ]
        },
        {
          "substrates": [
            "Oxalacetat",
            "Glutamat"
          ],
          "enzyme": "Aspartat-Aminotransferase (Mitochondrium)",
          "products": [
            "Aspartat",
            "α-Ketoglutarat"
          ]
        },
        {
          "substrates": [
            "Aspartat",
            "α-Ketoglutarat"
          ],
          "enzyme": "Aspartat-Aminotransferase (Zytoplasma)",
          "products": [
            "Oxalacetat",
            "Glutamat"
          ]
        }
      ]
    },
    {
      "name": "Harnstoffzyklus",
      "reactions": [
        {
          "substrates": [
            "NH₄⁺",
            "CO₂",
            "2 ATP",
            "H₂O"
          ],
          "enzyme": "Carbamoylphosphat-Synthetase I",
          "products": [
            "Carbamoylphosphat",
            "2 ADP",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Carbamoylphosphat",
            "Ornithin"
          ],
          "enzyme": "Ornithin-Transcarbamylase",
          "products": [
            "Citrullin",
            "Pi"
          ]
        },
        {
          "substrates": [
            "Citrullin",
            "Aspartat",
            "ATP"
          ],
          "enzyme": "Argininosuccinat-Synthetase",
          "products": [
            "Argininosuccinat",
            "AMP",
            "PPi"
          ]
        },
        {
          "substrates": [
            "Argininosuccinat"
          ],
          "enzyme": "Argininosuccinat-Lyase",
          "products": [
            "Arginin",
            "Fumarat"
          ]
        },
        {
          "substrates": [
            "Arginin",
            "H₂O"
          ],
          "enzyme": "Arginase",
          "products": [
            "Harnstoff",
            "Ornithin"
          ]
        }
      ]
    },
    {
      "name": "Aminosäureabbau",
      "reactions": [
        {
          "substrates": [
            "Aminosäure",
            "α-Ketoglutarat"
          ],
          "enzyme": "Aminotransferase",
          "products": [
            "α-Ketosäure",
            "L-Glutamat"
          ]
        },
        {
          "substrates": [
            "L-Glutamat",
            "NAD⁺",
            "H₂O"
          ],
          "enzyme": "Glutamat-Dehydrogenase",
          "products": [
            "α-Ketoglutarat",
            "NH₄⁺",
            "NADH",
            "H⁺"
          ]
        }
      ]
    },
    {
      "name": "Methioninzyklus",
      "reactions": [
        {
          "substrates": [
            "Methionin",
            "ATP"
          ],
          "enzyme": "Methionin-Adenosyltransferase",
          "products": [
            "S-Adenosylmethionin",
            "PPi",
            "Pi"
          ]
        },
        {
          "substrates": [
            "S-Adenosylmethionin",
            "Akzeptor"
          ],
          "enzyme": "Methyltransferase",
          "products": [
            "S-Adenosylhomocystein",
            "methylierter Akzeptor"
          ]
        },
        {
          "substrates": [
            "S-Adenosylhomocystein",
            "H₂O"
          ],
          "enzyme": "SAH-Hydrolase",
          "products": [
            "Adenosin",
            "Homocystein"
          ]
        },
        {
          "substrates": [
            "Homocystein",
            "N⁵-Methyl-THF"
          ],
          "enzyme": "Methionin-Synthase",
          "products": [
            "Methionin",
            "THF"
          ]
        }
      ]
    },
    {
      "name": "Bildung 2,3-Bisphosphoglycerat",
      "reactions": [
        {
          "substrates": [
            "1,3-Bisphosphoglycerat"
          ],
          "enzyme": "Bisphosphoglycerat-Mutase",
          "products": [
            "2,3-Bisphosphoglycerat"
          ]
        },
        {
          "substrates": [
            "2,3-Bisphosphoglycerat",
            "H₂O"
          ],
          "enzyme": "2,3-Bisphosphoglycerat-Phosphatase",
          "products": [
            "3-Phosphoglycerat",
            "Pi"
          ]
        }
      ]
    },
    {
      "name": "Bilirubin-Entstehung",
      "reactions": [
        {
          "substrates": [
            "Häm",
            "O₂",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Hämoxygenase",
          "products": [
            "Biliverdin",
            "Fe²⁺",
            "CO",
            "NADP⁺"
          ]
        },
        {
          "substrates": [
            "Biliverdin",
            "NADPH",
            "H⁺"
          ],
          "enzyme": "Biliverdin-Reduktase",
          "products": [
            "Bilirubin",
            "NADP⁺"
          ]
        },
        {
          "substrates": [
            "Bilirubin",
            "2 UDP-Glucuronat"
          ],
          "enzyme": "UDP-Glucuronosyltransferase",
          "products": [
            "Bilirubin-Diglucuronid",
            "2 UDP"
          ]
        }
      ]
    }
  ]
});
