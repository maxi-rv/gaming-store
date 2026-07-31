import {
  addToCart,
  getCartItemByProductID,
  isProductInCart,
  deleteFromCart,
} from "../managers/cartManager.js";

import { updateCartBadge } from "../commons/cartBadge.js";
import { getCategory } from "../managers/categoriesManager.js";
import { getTag } from "../managers/tagsManager.js";
import { showToast } from "../commons/toasts.js";

// ========== Helper Functions (reused from catalog) ==========

function createQuantityControls() {
  const container = document.createElement("div");
  container.className = "input-group justify-content-center flex-nowrap";
  container.style = "max-width: 150px; margin: 0 auto;";

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

function createQuantityInput(product) {
  const input = document.createElement("input");
  input.className =
    "form-control border-warning-subtle rounded-center-pill flex-grow-1 text-center";
  input.type = "number";
  input.min = 1;
  input.max = product.stock;
  input.value = 1;
  return input;
}

function createStockDisplay(product) {
  const container = document.createElement("div");
  container.className =
    "input-group justify-content-center text-nowrap flex-nowrap";
  container.style = "max-width: 150px; margin: 0.5rem auto;";

  const label = document.createElement("span");
  label.className = "input-group-text border-warning-subtle rounded-start-pill";
  label.textContent = "Stock";
  container.appendChild(label);

  const value = document.createElement("span");
  value.className = "input-group-text border-warning-subtle rounded-end-pill";
  value.style = "min-width: 50px;";
  value.textContent = product.stock;
  container.appendChild(value);

  return container;
}

function createAddToCartButton(productId) {
  const button = document.createElement("button");
  button.className = "btn btn-outline-warning rounded-pill w-75 mx-auto my-2";
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

function updateButtonState(button, isInCart) {
  const icon = button.querySelector("i");
  const span = button.querySelector("span");

  if (isInCart) {
    icon.className = "bi bi-cart-check-fill mx-1";
    button.classList.add("btn-warning");
    button.classList.remove("btn-outline-warning");
    span.textContent = "In Cart";
  } else {
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
      showToast("Product Added to Cart", "ADD", 3000);
    }
  } else if (quantity === 0) {
    const cartItem = getCartItemByProductID(productId);
    if (cartItem) {
      deleteFromCart(cartItem.id);
      updateCartBadge();
      updateButtonState(addToCartButton, false);
      showToast("Product Removed from Cart", "DELETE", 3000);
    }
  }
}

// Helper to initialize Bootstrap tooltip
function initTooltip(element) {
  if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
    bootstrap.Tooltip.getOrCreateInstance(element);
  }
}

