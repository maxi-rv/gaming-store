import {
  checkAccountLogin,
  getAccountByUsername,
} from "../managers/accountsManager.js";

const usernameInput = document.getElementById("inputUsername");
const passwordInput = document.getElementById("inputPassword");

export function clearFormValidation() {
  const inputs = document.querySelectorAll(".form-control");
  for (const input of inputs) {
    input.classList.remove("is-invalid");
  }
}

export function validate() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const account = getAccountByUsername(username);

  let validation = true;

  if (account != null && !account.state) {
    mostrar_error(
      usernameInput,
      "error_inicio_username",
      "The account is currently disabled",
    );
    validation = false;
  }

  const response = checkAccountLogin(username, password);

  if (response === -1) {
    mostrar_error(usernameInput, "error_inicio_username", "Username not found");
    validation = false;
  } else if (response === -2) {
    mostrar_error(
      passwordInput,
      "error_inicio_password",
      "Username or Password mismatch",
    );
    validation = false;
  }

  return validation;
}

function mostrar_error(input, id_error, mensaje) {
  input.classList.add("is-invalid");
  document.getElementById(id_error).textContent = mensaje;
}
