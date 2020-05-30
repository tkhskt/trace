import Swiper from 'swiper';

new Swiper('.swiper-container', {
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
      slidesPerView: 5.5,
      spaceBetween: 50,
    },
  },
});
