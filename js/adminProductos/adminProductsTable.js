import {
  loadCategories,
  loadSelectedTags,
} from "../commons/loaderCategoryTags.js";

import {
  allProducts,
  editProduct,
  deleteProduct,
  getProduct,
} from "../managers/productsManager.js";

import {
  validateData,
  clearValidation,
} from "../adminProductos/productsValidation.js";

import { getCategory } from "../managers/categoriesManager.js";
import { getTag } from "../managers/tagsManager.js";

// Modal
const modalEdicionProducto = document.getElementById("modalEdicionProducto");

// Tabla tBody
const tbodyProductos = document.getElementById("tbodyProductos");

// Constantes Form Edicion Producto
const formEdicionProducto = document.getElementById("formEdicionProducto");
const input_nombre_edicion_producto = document.getElementById(
  "input_nombre_edicion_producto",
);
const input_precio_edicion_producto = document.getElementById(
  "input_precio_edicion_producto",
);
const input_stock_edicion_producto = document.getElementById(
  "input_stock_edicion_producto",
);
const select_imagen_edicion_producto = document.getElementById(
  "select_imagen_edicion_producto",
);
const select_categoria_edicion_producto = document.getElementById(
  "select_categoria_edicion_producto",
);
const contenedor_de_etiquetas_edicion_producto = document.getElementById(
  "contenedor_de_etiquetas_edicion_producto",
);
const input_descripcion_edicion_producto = document.getElementById(
  "input_descripcion_edicion_producto",
);
const buttonEdicionProducto = document.getElementById("buttonEdicionProducto");

const error_nombre_edicion_producto = document.getElementById(
  "error_nombre_edicion_producto",
);
const error_precio_edicion_producto = document.getElementById(
  "error_precio_edicion_producto",
);
const error_stock_edicion_producto = document.getElementById(
  "error_stock_edicion_producto",
);
const error_img_edicion_producto = document.getElementById(
  "error_img_edicion_producto",
);
const error_categoria_edicion_producto = document.getElementById(
  "error_categoria_edicion_producto",
);
const error_descripcion_edicion_producto = document.getElementById(
  "error_descripcion_edicion_producto",
);

window.addEventListener("load", function () {
  inicializar();
  loadTable();
  loadCategories(select_categoria_edicion_producto);
});

function inicializar() {
  modalEdicionProducto.addEventListener("shown.bs.modal", function (event) {
    const boton = event.relatedTarget;
    const id = boton.getAttribute("data-identificador");
    const producto = getProduct(id);

    input_nombre_edicion_producto.value = producto.name;
    input_precio_edicion_producto.value = producto.price;
    input_stock_edicion_producto.value = producto.stock;
    select_imagen_edicion_producto.value = producto.img;
    select_categoria_edicion_producto.value = producto.category;
    loadSelectedTags(contenedor_de_etiquetas_edicion_producto, producto.tags);
    input_descripcion_edicion_producto.value = producto.description;

    buttonEdicionProducto.setAttribute("data-identificador", id);
  });

  formEdicionProducto.addEventListener("submit", function (event) {
    event.preventDefault();

    clearValidation();

    let validacionFormulario = validateData(
      input_nombre_edicion_producto,
      error_nombre_edicion_producto,
      input_precio_edicion_producto,
      error_precio_edicion_producto,
      input_stock_edicion_producto,
      error_stock_edicion_producto,
      select_imagen_edicion_producto,
      error_img_edicion_producto,
      select_categoria_edicion_producto,
      error_categoria_edicion_producto,
      input_descripcion_edicion_producto,
      error_descripcion_edicion_producto,
    );

    if (validacionFormulario) {
      editProduct(
        buttonEdicionProducto.getAttribute("data-identificador"),
        input_nombre_edicion_producto.value,
        Number(input_precio_edicion_producto.value),
        Number(input_stock_edicion_producto.value),
        select_imagen_edicion_producto.value,
        select_categoria_edicion_producto.value,
        getTags(contenedor_de_etiquetas_edicion_producto),
        input_descripcion_edicion_producto.value.trim(),
      );
      formEdicionProducto.reset();
      buttonEdicionProducto.removeAttribute("data-identificador");
      clearValidation();
      loadTable();
    }
  });
}

/*
  Elimina y vuelve a generar la tabla completa.
*/
export function loadTable() {
  let productos = allProducts();
  tbodyProductos.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = producto.name;

    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = producto.price;

    const tdStock = document.createElement("td");
    tdStock.textContent = producto.stock;

    const tdImagen = document.createElement("td");
    const img = document.createElement("img");
    img.src = producto.img;
    img.style = "width: 150px";
    tdImagen.appendChild(img);

    const tdCategoria = document.createElement("td");
    let category = getCategory(producto.category);
    if (category) {
      tdCategoria.textContent = category.name;
    }

    const tdEtiquetas = document.createElement("td");
    let tags = producto.tags;

    for (let index = 0; index < tags.length; index++) {
      let etiquetaEncontrada = conseguirEtiqueta(tags[index]);
      if (etiquetaEncontrada) {
        let nombreEtiqueta = etiquetaEncontrada.name;
        if (index + 1 == tags.length) {
          tdEtiquetas.textContent += nombreEtiqueta;
        } else {
          tdEtiquetas.textContent += nombreEtiqueta + ", ";
        }
      }
    }

    const tdDescripcion = document.createElement("td");
    tdDescripcion.textContent = producto.description;

    const tdAcciones = document.createElement("td");
    let botonEdicion = createEditionButton("modalEdicionProducto", producto.id);
    let botonEliminar = createDeleteButton();

    tdAcciones.appendChild(botonEdicion);
    tdAcciones.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function (event) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        deleteProduct(producto.id);
        loadTable();
      }
    });

    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdStock);
    tr.appendChild(tdImagen);
    tr.appendChild(tdCategoria);
    tr.appendChild(tdEtiquetas);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);

    tbodyProductos.appendChild(tr);
  }
}

function createEditionButton(idModal, idProducto) {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-warning m-1 text-nowrap";
  boton.setAttribute("data-bs-toggle", "modal");
  boton.setAttribute("data-bs-target", "#" + idModal);
  boton.setAttribute("data-identificador", idProducto);

  let i = document.createElement("i");
  i.className = "bi bi-pencil-square";

  let span = document.createElement("span");
  span.innerHTML = "Modify";

  boton.appendChild(i);
  boton.appendChild(span);

  return boton;
}

function createDeleteButton() {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-danger m-1";

  let i = document.createElement("i");
  i.className = "bi bi-trash";

  boton.appendChild(i);

  return boton;
}

function getTags() {
  const checkboxes = contenedor_de_etiquetas_edicion_producto.querySelectorAll(
    '#formEdicionProducto input[type="checkbox"]',
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
