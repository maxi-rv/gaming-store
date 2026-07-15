import { addProduct, allProducts } from "../managers/productsManager.js";

import {
  addToCart,
  getCartItemByProductID,
  isProductInCart,
  deleteFromCart,
} from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";

import { getCategory } from "../managers/categoriesManager.js";

// Tabla tBody
const catalog = document.getElementById("cardContainer");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  const products = allProducts();
  loadCatalog(products);
});

function createProductCard(product) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "col p-0";
  // Set fixed width for cards
  containerDiv.style.flex = "0 0 280px"; // Fixed card width
  containerDiv.style.maxWidth = "280px";

  const card = document.createElement("div");
  card.className = "card shadow border-0 m-1 ";
  containerDiv.appendChild(card);

  return { containerDiv, card };
}

function createProductImage(product) {
  const image = document.createElement("img");
  image.src = product.img;
  image.classList.add("card-img-top");
  image.style = "height: 12rem;";
  return image;
}

function createProductTitle(product) {
  const title = document.createElement("h4");
  title.innerHTML = product.name;
  title.className = "card-title";
  title.style.maxHeight = "5rem";
  return title;
}

function createProductPrice(product) {
  const price = document.createElement("h3");
  price.className = "justify-content-center mb-3 text-warning-emphasis";
  price.innerHTML = "$" + product.price;
  return price;
}

function createAddToCartButton(productId) {
  const button = document.createElement("button");
  button.className = "btn btn-outline-warning rounded-pill w-100 my-2";
  button.type = "button";
  button.setAttribute("data-identificador", productId);

  const icon = document.createElement("i");
  icon.className = "bi bi-cart-plus mx-1";
  button.appendChild(icon);

  const span = document.createElement("span");
  span.textContent = "Add to Cart";
  button.appendChild(span);

  return button;
}

function createQuantityInput(product) {
  const input = document.createElement("input");
  input.className =
    "form-control border-warning-subtle rounded-center-pill flex-grow-1";
  input.style = "min-width: 50px; max-width: 50%";
  input.type = "number";
  input.max = product.stock;
  return input;
}

function createQuantityControls() {
  const container = document.createElement("div");
  container.className = "input-group justify-content-center flex-nowrap";
  container.style = "max-width: 150px;";

  const minusButton = document.createElement("button");
  minusButton.className = "btn btn-outline-warning rounded-start-pill";
  minusButton.type = "button";

  const minusIcon = document.createElement("i");
  minusIcon.className = "bi bi-dash-lg";
  minusButton.appendChild(minusIcon);
  container.appendChild(minusButton);

  const plusButton = document.createElement("button");
  plusButton.className = "btn btn-outline-warning rounded-end-pill";
  plusButton.type = "button";

  const plusIcon = document.createElement("i");
  plusIcon.className = "bi bi-plus-lg";
  plusButton.appendChild(plusIcon);
  container.appendChild(plusButton);

  return { container, minusButton, plusButton };
}

function createStockDisplay(product) {
  const container = document.createElement("div");
  container.className =
    "input-group justify-content-center text-nowrap flex-nowrap";
  container.style = "max-width: 150px;";

  const label = document.createElement("span");
  label.className = "input-group-text border-warning-subtle rounded-start-pill";
  label.innerHTML = "Stock";
  container.appendChild(label);

  const value = document.createElement("span");
  value.className = "input-group-text border-warning-subtle rounded-end-pill";
  value.style = "min-width: 50px;";
  value.innerHTML = product.stock;
  container.appendChild(value);

  return container;
}

function initializeQuantityValue(input, product) {
  if (product.stock > 0) {
    if (isProductInCart(product.id)) {
      input.value = getCartItemByProductID(product.id).quantity;
      input.min = 1;
    } else {
      input.value = 1;
      input.min = 1;
    }
  } else {
    input.value = 0;
    input.min = 0;
    input.disabled = true;
    return false; // Product is out of stock
  }
  return true; // Product is in stock
}

function updateButtonState(button, isInCart) {
  const icon = button.querySelector("i");
  const span = button.querySelector("span");

  if (isInCart) {
    // Set to "In Cart" state
    icon.className = "bi bi-cart-check-fill mx-1";
    button.classList.add("btn-warning");
    button.classList.remove("btn-outline-warning");
    span.textContent = "In Cart";
  } else {
    // Reset to default "Add to Cart" state
    icon.className = "bi bi-cart-plus mx-1";
    button.classList.remove("btn-warning");
    button.classList.add("btn-outline-warning");
    span.textContent = "Add to Cart";
  }
}

