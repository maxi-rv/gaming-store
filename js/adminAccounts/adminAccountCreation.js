import { addAccount } from "../managers/accountsManager.js";

import { validateData, clearValidation } from "./adminAccountValidation.js";

const usernameInput = document.getElementById("input_register_username");
const emailInput = document.getElementById("input_register_email");
const telefono = document.getElementById("input_register_telefono");
const password = document.getElementById("input_register_Password");

window.addEventListener("load", function () {
  inicializar();
});

function inicializar() {
  const form = document.getElementById("formulario_registro");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearValidation();

    if (validateData()) {
      let username = usernameInput.value;
      let email = emailInput.value;
      let tel = telefono.value;
      let password = password.value;

      addAccount(username, password, email, tel);
      alert("Account registered correctly.");
      form.reset();
      clearValidation();
    }
  });
}
