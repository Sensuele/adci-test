window.addEventListener('DOMContentLoaded', () => {
  'use strict';


  // Show and hide buttons
  const btnHide = document.querySelector('.button__hide'),
    articles = document.querySelector('.articles'),
    btnShow = document.querySelector('.button__show');

  btnHide.addEventListener('click', () => {
    let slideUp = (target, duration) => {

      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
    };
    slideUp(articles, 150);
  });


  btnShow.addEventListener('click', () => {
    btnHide.style.display = 'block';

    let slideDown = (target, duration) => {

      target.style.removeProperty('display');
      let display = window.getComputedStyle(target).display;
      if (display === 'none') display = 'block';
      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
    };
    slideDown(articles, 150);
  });


  // Slider
  let slideIndex = 2,
    slides = document.querySelectorAll('.slider__item'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.visibility = 'hidden');

    slides.forEach((item) => item.style.opacity = '0');
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.visibility = 'visible';
    slides[slideIndex - 1].style.opacity = '1';
    dots[slideIndex - 1].classList.add('dot-active');
  }


  let currentSlide = (n) => {
    showSlides(slideIndex = n);
  };
  dotsWrap.addEventListener('click', (e) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });


  let plusSlides = (n) => {
    showSlides(slideIndex += n);
  };

  setInterval(() => plusSlides(1), 4000);






  // modal open
  let open = document.querySelector('.auth__text'),
    popup = document.querySelector('.auth-window'),
    close = document.querySelector('.close-modal');
  let openModal = () => {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  };
  open.addEventListener('click', openModal);
  // modal close
  let closeModal = () => {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
    document.body.style.overflow = '';
  };
  close.addEventListener('click', closeModal);
  popup.addEventListener('click', (e) => {
    if (e.target.closest('.auth-window__content')) {
      return;
    }
    closeModal();
  });

// Mobile menu
  const mobileMenu = document.querySelector('.mobile-menu');
  const navMenu = document.querySelector('.nav');
  const navWrap = document.querySelector('.nav__wrap');
  const body = document.querySelector('body');
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('openMenu');
    navWrap.classList.toggle('open-menu-wrap');
    body.classList.toggle('hidden');
  });
  

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});