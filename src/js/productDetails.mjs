import { findProductById, getData } from "./productData.mjs";

let currentProductID = 0;
let currentProduct ={};
// 
export default function productDetails(productId){
    currentProductID = productId;
    addToCart();
    renderProductDetails();
}

function addToCart(){
    currentProduct = findProductById(currentProductID);
    addProductToCart(product);
}

function addProductToCart(product) {
    setLocalStorage("so-cart", product);
  }

function renderProductDetails(){
    return `<section class="product-detail">
    <h3 id="brandName">${currentProduct.brand}</h3>
  
    <h2 id="productNameNoBrand" class="divider">${currentProduct.name}</h2>
  
    <img
      class="divider"
      id="productImage"
      src="${currentProduct.image}"
      alt=""
    />
  
    <p class="product-card__price" id="productFinalPrice">${currentProduct.finalPrice}</p>
  
    <p class="product__color" id="productColor">${currentProduct.color}</p>
  
    <p class="product__description" id="productDescription">
    ${currentProduct.description}
    </p>
  
    <div class="product-detail__add">
      <button id="addToCart" data-id="${currentProduct.id}">Add to Cart</button>
    </div>
  </section>`;;
}