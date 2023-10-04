import { findProductById, getData } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";

let currentProduct = {};

// 
export default async function productDetails(productId){
  currentProduct = await findProductById(productId);
  renderProductDetails();
  document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart(){
    addProductToCart(currentProduct);
}

function addProductToCart(product) {
    setLocalStorage("so-cart", product);
  }


function renderProductDetails(){
  // console log all the used values
  console.log(currentProduct);
  console.log(currentProduct.Image);
  document.querySelector("#productName").innerText = currentProduct.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    currentProduct.NameWithoutBrand;
  document.getElementById("productImage").src = currentProduct.Image;
  document.querySelector("#productImage").alt = currentProduct.Name;
  document.querySelector("#productFinalPrice").innerText = currentProduct.FinalPrice;
  document.querySelector("#productColorName").innerText =
    currentProduct.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML = currentProduct.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = currentProduct.Id;
}