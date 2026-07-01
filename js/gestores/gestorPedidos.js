import { conseguir_usuario_iniciado } from "../gestores/gestor_sesion.js";

let pedidos;
let clavePedidos = "pedidos";

window.addEventListener("load", function () {
  pedidos = JSON.parse(localStorage.getItem(clavePedidos)) || [];
  localStorage.setItem(clavePedidos, JSON.stringify(pedidos));
});

export function agregarPedido(carrito) {
  const idUsuario = conseguir_usuario_iniciado();

  if (idUsuario != null) {
    const pedido = crearPedido(idUsuario, carrito);
    pedidos.push(pedido);
    localStorage.setItem(clavePedidos, JSON.stringify(pedidos));
  }
}

function crearPedido(idUsuario, carrito) {
  let pedido = {
    id: crypto.randomUUID(),
    idUsuario: idUsuario,
    carrito: carrito,
  };

  return pedido;
}
