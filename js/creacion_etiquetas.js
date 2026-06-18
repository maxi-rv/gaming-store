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

// localStorage
let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
let etiquetas = JSON.parse(localStorage.getItem("etiquetas")) || [];

window.addEventListener("load", function () {
  inicializarCrearCategoria();
  inicializarCrearEtiqueta();
  inicializarEdicionCategoria();
  inicializarEdicionEtiqueta();
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
      formCrearCategoria.reset();
      limpiarValidacion();
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
      formCrearEtiqueta.reset();
      limpiarValidacion();
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
      formEdicionCategoria.reset();
      limpiarValidacion();
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
      formEdicionEtiqueta.reset();
      limpiarValidacion();
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
