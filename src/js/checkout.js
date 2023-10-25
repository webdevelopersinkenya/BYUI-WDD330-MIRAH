import checkoutProcess from "./checkoutProcess.mjs";
import productList from "./checkoutProcess.mjs";
import { getParam } from "./utils.mjs";

checkoutProcess.init("so-cart", "#ordersummary");
checkoutProcess.displayOrderSummary();
