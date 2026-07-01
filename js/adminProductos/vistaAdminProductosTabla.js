import {
  cargar_categorias,
  cargar_etiquetas_seleccionadas,
} from "../adminProductos/importar_etiquetas_producto.js";

import {
  listadoProductos,
  editarProducto,
  eliminarProducto,
  conseguirProducto,
} from "../gestores/gestorProductos.js";

import {
  datos_validos,
  limpiar_estados,
} from "../adminProductos/validacionProductos.js";

import { conseguirCategoria } from "../gestores/gestorCategorias.js";
import { conseguirEtiqueta } from "../gestores/gestorEtiquetas.js";

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
  cargarTabla();
  cargar_categorias(select_categoria_edicion_producto);
});

function inicializar() {
  modalEdicionProducto.addEventListener("shown.bs.modal", function (event) {
    const boton = event.relatedTarget;
    const id = boton.getAttribute("data-identificador");
    const producto = conseguirProducto(id);

    input_nombre_edicion_producto.value = producto.nombre;
    input_precio_edicion_producto.value = producto.precio;
    input_stock_edicion_producto.value = producto.stock;
    select_imagen_edicion_producto.value = producto.img;
    select_categoria_edicion_producto.value = producto.categoria;
    cargar_etiquetas_seleccionadas(
      contenedor_de_etiquetas_edicion_producto,
      producto.etiquetas,
    );
    input_descripcion_edicion_producto.value = producto.descripcion;

    buttonEdicionProducto.setAttribute("data-identificador", id);
  });

  formEdicionProducto.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiar_estados();

    let validacionFormulario = datos_validos(
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
      editarProducto(
        buttonEdicionProducto.getAttribute("data-identificador"),
        input_nombre_edicion_producto.value,
        Number(input_precio_edicion_producto.value),
        Number(input_stock_edicion_producto.value),
        select_imagen_edicion_producto.value,
        select_categoria_edicion_producto.value,
        obtener_etiquetas(contenedor_de_etiquetas_edicion_producto),
        input_descripcion_edicion_producto.value.trim(),
      );
      formEdicionProducto.reset();
      buttonEdicionProducto.removeAttribute("data-identificador");
      limpiar_estados();
      cargarTabla();
    }
  });
}

/*
  Elimina y vuelve a generar la tabla completa.
*/
export function cargarTabla() {
  let productos = listadoProductos();
  tbodyProductos.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = producto.nombre;

    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = producto.precio;

    const tdStock = document.createElement("td");
    tdStock.textContent = producto.stock;

    const tdImagen = document.createElement("td");
    const img = document.createElement("img");
    img.src = producto.img;
    img.style = "width: 150px";
    tdImagen.appendChild(img);

    const tdCategoria = document.createElement("td");
    let categoriaEncontrada = conseguirCategoria(producto.categoria);
    if (categoriaEncontrada) {
      tdCategoria.textContent = categoriaEncontrada.nombre;
    }

    const tdEtiquetas = document.createElement("td");
    let etiquetas = producto.etiquetas;

    for (let index = 0; index < etiquetas.length; index++) {
      let etiquetaEncontrada = conseguirEtiqueta(etiquetas[index]);
      if (etiquetaEncontrada) {
        let nombreEtiqueta = etiquetaEncontrada.nombre;
        if (index + 1 == etiquetas.length) {
          tdEtiquetas.textContent += nombreEtiqueta;
        } else {
          tdEtiquetas.textContent += nombreEtiqueta + ", ";
        }
      }
    }

    const tdDescripcion = document.createElement("td");
    tdDescripcion.textContent = producto.descripcion;

    const tdAcciones = document.createElement("td");
    let botonEdicion = crearBotonEdicion("modalEdicionProducto", producto.id);
    let botonEliminar = crearBotonEliminar();

    tdAcciones.appendChild(botonEdicion);
    tdAcciones.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function (event) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        eliminarProducto(producto.id);
        cargarTabla();
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

function crearBotonEdicion(idModal, idProducto) {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-warning m-1 text-nowrap";
  boton.setAttribute("data-bs-toggle", "modal");
  boton.setAttribute("data-bs-target", "#" + idModal);
  boton.setAttribute("data-identificador", idProducto);

  let i = document.createElement("i");
  i.className = "bi bi-pencil-square";

  let span = document.createElement("span");
  span.innerHTML = "Editar";

  boton.appendChild(i);
  boton.appendChild(span);

  return boton;
}

function crearBotonEliminar() {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-danger m-1";

  let i = document.createElement("i");
  i.className = "bi bi-trash";

  boton.appendChild(i);

  return boton;
}

function obtener_etiquetas() {
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
