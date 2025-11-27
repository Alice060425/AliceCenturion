function showAlert(mensaje) {
    alert(mensaje);
}

function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

function cambiarColorTexto(color) {
    document.body.style.color = color;
}

function cambiarTamanoTexto(tamano) {
    document.body.style.fontSize = tamano;
}

function cambiarFuente(fuente) {
    document.body.style.fontFamily = fuente;
}

function cambiarSubtitulo(nuevoSubtitulo) {
    document.getElementById('subtitulo').innerText = nuevoSubtitulo;
}

function cambiarParrafo(nuevoParrafo) {
    document.getElementById('parrafo').innerText = nuevoParrafo;
}