import {
  cargar_categorias,
  cargar_etiquetas,
} from "../adminProductos/importar_etiquetas_producto.js";

import {
  filtrarProductos,
  listadoProductos,
} from "../gestores/gestorProductos.js";

import { cargarCatalogo } from "../catalogoProductos/vistaCatalogoProductos.js";

const formFiltros = document.getElementById("formFiltros");
const select_categorias = document.getElementById("select_categorias");
const contenedor_de_etiquetas = document.getElementById(
  "contenedor_de_etiquetas",
);

const conStock = document.getElementById("conStock");
const botonAplicarFiltros = document.getElementById("botonAplicarFiltros");
const botonLimpiarFiltros = document.getElementById("botonLimpiarFiltros");

window.addEventListener("load", function () {
  inicializar();
  cargar_categorias(select_categorias);
  cargar_etiquetas(contenedor_de_etiquetas);
});

function inicializar() {
  formFiltros.addEventListener("submit", function (event) {
    event.preventDefault();
    const productosFiltrados = filtrarProductos(
      select_categorias.value,
      obtener_etiquetas(),
      conStock.checked,
    );
    cargarCatalogo(productosFiltrados);
  });

  botonLimpiarFiltros.addEventListener("click", function (event) {
    limpiarFiltros();
  });
}

function obtener_etiquetas() {
  const checkboxes = contenedor_de_etiquetas.querySelectorAll(
    'input[type="checkbox"]',
  );

  const etiquetas = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      etiquetas.push(checkbox.getAttribute("data-identificador"));
    }
  });
  return etiquetas;
}

function limpiarFiltros() {
  formFiltros.reset();
  cargarCatalogo(listadoProductos());
}
