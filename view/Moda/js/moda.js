const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let slideInterval;

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  slides[index].classList.add('active');
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  resetAutoplay();
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  resetAutoplay();
});

// Autoplay automático
function startAutoplay() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000); 
}

function stopAutoplay() {
  clearInterval(slideInterval);
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

// Inicializar
showSlide(currentIndex);
startAutoplay();

// Hover intercalando imágenes y pausando autoplay
document.querySelectorAll('.hover-switch').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-alt');
  let interval;

  img.addEventListener('mouseenter', () => {
    stopAutoplay(); // ← Detener autoplay
    img.src = hoverSrc;

    interval = setInterval(() => {
      img.src = img.src === originalSrc ? hoverSrc : originalSrc;
    }, 800);
  });

  img.addEventListener('mouseleave', () => {
    clearInterval(interval);
    img.src = originalSrc;
    startAutoplay(); // ← Reanudar autoplay
  });
});

document.querySelector('.boton-ver-mas').addEventListener('click', () => {
  const target = document.querySelector('#ropa');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
