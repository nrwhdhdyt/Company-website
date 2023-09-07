// navbar fixed
// window.onscroll = function() {
//    const header = document.querySelector('header');
//    const fixedNav = header.offsetTop;
   
//    if(window.pageYOffset > fixedNav) {
//       header.classList.add('navbar-fixed');
//    } else {
//       header.classList.remove('navbar-fixed');
//    }
// }

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('is-active');
   menu.classList.toggle('-translate-x-full') 
});