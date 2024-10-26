let currentSlide = 0;
const carousel = document.querySelector('.imagenes');
const totalSlides = document.querySelectorAll('.imagenes .card').length;
let autoSlideInterval;

// Mover el carrusel en la dirección dada (1 adelante, -1 atrás)
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 35; // Ajuste basado en el 35% del tamaño de las imágenes
    carousel.style.transform = `translateX(${offset}%)`;
}

// Desplazamiento automático
function autoSlide() {
    moveSlide(1);
}

// Iniciar desplazamiento automático
function startCarousel() {
    if (!isMobileDevice()) {
        autoSlideInterval = setInterval(autoSlide, 6000); // Cambia cada 6 segundos
    }
}

// Detectar si el dispositivo es móvil
function isMobileDevice() {
    return window.innerWidth <= 768;  // Devuelve true si la pantalla es menor o igual a 768px
}

// Detener el carrusel en dispositivos móviles
function checkDeviceAndStopCarousel() {
    if (isMobileDevice()) {
        clearInterval(autoSlideInterval); // Detener el carrusel
    } else {
        startCarousel(); // Iniciar el carrusel solo si no es móvil
    }
}

// Ejecutar al cargar la página
checkDeviceAndStopCarousel();

// Reiniciar el carrusel cuando se hace clic en un botón
function restartAutoSlide(direction) {
    clearInterval(autoSlideInterval); // Detener el desplazamiento automático
    moveSlide(direction);             // Mover el carrusel manualmente
    if (!isMobileDevice()) {
        autoSlideInterval = setInterval(autoSlide, 6000); // Reiniciar el desplazamiento automático
    }
}

// Eventos de clic en los botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => {
    restartAutoSlide(-1); // Mover hacia atrás
});

document.getElementById('nextBtn').addEventListener('click', () => {
    restartAutoSlide(1); // Mover hacia adelante
});

// Verificar si el tamaño de la ventana cambia (responsiveness)
window.addEventListener('resize', checkDeviceAndStopCarousel);


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
