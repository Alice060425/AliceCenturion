document.addEventListener('DOMContentLoaded', function() {
    const largoInput = document.getElementById('largo');
    const anchoInput = document.getElementById('ancho');
    const calcularButton = document.getElementById('calcular');
    const areaSpan = document.getElementById('area');
    const perimetroSpan = document.getElementById('perimetro');

    calcularButton.addEventListener('click', function() {
        const largo = parseFloat(largoInput.value);
        const ancho = parseFloat(anchoInput.value);

        if (isNaN(largo) || isNaN(ancho)) {
            alert('Por favor, ingrese valores numéricos para el largo y el ancho.');
            return;
        }

        const area = largo * ancho;
        const perimetro = 2 * (largo + ancho);

        areaSpan.textContent = area.toFixed(2);
        perimetroSpan.textContent = perimetro.toFixed(2);
    });
});
