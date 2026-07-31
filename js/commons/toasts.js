const toastContainer = document.getElementById("toastContainer");
const maxToasts = 3;

const toastTypes = {
  ADD: {
    className: "text-bg-warning",
    defaultMessage: "Item Added to Cart",
  },
  DELETE: {
    className: "text-bg-danger",
    defaultMessage: "Item Removed from Cart",
  },
};

export function showToast(message, type, delay) {
  const toastType = toastTypes[type] || toastTypes.SUCCESS;

  while (toastContainer.children.length >= maxToasts) {
    toastContainer.firstChild?.remove();
  }

  const toast = document.createElement("div");
  toast.className = `toast align-items-center border-0 ${toastType.className}`;
  toast.role = "alert";
  toast.setAttribute("data-bs-delay", delay.toString());
  toastContainer.appendChild(toast);

  const divContenedor = document.createElement("div");
  divContenedor.className = "d-flex";
  toast.appendChild(divContenedor);

  const toastBody = document.createElement("div");
  toastBody.className = "toast-body fw-bolder";
  toastBody.textContent = message;
  divContenedor.appendChild(toastBody);

  const closeButton = document.createElement("button");
  closeButton.className = "btn-close btn-close-white me-2 m-auto";
  closeButton.type = "button";
  closeButton.setAttribute("data-bs-dismiss", "toast");
  closeButton.setAttribute("aria-label", "Close");
  divContenedor.appendChild(closeButton);

  const toastInstance = new bootstrap.Toast(toast);
  toastInstance.show();
  toast.addEventListener("hidden.bs.toast", function () {
    toast.remove(); // Remove from DOM after hiding
  });
}
