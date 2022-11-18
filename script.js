const arrowMenu = document.querySelector('.arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');


arrowMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}