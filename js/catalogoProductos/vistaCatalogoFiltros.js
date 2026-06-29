import {
  cargar_categorias,
  cargar_etiquetas,
} from "../adminProductos/importar_etiquetas_producto.js";

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
  console.log(etiquetas);
  return etiquetas;
}
