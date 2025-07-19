const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);


document.querySelectorAll('.hover-switch').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-alt');

  let interval;

  img.addEventListener('mouseenter', () => {
    // Cambia inmediatamente
    img.src = hoverSrc;

    // Luego empieza a intercalar cada 300ms (puedes ajustar)
    interval = setInterval(() => {
      img.src = img.src === originalSrc ? hoverSrc : originalSrc;
    }, 600);
  });

  img.addEventListener('mouseleave', () => {
    clearInterval(interval);
    img.src = originalSrc; // Regresa a la imagen original
  });
});
