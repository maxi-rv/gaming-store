import { addProduct, allProducts } from "../managers/productsManager.js";

import { addToCart } from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

// Card Containers
const cardContainerA = document.getElementById("cardContainerA");
const cardContainerB = document.getElementById("cardContainerB");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  const products = getRandomElements(allProducts(), 16);
  loadCards(products.slice(0, 8), cardContainerA);
  loadCards(products.slice(8, 16), cardContainerB);
});

function getRandomElements(array, n) {
  if (n >= array.length) return [...array];

  const indexes = new Set();
  const result = [];

  while (indexes.size < n) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!indexes.has(randomIndex)) {
      indexes.add(randomIndex);
      result.push(array[randomIndex]);
    }
  }

  return result;
}

function loadCards(products, cardContainer) {
  cardContainer.innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    const containerDiv = document.createElement("div");
    containerDiv.className = "col p-2 p-md-3";

    cardContainer.appendChild(containerDiv);

    const card = document.createElement("div");
    card.className = "card shadow border-0 m-1 ";
    containerDiv.appendChild(card);

    const image = document.createElement("img");
    image.src = products[index].img;
    image.classList.add("card-img-top");
    image.style.height = "12rem";
    card.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const title = document.createElement("h4");
    title.innerHTML = products[index].name;
    title.className = "card-title ";
    title.style.maxHeight = "5rem";
    cardBody.appendChild(title);

    const price = document.createElement("h3");
    price.className = "justify-content-center mb-3 text-warning-emphasis";
    price.innerHTML = "$" + products[index].price;
    cardBody.appendChild(price);
  }
}
