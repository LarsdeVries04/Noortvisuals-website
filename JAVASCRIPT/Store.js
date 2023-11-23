     import {cart, clickcartbutton} from '../JAVASCRIPT/cart.js';
     import {products} from '../JAVASCRIPT/data.js';

/*go back up button*/
    window.onscroll = function scrollFunction() {
      let upbutton1 =  document.querySelector('.upbutton');
      if (document.body.scrollTop > 100 ||document.documentElement.scrollTop > 100) {
        upbutton1.classList.add('scrollup');
      } else {
          upbutton1.classList.remove('scrollup');
      }
    };
/*go back up button*/

/*movecategory bar*/
    const catdiv = document.querySelector(".catdiv");
    const moveElement = document.querySelector(".moveitem");
    const movefield = document.querySelector(".productfield");
    moveElement.addEventListener("click", () => {catdiv.classList.toggle("moveButton"), movefield.classList.toggle('movemargin')});
/*movecategory bar*/
   
/*add products in store*/
    let producthtml = '';
    products.forEach((products) => {
    producthtml += `<div class="productdiv">
    <div class="productname"><span>${products.name}</span></div>
    <div class="productimgdiv">
      <img src=../${products.image} alt=${products.domname} />
    </div>
    <div class="productprice">$${(products.pricecents / 100).toFixed(2)}</div>
    <div class="productbuttons">
      <div class="productlike">
        <button><i class="fa-solid fa-heart"></i></button>
      </div>
      <div class="productcart">
        <button class="Productcartbutton" data-product-name=${products.domname}>
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
    </div>`;});
   document.querySelector('.productfield').innerHTML = producthtml;
/*add products in store*/
 
/*update cart quantity in store*/
   function updateQuantity(){
    let quantitytotal = 0;
    cart.forEach((cartItem) =>{
    quantitytotal += cartItem.quantity;
    });
    document.querySelector(".cartquantity").innerHTML = quantitytotal;
    return quantitytotal;
    };
  updateQuantity();
  document.querySelectorAll('.Productcartbutton').forEach((button) => {button.addEventListener("click", () => {
  const productName = button.dataset.productName;
  clickcartbutton(productName);
  updateQuantity();
  });});
/*update cart quantity in store*/