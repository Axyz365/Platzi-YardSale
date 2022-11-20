const arrowMenu = document.querySelector('.arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const cartDetails = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'TV',
    price: 1200,
    img: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Laptop',
    price: 1220,
    img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'TV',
    price: 1200,
    img: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Laptop',
    price: 1220,
    img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600'
})

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productName, productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(cartIcon)
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);