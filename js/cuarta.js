const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagenCaballero");

document.addEventListener("click", (ev) => {
  const btn = ev.target;
  if (btn.tagName !== "BUTTON") return;

  const action = btn.getAttribute("data-action");

  if (action === "caballero") {
    const value = btn.getAttribute("data-text");
    const img = btn.getAttribute("data-img");
    const color = btn.getAttribute("data-color");
    const fondo = btn.getAttribute("data-fondo");
    const tamano = btn.getAttribute("data-tamano");

    // Cambiar texto e imagen
    texto.textContent = value;
    if (img) imagen.src = img;

    // Cambiar estilos
    titulo.style.color = color;
    subtitulo.style.color = color;
    texto.style.color = color;
    document.body.style.background = fondo;
    texto.style.fontSize = tamano;
  }
});
