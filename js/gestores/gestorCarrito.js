import {
  conseguirProducto,
  editarProducto,
} from "../gestores/gestorProductos.js";

let carrito;
let claveCarrito = "carrito";

window.addEventListener("load", function () {
  //TO-DO: Cargar carrito de sesion
  carrito = JSON.parse(localStorage.getItem(claveCarrito)) || [];
  localStorage.setItem(claveCarrito, JSON.stringify(carrito));
});

export function agregarAlCarrito(idProducto, cantidad) {
  let itemCarrito = encontrarItemCarritoPorProducto(idProducto);

  if (itemCarrito != null) {
    sumarCantidad(itemCarrito.id, cantidad);
  } else {
    itemCarrito = crearItemCarrito(idProducto, cantidad);
    carrito.push(itemCarrito);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
}

function sumarCantidad(idItemCarrito, cantidadASumar) {
  const index = carrito.findIndex(
    (itemCarrito) => itemCarrito.id === idItemCarrito,
  );

  const nuevaCantidad =
    Number(carrito[index].cantidad) + Number(cantidadASumar);
  const stockMax = Number(carrito[index].producto.stock);

  if (index !== -1 && nuevaCantidad <= stockMax) {
    carrito[index].cantidad = nuevaCantidad;
    carrito[index].subtotal =
      Number(carrito[index].cantidad) * Number(carrito[index].producto.precio);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  } else if (index !== -1) {
    carrito[index].cantidad = stockMax;
    carrito[index].subtotal =
      Number(carrito[index].cantidad) * Number(carrito[index].producto.precio);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
}

export function editarCantidad(idItemCarrito, nuevaCantidad) {
  const index = carrito.findIndex(
    (itemCarrito) => itemCarrito.id === idItemCarrito,
  );

  const stockMax = Number(carrito[index].producto.stock);

  if (index !== -1 && nuevaCantidad <= stockMax) {
    carrito[index].cantidad = nuevaCantidad;
    carrito[index].subtotal =
      Number(carrito[index].cantidad) * Number(carrito[index].producto.precio);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  } else if (index !== -1) {
    carrito[index].cantidad = stockMax;
    carrito[index].subtotal =
      Number(carrito[index].cantidad) * Number(carrito[index].producto.precio);
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
}

export function eliminarDelCarrito(idItemCarrito) {
  carrito = carrito.filter(
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

export function confirmarCarrito() {
  for (let index = 0; index < carrito.length; index++) {
    editarProducto(
      carrito[index].producto.id,
      carrito[index].producto.nombre,
      carrito[index].producto.precio,
      carrito[index].producto.stock - carrito[index].cantidad,
      carrito[index].producto.img,
      carrito[index].producto.categoria,
      carrito[index].producto.etiquetas,
      carrito[index].producto.descripcion,
    );
  }
}

export function vaciarCarrito() {
  carrito = [];
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
