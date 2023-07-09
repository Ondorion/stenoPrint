const searchActiveBtn = document.querySelector('.use-header__activeBtn');
const searchCloseBtn = document.querySelector('.use-header__closeBtn');
const searchForm = document.querySelector('.use-header__search-form');




searchActiveBtn.addEventListener('click', (e) => {
  searchForm.classList.add('use-header__search-form--active');
});

searchCloseBtn.addEventListener('click', (e) => {
  searchForm.classList.remove('use-header__search-form--active');
});