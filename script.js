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
    autoSlideInterval = setInterval(autoSlide, 8000); // Reiniciar el desplazamiento automático
}

// Eventos de clic en los botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => {
    restartAutoSlide(-1); // Mover hacia atrás
});

document.getElementById('nextBtn').addEventListener('click', () => {
    restartAutoSlide(1); // Mover hacia adelante
});
