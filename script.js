const arrowMenu = document.querySelector('.arrow-menu');
const burgerMenu = document.querySelector('.burger-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const productDetaileCloseIcon = document.querySelector('.product-detail-close');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartDetails = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');

cart.addEventListener('click', toogleCart);
arrowMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu)
productDetaileCloseIcon.addEventListener('click', closeProductDetailAside)

// FUNCTIONS
function toggleDesktopMenu(){

    let isCartClosed = cartDetails.classList.contains('inactive');

    if(!isCartClosed) {
        cartDetails.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

function toogleMobileMenu(){
    cartDetails.classList.add('inactive');
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toogleCart(){

    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    cartDetails.classList.toggle('inactive');

}

function openProductDetail(){
    cartDetails.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
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
        
        // product = {name,price,img} -> product.image
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        img.addEventListener('click', openProductDetail);
    
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