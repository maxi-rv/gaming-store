import { conseguirProducto } from "../gestores/gestorProductos.js";

let carrito;
let claveCarrito = "carrito";

window.addEventListener("load", function () {
  //TO-DO: Cargar carrito de sesion
  carrito = JSON.parse(localStorage.getItem(claveCarrito)) || [];
  localStorage.setItem(claveCarrito, JSON.stringify(carrito));
});

export function agregarAlCarrito(idProducto, cantidad) {
  let itemCarrito = encontrarItemCarritoPorProducto(idProducto);
  console.log(itemCarrito);
  if (itemCarrito != null) {
    sumarCantidad(itemCarrito.id, cantidad);
  } else {
    itemCarrito = crearItemCarrito(idProducto, cantidad);
    carrito.push(itemCarrito);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
  console.log(carrito);
}

export function sumarCantidad(idItemCarrito, cantidad) {
  const index = carrito.findIndex(
    (itemCarrito) => itemCarrito.id === idItemCarrito,
  );
  if (index !== -1) {
    carrito[index].cantidad += Number(cantidad);
    carrito[index].subtotal =
      Number(carrito[index].cantidad) * Number(carrito[index].producto.precio);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
}

export function editarCantidad(idItemCarrito, cantidad) {
  const index = carrito.findIndex(
    (itemCarrito) => itemCarrito.id === idItemCarrito,
  );
  if (index !== -1) {
    carrito[index].cantidad = Number(cantidad);
    carrito[index].subtotal =
      Number(carrito[index].cantidad) * Number(carrito[index].producto.precio);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
}

export function eliminarDelCarrito(idItemCarrito) {
  itemCarrito = carrito.filter(
    (itemEncontrado) => itemEncontrado.id !== idItemCarrito,
  );
  localStorage.setItem(claveCarrito, JSON.stringify(carrito));
}

export function conseguirItemCarrito(idItemCarrito) {
  return carrito.find((item) => item.id === idItemCarrito) || null;
}

export function conseguirCarrito() {
  return carrito;
}

function encontrarItemCarritoPorProducto(idProducto) {
  return carrito.find((item) => item.producto.id === idProducto) || null;
}

function crearItemCarrito(idProducto, cantidad) {
  let producto = conseguirProducto(idProducto);
  let itemCarrito = {
    id: crypto.randomUUID(),
    producto: producto,
    cantidad: Number(cantidad),
    subtotal: Number(cantidad) * Number(producto.precio),
  };

  return itemCarrito;
}
