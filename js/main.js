
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

// слайдер c dots
$('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow:1,
    infinity:true,
    appendDots:$('.testimonials__dots')
});
$('.testimonials__prev').on('click', function(e){
    e.preventDefault();
    $('.testimonials__slider').slick('slickPrev');
});
$('.testimonials__next').on('click', function(e){
    e.preventDefault();
    $('.testimonials__slider').slick('slickNext');
});


// accordeon 
// $('.program__acc-link').on('click', function(e){
//     e.preventDefault();
//     $(this).toggleClass('program__acc-link--active');
//     $(this).children('.program__acc-text').slideToggle();
// });

$('.program__acc-link').on('click', function(e){
    e.preventDefault();
    // $('.program__acc-link').removeClass('program__acc-link--active');
    // $('.program__acc-text').slideUp();
    // $(this).toggleClass('program__acc-link--active');
    // $(this).children('.program__acc-text').slideDown();

    if($(this).hasClass('program__acc-link--active')){
        $(this).removeClass('program__acc-link--active');
        $(this).children('.program__acc-text').slideUp();
    }else{
        $('.program__acc-link').removeClass('program__acc-link--active');
        $('.program__acc-text').slideUp();
        $(this).addClass('program__acc-link--active');
        $(this).children('.program__acc-text').slideDown();
    }


});


// Плавный скролл
$(".header__nav-list a, .footer__go-top ").on("click", function (event) {

    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 150;
    $('body,html').animate({scrollTop: top}, 1000);
});


// burger

$('.burger').on('click', function (e) {
    e.preventDefault();
    $('.header__top').toggleClass('header__top--open');
})
// проверять всегда
setInterval(() => {
    if($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
        $('.burger').addClass('burger--follow');
    }else{
        $('.burger').removeClass('burger--follow');
    }
}, 0);
// проверять при скролле
$(window).on('scroll', function() {
    
})
