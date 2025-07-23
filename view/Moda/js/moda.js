/*******************************
 * FUNCIONES DEL CARRUSEL PRINCIPAL
 *******************************/

// Selección de elementos del DOM para el carrusel
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Variables para controlar el estado del carrusel
let currentIndex = 0;       
let slideInterval;         

/**
 * Muestra el slide correspondiente al índice proporcionado
 * @param {number} index - Índice del slide a mostrar
 */
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  slides[index].classList.add('active');
}

/**
 * Avanza al siguiente slide
 */
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  resetAutoplay();
});

/**
 * Retrocede al slide anterior
 */
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  resetAutoplay();
});

/*******************************
 * FUNCIONALIDAD DE AUTOPLAY
 *******************************/

/**
 * Inicia el autoplay del carrusel
 */
function startAutoplay() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000); 
}

/**
 * Detiene el autoplay del carrusel
 */
function stopAutoplay() {
  clearInterval(slideInterval);
}

/**
 * Reinicia el ciclo de autoplay
 */
function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

// Inicialización del carrusel
showSlide(currentIndex);
startAutoplay();

/*******************************
 * EFECTO HOVER PARA IMÁGENES
 *******************************/

/**
 * Alterna entre imágenes al hacer hover y pausa el autoplay
 */
document.querySelectorAll('.hover-switch').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-alt');
  let interval;

  img.addEventListener('mouseenter', () => {
    stopAutoplay();
    img.src = hoverSrc;

    interval = setInterval(() => {
      img.src = img.src === originalSrc ? hoverSrc : originalSrc;
    }, 800);
  });

  img.addEventListener('mouseleave', () => {
    clearInterval(interval);
    img.src = originalSrc;
    startAutoplay();
  });
});

/*******************************
 * NAVEGACIÓN A SECCIÓN DE ROPA
 *******************************/

/**
 * Scroll suave a la sección de ropa al hacer clic en "Ver más"
 */
document.querySelector('.boton-ver-mas').addEventListener('click', () => {
  const target = document.querySelector('#ropa');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

/*******************************
 * FUNCIONALIDAD DEL CARRITO
 *******************************/

/**
 * Inicialización del carrito al cargar la página
 */
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.boton-agregar-carrito');

  // Agregar productos normales al carrito
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const product = card.querySelector('.card-title').textContent;
      const precioText = card.querySelector('.card-price').textContent.replace('$', '');
      const precio = parseFloat(precioText);
      const inputCantidad = card.querySelector('.cantidad-input');
      const cantidad = parseInt(inputCantidad.value) || 1;

      agregateProducts(product, precio, cantidad);
      alert(`${product} agregado al carrito`);
    });
  });
  
  // Mostrar productos del carrito al cargar la página
  getProducts();
});

/**
 * Manejo de productos en promoción
 */
document.querySelectorAll('.promo-animate').forEach(card => {
  // Efecto hover para las cards de promoción
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });

  // Agregar productos promocionales al carrito
  const button = card.querySelector('.btn-add-to-cart');
  if (button) {
    button.addEventListener('click', () => {
      const product = card.querySelector('.card-title-promo').textContent;
      const precioText = card.querySelector('.promo-price').textContent.replace('$', '');
      const precio = parseFloat(precioText);
      const cantidad = 1; // Siempre será 1 para promos

      agregateProducts(product, precio, cantidad);
      alert(`${product} agregado al carrito 🛒`);
    });
  }
});