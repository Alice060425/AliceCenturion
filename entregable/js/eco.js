// Carrito simple
let cart = [];

function addToCart(id, name, price) {
  let item = cart.find(p => p.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id: id, name: name, price: price, qty: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  let count = cart.reduce((acc, p) => acc + p.qty, 0);
  let cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.textContent = count;
}

// Render carrito
function renderCart() {
  let body = document.getElementById("cartBody");
  if (!body) return;
  body.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let subtotal = item.price * item.qty;
    total += subtotal;
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>S/.${item.price.toFixed(2)}</td>
      <td>S/.${subtotal.toFixed(2)}</td>
    `;
    body.appendChild(row);
  });
  let totalCell = document.getElementById("cartTotal");
  if (totalCell) totalCell.textContent = "S/." + total.toFixed(2);
}

// Checkout simulado
let checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    alert("Gracias por tu compra (simulado).");
    cart = [];
    updateCartCount();
    renderCart();
  });
}

// Formulario de contacto
let contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let alertBox = document.getElementById("contactAlert");
    if (!name || !email || !message) {
      alertBox.className = "alert alert-danger";
      alertBox.textContent = "Completa todos los campos.";
      alertBox.hidden = false;
    } else {
      alertBox.className = "alert alert-success";
      alertBox.textContent = "Gracias por contactarnos.";
      alertBox.hidden = false;
      contactForm.reset();
    }
  });
}

// Libro de reclamaciones
let reclamoForm = document.getElementById("reclamoForm");
if (reclamoForm) {
  reclamoForm.addEventListener("submit", e => {
    e.preventDefault();
    let alertBox = document.getElementById("alertReclamo");
    alertBox.className = "alert alert-success";
    alertBox.textContent = "Tu reclamo ha sido registrado correctamente.";
    alertBox.hidden = false;
    reclamoForm.reset();
  });
}

// Tema
let themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-tierra");
  });
}
