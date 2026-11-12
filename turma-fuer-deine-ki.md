# Turma — Wissensdatei für eine KI

<!-- Diese Zeile prüft `scripts/verify-release.cjs` gegen package.json.
     Steht hier eine ältere Fassung, bricht das Veröffentlichen ab. -->
**Gilt für Turma 2.1.1.**

Wenn die Person eine neuere Fassung benutzt, kann hier etwas fehlen —
sag das dann dazu, statt zu raten. Welche Fassung läuft, steht in der
App unter Einstellungen → Version & Updates.

**An die KI, die das hier liest:** Jemand benutzt eine Windows-App namens
Turma und stellt dir Fragen dazu. Du kennst Turma nicht aus deinem
Training — alles, was du darüber weisst, steht in diesem Dokument.

So sollst du damit umgehen:

- **Antworte nur aus diesem Dokument.** Wenn etwas hier nicht steht, sag
  das offen: „Dazu steht in meiner Wissensdatei nichts." Erfinde keine
  Menüpunkte, keine Tastenkürzel und keine Funktionen. Eine erfundene
  Antwort kostet die Person mehr Zeit als ein ehrliches „weiss ich nicht",
  weil sie danach in der App nach etwas sucht, das es nicht gibt.
- **Am Ende steht ein Abschnitt „Bekannte Macken".** Sieh dort zuerst
  nach, wenn jemand etwas als kaputt beschreibt. Oft ist es bekannt, und
  dann ist die hilfreichste Antwort „das ist ein bekannter Fehler" statt
  einer Fehlersuche.
- **Manches kann nur Fidan.** Das ist der Betreiber. Wo das so ist, steht
  es dabei — dann ist die richtige Antwort, ihm zu schreiben, und nicht,
  die Person weiter suchen zu lassen.
- Antworte kurz und in der Sprache, in der gefragt wird.

---

## Was Turma ist

Ein gemeinsamer Arbeitsplatz für Schulprojekte. Eine Windows-App (kein
Browser), in der kleine Gruppen zusammen an Projekten arbeiten: Aufgaben,
Links, Notizen, Chat, ein Kalender und ein Verzeichnis mit Werkzeugen und
Tipps.

Turma ist **nur auf Einladung** zugänglich. Es gibt keine offene
Registrierung, und niemand von aussen kann hineinsehen.

Die Daten liegen auf einem Server (Supabase). Wer sich auf einem anderen
Gerät anmeldet, sieht dasselbe. Auf dem Gerät selbst bleibt nur, welches
Farbschema gewählt wurde.

---

## Hineinkommen

### Konto anlegen

Dafür braucht es **zwei** Dinge, und das überrascht die meisten:

1. Fidan muss die E-Mail-Adresse freigeben.
2. Man braucht einen **Einladungscode**. Der sieht aus wie
   `ABCD-EFGH-JKMN` — zwölf Zeichen in drei Blöcken, Grossbuchstaben und
   Ziffern.

   Verwechselbare Zeichen kommen darin **gar nicht** vor: kein `O`, keine
   `0`, kein `I`, kein `L`, keine `1`. Wer eines davon zu sehen meint,
   hat etwas anderes vor sich — ein rundes Zeichen ist ein `Q` oder `D`,
   ein senkrechter Strich ein `J` oder `T`. Das ist Absicht, weil Codes
   abgetippt werden.

Ein Code gilt **einmal** und läuft ab. Wer ihn schon benutzt hat, braucht
keinen neuen — ab dann meldet man sich normal an.

Auf dem Anmeldebildschirm steht oben die Wahl **„Neu mit Code"** oder
**„Ich habe ein Konto"**. Beim ersten Besuch auf einem Gerät ist „Neu
mit Code" gewählt: Das Feld für den Einladungscode und „Konto
erstellen" stehen sofort da. Wer auf dem Gerät schon einmal angemeldet
war, sieht zuerst „Ich habe ein Konto".

### Installieren

Den Installer gibt es auf der Download-Seite. Er ist nicht signiert,
darum warnt Windows beim Starten mit „Unbekannter Herausgeber" oder
„Der Computer wurde durch Windows geschützt". Das ist erwartet: auf
**„Weitere Informationen"** klicken, dann auf **„Trotzdem ausführen"**.
Administratorrechte braucht es nicht.

Wer jemanden einlädt, findet in den Einstellungen unter „Zugangscodes"
zu jedem Code einen fertigen Begleittext zum Kopieren: was Turma ist,
der Download-Link, der Code und die beiden Sätze zur Windows-Warnung.

### Anmelden

Mit E-Mail und Passwort, oder mit Google.

**Wichtig bei Google:** Das geht erst, *nachdem* man einmal ein Konto mit
dem Einladungscode angelegt hat. Der Knopf steht darum unter dem
Formular, mit genau diesem Hinweis. Wer es trotzdem als Erstes mit
Google probiert, bekommt eine Meldung, dass für die Adresse keine
offene Einladung vorliegt und zuerst der Code einzulösen ist, und die
Ansicht springt auf „Neu mit Code". Das ist kein Fehler, sondern die
Reihenfolge.

### Wenn es nicht geht

- „Code bereits benutzt", obwohl man ihn zum ersten Mal eintippt: Das
  kann passieren, wenn ein erster Versuch mittendrin scheiterte (zum
  Beispiel weil der Benutzername schon vergeben war). Die Freigabe der
  Adresse bleibt danach 14 Tage bestehen — man kann es also **ohne Code**
  noch einmal versuchen. Hilft das nicht: Fidan fragen.
- Alles andere beim Anmelden: Fidan fragen. Codes erzeugen und Adressen
  freigeben kann nur er.

---

## Wie die App aufgebaut ist

Links eine Spalte (die Leiste), rechts der Inhalt.

In 1.14.0 blendet der Schalter oben links die Spalte ganz aus und wieder
ein. Seit 2.0.0 verschwindet
sie auf normal breiten Fenstern nicht mehr, sondern **klappt zu einer
schmalen Spalte nur mit Symbolen ein**: Der Schalter sitzt oben in der
Leiste neben dem Namen „turma." (eingeklappt unter dem Zeichen) und
heisst „Leiste einklappen" bzw. „Leiste aufklappen". Turma merkt sich
den Zustand auf dem Gerät. Eingeklappt gilt:

- Jeder Eintrag ist nur noch sein Symbol; der Name erscheint, wenn man
  mit der Maus darauf bleibt, und Vorlesesoftware liest ihn weiterhin.
- Eine **Gruppe** ist ihr Bild (oder ihre Anfangsbuchstaben); ein Klick
  öffnet die Gruppenseite. Die **Kanäle** stehen nur in der
  aufgeklappten Leiste — wer in einen Kanal will, klappt sie auf.
- **Ungelesenes** bleibt sichtbar: als Zahl an der Ecke des Gruppenbilds
  (Summe aller Kanäle) und am Bild des Chatpartners.
- Die **Plus-Knöpfe** (neue Gruppe, jemanden anschreiben) bleiben, unter
  einem Trennstrich. Archivierte Gruppen stehen nur aufgeklappt.
- Unten stehen das eigene Bild, Melden und Einstellungen untereinander.

Auf sehr schmalen Fenstern (unter 760 Pixel) liegt die Leiste wie bisher
waagerecht über dem Inhalt und lässt sich mit dem Schalter oben links
ganz aus- und einblenden.

