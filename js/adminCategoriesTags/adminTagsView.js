import {
  validateData,
  clearValidation,
} from "../commons/adminCategoriesTagsValidation.js";

import {
  addTag,
  allTags,
  editTag,
  deleteTag,
  getTag,
} from "../managers/tagsManager.js";

// Modal
const editTagModal = document.getElementById("modalEdicionEtiqueta");

// Tabla tBody
const tagTBody = document.getElementById("tbodyEtiquetas");

// Constantes Form Creacion Etiqueta
const createForm = document.getElementById("formCrearEtiqueta");
const nameInputCreate = document.getElementById("inputNameCrearEtiqueta");
const descriptionInputCreate = document.getElementById(
  "inputDescripcionCrearEtiqueta",
);
const createButton = document.getElementById("buttonCrearEtiqueta");
const invalidNameCreate = document.getElementById("invalidNameCrearEtiqueta");
const invalidDescriptionCreate = document.getElementById(
  "invalidDescripcionCrearEtiqueta",
);

// Constantes Form Edicion Etiqueta
const editForm = document.getElementById("formEdicionEtiqueta");
const nameInputEdit = document.getElementById("inputNameEdicionEtiqueta");
const descriptionInputEdit = document.getElementById(
  "inputDescripcionEdicionEtiqueta",
);
const editButton = document.getElementById("buttonEdicionEtiqueta");
const invalidNameEdit = document.getElementById("invalidNameEdicionEtiqueta");
const invalidDescriptionEdit = document.getElementById(
  "invalidDescripcionEdicionEtiqueta",
);

window.addEventListener("load", function () {
  initTagCreation();
  initTagEdition();
  loadTable();
});

function initTagCreation() {
  createForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearValidation();

    if (
      validateData(
        nameInputCreate,
        invalidNameCreate,
        descriptionInputCreate,
        invalidDescriptionCreate,
      )
    ) {
      addTag(nameInputCreate.value, descriptionInputCreate.value);
      createForm.reset();
      clearValidation();
      loadTable();
    }
  });
}

function initTagEdition() {
  editTagModal.addEventListener("shown.bs.modal", function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-identificador");
    const tag = getTag(id);

    nameInputEdit.value = tag.name;
    descriptionInputEdit.value = tag.description;
    editButton.setAttribute("data-identificador", id);
  });

  editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearValidation();

    if (
      validateData(
        nameInputEdit,
        invalidNameEdit,
        descriptionInputEdit,
        invalidDescriptionEdit,
      )
    ) {
      // TO-DO: Editar etiqueta por id.
      editTag(
        editButton.getAttribute("data-identificador"),
        nameInputEdit.value,
        descriptionInputEdit.value,
      );
      editForm.reset();
      editButton.removeAttribute("data-identificador");
      clearValidation();
      loadTable();
    }
  });
}

/*
  Elimina y vuelve a generar la tabla completa.
*/
function loadTable() {
  let tags = allTags();
  tagTBody.innerHTML = "";

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];

    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = tag.name;

    const tdDescription = document.createElement("td");
    tdDescription.textContent = tag.description;

    const tdActions = document.createElement("td");
    let editButton = initEditButton("modalEdicionEtiqueta", tag.id);
    let deleteButton = initDeleteButton();

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
      if (confirm("¿Estás seguro de que deseas eliminar esta etiqueta?")) {
        deleteTag(tag.id);
        loadTable();
      }
    });

    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdActions);

    tagTBody.appendChild(tr);
  }
}

function initEditButton(modalID, tagID) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "btn btn-outline-warning m-1 text-nowrap";
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#" + modalID);
  button.setAttribute("data-identificador", tagID);

  let i = document.createElement("i");
  i.className = "bi bi-pencil-square";

  let span = document.createElement("span");
  span.innerHTML = "Editar";

  button.appendChild(i);
  button.appendChild(span);

  return button;
}

function initDeleteButton() {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "btn btn-outline-danger m-1";

  let i = document.createElement("i");
  i.className = "bi bi-trash";

  button.appendChild(i);

  return button;
}
