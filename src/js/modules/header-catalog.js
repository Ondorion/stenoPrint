const catalogBtn = document.querySelector('.header-catalog__btn');
const catalogOnImg = document.querySelector('.header-catalog__btn-on');
const catalogCloseImg = document.querySelector('.header-catalog__btn-close');
const catalogMenu = document.querySelector('.header-catalog__menu');


catalogBtn.addEventListener('click', (e)=> {
  e.target.classList.toggle('header-catalog__btn--active')
  catalogOnImg.classList.toggle('header-catalog__btn-block');
  catalogCloseImg.classList.toggle('header-catalog__btn-block');


  if(catalogCloseImg.classList.contains('header-catalog__btn-block')){
    catalogMenu.classList.add('header-catalog__menu-open');
  } else{
    catalogMenu.classList.remove('header-catalog__menu-open');
  }
  
})