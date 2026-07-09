import { getLoggedAccountID, isLoggedIn } from "../managers/sessionManager.js";

import { getAccountByID } from "../managers/accountsManager.js";

window.addEventListener("load", function () {
  const account = getAccountByID(getLoggedAccountID());

  if (!isLoggedIn()) {
    window.location.href = "login.html";
  } else if (isLoggedIn() && account.role !== "Admin") {
    window.location.href = "catalog.html";
  }
});
