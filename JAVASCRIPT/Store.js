//localStorage.clear();
import {cart, clickcartbutton} from '../JAVASCRIPT/cart.js';
import {products} from '../JAVASCRIPT/data.js';

/*go back up button*/
    window.onscroll = function scrollFunction() {
      let upbutton1 =  document.querySelector('.upbutton');
      if (document.body.scrollTop > 100 ||document.documentElement.scrollTop > 100) {
        upbutton1.classList.add('scrollup');
      } else {
          upbutton1.classList.remove('scrollup');
      }};
/*go back up button*/

/*filter categories*/
document.querySelector(".filterdiv").addEventListener("click", ()=> {
  document.querySelector(".categories").classList.toggle("movecategories");
});


let filterproducts = JSON.parse(localStorage.getItem('filterproducts'));
if(!filterproducts){
  filterproducts = [...products];}
function savetostoragefilterproducts(){
  localStorage.setItem('filterproducts', JSON.stringify(filterproducts));
}
let filterid = JSON.parse(localStorage.getItem('filterid'));
if(!filterid){
  filterid = null;}
  else{document.querySelector(`.${filterid}`).classList.add("slidebeam");}
function savetostoragefilterid() {
  localStorage.setItem('filterid', JSON.stringify(filterid));
}


document.querySelectorAll(".categories div").forEach((link) =>{
  link.addEventListener("click", ()=> {
    
    filterid = link.dataset.filterId;
    savetostoragefilterid();
    const selectedCategory = document.querySelector(`.${filterid}`);
    document.querySelectorAll(".categories div").forEach((category) => {
      if (category !== selectedCategory) {
        category.classList.remove("slidebeam");
      }});
    if(!document.querySelector(`.${filterid}`).classList.contains("slidebeam")){
    document.querySelector(`.${filterid}`).classList.add("slidebeam");
    filterproducts = products.filter(product => product.category === `${filterid}`);
    }else{
      document.querySelector(`.${filterid}`).classList.remove("slidebeam");
      filterproducts = [...products];
      filterid = null;
      savetostoragefilterid();
    }
    addtostore(filterproducts);
    savetostoragefilterproducts();
    location.reload();
  });
  });
/*filter categories*/

/*movecategory bar*/
    const catdiv = document.querySelector(".catdiv");
    const moveElement = document.querySelector(".moveitem");
    const movefield = document.querySelector(".productfield");
    moveElement.addEventListener("click", () => {catdiv.classList.toggle("moveButton"), movefield.classList.toggle('movemargin')});
/*movecategory bar*/

/*add products in store*/
addtostore()
function addtostore(){
    let producthtml = '';
    filterproducts.forEach((products) => {

    producthtml += `<div class="productdiv">
    <div class="productname"><span>${products.name}</span></div>
    <div class='productimgdiv' data-product-img=${products.image}>
      <img src=../${products.image} alt=${products.domname}/>
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
   document.querySelector('.productfield').innerHTML = producthtml;}
   showproductinfo();
/*add products in store*/
 
/*show productinfo*/
function showproductinfo(){
document.querySelectorAll(".productimgdiv").forEach((img)=>{
  img.addEventListener("click", (event) =>{
  const productimg = img.dataset.productImg;
  let matchinfo;
  products.forEach((products)=>{
    if(productimg == products.image){
    matchinfo = products;
  }});
  
    let productinfohtml=`
    <div class="infotopleft">
      <div class="infoname">${matchinfo.name}</div>
      <div class="infoimg">
        <img src="../${matchinfo.image}" alt="${matchinfo.domname}" />
      </div>
    </div>
    <div class="infotopright">
      <div class="infoprice">$${(matchinfo.pricecents / 100).toFixed(2)}</div>
      <div class="infoinventory">on storage</div>
      <div class="infodelivery">Order now, delivered tomorrow</div>
      <div class="productbuttons">
        <div class="productlike">
          <button><i class="fa-solid fa-heart"></i></button>
        </div>
        <div class="productcart info">
          <button class="Productcartbutton" data-product-name=${matchinfo.domname}>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div class="productdescription">
        <p>Product description</p>
        <div class="descriptiontext">${matchinfo.productdescription}</div>
      </div>
    </div>
    <div class="infobottom">
      <div class="productspecs">
      <p>Product specification</p>
      <div class="specificationtext">${matchinfo.productspecification}</div>
      </div>
    </div>`;
    const productinfo = document.querySelector(".productinfo");
    productinfo.innerHTML = productinfohtml;
    productinfo.classList.toggle("infovisable");
    event.stopPropagation();
    addtocartbutton();
    function closeProductInfo(event) {
      if (!productinfo.contains(event.target)) {
        productinfo.classList.remove("infovisable");
        document.removeEventListener("click", closeProductInfo);
      }};
    document.addEventListener("click", closeProductInfo);
  })});}
/*show productinfo*/

/*update cart quantity in store*/
  updateQuantity();
  function updateQuantity(){
    let quantitytotal = 0;
    cart.forEach((cartItem) =>{
      quantitytotal += cartItem.quantity;
      });
    document.querySelector(".cartquantity").innerHTML = quantitytotal;
    return quantitytotal;
  };
  
  addtocartbutton();
  function addtocartbutton() {
    document.querySelectorAll('.Productcartbutton').forEach((button) => {
      button.removeEventListener("click", handleCartButtonClick);
    });
    document.querySelectorAll('.Productcartbutton').forEach((button) => {
      button.addEventListener("click", handleCartButtonClick);
    });};
  function handleCartButtonClick(event) {
    const productName = event.currentTarget.dataset.productName;
    clickcartbutton(productName);
    updateQuantity();
  }
/*update cart quantity in store*/


