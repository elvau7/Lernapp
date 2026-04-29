/* ============================================================
 *  Einführung in die BWL
 * ============================================================ */

SUBJECTS.push({
  name: "Einführung in die BWL",
  icon: "🏢",
  description: "Grundlagen der Betriebswirtschaftslehre: Wertschöpfung, Rechnungswesen, Produktion, Investition und Finanzierung.",

  /* ----------------------------------------------------------
   *  KARTEIKARTEN  (kk)
   * ---------------------------------------------------------- */
  kk: [
    // === ID 1: Wertschöpfung ===
    {id:1, category:"Wertschöpfung", question:"Was versteht man unter Wertschöpfung?", answer:"Den durch die wirtschaftliche Tätigkeit einer Wirtschaftseinheit geschaffenen Mehrwert. Mehrwert = erzielte Werte − Vorleistungen (verbrauchte Werte)."},
    {id:1, category:"Wertschöpfung", question:"Wie entsteht Wertschöpfung in einem Unternehmen?", answer:"Indem vorhandene Güter (Ressourcen) in Güter mit einem höheren Marktwert transformiert werden. Beispiel: Holzbohlen → hochwertiger Esstisch."},
    {id:1, category:"Wertschöpfung", question:"Warum existieren Unternehmen aus ökonomischer Sicht?", answer:"Weil sie einen Mehrwert (Wertschöpfung) schaffen. Ohne Wertschöpfung gäbe es keinen wirtschaftlich nachvollziehbaren Grund für ihr Handeln."},

    // === ID 2: Wertkette ===
    {id:2, category:"Wertkette", question:"Was ist die Wertkette (Value Chain)?", answer:"Ein Analyserahmen (Porter), der die wertschöpfenden Aktivitäten eines Unternehmens in primäre und sekundäre (unterstützende) Aktivitäten gliedert, um Wettbewerbsvorteile zu identifizieren."},
    {id:2, category:"Wertkette", question:"Was sind primäre Wertaktivitäten?", answer:"Aktivitäten, die direkt an der Erstellung und dem Verkauf des Produkts beteiligt sind:\n- Eingangslogistik\n- Produktion/Operationen\n- Ausgangslogistik\n- Marketing & Vertrieb\n- Kundendienst"},
    {id:2, category:"Wertkette", question:"Was sind sekundäre (unterstützende) Wertaktivitäten?", answer:"Aktivitäten, die primäre Aktivitäten ermöglichen:\n- Unternehmensinfrastruktur\n- Personalmanagement\n- Technologieentwicklung\n- Beschaffung"},

    // === ID 3: Entrepreneurship ===
    {id:3, category:"Entrepreneurship", question:"Was ist Entrepreneurship?", answer:"Das Erkennen und Nutzen von Geschäfts- und Innovationschancen durch Personen oder Organisationen."},
    {id:3, category:"Entrepreneurship", question:"Was ist das Herzstück eines Gründungsvorhabens?", answer:"Die Geschäftsidee — sie bildet den Ausgangspunkt, eine erkannte Chance in ein konkretes Produkt oder eine Dienstleistung zu übersetzen."},
    {id:3, category:"Entrepreneurship", question:"Was unterscheidet Entrepreneurship von normalem Management?", answer:"Entrepreneurship fokussiert auf das aktive Erkennen und Nutzen neuer Chancen und Innovationen, während Management eher bestehende Strukturen und Prozesse verwaltet."},

    // === ID 4: Geschäftsidee ===
    {id:4, category:"Entrepreneurship", question:"Wann entfaltet eine Geschäftsidee ihren wirtschaftlichen Wert?", answer:"Nicht durch ihre bloße Existenz, sondern erst wenn sie rechtzeitig erkannt und erfolgreich in die Praxis umgesetzt wird."},
    {id:4, category:"Entrepreneurship", question:"Aus welchen Quellen können Geschäftsideen entstehen?", answer:"- Unbefriedigtes Bedürfnis oder Problem\n- Übertragung einer Lösung auf neuen Kontext\n- Technologische Entwicklungen\n- Veränderungen in gesellschaftlichen/rechtlichen Rahmenbedingungen"},
    {id:4, category:"Entrepreneurship", question:"Was macht eine Geschäftsidee zu einer guten Geschäftsidee?", answer:"Wenn sie:\n- ein echtes Problem löst oder ein Bedürfnis befriedigt,\n- wirtschaftlich tragfähig ist,\n- zur richtigen Zeit auf den richtigen Markt trifft."},

    // === ID 5: Fähigkeiten ===
    {id:5, category:"Entrepreneurship", question:"Welche vier Fähigkeitsbereiche sind für Entrepreneurinnen relevant?", answer:"1. Fachliche Fähigkeiten (Problemerkennung, Lösungsentwicklung)\n2. Betriebswirtschaftliche Fähigkeiten (Geschäftsmodell, Finanzen)\n3. Rechtliche Fähigkeiten (Verträge, Patente, Steuern)\n4. Soziale Fähigkeiten (Kommunikation, Teamführung)"},
    {id:5, category:"Entrepreneurship", question:"Welche Persönlichkeitseigenschaften sind typisch für erfolgreiche Entrepreneurinnen?", answer:"- Leistungsbereitschaft\n- Glaube an sich selbst\n- Durchhaltevermögen\n- Kreativität\n- Flexibilität\n- Risikoeinschätzung und -bereitschaft\n- Durchsetzungsvermögen"},
    {id:5, category:"Entrepreneurship", question:"Warum werden Entrepreneurinnen mit Komponistinnen verglichen?", answer:"Weil sie nicht jede Leistung selbst erbringen müssen, sondern verschiedene Beiträge koordinieren und aufeinander abstimmen, um ein gemeinsames Ziel zu erreichen."},

    // === ID 6: Intrapreneurship ===
    {id:6, category:"Entrepreneurship", question:"Was ist Intrapreneurship?", answer:"Unternehmerisches Denken und Handeln innerhalb eines bestehenden Unternehmens — Mitarbeiterinnen agieren innovativ, chancenorientiert und eigenverantwortlich."},
    {id:6, category:"Entrepreneurship", question:"Warum ist Intrapreneurship für etablierte Unternehmen wichtig?", answer:"Weil auch große Unternehmen auf neue Ideen und die Identifikation von Chancen angewiesen sind, um wettbewerbsfähig zu bleiben."},
    {id:6, category:"Entrepreneurship", question:"Was ist der Unterschied zwischen Entrepreneurship und Intrapreneurship?", answer:"Entrepreneurship: Gründung/Führung eines eigenen Unternehmens.\nIntrapreneurship: Unternehmerisches Handeln innerhalb einer bestehenden Organisation."},

    // === ID 7: Umsetzung / Start-up ===
    {id:7, category:"Entrepreneurship", question:"Was ist ein Start-up?", answer:"Ein Unternehmen, das:\n- jünger als zehn Jahre ist,\n- ein innovatives Produkt, Service oder Geschäftsmodell hat,\n- eine klare Wachstumsintention verfolgt."},
    {id:7, category:"Entrepreneurship", question:"Welche vier Wege gibt es zur Umsetzung einer unternehmerischen Chance?", answer:"1. Gründung (neues Unternehmen)\n2. Verkauf der Idee\n3. Intrapreneurship (innerhalb bestehender Organisation)\n4. Spin-off (Ausgründung)"},
    {id:7, category:"Entrepreneurship", question:"Was ist ein Spin-off?", answer:"Die Ausgründung einer Geschäftseinheit aus einem bestehenden Unternehmen heraus, die dann als eigenständiges Unternehmen weitergeführt wird."},

    // === ID 8: Businessplan ===
    {id:8, category:"Entrepreneurship", question:"Welche drei Funktionen hat ein Businessplan?", answer:"1. Führungsinstrument (verbindliche Ziele)\n2. Informations- und Steuerungsinstrument (Probleme frühzeitig erkennen)\n3. Verhandlungsinstrument (für externe Kapitalgeber)"},
    {id:8, category:"Entrepreneurship", question:"Welche Abschnitte enthält ein typischer Businessplan?", answer:"Executive Summary, Produkt/Dienstleistung, Branche & Markt, Marketing, Team, Unternehmen, Chancen & Risiken, Umsetzungsplanung, Jahresplanung, Finanzplanung."},
    {id:8, category:"Entrepreneurship", question:"Warum sollte ein Businessplan laufend aktualisiert werden?", answer:"Weil sich in der frühen Phase viele Annahmen und Rahmenbedingungen laufend verändern — er ist kein starres Dokument, sondern ein lebendes Steuerungsinstrument."},

    // === ID 9: Rechnungswesen Begriffsabgrenzungen ===
    {id:9, category:"Rechnungswesen", question:"Was ist der Unterschied zwischen Einzahlung und Einnahme?", answer:"Einzahlung: Zufluss von Zahlungsmitteln (Bargeld/Bank).\nEinnahme: Zugang von Geldvermögen (inkl. Forderungen, abzgl. Verbindlichkeiten)."},
    {id:9, category:"Rechnungswesen", question:"Was ist der Unterschied zwischen Ertrag und Erlös?", answer:"Ertrag: Gesamter Wertzuwachs einer Periode (inkl. betriebsfremder Erträge).\nErlös: Nur leistungsbezogener Ertrag aus dem eigentlichen Geschäftszweck."},
    {id:9, category:"Rechnungswesen", question:"Was unterscheidet Aufwand von Kosten?", answer:"Aufwand: Werteverzehr in einer Periode (externes RW / GuV).\nKosten: Bewerteter, leistungsbezogener Güterverbrauch (internes RW / Kostenrechnung)."},

    // === ID 10: Bilanz & GuV ===
    {id:10, category:"Rechnungswesen", question:"Was ist eine Bilanz?", answer:"Eine stichtagsbezogene Gegenüberstellung von Vermögen (Aktivseite) und Kapital (Passivseite). Bilanz = Stichtagsrechnung (keine Zeitraumrechnung)."},
    {id:10, category:"Rechnungswesen", question:"Was ist die Gewinn- und Verlustrechnung (GuV)?", answer:"Eine Zeitraumrechnung, die alle Erträge und Aufwendungen einer Periode gegenüberstellt und den Periodenerfolg (Gewinn oder Verlust) ausweist."},
    {id:10, category:"Rechnungswesen", question:"Wie ist die Aktivseite der Bilanz gegliedert?", answer:"Anlagevermögen: langfristig gebundene Werte (Maschinen, Gebäude).\nUmlaufvermögen: kurzfristig verfügbare Werte (Lagerbestände, Bankguthaben)."},

    // === ID 11: Cashflow & Abschreibungen ===
    {id:11, category:"Rechnungswesen", question:"Was sind die drei Arten des Cashflows?", answer:"1. Cashflow aus laufender Geschäftstätigkeit\n2. Cashflow aus Investitionstätigkeit\n3. Cashflow aus Finanzierungstätigkeit"},
    {id:11, category:"Rechnungswesen", question:"Was ist der Unterschied zwischen linearer und degressiver Abschreibung?", answer:"Linear: Gleichmäßige Abschreibungsbeträge über die Nutzungsdauer.\nDegressiv: Höhere Abschreibungen anfangs, abnehmend über die Zeit (auf Restwert berechnet)."},
    {id:11, category:"Rechnungswesen", question:"Was sind planmäßige Abschreibungen?", answer:"Systematische, vorhersehbare Wertminderungen von Anlagevermögen über die Nutzungsdauer. Gegensatz: außerplanmäßige Abschreibungen (unerwarteter Wertverlust)."},

    // === ID 12: Kostenrechnung ===
    {id:12, category:"Kostenrechnung", question:"Was sind die drei Stufen der Kostenrechnung?", answer:"1. Kostenartenrechnung (KAR): Welche Kosten entstanden?\n2. Kostenstellenrechnung (KSR): Wo entstanden die Kosten?\n3. Kostenträgerrechnung (KTR): Wofür (für welches Produkt) entstanden die Kosten?"},
    {id:12, category:"Kostenrechnung", question:"Was sind Gemeinkosten und wie werden sie verrechnet?", answer:"Gemeinkosten können nicht direkt einem Kostenträger zugeordnet werden. Sie werden über Kostenstellen (z.B. Produktion, Verwaltung, Vertrieb) auf Kostenträger verrechnet."},
    {id:12, category:"Kostenrechnung", question:"Was ist die Kostenträgerrechnung?", answer:"Die dritte Stufe der Kostenrechnung: Ermittelt die Selbstkosten je Leistungseinheit (Stückkosten). Grundlage für Preiskalkulation und Erfolgsermittlung."},

    // === ID 13: Produktion Grundlagen & Fertigungstypen ===
    {id:13, category:"Produktion", question:"Was sind die fünf Fertigungstypen?", answer:"1. Einzelfertigung (Unikate auf Bestellung)\n2. Serienfertigung (begrenzte Stückzahl)\n3. Sortenfertigung (ähnliche Produkte)\n4. Chargenfertigung (z.B. Pharma)\n5. Massenfertigung (kontinuierlich, unbegrenzte Menge)"},
    {id:13, category:"Produktion", question:"Was ist Just-in-time (JIT)?", answer:"Eine Strategie, bei der Materialien genau dann geliefert werden, wenn sie gebraucht werden → geringer Lagerbestand, aber gestiegener Planungsaufwand."},
    {id:13, category:"Produktion", question:"Was versteht man unter Supply Chain Management (SCM)?", answer:"Die Planung, Steuerung und Kontrolle aller Güter-, Informations- und Finanzflüsse entlang der gesamten Wertschöpfungskette vom Lieferanten bis zum Endkunden."},

    // === ID 14: Produktionstheorie ===
    {id:14, category:"Produktion", question:"Was ist eine Isoquante?", answer:"Eine Kurve im Faktormengendiagramm, die alle Kombinationen zweier Produktionsfaktoren zeigt, die dieselbe Ausbringungsmenge (Output) erzielen."},
    {id:14, category:"Produktion", question:"Was ist die Minimalkostenkombination?", answer:"Die Faktorkombination, die eine bestimmte Ausbringungsmenge zu minimalen Kosten herstellt. Grafisch: Tangentenpunkt zwischen Isoquante und Isokostengerade."},
    {id:14, category:"Produktion", question:"Was zeigt eine Isokostengerade?", answer:"Alle Kombinationen zweier Produktionsfaktoren, die bei gegebenen Faktorpreisen dieselben Gesamtkosten verursachen."},

    // === ID 15: Kostentheorie ===
    {id:15, category:"Kostentheorie", question:"Was sind fixe Kosten (Bereitschaftskosten)?", answer:"Kosten, die unabhängig von der produzierten Menge anfallen (z.B. Miete, Versicherungen). Sie entstehen durch die Bereitschaft zur Leistungserbringung."},
    {id:15, category:"Kostentheorie", question:"Was ist der Deckungsbeitrag (DB)?", answer:"DB = Erlös − variable Kosten. Zeigt, wie viel ein Produkt zur Deckung der Fixkosten und zum Gewinn beiträgt. Bei DB > 0 lohnt sich kurzfristig die Produktion."},
    {id:15, category:"Kostentheorie", question:"Was sind Grenzkosten?", answer:"Die zusätzlichen Kosten, die durch die Produktion einer weiteren Einheit entstehen (= ΔGesamtkosten ÷ ΔMenge)."},

    // === ID 16: Investition & Investitionsrechnung ===
    {id:16, category:"Investition", question:"Was ist der Kapitalwert einer Investition?", answer:"Die Summe aller auf den Anfangszeitpunkt diskontierten Zahlungsströme minus der Anfangsinvestition.\nKapitalwert > 0 → Investition ist vorteilhaft."},
    {id:16, category:"Investition", question:"Was ist der Unterschied zwischen statischen und dynamischen Investitionsrechenverfahren?", answer:"Statisch: Kein Zeitwert des Geldes (Kostenvergleich, Gewinnvergleich, Rentabilität, Amortisation).\nDynamisch: Berücksichtigen den Zeitwert des Geldes (Kapitalwert, interner Zinsfuß, Annuität)."},
    {id:16, category:"Investition", question:"Was ist der interne Zinsfuß?", answer:"Der Zinssatz, bei dem der Kapitalwert einer Investition genau null beträgt. Vorteilhaft, wenn der interne Zinsfuß über dem Kalkulationszinssatz liegt."},

    // === ID 17: Finanzierung ===
    {id:17, category:"Finanzierung", question:"Was ist der Leverage-Effekt?", answer:"Der Effekt, dass FK-Einsatz die EK-Rentabilität erhöhen kann, wenn Gesamtrentabilität > FK-Zinssatz.\nPositiv: Gesamtrentabilität > FK-Zinsen\nNegativ: Gesamtrentabilität < FK-Zinsen"},
    {id:17, category:"Finanzierung", question:"Was ist der Unterschied zwischen Innen- und Außenfinanzierung?", answer:"Innenfinanzierung: Aus dem Unternehmen heraus (Gewinnthesaurierung, Abschreibungsrückflüsse, Rückstellungen).\nAußenfinanzierung: Zuführung von Mitteln von außen (EK- oder FK-Geber)."},
    {id:17, category:"Finanzierung", question:"Was ist der Unterschied zwischen Eigen- und Fremdfinanzierung?", answer:"Eigenfinanzierung: Bereitstellung von Eigenkapital (Beteiligungsfinanzierung, Selbstfinanzierung).\nFremdfinanzierung: Aufnahme von Schulden (Kredite, Anleihen)."},
  ],

  /* ----------------------------------------------------------
   *  LÜCKENTEXT  (lt)
   * ---------------------------------------------------------- */
  lt: [
    {id:1, category:"Wertschöpfung", question:"Definition Wertschöpfung?", answer:"Wertschöpfung stellt den durch die wirtschaftliche Tätigkeit einer Wirtschaftseinheit geschaffenen {{Mehrwert}} dar."},
    {id:1, category:"Wertschöpfung", question:"Wie ergibt sich der Mehrwert?", answer:"Der Mehrwert ergibt sich aus der Summe der geschaffenen Werte abzüglich der {{Vorleistungen}}."},
    {id:2, category:"Wertkette", question:"Was ist die Wertkette?", answer:"Die {{Wertkette}} ist ein Analyserahmen, der wertschöpfende Aktivitäten in primäre und sekundäre Aktivitäten unterteilt."},
    {id:2, category:"Wertkette", question:"Was können Wertaktivitäten darstellen?", answer:"Jede Aktivität entlang der Wertkette kann einen potenziellen {{Wettbewerbsvorteil}} darstellen."},
    {id:3, category:"Entrepreneurship", question:"Was beschreibt Entrepreneurship?", answer:"Entrepreneurship bezeichnet das Erkennen und Nutzen von {{Geschäfts- und Innovationschancen}} durch Personen oder Organisationen."},
    {id:3, category:"Entrepreneurship", question:"Was ist das Herzstück eines Gründungsvorhabens?", answer:"Das Herzstück eines Gründungsvorhabens ist die {{Geschäftsidee}}."},
    {id:4, category:"Entrepreneurship", question:"Wann hat eine Geschäftsidee wirtschaftlichen Wert?", answer:"Eine Geschäftsidee entfaltet ihren Wert erst, wenn sie zur richtigen Zeit aufgegriffen und erfolgreich {{umgesetzt}} wird."},
    {id:4, category:"Entrepreneurship", question:"Was ist eine häufige Quelle für Geschäftsideen?", answer:"Geschäftsideen entstehen häufig aus der Identifikation eines {{unbefriedigten Bedürfnisses}} oder eines Problems."},
    {id:5, category:"Entrepreneurship", question:"Wie werden Entrepreneurinnen metaphorisch beschrieben?", answer:"Moderne Ansätze sehen Entrepreneurinnen als {{Komponistinnen}}, die nicht jedes Instrument selbst spielen, sondern verschiedene Beiträge koordinieren."},
    {id:5, category:"Entrepreneurship", question:"Was ermöglicht die Flexibilität einer Entrepreneurin?", answer:"Flexibilität ermöglicht es, sich rasch an veränderte {{Rahmenbedingungen}} und neue Anforderungen anzupassen."},
    {id:6, category:"Entrepreneurship", question:"Was ist Intrapreneurship?", answer:"Intrapreneurship bezeichnet unternehmerisches Denken und Handeln {{innerhalb}} eines bestehenden Unternehmens."},
    {id:6, category:"Entrepreneurship", question:"Was versuchen Unternehmen für Intrapreneurship zu schaffen?", answer:"Unternehmen versuchen Strukturen zu schaffen, in denen Mitarbeiterinnen eigene {{Initiativen}} entwickeln und sich entfalten können."},
    {id:7, category:"Entrepreneurship", question:"Was kennzeichnet ein Start-up?", answer:"Start-ups sind Unternehmen, die jünger als {{zehn}} Jahre sind, ein innovatives Geschäftsmodell haben und eine klare Wachstumsintention verfolgen."},
    {id:7, category:"Entrepreneurship", question:"Was ist ein Spin-off?", answer:"Ein Spin-off bezeichnet die {{Ausgründung}} einer Geschäftseinheit aus einem bestehenden Unternehmen heraus."},
    {id:8, category:"Entrepreneurship", question:"Welche drei Funktionen hat ein Businessplan?", answer:"Der Businessplan dient als Führungsinstrument, Steuerungsinstrument und {{Verhandlungsinstrument}} gegenüber externen Kapitalgebern."},
    {id:8, category:"Entrepreneurship", question:"Wie sollte man einen Businessplan behandeln?", answer:"Der Businessplan sollte nicht als starres Dokument gelten, sondern laufend {{aktualisiert}} und kritisch hinterfragt werden."},
    {id:9, category:"Rechnungswesen", question:"Was ist eine Einzahlung?", answer:"Eine Einzahlung ist ein Zufluss von {{Zahlungsmitteln}} (Barkasse und Bankguthaben)."},
    {id:9, category:"Rechnungswesen", question:"Was unterscheidet Aufwand von Kosten?", answer:"Aufwand ist der Werteverzehr im externen Rechnungswesen; Kosten sind der bewertete, {{leistungsbezogene}} Güterverbrauch im internen Rechnungswesen."},
    {id:10, category:"Rechnungswesen", question:"Was ist eine Bilanz?", answer:"Die Bilanz ist eine {{stichtagsbezogene}} Gegenüberstellung von Vermögen (Aktiva) und Kapital (Passiva) eines Unternehmens."},
    {id:10, category:"Rechnungswesen", question:"Was weist die GuV aus?", answer:"Die GuV ist eine Zeitraumrechnung, die alle Erträge und Aufwendungen gegenüberstellt und den {{Periodenerfolg}} (Gewinn oder Verlust) ausweist."},
    {id:11, category:"Rechnungswesen", question:"Welche drei Bereiche umfasst der Cashflow?", answer:"Der Cashflow umfasst die laufende Geschäftstätigkeit, die {{Investitionstätigkeit}} und die Finanzierungstätigkeit."},
    {id:11, category:"Rechnungswesen", question:"Was kennzeichnet die degressive Abschreibung?", answer:"Bei der degressiven Abschreibung sind die Beträge anfangs {{höher}} und nehmen über die Nutzungsdauer ab."},
    {id:12, category:"Kostenrechnung", question:"Was beantwortet die Kostenartenrechnung?", answer:"Die {{Kostenartenrechnung}} beantwortet die Frage: Welche Kosten sind entstanden?"},
    {id:12, category:"Kostenrechnung", question:"Wie werden Gemeinkosten verrechnet?", answer:"Gemeinkosten werden über {{Kostenstellen}} (z.B. Produktion, Verwaltung) auf die Kostenträger verrechnet."},
    {id:13, category:"Produktion", question:"Was kennzeichnet Just-in-time?", answer:"Just-in-time bedeutet, dass Materialien genau dann geliefert werden, wenn sie gebraucht werden, was zu einem {{geringen}} Lagerbestand führt."},
    {id:13, category:"Produktion", question:"Was ist Massenfertigung?", answer:"Massenfertigung ist die Produktion einer {{unbegrenzten}} Menge gleichartiger Produkte in einem kontinuierlichen Prozess."},
    {id:14, category:"Produktion", question:"Was zeigt eine Isoquante?", answer:"Eine Isoquante zeigt alle Kombinationen zweier Produktionsfaktoren, die dieselbe {{Ausbringungsmenge}} (Output) erzielen."},
    {id:14, category:"Produktion", question:"Wie wird die Minimalkostenkombination grafisch bestimmt?", answer:"Die Minimalkostenkombination ist der {{Tangentenpunkt}} zwischen der Isoquante und der Isokostengerade."},
    {id:15, category:"Kostentheorie", question:"Wie heißen fixe Kosten auch?", answer:"Fixe Kosten werden auch {{Bereitschaftskosten}} genannt, da sie durch die Bereitschaft zur Leistungserbringung entstehen."},
    {id:15, category:"Kostentheorie", question:"Wie berechnet sich der Deckungsbeitrag?", answer:"Deckungsbeitrag = Erlös − {{variable Kosten}}"},
    {id:16, category:"Investition", question:"Wann ist eine Investition nach der Kapitalwertmethode vorteilhaft?", answer:"Eine Investition ist vorteilhaft, wenn ihr Kapitalwert größer als {{null}} ist."},
    {id:16, category:"Investition", question:"Was ist der interne Zinsfuß?", answer:"Der interne Zinsfuß ist der Zinssatz, bei dem der {{Kapitalwert}} einer Investition gleich null ist."},
    {id:17, category:"Finanzierung", question:"Was ist Innenfinanzierung?", answer:"Innenfinanzierung ist die Finanzierung aus dem Unternehmen heraus, z.B. durch {{Gewinnthesaurierung}} oder Abschreibungsrückflüsse."},
    {id:17, category:"Finanzierung", question:"Wann ist der Leverage-Effekt positiv?", answer:"Der Leverage-Effekt ist positiv, wenn der {{Fremdkapitalzinssatz}} unter der Gesamtkapitalrentabilität liegt."},
  ],

  /* ----------------------------------------------------------
   *  MULTIPLE CHOICE  (mc)
   * ---------------------------------------------------------- */
  mc: [
    // === Wertschöpfung & Entrepreneurship (IDs 1–8) ===
    {id:1, category:"Wertschöpfung", question:"Was versteht man unter Wertschöpfung?",
     options:["Den durch wirtschaftliche Tätigkeit einer Wirtschaftseinheit geschaffenen Mehrwert","Den Umsatz eines Unternehmens abzüglich der Steuern","Den Gewinn vor Zinsen und Steuern (EBIT)","Die Summe aller Einzahlungen in einer Periode"], correct:0},

    {id:1, category:"Wertschöpfung", question:"Wie berechnet sich die Wertschöpfung?",
     options:["Geschaffene Werte minus Vorleistungen","Umsatz minus variable Kosten","Ertrag minus Aufwand","Einzahlungen minus Auszahlungen"], correct:0},

    {id:2, category:"Wertkette", question:"Welche der folgenden ist eine primäre Wertaktivität nach Porter?",
     options:["Marketing und Vertrieb","Personalmanagement","Unternehmensinfrastruktur","Technologieentwicklung"], correct:0},

    {id:2, category:"Wertkette", question:"Was ist das Ziel der Wertketten-Analyse?",
     options:["Identifikation von Wettbewerbsvorteilen entlang der Leistungserstellung","Berechnung des optimalen Verkaufspreises","Ermittlung des Cashflows","Festlegung der Organisationsstruktur"], correct:0},

    {id:2, category:"Wertkette", question:"Welche Aussage zur Wertkette ist richtig?",
     options:["Wertschöpfungsaktivitäten helfen zu verstehen, wofür Kunden bereit sind zu zahlen","Die Wertkette zeigt ausschließlich Produktionsschritte","Sekundäre Aktivitäten haben keinen Einfluss auf den Wettbewerb","Die Wertkette ist nur für Produktionsunternehmen relevant"], correct:0},

    {id:3, category:"Entrepreneurship", question:"Was ist Entrepreneurship im weitesten Sinne?",
     options:["Das Erkennen und Nutzen von Geschäfts- und Innovationschancen","Die Verwaltung bestehender Unternehmensstrukturen","Die Optimierung von Produktionsprozessen","Die Erstellung von Jahresabschlüssen"], correct:0},

    {id:3, category:"Entrepreneurship", question:"Welche Unternehmensführungsebene beschäftigt sich mit Vision und Mission?",
     options:["Normative Unternehmensführung","Strategische Unternehmensführung","Operative Unternehmensführung","Taktische Unternehmensführung"], correct:0},

    {id:4, category:"Entrepreneurship", question:"Wann entfaltet eine Geschäftsidee ihren wirtschaftlichen Wert?",
     options:["Erst wenn sie rechtzeitig erkannt und erfolgreich in die Praxis umgesetzt wird","Bereits durch ihre bloße Existenz","Sobald sie patentiert wurde","Nach der Erstellung des Businessplans"], correct:0},

    {id:5, category:"Entrepreneurship", question:"Welche Fähigkeitsart ist besonders wichtig für die Überzeugung von Investoren?",
     options:["Soziale Fähigkeiten (Kommunikation und Teamfähigkeit)","Technische Fachkenntnisse","Buchhalterische Kenntnisse","Rechtliche Spezialkenntnisse"], correct:0},

    {id:5, category:"Entrepreneurship", question:"Was beschreibt die Eigenschaft 'Risikoeinschätzung' bei Entrepreneurinnen?",
     options:["Die Fähigkeit, Unsicherheiten realistisch zu beurteilen und angemessene Entscheidungen zu treffen","Die Bereitschaft, jedes Risiko einzugehen ohne Abwägung","Die Fähigkeit, Risiken vollständig zu vermeiden","Das Erkennen, dass unternehmerisches Handeln risikolos ist"], correct:0},

    {id:6, category:"Entrepreneurship", question:"Was versteht man unter Intrapreneurship?",
     options:["Unternehmerisches Denken und Handeln innerhalb eines bestehenden Unternehmens","Die Gründung eines neuen Start-ups","Den Verkauf einer Geschäftsidee an ein anderes Unternehmen","Die Ausgründung einer Geschäftseinheit"], correct:0},

    {id:7, category:"Entrepreneurship", question:"Was kennzeichnet ein Start-up?",
     options:["Jünger als 10 Jahre, innovatives Produkt/Modell und Wachstumsintention","Jedes Unternehmen in seiner Gründungsphase","Ein Unternehmen mit weniger als 10 Mitarbeitern","Ein Unternehmen, das staatliche Förderungen erhält"], correct:0},

    {id:7, category:"Entrepreneurship", question:"Was ist ein Spin-off?",
     options:["Die Ausgründung einer Geschäftseinheit aus einem bestehenden Unternehmen","Ein Start-up, das aus einer Hochschule hervorgeht","Eine Kooperation zwischen zwei Unternehmen","Ein Franchise-Unternehmen"], correct:0},

    {id:8, category:"Entrepreneurship", question:"Welche der folgenden ist KEINE Funktion des Businessplans?",
     options:["Steuererklärungsinstrument gegenüber dem Finanzamt","Führungsinstrument mit verbindlichen Zielen","Verhandlungsinstrument für externe Kapitalgeber","Informations- und Steuerungsinstrument"], correct:0},

    {id:8, category:"Entrepreneurship", question:"Welche Aussage zum Businessplan ist richtig?",
     options:["Ein Businessplan sollte laufend aktualisiert und kritisch hinterfragt werden","Ein Businessplan ist ein einmalig erstelltes Dokument, das nicht verändert wird","Ein Businessplan enthält keine Finanzplanung","Ein Businessplan ist nur für externe Kapitalgeber relevant"], correct:0},

    {id:1, category:"Wertschöpfung", question:"Was ist Corporate Social Responsibility (CSR)?",
     options:["Unternehmerische Verantwortung, bei der Stakeholder (nicht nur Shareholder) im Mittelpunkt stehen","Die Pflicht zur Gewinnmaximierung für Aktionäre","Ein gesetzlich vorgeschriebenes Nachhaltigkeitsreporting","Die Unternehmensethik ausschließlich für Manager"], correct:0},

    {id:3, category:"Entrepreneurship", question:"Was liefert die Umweltanalyse im Rahmen der strategischen Analyse?",
     options:["Informationen über die Unternehmensumwelt und externe Einflussfaktoren","Kennzahlen über die interne Kostenstruktur","Daten über Mitarbeiterzufriedenheit","Prognosen über Aktienkurse"], correct:0},

    {id:7, category:"Entrepreneurship", question:"Welche Aussage zu Just-in-time im Kontext von Start-ups und Umsetzung ist korrekt?",
     options:["Bei der Umsetzung einer Geschäftsidee sollte zunächst ein gutes Marktverständnis entwickelt werden, bevor der Businessplan entsteht","Ein Businessplan muss vor jeder Marktanalyse erstellt werden","Intrapreneurship und Start-up-Gründung sind identisch","Eine Geschäftsidee erfordert immer eine Patentanmeldung"], correct:0},

    // === Rechnungswesen (IDs 9–12) ===
    {id:9, category:"Rechnungswesen", question:"Was ist eine Einzahlung?",
     options:["Ein Zufluss von Zahlungsmitteln (Bargeld oder Bankguthaben)","Ein Zugang von Geldvermögen inklusive Forderungen","Ein Wertzuwachs in der Gewinn- und Verlustrechnung","Ein leistungsbezogener Umsatzerlös"], correct:0},

    {id:9, category:"Rechnungswesen", question:"Welches Begriffspaar bezieht sich auf das Geldvermögen (inkl. Forderungen und Verbindlichkeiten)?",
     options:["Einnahmen und Ausgaben","Einzahlungen und Auszahlungen","Erträge und Aufwendungen","Erlöse und Kosten"], correct:0},

    {id:9, category:"Rechnungswesen", question:"Was ist der Unterschied zwischen Ertrag und Erlös?",
     options:["Ertrag umfasst alle Wertzuwächse; Erlös ist nur der leistungsbezogene Teil","Erlös ist weiter gefasst als Ertrag","Ertrag und Erlös sind synonym","Erlöse entstehen nur aus Investitionen"], correct:0},

    {id:9, category:"Rechnungswesen", question:"Welche Rechnungsgröße ist am engsten mit der Liquidität eines Unternehmens verbunden?",
     options:["Einzahlungen und Auszahlungen","Erträge und Aufwendungen","Erlöse und Kosten","Einnahmen und Ausgaben"], correct:0},

    {id:10, category:"Rechnungswesen", question:"Was ist eine Bilanz?",
     options:["Eine stichtagsbezogene Gegenüberstellung von Vermögen und Kapital","Eine Zeitraumrechnung über Erträge und Aufwendungen","Ein Bericht über die Zahlungsströme eines Unternehmens","Eine Aufstellung der Kostenarten"], correct:0},

    {id:10, category:"Rechnungswesen", question:"Welche Aussage zur Bilanz ist korrekt?",
     options:["Die Bilanz ist eine Stichtagsrechnung; der Stichtag muss nicht zwingend der 31.12. sein","Die Bilanz muss immer zum 31. Dezember erstellt werden","Die Bilanz ist eine Zeitraumrechnung","Die Bilanz zeigt nur das Eigenkapital"], correct:0},

    {id:10, category:"Rechnungswesen", question:"Was zeigt die Aktivseite der Bilanz?",
     options:["Das Vermögen des Unternehmens (Anlage- und Umlaufvermögen)","Die Finanzierungsquellen (Eigen- und Fremdkapital)","Den Periodenerfolg (Gewinn/Verlust)","Die laufenden Einnahmen und Ausgaben"], correct:0},

    {id:10, category:"Rechnungswesen", question:"Welche Instrumente umfasst das externe Rechnungswesen?",
     options:["Finanzbuchhaltung, Bilanz und Gewinn- und Verlustrechnung","Kostenartenrechnung, Kostenstellenrechnung und Kostenträgerrechnung","Cashflow-Planung und Liquiditätsrechnung","Investitionsrechnung und Finanzplanung"], correct:0},

    {id:10, category:"Rechnungswesen", question:"Was ist die Eigenkapital-Rentabilität?",
     options:["Gewinn dividiert durch das Eigenkapital","Umsatz dividiert durch Eigenkapital","Eigenkapital dividiert durch Gesamtkapital","Gewinn dividiert durch Umsatz"], correct:0},

    {id:10, category:"Rechnungswesen", question:"Welche Aussage zur IFRS-Rechnungslegung trifft zu?",
     options:["IFRS steht für International Financial Reporting Standards","IFRS ist nur für österreichische Unternehmen relevant","IFRS-Abschlüsse müssen immer zum Stichtag 31.12. erstellt werden","IFRS verbietet die Aktivierung immaterieller Vermögenswerte"], correct:0},

    {id:11, category:"Rechnungswesen", question:"Welche Aussage zur linearen Abschreibung ist richtig?",
     options:["Der Abschreibungsbetrag bleibt über die gesamte Nutzungsdauer gleich","Der Abschreibungsbetrag ist in den ersten Jahren höher","Die Abschreibung wird auf den Restwert berechnet","Der Restbuchwert nach 4 Jahren beträgt mehr als 75% des Ausgangswerts"], correct:0},

    {id:11, category:"Rechnungswesen", question:"Was ist eine außerplanmäßige Abschreibung?",
     options:["Eine unerwartete, nicht vorhersehbare Wertminderung eines Vermögensgegenstands","Die reguläre, jährliche Wertminderung über die Nutzungsdauer","Eine Erhöhung des Buchwerts durch gestiegene Marktwerte","Eine steuerliche Sonderabschreibung für Investitionen"], correct:0},

    {id:11, category:"Rechnungswesen", question:"Welcher Cashflow-Typ zeigt, ob ein Unternehmen aus seinem laufenden Geschäft Zahlungsmittel erwirtschaftet?",
     options:["Cashflow aus laufender Geschäftstätigkeit","Cashflow aus Investitionstätigkeit","Cashflow aus Finanzierungstätigkeit","Free Cashflow"], correct:0},

    {id:11, category:"Rechnungswesen", question:"Was ermittelt die indirekte Cashflow-Methode?",
     options:["Den Cashflow durch Korrektur des Jahresüberschusses um nicht zahlungswirksame Positionen","Den Cashflow direkt aus Einzahlungen und Auszahlungen","Den Cashflow nur aus dem Investitionsbereich","Den Cashflow aus der Differenz von Einnahmen und Ausgaben"], correct:0},

    {id:11, category:"Rechnungswesen", question:"Welche Aussage zu Abschreibungen ist richtig?",
     options:["Planmäßige Abschreibungen verteilen die Anschaffungskosten systematisch über die Nutzungsdauer","Abschreibungen erhöhen den Buchwert eines Vermögensgegenstands","Nur Umlaufvermögen wird abgeschrieben","Abschreibungen sind zahlungswirksame Aufwendungen"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Was beantwortet die Kostenträgerrechnung (KTR)?",
     options:["Wofür (für welches Produkt/welche Leistung) sind Kosten entstanden?","Welche Kosten sind entstanden?","Wo sind die Kosten entstanden?","Wie hoch ist der Deckungsbeitrag?"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Was ist der Zweck der Kostenstellenrechnung?",
     options:["Feststellung, wo im Unternehmen Kosten entstanden sind","Ermittlung der Selbstkosten je Produkt","Unterscheidung zwischen fixen und variablen Kosten","Berechnung des Gesamtdeckungsbeitrags"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Was sind Gemeinkosten?",
     options:["Kosten, die nicht direkt einem Kostenträger zugeordnet werden können","Kosten, die direkt einem Produkt zugerechnet werden können","Variable Kosten pro produzierter Einheit","Fixkosten, die für alle Kostenstellen anfallen"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Welche Aussage zur Kostenrechnung ist korrekt?",
     options:["Gemeinkosten werden über Kostenstellen auf Kostenträger verrechnet","Einzelkosten sind immer variabel","Die Kostenrechnung ist Teil des externen Rechnungswesens","Kostenträger entsprechen immer Kostenstellen"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Was ist die Aufgabe der Kostenartenrechnung?",
     options:["Erfassung und Gliederung aller angefallenen Kosten (z.B. Material-, Personal-, Abschreibungskosten)","Zuweisung von Kosten an Produkte","Kontrolle der Kostenstellen auf Einhaltung des Budgets","Berechnung des Deckungsbeitrags je Produkt"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Welche Aussage zur Preiskalkulation ist korrekt?",
     options:["Die Selbstkosten je Einheit bilden die Grundlage für die Preiskalkulation","Nur variable Kosten werden bei der Preiskalkulation berücksichtigt","Der Gewinnzuschlag wird von den Fixkosten abgezogen","Gemeinkosten werden nicht in die Kalkulation einbezogen"], correct:0},

    {id:12, category:"Kostenrechnung", question:"Ein Lieferantenkredit über 2% Skonto bei Zahlung innerhalb 7 Tagen (sonst 30 Tage netto) — wie hoch ist der effektive Jahreszinssatz näherungsweise?",
     options:["Ca. 37,8%","Ca. 2%","Ca. 12%","Ca. 24%"], correct:0},

    // === Produktion & Kostentheorie (IDs 13–15) ===
    {id:13, category:"Produktion", question:"Was kennzeichnet Just-in-time-Produktion?",
     options:["Materialien werden genau dann geliefert, wenn sie benötigt werden, was den Lagerbestand minimiert","Produktion wird immer auf Vorrat angelegt","Keine Kommunikation mit Lieferanten notwendig","Höchstmöglicher Lagerbestand als Puffer"], correct:0},

    {id:13, category:"Produktion", question:"Welcher Fertigungstyp ist geeignet für die Herstellung von Medikamenten in abgegrenzten Einheiten?",
     options:["Chargenfertigung","Einzelfertigung","Massenfertigung","Serienfertigung"], correct:0},

    {id:13, category:"Produktion", question:"Was ist Massenfertigung?",
     options:["Kontinuierliche Produktion großer Mengen gleichartiger Produkte","Herstellung von Einzelstücken auf Bestellung","Produktion in begrenzten Serien","Ähnliche Produkte mit geringen Unterschieden"], correct:0},

    {id:13, category:"Produktion", question:"Welche Aussage zu Just-in-time (JIT) ist korrekt?",
     options:["JIT führt zu geringem Lagerbestand, aber erhöhtem Planungsaufwand","JIT erfordert hohe Lagerbestände als Sicherheitspuffer","JIT eliminiert den Planungsaufwand vollständig","JIT ist nur in der Automobilindustrie sinnvoll"], correct:0},

    {id:13, category:"Produktion", question:"Was ist Supply Chain Management (SCM)?",
     options:["Planung, Steuerung und Kontrolle aller Flüsse entlang der gesamten Wertschöpfungskette","Die interne Produktionsplanung eines Unternehmens","Das Management von Kundenbeschwerden","Die Lageroptimierung innerhalb eines Unternehmens"], correct:0},

    {id:13, category:"Produktion", question:"Was ist Einzelfertigung?",
     options:["Herstellung von Unikaten auf spezifische Kundenbestellung","Produktion großer Mengen identischer Produkte","Fertigung ähnlicher Produkte in kleinen Serien","Produktion von Standardprodukten in großen Losen"], correct:0},

    {id:13, category:"Produktion", question:"Welches historische Konzept führte das Fließband in die Produktion ein?",
     options:["Fordismus (Henry Ford)","Taylorismus (Frederick Taylor)","Adam Smith's Arbeitsteilung","Just-in-time (Toyota)"], correct:0},

    {id:14, category:"Produktion", question:"Was zeigt eine Isoquante?",
     options:["Alle Faktorkombinationen, die dieselbe Ausbringungsmenge erzeugen","Alle Faktorkombinationen mit gleichen Gesamtkosten","Den optimalen Einsatz nur eines Produktionsfaktors","Die Produktionskurve bei variabler Arbeit"], correct:0},

    {id:14, category:"Produktion", question:"Was zeigt eine Isokostengerade?",
     options:["Alle Faktorkombinationen, die bei gegebenen Faktorpreisen dieselben Gesamtkosten verursachen","Alle Faktorkombinationen mit gleicher Ausbringungsmenge","Die maximale Produktion bei gegebenem Budget","Den Schnittpunkt von Angebot und Nachfrage"], correct:0},

    {id:14, category:"Produktion", question:"Wie wird die Minimalkostenkombination grafisch bestimmt?",
     options:["Als Tangentenpunkt zwischen Isoquante und Isokostengerade","Als Schnittpunkt der Isoquante mit der x-Achse","Als höchster Punkt der Isoquante","Als Schnittpunkt zweier Isoquanten"], correct:0},

    {id:14, category:"Produktion", question:"Welche Aussage zur Isokostengerade ist richtig?",
     options:["Der Schnittpunkt mit der x-Achse ergibt sich aus Budget dividiert durch den Preis von Faktor x","Die Isokostengerade verläuft immer waagerecht","Der Anstieg der Isokostengerade ist positiv","Isokostengeraden schneiden sich immer"], correct:0},

    {id:14, category:"Produktion", question:"Was beschreibt eine linear-homogene Produktionsfunktion?",
     options:["Eine Verdopplung aller Inputs führt zur Verdopplung des Outputs (konstante Skalenerträge)","Eine Verdopplung aller Inputs führt zu weniger als Verdopplung des Outputs","Eine Verdopplung aller Inputs führt zu mehr als Verdopplung des Outputs","Eine Produktionsfunktion, bei der nur ein Faktor variabel ist"], correct:0},

    {id:14, category:"Produktion", question:"Was ist eine limitationale Produktionsfunktion?",
     options:["Produktionsfaktoren werden in einem festen Verhältnis eingesetzt und können sich nicht ersetzen","Produktionsfaktoren können beliebig gegeneinander ausgetauscht werden","Eine Produktionsfunktion mit unendlichen Skalenerträgen","Eine Produktionsfunktion, bei der nur Kapital relevant ist"], correct:0},

    {id:14, category:"Produktion", question:"Was versteht man unter Grenzproduktivität eines Produktionsfaktors?",
     options:["Die Veränderung der Ausbringungsmenge durch den Einsatz einer zusätzlichen Einheit des Faktors","Die maximale Menge, die ein Faktor produzieren kann","Die Gesamtproduktivität aller Faktoren","Die Kosten einer zusätzlichen Einheit des Faktors"], correct:0},

    {id:15, category:"Kostentheorie", question:"Was sind fixe Kosten?",
     options:["Kosten, die unabhängig von der Produktionsmenge anfallen (Bereitschaftskosten)","Kosten, die proportional zur Produktionsmenge steigen","Kosten pro produzierter Einheit","Kosten, die nur in der Anlaufphase entstehen"], correct:0},

    {id:15, category:"Kostentheorie", question:"Wie berechnet sich der Deckungsbeitrag?",
     options:["Erlös minus variable Kosten","Erlös minus Gesamtkosten","Erlös minus Fixkosten","Gewinn plus Fixkosten"], correct:0},

    {id:15, category:"Kostentheorie", question:"Was bedeutet ein positiver Deckungsbeitrag?",
     options:["Das Produkt trägt zur Deckung der Fixkosten bei und lohnt sich kurzfristig zu produzieren","Das Produkt ist bereits nach Deckung aller Fixkosten profitabel","Das Produkt hat höhere Erlöse als Gesamtkosten","Das Produkt sollte sofort aus dem Sortiment genommen werden"], correct:0},

    {id:15, category:"Kostentheorie", question:"Was sind Bereitschaftskosten?",
     options:["Ein anderer Begriff für Fixkosten, die durch die Bereitschaft zur Leistungserbringung entstehen","Variable Kosten, die durch Bereitschaft der Mitarbeiter entstehen","Sonderkosten für besondere Produktionsanlagen","Kosten, die erst bei Erreichen der Kapazitätsgrenze anfallen"], correct:0},

    {id:15, category:"Kostentheorie", question:"Wie lauten die Gesamtkosten?",
     options:["Summe aus fixen und variablen Kosten","Nur die variablen Kosten","Nur die Fixkosten multipliziert mit der Stückzahl","Deckungsbeitrag minus Gewinn"], correct:0},

    {id:15, category:"Kostentheorie", question:"Was sind Grenzkosten?",
     options:["Die Kosten, die durch die Produktion einer zusätzlichen Einheit entstehen","Die Durchschnittskosten bei maximaler Auslastung","Die Fixkosten pro Einheit","Die variablen Kosten bei minimalem Faktoreinsatz"], correct:0},

    {id:15, category:"Kostentheorie", question:"Welche Aussage zu Fixkosten ist richtig?",
     options:["Fixkosten fallen auch bei Nichtproduktion an","Fixkosten steigen proportional zur Produktionsmenge","Fixkosten sind auf lange Sicht immer unveränderlich","Fixkosten pro Einheit sind konstant"], correct:0},

    // === Investition & Finanzierung (IDs 16–17) ===
    {id:16, category:"Investition", question:"Welche Investitionsrechenmethode stellt auf den höchsten Gewinn ab?",
     options:["Gewinnvergleichsrechnung","Kapitalwertmethode","Methode des internen Zinsfußes","Amortisationsrechnung"], correct:0},

    {id:16, category:"Investition", question:"Was ist der interne Zinsfuß?",
     options:["Der Zinssatz, bei dem der Kapitalwert der Investition gleich null ist","Der aktuelle Marktzinssatz für Investitionen","Der Zinssatz, bei dem der Kapitalwert maximal ist","Der gewichtete Kapitalkostensatz (WACC)"], correct:0},

    {id:16, category:"Investition", question:"Was ist die Rentabilitätsvergleichsrechnung?",
     options:["Sie setzt den Gewinn ins Verhältnis zum eingesetzten Kapital","Sie vergleicht den Kapitalwert verschiedener Investitionen","Sie ermittelt die Amortisationszeit","Sie berechnet die Annuität einer Investition"], correct:0},

    {id:16, category:"Investition", question:"Welche Verfahren berücksichtigen den Zeitwert des Geldes?",
     options:["Dynamische Verfahren (Kapitalwertmethode, interner Zinsfuß, Annuität)","Statische Verfahren (Kosten-/Gewinnvergleich, Rentabilität, Amortisation)","Gewinnvergleichsrechnung","Amortisationsrechnung"], correct:0},

    {id:16, category:"Investition", question:"Wann ist eine Investition nach der Kapitalwertmethode vorteilhaft?",
     options:["Wenn der Kapitalwert (NPV) größer als null ist","Wenn der Kapitalwert gleich null ist","Wenn die Amortisationszeit minimal ist","Wenn der interne Zinsfuß dem Kalkulationszinssatz entspricht"], correct:0},

    {id:16, category:"Investition", question:"Was ist die Amortisationsrechnung?",
     options:["Ein statisches Verfahren, das ermittelt, nach wie vielen Jahren eine Investition durch Rückflüsse gedeckt ist","Ein dynamisches Verfahren zur Berechnung des Kapitalwerts","Eine Methode zur Bewertung von Finanzinvestitionen","Die Berechnung der jährlichen Zinszahlungen"], correct:0},

    {id:16, category:"Investition", question:"Was sind immaterielle Investitionen?",
     options:["Investitionen in Patente, Lizenzen, Forschung und Entwicklung","Investitionen in Maschinen und Gebäude","Investitionen in Aktien und Anleihen","Investitionen in Lagerbestände"], correct:0},

    {id:16, category:"Investition", question:"Was sind Sachinvestitionen?",
     options:["Investitionen in materielle Vermögensgegenstände wie Maschinen, Gebäude und Grundstücke","Investitionen in Beteiligungen und Wertpapiere","Investitionen in Forschung und Entwicklung","Investitionen in das Umlaufvermögen"], correct:0},

    {id:16, category:"Investition", question:"Welche Aussage zur Investitionsplanung ist richtig?",
     options:["Der Investitionsprozess beginnt mit der Identifikation des Bedarfs und endet mit der Kontrolle","Die Investitionsplanung umfasst nur die Berechnung des Kapitalwerts","Investitionen müssen immer durch Eigenkapital finanziert werden","Die Investitionsplanung ist Aufgabe der Buchhaltung"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist Außenfinanzierung mit Eigenkapital?",
     options:["Beteiligungsfinanzierung — Zuführung von Eigenkapital durch externe Investoren","Aufnahme von Bankkrediten","Ausgabe von Anleihen","Leasing von Betriebsmitteln"], correct:0},

    {id:17, category:"Finanzierung", question:"Was versteht man unter dem Leverage-Effekt?",
     options:["Der Einsatz von Fremdkapital kann die EK-Rentabilität erhöhen, solange die Gesamtrendite über dem FK-Zinssatz liegt","Mehr Eigenkapital führt immer zu höherer Rendite","Fremdkapital ist immer vorteilhafter als Eigenkapital","Der Leverage-Effekt beschreibt die Hebelwirkung von Preiserhöhungen"], correct:0},

    {id:17, category:"Finanzierung", question:"Wann tritt ein negativer Leverage-Effekt auf?",
     options:["Wenn der Fremdkapitalzinssatz die Gesamtkapitalrentabilität übersteigt","Wenn das Unternehmen keinen Gewinn macht","Wenn kein Fremdkapital eingesetzt wird","Wenn die Eigenkapitalquote über 50% liegt"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist ein Hypothekarkredit?",
     options:["Ein durch Grundpfand (Immobilien) besicherter Langfristkredit","Ein kurzfristiger Lieferantenkredit","Ein durch Wertpapiere besicherter Kredit","Ein unbesicherter Betriebsmittelkredit"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist ein Lieferantenkredit?",
     options:["Ein Kredit, der dadurch entsteht, dass der Käufer eine Zahlungsfrist erhält und auf Skonto verzichtet","Ein Bankkredit für die Finanzierung von Lieferanten","Ein staatlicher Förderkredit für die Industrie","Ein Kredit, der durch Lagerwaren besichert ist"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist Innenfinanzierung?",
     options:["Finanzierung aus unternehmensintern generierten Mitteln (Gewinnthesaurierung, Abschreibungsrückflüsse, Rückstellungen)","Finanzierung durch die Ausgabe neuer Aktien","Aufnahme von Bankkrediten","Finanzierung durch Factoring"], correct:0},

    {id:17, category:"Finanzierung", question:"Welche Aussage zur Kreditaufnahme bei einer Bank ist korrekt?",
     options:["Kreditaufnahme ist Außenfinanzierung und Fremdfinanzierung","Kreditaufnahme ist stets Innenfinanzierung","Kreditaufnahme erhöht das Eigenkapital","Kreditaufnahme ist nur für Großunternehmen möglich"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist Beteiligungsfinanzierung?",
     options:["Zuführung von Eigenkapital durch (neue) Gesellschafter oder Aktionäre","Aufnahme von langfristigen Bankkrediten","Thesaurierung von Gewinnen","Emission von Unternehmensanleihen"], correct:0},

    {id:17, category:"Finanzierung", question:"Was sind Rückstellungen?",
     options:["Passivposten für ungewisse, aber wahrscheinliche Verbindlichkeiten — eine Form der Innenfinanzierung","Rücklagen aus einbehaltenen Gewinnen","Guthaben auf Bankkonten","Kurzfristige Verbindlichkeiten gegenüber Lieferanten"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist die Liquidität 2. Grades?",
     options:["(Forderungen + flüssige Mittel) dividiert durch kurzfristige Verbindlichkeiten","Umlaufvermögen dividiert durch kurzfristige Verbindlichkeiten","Eigenkapital dividiert durch Fremdkapital","Gewinn dividiert durch Umsatz"], correct:0},

    {id:17, category:"Finanzierung", question:"Welche Aussage zur Gewinnthesaurierung ist richtig?",
     options:["Gewinne werden nicht ausgeschüttet, sondern im Unternehmen einbehalten und reinvestiert","Gewinne werden sofort an Aktionäre ausgeschüttet","Gewinne werden in neue Schulden umgewandelt","Gewinne werden als Rückstellungen passiviert"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist ein Lombardkredit?",
     options:["Ein durch bewegliche Sachwerte oder Wertpapiere besicherter kurzfristiger Kredit","Ein langfristiger Immobilienkredit","Ein unbesicherter Betriebsmittelkredit","Ein Lieferantenkredit mit langer Laufzeit"], correct:0},

    {id:17, category:"Finanzierung", question:"Was ist ein Avalkredit?",
     options:["Eine Bürgschaft oder Garantie der Bank ohne direkte Auszahlung","Ein gesicherter Langfristkredit","Ein Kredit gegen Verpfändung von Aktien","Ein kurzfristiger Kontokorrentkredit"], correct:0},

    {id:17, category:"Finanzierung", question:"Welche Aussage zur goldenen Bilanzregel trifft zu?",
     options:["Langfristiges Vermögen (Anlagevermögen) sollte durch langfristiges Kapital finanziert werden","Fremdkapital sollte immer höher als Eigenkapital sein","Die Kapitalstruktur hat keinen Einfluss auf das Unternehmensrisiko","Kurzfristiges Vermögen soll immer durch langfristiges Kapital finanziert werden"], correct:0},

    {id:17, category:"Finanzierung", question:"Eine Beteiligung an der Fenster GmbH — welche Finanzierungsform liegt vor?",
     options:["Außenfinanzierung und Eigenfinanzierung","Innenfinanzierung und Eigenfinanzierung","Außenfinanzierung und Fremdfinanzierung","Innenfinanzierung und Fremdfinanzierung"], correct:0},
  ],

  /* ----------------------------------------------------------
   *  THEORIE  (theory)
   * ---------------------------------------------------------- */
  theory: [
    {
    id: 1,
    title: "Wertschöpfung",
    html: `
      <h2>Wertschöpfung</h2>
      <p>Unternehmen können unterschiedliche Ziele verfolgen, verschiedene Rechtsformen besitzen oder unterschiedlich organisiert sein. Eines haben jedoch alle Unternehmen gemeinsam: Sie existieren, weil sie einen zusätzlichen <strong>Wert</strong> schaffen. Dieser realisierte Mehrwert ist ein zentraler Bestandteil aller ökonomischen Aktivitäten und Überlegungen von Unternehmen, da es sonst keinen wirtschaftlich nachvollziehbaren Grund für ihr Handeln gäbe. Diesen Vorgang bezeichnet man als <strong>Wertschöpfung</strong>.</p>

      <h3>Definition</h3>
      <p><strong>Wertschöpfung</strong> „stellt den durch die wirtschaftliche Tätigkeit einer Wirtschaftseinheit geschaffenen Mehrwert dar." (Delfmann, 2007, S. 1965)</p>

      <h3>Wie Wertschöpfung entsteht</h3>
      <p>Der Mehrwert ergibt sich aus der Summe der geschaffenen Werte abzüglich der <strong>Vorleistungen</strong>, also der verbrauchten Werte. Im Kern bedeutet Wertschöpfung daher, dass vorhandene Güter in Güter mit einem höheren Wert transformiert werden.</p>

      <p>Was zunächst technisch klingt, lässt sich einfach veranschaulichen: Ein Unternehmen nimmt vorhandene Ressourcen, bearbeitet sie weiter und schafft dadurch ein Produkt, das am Markt einen höheren Wert besitzt als die eingesetzten Ausgangsstoffe.</p>

      <hr>

      <h3>Beispiel: Tischlerei</h3>
      <p>Eine <strong>Tischlerei</strong> kauft Holzbohlen, Leim und Schrauben ein. Das Holz wird gesäubert, gehobelt, geschliffen, besäumt, zugeschnitten und schließlich nach kunstvollen Plänen zusammengebaut.</p>

      <p>Auf diese Weise entsteht aus den eingesetzten Materialien ein eleganter Designer-Esstisch, der zu einem deutlich höheren Preis verkauft werden kann. Die Tischlerei schafft also durch ihre Tätigkeit einen zusätzlichen Wert, der sich aus der Differenz zwischen den verzehrten Werten und dem am Markt erzielbaren Verkaufspreis ergibt.</p>
    `
    },

    {
  id: 2,
  title: "Primäre und sekundäre Wertaktivitäten",
  html: `
      <h2>Primäre und sekundäre Wertaktivitäten</h2>
      <p>Die einzelnen <strong>Wertschöpfungsaktivitäten</strong> können entlang einer <strong>Wertkette</strong> gezielt und differenziert analysiert werden. Für Unternehmen ist es entscheidend zu verstehen, wofür Kundinnen und Kunden tatsächlich bereit sind, Geld auszugeben, weil sich daraus wichtige strategische Entscheidungen ableiten lassen.</p>

      <p>Jede einzelne Aktivität entlang der Wertkette leistet einen Beitrag zur <strong>Wettbewerbsfähigkeit</strong> eines Unternehmens. Dadurch kann jede dieser Aktivitäten auch einen potenziellen <strong>Wettbewerbsvorteil</strong> darstellen, der gezielt genutzt werden kann.</p>

      <h3>Bedeutung der Wertkette</h3>
      <p>Die Analyse der Wertkette hilft dabei, jene Schritte der Leistungserstellung zu identifizieren, in denen besonders viel Mehrwert entsteht. Unternehmen können so besser einschätzen, welche Bereiche sie selbst ausbauen, optimieren oder möglicherweise auch auslagern sollten.</p>

      <p>Entscheidend ist dabei die Frage, an welcher Stelle aus Sicht der Kundinnen und Kunden ein höherer Wert entsteht. Dieser Wertzuwachs muss nicht zwangsläufig in der Produktion liegen, sondern kann ebenso stark in anderen Bereichen wie Vermarktung, Marke oder Service entstehen.</p>

      <hr>

      <h3>Beispiel: Hochwertiger Esstisch</h3>
      <p>Ein hochwertiger Esstisch kann deutlich über 3.000 Euro kosten. Dabei stellt sich die Frage, für welchen Schritt der Leistungserstellung Kundinnen und Kunden eigentlich den im Vergleich zum Ausgangsmaterial wesentlich höheren Preis bezahlen.</p>

      <p>Ein Teil des Mehrwerts kann in der Produktion entstehen, wenn gelernte Handwerkerinnen und Handwerker einzigartige Unikate schaffen. In manchen Fällen zeigt sich jedoch, dass ein großer Teil der <strong>Wertschöpfung</strong> in der Vermarktung liegt.</p>

      <h3>Unterschiedliche Quellen des Mehrwerts</h3>
      <p>Je nach Produkt zahlen Konsumentinnen und Konsumenten aus sehr unterschiedlichen Gründen. Genau diese Unterschiede sind für Unternehmen strategisch bedeutsam, weil sie zeigen, welche Aktivitäten besonders wichtig sind und welche weniger stark zum wahrgenommenen Wert beitragen.</p>

      <ul>
        <li><strong>Marketing und Markenimage</strong> können entscheidend sein, wenn Kundinnen und Kunden vor allem für das Image eines Produkts bezahlen.</li>
        <li><strong>Produktion und handwerkliche Qualität</strong> stehen im Vordergrund, wenn der Wert vor allem durch die eigentliche Herstellung entsteht.</li>
        <li><strong>Strategische Entscheidungen</strong> ergeben sich daraus, ob bestimmte Aktivitäten intern durchgeführt oder ausgelagert werden sollten.</li>
      </ul>

      <h3>Beispiel: Energy-Drink und Wein</h3>
      <p>Ein <strong>Energy-Drink-Anbieter</strong> kann die Abfüllung und Produktion seines Getränks auslagern, weil Konsumentinnen und Konsumenten häufig weniger für den Produktionsprozess bezahlen als für das Image der Marke. In diesem Fall liegt ein erheblicher Teil des wahrgenommenen Mehrwerts im Marketing.</p>

      <p>Anders ist die Situation bei <strong>südsteirischen Weinkellereien</strong>. Hier bezahlen Kundinnen und Kunden vor allem dafür, dass hochwertige Weintrauben von erfahrenen Kellermeisterinnen und -meistern zu besonderen Weinen verarbeitet werden. In diesem Fall ist die Produktion selbst der zentrale Träger der Wertschöpfung, weshalb eine Auslagerung ins Ausland kaum vorstellbar wäre.</p>
    `
    },
  {
  id: 3,
  title: "Der Begriff Entrepreneurship",
  html: `
    <h2>Der Begriff Entrepreneurship</h2>
    <p>Das <strong>Erkennen</strong> und <strong>Nutzen von Geschäftschancen</strong> gehört zu den wesentlichsten unternehmerischen Tätigkeiten. In der Wissenschaft wird dieser Bereich unter dem Begriff <strong>Entrepreneurship</strong> zusammengefasst.</p>

    <h3>Definition</h3>
    <p><strong>Entrepreneurship</strong> bezeichnet im weitesten Sinne das Erkennen und Nutzen von <strong>Geschäfts- und Innovationschancen</strong> durch Personen oder Organisationen.</p>

    <h3>Zentrale Bedeutung</h3>
    <p>Entrepreneurship steht damit im Kern für unternehmerisches Handeln, das auf neue Möglichkeiten ausgerichtet ist. Es geht nicht nur darum, bestehende Prozesse zu verwalten, sondern vor allem darum, Chancen zu identifizieren und daraus wirtschaftlich tragfähige Lösungen zu entwickeln.</p>

    <h3>Die Rolle der Geschäftsidee</h3>
    <p>Das Herzstück eines jeden <strong>Gründungsvorhabens</strong> ist die <strong>Geschäftsidee</strong>. Sie bildet den Ausgangspunkt dafür, eine erkannte Chance in ein konkretes Angebot, ein Produkt oder eine Dienstleistung zu übersetzen.</p>
  `
    },
  {
  id: 4,
  title: "Die Geschäftsidee",
  html: `
    <h2>Die Geschäftsidee</h2>
    <p>Eine gute <strong>Idee</strong> allein genügt nicht. Entscheidend ist vielmehr, dass sie rechtzeitig erkannt und umgesetzt wird, damit daraus ein <strong>Wettbewerbsvorteil</strong> entstehen kann.</p>

    <h3>Bedeutung der Umsetzung</h3>
    <p>Eine Geschäftsidee entfaltet ihren wirtschaftlichen Wert nicht schon durch ihre bloße Existenz. Erst wenn sie zur richtigen Zeit aufgegriffen und erfolgreich in die Praxis umgesetzt wird, kann sie zur Grundlage unternehmerischen Erfolgs werden.</p>

    <h3>Wie Geschäftsideen entstehen</h3>
    <p>Eine <strong>Geschäftsidee</strong> entsteht häufig aus der Beobachtung von Problemen, Veränderungen oder neuen Möglichkeiten. Typische Auslöser sind:</p>

    <ul>
      <li>die <strong>Identifikation eines unbefriedigten Bedürfnisses</strong> oder eines Problems,</li>
      <li>die <strong>Übertragung einer bestehenden Lösung</strong> auf einen neuen Markt oder Kontext,</li>
      <li><strong>technologische Entwicklungen</strong>, die neue Produkte oder Dienstleistungen ermöglichen,</li>
      <li>Veränderungen in <strong>gesellschaftlichen, wirtschaftlichen oder rechtlichen Rahmenbedingungen</strong>.</li>
    </ul>
  `
    },
  {
  id: 5,
  title: "Fähigkeiten und Eigenschaften",
  html: `
    <h2>Fähigkeiten und Eigenschaften</h2>
    <p>Neben einer guten Idee und dem richtigen Timing sind es vor allem die beteiligten <strong>Personen</strong>, die ein Gründungsvorhaben erfolgreich machen. Gründungsberaterinnen und -berater sowie Geldgeberinnen und -geber betonen daher häufig, wie wichtig die Gründungsperson oder das Gründungsteam für die Entscheidung ist, eine Idee zu unterstützen.</p>

    <p>Für die erfolgreiche Umsetzung einer Geschäftsidee spielen sowohl konkrete <strong>Fähigkeiten</strong> als auch bestimmte <strong>Persönlichkeitsmerkmale</strong> eine wichtige Rolle.</p>

    <h3>Zentrale Fähigkeiten</h3>
    <p>Im Zusammenhang mit Entrepreneurship werden vor allem fachliche, betriebswirtschaftliche, rechtliche und soziale Fähigkeiten genannt. Sie bilden die Grundlage dafür, aus einer Idee ein tragfähiges Unternehmen zu entwickeln.</p>

    <ul>
      <li><strong>Fachliche Fähigkeiten</strong> sind wichtig, um Problemstellungen zu identifizieren und darauf aufbauend geeignete Lösungen zu entwickeln. Sie spielen vor allem bei der Ideenfindung sowie bei der Entwicklung des Produkts oder der Dienstleistung eine zentrale Rolle.</li>
      <li><strong>Betriebswirtschaftliche Fähigkeiten</strong> werden insbesondere für die Entwicklung eines Geschäftsmodells, für Finanzierungsfragen sowie für Marketing und Vertrieb benötigt. Schließlich muss ein Unternehmen gegründet, geführt und sein Angebot erfolgreich verkauft werden.</li>
      <li><strong>Rechtliche Fähigkeiten</strong> sind etwa bei Verträgen, bei der Wahl der Rechtsform, bei der Einhaltung gesetzlicher Vorgaben, in steuerlichen Fragen oder beim Schutz eines Produkts, beispielsweise durch Patente, von Bedeutung.</li>
      <li><strong>Soziale Fähigkeiten</strong> wie Kommunikations- und Teamfähigkeit sind ebenfalls entscheidend, vor allem wenn es darum geht, andere von der eigenen Idee zu überzeugen und ein funktionierendes Team aufzubauen.</li>
    </ul>

    <h3>Zusammenarbeit und Zukauf von Leistungen</h3>
    <p>Nicht alle erforderlichen Leistungen müssen von Entrepreneurinnen und Entrepreneuren selbst erbracht werden. Bestimmte Aufgaben können auch zugekauft werden, etwa in rechtlichen oder steuerlichen Fragen, bei Patentthemen oder im Umgang mit behördlichen Vorgaben.</p>

    <p>Moderne Ansätze sehen Entrepreneurinnen und Entrepreneure deshalb eher als <strong>Komponistinnen</strong> oder <strong>Komponisten</strong>. Diese spielen auch nicht jedes Instrument selbst, sondern stimmen unterschiedliche Beiträge so aufeinander ab, dass ein gemeinsames Ziel erreicht wird. Genauso kann auch unternehmerisches Handeln verstanden werden.</p>

    <hr>

    <h3>Wichtige Eigenschaften von Entrepreneurinnen und Entrepreneuren</h3>
    <p>Neben fachlichen Kenntnissen sind auch bestimmte persönliche Eigenschaften vorteilhaft, um Ideen tatsächlich in die Tat umzusetzen und mit Unsicherheit, Verantwortung und Veränderung umzugehen.</p>

    <ul>
      <li><strong>Leistungsbereitschaft</strong> zeigt sich in selbstständigem und eigenverantwortlichem Handeln. Entrepreneurinnen und Entrepreneure müssen intensiv an der Umsetzung ihrer Idee arbeiten und sich aus eigener Initiative motivieren.</li>
      <li><strong>Glaube an sich selbst</strong> bedeutet, Vertrauen in die eigenen Fähigkeiten, Ideen und Zugänge zu haben. Ein gesundes Selbstvertrauen ist für unternehmerisches Handeln besonders wichtig.</li>
      <li><strong>Durchhaltevermögen</strong> ist notwendig, um Hindernisse, Rückschläge und Misserfolge zu bewältigen, ohne das Ziel aus den Augen zu verlieren.</li>
      <li><strong>Kreativität</strong> hilft dabei, innovative und neuartige Lösungen für bestehende Probleme oder Bedürfnisse zu entwickeln.</li>
      <li><strong>Flexibilität</strong> ermöglicht es, sich rasch an veränderte Rahmenbedingungen und neue Anforderungen anzupassen.</li>
      <li><strong>Risikoeinschätzung und Risikobereitschaft</strong> sind wichtig, um Unsicherheiten realistisch zu beurteilen und darauf aufbauend angemessene Entscheidungen zu treffen.</li>
      <li><strong>Durchsetzungsvermögen</strong> beschreibt die Fähigkeit, eigene Ideen zielstrebig umzusetzen und sich dabei auch im Wettbewerb mit anderen zu behaupten.</li>
    </ul>
  `
    },
  {
  id: 6,
  title: "Intrapreneurship",
  html: `
    <h2>Intrapreneurship</h2>
    <p><strong>Unternehmerisches Denken und Handeln</strong> ist nicht nur für Start-ups wichtig, sondern auch für bereits etablierte Unternehmen. Das Generieren von Ideen, das Vorantreiben innovativer Entwicklungen, die Identifikation von Geschäftschancen sowie viele der zuvor genannten Fähigkeiten und Eigenschaften spielen auch in bestehenden Organisationen eine zentrale Rolle.</p>

    <h3>Bedeutung für etablierte Unternehmen</h3>
    <p>Auch große und etablierte Unternehmen sind darauf angewiesen, neue Ideen hervorzubringen und Chancen frühzeitig zu erkennen. Deshalb versuchen viele Unternehmen, Prozesse und Strukturen zu schaffen, in denen sich Mitarbeiterinnen und Mitarbeiter entfalten und eigene Initiativen entwickeln können.</p>

    <h3>Definition</h3>
    <p><strong>Intrapreneurship</strong> bezeichnet unternehmerisches Denken und Handeln <strong>innerhalb eines bestehenden Unternehmens</strong>. Es beschreibt also die Fähigkeit von Mitarbeiterinnen und Mitarbeitern, innerhalb einer Organisation innovativ, chancenorientiert und eigenverantwortlich zu handeln.</p>
  `
    },
  {
  id: 7,
  title: "Umsetzung",
  html: `
    <h2>Umsetzung</h2>
    <p>Für die <strong>Umsetzung</strong> einer unternehmerischen Chance gibt es verschiedene Wege. Dazu zählen insbesondere die <strong>Gründung</strong>, der <strong>Verkauf</strong> einer Idee, <strong>Intrapreneurship</strong> innerhalb eines bestehenden Unternehmens sowie ein <strong>Spin-off</strong>.</p>

    <h3>Mögliche Wege der Umsetzung</h3>
    <p>Die Nutzung einer unternehmerischen Chance ist nicht zwingend an die Gründung eines neuen Unternehmens gebunden. Eine Idee kann auch auf andere Weise wirtschaftlich verwertet oder weiterentwickelt werden.</p>

    <ul>
      <li><strong>Gründung</strong> bedeutet, dass eine Geschäftsidee in einem neu geschaffenen Unternehmen umgesetzt wird.</li>
      <li><strong>Verkauf</strong> bedeutet, dass die Idee an ein anderes Unternehmen weitergegeben wird, das die Umsetzung übernimmt.</li>
      <li><strong>Intrapreneurship</strong> beschreibt die Identifikation und Umsetzung einer Idee durch Angestellte innerhalb eines bestehenden Unternehmens.</li>
      <li><strong>Spin-off</strong> bezeichnet die Ausgründung einer Geschäftseinheit, die in einem neuen Unternehmen eigenständig weiterentwickelt wird.</li>
    </ul>

    <h3>Was ein Start-up auszeichnet</h3>
    <p>Im öffentlichen Diskurs wird der Begriff <strong>Start-up</strong> häufig unreflektiert für neu gegründete Unternehmen verwendet. Tatsächlich sind Start-ups jedoch nicht nur durch ihr junges Alter gekennzeichnet, sondern vor allem auch durch ihren Fokus auf <strong>Innovation</strong> und <strong>Wachstum</strong>.</p>

    <p><strong>Start-ups</strong> sind Unternehmen, die jünger als zehn Jahre sind, über ein innovatives Produkt, einen innovativen Service oder ein innovatives Geschäftsmodell verfügen und eine klare Wachstumsintention haben.</p>

    <hr>

    <h3>Planung der Umsetzung</h3>
    <p>Unabhängig davon, in welcher Form eine Geschäftsidee umgesetzt wird, muss dieser Prozess sorgfältig geplant werden. Ein zentrales Instrument dafür ist der <strong>Businessplan</strong>.</p>

    <p>Der Businessplan enthält in strukturierter Form die für die Gründung oder Umsetzung notwendigen Überlegungen und Aktivitäten. Er setzt diese in Beziehung zueinander und schafft dadurch ein einheitliches und nachvollziehbares Gesamtkonzept.</p>

    <h3>Funktionen des Businessplans</h3>
    <p>Der Businessplan erfüllt mehrere wichtige Aufgaben im Rahmen der Umsetzung einer Geschäftsidee:</p>

    <ol>
      <li><strong>Führungsinstrument:</strong> Er enthält verbindliche Ziele und Strategien und gibt damit Orientierung für die weitere Entwicklung.</li>
      <li><strong>Informations- und Steuerungsinstrument:</strong> Er hilft dabei, Probleme frühzeitig zu erkennen und geeignete Maßnahmen einzuleiten.</li>
      <li><strong>Verhandlungsinstrument:</strong> Er bietet externen Kapitalgeberinnen und -gebern einen strukturierten Gesamtüberblick über das Unternehmen und dessen Vorhaben.</li>
    </ol>
  `
    },
  {
  id: 8,
  title: "Businessplan",
  html: `
    <h2>Businessplan</h2>
    <p>Ein <strong>Businessplan</strong> sollte nicht als starres Dokument verstanden werden, das von Anfang an alle Entwicklungen exakt vorhersagt. Gerade in der frühen Phase der Umsetzung verändern sich viele Annahmen, Rahmenbedingungen und Prioritäten laufend.</p>

    <h3>Expertentipp</h3>
    <p>Bei der Umsetzung von Geschäftsideen ist es sinnvoll, zunächst ein gutes Verständnis für die <strong>Zusammenhänge und Mechanismen des Markts</strong> sowie für das eigene <strong>Geschäftsmodell</strong> zu entwickeln. Erst auf dieser Grundlage sollte ein Businessplan entstehen.</p>

    <p>Der Businessplan ist damit das logische Ergebnis eines gedanklichen und strategischen Klärungsprozesses. Er sollte nicht als einmalige Planung betrachtet, sondern laufend <strong>aktualisiert</strong> und <strong>kritisch hinterfragt</strong> werden.</p>

    <hr>

    <h3>Beispielhafter Aufbau</h3>
    <p>Ein Businessplan folgt in der Regel einer klaren Struktur, um alle wesentlichen Aspekte eines Vorhabens übersichtlich darzustellen. Ein beispielhafter Aufbau umfasst die folgenden Abschnitte:</p>

    <table>
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Abschnitt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><strong>Executive Summary</strong></td>
        </tr>
        <tr>
          <td>2</td>
          <td><strong>Produkt oder Dienstleistung</strong></td>
        </tr>
        <tr>
          <td>3</td>
          <td><strong>Branche und Markt</strong></td>
        </tr>
        <tr>
          <td>4</td>
          <td><strong>Marketing</strong></td>
        </tr>
        <tr>
          <td>5</td>
          <td><strong>Das Team</strong></td>
        </tr>
        <tr>
          <td>6</td>
          <td><strong>Unternehmen</strong></td>
        </tr>
        <tr>
          <td>7</td>
          <td><strong>Chancen und Risiken</strong></td>
        </tr>
        <tr>
          <td>8</td>
          <td><strong>Umsetzungsplanung</strong></td>
        </tr>
        <tr>
          <td>9</td>
          <td><strong>Planung für die kommenden Geschäftsjahre</strong></td>
        </tr>
        <tr>
          <td>10</td>
          <td><strong>Finanzplanung</strong></td>
        </tr>
      </tbody>
    </table>

    <h3>Einordnung</h3>
    <p>Dieser Aufbau zeigt, dass ein Businessplan sowohl inhaltliche, strategische als auch finanzielle Aspekte eines Vorhabens zusammenführt. Er dient damit als umfassendes Instrument zur Planung, Steuerung und Kommunikation einer Geschäftsidee.</p>

    <p>Nähere Informationen zum Businessplan sowie zu seiner Gestaltung und seinem Einsatz werden in der Lehrveranstaltung <strong>VU Businessplan und Entrepreneurship</strong> am Ende des Bachelorstudiums behandelt.</p>
  `
    },

  // ============================================================
  // IDs 9–17: Rechnungswesen, Produktion, Investition, Finanzierung
  // ============================================================

  {
  id: 9,
  title: "Rechnungswesen: Begriffsabgrenzungen",
  html: `
    <h2>Rechnungswesen: Begriffsabgrenzungen</h2>
    <p>Das betriebliche Rechnungswesen dient der systematischen Erfassung, Überwachung und Steuerung aller wirtschaftlichen Vorgänge in einem Unternehmen. Eine wichtige Grundlage ist dabei die klare <strong>Abgrenzung zentraler Begriffe</strong>, da dieselben wirtschaftlichen Vorgänge je nach Perspektive unterschiedlich bezeichnet werden. Die vier wichtigsten Begriffspaare bilden eine Hierarchie von der reinen Zahlungsmittelperspektive bis zur leistungsorientierten Kosten-Erlös-Rechnung.</p>

    <h3>1. Einzahlung und Auszahlung</h3>
    <p><strong>Einzahlungen</strong> sind Zuflüsse von Zahlungsmitteln — also Zugänge von Bargeld oder Bankguthaben. <strong>Auszahlungen</strong> sind die entsprechenden Abflüsse. Diese Größen sind am engsten mit der <strong>Liquidität</strong> eines Unternehmens verbunden, da sie zeigen, ob tatsächlich Geld verfügbar ist.</p>
    <p>Beispiel: Ein Kunde überweist den Rechnungsbetrag → Einzahlung auf dem Bankkonto.</p>

    <h3>2. Einnahme und Ausgabe</h3>
    <p><strong>Einnahmen</strong> umfassen Zugänge von <strong>Geldvermögen</strong> — also nicht nur Zahlungsmittel, sondern auch neu entstandene Forderungen, abzüglich neuer Verbindlichkeiten. <strong>Ausgaben</strong> sind die entsprechenden Abgänge. Einnahmen sind weiter gefasst als Einzahlungen.</p>
    <p>Beispiel: Verkauf auf Ziel — eine Forderung entsteht → Einnahme, aber noch keine Einzahlung.</p>

    <h3>3. Ertrag und Aufwand</h3>
    <p><strong>Ertrag</strong> ist der gesamte Wertzuwachs einer Periode — er umfasst alle betrieblichen und betriebsfremden Wertezugänge und wird in der <strong>Gewinn- und Verlustrechnung (GuV)</strong> erfasst. <strong>Aufwand</strong> ist der entsprechende Werteverzehr. Die Differenz ergibt den <strong>Periodenerfolg</strong> (Gewinn oder Verlust).</p>

    <h3>4. Erlös und Kosten</h3>
    <p><strong>Erlöse</strong> sind der <em>leistungsbezogene</em> Teil des Ertrags — also nur jene Wertezugänge, die direkt aus dem eigentlichen Geschäftszweck resultieren (z.B. Umsatzerlöse). <strong>Kosten</strong> sind der bewertete, leistungsbezogene Güterverbrauch und gehören zur internen <strong>Kostenrechnung</strong>. Erlöse und Kosten klammern betriebsfremde und außerordentliche Posten aus.</p>

    <hr>

    <h3>Übersicht: Begriffsabgrenzung</h3>
    <table>
      <thead>
        <tr><th>Begriffspaar</th><th>Bezugsgröße</th><th>Rechnungsbereich</th></tr>
      </thead>
      <tbody>
        <tr><td>Einzahlung / Auszahlung</td><td>Zahlungsmittelbestand</td><td>Liquiditätsrechnung</td></tr>
        <tr><td>Einnahme / Ausgabe</td><td>Geldvermögen</td><td>Finanzrechnung</td></tr>
        <tr><td>Ertrag / Aufwand</td><td>Gesamtvermögen</td><td>Externes RW (GuV)</td></tr>
        <tr><td>Erlös / Kosten</td><td>Leistungsbezogener Bereich</td><td>Internes RW (Kostenrechnung)</td></tr>
      </tbody>
    </table>

    <p>Die Kenntnis dieser Abgrenzungen ist grundlegend für das Verständnis aller weiteren Instrumente des Rechnungswesens — von der Bilanz über die GuV bis zur Kostenrechnung.</p>
  `
  },

  {
  id: 10,
  title: "Externes Rechnungswesen: Bilanz und GuV",
  html: `
    <h2>Externes Rechnungswesen: Bilanz und GuV</h2>
    <p>Das <strong>externe Rechnungswesen</strong> richtet sich an externe Adressaten — Investoren, Gläubiger, Finanzamt, Aufsichtsbehörden. Es liefert standardisierte Informationen über die wirtschaftliche Lage eines Unternehmens. Die zentralen Instrumente sind die <strong>Bilanz</strong> und die <strong>Gewinn- und Verlustrechnung (GuV)</strong>, die zusammen den <strong>Jahresabschluss</strong> bilden.</p>

    <h3>Die Bilanz</h3>
    <p>Die <strong>Bilanz</strong> ist eine <strong>stichtagsbezogene</strong> Gegenüberstellung von Vermögen und Kapital. Der Bilanzstichtag ist frei wählbar und muss nicht zwingend der 31. Dezember sein. Es gilt stets: <strong>Aktiva = Passiva</strong> (Bilanzsumme auf beiden Seiten identisch).</p>

    <ul>
      <li><strong>Aktivseite (Vermögensseite):</strong> zeigt, wie das Kapital eingesetzt ist.
        <ul>
          <li><em>Anlagevermögen:</em> langfristig gebundene Werte (Maschinen, Gebäude, Patente)</li>
          <li><em>Umlaufvermögen:</em> kurzfristig verfügbare Werte (Lagerbestände, Forderungen, Bankguthaben)</li>
        </ul>
      </li>
      <li><strong>Passivseite (Kapitalseite):</strong> zeigt, woher das Kapital stammt.
        <ul>
          <li><em>Eigenkapital (EK):</em> von den Eigentümern bereitgestelltes Kapital</li>
          <li><em>Fremdkapital (FK):</em> Verbindlichkeiten gegenüber Dritten (kurz- und langfristig)</li>
        </ul>
      </li>
    </ul>

    <h3>Die Gewinn- und Verlustrechnung (GuV)</h3>
    <p>Die <strong>GuV</strong> ist eine <strong>Zeitraumrechnung</strong> — sie erfasst alle Erträge und Aufwendungen einer Rechnungsperiode und ermittelt den <strong>Periodenerfolg</strong>. Wichtige Positionen:</p>
    <ul>
      <li><strong>Umsatzerlöse:</strong> Einnahmen aus dem Kerngeschäft</li>
      <li><strong>Materialaufwand:</strong> Verbrauch von Roh-, Hilfs- und Betriebsstoffen</li>
      <li><strong>Personalaufwand:</strong> Löhne, Gehälter, Sozialabgaben</li>
      <li><strong>Abschreibungen:</strong> planmäßige Wertminderungen des Anlagevermögens</li>
      <li><strong>Ergebnis:</strong> Gewinn oder Verlust der Periode</li>
    </ul>

    <hr>

    <h3>Wichtige Kennzahlen</h3>
    <p><strong>Eigenkapitalrentabilität:</strong> Gewinn ÷ Eigenkapital — zeigt die Verzinsung des eingesetzten EK.</p>
    <p><strong>Eigenkapitalquote:</strong> Eigenkapital ÷ Gesamtkapital — Richtwert ≥ 30% gilt als solide.</p>
    <p><strong>Liquidität 2. Grades:</strong> (Forderungen + flüssige Mittel) ÷ kurzfristige Verbindlichkeiten.</p>

    <h3>Abgrenzung: Bilanz vs. GuV</h3>
    <p>Die <strong>Bilanz</strong> ist eine Bestandsrechnung (Stichtag — ein Foto). Die <strong>GuV</strong> ist eine Stromrechnung (Zeitraum — ein Film). Zusammen geben sie ein vollständiges Bild der wirtschaftlichen Lage.</p>

    <h3>Internationale Rechnungslegung</h3>
    <p><strong>IFRS</strong> (International Financial Reporting Standards) sind internationale Bilanzierungsregeln, die vor allem für börsennotierte Unternehmen in der EU verpflichtend sind. Sie unterscheiden sich in einigen Punkten von nationalen Regelungen, z.B. bei der Bewertung von Vermögenswerten oder bei der Zwischenergebniseliminierung bei Konzernunternehmen.</p>
  `
  },

  {
  id: 11,
  title: "Cashflow und Abschreibungen",
  html: `
    <h2>Cashflow und Abschreibungen</h2>
    <p>Zwei zentrale Konzepte des betrieblichen Rechnungswesens sind der <strong>Cashflow</strong> und die <strong>Abschreibungen</strong>. Während der Cashflow die Zahlungsfähigkeit und den Finanzierungsspielraum eines Unternehmens abbildet, ermöglichen Abschreibungen die periodengerechte Erfassung von Wertminderungen des Anlagevermögens.</p>

    <h3>Der Cashflow</h3>
    <p>Der <strong>Cashflow</strong> ist ein Maß für die <strong>finanzielle Leistungsfähigkeit</strong> eines Unternehmens — er zeigt, wie viele Zahlungsmittel in einer Periode erwirtschaftet oder verbraucht wurden. Er gliedert sich in drei Bereiche:</p>

    <ul>
      <li><strong>Cashflow aus laufender Geschäftstätigkeit (operativer CF):</strong> Zahlungsströme aus dem Kerngeschäft. Ein positiver operativer CF zeigt, dass das Unternehmen aus dem laufenden Betrieb genug Mittel generiert.</li>
      <li><strong>Cashflow aus Investitionstätigkeit:</strong> Zahlungen für Kauf oder Verkauf von Anlagevermögen. In Wachstumsphasen meist negativ.</li>
      <li><strong>Cashflow aus Finanzierungstätigkeit:</strong> Zahlungen im Zusammenhang mit der Kapitalbeschaffung (Kreditaufnahmen, Eigenkapitalerhöhungen, Dividenden, Tilgungen).</li>
    </ul>

    <h3>Direkte vs. indirekte Ermittlung</h3>
    <p><strong>Direkte Methode:</strong> Gegenüberstellung aller zahlungswirksamen Einzahlungen und Auszahlungen.</p>
    <p><strong>Indirekte Methode:</strong> Ausgehend vom Jahresüberschuss werden nicht zahlungswirksame Positionen (insb. Abschreibungen, Rückstellungsveränderungen) korrigiert.</p>

    <hr>

    <h3>Abschreibungen</h3>
    <p><strong>Abschreibungen</strong> erfassen die planmäßige oder außerplanmäßige Wertminderung von Anlagevermögen und verteilen die Anschaffungskosten auf die Nutzungsdauer.</p>

    <h3>Planmäßige Abschreibungsmethoden</h3>
    <ul>
      <li><strong>Lineare Abschreibung:</strong> Gleichmäßige Verteilung auf die Nutzungsjahre. Jährlicher Betrag = Anschaffungskosten ÷ Nutzungsdauer. Restbuchwert nach 4 von 5 Jahren = 20% der AK.</li>
      <li><strong>Geometrisch-degressive Abschreibung:</strong> Fester Prozentsatz auf den jeweiligen <em>Restbuchwert</em>. Anfangs hohe, später sinkende Beträge. Beispiel 20%-Satz auf AK 100.000 €: Jahr 1: 20.000 €, Jahr 2: 16.000 €, Jahr 3: 12.800 €, Jahr 4: 10.240 €.</li>
      <li><strong>Leistungsabhängige Abschreibung:</strong> Orientiert sich am tatsächlichen Einsatz (Betriebsstunden, Kilometer).</li>
    </ul>

    <h3>Außerplanmäßige Abschreibungen</h3>
    <p>Werden vorgenommen, wenn ein <em>unerwarteter, dauerhafter</em> Wertverlust eingetreten ist — z.B. durch Beschädigung, technologische Überalterung oder einen dauerhaft gesunkenen Marktwert.</p>

    <h3>Zweck der Abschreibungen</h3>
    <p>Abschreibungen sind <strong>nicht zahlungswirksam</strong> — sie bewirken keinen Geldabfluss. Sie mindern jedoch den Gewinn und damit die Steuerbelastung, während die entsprechenden Mittel im Unternehmen verbleiben (Abschreibungsrückflüsse als Finanzierungsquelle).</p>
  `
  },

  {
  id: 12,
  title: "Kostenrechnung: KAR → KSR → KTR",
  html: `
    <h2>Kostenrechnung: KAR → KSR → KTR</h2>
    <p>Die <strong>Kostenrechnung</strong> ist ein zentrales Instrument des internen Rechnungswesens. Sie dient dazu, wirtschaftliche Entscheidungen zu unterstützen, Kosten zu kontrollieren und die Grundlage für die <strong>Preiskalkulation</strong> zu schaffen. Die Kostenrechnung gliedert sich in drei aufeinander aufbauende Stufen.</p>

    <h3>Stufe 1: Kostenartenrechnung (KAR)</h3>
    <p><strong>Frage: Welche Kosten sind entstanden?</strong></p>
    <p>Die KAR erfasst und gliedert alle in einer Periode angefallenen Kosten nach ihrer Art:</p>
    <ul>
      <li><strong>Materialkosten:</strong> Rohstoffe, Hilfsstoffe, Betriebsstoffe</li>
      <li><strong>Personalkosten:</strong> Löhne, Gehälter, Sozialabgaben</li>
      <li><strong>Abschreibungskosten:</strong> auf Maschinen, Gebäude, Fahrzeuge</li>
      <li><strong>Kapitalkosten:</strong> Zinsen für Fremdkapital</li>
      <li><strong>Sonstige Kosten:</strong> Miete, Versicherungen, Energie</li>
    </ul>
    <p>Die KAR unterscheidet zwischen <strong>Einzelkosten</strong> (direkt einem Kostenträger zurechenbar) und <strong>Gemeinkosten</strong> (nicht direkt zurechenbar — müssen verteilt werden).</p>

    <h3>Stufe 2: Kostenstellenrechnung (KSR)</h3>
    <p><strong>Frage: Wo sind die Kosten entstanden?</strong></p>
    <p>Die KSR verteilt die Gemeinkosten auf <strong>Kostenstellen</strong> — betriebliche Bereiche, in denen Kosten anfallen:</p>
    <ul>
      <li>Einkauf / Beschaffung</li>
      <li>Produktion / Fertigung</li>
      <li>Verwaltung</li>
      <li>Vertrieb</li>
    </ul>
    <p>Instrument: der <strong>Betriebsabrechnungsbogen (BAB)</strong>, der die Gemeinkosten systematisch auf Kostenstellen verteilt.</p>

    <h3>Stufe 3: Kostenträgerrechnung (KTR)</h3>
    <p><strong>Frage: Wofür sind die Kosten entstanden?</strong></p>
    <p>Die KTR ermittelt die <strong>Selbstkosten je Leistungseinheit</strong> (Stückkosten). Sie bildet die Grundlage für:</p>
    <ul>
      <li>Preiskalkulation: Verkaufspreis ≥ Selbstkosten + Gewinnzuschlag</li>
      <li>Kurzfristige Erfolgsrechnung</li>
      <li>Make-or-Buy-Entscheidungen</li>
    </ul>

    <hr>

    <h3>Zusammenfassung: Die drei Stufen</h3>
    <table>
      <thead>
        <tr><th>Stufe</th><th>Name</th><th>Frage</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Kostenartenrechnung (KAR)</td><td>Welche Kosten?</td></tr>
        <tr><td>2</td><td>Kostenstellenrechnung (KSR)</td><td>Wo entstanden?</td></tr>
        <tr><td>3</td><td>Kostenträgerrechnung (KTR)</td><td>Wofür / für welches Produkt?</td></tr>
      </tbody>
    </table>

    <h3>Entscheidungs- und Kontrollfunktion</h3>
    <p>Die Kostenrechnung erfüllt zwei wesentliche Funktionen: Als <strong>Entscheidungsinstrument</strong> liefert sie Daten für Kalkulation, Planung und Investitionsentscheidungen. Als <strong>Kontrollinstrument</strong> ermöglicht sie den Vergleich von Plan- und Ist-Kosten und deckt Abweichungen auf.</p>
  `
  },

  {
  id: 13,
  title: "Produktion: Grundlagen und Fertigungstypen",
  html: `
    <h2>Produktion: Grundlagen und Fertigungstypen</h2>
    <p>Die <strong>Produktion</strong> ist der Kernprozess vieler Unternehmen. In der betriebswirtschaftlichen Produktionslehre beschreibt sie die Transformation von <strong>Inputs</strong> (Produktionsfaktoren: Arbeit, Kapital, Material) über einen <strong>Throughput-Prozess</strong> in <strong>Outputs</strong> (Güter und Dienstleistungen). Die optimale Gestaltung dieses Prozesses ist zentrale Aufgabe des Produktionsmanagements.</p>

    <h3>Historische Entwicklung der Produktionskonzepte</h3>
    <ul>
      <li><strong>Adam Smith (18. Jh.):</strong> Entdeckung der Vorteile der <em>Arbeitsteilung</em> — Spezialisierung steigert die Produktivität erheblich.</li>
      <li><strong>Frederick Taylor (um 1900):</strong> <em>Wissenschaftliche Betriebsführung</em> (Taylorismus) — systematische Analyse und Optimierung von Arbeitsprozessen, strikte Trennung von Planung und Ausführung.</li>
      <li><strong>Henry Ford (1910er):</strong> Einführung des <em>Fließbands</em> (Fordismus) — Massenproduktion standardisierter Güter zu niedrigen Kosten durch Fließfertigung.</li>
      <li><strong>Just-in-time / Toyota-System (1970er):</strong> Bedarfsgerechte Produktion, minimaler Lagerbestand, erhöhter Planungsaufwand.</li>
      <li><strong>Total Quality Management (TQM):</strong> Qualität als unternehmensweites Ziel, Einbeziehung aller Mitarbeiterinnen und Mitarbeiter.</li>
    </ul>

    <h3>Supply Chain Management (SCM)</h3>
    <p><strong>Supply Chain Management</strong> bezeichnet die integrative Planung, Steuerung und Kontrolle aller Güter-, Informations- und Finanzflüsse entlang der gesamten Wertschöpfungskette — vom Rohstofflieferanten bis zum Endkunden. Ziel ist die Optimierung des gesamten Netzwerks, nicht nur einzelner Unternehmensbereiche.</p>

    <hr>

    <h3>Fertigungstypen</h3>
    <p>Die Wahl des Fertigungstyps hängt von der Produktvielfalt und der gewünschten Stückzahl ab:</p>
    <ul>
      <li><strong>Einzelfertigung:</strong> Herstellung von Unikaten auf spezifische Kundenbestellung (z.B. Sondermaschinen, Schiffe, maßgefertigte Möbel). Hohe Flexibilität, hohe Stückkosten.</li>
      <li><strong>Serienfertigung:</strong> Produktion einer begrenzten Stückzahl gleichartiger Produkte in mehreren Serien (z.B. Haushaltsgeräte, Fahrzeuge). Mittlere Stückkosten, Umrüstung zwischen Serien nötig.</li>
      <li><strong>Sortenfertigung:</strong> Ähnliche Produkte mit geringen Unterschieden werden auf denselben Anlagen gefertigt (z.B. verschiedene Käsesorten, Farbvarianten). Umrüstzeiten zwischen Sorten nötig.</li>
      <li><strong>Chargenfertigung:</strong> Produktion in abgegrenzten Mengeneinheiten (Chargen), typisch in Pharma- und Lebensmittelindustrie. Rückverfolgbarkeit jeder Charge ist wichtig.</li>
      <li><strong>Massenfertigung:</strong> Kontinuierliche Produktion großer Mengen eines standardisierten Produkts ohne Unterbrechung (z.B. Strom, Zement, Papier). Niedrigste Stückkosten, hohe Kapitalbindung.</li>
    </ul>

    <h3>Just-in-time im Detail</h3>
    <p>JIT (Just-in-time) bedeutet, dass Materialien und Komponenten genau dann geliefert werden, wenn sie im Produktionsprozess benötigt werden. Vorteile: minimale Lagerkosten, geringe Kapitalbindung. Nachteile: gestiegener Planungs- und Koordinationsaufwand, höhere Anfälligkeit für Lieferunterbrechungen.</p>
  `
  },

  {
  id: 14,
  title: "Produktionstheorie: Isoquanten und Isokostengeraden",
  html: `
    <h2>Produktionstheorie: Isoquanten und Isokostengeraden</h2>
    <p>Die <strong>Produktionstheorie</strong> untersucht, wie Unternehmen Produktionsfaktoren einsetzen, um Güter und Dienstleistungen zu erstellen. Im Mittelpunkt stehen die <strong>Produktionsfunktion</strong>, die Konzepte der <strong>Isoquanten</strong> und <strong>Isokostengeraden</strong> sowie die daraus ableitbare <strong>Minimalkostenkombination</strong>.</p>

    <h3>Die Produktionsfunktion</h3>
    <p>Eine <strong>Produktionsfunktion</strong> beschreibt den Zusammenhang zwischen dem Einsatz von Produktionsfaktoren (typisch: Kapital K und Arbeit L) und der resultierenden Ausbringungsmenge Q:</p>
    <p><strong>Q = f(K, L)</strong></p>
    <p>Technisch <strong>effizient</strong> ist ein Faktoreinsatz, wenn kein Faktor reduziert werden kann, ohne die Ausbringungsmenge zu verringern. Eine <strong>linear-homogene Produktionsfunktion</strong> weist konstante Skalenerträge auf: eine Verdopplung aller Inputs führt zur Verdopplung des Outputs.</p>

    <h3>Isoquanten</h3>
    <p>Eine <strong>Isoquante</strong> (von griech. <em>isos</em> = gleich, lat. <em>quantus</em> = wie groß) ist eine Kurve, die alle Kombinationen der Faktoren K und L zeigt, die <strong>dieselbe Ausbringungsmenge</strong> erzielen. Eigenschaften:</p>
    <ul>
      <li>Fallend — es gibt einen Trade-off zwischen K und L</li>
      <li>Konvex zum Ursprung — abnehmende Grenzrate der technischen Substitution</li>
      <li>Weiter vom Ursprung entfernte Isoquanten repräsentieren höhere Produktionsmengen</li>
      <li>Isoquanten schneiden sich nicht</li>
    </ul>

    <h3>Isokostengeraden</h3>
    <p>Eine <strong>Isokostengerade</strong> zeigt alle Faktorkombinationen (K, L), die bei gegebenen Faktorpreisen (r für Kapital, w für Arbeit) und gegebenem Budget B <strong>dieselben Gesamtkosten</strong> verursachen:</p>
    <p><strong>B = r · K + w · L</strong></p>
    <ul>
      <li>Schnittpunkt mit der y-Achse (Kapital): B ÷ r</li>
      <li>Schnittpunkt mit der x-Achse (Arbeit): B ÷ w</li>
      <li>Steigung: −w ÷ r (negatives Verhältnis der Faktorpreise)</li>
    </ul>

    <hr>

    <h3>Die Minimalkostenkombination</h3>
    <p>Die <strong>Minimalkostenkombination</strong> ist jene Faktorkombination, die eine bestimmte Ausbringungsmenge zu <strong>minimalen Kosten</strong> herstellt. Grafisch: der <strong>Tangentenpunkt</strong> zwischen der Isoquante und der Isokostengerade.</p>
    <p>An diesem Punkt gilt: Die Grenzrate der technischen Substitution entspricht dem Verhältnis der Faktorpreise. Das bedeutet: Eine zusätzlich ausgegebene Geldeinheit bringt bei beiden Faktoren denselben Produktionszuwachs.</p>

    <h3>Limitationale Produktionsfunktion</h3>
    <p>Bei einer <strong>limitationalen Produktionsfunktion</strong> müssen Produktionsfaktoren in einem festen Verhältnis eingesetzt werden — eine Substitution ist nicht möglich (Isoquanten haben L-Form). Beispiel: Eine Maschine benötigt immer genau eine Bedienungsperson.</p>

    <h3>Grenzproduktivität</h3>
    <p>Die <strong>Grenzproduktivität</strong> eines Faktors gibt an, um wie viel sich die Ausbringungsmenge verändert, wenn dieser Faktor um eine Einheit erhöht wird (ceteris paribus). Bei abnehmender Grenzproduktivität sinkt der Zuwachs mit steigendem Faktoreinsatz.</p>
  `
  },

  {
  id: 15,
  title: "Kostentheorie: Kosten und Deckungsbeitrag",
  html: `
    <h2>Kostentheorie: Kosten und Deckungsbeitrag</h2>
    <p>Die <strong>Kostentheorie</strong> befasst sich mit der Analyse und Klassifikation von Kosten in Abhängigkeit von der Produktionsmenge. Sie bildet die Grundlage für kurzfristige Produktionsentscheidungen und das <strong>Deckungsbeitragsmanagement</strong>.</p>

    <h3>Fixkosten und variable Kosten</h3>
    <p><strong>Fixkosten</strong> (auch: <strong>Bereitschaftskosten</strong>) sind Kosten, die unabhängig von der produzierten Menge anfallen. Sie entstehen durch die bloße Bereitschaft zur Leistungserbringung — auch wenn nichts produziert wird:</p>
    <ul>
      <li>Miete und Pacht für Betriebsgebäude</li>
      <li>Versicherungsprämien</li>
      <li>Gehälter fester Mitarbeiterinnen</li>
      <li>Abschreibungen auf Maschinen</li>
    </ul>

    <p><strong>Variable Kosten</strong> verändern sich mit der Produktionsmenge (proportional, progressiv oder degressiv):</p>
    <ul>
      <li>Rohstoffkosten</li>
      <li>Energiekosten für Maschinen</li>
      <li>Akkordlöhne</li>
      <li>Verpackungsmaterial</li>
    </ul>

    <p><strong>Gesamtkosten:</strong> GK = Fixkosten + variable Kosten</p>

    <h3>Grenzkosten und Durchschnittskosten</h3>
    <p><strong>Grenzkosten</strong> sind die Kosten, die durch die Produktion einer <em>zusätzlichen</em> Einheit entstehen: ΔGK ÷ ΔQ. Bei linearen variablen Kosten entsprechen die Grenzkosten den variablen Stückkosten.</p>
    <p><strong>Durchschnittskosten</strong> (Stückkosten) = GK ÷ Q. Sie sinken zunächst mit steigender Menge, da sich die Fixkosten auf mehr Einheiten verteilen.</p>

    <hr>

    <h3>Der Deckungsbeitrag</h3>
    <p>Der <strong>Deckungsbeitrag (DB)</strong> ist eine zentrale Steuergröße der kurzfristigen Entscheidungsrechnung:</p>
    <p><strong>DB = Erlös − variable Kosten</strong></p>

    <p>Er zeigt, wie viel eine Produkteinheit zur <strong>Deckung der Fixkosten</strong> und anschließend zum Gewinn beiträgt.</p>
    <ul>
      <li><strong>DB &gt; 0:</strong> Das Produkt deckt mehr als seine variablen Kosten → kurzfristig sinnvoll zu produzieren</li>
      <li><strong>DB = 0:</strong> Produkt deckt gerade seine variablen Kosten → indifferent</li>
      <li><strong>DB &lt; 0:</strong> Produkt deckt nicht einmal seine variablen Kosten → kurzfristig aufgeben</li>
    </ul>

    <h3>Gewinnschwelle (Break-even-Punkt)</h3>
    <p>Die <strong>Gewinnschwelle</strong> ist erreicht, wenn der Gesamtdeckungsbeitrag gerade die Fixkosten deckt:</p>
    <p><strong>Break-even-Menge = Fixkosten ÷ DB je Einheit</strong></p>
    <p>Oberhalb der Gewinnschwelle entsteht Gewinn; unterhalb Verlust. Die Deckungsbeitragsrechnung ist ein wichtiges Instrument für kurzfristige Preis- und Produktionsentscheidungen.</p>
  `
  },

  {
  id: 16,
  title: "Investition und Investitionsrechnung",
  html: `
    <h2>Investition und Investitionsrechnung</h2>
    <p>Eine <strong>Investition</strong> bezeichnet den Einsatz von finanziellen Mitteln zur Beschaffung von Vermögenswerten mit dem Ziel, in der Zukunft Einnahmen zu erzielen oder Kosten zu senken. Investitionsentscheidungen zählen zu den bedeutendsten unternehmerischen Entscheidungen, da sie meist langfristig und schwer reversibel sind.</p>

    <h3>Arten von Investitionen</h3>
    <ul>
      <li><strong>Sachinvestitionen:</strong> Maschinen, Gebäude, Fahrzeuge, Grundstücke</li>
      <li><strong>Finanzinvestitionen:</strong> Beteiligungen, Aktien, Anleihen</li>
      <li><strong>Immaterielle Investitionen:</strong> Patente, Lizenzen, Forschung &amp; Entwicklung, Software</li>
      <li><strong>Unternehmensakquisitionen:</strong> Kauf von ganzen Unternehmen oder Unternehmensanteilen</li>
    </ul>

    <h3>Investitionsplanungsprozess</h3>
    <ol>
      <li>Identifikation des Investitionsbedarfs</li>
      <li>Suche nach Investitionsalternativen</li>
      <li>Bewertung und Vergleich der Alternativen (Investitionsrechnung)</li>
      <li>Investitionsentscheidung</li>
      <li>Kontrolle (Soll-Ist-Vergleich)</li>
    </ol>

    <hr>

    <h3>Statische Investitionsrechenverfahren</h3>
    <p>Statische Verfahren berücksichtigen den <strong>Zeitwert des Geldes nicht</strong> und arbeiten mit Durchschnittswerten einer typischen Periode:</p>
    <ul>
      <li><strong>Kostenvergleichsrechnung:</strong> Die Alternative mit den geringsten Durchschnittskosten wird bevorzugt.</li>
      <li><strong>Gewinnvergleichsrechnung:</strong> Die Alternative mit dem höchsten durchschnittlichen Gewinn wird bevorzugt.</li>
      <li><strong>Rentabilitätsvergleichsrechnung:</strong> Gewinn ÷ eingesetztes Kapital — die Investition mit der höchsten Rentabilität wird bevorzugt.</li>
      <li><strong>Amortisationsrechnung (Payback):</strong> Ermittelt, nach wie vielen Jahren die Investition durch Rückflüsse gedeckt ist.</li>
    </ul>

    <h3>Dynamische Investitionsrechenverfahren</h3>
    <p>Dynamische Verfahren berücksichtigen den <strong>Zeitwert des Geldes</strong> — zukünftige Zahlungen werden auf den heutigen Zeitpunkt abgezinst (diskontiert):</p>
    <ul>
      <li><strong>Kapitalwertmethode (Net Present Value, NPV):</strong> Summe der auf den Anfangszeitpunkt abgezinsten Zahlungsströme minus Anfangsinvestition. Vorteilhaft wenn <strong>NPV &gt; 0</strong>.</li>
      <li><strong>Methode des internen Zinsfußes (IRR):</strong> Zinssatz, bei dem der Kapitalwert = 0. Vorteilhaft wenn <strong>IRR &gt; Kalkulationszinssatz</strong>.</li>
      <li><strong>Annuitätenmethode:</strong> Wandelt den Kapitalwert in gleichmäßige jährliche Zahlungen (Annuitäten) um — ermöglicht direkten Vergleich von Investitionen unterschiedlicher Laufzeit.</li>
    </ul>
  `
  },

  {
  id: 17,
  title: "Finanzierung",
  html: `
    <h2>Finanzierung</h2>
    <p>Die <strong>Finanzierung</strong> umfasst alle Maßnahmen zur Beschaffung, Bereitstellung und Rückzahlung von Kapital. Eine optimale Finanzierungsstruktur sichert die <strong>Liquidität</strong> des Unternehmens und ermöglicht Investitionen zu möglichst günstigen Konditionen.</p>

    <h3>Systematik der Finanzierungsquellen</h3>
    <table>
      <thead>
        <tr><th></th><th>Eigenfinanzierung</th><th>Fremdfinanzierung</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Innenfinanzierung</strong></td>
          <td>Selbstfinanzierung (Gewinnthesaurierung), Abschreibungsrückflüsse</td>
          <td>Rückstellungsfinanzierung</td>
        </tr>
        <tr>
          <td><strong>Außenfinanzierung</strong></td>
          <td>Beteiligungsfinanzierung (neue Aktien, neue Gesellschafter)</td>
          <td>Kreditfinanzierung (Bankkredit, Anleihen)</td>
        </tr>
      </tbody>
    </table>

    <h3>Wichtige Kreditarten</h3>
    <ul>
      <li><strong>Hypothekarkredit:</strong> Langfristiger, durch Grundpfand (Immobilien) besicherter Kredit.</li>
      <li><strong>Lombardkredit:</strong> Kurzfristiger Kredit, besichert durch bewegliche Sachwerte oder Wertpapiere.</li>
      <li><strong>Avalkredit:</strong> Keine direkte Auszahlung — die Bank übernimmt eine Bürgschaft oder Garantie (Haftungsübernahme).</li>
      <li><strong>Lieferantenkredit:</strong> Entsteht, wenn der Käufer eine Zahlungsfrist erhält und auf Skonto verzichtet. Effektiv oft sehr teuer. Beispiel: 2% Skonto bei 7 Tagen, sonst 30 Tage netto → effektiver Jahreszinssatz ca. 37,8%.</li>
    </ul>

    <hr>

    <h3>Der Leverage-Effekt</h3>
    <p>Der <strong>Leverage-Effekt</strong> (Hebelwirkung) beschreibt den Einfluss des Fremdkapitaleinsatzes auf die Eigenkapitalrentabilität:</p>
    <ul>
      <li><strong>Positiver Leverage-Effekt:</strong> Wenn die Gesamtkapitalrentabilität über dem FK-Zinssatz liegt, erhöht mehr Fremdkapital die EK-Rentabilität.</li>
      <li><strong>Negativer Leverage-Effekt:</strong> Wenn der FK-Zinssatz die Gesamtrentabilität übersteigt, sinkt die EK-Rentabilität mit zunehmendem FK-Einsatz — das Unternehmen verliert Geld.</li>
    </ul>

    <h3>Kapitalstrukturregeln</h3>
    <ul>
      <li><strong>Goldene Bilanzregel:</strong> Langfristiges Vermögen (Anlagevermögen) sollte durch langfristiges Kapital (Eigenkapital + langfristiges Fremdkapital) finanziert werden. Kurzfristige Mittel für kurzfristiges Vermögen.</li>
      <li><strong>Eigenkapitalquote:</strong> EK ÷ Gesamtkapital ≥ 30% gilt als Richtwert für eine solide Finanzierungsstruktur.</li>
      <li><strong>Liquiditätsgrundsatz:</strong> Zahlungsfähigkeit muss jederzeit sichergestellt sein. Ein Unternehmen kann profitabel sein und trotzdem Insolvenz anmelden, wenn die Liquidität fehlt.</li>
    </ul>

    <h3>Innenfinanzierung im Detail</h3>
    <p><strong>Selbstfinanzierung (Gewinnthesaurierung):</strong> Gewinne werden nicht ausgeschüttet, sondern einbehalten und reinvestiert. <strong>Abschreibungsrückflüsse:</strong> Da Abschreibungen nicht zahlungswirksam sind, verbleiben die entsprechenden Mittel im Unternehmen. <strong>Rückstellungen:</strong> Passivposten für ungewisse, aber wahrscheinliche Verbindlichkeiten (z.B. Pensionen, Garantierückstellungen) — solange die Zahlung aussteht, stehen die Mittel dem Unternehmen zur Verfügung.</p>
  `
  },
  ],
});
