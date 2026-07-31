import {
  loadAllCategories,
  loadAllTags,
  loadSomeTags,
} from "../commons/loaderCategoryTags.js";

import { filterProductsBy, allProducts } from "../managers/productsManager.js";

import { loadCatalog } from "../catalog/catalogView.js";
import { getCategory } from "../managers/categoriesManager.js";

const filtersForm = document.getElementById("formFiltros");
const categoriesSelect = document.getElementById("select_categorias");
const tagsContainer = document.getElementById("contenedor_de_etiquetas");

const tagsButton = document.getElementById("tagsButton");

const withStock = document.getElementById("conStock");
const applyFiltersButton = document.getElementById("botonAplicarFiltros");
const resetFiltersButton = document.getElementById("botonLimpiarFiltros");

window.addEventListener("load", function () {
  initialize();
  loadAllCategories(categoriesSelect);
  loadAllTags(tagsContainer);
});

function initialize() {
  categoriesSelect.addEventListener("change", function (event) {
    const category = getCategory(categoriesSelect.value);
    loadSomeTags(tagsContainer, category.tags);
  });

  tagsButton.addEventListener("click", function () {
    // Check which style is currently active
    if (this.classList.contains("btn-warning")) {
      this.classList.remove("btn-warning");
      this.classList.remove("text-black");
      this.classList.add("btn-outline-warning");
      this.classList.add("text-warning");
    } else if (this.classList.contains("btn-outline-warning")) {
      this.classList.remove("btn-outline-warning");
      this.classList.remove("text-warning");
      this.classList.add("btn-warning");
      this.classList.add("text-black");
    }
  });

  filtersForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const filteredProducts = filterProductsBy(
      categoriesSelect.value,
      getSelectedTags(),
      withStock.checked,
    );
    loadCatalog(filteredProducts);
  });

  resetFiltersButton.addEventListener("click", function (event) {
    resetFilters();
  });
}

function getSelectedTags() {
  const checkboxes = tagsContainer.querySelectorAll('input[type="checkbox"]');

  const tags = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      tags.push(checkbox.getAttribute("data-identificador"));
    }
  });
  return tags;
}

function resetFilters() {
  filtersForm.reset();
  loadAllTags(tagsContainer);
  loadCatalog(allProducts());
}
