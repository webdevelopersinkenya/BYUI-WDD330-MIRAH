// featured.js
document.addEventListener('DOMContentLoaded', function () {
    // JSON file with featured images data
    const featuredImagesData = 'json/featuredImages.json';

    // Fetch data from JSON file
    fetch(featuredImagesData)
        .then(response => response.json())
        .then(featuredImages => displayFeaturedImages(featuredImages))
        .catch(error => console.error('Error fetching featured images data:', error));

    function displayFeaturedImages(featuredImages) {
        const productsImagesContainer = document.getElementById('products-images');

        featuredImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.alt;

            productsImagesContainer.appendChild(imgElement);
        });
    }
});
