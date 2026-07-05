import { validate, clearFormValidation } from "./loginValidation.js";

import {
  isLoggedIn,
  saveSessionByUsername,
} from "../managers/sessionManager.js";

const form = document.getElementById("formulario_inicio_sesion");
const usernameInput = document.getElementById("inputUsername");
const passwordInput = document.getElementById("inputPassword");

window.addEventListener("load", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormValidation();

    if (validate()) {
      const username = usernameInput.value;
      saveSessionByUsername(username.value);
      window.location.href = "/html/catalog.html";
      form.reset();
      clearFormValidation();
    }
  });

  if (isLoggedIn()) {
    window.location.href = "/html/catalog.html";
  }
});
