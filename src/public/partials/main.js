// main.js
import { loadHeaderFooter } from './utils.js';

// Assuming your templates are in the 'partials' directory
const headerPath = '/partials/header.html';
const footerPath = '/partials/footer.html';

// Call the function to load and render header and footer
loadHeaderFooter(headerPath, footerPath);
