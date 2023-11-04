import { check } from "prettier"
import { renderTemplate, getLocalStorage } from "./utils.mjs";
import { checkout } from "./externalServices.mjs";



const BASE_SHIPPING_RATE = 10.00;
const ADDITIONAL_SHIPPING_RATE = 2.00;
const TAX_RATE = 0.6;


function orderSummaryTemplate(subtotal, shipping, total) {
    return `
    <h4>Subtotal: <span>$${subtotal}</span></h4>
    <h4>Shipping: <span>$${shipping}</span></h4>
    <h4>Total: <span>$${total}</span></h4>`

}

const checkoutProcess = {
    key:"",
    outputSelector:"",
    list: [""],
    list2: ["apples", "bananas", "oranges"],
    subtotal: 0,
    shipping: 0,
    total: 0,
    tax: 0,

    init: function(key, outputSelector){
        this.key = key;
        this.outputSelector = outputSelector;
        this.list.push(getLocalStorage(key));
        this.calculateShipping(this.list.length);
        this.calculateTax();
        this.calculateTotal();
    },
    calculateSubtotal: function(){
        // get the cost of each item in the cart then add it to the subtotal
        this.list = getLocalStorage("so-cart");
        let subtotal = 0;
        console.log(this.list);
        // log the type of list
        console.log(typeof this.list);
        console.log(typeof this.list2);
        // we will try to iterate over the list, if it fails we catch it and then we treat it as a singular object.
        try {
          for (const item of this.list) {
            subtotal += item.FinalPrice;
          }
        } catch (error) {
            subtotal += this.list.FinalPrice;
        }

        this.subtotal = subtotal;
    },

    // Shipping is calculated with a base of BASE_SHIPPING_RATE + (ADDITIONAL_SHIPPING_RATE * the Number of items in the cart)
    calculateShipping:function(numItems){
        this.shipping = BASE_SHIPPING_RATE + (ADDITIONAL_SHIPPING_RATE * numItems);
    },
    
    calculateTax: function(){
        var tax = this.subtotal * TAX_RATE;
        return tax;
    },

    calculateTotal: function(){
        this.total = (this.subtotal + this.shipping + this.calculateTax()).toFixed(2);
    },

    getNumberOfItems: function(){
        // get the number of items in the cart
        const cartItems = getLocalStorage("so-cart");
        var numItems = getLocalStorage(this.key).length;
        if(numItems == undefined && cartItems != undefined){
            numItems = 1;
            console.log("numItems" + numItems);
        }
        console.log("numItems" + numItems);
        return numItems;
    },

    displayOrderSummary: function(){
        this.calculateSubtotal();
        var numItems = this.getNumberOfItems();
        console.log(numItems);
        this.calculateShipping(numItems);
        this.calculateTax();
        this.calculateTotal();
        const subtotal = this.subtotal;
        console.log(subtotal);
        const shipping = this.shipping;
        const total = this.total;
        const htmlToRender = orderSummaryTemplate(subtotal, shipping, total);
        console.log(htmlToRender);
        renderTemplate(document.querySelector(this.outputSelector), "beforeend", htmlToRender);
    }
}


export default checkoutProcess;