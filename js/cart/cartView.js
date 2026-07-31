import {
  editQuantity,
  deleteFromCart,
  getCart,
} from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

const itemsContainer = document.getElementById("contenedorItems");
const totalLabel = document.getElementById("total");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  loadCart();
});

export function loadCart() {
  const cart = getCart();
  let total = 0;

  itemsContainer.innerHTML = "";

  for (let index = 0; index < cart.length; index++) {
    const containerDiv = document.createElement("div");
    containerDiv.className =
      "row g-0 border-0 m-2 border-bottom border-warning pb-2";
    itemsContainer.appendChild(containerDiv);

    const divImage = document.createElement("div");
    divImage.className = "col-4 col-sm-3";
    containerDiv.appendChild(divImage);

    const image = document.createElement("img");
    image.className = "img-fluid rounded-2 h-100 object-fit-cover";
    image.src = cart[index].product.img;
    divImage.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body col-8 col-sm-9";
    containerDiv.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = cart[index].product.name;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = cart[index].product.description;
    cardBody.appendChild(cardText);

    const divButtons = document.createElement("div");
    divButtons.className =
      "d-flex flex-row align-items-start align-items-center gap-1";
    cardBody.appendChild(divButtons);

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-outline-danger rounded-pill";
    deleteButton.type = "button";
    deleteButton.setAttribute("data-identificador", cart[index].id);
    divButtons.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
      const itemCartID = deleteButton.getAttribute("data-identificador");
      deleteFromCart(itemCartID);
      updateCartBadge();
      loadCart();
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "bi bi-trash";
    deleteButton.appendChild(deleteIcon);

    const subTotalID = document.createElement("div");
    subTotalID.className = "d-flex align-items-center ms-0 ms-md-3  cantidad";
    divButtons.appendChild(subTotalID);

    const quantityInput = document.createElement("input");
    quantityInput.className =
      "form-control border-warning-subtle rounded-pill text-center flex-shrink-0 col-3";
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.max = Number(cart[index].product.stock);
    quantityInput.value = Number(cart[index].quantity);
    quantityInput.setAttribute("data-identificador", cart[index].id);
    subTotalID.appendChild(quantityInput);

    quantityInput.addEventListener("input", (event) => {
      const idItemCarrito = quantityInput.getAttribute("data-identificador");
      editQuantity(idItemCarrito, Number(quantityInput.value));
      updateCartBadge();
      loadCart();
    });

    const pSubTotal = document.createElement("p");
    pSubTotal.className = "mb-0 ms-3 fs-3";
    pSubTotal.innerHTML = "$" + cart[index].subtotal;
    subTotalID.appendChild(pSubTotal);
    total += cart[index].subtotal;
  }

  totalLabel.innerHTML = "$" + total;
}
