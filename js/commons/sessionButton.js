import {
  getLoggedAccountID,
  clearSession,
  isLoggedIn,
} from "../managers/sessionManager.js";

import {
  getAccountByUsername,
  getAccountByID,
} from "../managers/accountsManager.js";

let sessionButton = document.getElementById("txt_sesion");
let adminActionsButton = document.getElementById("buttonAdminActions");

window.addEventListener("load", function () {
  modifySessionButton();
  modifyAdminButton();

  document
    .getElementById("linkIniciarSesion")
    .addEventListener("click", function (i) {
      if (isLoggedIn()) {
        i.preventDefault();
        clearSession();
        modifySessionButton();
        modifyAdminButton();
        window.location.href = "html/login.html";
      }
    });
});

function modifySessionButton() {
  if (sessionButton) {
    if (isLoggedIn()) {
      sessionButton.textContent = "Log out";
    } else {
      sessionButton.textContent = "Log in";
    }
  }
}

function modifyAdminButton() {
  const account = getAccountByID(getLoggedAccountID());

  if (account != null) {
    if (account.role === "Admin") {
      adminActionsButton.style.visibility = "visible";
    } else if (account.role === "Usuario") {
      adminActionsButton.style.visibility = "hidden";
    }
  } else {
    adminActionsButton.style.visibility = "hidden";
  }
}
