import { getAccountByUsername } from "../managers/accountsManager.js";

const usernameInput = document.getElementById("input_register_username");
const emailInput = document.getElementById("input_register_email");
const telephoneINput = document.getElementById("input_register_telefono");
const passwordInput = document.getElementById("input_register_Password");
const termsInput = document.getElementById("terminos_y_condiciones");

export function clearValidation() {
  const inputs = document.querySelectorAll(".form-control, .form-check-input");
  for (const input of inputs) {
    input.classList.remove("is-invalid");
  }
}

export function validateData() {
  let validation = true;

  let account = getAccountByUsername(usernameInput.value.trim());

  if (validator.isEmpty(usernameInput.value.trim())) {
    showMessage(usernameInput, "error_username", "Username is required.");
    validation = false;
  } else if (account != null) {
    showMessage(usernameInput, "error_username", "Username already in use.");
    validation = false;
  }

  if (!validator.isEmail(emailInput.value.trim())) {
    showMessage(emailInput, "error_email", "Email not valid.");
    validation = false;
  }

  if (!validator.isMobilePhone(telephoneINput.value, "es-AR")) {
    showMessage(telephoneINput, "error_telefono", "Phone Number not valid.");
    validation = false;
  }

  if (
    !validator.isStrongPassword(passwordInput.value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    showMessage(
      passwordInput,
      "error_password",
      "Password must contain at least 8 letters, 1 lowercase, 1 uppercase, 1 number, and a symbol.",
    );
    validation = false;
  }

  if (!termsInput.checked) {
    showMessage(
      termsInput,
      "error_terminos",
      "You must accept the Terms and Conditions.",
    );
    validation = false;
  }

  return validation;
}

function showMessage(input, errorID, message) {
  input.classList.add("is-invalid");
  document.getElementById(errorID).textContent = message;
}
