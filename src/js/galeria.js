document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = "build/img/thumb/" + i + ".webp";
        imagen.dataset.imagenId = i;
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}


function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('IMG');
    imagen.src = "build/img/grande/" + id + ".webp";

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    overlay.onclick = function() {
        overlay.remove();
    }

    //boton
    const cerrarImg = document.createElement('P');
    cerrarImg.textContent = 'salir X';
    cerrarImg.classList.add('btn-cerrar');

    const body = document.querySelector('body');

    cerrarImg.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarImg);

    body.appendChild(overlay);
    //body.classList.add('fijar-body');

}