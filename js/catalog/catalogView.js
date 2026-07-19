import { addProduct, allProducts } from "../managers/productsManager.js";

import {
  addToCart,
  getCartItemByProductID,
  isProductInCart,
  deleteFromCart,
} from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

import { getCategory } from "../managers/categoriesManager.js";

// Tabla tBody
const catalog = document.getElementById("catalog");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  const products = allProducts();
  loadCatalog(products);
});

function createProductCard(product) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("container", "col", "m-0");
  cardContainer.style.flex = "0 0 300px";
  cardContainer.style.maxWidth = "300px";

  const card = document.createElement("div");
  card.className = "card shadow border-0 my-3 ";
  card.style.height = "340px";
  cardContainer.appendChild(card);

  // Add image as top section of the card.
  card.appendChild(createProductImage(product));

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center";
  card.appendChild(cardBody);

  // Add title
  cardBody.appendChild(createProductTitle(product));

  // Add price
  cardBody.appendChild(createProductPrice(product));

  return cardContainer;
}

function createProductImage(product) {
  const image = document.createElement("img");
  image.src = product.img;
  image.classList.add("card-img-top");
  image.style = "height: 12rem;";
  return image;
}

function createProductTitle(product) {
  const title = document.createElement("h4");
  title.innerHTML = product.name;
  title.className = "card-title";
  title.style.maxHeight = "5rem";
  return title;
}

function createProductPrice(product) {
  const price = document.createElement("h3");
  price.className = "justify-content-center mb-3 text-warning-emphasis";
  price.innerHTML = "$" + product.price;
  return price;
}

// ===== Main Function =====

export function loadCatalog(products) {
  // Make catalog responsive with flex-wrap and centered
  catalog.className = "d-flex flex-wrap justify-content-center ";
  //catalog.style.gap = "10px";
  catalog.innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    const cardContainer = createProductCard(product);
    catalog.appendChild(cardContainer);
  }
}
