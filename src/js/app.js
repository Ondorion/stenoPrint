import * as flsFunctions from "./modules/functions.js";
import * as dynamicAd  from "./modules/dynamic-adapt.js";
import * as headerCatalog  from "./modules/header-catalog.js";
import * as burgerMenu  from "./modules/burger-menu.js";
import * as search  from "./modules/search.js";
import * as popularTabs  from "./modules/popular-tabs.js";
import * as popups  from "./modules/popups.js";
import * as slidersPopular  from "./modules/sliders-popular-section.js";

flsFunctions.isWebP();
dynamicAd.dynamicAd();
popularTabs.populaTabs();

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


const swiperMain = new Swiper('.main-slider__inner', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 400,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.main-slider__button-next',
    prevEl: '.main-slider__button-prev',
  },
  pagination: {
    el: ".main-slider__dots",
  },
});

const swiperServices = new Swiper('.services__slider', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerGroup: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.services__button-next',
    prevEl: '.services__button-prev',
  },
  pagination: {
    el: ".services__dots",
  },
  breakpoints: {
    330: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 5,
      
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      allowTouchMove: false,
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }
});


const swiperBlog = new Swiper('.blog__slider', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 10,
  speed: 400,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.blog__button-next',
    prevEl: '.blog__button-prev',
  },
  pagination: {
    el: ".blog__dots",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    600: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
   
  }
});