import {
  cargar_categorias,
  cargar_etiquetas,
} from "./importar_etiquetas_producto.js";

import { agregarProducto } from "../gestores/gestorProductos.js";

import { cargarTabla } from "../adminProductos/vistaAdminProductosTabla.js";

const name_producto = document.getElementById("input_nombre_producto");
const precio_producto = document.getElementById("input_precio");
const stock_producto = document.getElementById("input_stock");
const imagen_producto = document.getElementById("select_imagen");
const categoria_producto = document.getElementById("select_categorias");
const descripcion_producto = document.getElementById("input_descripcion");

const contenedor_de_etiquetas = document.getElementById(
  "contenedor_de_etiquetas",
);
const select_categorias = document.getElementById("select_categorias");

window.addEventListener("load", function () {
  inicializar();
  cargar_etiquetas(contenedor_de_etiquetas);
  cargar_categorias(select_categorias);
});

function inicializar() {
  const form = document.getElementById("formAltaProducto");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiar_estados();

    if (datos_validos()) {
      agregarProducto(
        name_producto.value,
        Number(precio_producto.value),
        Number(stock_producto.value),
        imagen_producto.value,
        categoria_producto.value,
        obtener_etiquetas(contenedor_de_etiquetas),
        descripcion_producto.value.trim(),
      );
      alert("producto registrado correctamente");
      form.reset();
      limpiar_estados();
      cargarTabla();
    }
  });
}

function limpiar_estados() {
  const inputs = document.querySelectorAll(".form-control, .form-check-input");
  for (const input of inputs) {
    input.classList.remove("is-invalid");
  }
}

function datos_validos() {
  let formulario_valido = true;

  if (validator.isEmpty(name_producto.value.trim())) {
    mostrar_error(
      name_producto,
      "error_nombre_producto",
      "El nombre del producto es obligatorio",
    );
    formulario_valido = false;
  }

  if (
    validator.isEmpty(precio_producto.value.trim()) ||
    Number(precio_producto.value) <= 0
  ) {
    mostrar_error(
      precio_producto,
      "error_precio_producto",
      "Ingrese un precio válido",
    );
    formulario_valido = false;
  }

  if (
    validator.isEmpty(stock_producto.value.trim()) ||
    Number(stock_producto.value) < 0
  ) {
    mostrar_error(
      stock_producto,
      "error_stock_producto",
      "Ingrese un stock válido",
    );
    formulario_valido = false;
  }

  if (imagen_producto.value === "Seleccionar_img") {
    mostrar_error(
      imagen_producto,
      "error_img_producto",
      "Seleccione una imagen",
    );
    formulario_valido = false;
  }

  if (categoria_producto.value === "Seleccionar_categoria") {
    mostrar_error(
      categoria_producto,
      "error_categoria_producto",
      "Seleccione una categoría",
    );
    formulario_valido = false;
  }
  if (validator.isEmpty(descripcion_producto.value.trim())) {
    mostrar_error(
      descripcion_producto,
      "error_descripcion_producto",
      "La descripción es obligatoria",
    );
    formulario_valido = false;
  }

  return formulario_valido;
}

function obtener_etiquetas() {
  const checkboxes = document.querySelectorAll(
    '#formAltaProducto input[type="checkbox"]',
  );

  const etiquetas = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      etiquetas.push(checkbox.id);
    }
  });

  return etiquetas;
}

function mostrar_error(input, id_error, mensaje) {
  input.classList.add("is-invalid");
  document.getElementById(id_error).textContent = mensaje;
}
