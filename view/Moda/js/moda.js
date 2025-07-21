// Constantes para el slide, boton de preview y de siguiente

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

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


//LOGICA PARA BOTON VER MAS, LLEVA A LA SECCION DE CARDS DE ROPA EN CLIC

document.querySelector('.boton-ver-mas').addEventListener('click', () => {
  const target = document.querySelector('#ropa');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});


//LOGICA PARA EL CARRITO
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.boton-agregar-carrito');

  addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const product = card.querySelector('.card-title').textContent;
    const precioText = card.querySelector('.card-price').textContent.replace('$', '');
    const precio = parseFloat(precioText);
    const inputCantidad = card.querySelector('.cantidad-input'); // ← NUEVO
    const cantidad = parseInt(inputCantidad.value) || 1;         // ← NUEVO

    agregateProducts(product, precio, cantidad);
    alert(`${product} agregado al carrito`);
  });
});
  // Mostrar productos del carrito al cargar la página
  getProducts();
});




