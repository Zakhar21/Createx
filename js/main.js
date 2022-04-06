
AOS.init();
var mixer = mixitup('.directions__list',{
    controls: {
        toggleLogic: 'and',
        toggleDefault: 'none'
      },
      animation: {
        duration: 300
      }
});


// Удаляем класс у прежнего элемента
let btns = document.querySelectorAll('.directions__filter-btn');
btns.forEach(item => {
    item.addEventListener('click', (e) => {
        btns.forEach(el=>{
            el.classList.remove('directions__filter-btn--active')
        });
        item.classList.add('directions__filter-btn--active')
    });
});

