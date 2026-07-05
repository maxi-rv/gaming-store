import { loadCategories, loadTags } from "../commons/loaderCategoryTags.js";

import { filterProductsBy, allProducts } from "../managers/productsManager.js";

import { loadCatalog } from "../catalog/catalogView.js";

const filtersForm = document.getElementById("formFiltros");
const categoriesSelect = document.getElementById("select_categorias");
const tagsContainer = document.getElementById("contenedor_de_etiquetas");

const withStock = document.getElementById("conStock");
const applyFiltersButton = document.getElementById("botonAplicarFiltros");
const resetFiltersButton = document.getElementById("botonLimpiarFiltros");

window.addEventListener("load", function () {
  initialize();
  loadCategories(categoriesSelect);
  loadTags(tagsContainer);
});

function initialize() {
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
  loadCatalog(allProducts());
}
