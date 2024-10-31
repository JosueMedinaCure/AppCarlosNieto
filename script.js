// Carrusel
let currentSlide = 0;
const carousel = document.querySelector('.imagenes');
const totalSlides = document.querySelectorAll('.imagenes .card').length;

// Mover el carrusel en la dirección dada (1 adelante, -1 atrás)
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out';
}

// Reiniciar la posición del carrusel cuando la pantalla es menor a 900px
function resetCarouselPosition() {
    if (window.innerWidth < 900) {
        currentSlide = 0;
        carousel.style.transform = 'translateX(0%)';
        carousel.style.transition = 'none';
    }
}

document.getElementById('prevBtn').addEventListener('click', () => moveSlide(-1));
document.getElementById('nextBtn').addEventListener('click', () => moveSlide(1));
window.addEventListener('resize', resetCarouselPosition);

// Menú lateral
const btnMenu = document.getElementById('btn-menu');
const capa = document.querySelector('.capa');
const containerMenu = document.querySelector('.container-menu');
const menuLinks = document.querySelectorAll('.cont-menu nav a');

btnMenu.addEventListener('change', function() {
    if (btnMenu.checked) {
        containerMenu.style.visibility = 'visible';
        containerMenu.style.opacity = '1';
        capa.style.display = 'block';
    } else {
        containerMenu.style.visibility = 'hidden';
        containerMenu.style.opacity = '0';
        capa.style.display = 'none';
    }
});

capa.addEventListener('click', function() {
    btnMenu.checked = false;
    containerMenu.style.visibility = 'hidden';
    containerMenu.style.opacity = '0';
    capa.style.display = 'none';
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        btnMenu.checked = false;
        containerMenu.style.visibility = 'hidden';
        containerMenu.style.opacity = '0';
        capa.style.display = 'none';
    });
});

// Modal
const openModalButtons = document.querySelectorAll('.openModal');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflowY = 'visible';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflowY = 'visible';
    }
});

// Modal de imágenes
const modalimg = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.querySelector(".close-modal");

document.querySelectorAll(".thumbnail").forEach((img) => {
    img.addEventListener("click", () => {
        modalimg.style.display = "flex";
        modalImage.src = img.src;
        document.body.style.overflowY = 'hidden';
    });
});

closeModalBtn.addEventListener("click", () => {
    modalimg.style.display = "none";
    document.body.style.overflowY = "visible";
});

modalimg.addEventListener("click", (event) => {
    if (event.target === modalimg) {
        modalimg.style.display = "none";
        document.body.style.overflowY = "visible";
    }
});
