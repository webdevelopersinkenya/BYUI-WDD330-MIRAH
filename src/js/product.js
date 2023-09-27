import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { productDetails } from "./productDetails.mjs";  
import { getParam } from "./utils.mjs";

const productId = getParam('product');
productDetails(productId);


async function getProducts() {
  const products = await findProductById(productId);
  console.log("Getting products");
  console.log(products);
  return products;
}


// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
