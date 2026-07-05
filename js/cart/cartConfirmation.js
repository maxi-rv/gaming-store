import { getCart, closeCart, cleanCart } from "../managers/cartManager.js";

import { addOrder } from "../managers/ordersManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

import { loadCart } from "../cart/cartView.js";

const confirmOrderButton = document.getElementById("botonFinalizarCompra");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  confirmOrderButton.addEventListener("click", function (event) {
    const cart = getCart();
    const closedCart = closeCart();
    addOrder(closedCart);
    updateCartBadge();
    loadCart();
  });
});
