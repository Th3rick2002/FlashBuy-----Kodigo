// Seleccionamos todas las imágenes dentro del carrusel (dentro del contenedor con clase 'carousel-images')
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Mostrar la primera imagen al inicio
showImage(currentIndex);

// Auto-carrusel: cambia la imagen cada 5 segundos 
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000); 

const titulo = document.getElementById('tituloModa');

//ESta es la animación de entrada
window.addEventListener('DOMContentLoaded', () => {
    titulo.style.opacity = '1';
    titulo.style.transform = 'translateY(0)';
});

// Efecto hover
titulo.addEventListener('mouseenter', () => {
    titulo.style.color = '#ff9900';
    titulo.style.transform = 'scale(1.1)';
});

titulo.addEventListener('mouseleave', () => {
    titulo.style.color = '#146eb4';
    titulo.style.transform = 'scale(1)';
});