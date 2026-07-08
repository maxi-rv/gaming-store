import { getAccountsMocked } from "../managers/mockData.js";

let accounts = [];
const accountsKey = "cuentas";

window.addEventListener("load", function () {
  accounts =
    JSON.parse(localStorage.getItem(accountsKey)) || getAccountsMocked();
  localStorage.setItem(accountsKey, JSON.stringify(accounts));
});

export function addAccount(username, password, email, tel) {
  let foundAccount = getAccountByUsername(username);

  if (foundAccount == null) {
    let newAccount = createAccount(username, password, email, tel);

    accounts.push(newAccount);

    localStorage.setItem(accountsKey, JSON.stringify(accounts));
  }
}

export function editAccount(id, username, password, email, tel) {
  let index = accounts.findIndex((account) => account.id === id);

  if (index !== -1) {
    accounts[index].username = username;
    accounts[index].password = password;
    accounts[index].email = email;
    accounts[index].tel = tel;

    localStorage.setItem(accountsKey, JSON.stringify(accounts));
  }
}

export function deleteAccount(id) {
  accounts = accounts.filter((account) => account.id !== id);
  localStorage.setItem(accountsKey, JSON.stringify(accounts));
}

export function allAccounts() {
  return accounts;
}

export function getAccountByID(id) {
  return accounts.find((account) => account.id === id) || null;
}

export function getAccountByUsername(username) {
  return accounts.find((account) => account.username === username) || null;
}

export function checkAccountLogin(username, password) {
  let foundAccount = getAccountByUsername(username);

  if (foundAccount == null) return -1;

  if (foundAccount.password !== password) return -2;

  return foundAccount;
}

export function getAccountStateByUsername(username) {
  return getAccountByUsername(username).state || null;
}

export function changeAccountState(id) {
  const index = accounts.findIndex((account) => account.id === id);

  if (index !== -1) {
    accounts[index].state = !accounts[index].state;
    localStorage.setItem(accountsKey, JSON.stringify(accounts));
  }
}

function createAccount(username, password, email, tel) {
  let account = {
    id: crypto.randomUUID(),
    username: username,
    password: password,
    email: email,
    tel: tel,
    state: true,
    role: "Usuario",
  };
  return account;
}
