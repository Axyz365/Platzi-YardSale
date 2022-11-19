const arrowMenu = document.querySelector('.arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');


arrowMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}