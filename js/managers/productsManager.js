import { getProductsMocked } from "../managers/mockData.js";
import { allCategories } from "../managers/categoriesManager.js";
import { allTags } from "../managers/tagsManager.js";

let products;
const productsKey = "productos";

window.addEventListener("load", function () {
  products =
    JSON.parse(localStorage.getItem(productsKey)) || getProductsMocked();
  localStorage.setItem(productsKey, JSON.stringify(products));
});

export function addProduct(
  name,
  price,
  stock,
  img,
  category,
  tags,
  description,
) {
  let product = createProduct(
    name,
    price,
    stock,
    img,
    category,
    tags,
    description,
  );
  products.push(product);
  localStorage.setItem(productsKey, JSON.stringify(products));
}

export function editProduct(
  id,
  name,
  price,
  stock,
  img,
  category,
  tags,
  description,
) {
  const index = products.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    products[index].name = name;
    products[index].price = price;
    products[index].stock = stock;
    products[index].img = img;
    products[index].category = category;
    products[index].tags = tags;
    products[index].description = description;
    localStorage.setItem(productsKey, JSON.stringify(products));
  }
}

export function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  localStorage.setItem(productsKey, JSON.stringify(products));
}

export function allProducts() {
  return products;
}

export function filterProductsBy(category, tags, withStock) {
  let filteredProducts = products;

  if (category != "" && category != null) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }

  if (tags != null && Array.isArray(tags) && tags.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      tags.every((tag) => product.tags && product.tags.includes(tag)),
    );
  }

  if (withStock === true) {
    filteredProducts = filteredProducts.filter(
      (product) => product.stock != null && product.stock > 0,
    );
  }

  return filteredProducts;
}

export function getProduct(id) {
  return products.find((product) => product.id === id) || null;
}

function createProduct(name, price, stock, img, category, tags, description) {
  let product = {
    id: crypto.randomUUID(),
    name: name,
    price: price,
    stock: stock,
    img: img,
    category: category,
    tags: tags,
    description: description,
  };
  return product;
}
