(function () {
  // Toggle de tema
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'tierra' ? '' : 'tierra';
      document.documentElement.setAttribute('data-theme', next);
      themeToggle.innerText = next === 'tierra' ? 'Tema: Tierra cálida' : 'Tema: Verde fresco';
    });
  }

  // Carrito con localStorage
  const CART_KEY = 'eco_cart';
  const cartCountEls = document.querySelectorAll('.cart-count');

  function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  }
  function setCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }
  function updateCartCount() {
    const count = getCart().reduce((acc, item) => acc + item.qty, 0);
    cartCountEls.forEach(el => el.textContent = String(count));
  }
  updateCartCount();

  function addToCart(product) {
    const cart = getCart();
    const idx = cart.findIndex(p => p.id === product.id);
    if (idx >= 0) cart[idx].qty += product.qty;
    else cart.push(product);
    setCart(cart);
  }

  // Botones "Añadir"
  document.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));
      addToCart({ id, name, price, qty: 1 });
      btn.classList.add('btn-success');
      btn.textContent = 'Añadido ✓';
      setTimeout(() => {
        btn.classList.remove('btn-success');
        btn.textContent = 'Añadir';
      }, 1200);
    });
  });

  // Formulario de contacto: validación básica
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = fd.get('name')?.trim();
      const email = fd.get('email')?.trim();
      const msg = fd.get('message')?.trim();
      const errors = [];

      if (!name || name.length < 2) errors.push('Ingresa tu nombre.');
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Correo inválido.');
      if (!msg || msg.length < 10) errors.push('Mensaje demasiado corto (mínimo 10 caracteres).');

      const alertBox = document.getElementById('contactAlert');
      if (errors.length) {
        alertBox.className = 'alert alert-danger';
        alertBox.textContent = errors.join(' ');
        alertBox.hidden = false;
        return;
      }
      alertBox.className = 'alert alert-success';
      alertBox.textContent = 'Gracias por contactarnos. Te responderemos pronto.';
      alertBox.hidden = false;
      contactForm.reset();
    });
  }
})();
