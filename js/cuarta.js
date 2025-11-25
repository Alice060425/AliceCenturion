// Referencias de elementos
const subtitulo = document.getElementById("subtitulo");
const texto = document.getElementById("texto");

// Delegación de eventos para todos los botones
document.addEventListener("click", (ev) => {
  const btn = ev.target;
  if (btn.tagName !== "BUTTON") return;

  const action = btn.getAttribute("data-action");
  const value = btn.getAttribute("data-text");

  switch (action) {
    case "subtitulo":
      subtitulo.textContent = value;
      break;
    case "texto":
      texto.textContent = value;
      break;
    case "mensaje":
      alert(value);
      break;
  }
});