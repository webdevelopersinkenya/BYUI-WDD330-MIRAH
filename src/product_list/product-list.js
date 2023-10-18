import productList from "../js/productList.mjs";
import { getParam } from "../js/utils.mjs";

const productType = getParam("type");
console.log(productType);
productList(".product-list", productType);


