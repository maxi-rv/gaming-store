import { validate, clearFormValidation } from "../login/loginValidation.js";

import { isLoggedIn, loginAccount } from "../managers/sessionManager.js";

const form = document.getElementById("formulario_inicio_sesion");
const usernameInput = document.getElementById("inputUsername");
const passwordInput = document.getElementById("inputPassword");

window.addEventListener("load", function () {
  if (isLoggedIn()) {
    window.location.href = "../html/catalog.html";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormValidation();

    if (validate()) {
      const username = usernameInput.value;
      const password = passwordInput.value;
      loginAccount(username, password);
      form.reset();
      clearFormValidation();
      window.location.href = "../html/catalog.html";
    }
  });
});
