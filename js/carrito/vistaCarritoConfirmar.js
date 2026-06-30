import {
  conseguirCarrito,
  confirmarCarrito,
  vaciarCarrito,
} from "../gestores/gestorCarrito.js";

import { cargarCarrito } from "../carrito/vistaCarrito.js";

const botonFinalizarCompra = document.getElementById("botonFinalizarCompra");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  inicializarBotonFinalizarCompra();
});

function inicializarBotonFinalizarCompra() {
  botonFinalizarCompra.addEventListener("click", function (event) {
    const carrito = conseguirCarrito();

    confirmarCarrito();
    //TO-DO: Confirmar Carrito y hacer algo antes de vaciarlo! (Asociar pedido al usuario!)

    vaciarCarrito();
    cargarCarrito();
  });
}
