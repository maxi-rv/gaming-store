import {
  cargar_categorias,
  cargar_etiquetas,
} from "../adminProductos/importar_etiquetas_producto.js";

import {
  listadoProductos,
  conseguirProducto,
} from "../gestores/gestorProductos.js";

const formFiltros = document.getElementById("formFiltros");
const select_categorias = document.getElementById("select_categorias");
const contenedor_de_etiquetas = document.getElementById(
  "contenedor_de_etiquetas",
);
const conStock = document.getElementById("conStock");
const botonAplicarFiltros = document.getElementById("botonAplicarFiltros");

// Tabla tBody
const catalogo = document.getElementById("cardContainer");

window.addEventListener("load", function () {
  inicializar();
  cargarCatalogo();
  cargar_categorias(select_categorias);
  cargar_etiquetas(contenedor_de_etiquetas);
});

function inicializar() {
  formFiltros.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

function cargarCatalogo() {
  const productos = listadoProductos();
  catalogo.innerHTML = "";

  for (let index = 0; index < productos.length; index++) {
    const divContenedor = document.createElement("div");
    divContenedor.classList.add("col");

    catalogo.appendChild(divContenedor);

    const card = document.createElement("div");
    card.className = "card shadow border-0 m-1 ";
    card.style = "min-height: 550px;";
    divContenedor.appendChild(card);

    const imagen = document.createElement("img");
    imagen.src = productos[index].img;
    imagen.classList.add("card-img-top");
    card.appendChild(imagen);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const titulo = document.createElement("h4");
    titulo.innerHTML = productos[index].nombre;
    titulo.classList.add("card-title");
    cardBody.appendChild(titulo);

    const descripcion = document.createElement("p");
    descripcion.innerHTML = productos[index].descripcion;
    descripcion.classList.add("card-text");
    cardBody.appendChild(descripcion);

    const precio = document.createElement("h3");
    precio.className = "justify-content-center mb-3 text-warning-emphasis";
    precio.innerHTML = "$" + productos[index].precio;
    cardBody.appendChild(precio);

    const inputRow = document.createElement("div");
    inputRow.className = "d-flex justify-content-center flex-nowrap";
    cardBody.appendChild(inputRow);

    const inputGroupCarrito = document.createElement("div");
    inputGroupCarrito.className =
      "input-group justify-content-center flex-nowrap";
    inputGroupCarrito.style = "max-width: 150px;";
    inputRow.appendChild(inputGroupCarrito);

    const botonCarrito = document.createElement("button");
    botonCarrito.className = "btn btn-outline-warning rounded-start-pill";
    botonCarrito.type = "button";
    inputGroupCarrito.appendChild(botonCarrito);

    const iconoCarrito = document.createElement("i");
    iconoCarrito.className = "bi bi-cart-plus";
    botonCarrito.appendChild(iconoCarrito);

    const inputCantidad = document.createElement("input");
    inputCantidad.className =
      "form-control border-warning-subtle rounded-end-pill flex-grow-1";
    inputCantidad.style = "min-width: 50px; max-width: 50%";
    inputCantidad.type = "number";
    inputCantidad.value = 1;
    inputGroupCarrito.appendChild(inputCantidad);

    const inputGroupStock = document.createElement("div");
    inputGroupStock.className =
      "input-group justify-content-center text-nowrap flex-nowrap";
    inputGroupStock.style = "max-width: 150px;";
    inputRow.appendChild(inputGroupStock);

    const labelStock = document.createElement("span");
    labelStock.className =
      "input-group-text border-warning-subtle rounded-start-pill";
    labelStock.innerHTML = "Stock";
    inputGroupStock.appendChild(labelStock);

    const spanStock = document.createElement("span");
    spanStock.className =
      "input-group-text border-warning-subtle rounded-end-pill";
    spanStock.style = "min-width: 50px;";
    spanStock.innerHTML = productos[index].stock;
    inputGroupStock.appendChild(spanStock);

    botonCarrito.addEventListener("click", function (event) {
      //TODO: añadir a carrito con productos[index].id y inputCantidad.value
    });
  }
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
