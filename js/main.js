/* =========================================================
   main.js – kleine Helfer für die Website
   1. Menü auf dem Handy auf- und zuklappen
   2. Galerie: Bild per Klick vergrößern
   3. Aktuelles Jahr in der Fußzeile
   ========================================================= */


// ---------- 1. Menü auf dem Handy ----------
const menueKnopf = document.querySelector(".menue-knopf");
const navigation = document.querySelector(".navigation");

if (menueKnopf && navigation) {
  menueKnopf.addEventListener("click", () => {
    // toggle() schaltet die Klasse "offen" an oder aus.
    // Das Ergebnis ist true, wenn das Menü jetzt offen ist.
    const istOffen = navigation.classList.toggle("offen");

    // Teilt Screenreadern mit, ob das Menü gerade offen ist
    menueKnopf.setAttribute("aria-expanded", istOffen);
  });
}


// ---------- 2. Galerie: Bild vergrößern ----------
// Läuft nur auf Seiten mit einer vergrößerten Ansicht (galerie.html).
const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const grossesBild = lightbox.querySelector("img");
  const bildText = lightbox.querySelector("figcaption");

  document.querySelectorAll(".galerie figure").forEach((figur) => {
    const link = figur.querySelector("a");
    const vorschau = figur.querySelector("img");
    const beschreibung = figur.querySelector("figcaption");

    link.addEventListener("click", (ereignis) => {
      // Nicht zur Bilddatei wechseln, sondern ...
      ereignis.preventDefault();

      grossesBild.src = link.href;
      grossesBild.alt = vorschau.alt;
      bildText.textContent = beschreibung ? beschreibung.textContent : "";

      // ... das Bild groß über der Seite anzeigen
      lightbox.showModal();
    });
  });

  // Ein Klick irgendwo (Bild, Hintergrund oder ✕) schließt die Ansicht.
  // Die Esc-Taste funktioniert automatisch.
  lightbox.addEventListener("click", () => lightbox.close());
}


// ---------- 3. Jahr in der Fußzeile ----------
// Damit das © immer das aktuelle Jahr zeigt
document.querySelectorAll(".jahr").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
