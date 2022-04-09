
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
// слайдер 
$('.team__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow:4,
    draggable:false,
    infinity:true,
    appendArrows: $('.team__slider-arrows'),
    waitForAnimate:false,
});

$('.team__slider-prev').on('click', function(e){
    e.preventDefault();
    $('.team__slider').slick('slickPrev');
});
$('.team__slider-next').on('click', function(e){
    e.preventDefault();
    $('.team__slider').slick('slickNext');
});


$('.testimonials__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow:1,
    infinity:true,
    waitForAnimate:false,
});
$('.testimonials__prev').on('click', function(e){
    e.preventDefault();
    $('.testimonials__slider').slick('slickPrev');
});
$('.testimonials__next').on('click', function(e){
    e.preventDefault();
    $('.testimonials__slider').slick('slickNext');
});