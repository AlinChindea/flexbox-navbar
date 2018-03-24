

//with vanillaJS
window.addEventListener('DOMContentLoaded', () => {

  function classToggle() {
    const navs = document.querySelectorAll('.navbar-items');

    navs.forEach(nav => nav.classList.toggle('navbar-burgerToggle'));
  }
  const burgerMenu = document.querySelector('.navbar-burger');
  burgerMenu.addEventListener('click', classToggle);

});


// $(() => {
//   // console.log('jQuery loaded');
//   // function classToggle() {
//   //   const $navs = $('navbar-items');
//   //   $navs.each(nav => nav.toggleClass('navbar-burgerOpen'));
//   // }
//
//   $('.navbar-burger').on('click', function(){
//     $('.navbar-burgerOpen').hide();
//     $('.navbar-burgerOpen').toggle();
//   });
// });