// ---- Main Modal Function ----
export function openProductDetailModal(product) {
  const modalEl = document.getElementById("productDetailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalFooter = document.getElementById("modalFooter");

  // ---- Attach cleanup for tooltips (once) ----
  if (!modalEl._tooltipCleanup) {
    modalEl.addEventListener("hidden.bs.modal", function () {
      const tooltipElements = modalEl.querySelectorAll(
        '[data-bs-toggle="tooltip"]',
      );
      tooltipElements.forEach((el) => {
        const tooltip = bootstrap.Tooltip.getInstance(el);
        if (tooltip) {
          tooltip.dispose();
        }
      });
    });
    modalEl._tooltipCleanup = true;
  }

  // Set title
  modalTitle.textContent = product.name;

  // Clear body and footer
  modalBody.innerHTML = "";
  modalFooter.innerHTML = "";

  // Build modal body (image, price, category, tags, description)
  const container = document.createElement("div");
  container.className = "row g-3 align-items-start p-2";

  // Image column
  const imgCol = document.createElement("div");
  imgCol.className = "col-md-5 text-center";
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name || "";
  img.className = "img-fluid rounded shadow-sm";
  img.style.maxHeight = "300px";
  imgCol.appendChild(img);
  container.appendChild(imgCol);

  // Details column
  const detailCol = document.createElement("div");
  detailCol.className = "col-md-7";

  // Price
  const priceP = document.createElement("h3");
  priceP.className = "text-warning-emphasis";
  priceP.innerHTML = `<strong>$${product.price}</strong>`;
  detailCol.appendChild(priceP);

  // Category (with tooltip)
  const catDiv = document.createElement("div");
  catDiv.className = "mb-2";
  const catIcon = document.createElement("i");
  catIcon.className = "bi bi-bookmark me-1";
  catDiv.appendChild(catIcon);
  const catStrong = document.createElement("strong");
  catStrong.textContent = "Category: ";
  catDiv.appendChild(catStrong);
  const catSpan = document.createElement("span");
  // Get full category object
  const categoryObj = getCategory(product.category);
  catSpan.textContent = categoryObj?.name || "N/A";
  if (categoryObj?.description) {
    catSpan.setAttribute("data-bs-toggle", "tooltip");
    catSpan.setAttribute("title", categoryObj.description);
  }
  catDiv.appendChild(catSpan);
  detailCol.appendChild(catDiv);

  // Tags (with tooltips)
  const tagIds = product.tags || [];
  // Get full tag objects so we can access descriptions
  const tagObjs = tagIds.map((id) => getTag(id)).filter(Boolean);
  if (tagObjs.length > 0) {
    const tagDiv = document.createElement("div");
    tagDiv.className = "mb-2";
    const tagIcon = document.createElement("i");
    tagIcon.className = "bi bi-tags me-1";
    tagDiv.appendChild(tagIcon);
    const tagStrong = document.createElement("strong");
    tagStrong.textContent = "Tags: ";
    tagDiv.appendChild(tagStrong);
    const tagBadgesContainer = document.createElement("span");
    tagBadgesContainer.className = "d-inline-flex flex-wrap gap-1";

    tagObjs.forEach((tagObj) => {
      const badge = document.createElement("span");
      badge.className = "badge bg-warning rounded-pill text-black";
      badge.textContent = tagObj.name;
      if (tagObj.description) {
        badge.setAttribute("data-bs-toggle", "tooltip");
        badge.setAttribute("title", tagObj.description);
      }
      tagBadgesContainer.appendChild(badge);
      // Initialize tooltip on the badge
      initTooltip(badge);
    });

    tagDiv.appendChild(tagBadgesContainer);
    detailCol.appendChild(tagDiv);
  }

  // Description
  const descP = document.createElement("p");
  descP.className = "mt-2";
  descP.textContent = product.description || "";
  detailCol.appendChild(descP);

  container.appendChild(detailCol);
  modalBody.appendChild(container);

  // ---- Initialize tooltip on category span (must be after appending to DOM) ----
  initTooltip(catSpan);

  // ---- Build the footer row (stock, quantity, add-to-cart) ----
  const row = document.createElement("div");
  row.className =
    "d-flex flex-wrap justify-content-center align-items-center gap-2 w-100";

  const stockDisplay = createStockDisplay(product);
  stockDisplay.style.margin = "0";
  row.appendChild(stockDisplay);

  const {
    container: qtyContainer,
    minusButton,
    plusButton,
  } = createQuantityControls();
  qtyContainer.style.margin = "0";
  const quantityInput = createQuantityInput(product);
  qtyContainer.insertBefore(quantityInput, plusButton);
  row.appendChild(qtyContainer);

  const addToCartButton = createAddToCartButton(product.id);
  addToCartButton.classList.remove("w-75", "mx-auto", "my-2");
  addToCartButton.classList.add("flex-shrink-0");
  addToCartButton.style.minWidth = "120px";
  row.appendChild(addToCartButton);

  modalFooter.appendChild(row);

  // ---- Initialize state and event listeners (unchanged) ----
  if (product.stock <= 0) {
    quantityInput.value = 0;
    quantityInput.min = 0;
    quantityInput.disabled = true;
    addToCartButton.disabled = true;
    minusButton.disabled = true;
    plusButton.disabled = true;
  } else {
    if (isProductInCart(product.id)) {
      const cartItem = getCartItemByProductID(product.id);
      quantityInput.value = cartItem.quantity;
      quantityInput.min = 0;
      updateButtonState(addToCartButton, true);
    } else {
      quantityInput.value = 1;
      quantityInput.min = 0;
    }
  }

  // ---- Event Listeners (unchanged) ----
  minusButton.addEventListener("click", function () {
    let val = parseInt(quantityInput.value) || 0;
    const min = parseInt(quantityInput.min) || 0;
    if (val > min) {
      val--;
      quantityInput.value = val;
      handleQuantityChange(product.id, quantityInput, addToCartButton);
    }
  });

  plusButton.addEventListener("click", function () {
    let val = parseInt(quantityInput.value) || 0;
    const max = parseInt(quantityInput.max) || Infinity;
    if (val < max) {
      val++;
      quantityInput.value = val;
      handleQuantityChange(product.id, quantityInput, addToCartButton);
    }
  });

  quantityInput.addEventListener("change", function () {
    const val = parseInt(this.value) || 0;
    if (val >= 0 && val <= product.stock) {
      handleQuantityChange(product.id, quantityInput, addToCartButton);
    } else {
      this.value = Math.min(Math.max(val, 0), product.stock);
    }
  });

  addToCartButton.addEventListener("click", function () {
    if (isProductInCart(product.id)) {
      const cartItem = getCartItemByProductID(product.id);
      if (cartItem) {
        deleteFromCart(cartItem.id);
        updateCartBadge();
        updateButtonState(addToCartButton, false);
        quantityInput.value = 1;
        showToast("Product Removed from Cart", "DELETE", 3000);
      }
    } else {
      const qty = parseInt(quantityInput.value) || 0;
      if (qty > 0) {
        handleQuantityChange(product.id, quantityInput, addToCartButton, true);
      } else {
        showToast("Quantity must be at least 1", "DELETE", 3000);
      }
    }
  });

  // ---- Show the modal ----
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}
