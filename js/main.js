document.addEventListener("DOMContentLoaded", () => {
   const menuBtn = document.querySelector('.menu__btn');
   const rightsideMenu = document.querySelector('.rightside-menu');
   const rightsideMenuClose = document.querySelector('.rightside-menu__close');

   menuBtn.addEventListener('click', function () {
      rightsideMenu.classList.add('open');
   });

   rightsideMenuClose.addEventListener('click', () => {
      rightsideMenu.classList.remove('open');
   });


   //mixitup

   let mixer = mixitup('.gallery__inner', {
      load: {
         filter: '.living'
      }
   });


});


//slick-slider
$(function () {
   $('.top__slider').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,

   });
});

$(function () {
   $('.contact__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 10,
      slidesToScroll: 10,
   });
});

$(function () {
   $('.article-slider__box').slick({
      prevArrow: '<button type="button" class="slick-prev article-slider__arrow article-slider__arrow-prev"><img src="images/blog/slider-prev.svg" alt="arrow-prev"></button>',
      nextArrow: '<button type="button" class="slick-next article-slider__arrow article-slider__arrow-next"><img src="images/blog/slider-next.svg" alt="arrow-next"></button>'

   });
});