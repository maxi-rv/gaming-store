export function validateData(
  nameInput,
  idInvalidFeedbackName,
  descriptionInput,
  idInvalidFeedbackDescription,
) {
  let validation = true;

  if (!validateName(nameInput, idInvalidFeedbackName)) {
    validation = false;
  }
  if (!validateDescription(descriptionInput, idInvalidFeedbackDescription)) {
    validation = false;
  }

  return validation;
}

export function clearValidation() {
  const inputs = document.querySelectorAll(
    ".form-control, .form-select, .form-check-input",
  );
  for (const input of inputs) {
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");
  }
}

function showMessage(input, validation, invalidFeedback, errorMessage) {
  if (validation) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    invalidFeedback.innerHTML = errorMessage;
  }
}

function validateName(nameInput, invalidFeedback) {
  let validation = true;
  let message = "";

  if (validator.isEmpty(nameInput.value.trim())) {
    validation = false;
    message = "Debe indicar un nombre";
  } else if (!validator.isLength(nameInput.value.trim(), { min: 3 })) {
    validation = false;
    message = "Debe ingresar al menos 3 caracteres";
  }

  showMessage(nameInput, validation, invalidFeedback, message);
  return validation;
}

function validateDescription(descriptionInput, invalidFeedback) {
  let validation = true;
  let message = "";

  if (validator.isEmpty(descriptionInput.value.trim())) {
    validation = false;
    message = "La descripcion no puede estar vacia.";
  }

  showMessage(descriptionInput, validation, invalidFeedback, message);
  return validation;
}
