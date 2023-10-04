import { getData } from "./productData.mjs";
// Given a selector and aproduct category we want to get the list of products from the json.
export default async function productList(selector, category) {
    // get the actual element from the DOM using the given selector
    const element = document.querySelector(selector);
    // Get the list of all products from the tents.json file
    const listOfProducts = await getData(category);
    // Add the products to the DOM
    listOfProducts.forEach((product) => {
        element.innerHTML += productCardTemplate(product);
    })
}

function productCardTemplate(product)
{
    return `
    <li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
        <img
            src="${product.Image}"
            alt="${product.Name}"
        />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">${product.FinalPrice}</p>
        </a>
    </li>
    `
}