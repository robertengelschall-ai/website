# Website – Mustername

Eine einfache Website aus reinem HTML, CSS und JavaScript.
Es muss nichts installiert und nichts „gebaut“ werden: Was in diesem Ordner liegt, ist die Website.

## Seite ansehen

- **Einfach:** Doppelklick auf `index.html`. Die Seite öffnet sich im Browser.
- **Komfortabel:** In VS Code die Erweiterung **„Live Server“** installieren, dann Rechtsklick auf
  `index.html` → **„Open with Live Server“**. Die Seite lädt dann bei jedem Speichern automatisch neu.

## Was liegt wo?

| Datei / Ordner      | Inhalt                                                  |
| ------------------- | ------------------------------------------------------- |
| `index.html`        | Startseite                                              |
| `galerie.html`      | Galerie                                                 |
| `kontakt.html`      | Kontakt und Öffnungszeiten                              |
| `impressum.html`    | Impressum                                               |
| `datenschutz.html`  | Datenschutzerklärung                                    |
| `css/style.css`     | Das gesamte Aussehen (Farben, Schrift, Layout)          |
| `js/main.js`        | Handy-Menü, Bild-Vergrößerung in der Galerie, Jahreszahl |
| `images/`           | Bilder (zurzeit Platzhalter)                            |

## Was muss ich anpassen?

Alle Stellen, die du anpassen solltest, sind im Code mit **`ÄNDERN:`** markiert.
In VS Code findest du sie alle mit **Strg + Umschalt + F** und dem Suchbegriff `ÄNDERN`.

- **Texte:** direkt in den `.html`-Dateien
- **Name:** „Mustername“ kommt auf jeder Seite vor. Mit **Strg + Umschalt + H** in VS Code
  ersetzt du ihn in allen Dateien gleichzeitig.
- **Farben und Schrift:** ganz oben in `css/style.css` im Abschnitt „Einstellungen“
- **Menü:** Kopf- und Fußbereich sind in allen fünf HTML-Dateien gleich.
  Wenn du dort etwas änderst, musst du es in **jeder** Datei ändern.

## Bilder austauschen

1. Eigene Fotos in den Ordner `images/` legen, am besten als `.jpg`.
2. Fotos vorher verkleinern, ideal sind etwa 1600 Pixel Breite und unter 500 KB.
   Das geht z. B. kostenlos mit [squoosh.app](https://squoosh.app).
3. In der HTML-Datei den Dateinamen bei `src` (und in der Galerie auch bei `href`) anpassen.
4. Den `alt`-Text ausfüllen: Er beschreibt das Bild für blinde Menschen und für Suchmaschinen.

Verwende nur Fotos, an denen du die Rechte hast. Wenn Personen gut erkennbar sind, hol dir ihr Einverständnis.

## Checkliste vor dem Veröffentlichen

- [ ] „Mustername“ und alle Platzhaltertexte ersetzt
- [ ] Kontaktdaten und Öffnungszeiten stimmen
- [ ] Eigene Fotos eingebaut (mit Bildrechten)
- [ ] Impressum und Datenschutz ausgefüllt und geprüft, gelbe Hinweiskästen gelöscht
- [ ] In jeder Seite `<title>` und `<meta name="description">` angepasst

## Veröffentlichen mit GitHub Pages

Kurzfassung (ausführlich gehen wir das gemeinsam durch):

1. Git installieren und ein GitHub-Konto anlegen.
2. Auf GitHub ein neues Repository anlegen.
3. Diesen Ordner mit `git push` hochladen.
4. Im Repository unter **Settings → Pages** den Branch `main` auswählen.
5. Nach 1–2 Minuten ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar.

Änderungen veröffentlichst du später so:

```bash
git add .
git commit -m "Kurze Beschreibung der Änderung"
git push
```
