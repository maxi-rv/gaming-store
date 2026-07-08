import {
  loadCategories,
  loadSelectedTags,
} from "../commons/loaderCategoryTags.js";

import {
  allProducts,
  editProduct,
  deleteProduct,
  getProduct,
} from "../managers/productsManager.js";

import {
  validateData,
  clearValidation,
} from "../adminProductos/productsValidation.js";

import { getCategory } from "../managers/categoriesManager.js";
import { getTag } from "../managers/tagsManager.js";

// Modal
const editionModal = document.getElementById("modalEdicionProducto");

// Tabla tBody
const tBody = document.getElementById("tbodyProductos");

// Constantes Form Edicion Producto
const form = document.getElementById("formEdicionProducto");
const nameInput = document.getElementById("input_nombre_edicion_producto");
const priceInput = document.getElementById("input_precio_edicion_producto");
const stockInput = document.getElementById("input_stock_edicion_producto");
const imageSelect = document.getElementById("select_imagen_edicion_producto");
const categorySelect = document.getElementById(
  "select_categoria_edicion_producto",
);
const tagContainer = document.getElementById(
  "contenedor_de_etiquetas_edicion_producto",
);
const descriptionInput = document.getElementById(
  "input_descripcion_edicion_producto",
);
const formButton = document.getElementById("buttonEdicionProducto");

const nameFeeback = document.getElementById("error_nombre_edicion_producto");
const priceFeedback = document.getElementById("error_precio_edicion_producto");
const stockFeedback = document.getElementById("error_stock_edicion_producto");
const imageFeedback = document.getElementById("error_img_edicion_producto");
const categoryFeedback = document.getElementById(
  "error_categoria_edicion_producto",
);
const descriptionFeedback = document.getElementById(
  "error_descripcion_edicion_producto",
);

window.addEventListener("load", function () {
  inicializar();
  loadTable();
  loadCategories(categorySelect);
});

function inicializar() {
  editionModal.addEventListener("shown.bs.modal", function (event) {
    const boton = event.relatedTarget;
    const id = boton.getAttribute("data-identificador");
    const producto = getProduct(id);

    nameInput.value = producto.name;
    priceInput.value = producto.price;
    stockInput.value = producto.stock;
    imageSelect.value = producto.img;
    categorySelect.value = producto.category;
    loadSelectedTags(tagContainer, producto.tags);
    descriptionInput.value = producto.description;

    formButton.setAttribute("data-identificador", id);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearValidation();

    let validacionFormulario = validateData(
      nameInput,
      nameFeeback,
      priceInput,
      priceFeedback,
      stockInput,
      stockFeedback,
      imageSelect,
      imageFeedback,
      categorySelect,
      categoryFeedback,
      descriptionInput,
      descriptionFeedback,
    );

    if (validacionFormulario) {
      editProduct(
        formButton.getAttribute("data-identificador"),
        nameInput.value,
        Number(priceInput.value),
        Number(stockInput.value),
        imageSelect.value,
        categorySelect.value,
        getTags(tagContainer),
        descriptionInput.value.trim(),
      );
      form.reset();
      formButton.removeAttribute("data-identificador");
      clearValidation();
      loadTable();
    }
  });
}

/*
  Elimina y vuelve a generar la tabla completa.
*/
export function loadTable() {
  let products = allProducts();
  tBody.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const producto = products[i];

    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = producto.name;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = producto.price;

    const tdStock = document.createElement("td");
    tdStock.textContent = producto.stock;

    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = producto.img;
    img.style = "width: 150px";
    tdImage.appendChild(img);

    const tdCategory = document.createElement("td");
    let category = getCategory(producto.category);
    if (category) {
      tdCategory.textContent = category.name;
    }

    const tdTags = document.createElement("td");
    let tags = producto.tags;

    for (let index = 0; index < tags.length; index++) {
      let etiquetaEncontrada = conseguirEtiqueta(tags[index]);
      if (etiquetaEncontrada) {
        let nombreEtiqueta = etiquetaEncontrada.name;
        if (index + 1 == tags.length) {
          tdTags.textContent += nombreEtiqueta;
        } else {
          tdTags.textContent += nombreEtiqueta + ", ";
        }
      }
    }

    const tdDescription = document.createElement("td");
    tdDescription.textContent = producto.description;

    const tdActions = document.createElement("td");
    let modifyButton = createEditionButton("modalEdicionProducto", producto.id);
    let deleteButton = createDeleteButton();

    tdActions.appendChild(modifyButton);
    tdActions.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
      if (confirm("Are you sure you want to DELETE this Product?")) {
        deleteProduct(producto.id);
        loadTable();
      }
    });

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdStock);
    tr.appendChild(tdImage);
    tr.appendChild(tdCategory);
    tr.appendChild(tdTags);
    tr.appendChild(tdDescription);
    tr.appendChild(tdActions);

    tBody.appendChild(tr);
  }
}

function createEditionButton(idModal, idProducto) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "btn btn-outline-warning m-1 text-nowrap";
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#" + idModal);
  button.setAttribute("data-identificador", idProducto);

  let i = document.createElement("i");
  i.className = "bi bi-pencil-square";

  let span = document.createElement("span");
  span.innerHTML = "Modify";

  button.appendChild(i);
  button.appendChild(span);

  return button;
}

function createDeleteButton() {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "btn btn-outline-danger m-1";

  let i = document.createElement("i");
  i.className = "bi bi-trash";

  button.appendChild(i);

  return button;
}

function getTags() {
  const checkboxes = tagContainer.querySelectorAll(
    '#formEdicionProducto input[type="checkbox"]',
  );
  console.log(checkboxes);

  const tags = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      tags.push(checkbox.getAttribute("data-identificador"));
    }
  });
  console.log(tags);
  return tags;
}
