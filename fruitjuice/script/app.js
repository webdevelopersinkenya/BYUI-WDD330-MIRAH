document.addEventListener('DOMContentLoaded', function () {
    // JSON file with product data
    const productData = 'json/products.json';

    // Fetch data from JSON file
    fetch(productData)
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching product data:', error));

    function displayProducts(products) {
        const productContainer = document.getElementById('product-container');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productColor = document.createElement('p');
            productColor.textContent = `Color: ${product.color}`;

            productCard.appendChild(productName);
            productCard.appendChild(productImage);
            productCard.appendChild(productColor);

            productContainer.appendChild(productCard);
        });
    }
});
