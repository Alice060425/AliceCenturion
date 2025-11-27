document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".add-btn");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const producto = boton.parentElement.querySelector("h3").textContent;
      alert(`Agregaste ${producto} al carrito 🛒`);
    });
  });
});