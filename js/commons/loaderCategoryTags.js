import { allCategories } from "../managers/categoriesManager.js";

import { allTags } from "../managers/tagsManager.js";

let categories = [];
let tags = [];

window.addEventListener("load", function () {
  categories = allCategories();
  tags = allTags();
});

export function loadCategories(categoriesSelect) {
  categories.forEach((category) => {
    const option = document.createElement("option");

    option.value = category.id;
    option.textContent = category.name;

    categoriesSelect.appendChild(option);
  });
}

export function loadTags(tagsSelect) {
  tagsSelect.innerHTML = "";

  tags.forEach((tag) => {
    const col = document.createElement("div");
    col.classList.add("col", "my-1");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btn-check");
    checkbox.id = "eti-" + tag.id;
    checkbox.setAttribute("data-identificador", tag.id);
    checkbox.autocomplete = "off";

    const label = document.createElement("label");
    label.classList.add("btn", "btn-outline-warning", "rounded-pill");
    label.setAttribute("for", checkbox.id);
    label.textContent = tag.name;

    col.appendChild(checkbox);
    col.appendChild(label);

    tagsSelect.appendChild(col);
  });
}

export function loadSelectedTags(tagsContainer, selectedTagsIDs) {
  tagsContainer.innerHTML = "";

  tags.forEach((tag) => {
    const col = document.createElement("div");
    col.classList.add("col", "my-1");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btn-check");
    checkbox.id = "etiSeleccionada-" + tag.id;
    checkbox.setAttribute("data-identificador", tag.id);
    checkbox.autocomplete = "off";

    selectedTagsIDs.forEach((tagID) => {
      if (tagID == tag.id) {
        checkbox.checked = true;
      }
    });

    const label = document.createElement("label");
    label.classList.add("btn", "btn-outline-warning", "rounded-pill");
    label.setAttribute("for", checkbox.id);
    label.textContent = tag.name;

    col.appendChild(checkbox);
    col.appendChild(label);

    tagsContainer.appendChild(col);
  });
}
