const arrowMenu = document.querySelector('.arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const cartDetails = document.querySelector('.product-detail');

cart.addEventListener('click', toogleCart);
arrowMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu)

// FUNCTIONS
function toggleDesktopMenu(){

    let isCartClosed = cartDetails.classList.contains('inactive');

    if(!isCartClosed) {
        cartDetails.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

function toogleMobileMenu(){

    cartDetails.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');

}

function toogleCart(){

    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    mobileMenu.classList.add('inactive');
    cartDetails.classList.toggle('inactive');

}