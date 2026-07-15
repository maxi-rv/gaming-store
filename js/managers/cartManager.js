import { getProduct, editProduct } from "../managers/productsManager.js";

let cart = [];
const cartKey = "carrito";

window.addEventListener("load", function () {
  cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  updateCart();
  localStorage.setItem(cartKey, JSON.stringify(cart));
});

export function addToCart(productID, quantity) {
  updateCart();
  let cartItem = getCartItemByProductID(productID);

  if (cartItem != null) {
    addByQuantityToCart(cartItem.id, quantity);
  } else {
    cartItem = createCartItem(productID, quantity);
    cart.push(cartItem);
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
}

function addByQuantityToCart(cartItemID, quantity) {
  updateCart();
  const index = cart.findIndex((cartItem) => cartItem.id === cartItemID);

  const newQuantity = Number(cart[index].quantity) + Number(quantity);
  const maxStock = cart[index].product.stock;

  if (index !== -1 && newQuantity <= maxStock) {
    cart[index].quantity = newQuantity;
    cart[index].subtotal = cart[index].quantity * cart[index].product.price;
    localStorage.setItem(cartKey, JSON.stringify(cart));
  } else if (index !== -1) {
    cart[index].quantity = maxStock;
    cart[index].subtotal = cart[index].quantity * cart[index].product.price;
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
}

export function editQuantity(cartItemID, quantity) {
  updateCart();
  const index = cart.findIndex((cartItem) => cartItem.id === cartItemID);

  const maxStock = cart[index].product.stock;

  if (index !== -1 && quantity <= maxStock) {
    cart[index].quantity = Number(quantity);
    cart[index].subtotal = cart[index].quantity * cart[index].product.price;
    localStorage.setItem(cartKey, JSON.stringify(cart));
  } else if (index !== -1) {
    cart[index].quantity = maxStock;
    cart[index].subtotal = cart[index].quantity * cart[index].product.price;
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
}

export function deleteFromCart(cartItemID) {
  cart = cart.filter((cartItem) => cartItem.id !== cartItemID);

  localStorage.setItem(cartKey, JSON.stringify(cart));
}

export function getCartItem(cartItemID) {
  return cart.find((item) => item.id === cartItemID) || null;
}

export function getCart() {
  updateCart();
  return cart;
}

export function isProductInCart(productID) {
  return cart.some((item) => item.product.id === productID);
}

export function closeCart() {
  updateCart();
  for (let index = 0; index < cart.length; index++) {
    editProduct(
      cart[index].product.id,
      cart[index].product.name,
      cart[index].product.price,
      cart[index].product.stock - cart[index].quanity,
      cart[index].product.img,
      cart[index].product.category,
      cart[index].product.tags,
      cart[index].product.description,
    );
  }

  const toReturnCart = cart;
  cleanCart();

  return toReturnCart;
}

export function cleanCart() {
  cart = [];
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function updateCart() {
  for (let index = 0; index < cart.length; index++) {
    let product = getProduct(cart[index].id);
    if (product != null) {
      cart[index].product.name = product.name;
      cart[index].product.price = product.price;
      cart[index].product.stock = product.stock;
      cart[index].product.img = product.img;
      cart[index].product.category = product.category;
      cart[index].product.tags = product.tags;
      cart[index].product.description = product.description;
    }
  }
}

export function getCartItemByProductID(productID) {
  return cart.find((cartItem) => cartItem.product.id === productID) || null;
}

function createCartItem(productID, quantity) {
  let product = getProduct(productID);
  let cartItem = {
    id: crypto.randomUUID(),
    product: product,
    quantity: quantity,
    subtotal: quantity * product.price,
  };

  return cartItem;
}
