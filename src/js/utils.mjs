// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderTemplateList(element, list, where="beforeend", templateFunction, clear=true){
  list.forEach((product) => {
      element.insertAdjacentHTML(where, templateFunction(product));
  })
}

export async function renderTemplate(element, where="beforeend", templateFunction, clear=true){
  if (clear) {
    element.innerHTML = "";
  }
  element.insertAdjacentHTML(where, templateFunction);
}

async function loadTemplate(path) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(path); // Make an HTTP request using fetch
    if (res.ok) {
      const html = await res.text();
      resolve(html);
    } else {
      reject(new Error('Error loading template'));
    }
  });
}

export async function loadHeaderFooter(){
  const headerTemplateFn = await loadTemplate("/partials/header.html");
  const footerTemplateFn = await loadTemplate("/partials/footer.html");
  const headerelement = document.getElementById("main-header");
  const footerelement = document.getElementById("main-footer");
  renderTemplate(headerelement, "beforeend", headerTemplateFn);
  renderTemplate(footerelement, "beforeend", footerTemplateFn);
}

export function alertMessage(message, scroll = true, duration = 3000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  // make sure they see the alert by scrolling to the top of the window
  //we may not always want to do this...so default to scroll=true, but allow it to be passed in and overridden.
  if (scroll) window.scrollTo(0, 0);

  // left this here to show how you could remove the alert automatically after a certain amount of time.
  // setTimeout(function () {
  //   main.removeChild(alert);
  // }, duration);
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}
