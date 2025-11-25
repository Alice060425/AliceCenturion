const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagenCaballero");
const extraTexto = document.getElementById("extraTexto");

document.addEventListener(  "click", (ev) => {
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
    if (images) images.src = images;

    // Cambiar estilos
    titulo.style.color = color;
    subtitulo.style.color = color;
    texto.style.color = color;
    document.body.style.background = fondo;                                   
    texto.style.fontSize = tamano;

    // Mostrar algo extra en el segundo div
    extraTexto.textContent = `Has seleccionado a ${value.split(":")[0]} y su cosmos se refleja en la página.`;
  }

  if (action === "reset") {
    texto.textContent = "Presiona un botón para ver cambios.";
    images .src = "seiya.jpg";
    titulo.style.color = "#fff";
    subtitulo.style.color = "#fff";
    texto.style.color = "#fff";
    document.body.style.background = "#3b2c40";
    texto.style.fontSize = "1em";
    extraTexto.textContent = "Aquí puedes mostrar datos extra, como historia, poderes o curiosidades.";
  }

  if (action === "mensaje") {
    alert(btn.getAttribute("data-text"));
  }
});