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
    message = "Name cannot be empty";
  } else if (!validator.isLength(nameInput.value.trim(), { min: 3 })) {
    validation = false;
    message = "Name must be at least 3 characters";
  }

  showMessage(nameInput, validation, invalidFeedback, message);
  return validation;
}

function validateDescription(descriptionInput, invalidFeedback) {
  let validation = true;
  let message = "";

  if (validator.isEmpty(descriptionInput.value.trim())) {
    validation = false;
    message = "Name cannot be empty";
  }

  showMessage(descriptionInput, validation, invalidFeedback, message);
  return validation;
}
