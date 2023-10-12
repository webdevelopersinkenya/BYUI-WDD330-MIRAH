// utils.js
function renderWithTemplate(template, data, container) {
    // Your implementation here
  }
  
  // utils.js
async function loadTemplate(path) {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  }

// utils.js
function loadTemplate(path) {
    return async function () {
      const res = await fetch(path);
      if (res.ok) {
        const html = await res.text();
        return html;
      }
    };
  }
  
  // utils.js
async function loadHeaderFooter(headerPath, footerPath) {
    const headerTemplateFn = loadTemplate(headerPath);
    const footerTemplateFn = loadTemplate(footerPath);
  
    const headerHtml = await headerTemplateFn();
    const footerHtml = await footerTemplateFn();
  
    const headerElement = document.getElementById('main-header');
    const footerElement = document.getElementById('main-footer');
  
    renderWithTemplate(headerHtml, /* optional data */ headerElement);
    renderWithTemplate(footerHtml, /* optional data */ footerElement);
  }
  