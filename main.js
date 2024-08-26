function muestra_oculta(id) {
    const contenido = document.getElementById(id);
    const boton = contenido.nextElementSibling;

    // Verificar si el contenido ya está siendo mostrado
    if (contenido.style.display === 'block') {
        return; // Salir de la función si ya está mostrado
    }

    contenido.classList.toggle('contenido');
    boton.textContent = contenido.classList.contains('contenido') ? 'Mostrar Más' : 'Mostrar Menos';

    // Agregar transición para una mejor experiencia de usuario
    contenido.style.transition = 'height 0.3s ease-in-out';
}
