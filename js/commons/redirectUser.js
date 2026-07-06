import { getLoggedAccountID, isLoggedIn } from "../managers/sessionManager.js";

import { getAccountByID } from "../managers/accountsManager.js";

window.addEventListener("load", function () {
  redirectUser();
});

function redirectUser() {
  const account = getAccountByID(getLoggedAccountID());

  if (isLoggedIn() && account.role !== "Admin") {
    window.location.href = "../html/catalog.html";
  }
}
