import { addProduct, allProducts } from "../managers/productsManager.js";

import { addToCart } from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

// Card Containers
const rowCardsA = document.getElementById("cardContainerA");
const rowCardsB = document.getElementById("cardContainerB");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  const products = getRandomElements(allProducts(), 16);
  loadCards(products.slice(0, 8), rowCardsA);
  loadCards(products.slice(8, 16), rowCardsB);
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

function loadCards(products, rowCards) {
  rowCards.innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    const cardContainer = document.createElement("div");
    //containerDiv.className = "col p-2 p-md-3";
    cardContainer.classList.add("container", "col", "my-3");
    cardContainer.style.flex = "0 0 300px";
    cardContainer.style.maxWidth = "300px";

    rowCards.appendChild(cardContainer);

    const card = document.createElement("div");
    card.className = "card shadow border-0 m-1 ";
    card.style.height = "340px";
    cardContainer.appendChild(card);

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

    // Price as footer (always at the bottom)
    const footer = document.createElement("div");
    footer.className = "card-footer text-center bg-transparent border-0";
    card.appendChild(footer);

    const price = document.createElement("h3");
    price.className = "justify-content-center mb-3 text-warning-emphasis";
    price.innerHTML = "$" + products[index].price;
    footer.appendChild(price);
  }
}
