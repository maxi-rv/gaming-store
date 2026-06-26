import { listadoCategorias } from "../gestores/gestorCategorias.js";

import { listadoEtiquetas } from "../gestores/gestorEtiquetas.js";

let productos;
const claveProductos = "productos";
let productosTemplate = [];

window.addEventListener("load", function () {
  productosTemplate = [
    {
      id: crypto.randomUUID(),
      nombre: "Laptop Gamer",
      precio: 1500000,
      stock: 10,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[2].id, listadoEtiquetas()[5].id],
      descripcion:
        "Una computadora portatil estandar con capacidades graficas.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Macbook Pro",
      precio: 2500000,
      stock: 5,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[3].id, listadoEtiquetas()[8].id],
      descripcion: "La oferta portatil de apple para profesionales.",
    },
  ];
  productos =
    JSON.parse(localStorage.getItem(claveProductos)) || productosTemplate;
});

export function agregarProducto(
  nombre,
  precio,
  stock,
  img,
  categoria,
  etiquetas,
  descripcion,
) {
  let producto = crearProducto(
    nombre,
    precio,
    stock,
    img,
    categoria,
    etiquetas,
    descripcion,
  );
  productos.push(producto);
  localStorage.setItem(claveProductos, JSON.stringify(productos));
  console.log(productos);
}

export function editarProducto(
  id,
  nombre,
  precio,
  stock,
  img,
  categoria,
  etiquetas,
  descripcion,
) {
  const index = productos.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    productos[index].nombre = nombre;
    productos[index].precio = precio;
    productos[index].stock = stock;
    productos[index].img = img;
    productos[index].categoria = categoria;
    productos[index].etiquetas = etiquetas;
    productos[index].descripcion = descripcion;
    localStorage.setItem(claveProductos, JSON.stringify(productos));
  }
}

export function eliminarProducto(id) {
  productos = productos.filter((prodEncontrado) => prodEncontrado.id !== id);

  localStorage.setItem(claveProductos, JSON.stringify(productos));
}

export function listadoProductos() {
  return productos;
}

export function conseguirProducto(id) {
  return productos.find((prod) => prod.id === id) || null;
}

function crearProducto(
  nombre,
  precio,
  stock,
  img,
  categoria,
  etiquetas,
  descripcion,
) {
  let producto = {
    id: crypto.randomUUID(),
    nombre: nombre,
    precio: precio,
    stock: stock,
    img: img,
    categoria: categoria,
    etiquetas: etiquetas,
    descripcion: descripcion,
  };
  return producto;
}
