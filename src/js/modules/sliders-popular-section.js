
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const popularSlider1 = new Swiper('#popular-slider-1', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerGroup: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider-tab-popular__button-next',
    prevEl: '.slider-tab-popular__button-prev',
  },
  pagination: {
    el: ".slider-tab-popular__dots",
  },
   breakpoints: {
    330: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

const popularSlider2 = new Swiper('#popular-slider-2', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerGroup: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider-tab-popular__button-next',
    prevEl: '.slider-tab-popular__button-prev',
  },
  pagination: {
    el: ".slider-tab-popular__dots",
  },
   breakpoints: {
    330: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

const popularSlider3 = new Swiper('#popular-slider-3', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerGroup: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider-tab-popular__button-next',
    prevEl: '.slider-tab-popular__button-prev',
  },
  pagination: {
    el: ".slider-tab-popular__dots",
  },
   breakpoints: {
    330: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});