import { addProduct, allProducts } from "../managers/productsManager.js";

import { addToCart } from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

import { showToast } from "../catalog/catalogToasts.js";
import { getCategory } from "../managers/categoriesManager.js";

// Tabla tBody
const catalog = document.getElementById("cardContainer");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  const products = allProducts();
  loadCatalog(products);
});

export function loadCatalog(products) {
  catalog.innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("col");

    catalog.appendChild(containerDiv);

    const card = document.createElement("div");
    card.className = "card shadow border-0 m-1 ";
    containerDiv.appendChild(card);

    const image = document.createElement("img");
    image.src = products[index].img;
    image.classList.add("card-img-top");
    image.style = "height: 12rem;";
    card.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const title = document.createElement("h4");
    title.innerHTML = products[index].name;
    title.className = "card-title";
    title.style.maxHeight = "5rem";
    cardBody.appendChild(title);

    const price = document.createElement("h3");
    price.className = "justify-content-center mb-3 text-warning-emphasis";
    price.innerHTML = "$" + products[index].price;
    cardBody.appendChild(price);

    const inputRow = document.createElement("div");
    inputRow.className = "d-flex justify-content-center flex-nowrap";
    cardBody.appendChild(inputRow);

    const inputGroupCart = document.createElement("div");
    inputGroupCart.className = "input-group justify-content-center flex-nowrap";
    inputGroupCart.style = "max-width: 150px;";
    inputRow.appendChild(inputGroupCart);

    const cartButton = document.createElement("button");
    cartButton.className = "btn btn-outline-warning rounded-start-pill";
    cartButton.type = "button";
    cartButton.setAttribute("data-identificador", products[index].id);
    inputGroupCart.appendChild(cartButton);

    const iconoCarrito = document.createElement("i");
    iconoCarrito.className = "bi bi-cart-plus";
    cartButton.appendChild(iconoCarrito);

    const inputQuantity = document.createElement("input");
    inputQuantity.className =
      "form-control border-warning-subtle rounded-end-pill flex-grow-1";
    inputQuantity.style = "min-width: 50px; max-width: 50%";
    inputQuantity.type = "number";
    if (products[index].stock > 0) {
      inputQuantity.value = 1;
      inputQuantity.min = 1;
    } else {
      inputQuantity.value = 0;
      inputQuantity.min = 0;
      inputQuantity.disabled = true;
      cartButton.disabled = true;
    }
    inputQuantity.max = products[index].stock;
    inputGroupCart.appendChild(inputQuantity);

    const inputGroupStock = document.createElement("div");
    inputGroupStock.className =
      "input-group justify-content-center text-nowrap flex-nowrap";
    inputGroupStock.style = "max-width: 150px;";
    inputRow.appendChild(inputGroupStock);

    const labelStock = document.createElement("span");
    labelStock.className =
      "input-group-text border-warning-subtle rounded-start-pill";
    labelStock.innerHTML = "Stock";
    inputGroupStock.appendChild(labelStock);

    const spanStock = document.createElement("span");
    spanStock.className =
      "input-group-text border-warning-subtle rounded-end-pill";
    spanStock.style = "min-width: 50px;";
    spanStock.innerHTML = products[index].stock;
    inputGroupStock.appendChild(spanStock);

    cartButton.addEventListener("click", function (event) {
      const productID = cartButton.getAttribute("data-identificador");
      const quantity = inputQuantity.value;
      showToast();
      addToCart(productID, quantity);
      updateCartBadge();
    });
  }
}
