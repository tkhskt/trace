import Swiper from 'swiper';

new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
