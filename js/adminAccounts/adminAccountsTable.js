import {
  allAccounts,
  deleteAccount,
  changeAccountState,
} from "../managers/accountsManager.js";

let tBody = document.getElementById("table_body");

const saveEditButton = document.querySelector(
  ".formEdicionUsuario button[type='submit']",
);

window.addEventListener("load", function () {
  tBody.innerHTML = "";
  loadTable();
});

function loadTable() {
  tBody.innerHTML = "";
  let accounts = allAccounts();

  for (let i = 0; i < accounts.length; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("align-middle");

    const tdUsername = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdTelephone = document.createElement("td");
    const tdState = document.createElement("td");
    const tdActions = document.createElement("td");
    const tdRole = document.createElement("td");

    tdUsername.textContent = accounts[i].username;
    tdEmail.textContent = accounts[i].email;
    tdTelephone.textContent = accounts[i].tel;
    tdState.textContent = accounts[i].state ? "Enabled" : "Disabled";
    tdRole.textContent = accounts[i].role;

    const stateButton = document.createElement("button");
    if (accounts[i].state) {
      stateButton.innerHTML = '<i class="bi bi-person-dash"></i>';
      stateButton.className = "btn btn-outline-warning me-2";
      stateButton.title = "Disable Account";
    } else {
      stateButton.innerHTML = '<i class="bi bi-person-check"></i>';
      stateButton.className = "btn btn-outline-success me-2";
      stateButton.title = "Enable Account";
    }

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-outline-danger";
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';

    deleteButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to DELETE this Account?")) {
        deleteAccount(accounts[i].id);
        loadTable();
      }
    });

    tdActions.appendChild(stateButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdUsername);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelephone);
    tr.appendChild(tdState);
    tr.appendChild(tdRole);
    tr.appendChild(tdActions);

    tBody.appendChild(tr);

    stateButton.addEventListener("click", function () {
      changeAccountState(accounts[i].id);
      loadTable();
    });
  }
}
