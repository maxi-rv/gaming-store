import {
  allAccounts,
  getAccountByID,
  getAccountByUsername,
} from "../managers/accountsManager.js";

import { cleanCart } from "../managers/cartManager.js";

let loggedAccountID;
const sessionKey = "sesion";

window.addEventListener("load", function () {
  loggedAccountID = JSON.parse(localStorage.getItem(sessionKey)) || null;
  localStorage.setItem(sessionKey, JSON.stringify(loggedAccountID));
});

export function saveSessionByUsername(username) {
  const account = getAccountByUsername(username);

  if (account != null && account.state) {
    loggedAccountID = account;
    localStorage.setItem(sessionKey, JSON.stringify(loggedAccountID));
  }
}

export function clearSession() {
  loggedAccountID = null;
  cleanCart();
  localStorage.setItem(sessionKey, JSON.stringify(loggedAccountID));
}

export function isLoggedIn() {
  return loggedAccountID != null;
}

export function getLoggedAccountID() {
  return loggedAccountID;
}
