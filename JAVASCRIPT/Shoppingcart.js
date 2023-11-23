import {cart, removeFromCart} from '../JAVASCRIPT/cart.js';
import {products} from '../JAVASCRIPT/data.js';

/*cartsummaryHTML*/
function cartsummaryfunction(){
let cartsummaryHTML = '';

cart.forEach((cartItem) =>{
    const productId = cartItem.productName;
    let machingProducts;
    products.forEach((products) =>{
        if(products.domname === productId){
            machingProducts = products;
        }
    });

    cartsummaryHTML +=`
      <div class="cartitems cart-${machingProducts.domname}">
        <div class="cartitemdiv">
            <div class="leftitemside">
            <div class="productname"><span>${machingProducts.name}</span></div>
            <div class="productimgdiv">
            <img src=../${machingProducts.image} alt=${machingProducts.domname} />
            </div>
            </div>
            <div class="rightitemside">
            <div class="righttopdiv"><div class="itemcost">$${(machingProducts.pricecents / 100).toFixed(2)}</div></div>
            <div class="rightmiddlediv">
            <div class="productlike"><i class="fa-solid fa-heart"></i></div>
            <div class="cancelitemdiv" data-product-id="${machingProducts.domname}">
            <i class="fa-solid fa-trash-can"></i>
            </div>
            </div>
            <div class="rightbottomdiv">
            <div class="item-quantity">
            <select>
            <option selected value="0">${cartItem.quantity}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
            </div>
            <span>Nu besteld, morgen in huis</span>
            </div>
            </div>
        </div>
      </div>`;
});
document.querySelector(".cartitems").innerHTML = cartsummaryHTML;
document.querySelectorAll(".cancelitemdiv").forEach((link) =>{
  link.addEventListener("click", () =>{
  const productId = link.dataset.productId;
  removeFromCart(productId);
  document.querySelector(`.cart-${productId}`).remove();
  overviewsurraryfunction();
  console.log(cartsummaryHTML)
  });
});
function nothingincart ()
{if (!cartsummaryHTML){
  document.querySelector(".cartitems").innerHTML = ` <div class="nothingincart">
  <span>Shoppingcart is empty</span></div>`;
};};
nothingincart();
};
cartsummaryfunction();
/*cartsummaryHTML*/

/*overviewsummaryHTML*/
function overviewsurraryfunction() {
  let productpricecents = 0;
  let shipmentpricecents = 0;
  cart.forEach((cartItem) =>{
    let machingProducts;
    products.forEach((products) =>{
        if(products.domname === cartItem.productName){
            machingProducts = products;
    }});
    productpricecents += machingProducts.pricecents * cartItem.quantity;
    shipmentpricecents += 500 * cartItem.quantity;
    });
  document.querySelector(".articlescost").innerHTML = ` $${(productpricecents/ 100).toFixed(2)}`;
  document.querySelector(".shipmentcost").innerHTML = ` $${(shipmentpricecents/ 100).toFixed(2)}`;
  document.querySelector(".totalcost").innerHTML = ` $${((shipmentpricecents+productpricecents)/ 100).toFixed(2)}`;
};

overviewsurraryfunction()
/*overviewsummaryHTML*/