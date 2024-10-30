let currentSlide = 0;
const carousel = document.querySelector('.imagenes'); // Asegúrate de que la clase sea correcta
const totalSlides = document.querySelectorAll('.imagenes .card').length; // Cambiado a '.card'

// Mover el carrusel en la dirección dada (1 adelante, -1 atrás)
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100; // Ajuste basado en el tamaño de las imágenes
    carousel.style.transform = `translateX(${offset}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out'; // Transición suave
}

// Reiniciar la posición del carrusel cuando la pantalla es menor a 900px
function resetCarouselPosition() {
    if (window.innerWidth < 900) {
        currentSlide = 0; // Reiniciar a la primera imagen
        carousel.style.transform = 'translateX(0%)'; // Llevar a la posición inicial
        carousel.style.transition = 'none'; // Sin transición para el reset
    }
}

// Eventos de clic en los botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => {
    moveSlide(-1); // Mover hacia atrás
});

document.getElementById('nextBtn').addEventListener('click', () => {
    moveSlide(1); // Mover hacia adelante
});

// Detectar el cambio de tamaño de la ventana
window.addEventListener('resize', resetCarouselPosition);


/* Menú lateral */

// Seleccionar el checkbox, la capa y el menú
const btnMenu = document.getElementById('btn-menu');
const capa = document.querySelector('.capa');
const containerMenu = document.querySelector('.container-menu');
const menuLinks = document.querySelectorAll('.cont-menu nav a');

// Detectar cambios en el checkbox del menú
btnMenu.addEventListener('change', function() {
    if (btnMenu.checked) {
        containerMenu.style.visibility = 'visible';
        containerMenu.style.opacity = '1';
        capa.style.display = 'block';  // Mostrar la capa oscura
    } else {
        containerMenu.style.visibility = 'hidden';
        containerMenu.style.opacity = '0';
        capa.style.display = 'none';  // Ocultar la capa oscura
    }
});

// Cerrar el menú si el usuario hace clic fuera de él (en la capa oscura)
capa.addEventListener('click', function() {
    btnMenu.checked = false;  // Desactivar el checkbox
    containerMenu.style.visibility = 'hidden';
    containerMenu.style.opacity = '0';
    capa.style.display = 'none';  // Ocultar la capa oscura
});

// Cerrar el menú si se hace clic en un enlace del menú lateral
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        btnMenu.checked = false;  // Desactivar el checkbox
        containerMenu.style.visibility = 'hidden';
        containerMenu.style.opacity = '0';
        capa.style.display = 'none';  // Ocultar la capa oscura
    });
});




// Selecciona todos los elementos con la clase "openModal"
const openModalButtons = document.querySelectorAll('.openModal');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

// Agrega un evento click a cada botón para abrir el modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    });
});

// Cerrar el modal cuando se hace clic en el botón de cierre
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflowY = 'visible';
});

// Cerrar el modal si se hace clic fuera de la ventana de contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflowY = 'visible';
    }
});


