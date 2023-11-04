import { getProductsByCategory } from "./externalServices.mjs";
import { renderTemplateList, renderTemplate } from "./utils.mjs";
// Given a selector and aproduct category we want to get the list of products from the json.
export default async function productList(selector, category) {
    // get the actual element from the DOM using the given selector
    const element = document.querySelector(selector);
    const headerelement = document.querySelector(".products-header");
    // Get the list of all products from the tents.json file
    const listOfProducts = await getProductsByCategory(category);
    console.log(category);
    console.log(listOfProducts);
    // Add the products to the DOM
    renderTemplate(headerelement, "beforeend", `Top Products: ${category}`);
    renderTemplateList(element, listOfProducts.slice(0,8), "beforeend", productCardTemplate);
}

function productCardTemplate(product)
{
    return `
    <li class="product-card">
        <a href="/product_pages/index.html?product=${product.Id}">
        <img
            src="${product.Images.PrimaryMedium}"
            alt="${product.Name}"
        />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">${product.FinalPrice}</p>
        </a>
    </li>
    `
}