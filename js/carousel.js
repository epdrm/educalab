/* Carousel.js - Controle do Carrossel de Vídeos */

let currentSlide = 0;
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

function moveCarousel(direction) {
    currentSlide += direction;
    
    // Voltar ao início se chegar ao final
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    // Ir para o final se chegar antes do início
    else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Suporte a drag/swipe no carrossel
let startX = 0;
let endX = 0;

const carouselWrapper = document.querySelector('.carousel-wrapper');

if (carouselWrapper) {
    carouselWrapper.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    }, false);

    carouselWrapper.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    // Suporte a mouse drag
    carouselWrapper.addEventListener('mousedown', (e) => {
        startX = e.screenX;
        carouselWrapper.style.cursor = 'grabbing';
    });

    carouselWrapper.addEventListener('mouseup', (e) => {
        endX = e.screenX;
        handleSwipe();
        carouselWrapper.style.cursor = 'grab';
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe para esquerda - próximo slide
            moveCarousel(1);
        } else {
            // Swipe para direita - slide anterior
            moveCarousel(-1);
        }
    }
}

// Auto-play do carrossel (opcional - comentado por padrão)
/*
setInterval(() => {
    moveCarousel(1);
}, 5000);
*/

// Inicializar carrossel
updateCarousel();
