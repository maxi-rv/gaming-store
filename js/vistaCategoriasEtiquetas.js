import {
  agregarCategoria,
  listadoCategorias,
  editarCategoria,
  eliminarCategoria,
} from "../js/gestorCategorias.js";
import {
  agregarEtiqueta,
  listadoEtiquetas,
  editarEtiqueta,
  eliminarEtiqueta,
} from "../js/gestorEtiquetas.js";

// Tablas tBody
const tbodyCategorias = document.getElementById("tbodyCategorias");
const tbodyEtiquetas = document.getElementById("tbodyEtiquetas");

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

/*
  Setea los forms para responder a intentos de submit.
  Carga las tablas por unica vez.
*/
window.addEventListener("load", function () {
  inicializarCrearCategoria();
  inicializarCrearEtiqueta();
  inicializarEdicionCategoria();
  inicializarEdicionEtiqueta();

  cargarTablaCategorias();
  cargarTablaEtiquetas();
});

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
    let botonEdicion = crearBotonEdicion();
    let botonEliminar = crearBotonEliminar();

    tdAcciones.appendChild(botonEdicion);
    tdAcciones.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function (event) {
      eliminarCategoria(categoria.id);
      cargarTablaCategorias();
    });

    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);

    tbodyCategorias.appendChild(tr);
  }
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
    let botonEdicion = crearBotonEdicion();
    let botonEliminar = crearBotonEliminar();

    tdAcciones.appendChild(botonEdicion);
    tdAcciones.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function (event) {
      eliminarEtiqueta(etiqueta.id);
      cargarTablaEtiquetas();
    });

    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);

    tbodyEtiquetas.appendChild(tr);
  }
}

function crearBotonEdicion() {
  const boton = document.createElement("button");

  boton.type = "button";
  boton.className = "btn btn-outline-warning m-1 text-nowrap";
  boton.setAttribute("data-bs-toggle", "modal");
  boton.setAttribute("data-bs-target", "#modalEdicionCategoria");

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

function inicializarEdicionCategoria() {
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
      formEdicionCategoria.reset();
      limpiarValidacion();
      cargarTablaCategorias();
    }
  });
}

function inicializarEdicionEtiqueta() {
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
      formEdicionEtiqueta.reset();
      limpiarValidacion();
      cargarTablaEtiquetas();
    }
  });
}

function limpiarValidacion() {
  const inputs = document.querySelectorAll(
    ".form-control, .form-select, .form-check-input",
  );
  for (const input of inputs) {
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");
  }
}

function validarDatos(
  inputNombre,
  idInvalidFeedbackNombre,
  inputDescripcion,
  idInvalidFeedbackDescripcion,
) {
  let validacion = true;

  if (!validarNombre(inputNombre, idInvalidFeedbackNombre)) {
    validacion = false;
  }
  if (!validarDescripcion(inputDescripcion, idInvalidFeedbackDescripcion)) {
    validacion = false;
  }

  return validacion;
}

function mostrarMensaje(input, validacion, invalidFeedback, mensajeError) {
  if (validacion) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    invalidFeedback.innerHTML = mensajeError;
  }
}

function validarNombre(inputNombre, invalidFeedback) {
  let validacion = true;
  let mensaje = "";

  if (validator.isEmpty(inputNombre.value.trim())) {
    validacion = false;
    mensaje = "Debe indicar un nombre";
  } else if (!validator.isLength(inputNombre.value.trim(), { min: 3 })) {
    validacion = false;
    mensaje = "Debe ingresar al menos 3 caracteres";
  }

  mostrarMensaje(inputNombre, validacion, invalidFeedback, mensaje);
  return validacion;
}

function validarDescripcion(inputDescripcion, invalidFeedback) {
  let validacion = true;
  let mensaje = "";

  if (validator.isEmpty(inputDescripcion.value.trim())) {
    validacion = false;
    mensaje = "La descripcion no puede estar vacia.";
  }

  mostrarMensaje(inputDescripcion, validacion, invalidFeedback, mensaje);
  return validacion;
}
