function populaTabs() {
  const tabBtns = document.querySelectorAll('[data-popular-btn]');
  const tabItems = document.querySelectorAll('[data-popular-tab]');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const Target = e.target;
      let tabIndex = Target.getAttribute("data-popular-btn");
      
      tabBtns.forEach(el => {
        el.classList.remove('popular__tab-btn--active');
      });

      Target.classList.add('popular__tab-btn--active');

      tabItems.forEach(tab => {
        tab.classList.remove('popular__tab-item--active');
      });


      document.querySelector(`[data-popular-tab="${tabIndex}"]`).classList.add('popular__tab-item--active');

    })
  });
  
}



export {populaTabs};