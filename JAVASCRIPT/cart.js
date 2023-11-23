/*localStorage.clear();*/

/*Standard shoppingcart*/
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){

cart = [
  {productName: "Sony-A7-IV",
  quantity: 1

}]};
/*Standard shoppingcart*/


/*storage cart function*/
function savetostorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};
/*storage cart function*/


export function clickcartbutton(productName){
 let matchingItem;

 cart.forEach((cartItem)=>{
   if(productName === cartItem.productName){
     matchingItem = cartItem;
   }});

   if(matchingItem){
     matchingItem.quantity += 1;
   } else{
       cart.push({
   productName: productName,
   quantity: 1
 });}
 savetostorage();
};

export function removeFromCart(productId) {
  const newCart=[];
  cart.forEach((cartItem) =>{
    if (cartItem.productName !== productId){
      newCart.push(cartItem);
    }});
  cart = newCart;
  savetostorage();
};