**Beim Öffnen landet man auf der Startseite.** Sie zeigt oben, woran man
zuletzt war — zuletzt geänderte Projekte und zuletzt geöffnete Kanäle
und Chats —, darunter die Bereiche mit je einem Satz, was sie sind.
Keine Zahlen und keine Vorschauen: Eine Fläche, die Inhalt zählt, zeigt
bei wenig Inhalt vor allem Leere an.

Die Startseite ersetzt die Spalte nicht, sie erklärt sie. Jeder Bereich
bleibt von überall mit einem Klick erreichbar; zurück führt **Start**
ganz oben in der Spalte.

Woran man zuletzt war, steht nur auf dem Gerät, an dem man es getan hat
— es wandert nicht mit dem Konto mit und verschwindet beim Abmelden.

**Die Startseite zeigt „Neu draussen".** Eine Tafel mit **höchstens
vier** Platten, oben links der Aufmacher gross, daneben zwei bis drei
Zeilen. Zuerst stehen dort **Schlagzeilen**: die meistbeachteten Tech-
und KI-Meldungen der letzten drei Tage — ein neues Modell, ein Skandal
bei einem Chiphersteller —, auch wenn keine der Quellen sie selbst
gemeldet hat. Woher: Der geplante Ablauf in GitHub fragt die
öffentliche Suche von Hacker News nach Geschichten mit vielen Punkten,
filtert auf Themen, fasst Mehrfacheinreichungen derselben Geschichte
zusammen, ordnet nach Punkten mit Alterung (offizielle Ankündigungen
von Laboren und Herstellern zählen doppelt) und holt Bild und
Beschreibung von der Zielseite. Die Schwellen stehen in
`config/news-quellen.json` unter `schlagzeilen`, die Regeln in
`src/shared/schlagzeilen.ts`. **Die App selbst ruft dabei nichts ab** —
weder Hacker News noch die Zielseiten; sie liest nur die eine Datei,
die der Ablauf ablegt. Die Platte einer Schlagzeile trägt Domain,
Datum, Titel und, wenn es einen gibt, einen kurzen Auszug; keine
Punkte. Bleiben Plätze frei (oder fällt die Abfrage aus), füllen die
Beiträge der 23 Quellen auf — Blogs, YouTube-Kanäle und Release-Seiten
der KI- und Programmierwelt; deren Platten tragen dazu einen deutschen
Satz, was diese Quelle überhaupt ist. Ein Klick öffnet den Beitrag im
Standardbrowser, denn Turma zeigt keine fremden Texte im Volltext.

Vier und nicht zwölf, weil Fidan es so bestellt hat: „Nicht acht, die
man erwähnen kann, sondern 3, 4 krasse die Woche." Damit ändert sich,
was `rang` in `config/news-quellen.json` bedeutet — es ist seither ein
**Takthebel und kein Themenhebel**. Die Auswahl nimmt höchstens einen
Beitrag je Quelle und sortiert nach Rang, dann nach Zeit; eine Quelle,
die täglich etwas bringt, besetzt damit dauerhaft einen der vier
Plätze, nicht weil sie wichtig ist, sondern weil sie fleissig ist.
Rang 1 meldet sich selten und dann mit etwas Grossem, Rang 2
wöchentlich, Rang 3 im Takt oder vom Rand.

Dazu gilt die Siebentagegrenze **je Beitrag** und nicht nur für die
Datei als Ganzes. Sonst hält ein eingefrorener Feed seinen Platz
ewig — in 1.10.0 standen deshalb zwei Karten vom September 2025 auf
der Startseite.

Solange Neues bereitsteht, ist die Tafel das Einzige auf der
Startseite — die Wege in die Bereiche stehen in der Spalte. Steht
nichts bereit, zeigt die Seite stattdessen die Bereiche mit je einem
Satz, was sie sind, damit die erste Seite der App nie leer ist.

Unter der Tafel stehen **Rubriken**: „Neue Tools" (Show HN und Launch
HN der letzten 60 Tage mit vielen Punkten, nur echte Werkzeuge) und
„Neue Modelle" (Veröffentlichungen von KI-Modellen der letzten 30 Tage,
nur von den Domains der Labore). Je Rubrik eine Reihe kleiner Karten mit
Bild oder Seitensymbol, Domain, Datum, Titel und einem Satz von der
Zielseite; was oben auf der Tafel steht, erscheint hier nicht noch
einmal, eine leere Rubrik entfällt, und ruht der Sammler länger als
sieben Tage, verschwinden alle Rubriken. Beschrieben sind sie in
`config/news-quellen.json` unter `rubriken`, die Regeln stehen in
`src/shared/rubriken.ts`; gefüllt werden sie vom selben Ablauf wie die
Schlagzeilen, die App ruft auch hier nichts selbst ab. Titel und
Auszüge bleiben englisch, wie sie sind.

Darunter steht **„Mehr davon"**: zwölf Karten mit Kanälen, bei
denen es laufend Neues gibt (YouTube, Blogs, Redaktionen, ein
TikTok-Konto), je mit Bild, einem deutschen Satz und, wo der Kanal auf
YouTube ist, dem neuesten Video mit Vorschau. Ein Klick öffnet die
Seite im Standardbrowser. Bilder und Videos holt derselbe geplante
Ablauf wie die Beiträge; die App selbst ruft weder YouTube noch TikTok
an. Die Liste pflegt Fidan von Hand.

Beim allerersten Besuch begrüsst die Startseite mit „Willkommen bei
Turma", danach mit „Willkommen zurück".

Die Beiträge kommen nicht von X — dort gibt es seit Februar 2026 keine
kostenlose Leseschnittstelle, und Scraping ist untersagt. Sie werden
zweimal täglich von einem geplanten Ablauf gesammelt und liegen als
eine Datei bereit; die App ruft keinen einzigen Verlag selbst an. Ist
der jüngste Beitrag älter als sieben Tage, verschwindet die Abteilung
ganz, statt alte Meldungen als neu auszugeben.

In der Spalte, von oben nach unten:

- **Start** — die Startseite

- **Projekte** — alle Projekte an einem Ort, mit zwei Reitern: **Privat**
  (die eigenen, die in keiner Gruppe sind) und **Gruppen** (nach Gruppe
  gegliedert). Wer in keiner Gruppe ist, sieht keine Reiter, nur seine
  Projekte. Einen eigenen Eintrag „Meine privaten Projekte" gibt es nach
  1.12.0 nicht mehr — das ist jetzt der Reiter „Privat".
