import { loadCategories, loadTags } from "../commons/loaderCategoryTags.js";

import { addProduct } from "../managers/productsManager.js";

import { cargarTabla } from "../adminAccounts/adminAccountsTable.js";

import {
  validateData,
  clearValidation,
} from "../adminProductos/productsValidation.js";

const formAltaProducto = document.getElementById("formAltaProducto");
const name_producto = document.getElementById("input_nombre_producto");
const precio_producto = document.getElementById("input_precio");
const stock_producto = document.getElementById("input_stock");
const imagen_producto = document.getElementById("select_imagen");
const categoria_producto = document.getElementById("select_categorias");
const contenedor_de_etiquetas = document.getElementById(
  "contenedor_de_etiquetas",
);
const descripcion_producto = document.getElementById("input_descripcion");

const error_nombre_producto = document.getElementById("error_nombre_producto");
const error_precio_producto = document.getElementById("error_precio_producto");
const error_stock_producto = document.getElementById("error_stock_producto");
const error_img_producto = document.getElementById("error_img_producto");
const error_categoria_producto = document.getElementById(
  "error_categoria_producto",
);
const error_descripcion_producto = document.getElementById(
  "error_descripcion_producto",
);

window.addEventListener("load", function () {
  inicializar();
  cargar_etiquetas(contenedor_de_etiquetas);
  cargar_categorias(categoria_producto);
});

function inicializar() {
  formAltaProducto.addEventListener("submit", function (event) {
    event.preventDefault();

    clearValidation();

    let validacionFormulario = validateData(
      name_producto,
      error_nombre_producto,
      precio_producto,
      error_precio_producto,
      stock_producto,
      error_stock_producto,
      imagen_producto,
      error_img_producto,
      categoria_producto,
      error_categoria_producto,
      descripcion_producto,
      error_descripcion_producto,
    );

    if (validacionFormulario) {
      agregarProducto(
        name_producto.value,
        Number(precio_producto.value),
        Number(stock_producto.value),
        imagen_producto.value,
        categoria_producto.value,
        obtener_etiquetas(contenedor_de_etiquetas),
        descripcion_producto.value.trim(),
      );
      alert("Producto Registrado Correctamente.");
      formAltaProducto.reset();
      clearValidation();
      cargarTabla();
    }
  });
}

function obtener_etiquetas() {
  const checkboxes = contenedor_de_etiquetas.querySelectorAll(
    '#formAltaProducto input[type="checkbox"]',
  );

  console.log(checkboxes);

  const etiquetas = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      etiquetas.push(checkbox.getAttribute("data-identificador"));
    }
  });
  console.log(etiquetas);
  return etiquetas;
}