function handleQuantityChange(
  productId,
  input,
  addToCartButton,
  showToastOnAdd = false,
) {
  const quantity = parseInt(input.value) || 0;

  if (quantity > 0) {
    addToCart(productId, quantity);
    updateCartBadge();
    updateButtonState(addToCartButton, true);

    if (showToastOnAdd) {
      showToast("Item Added to Cart", "ADD", 3000);
    }
  } else if (quantity === 0) {
    // If quantity is 0, remove from cart
    deleteFromCart(getCartItemByProductID(productId));
    updateCartBadge();
    updateButtonState(addToCartButton, false);
  }
}

function handleRemoveFromCart(productId, input, addToCartButton) {
  // Reset quantity input to 1 (or minimum value)
  const minValue = parseInt(input.min) || 1;
  input.value = minValue;

  // Remove from cart
  deleteFromCart(getCartItemByProductID(productId));
  updateCartBadge();

  // Reset button to default "Add to Cart" state
  updateButtonState(addToCartButton, false);

  // Show removal toast
  showToast("Item removed from cart", "DELETE", 3000);
}

// ===== Main Function =====

export function loadCatalog(products) {
  // Make catalog responsive with flex-wrap and centered
  catalog.className =
    "d-flex flex-wrap justify-content-center gap-2 mx-5 mx-sm-0";
  catalog.style.gap = "10px";
  catalog.innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    const product = products[index];

    // Create card structure
    const { containerDiv, card } = createProductCard(product);
    catalog.appendChild(containerDiv);

    // Add image
    card.appendChild(createProductImage(product));

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    // Add title
    cardBody.appendChild(createProductTitle(product));

    // Add price
    cardBody.appendChild(createProductPrice(product));

    // Create input row
    const numericRow = document.createElement("div");
    numericRow.className = "d-flex align-items-center w-100";
    cardBody.appendChild(numericRow);

    // Create add to cart button
    const addToCartButton = createAddToCartButton(product.id);

    // Create a container for button
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "d-flex align-items-center w-100";
    buttonContainer.appendChild(addToCartButton);
    cardBody.appendChild(buttonContainer);

    // Create quantity controls
    const {
      container: quantityContainer,
      minusButton,
      plusButton,
    } = createQuantityControls();
    const quantityInput = createQuantityInput(product);

    // Insert input between minus and plus buttons
    quantityContainer.insertBefore(quantityInput, plusButton);
    numericRow.appendChild(quantityContainer);

    // Create stock display
    const stockDisplay = createStockDisplay(product);
    numericRow.appendChild(stockDisplay);

    // Initialize quantity value
    const isInStock = initializeQuantityValue(quantityInput, product);
    if (!isInStock) {
      addToCartButton.disabled = true;
    }

    // Update button state if product is in cart
    if (isProductInCart(product.id)) {
      updateButtonState(addToCartButton, true);
    }

    // ===== Event Listeners =====

    // Minus button handler
    minusButton.addEventListener("click", function (event) {
      let currentValue = parseInt(quantityInput.value) || 0;
      const minValue = parseInt(quantityInput.min) || 0;

      if (currentValue > minValue) {
        currentValue--;
        quantityInput.value = currentValue;
        handleQuantityChange(product.id, quantityInput, addToCartButton);
      }

      quantityInput.value = Math.max(
        parseInt(quantityInput.min) || 0,
        parseInt(quantityInput.value) || 0,
      );
    });

    // Plus button handler
    plusButton.addEventListener("click", function (event) {
      let currentValue = parseInt(quantityInput.value) || 0;
      const maxValue = parseInt(quantityInput.max) || Infinity;

      if (currentValue < maxValue) {
        currentValue++;
        quantityInput.value = currentValue;
        handleQuantityChange(product.id, quantityInput, addToCartButton);
      }

      quantityInput.value = Math.min(
        parseInt(quantityInput.max) || Infinity,
        parseInt(quantityInput.value) || 0,
      );
    });

    // Manual input change handler
    quantityInput.addEventListener("change", function () {
      const value = parseInt(this.value) || 0;
      if (value >= 0 && value <= product.stock) {
        handleQuantityChange(product.id, quantityInput, addToCartButton);
      }
    });

    // Add to cart button handler
    addToCartButton.addEventListener("click", function (event) {
      handleQuantityChange(
        product.id,
        quantityInput,
        addToCartButton,
        true, // Show toast on button click
      );
    });
  }
}
