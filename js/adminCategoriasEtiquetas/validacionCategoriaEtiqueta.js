export function validarDatos(
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

export function limpiarValidacion() {
  const inputs = document.querySelectorAll(
    ".form-control, .form-select, .form-check-input",
  );
  for (const input of inputs) {
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");
  }
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
