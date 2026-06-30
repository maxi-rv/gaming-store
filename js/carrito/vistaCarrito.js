import {
  agregarAlCarrito,
  editarCantidad,
  eliminarDelCarrito,
  conseguirCarrito,
} from "../gestores/gestorCarrito.js";

// Tabla tBody
const contenedorItems = document.getElementById("contenedorItems");
const totalLabel = document.getElementById("total");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  cargarCarrito();
});

function cargarCarrito() {
  const carrito = conseguirCarrito();
  let total = 0;

  for (let index = 0; index < carrito.length; index++) {
    const divContenedor = document.createElement("div");
    divContenedor.className =
      "row g-0 border-0 m-2 border-bottom border-warning pb-2";
    contenedorItems.appendChild(divContenedor);

    const divImagen = document.createElement("div");
    divImagen.className = "col-12 col-sm-4";
    divContenedor.appendChild(divImagen);

    const imagen = document.createElement("img");
    imagen.className = "img-fluid rounded-3 h-100 object-fit-cover";
    imagen.src = carrito[index].producto.img;
    divImagen.appendChild(imagen);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body col-12 col-sm-8";
    divContenedor.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = carrito[index].producto.nombre;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = carrito[index].producto.descripcion;
    cardBody.appendChild(cardText);

    const divBotones = document.createElement("div");
    divBotones.className =
      "d-flex flex-column flex-md-row align-items-start align-items-md-center col-12 col-md-8";
    cardBody.appendChild(divBotones);

    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-outline-warning rounded-pill";
    botonEliminar.type = "button";
    botonEliminar.setAttribute("data-identificador", carrito[index].id);
    divBotones.appendChild(botonEliminar);

    const iconoEliminar = document.createElement("i");
    iconoEliminar.className = "bi bi-trash";
    botonEliminar.appendChild(iconoEliminar);

    const divSubTotal = document.createElement("div");
    divSubTotal.className =
      "d-flex align-items-center ms-0 ms-md-3 mt-2 mt-md-0 cantidad";

    divBotones.appendChild(divSubTotal);

    const inputCantidad = document.createElement("input");
    inputCantidad.className =
      "form-control border-warning-subtle rounded-pill text-center flex-shrink-0 col-4 col-md-3";
    inputCantidad.type = "number";
    inputCantidad.value = carrito[index].cantidad;
    divSubTotal.appendChild(inputCantidad);

    const pSubTotal = document.createElement("p");
    pSubTotal.className = "mb-0 ms-3 fs-3";
    pSubTotal.innerHTML = "$" + carrito[index].subtotal;
    divSubTotal.appendChild(pSubTotal);

    total += carrito[index].subtotal;
  }

  totalLabel.innerHTML = "$" + total;
}
