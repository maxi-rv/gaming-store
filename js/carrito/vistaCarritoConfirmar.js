import {
  conseguirCarrito,
  confirmarCarrito,
  vaciarCarrito,
} from "../gestores/gestorCarrito.js";

import { agregarPedido } from "../gestores/gestorPedidos.js";

import { actualizarCarritoBadge } from "../carritoBadge.js";

import { cargarCarrito } from "../carrito/vistaCarrito.js";

const botonFinalizarCompra = document.getElementById("botonFinalizarCompra");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  inicializarBotonFinalizarCompra();
});

function inicializarBotonFinalizarCompra() {
  botonFinalizarCompra.addEventListener("click", function (event) {
    const carrito = conseguirCarrito();

    const carritoConfirmado = confirmarCarrito();
    agregarPedido(carritoConfirmado);

    actualizarCarritoBadge();
    cargarCarrito();
  });
}
