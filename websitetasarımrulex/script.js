document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenuButton.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.arrow-left');
    const nextArrow = document.querySelector('.arrow-right');
    const dotsContainer = document.querySelector('.dots-container');
  
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  
    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
      updateDots();
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
      updateDots();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
      updateDots();
    }
  
    function createDots() {
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }
  
    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  
    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);
  
    createDots();
    updateDots();
  });
    



  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
  
    let currentIndex = 0;
  
    document.querySelector('.arrow-left').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
  
    document.querySelector('.arrow-right').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  
    function updateSlider() {
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  });

  

  const gallery = document.querySelector('.gallery');
const track = document.querySelector('.gallery-track');
const cards = document.querySelectorAll('.card');
const easing = 0.05;
let startY = 0;
let endY = 0;
let raf;

const lerp = (start,end,t) => start * (1-t) + end * t;

function updateScroll() {
  startY = lerp(startY,endY,easing);
  gallery.style.height = `${track.clientHeight}px`;
  track.style.transform = `translateY(-${startY}px)`;
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY; 
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector('.card-image-wrapper');
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const {top} = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`;
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener('load',updateScroll,false);
window.addEventListener('scroll',init,false);
window.addEventListener('resize',updateScroll,false);
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.nav-links li:nth-child(4) a').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var hakkimizdaLink = document.getElementById("hakkimizda");

  if (hakkimizdaLink) {
      hakkimizdaLink.addEventListener("click", function(e) {
          e.preventDefault();
          window.scrollTo(0, document.body.scrollHeight);
      });
  }
});


