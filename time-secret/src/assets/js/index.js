import Swiper from 'swiper';
import drawer from './drawer';

drawer();

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.5,
  spaceBetween: 50,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1800: {
      cssWidthAndHeight: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      visibilityFullFit: true,
      autoResize: false,
    },
  },
  on: {
    beforeResize() {
      if (window.innerWidth >= 1800) {
        swiper.slides.css('width', '');
      }
    },
  },
});

console.log('aaaaaaaaaa');
