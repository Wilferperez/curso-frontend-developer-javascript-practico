const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopmenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togleCarritoAside);

function toggleDesktopmenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}  

function togleCarritoAside(){
const isMobileMenuClosed = mobileMenu.classList.contains
 ('inactive');
    
 if (!isMobileMenuClosed) {
   mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
   name: 'compu',
   price: 204,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'movil',
    price: 504,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });
 productList.push({
    name: 'bike',
    price: 304,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });

 /*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

function  renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
      //   prodcut = { name, price, image} -> product.image
        const productImg =  document.createElement('img');
        productImg.setAttribute('src', product.image);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
         const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
       
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
}


renderProducts(productList);