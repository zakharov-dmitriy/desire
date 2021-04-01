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
});
$(function () {
   $('.top__slider').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,

   });
});