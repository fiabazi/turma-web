# Turma — Wissensdatei für eine KI

<!-- Diese Zeile prüft `scripts/verify-release.cjs` gegen package.json.
     Steht hier eine ältere Fassung, bricht das Veröffentlichen ab. -->
**Gilt für Turma 1.8.9.**

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

### Anmelden

Mit E-Mail und Passwort, oder mit Google.

**Wichtig bei Google:** Das geht erst, *nachdem* man einmal ein Konto mit
dem Einladungscode angelegt hat. Wer es als Erstes mit Google probiert,
bekommt: „Für diese Adresse liegt keine offene Einladung vor." Das ist
kein Fehler, sondern die Reihenfolge.

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

Links eine Spalte, rechts der Inhalt. Die Spalte lässt sich mit dem
Schalter oben links ein- und ausklappen.

In der Spalte, von oben nach unten:

- **Projekte** — alle, die man sieht: eigene und die der eigenen Gruppen
- **Meine privaten Projekte** — nur die eigenen, die in keiner Gruppe sind
- **Kalender** — eigene Termine und die der Gruppen
- **Verzeichnis** — die gesammelten Werkzeuge und Tipps
- **Einladungen** — offene Einladungen in Gruppen
- **GRUPPEN** — jede Gruppe klappt auf und zeigt ihre Kanäle
- **CHATS** — die zuletzt offenen Unterhaltungen
- ganz unten die eigene Zeile mit Bild, Name, Melden und Einstellungen

**Suche:** `Strg + K` springt in das Suchfeld der Projektliste.

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

### Privat oder in einer Gruppe

Ein neues Projekt gehört zuerst nur einem selbst. Öffnet man es für eine
Gruppe, sehen und bearbeiten es **alle Mitglieder dieser Gruppe**.

Zwei Dinge, die man vorher wissen sollte:

- **Es gibt keinen Weg zurück in der Oberfläche.** Ein Projekt, das in
  einer Gruppe geöffnet ist, bekommt man dort nicht wieder heraus.
- Die **Leitung der Gruppe darf es löschen**, auch wenn es einem selbst
  gehört.

Wer das rückgängig machen will: Fidan fragen.

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

In den Einstellungen gibt es den Schalter **„Meinen Kalender für meine
Gruppen öffnen"**. Ist er an, sehen Leute, mit denen man eine Gruppe
teilt, auch die eigenen Termine. Er wirkt **rückwirkend**: Ausschalten
versteckt auch alles Frühere wieder.

---

## Verzeichnis

Eine gemeinsame Sammlung. Jeder darf eintragen, es kostet nichts, und es
gibt vier Arten: **Werkzeug**, **Skill**, **Plugin**, **Tipp**.

Ein Link gehört dazu, ist aber nicht Pflicht — ein Tipp braucht keinen.

Zwei Ansichten: nach **Monat** (man blättert wie in einem Kalender zurück)
und eine Rangliste der meistbenutzten. Die Rangliste zählt **Personen,
nicht Klicks** — zehnmal selbst draufklicken bringt nichts.

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
| Nachrichten in einem Kanal | alle Mitglieder der Gruppe |
| Direktchat | die zwei Beteiligten |
| Profil: Bild, Name, Kennung, Beschreibung, GitHub | alle in Turma |
| **E-Mail-Adresse** | niemand ausser einem selbst |
| Verzeichniseinträge | alle in Turma |
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
