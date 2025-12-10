// js/slider.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const dots = document.querySelector('.dots');
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = i === 0 ? 'dot active' : 'dot';
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  function goTo(i) {
    slides[index].classList.remove('current');
    dots.children[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('current');
    dots.children[index].classList.add('active');
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
});
