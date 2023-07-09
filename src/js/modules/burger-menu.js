const burgerMenuBtn = document.querySelector('.info-use-header__burger');
const navCatalog = document.querySelector('.use-header__menu');
const catalogMenu = document.querySelector('.header-catalog__menu');
const catalogCloseImg = document.querySelector('.header-catalog__btn-close');
const catalogOnImg = document.querySelector('.header-catalog__btn-on');
const catalogBtn = document.querySelector('.header-catalog__btn');

burgerMenuBtn.addEventListener('click', (e)=> {
  e.target.classList.toggle('info-use-header__burger--active');
  navCatalog.classList.toggle('use-header__menu--active');

  

  if(!e.target.classList.contains('info-use-header__burger--active')) {
    catalogMenu.classList.remove('header-catalog__menu-open');
    catalogCloseImg.classList.remove('header-catalog__btn-block');
    catalogOnImg.classList.add('header-catalog__btn-block');
    catalogBtn.classList.remove('header-catalog__btn--active');
  }

})