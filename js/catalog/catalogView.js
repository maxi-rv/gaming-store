import {
  addProduct,
  allProducts,
  getProduct,
} from "../managers/productsManager.js";

import { openProductDetailModal } from "../productDetailView/productDetailView.js";

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
  cardContainer.dataset.productId = product.id;

  const card = document.createElement("div");
  card.className = "card shadow border-0 my-3";
  card.style.height = "340px";
  // Flex column ensures footer stays at bottom
  card.style.display = "flex";
  card.style.flexDirection = "column";
  cardContainer.appendChild(card);

  // Image (top)
  card.appendChild(createProductImage(product));

  // Card body – takes remaining space
  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center";
  cardBody.style.flex = "1 1 auto"; // fill available space
  card.appendChild(cardBody);

  // Title only in body
  cardBody.appendChild(createProductTitle(product));

  // Price as footer (always at the bottom)
  const footer = document.createElement("div");
  footer.className = "card-footer text-center bg-transparent border-0";
  footer.appendChild(createProductPrice(product));
  card.appendChild(footer);

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
  price.className = "justify-content-center text-warning-emphasis";
  price.innerHTML = "$" + product.price;
  return price;
}

// ===== Main Function =====

export function loadCatalog(products) {
  // Make catalog responsive with flex-wrap and centered
  catalog.className = "d-flex flex-wrap justify-content-center ";
  catalog.innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    const cardContainer = createProductCard(product);
    catalog.appendChild(cardContainer);
  }

  catalog.addEventListener("click", function (e) {
    // Find the closest element with data-product-id
    const card = e.target.closest("[data-product-id]");
    if (!card) return;

    const productId = card.dataset.productId;
    // Fetch product data (from your manager)
    const product = getProduct(productId);
    if (product) {
      openProductDetailModal(product);
    }
  });
}