- **Kalender** — eigene Termine und die der Gruppen
- **Lernen** — fünf Lernpfade zu guten fremden Seiten (ab 1.12)
- **Verzeichnis** — die gesammelten Werkzeuge und Tipps
- **Einladungen** — offene Einladungen in Gruppen
- **GRUPPEN** — jede Gruppe klappt mit dem Pfeil auf und zeigt darunter
  nur ihre Kanäle (mit der Zahl ungelesener Nachrichten; die Leitung
  sieht zusätzlich „+ Kanal"). Ein Klick auf den **Namen** der Gruppe
  öffnet die Gruppenseite mit ihren Projekten und dem Knopf
  „Gruppenkalender". Eine neue Gruppe legt das **+** rechts neben
  GRUPPEN an.
- **CHATS** — die zuletzt offenen Unterhaltungen; das **+** daneben
  öffnet „Jemanden anschreiben"

  Wer noch in keiner Gruppe ist und weder einen Chat noch eine
  Einladung hat, sieht statt dieser drei einen kleinen Abschnitt
  **MIT ANDEREN** mit drei Zeilen: Gruppe anlegen, Jemanden
  anschreiben, Einladungen. Sobald eines davon da ist, steht die
  Spalte wie oben beschrieben.
- ganz unten die eigene Zeile mit Bild, Name, Melden und Einstellungen

**Suche:** `Strg + K` springt in das Suchfeld der Projektliste. Auf der
Seite „Projekte" und auf einer Gruppenseite fokussiert es das Suchfeld
dort; überall sonst (auch im Gruppenchat) springt es nach „Projekte".

---

## Projekte

Ein Projekt hat Name, Beschreibung, ein Modul oder Thema (zum Beispiel
„M294") und einen Zustand: **aktiv**, **pausiert** oder **fertig**.

Darin gibt es drei Reiter:

- **Aufgaben** — kurze Einträge mit optional einem Namen, wer zuständig
  ist. Abhaken per Klick.
- **Links** — Adressen mit Namen. Turma erkennt bekannte Dienste und legt
  oben eine Schaltfläche an, die sie öffnet.
- **Notizen** — einfacher Text. **Wird schon gespeichert, sobald man das
  Feld verlässt** — man muss den Knopf „Notizen speichern" nicht drücken.
  Er ist trotzdem da, für alle, die lieber auf etwas klicken.

### Wo Projekte liegen

Es gibt zwei Orte:

- **Projekte** in der Spalte, mit den Reitern **Privat** und
  **Gruppen**. Im Reiter „Gruppen" steht über den Projekten jeder Gruppe
  ihr Name; ein Klick darauf führt zur Gruppenseite. Suche und
  Statusfilter wirken im gewählten Reiter. Welcher Reiter zuletzt offen
  war, merkt sich Turma auf dem Gerät.
- **Die Seite einer Gruppe** (Klick auf den Gruppennamen in der Spalte):
  nur die Projekte dieser Gruppe.

Im Projekt führt der Rücklink oben links dorthin, wo das Projekt liegt,
und heisst so: bei einem Gruppenprojekt wie die Gruppe, bei einem
privaten **„Private Projekte"**. Wer in Chats, Verzeichnis oder Kalender
oben links auf **„Start"** klickt, kommt zur Startseite.

### Privat oder in einer Gruppe

Beim Anlegen fragt der Dialog **„Für wen?"**: **„Nur für mich"** oder
eine der eigenen Gruppen. Auf der Seite einer Gruppe ist diese Gruppe
vorgewählt, sonst „Nur für mich". Wählt man eine Gruppe, steht darunter,
dass das Projekt aus der Gruppe nicht mehr herauskommt.

Ein privates Projekt lässt sich später im Projekt über **„In Gruppe
öffnen"** für eine Gruppe öffnen. Dann sehen und bearbeiten es **alle
Mitglieder dieser Gruppe**.

Zwei Dinge, die man vorher wissen sollte:

- **Es gibt keinen Weg zurück in der Oberfläche.** Ein Projekt, das in
  einer Gruppe geöffnet ist, bekommt man dort nicht wieder heraus.
- Die **Leitung der Gruppe darf es löschen**, auch wenn es einem selbst
  gehört.

Wer das rückgängig machen will: Fidan fragen.

Solange ein Projekt **privat** ist, ist es für eine Person gedacht: Bei
den Aufgaben gibt es kein Feld „Wer?", und der letzte Reiter heisst
**„Protokoll"** statt „Gespräch" — datierte Einträge für sich selbst.
Öffnet man das Projekt für eine Gruppe, heisst der Reiter wieder
„Gespräch", und die Gruppe liest die bisherigen Einträge mit.

### Das Projekt an eine KI geben

In der Kopfzeile jedes Projekts steht **„Für die KI"**, auch mit
**Strg+Umschalt+K**. Das legt den Projektstand als Text in die
Zwischenablage: Beschreibung, Aufgaben, Links, Notizen und das
Gespräch, dazu Datum und Turma-Fassung. Einfügen, fertig.

Im Reiter **Übersicht** steht dieselbe Karte etwas ausführlicher, und
dort gibt es zusätzlich **„Ordner wählen"**. Danach schreibt Turma bei
jedem Speichern eine Datei `turma-kontext.md` in diesen Ordner — gedacht
für den Ordner, in dem der Code liegt, damit ein Agent (Claude Code,
Copilot und ähnliche) den aktuellen Stand von selbst liest, ohne dass
jemand etwas kopiert.

Dazu drei Dinge, nach denen oft gefragt wird:

- **Der Ordner gilt nur auf diesem Gerät.** Bei einem Gruppenprojekt
  liegt der Code bei jedem woanders; die Angabe wandert nicht mit.
- **Turma überschreibt keine `AGENTS.md`.** Wer will, dass der Agent die
  Datei von selbst liest, schreibt eine Zeile in seine eigene
  `AGENTS.md`, die darauf verweist.
- **Den Ordner gibt es nur in der Windows-App**, nicht in der
  Web-Fassung. Das Kopieren geht in beiden.

---

## Gruppen

In der Spalte steht jede Gruppe mit ihrem Namen. Der Pfeil davor klappt
sie auf und zu; aufgeklappt stehen darunter nur ihre **Kanäle**, je mit
der Zahl ungelesener Nachrichten. Zugeklappt steht die Summe am
Gruppennamen.

Ein Klick auf den **Namen** öffnet die **Gruppenseite**: oben der Name,
darunter „Die Projekte dieser Gruppe", die Projekte selbst und die
Mitglieder und Einladungen. Im Kopf der Gruppenseite stehen die Knöpfe
**„Gruppenkalender"** und **„Neues Projekt"** (mit dieser Gruppe
vorgewählt). Einen eigenen Eintrag „Projekte" oder „Kalender" unter der
Gruppe in der Spalte gibt es nach 1.12.0 nicht mehr.

Es gibt drei Rollen:

- **Eigentümer** — hat die Gruppe angelegt
- **Leitung (Admin)** — darf einladen, umbenennen, Kanäle anlegen und
  löschen
- **Mitglied** — alles andere

Eigentümer und Leitung dürfen einladen. Zwei Wege: über die E-Mail-Adresse,
oder indem man eine Person aus Turma heraussucht. Die Eingeladene sieht
die Einladung unter **Einladungen** und entscheidet selbst.

**Was es nicht gibt:** Man kann niemanden aus einer Gruppe *entfernen*.
Jemanden, der falsch drin ist, bekommt man nur heraus, indem er selbst
austritt — oder indem Fidan nachhilft.

Wer austritt, **nimmt seine eigenen Projekte mit**. Die Gruppe sieht sie
danach nicht mehr.

**Jemanden aus einer Gruppe entfernen** darf die Leitung, über das
Symbol neben dem Namen in der Mitgliederliste. Der Eigentümer darf
jeden entfernen ausser sich selbst; eine Leitung nur gewöhnliche
Mitglieder, keine andere Leitung. Sich selbst entfernt man nicht —
dafür gibt es „Gruppe verlassen", und das macht etwas anderes.

Wer entfernt wird, sieht die Gruppe danach nicht mehr. **Seine
Projekte und Termine werden wieder privat**: Sie gehen nicht verloren,
aber die Gruppe sieht sie nicht mehr. Offene Einladungen an ihn
verfallen, sonst käme er über einen alten Link zurück. Was er
geschrieben hat, bleibt im Verlauf der Gruppe stehen — einzelne
Nachrichten kann die Leitung löschen.

---

## Kanäle und Chat

**Kanäle** gehören zu einer Gruppe und heissen wie bei Discord `#name`.
Jede Gruppe hat mindestens einen (`allgemein`), und der letzte lässt sich
nicht löschen. Anlegen und löschen darf nur die Leitung.

**Beim Löschen eines Kanals** kommt eine Rückfrage. Bestätigt man sie,
sind alle Nachrichten darin weg — auch die der anderen, auch die
Bilder, und niemand hat eine Kopie.

**Direktchats** gehen mit jedem, der in Turma ist — auch ohne gemeinsame
Gruppe. Über das Plus neben „CHATS" sucht man jemanden — das Feld
zeigt beim Öffnen **alle an, die ein Konto haben**, getippt wird
gefiltert. Man muss also nicht wissen, wie sich jemand genannt hat.
Die eigene Zeile ist nie dabei, und E-Mail-Adressen gibt die Suche
nicht heraus.

Im Chat: **Enter** schickt ab, **Umschalt + Enter** macht eine neue Zeile.
Eigene Nachrichten kann man löschen (Mülleimer erscheint beim Überfahren).

**Ungelesenes** steht als Zahl in der Spalte — am Kanal, am Direktchat,
und bei einer zugeklappten Gruppe als Summe ihrer Kanäle. Die eigenen
Nachrichten zählen nie mit. Der Marker verschwindet, sobald man den
Kanal offen hat; auch das, was während des Zusehens eintrifft, gilt als
gelesen.

Das ist eine **Auskunft, keine Benachrichtigung**: Turma meldet sich
nicht, wenn es zu ist. Wie viel man verpasst hat, sieht man beim
Öffnen — wann, bestimmt man selbst.

**Was man wissen muss:** Die Nachrichten sind auf dem Weg verschlüsselt,
aber **nicht Ende zu Ende**. Sie liegen lesbar in der Datenbank, und wer
Turma betreibt, kommt an sie heran. Gegenüber einem Schulkonto ist das ein
Unterschied — gegenüber Signal nicht. Für Vertrauliches ist Turma der
falsche Ort.

---

## Kalender

Zwei Arten von Terminen:

- **Eigene** — sieht nur man selbst
- **Gruppentermine** — sehen alle Mitglieder der Gruppe, immer

Dazu stehen **Abgaben** im Kalender: das Abgabedatum eines Projekts und
offene Aufgaben mit Datum, aus allen Projekten, die man sieht (im
Gruppenkalender nur die der Gruppe). Sie sind gestrichelt umrandet und
tragen das Wort „Abgabe" oder „Aufgabe fällig". Im Kalender lassen sie
sich nicht bearbeiten oder löschen; ein Klick führt zum Projekt, und
dort ändert man das Datum. Erledigte Aufgaben und fertige Projekte
erscheinen nicht.

In den Einstellungen gibt es den Schalter **„Meinen Kalender für meine
Gruppen öffnen"**. Ist er an, sehen Leute, mit denen man eine Gruppe
teilt, auch die eigenen Termine. Er wirkt **rückwirkend**: Ausschalten
versteckt auch alles Frühere wieder.

### Google Kalender lesen (ab 1.11.2, nur Desktop-App)

Unten im eigenen Kalender lässt sich der **eigene Google-Kalender
verbinden**, nur zum Lesen. Dazu braucht es die **„Privatadresse im
iCal-Format"** (in englischen Oberflächen „Secret address in iCal
format"): in Google Kalender oben rechts das Zahnrad → „Einstellungen" →
links unter „Einstellungen für meine Kalender" den Kalender wählen →
Abschnitt „Kalender integrieren" → die Adresse kopieren und in Turma
einfügen. Es gibt keine Google-Anmeldung mit Kalenderrecht dafür.
Bei Firmen- oder Schulkonten (Google Workspace) kann die Verwaltung diese
Adresse abgeschaltet haben; dann fehlt das Feld, und es geht nur mit
einem anderen Konto.

- Die Google-Termine stehen im **eigenen** Kalender zwischen den
  Turma-Terminen, mit dem Wort „Google" davor. Bearbeiten und Löschen
  geht nur in Google.
- Turma holt sie beim Öffnen des Kalenders und danach alle fünf Minuten,
  solange die App offen ist; dazu gibt es „Jetzt aktualisieren". Wie
  schnell Google eine Änderung über diese Adresse ausliefert, entscheidet
  Google; es kann dauern.
- **Die Adresse ist wie ein Passwort.** Turma legt sie verschlüsselt nur
  auf diesem Gerät ab (an das Windows-Konto gebunden) und zeigt sie nach
  dem Speichern nicht mehr an. Sie geht nie an den Turma-Server.
- Die Google-Termine erreichen den Server nicht: **Niemand sonst sieht
  sie**, auch nicht mit dem Kalenderschalter, und im Gruppenkalender
  erscheinen sie nie.
- Die Verbindung gehört dem Turma-Konto, das sie angelegt hat. Wer sich
  am selben Rechner mit einem anderen Konto anmeldet, sieht sie nicht.
- **Trennen** löscht Adresse und Google-Termine sofort vom Gerät.
- Steht dort, Google kenne die Adresse nicht mehr: Sie wurde in Google
  zurückgesetzt. Die neue Adresse kopieren und neu verbinden.
- Steht dort, **Google lehne den Abruf gerade ab**: Google drosselt oder
  sperrt dann für dieses Netz oder Konto (im Browser zeigt dieselbe
  Adresse „We're sorry …"). Turma wiederholt kurz selbst und fragt danach
  eine Viertelstunde nicht mehr im Takt nach. Später noch einmal
  versuchen, ein anderes Netz probieren, oder in Google die Privatadresse
  zurücksetzen und die neue einfügen. Die eingefügte Adresse bleibt dabei
  im Feld stehen.
- In der Web-Fassung gibt es das nicht.

---

## Lernen

Ab 1.12 gibt es in der Spalte den Bereich **„Lernen"**: fünf Lernpfade,
die Fidan als Hauptfokus vorgegeben hat, in dieser Reihenfolge:

1. **Software Fundamentals** — Java, Terminal, Git, HTTP, SQL (Java, weil die Klasse Java lernt)
2. **LLMs & RAG** — was Sprachmodelle sind, gut fragen, Embeddings, RAG
3. **Agents & Orchestration** — Werkzeuge, MCP, Muster, mehrere Agenten
4. **Ops & Evaluation** — Tests, CI, Docker, Evals, Beobachten, Sicherheit
5. **Signal Projects** — fünf Vorzeigeprojekte, die alles zusammenführen

**Turma unterrichtet nicht selbst.** Jeder Schritt führt auf eine fremde
Seite (W3Schools, MDN, roadmap.sh, Exercism, The Odin Project, offizielle
Dokumentation, Videos von 3Blue1Brown und Andrej Karpathy …) und sagt in
einem Satz, was man danach kann, dazu Art und ungefähre Dauer. „Öffnen"
öffnet die Seite im Browser. In jedem der ersten vier Pfade steht
mindestens eine Quelle auf Deutsch. In „LLMs & RAG" und „Agents &
Orchestration" ist der Beispielcode meist Python (oder TypeScript), weil
das dort der Standard ist; das steht im Pfad dabei.

- **Abhaken** mit dem Kästchen vor dem Schritt; lässt sich jederzeit
  zurücknehmen. Der **nächste offene Schritt** ist hervorgehoben und heisst
  „Dein nächster Schritt". Die Reihenfolge ist ein Vorschlag: Was man schon
  kann, hakt man einfach ab.
- **Signal Projects** sind Projektideen mit dem, was am Ende vorzeigbar
  ist, einer Aufgabenliste und Starthilfe-Links. **„Als Projekt anlegen"**
  macht daraus ein privates Turma-Projekt mit diesen Aufgaben.
- Auf der **Startseite** steht „Dein nächster Schritt" aus dem zuletzt
  benutzten Pfad — oder, wer noch nichts angefangen hat, eine Einladung.
- **Freiwillig.** Keine Streaks, keine Erinnerungen, keine
  Benachrichtigungen, nichts wird rot, wenn man länger nichts macht.
- **Der Stand liegt nur auf dem Gerät**, je Turma-Konto. Niemand sonst
  sieht ihn, auch nicht die Gruppe; auf einem zweiten Rechner ist er leer.
  Einen Klassenstand („drei sind bei Schritt 4") gibt es nicht.
- Die Auswahl ist vom November 2026. Fremde Seiten ändern sich; ist ein
  Link tot, über „Melden" Bescheid geben.

---

## Verzeichnis

Eine gemeinsame Sammlung. Jeder darf eintragen, es kostet nichts, und es
gibt vier Arten: **Werkzeug**, **Skill**, **Plugin**, **Tipp**.

Ein Link gehört dazu, ist aber nicht Pflicht — ein Tipp braucht keinen.

Zwei Ansichten: nach **Monat** (man blättert wie in einem Kalender zurück)
und eine Rangliste der meistbenutzten. Die Rangliste zählt **Personen,
nicht Klicks** — zehnmal selbst draufklicken bringt nichts.

---

## Code

Der Eintrag **„Code"** in der Spalte zeigt die eigenen **Repos** — in
1.14.0 als Reiter neben dem **Spickzettel**. In der Fassung, an der gerade
gearbeitet wird (2.0.0), gibt es den Spickzettel in der Oberfläche nicht
mehr und darum auch keine Reiter: „Code" ist dann nur noch die Repo-Liste.
Wer den alten Weg `/werkbank` hat, landet in „Code".

### Repos (nur in der Desktop-App)

Eine **Git-Ansicht für den Code auf dem eigenen Rechner**, ähnlich einem
Git-Programm wie Tower, aber mit zwei Eigenheiten:

1. **Jeder Knopf zeigt seinen Git-Befehl**, so, wie man ihn im Terminal
   tippen würde (etwa `git add src/Main.java`), in Festbreitenschrift, mit
   einem Kopieren-Knopf und einem deutschen Satz, was er tut. Wer klickt,
   lernt Git nebenbei.
2. **Sie hängt am Turma-Projekt.** Ein Repo ist ein Projekt, das mit einem
   Ordner verknüpft ist — derselbe Ordner wie unter „Für deine KI" im
   Projekt. Verknüpft wird über das Fenster von Windows, nie durch
   Eintippen eines Pfads.

Je verknüpftem Projekt eine **Karte**: Name, Branch, Anzahl geänderter
Dateien, letzter Commit (Betreff und wann), die oberste offene Aufgabe,
dazu „Öffnen", „Im Editor öffnen" (Visual Studio Code) und „Ordner
zeigen". Ist der Ordner kein Git-Repo oder Git nicht installiert, sagt die
Karte das und was zu tun ist.

**Öffnen** zeigt drei Teile:

- **Änderungen** — die geänderten, neuen und gelöschten Dateien, getrennt
  in „vorgemerkt" und „nicht vorgemerkt". Ein Klick zeigt den Unterschied
  Zeile für Zeile (+ und −, mit Zeilennummern). Lange Unterschiede sind
  nach 2000 Zeilen gekürzt, Binärdateien als solche benannt. Vormerken und
  zurücknehmen einzeln oder alle; **Committen** mit Betreff (Pflicht) und
  Text (optional). Im Commit-Fenster lassen sich offene Aufgaben des
  Projekts ankreuzen — nach dem Commit sind sie abgehakt. **Änderungen
  verwerfen** fragt nach, nennt die Datei und sagt, dass es sich nicht
  zurückholen lässt.
- **Verlauf** — die letzten 50 Commits mit Betreff, Autor und Zeit; ein
  Klick zeigt die geänderten Dateien und deren Unterschied.
- **Branches** — der aktuelle Branch, alle lokalen; neuen Branch anlegen
  (und gleich hinein) oder wechseln. Mit offenen Änderungen geht Wechseln
  nicht; dann steht da, warum.

Hat das Repo eigene **Hooks**, Filter oder Signieren eingerichtet, fragt
Turma vor dem ersten Vormerken, Committen oder Branchwechsel in einem
Fenster von Windows, ob diese Programme laufen dürfen, und nennt sie.
Ändert sich daran etwas, fragt es wieder. Dateien hinter einer
Verknüpfung (Junction) zeigt Turma nur an und fasst sie nicht an. Turma
öffnet nur Repos mit **gewöhnlichen Einstellungen** — so, wie `git init`,
`git clone`, VS Code, Husky und Git LFS sie anlegen. Hat ein Repo eine
besondere Einstellung (etwa ein partieller Klon, ein Worktree, ein
Submodul, eigene Filter oder Einstellungen, die auf einen anderen Rechner
zeigen), sagt die Karte, welche, und lässt es in Ruhe; im Terminal geht
es weiter. Turma braucht **Git ab 2.44**.

**Kennzeichen „von KI":** Was die KI über die Brücke anlegt, ist
gekennzeichnet gespeichert: `[von KI] ` im Aufgabentitel, `KI│ ` vor jeder
Zeile, die sie an die Notizen hängt. In den Einstellungen lässt sich die
Anzeige des Kennzeichens je Gerät ausschalten („Kennzeichen ‚von KI'
anzeigen"); gespeichert und für die anderen in der Gruppe sichtbar bleibt
es. Ausgeschaltet stehen die Notizen erst in einer Leseansicht; zum
Bearbeiten erscheint das Kennzeichen wieder.

**GitHub (ab 2.0.0):** „Mit GitHub verbinden" (Device Flow, unter
„Code" und in den Einstellungen) zeigt einen Code zum Eintippen auf
github.com/login/device. Danach: „Repositories" (eigene und zugängliche,
mit Suche) und „Klonen" in den Turma-Ordner; in der Repo-Ansicht „Holen",
„Pullen" (nur wenn es ohne Zusammenführen geht) und „Pushen" (nie mit
Zwang; ein neuer Branch wird mit Upstream angelegt), dazu „x voraus,
y zurück". Turma bittet GitHub um den Zugriff `repo` (der kleinste für
private Repos; er erlaubt aber Lesen und Schreiben in allen eigenen Repos)
und sagt das vor dem Verbinden. Der Zugang liegt verschlüsselt nur auf
dem Gerät; „Trennen" löscht ihn dort. Nur Repos auf github.com über https.

**Nicht dabei, mit Absicht:** Stash, Rebase, Zusammenführen, andere
Remotes als `origin` auf github.com.

Turma startet dafür `git` als eigenes Programm — das erste Mal, dass Turma
überhaupt ein Programm startet. Wie das abgesichert ist (feste
Befehlsliste, keine Shell, nur gewählte Ordner, keine Programme aus dem
Repo beim Ansehen), steht in `docs/git-sicherheit.md`.

### Turma-Ordner (nur in der Desktop-App, ab 2.0.0)

Noch in keiner veröffentlichten Fassung. In den Einstellungen (und beim
ersten Öffnen von „Code" als Angebot) wählt man einmal einen
**Turma-Ordner**; vorgeschlagen wird „Turma" im eigenen Benutzerordner,
angelegt erst nach Bestätigung. Jeder Ordner, den man darin anlegt
(im Explorer oder von der KI), erscheint unter „Code" als Karte — beim
Öffnen von „Code" und wenn man zu Turma zurückkommt.

- Für einen Ordner ohne Turma-Projekt steht auf der Karte **„Als Projekt
  anlegen"**: Das legt ein privates Projekt mit dem Namen des Ordners an.
  Ungefragt legt Turma keine Projekte an.
- Ein ganzes Laufwerk, der ganze Benutzerordner, Systemordner und Ordner
  auf einem anderen Rechner gehen nicht als Turma-Ordner. Verknüpfungen
  im Turma-Ordner erscheinen nicht als Karte.
- **Ordner ohne Git** (etwa ein Obsidian-Tresor) gehen auch: Die Karte
  sagt „ohne Git", die Ansicht hat keinen Verlauf und keine Branches, aber
  das KI-Fenster und die Vorschau. Die Vorschau zeigt dort die zuletzt
  geänderten Dateien. Was die KI dort ändert, lässt sich nicht über Git
  zurücknehmen; die Rückfrage vor dem Start sagt das.
- In der Markdown-Vorschau sind **Wiki-Verweise** `[[Notiz]]`,
  `[[Notiz|Text]]` und `[[Ordner/Notiz#Abschnitt]]` anklickbar und öffnen
  die Notiz aus demselben Ordner; eingebettete Bilder `![[bild.png]]`
  erscheinen. Bearbeiten kann man in Turma nicht.
- In einem Ordner ohne Git steht in `turma-kontext.md` das Gespräch der
  Gruppe nicht (solche Ordner werden oft mit Diensten synchronisiert) —
  auch nicht, wenn man den Ordner unter „Übersicht" frei gewählt hat.
- Als Turma-Ordner gehen auch die Anwendungsdaten (`AppData`) und der
  Temp-Ordner nicht.
- Bisher einzeln verknüpfte Repos bleiben, wie sie sind.

### KI im Repo (nur in der Desktop-App, ab 2.0.0)

Noch in keiner veröffentlichten Fassung. Unter der Git-Ansicht eines
Repos (auf breiten Fenstern daneben) steht ein Bereich **„KI"**: ein
eingebautes Terminal, in dem das **eigene** KI-Programm läuft — **Claude
Code**, **Codex** oder **Gemini CLI** —, im Ordner dieses Repos.

- **Man braucht das Programm selbst**, installiert und dort angemeldet,
  mit dem eigenen Abo. Turma hat keinen eigenen KI-Zugang, keinen
  API-Schlüssel, und es sieht die Anmeldung nicht. Turma erkennt, welches
  der drei installiert ist; ist keines da, steht dort ein Satz mit Links
  zum Installieren. Nach dem Installieren Turma **neu starten**, sonst
  findet es das Programm nicht.
- **Wählen, Starten, Beenden.** Die Wahl merkt sich Turma auf dem Gerät.
  Vor dem ersten Start in einem Repo fragt ein Fenster von Windows, ob das
  Programm Zugriff auf den Ordner bekommen soll, sagt, an welchen
  Anbieter es Inhalte schickt, und dass ein fremdes Repo Einstellungen für
  das Programm mitbringen kann, die Befehle ausführen. Die Zustimmung gilt,
  **bis man Turma beendet**; danach fragt es wieder, ebenso für jedes
  weitere Programm oder Repo. Gestartet wird nur, solange das
  Turma-Fenster vorn ist.
- Was die KI im Ordner ändert, erscheint von selbst unter **„Änderungen"**
  daneben; committen tut man wie sonst.
- **„An KI geben"** steht neben jeder offenen Aufgabe des Projekts und
  schreibt ihren Titel in die Eingabe der KI. Abgeschickt wird erst mit
  Enter — man sieht vorher, was drinsteht.
- Vor jedem Start legt Turma `turma-kontext.md` frisch in den Ordner;
  „Lies turma-kontext.md" gibt der KI Beschreibung, Aufgaben und Notizen
  des Projekts. Beim Start trägt Turma die Datei auch in die lokale
  Ausschlussliste von Git ein (`.git/info/exclude`), damit sie mit dem
  Gespräch der Gruppe nicht versehentlich committet wird; darum steht sie
  danach nicht mehr unter „Änderungen". Beschreibung, Notizen und Beiträge
  stehen darin als Zitat, damit niemand mit einem Beitrag einen Abschnitt
  „von jemand anderem" vortäuschen kann.
- Links im Terminal öffnen mit **Strg+Klick**, nur `https`.
- **Vorschau.** Neben „Änderungen" steht der Reiter **„Vorschau"**: die
  Dateien, die seit dem Start der KI neu sind oder sich geändert haben (ohne
  laufende KI: alle geänderten), neue zuerst. Ein Klick zeigt die Datei in
  Turma — HTML als Seite, Bilder als Bild, Markdown gerendert, Text und Code
  mit dem Unterschied; alles andere mit Name, Grösse, „Im Editor öffnen"
  und „Ordner zeigen".
- **Entwürfe und Mockups:** Die KI kann im Terminal nichts einblenden.
  `turma-kontext.md` sagt ihr darum, Entwürfe als eigenständige
  HTML-Datei in den Ordner `vorschau/` des Repos zu legen. Erscheint dort
  eine neue Datei, bietet Turma sie oben mit „Ansehen" an, ohne von selbst
  umzuspringen.
- **Lokaler Server:** Gibt die KI eine Adresse auf dem eigenen Rechner aus
  (`http://localhost:…`, `http://127.0.0.1:…`), steht unter dem Terminal
  „In Vorschau öffnen"; dort gibt es „Seite neu laden" und „Im Browser
  öffnen".
- Die Vorschau ist von Turma **abgetrennt**: Sie selbst lädt nichts aus
  dem Internet (Bilder oder Schriften von fremden Seiten fehlen darum;
  Turma sagt in einem Satz, dass es etwas gesperrt hat), sieht weder die
  Anmeldung noch den Speicher von Turma, darf keine Kamera, kein Mikrofon,
  keine Downloads, keine neuen Fenster und keine Meldefenster (`alert`).
  Links nach aussen öffnen nichts. Ein lokaler Server, den man in der
  Vorschau öffnet, kann selbst sehr wohl ins Internet. Seiten mit
  Netzinhalt öffnet man im eigenen Browser.
- Eine HTML-Seite aus dem Ordner läuft **ohne Skripte**. Hat sie welche,
  steht darüber ein Hinweis mit „Skripte für diese Seite erlauben"; das
  gilt nur für diese eine Datei und nur, bis man eine andere Datei zeigt
  oder die Vorschau schliesst. Grund: Mit Skripten kann eine Seite Inhalte
  ihres Ordners über Namensanfragen nach aussen verraten.
- Eine HTML-Seite aus dem Ordner darf nur Dateien aus ihrem eigenen Ordner
  nachladen (etwa `vorschau/stil.css`) und keinen Server anfragen.
  Versteckte Dateien (Name beginnt mit `.`, etwa `.env`) und
  Schlüsseldateien (`.pem`, `.key`, `.pfx`, `.p12`, `.ppk`, `.kdbx`,
  `*.env`, `id_…`, `credentials…`, `secrets…`) zeigt die Vorschau nie, nur
  ihren Namen und ihre Grösse.
- **Brücke zu Turma** (nur bei Claude Code): Ist der Schalter „Brücke zu
  Turma" an, fragt das Fenster von Windows vor dem Start mit einem eigenen
  Haken (voreingestellt aus), ob Claude Code die Aufgaben und Notizen
  **dieses einen Projekts** lesen, Aufgaben abhaken und anlegen und
  Notizen anhängen darf. Lehnt man den Haken ab, startet Claude Code
  trotzdem, nur ohne Brücke. Was Claude Code liest, geht an Anthropic; bei
  einem Gruppenprojekt sagt die Rückfrage, dass dabei auch Aufgaben und
  Notizen anderer hinausgehen. Chats, Gespräche und Personen erreicht die
  KI nie, löschen kann sie nichts. Aufgaben, die die KI anlegt, tragen in
  der Liste „von KI"; ihre Notizen stehen unter einer Zeile
  „--- von KI (Claude Code), … ---". Im KI-Bereich steht, was die KI in
  Turma getan hat. Die Brücke endet mit der Sitzung.
- **„Frühere Sitzungen"** (nur bei Claude Code): Ist das Terminal aus,
  stehen darunter die bisherigen Sitzungen von Claude Code in genau diesem
  Ordner, neueste zuerst, je mit Datum und dem Anfang der ersten eigenen
  Nachricht. **„Fortsetzen"** startet Claude Code mit dieser Sitzung
  (`claude --resume …`). Turma liest dafür die Sitzungsdateien, die Claude
  Code selbst auf dem Rechner ablegt, zeigt aber nie den ganzen Verlauf und
  speichert oder schickt nichts davon. Ändert Claude Code sein Dateiformat,
  fehlt die Liste einfach. Für Codex und Gemini CLI gibt es die Liste nicht.
- **Sitzungsliste** (ab 2.1.0, nur Desktop-App, nur Claude Code): Oben in
  „Code" stehen alle Sitzungen von Claude Code auf dem Rechner, auch die
  aus der Claude-App: neueste zuerst, nach Ordner gruppiert, mit Titel,
  Datum und Suche. Ein Klick setzt die Sitzung in ihrem Ordner fort; vorher
  fragt Turma je Ordner nach und nennt dabei Titel und Datum. So eine
  Sitzung läuft ohne Brücke und ohne Git-Ansicht. Ab 2.1.1 füllt sie die
  ganze Seite: Die Leiste links klappt ein, daneben steht die Liste als
  schmale Spalte, das KI-Fenster nimmt den Rest. Sitzungen, deren Ordner
  fehlt oder nicht sicher feststeht, sind sichtbar, aber nicht fortsetzbar.
  Turma zeigt nur Titel, Datum und Ordner, nie den Verlauf, und speichert
  oder schickt nichts davon.
- Wer das Repo verlässt, die Seite neu lädt oder Turma schliesst, beendet
  das Programm mit.

Wichtig für Fragen dazu: Die KI im Terminal ist das Programm des
Anbieters, nicht Turma. Fehler beim Anmelden, Grenzen des Abos oder was
die KI tut, gehören zum jeweiligen Programm. Sie kann mit den Rechten der
Person Dateien ändern und Befehle ausführen, so weit man es im Programm
erlaubt. Ist ein Projekt in einer Gruppe, stehen in `turma-kontext.md`
auch Texte anderer. Wie das abgesichert ist, steht in
`docs/ki-terminal-sicherheit.md`.

### Spickzettel (bis 1.14.0)

In 1.13.0 und 1.14.0 gab es unter „Code" einen **Spickzettel** zum
Sammeln von Snippets und Fehlern, auch für eine Gruppe freigebbar. Ab
2.0.0 ist er aus der Oberfläche genommen, weil ihn von Hand
niemand gefüllt hat. Schon angelegte Einträge bleiben auf dem Server, sind
in der App aber nicht mehr zu sehen. Wer danach fragt: Fidan fragen.

---

## Melden, wenn etwas kaputt ist

In der eigenen Zeile unten links gibt es ein Sprechblasen-Symbol:
**Melden**. Damit schreibt man Fidan direkt aus der App, mit Titel, Text
und optional einem Bildschirmfoto.

Das ist der richtige Weg für alles, was nach einem Fehler aussieht. Die
Meldung landet bei ihm mit Versionsnummer und der Stelle, an der man war.

---

## Einstellungen

### Turma deiner KI erklären

Ein Knopf **„Kopieren"**, der genau dieses Dokument in die
Zwischenablage legt. Wer seiner KI Fragen zu Turma stellen will, fügt
es dort ein — danach kennt sie die App.

(Wenn du das hier liest, hat die Person das vermutlich schon getan.)

### Aussehen

**Acht Farbschemata.** Sechs gewöhnliche (Nacht, Zwielicht, Firn, Wald,
Glut, Papier) und darunter abgesetzt zwei **eigene Entwürfe**: *Aderlass*
(schwarz-rot) und *Zinnober* (weiss-rot). Die beiden bringen nicht nur
Farben mit, sondern auch eine eigene Form — aufgerissene Kanten und eine
andere Schrift.

**Hell oder dunkel** lässt sich nicht immer einstellen. Das Feld ist
gesperrt, wenn die Helligkeit vom Schema kommt: bei den zwei eigenen
Entwürfen immer, und bei „Die ganze App" (siehe unten) auch bei den
anderen. Das ist kein Fehler — daneben steht jeweils der Grund.

**Wie weit die Farbe reicht:** „Nur die Leiste" färbt links, der Inhalt
bleibt neutral. „Die ganze App" zieht die Farbe durch. Voreingestellt ist
„Die ganze App".

**Der Stil (ab 2.0.0):** Die Oberfläche ist weicher und
luftiger geworden — stärker gerundete Karten mit feinem Rand und flachem
Schatten, die leicht durchscheinen; die Leiste als schwebende Tafel mit
Abstand zum Fensterrand; runde Knöpfe, Suchfelder und Reiter (die Reiter
im Projekt sind jetzt Pillen statt unterstrichener Wörter); grössere
Seitentitel. **Inhalte, Reihenfolge, Texte und die acht Farbschemata
sind dieselben** — wer etwas „nicht mehr findet", sucht es am alten
Platz. Die beiden eigenen Entwürfe (Aderlass, Zinnober) behalten ihre
gerissenen Kanten und eine Leiste bis an den Fensterrand.

**Stil (ab 2.0.0):** Unter „Erscheinungsbild" steht die
Auswahl „Stil" mit drei Stellungen, je Gerät und unabhängig vom Design:

- **„Glas"** (voreingestellt): Der Grund ist mittelhell (im dunklen
  Design dunkler als bisher) und hat grosse weiche Zonen; Karten und
  Leiste sind weisses, mattiertes Glas darüber, deutlich heller als der
  Grund. Oben liegt ein schmaler Glasstreifen, unter dem der Inhalt beim
  Rollen unscharf durchläuft. Farbige und leise Schrift ist in diesem
  Stil etwas dunkler (helles Design) bzw. heller (dunkles Design) als
  in den anderen, damit sie auf dem Grund lesbar bleibt.
- **„Glas, ruhig"**: dieselbe Form ohne Unschärfe, fast deckend -- die
  richtige Wahl, wenn Turma auf einem schwachen Rechner beim Rollen
  ruckelt.
- **„Klassisch"**: das Aussehen bis 1.14 (deckende Karten, kleinere
  Ecken und Titel, Reiter als unterstrichene Wörter). Die einklappbare
  Leiste gibt es auch dort.

Wer das neue Aussehen nicht mag oder etwas „wie früher" will: „Stil" auf
„Klassisch". Bei „Nur die Leiste" bleibt die Leiste in jedem Stil
deckend, und der Dialog ist fast deckend: Sonst wäre die Schrift zu
schwach. Wer in Windows Transparenzeffekte abgeschaltet oder hohen
Kontrast eingestellt hat, bekommt statt „Glas" immer „Glas, ruhig".

### Benutzername

Beim Anlegen vergibt Turma einen Namen wie `u3984593db7ab`. Den sollte man
ändern — **über ihn findet man sich gegenseitig**, die Suche nach Personen
geht über diesen Namen.

Erlaubt sind Kleinbuchstaben, Ziffern, Punkt, Strich und Unterstrich, 3
bis 30 Zeichen.

Die Regeln:

- Die **ersten zwei Änderungen sind frei.**
- Danach **eine alle 30 Tage.** Steht man in der Sperre, zeigt die App das
  Datum, ab wann es wieder geht.
- Der **alte Name bleibt 90 Tage reserviert**. Niemand anders kann ihn in
  dieser Zeit nehmen — man selbst darf ihn jederzeit zurückholen.

Der Grund für die Sperre ist nicht Bürokratie: Würde ein Name sofort frei,
könnte sich unmittelbar danach jemand *anderes* so nennen, und die Gruppe
schriebe mit der falschen Person weiter.

### Profilbild

Wird aus der Mitte quadratisch zugeschnitten und auf 256 Pixel verkleinert.
Sichtbar für alle, die in Turma angemeldet sind — nicht im offenen Netz.

### Beschreibung und GitHub

In den Einstellungen kann man ein paar Zeilen über sich schreiben
(höchstens 280 Zeichen) und seinen GitHub-Benutzernamen hinterlegen.
Gespeichert wird nur der Name, nicht eine ganze Adresse — die baut Turma
selbst, damit ein Klick nirgends anders hinführen kann als zu github.com.

### Das Profil anderer sehen

Bild, Name, Kennung, Beschreibung, GitHub und das Beitrittsdatum stehen auf
einer Karte, die man von überall erreicht: ein Klick auf das Bild oder den
Namen über einer Nachricht, auf ein Mitglied in der Gruppenliste, auf den
Urheber eines Verzeichniseintrags oder eines Projektbeitrags. Das eigene
Profil öffnet man über das Bild unten links.

Eine E-Mail-Adresse steht dort nicht und kann dort auch nicht stehen.

---

## Wer sieht was

Die wichtigste Tabelle in diesem Dokument.

| Was | Wer es sieht |
|---|---|
| Private Projekte | nur man selbst |
| Projekt in einer Gruppe | alle Mitglieder dieser Gruppe |
| Eigene Termine | nur man selbst — ausser der Kalenderschalter ist an |
| Gruppentermine | alle Mitglieder der Gruppe, immer |
| Verbundener Google-Kalender | nur man selbst, nur auf dem eigenen Gerät |
| Stand in den Lernpfaden | nur man selbst, nur auf dem eigenen Gerät |
| Repos unter „Code": Ordner, Dateien, Commits | nur man selbst, nur auf dem eigenen Gerät — Turma schickt davon nichts weg |
| Was die Vorschau zeigt | nur man selbst, nur auf dem eigenen Gerät — Turma schickt davon nichts weg, und die Vorschau selbst lädt nichts aus dem Internet (ein lokaler Server, den man darin öffnet, schon) |
| Frühere Sitzungen von Claude Code (im KI-Bereich) | nur man selbst, nur auf dem eigenen Gerät — Turma liest den Anfang der ersten Nachricht aus den Dateien von Claude Code und legt nichts davon ab |
| Was im KI-Terminal läuft | das KI-Programm schickt, was es liest, an seinen Anbieter (Anthropic, OpenAI oder Google); Turma selbst schickt nichts und speichert die Ausgabe nicht |
| Nachrichten in einem Kanal | alle Mitglieder der Gruppe |
| Direktchat | die zwei Beteiligten |
| Profil: Bild, Name, Kennung, Beschreibung, GitHub | alle in Turma |
| **E-Mail-Adresse** | niemand ausser einem selbst |
| Verzeichniseinträge | alle in Turma |
| Spickzettel-Einträge (bis 1.14.0 unter „Code") | nur man selbst — ausser für eine Gruppe freigegeben: dann deren Mitglieder, lesend; ab 2.0.0 in der App nicht mehr zu sehen |
| Meldungen (Tickets) | nur man selbst und Fidan |

Niemand ohne Konto sieht irgendetwas davon.

---

## Updates

Turma sucht selbst nach neuen Fassungen und lädt sie im Hintergrund.
**Eingebaut wird aber erst auf Klick.** Ist eine Fassung bereit,
erscheint oben eine Leiste mit „Jetzt neu starten" — vorher passiert
nichts, auch nicht beim Schliessen der App.

Das war bis 1.8.1 anders: Da wurde beim Beenden still eingebaut. Seit
1.8.2 nicht mehr, und zwar mit Absicht — solange sich ein Update von
selbst einbaut, nützt jede Prüfung davor nichts.

Unter **Einstellungen → Version & Updates** steht die laufende Fassung,
und man kann von Hand nachsehen lassen.

---

## Bekannte Macken

**Lies diesen Abschnitt zuerst, wenn jemand etwas als kaputt beschreibt.**
Das hier ist bekannt und muss nicht gesucht werden:

- **Nach Netzausfall kommen keine neuen Nachrichten mehr an.** Wenn die
  Verbindung kurz weg war, merkt der Chat das nicht und bleibt still —
  auch wenn die Verbindung wieder da ist. **Abhilfe:** die Ansicht
  wechseln oder die App neu starten.
- **Schneller Wechsel zwischen Kanälen** kann für einen Moment den
  Verlauf des vorigen zeigen. Kurz warten oder nochmal klicken.
- **Zwei schnelle Klicks hintereinander** (zum Beispiel zwei Aufgaben
  direkt nacheinander abhaken) können dazu führen, dass der zweite
  verlorengeht und „Jemand anderes hat dieses Projekt geändert" erscheint,
  obwohl niemand sonst daran war. Kurz Pause zwischen den Klicks.
- **Ein Knopf, der nichts tut**, ohne Fehlermeldung: Meist fehlt dafür die
  Berechtigung (zum Beispiel einen Gruppentermin löschen, den jemand
  anderes angelegt hat). Die App zeigt den Knopf trotzdem.
- **Gruppe verlassen** lässt einen auf „Gruppe nicht gefunden" stehen. Das
  ist nur die Anzeige — links auf etwas anderes klicken.

Wenn eine Frage nicht in diese Liste passt und auch sonst nicht in dieses
Dokument: über **Melden** an Fidan schreiben.

---

## Was dieses Dokument nicht weiss

- Den aktuellen Stand der Daten — wer in welcher Gruppe ist, welche
  Projekte es gibt, was jemand geschrieben hat. Das steht nur in der App.
- Fidans Entscheidungen: wer eingeladen wird, was als Nächstes gebaut wird.
- Alles, was nach dem Stand dieses Dokuments dazugekommen ist. Wenn
  jemand etwas beschreibt, das hier nicht steht, ist es entweder neu oder
  ein Missverständnis — beides klärt eine Meldung an Fidan schneller als
  Raten.
