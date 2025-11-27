document.addEventListener('DOMContentLoaded', function() {
    const botonesAñadir = document.querySelectorAll('.btn-primary');

    botonesAñadir.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            const cardBody = boton.closest('.card-body');
            const mensaje = document.createElement('p');
            mensaje.textContent = '¡Añadido al carrito!';
            mensaje.classList.add('mensaje-carrito'); // Agrega una clase para estilos CSS
            cardBody.appendChild(mensaje);

            // Eliminar el mensaje después de 2 segundos
            setTimeout(() => {
                mensaje.remove();
            }, 2000);
        });
    });
});
