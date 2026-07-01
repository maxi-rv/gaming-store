import {
  validarDatos,
  limpiarValidacion,
} from "../adminCategoriasEtiquetas/validacionCategoriaEtiqueta.js";

import {
  agregarCategoria,
  listadoCategorias,
  editarCategoria,
  eliminarCategoria,
  conseguirCategoria,
} from "../gestores/gestorCategorias.js";

// Modal
const modalEdicionCategoria = document.getElementById("modalEdicionCategoria");

// Tabla tBody
const tbodyCategorias = document.getElementById("tbodyCategorias");

// Constantes Form Creacion Categoria
const formCrearCategoria = document.getElementById("formCrearCategoria");
const inputNameCrearCategoria = document.getElementById(
  "inputNameCrearCategoria",
);
const inputDescripcionCrearCategoria = document.getElementById(
  "inputDescripcionCrearCategoria",
);
const buttonCrearCategoria = document.getElementById("buttonCrearCategoria");
const invalidNameCrearCategoria = document.getElementById(
  "invalidNameCrearCategoria",
);
const invalidDescripcionCrearCategoria = document.getElementById(
  "invalidDescripcionCrearCategoria",
);

// Constantes Form Edicion Categoria
const formEdicionCategoria = document.getElementById("formEdicionCategoria");
const inputNameEdicionCategoria = document.getElementById(
  "inputNameEdicionCategoria",
);
const inputDescripcionEdicionCategoria = document.getElementById(
  "inputDescripcionEdicionCategoria",
);
const buttonEdicionCategoria = document.getElementById(
  "buttonEdicionCategoria",
);
const invalidNameEdicionCategoria = document.getElementById(
  "invalidNameEdicionCategoria",
);
const invalidDescripcionEdicionCategoria = document.getElementById(
  "invalidDescripcionEdicionCategoria",
);

window.addEventListener("load", function () {
  inicializarCrearCategoria();
  inicializarEdicionCategoria();
  cargarTablaCategorias();
});

function inicializarCrearCategoria() {
  formCrearCategoria.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarValidacion();

    if (
      validarDatos(
        inputNameCrearCategoria,
        invalidNameCrearCategoria,
        inputDescripcionCrearCategoria,
        invalidDescripcionCrearCategoria,
      )
    ) {
      agregarCategoria(
        inputNameCrearCategoria.value,
        inputDescripcionCrearCategoria.value,
      );
      formCrearCategoria.reset();
      limpiarValidacion();
      cargarTablaCategorias();
    }
  });
}

function inicializarEdicionCategoria() {
  modalEdicionCategoria.addEventListener("shown.bs.modal", function (event) {
    const boton = event.relatedTarget;
    const id = boton.getAttribute("data-identificador");
    const categoria = conseguirCategoria(id);

    inputNameEdicionCategoria.value = categoria.nombre;
    inputDescripcionEdicionCategoria.value = categoria.descripcion;
    buttonEdicionCategoria.setAttribute("data-identificador", id);
  });

  formEdicionCategoria.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarValidacion();

    if (
      validarDatos(
        inputNameEdicionCategoria,
        invalidNameEdicionCategoria,
        inputDescripcionEdicionCategoria,
        invalidDescripcionEdicionCategoria,
      )
    ) {
      // TO-DO: Editar categoria por id.
      editarCategoria(
        buttonEdicionCategoria.getAttribute("data-identificador"),
        inputNameEdicionCategoria.value,
        inputDescripcionEdicionCategoria.value,
      );
      formEdicionCategoria.reset();
      buttonEdicionCategoria.removeAttribute("data-identificador");
      limpiarValidacion();
      cargarTablaCategorias();
    }
  });
}

/*
  Elimina y vuelve a generar la tabla completa.
*/
function cargarTablaCategorias() {
  let categorias = listadoCategorias();
  tbodyCategorias.innerHTML = "";

  for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = categoria.nombre;

    const tdDescripcion = document.createElement("td");
    tdDescripcion.textContent = categoria.descripcion;

    const tdAcciones = document.createElement("td");
    let botonEdicion = crearBotonEdicion("modalEdicionCategoria", categoria.id);
    let botonEliminar = crearBotonEliminar();

    tdAcciones.appendChild(botonEdicion);
    tdAcciones.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function (event) {
      if (confirm("¿Estás seguro de que deseas eliminar esta categoria?")) {
        eliminarCategoria(categoria.id);
        cargarTablaCategorias();
      }
    });

    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);

    tbodyCategorias.appendChild(tr);
  }
}

function crearBotonEdicion(idModal, idCategoria) {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-warning m-1 text-nowrap";
  boton.setAttribute("data-bs-toggle", "modal");
  boton.setAttribute("data-bs-target", "#" + idModal);
  boton.setAttribute("data-identificador", idCategoria);

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
