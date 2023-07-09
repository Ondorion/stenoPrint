import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


const data = {
  img: {
    1: ['img/place/1.png', 'img/place/1.png', 'img/place/1.png', 'img/place/1.png'],
    2: ['img/place/2.png', 'img/place/2.png', 'img/place/2.png', 'img/place/2.png'],
    3: ['img/place/1.png', 'img/place/2.png', 'img/place/1.png', 'img/place/2.png'],
    4: ['img/place/2.png', 'img/place/1.png', 'img/place/2.png', 'img/place/1.png'],
  },
  text: {
    1: ['Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.'],
    2: ['Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.'],
    3: ['Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.'],
    4: ['Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. '],
  }
}

const popupItems = document.querySelectorAll('.block-place__item');
const btnPopupClose = document.querySelector('.popup-place__btn-close');
const closePopupBtn = document.querySelector('.popup-place__btn-close');

closePopupBtn.addEventListener('click', () => {
  document.querySelector('.popup-place__inner').classList.remove('popup-place__inner--active');
})

//вешаем события

popupItems.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentPopup = e.currentTarget.getAttribute('data-itempop');

    const currentSwiper = createPopup(currentPopup);
    
    btnPopupClose.addEventListener('click', ()=> {
      deletePopup(currentSwiper);
    });

  });
});

//функция формирования попапа

function createPopup(currentPopup) {
  
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '17px';

  
  //добавляем нужное кол-во сдайдов с нужными картинками
  document.querySelector('.popup-place__inner').classList.add('popup-place__inner--active');
  
  let htmltext ='';
  data.img[currentPopup].forEach(el => {
    let code = `
       <div style="background-image: url(${el})"  class="popup-place__slider-slide swiper-slide">
        
       </div>
     `;
    htmltext += code;
  });
  
  document.querySelector('.popup-place__slider-wrapper').innerHTML = htmltext;

  //создаем новый слайдер
  let newSwiper = new Swiper('.popup-place__slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 400,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.popup-place__button-next',
      prevEl: '.popup-place__button-prev',
    },
    pagination: {
      el: ".popup-place__dots",
    },
  });

  //добавляем текст
  document.querySelector('.content-place-popup__text').innerHTML = data.text[currentPopup];


  return  newSwiper;
};

//функция удаления попапа

function deletePopup(currentSwiper) {

  document.querySelector('.popup-place').classList.remove('popup-place--active');
  currentSwiper.destroy();
  function destroySlider() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0';
  }

  setTimeout(destroySlider, 400);
  
}



