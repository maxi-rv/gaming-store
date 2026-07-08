import { getCart } from "../managers/cartManager.js";

const cartBadge = document.getElementById("carritoBadge");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  updateCartBadge();
});

export function updateCartBadge() {
  const itemsQuantity = getCart().length;
  cartBadge.innerHTML = itemsQuantity;

  if (itemsQuantity < 1) {
    cartBadge.hidden = true;
  } else {
    cartBadge.hidden = false;
  }
}
