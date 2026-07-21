import {
  validateData,
  clearValidation,
} from "../commons/adminCategoriesTagsValidation.js";

import {
  addCategory,
  allCategories,
  editCategory,
  deleteCategory,
  getCategory,
} from "../managers/categoriesManager.js";
import { getTag } from "../managers/tagsManager.js";

// Modal
const editCategoryModal = document.getElementById("modalEdicionCategoria");

// Tabla tBody
const categoriesTBody = document.getElementById("tbodyCategorias");

// Constantes Form Creacion Categoria
const createForm = document.getElementById("formCrearCategoria");
const nameInputCreate = document.getElementById("inputNameCrearCategoria");
const descriptionInputCreate = document.getElementById(
  "inputDescripcionCrearCategoria",
);
const createButton = document.getElementById("buttonCrearCategoria");
const invalidNameCreate = document.getElementById("invalidNameCrearCategoria");
const invalidDescriptionCreate = document.getElementById(
  "invalidDescripcionCrearCategoria",
);

// Constantes Form Edicion Categoria
const editForm = document.getElementById("formEdicionCategoria");
const nameInputEdit = document.getElementById("inputNameEdicionCategoria");
const descriptionInputEdit = document.getElementById(
  "inputDescripcionEdicionCategoria",
);
const editButton = document.getElementById("buttonEdicionCategoria");
const invalidNameEdit = document.getElementById("invalidNameEdicionCategoria");
const invalidDescriptionEdit = document.getElementById(
  "invalidDescripcionEdicionCategoria",
);

window.addEventListener("load", function () {
  initCreateCategory();
  initEditCategory();
  loadTable();
});

function initCreateCategory() {
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
      addCategory(nameInputCreate.value, descriptionInputCreate.value);
      createForm.reset();
      clearValidation();
      loadTable();
    }
  });
}

function initEditCategory() {
  editCategoryModal.addEventListener("shown.bs.modal", function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-identificador");
    const category = getCategory(id);

    nameInputEdit.value = category.name;
    descriptionInputEdit.value = category.description;
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
      // TO-DO: Editar categoria por id.
      editCategory(
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
  let categories = allCategories();
  categoriesTBody.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = category.name;

    const tdDescription = document.createElement("td");
    tdDescription.textContent = category.description;

    const tdTags = document.createElement("td");
    for (let index = 0; index < category.tags.length; index++) {
      const tagID = category.tags[index];
      if (index != category.tags.length - 1) {
        tdTags.textContent += getTag(tagID).name + ", ";
      } else {
        tdTags.textContent += getTag(tagID).name;
      }
    }

    const tdActions = document.createElement("td");
    let editButton = initEditButton("modalEdicionCategoria", category.id);
    let deleteButton = initDeleteButton();

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
      if (confirm("Are you sure you want to DELETE this Category?")) {
        deleteCategory(category.id);
        loadTable();
      }
    });

    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdTags);
    tr.appendChild(tdActions);

    categoriesTBody.appendChild(tr);
  }
}

function initEditButton(modalID, categoryID) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "btn btn-outline-warning m-1 text-nowrap";
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#" + modalID);
  button.setAttribute("data-identificador", categoryID);

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
