import { getCategoriesMocked } from "../managers/mockData.js";

let categories;
const categoriesKey = "categorias";

window.addEventListener("load", function () {
  categories =
    JSON.parse(localStorage.getItem(categoriesKey)) || getCategoriesMocked();
  localStorage.setItem(categoriesKey, JSON.stringify(categories));
});

export function addCategory(name, description, tags) {
  let category = createCategory(name, description, tags);
  categories.push(category);
  localStorage.setItem(categoriesKey, JSON.stringify(categories));
}

export function editCategory(id, name = "", description = "", tags = []) {
  const index = categories.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    categories[index].name = name;
    categories[index].description = description;
    categories[index].tags = tags;
    localStorage.setItem(categoriesKey, JSON.stringify(categories));
  }
}

export function deleteCategory(id) {
  categories = categories.filter((tag) => tag.id !== id);

  localStorage.setItem(categoriesKey, JSON.stringify(categories));
}

export function allCategories() {
  return categories;
}

export function getCategory(id) {
  return categories.find((cat) => cat.id === id) || null;
}

function createCategory(name = "", description = "", tags = []) {
  let category = {
    id: crypto.randomUUID(),
    name: name,
    description: description,
    tags: tags,
  };
  return category;
}
