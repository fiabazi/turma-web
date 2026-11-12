/* Die Farben des zuletzt gewaehlten Schemas auf das Startbild legen.
 *
 * Warum eine eigene Datei und kein Inline-Skript: Die ausgelieferte
 * Sicherheitsrichtlinie erlaubt Skripte nur von 'self' und entfernt
 * `'unsafe-inline'` im Produktionsbau ausdruecklich. Ein Inline-Skript
 * waere im Entwicklungsserver gelaufen und in der installierten App
 * stumm geblieben -- also genau dort nicht, wo es gebraucht wird. Das
 * ist dieselbe Falle wie bei den absoluten Bildpfaden und bei den
 * geblockten Bildern.
 *
 * Laeuft im <head>, bevor der Koerper geparst ist: So gibt es kein
 * Aufblitzen der Standardfarben. Hinterlegt werden die Farben von
 * `farbeAnwenden`; hier steht keine Farbtabelle, die veralten koennte.
 */
(function () {
  try {
    var f = JSON.parse(localStorage.getItem('turma-startbild') || 'null')
    if (!f || !f.grund) return
    var st = document.createElement('style')
    st.textContent =
      '#startbild{background:' + f.grund + '}' +
      '#startbild .wortmarke{color:' + f.schrift + '}' +
      '#startbild .wortmarke small{color:' + f.leise + '}'
    document.head.appendChild(st)
  } catch (e) { /* Ohne Speicher bleibt das Startbild wie es war. */ }
})()
