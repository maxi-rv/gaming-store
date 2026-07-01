import {
  validarDatos,
  limpiarValidacion,
} from "../adminCategoriasEtiquetas/validacionCategoriaEtiqueta.js";

import {
  agregarEtiqueta,
  listadoEtiquetas,
  editarEtiqueta,
  eliminarEtiqueta,
  conseguirEtiqueta,
} from "../gestores/gestorEtiquetas.js";

// Modal
const modalEdicionEtiqueta = document.getElementById("modalEdicionEtiqueta");

// Tabla tBody
const tbodyEtiquetas = document.getElementById("tbodyEtiquetas");

// Constantes Form Creacion Etiqueta
const formCrearEtiqueta = document.getElementById("formCrearEtiqueta");
const inputNameCrearEtiqueta = document.getElementById(
  "inputNameCrearEtiqueta",
);
const inputDescripcionCrearEtiqueta = document.getElementById(
  "inputDescripcionCrearEtiqueta",
);
const buttonCrearEtiqueta = document.getElementById("buttonCrearEtiqueta");
const invalidNameCrearEtiqueta = document.getElementById(
  "invalidNameCrearEtiqueta",
);
const invalidDescripcionCrearEtiqueta = document.getElementById(
  "invalidDescripcionCrearEtiqueta",
);

// Constantes Form Edicion Etiqueta
const formEdicionEtiqueta = document.getElementById("formEdicionEtiqueta");
const inputNameEdicionEtiqueta = document.getElementById(
  "inputNameEdicionEtiqueta",
);
const inputDescripcionEdicionEtiqueta = document.getElementById(
  "inputDescripcionEdicionEtiqueta",
);
const buttonEdicionEtiqueta = document.getElementById("buttonEdicionEtiqueta");
const invalidNameEdicionEtiqueta = document.getElementById(
  "invalidNameEdicionEtiqueta",
);
const invalidDescripcionEdicionEtiqueta = document.getElementById(
  "invalidDescripcionEdicionEtiqueta",
);

window.addEventListener("load", function () {
  inicializarCrearEtiqueta();
  inicializarEdicionEtiqueta();
  cargarTablaEtiquetas();
});

function inicializarCrearEtiqueta() {
  formCrearEtiqueta.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarValidacion();

    if (
      validarDatos(
        inputNameCrearEtiqueta,
        invalidNameCrearEtiqueta,
        inputDescripcionCrearEtiqueta,
        invalidDescripcionCrearEtiqueta,
      )
    ) {
      agregarEtiqueta(
        inputNameCrearEtiqueta.value,
        inputDescripcionCrearEtiqueta.value,
      );
      formCrearEtiqueta.reset();
      limpiarValidacion();
      cargarTablaEtiquetas();
    }
  });
}

function inicializarEdicionEtiqueta() {
  modalEdicionEtiqueta.addEventListener("shown.bs.modal", function (event) {
    const boton = event.relatedTarget;
    const id = boton.getAttribute("data-identificador");
    const etiqueta = conseguirEtiqueta(id);

    inputNameEdicionEtiqueta.value = etiqueta.nombre;
    inputDescripcionEdicionEtiqueta.value = etiqueta.descripcion;
    buttonEdicionEtiqueta.setAttribute("data-identificador", id);
  });

  formEdicionEtiqueta.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarValidacion();

    if (
      validarDatos(
        inputNameEdicionEtiqueta,
        invalidNameEdicionEtiqueta,
        inputDescripcionEdicionEtiqueta,
        invalidDescripcionEdicionEtiqueta,
      )
    ) {
      // TO-DO: Editar etiqueta por id.
      editarEtiqueta(
        buttonEdicionEtiqueta.getAttribute("data-identificador"),
        inputNameEdicionEtiqueta.value,
        inputDescripcionEdicionEtiqueta.value,
      );
      formEdicionEtiqueta.reset();
      buttonEdicionEtiqueta.removeAttribute("data-identificador");
      limpiarValidacion();
      cargarTablaEtiquetas();
    }
  });
}

/*
  Elimina y vuelve a generar la tabla completa.
*/
function cargarTablaEtiquetas() {
  let etiquetas = listadoEtiquetas();
  tbodyEtiquetas.innerHTML = "";

  for (let i = 0; i < etiquetas.length; i++) {
    const etiqueta = etiquetas[i];

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = etiqueta.nombre;

    const tdDescripcion = document.createElement("td");
    tdDescripcion.textContent = etiqueta.descripcion;

    const tdAcciones = document.createElement("td");
    let botonEdicion = crearBotonEdicion("modalEdicionEtiqueta", etiqueta.id);
    let botonEliminar = crearBotonEliminar();

    tdAcciones.appendChild(botonEdicion);
    tdAcciones.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function (event) {
      if (confirm("¿Estás seguro de que deseas eliminar esta etiqueta?")) {
        eliminarEtiqueta(etiqueta.id);
        cargarTablaEtiquetas();
      }
    });

    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);

    tbodyEtiquetas.appendChild(tr);
  }
}

function crearBotonEdicion(idModal, idEtiqueta) {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-warning m-1 text-nowrap";
  boton.setAttribute("data-bs-toggle", "modal");
  boton.setAttribute("data-bs-target", "#" + idModal);
  boton.setAttribute("data-identificador", idEtiqueta);

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
