let currentSlide = 0;
const carousel = document.querySelector('.imagenes');
const totalSlides = document.querySelectorAll('.imagenes .card').length;




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
let autoSlideInterval = setInterval(autoSlide, 6000); // Cambia cada 3 segundos

// Reiniciar el carrusel cuando se hace clic en un botón
function restartAutoSlide(direction) {
    clearInterval(autoSlideInterval); // Detener el desplazamiento automático
    moveSlide(direction);             // Mover el carrusel manualmente
    autoSlideInterval = setInterval(autoSlide, 1000); // Reiniciar el desplazamiento automático
}

// Eventos de clic en los botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => {
    restartAutoSlide(-1); // Mover hacia atrás
});

document.getElementById('nextBtn').addEventListener('click', () => {
    restartAutoSlide(1); // Mover hacia adelante
});


function startCarousel() {
    if (!isMobileDevice()) {
        // Código para mover automáticamente el carrusel
        autoSlideInterval = setInterval(autoSlide, 6000); // Cambia cada 3 segundos
    }
}

// Detectar si el dispositivo es móvil
function isMobileDevice() {
    window.innerWidth <= 768;
    const aosLink = document.getElementById('AOS_ANIMATION');
    
    if (window.innerWidth < 768) {
        clearInterval(autoSlideInterval); // Detiene el carrusel
    
    } else { // Detiene el carrusel
        startCarousel()    
    }// Puedes ajustar el ancho de acuerdo a lo que consideres un "dispositivo móvil"
}

isMobileDevice()



/* menu lateral */


// Seleccionar el checkbox y la capa que oscurece el contenido
// Seleccionar el checkbox, la capa y el menú
const btnMenu = document.getElementById('btn-menu');
const capa = document.querySelector('.capa');
const containerMenu = document.querySelector('.container-menu');
const menuLinks = document.querySelectorAll('.cont-menu nav a');

// Detectar cambios en el checkbox del menú
btnMenu.addEventListener('change', function() {
    if (btnMenu.checked) {
        // Mostrar el menú lateral y la capa oscura cuando se activa el menú
        containerMenu.style.visibility = 'visible';
        containerMenu.style.opacity = '1';
        capa.style.display = 'block';  // Mostrar la capa oscura
    } else {
        // Ocultar el menú lateral y la capa oscura cuando se desactiva el menú
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
