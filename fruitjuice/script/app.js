// Function to fetch fruit juice data from the JSON file
function fetchFruitJuices() {
    return fetch('json/fruitJuices.json')
        .then(response => response.json())
        .then(data => data.fruitJuices)
        .catch(error => console.error('Error fetching fruit juice data:', error));
}

// Function to show the fruit juice selection view (example)
function showFruitJuiceSelectionView(fruitJuices) {
    // Implementation for showing the fruit juice selection view
    console.log('Showing fruit juice selection view:', fruitJuices);
}

// Function to generate and display a list of all fruit juices with their recipes and prices
function showAllFruitJuices(fruitJuices) {
    const allJuicesView = document.getElementById('allJuicesView');
    allJuicesView.style.display = 'block';

    // Create an HTML list of all fruit juices
    const juiceListHTML = fruitJuices.map(juice => {
        return `<li><strong>${juice.name}</strong>: ${juice.recipe} - $${juice.price.toFixed(2)}</li>`;
    }).join('');

    allJuicesView.innerHTML = `
        <h2>All Fruit Juices</h2>
        <ul>${juiceListHTML}</ul>
    `;
}

// Load fruit juice data from the JSON file and start the application
let fruitJuices = [];

fetchFruitJuices()
    .then(data => {
        fruitJuices = data;
        showFruitJuiceSelectionView(fruitJuices);
        // Optionally, you can perform additional actions with the fruitJuices data here
    })
    .catch(error => console.error('Error initializing the application:', error));

// Event listener for a button to show all fruit juices
document.getElementById('showAllJuicesButton').addEventListener('click', function () {
    showAllFruitJuices(fruitJuices);
});
