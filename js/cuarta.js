const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagenCaballero");
const extraTexto = document.getElementById("extraTexto");

// Manejo de errores de imagen: te avisa si la ruta falla
imagen.onerror = () => {
  console.error("No se pudo cargar la imagen:", imagen.src);
  extraTexto.textContent = "No se pudo cargar la imagen: " + imagen.src + ". Revisa nombre, carpeta y extensión.";
};
imagen.onload = () => {
  console.log("Imagen cargada correctamente:", imagen.src);
};

document.addEventListener("click", (ev) => {
  const btn = ev.target;
  if (btn.tagName !== "BUTTON") return;

  const action = btn.getAttribute("data-action");
  const value = btn.getAttribute("data-text") || "";
  const img = btn.getAttribute("data-img") || "";
  const color = btn.getAttribute("data-color") || "";
  const fondo = btn.getAttribute("data-fondo") || "";
  const tamano = btn.getAttribute("data-tamano") || "";

  switch (action) {
    case "caballero":
      texto.textContent = value;
      if (img) imagen.src = img;

      if (color) {
        titulo.style.color = color;
        subtitulo.style.color = color;
        texto.style.color = color;
      }
      if (fondo) document.body.style.background = fondo;
      if (tamano) texto.style.fontSize = tamano;

      {
        const nombre = value.includes(":") ? value.split(":")[0].trim() : "Caballero";
        extraTexto.textContent = `Has seleccionado a ${nombre} y su cosmos se refleja en la página.`;
      }
      break;

    case "reset":
      texto.textContent = "Presiona un botón para ver cambios.";
      imagen.src = "images/seiya.jpg";
      titulo.style.color = "#fff";
      subtitulo.style.color = "#fff";
      texto.style.color = "#fff";
      document.body.style.background = "#3b2c40";
      texto.style.fontSize = "1em";
      extraTexto.textContent = "Aquí puedes mostrar datos extra, como historia, poderes o curiosidades.";
      break;

    case "mensaje":
      alert(value || "¡El cosmos de todos los caballeros se une!");
      extraTexto.textContent = value || "Mensaje mostrado.";
      break;
  }
});