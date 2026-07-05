const toastContainer = document.getElementById("toastContainer");

export function showToast() {
  const MAX_TOASTS = 3;

  while (toastContainer.children.length >= MAX_TOASTS) {
    toastContainer.firstChild?.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast align-items-center text-bg-warning border-0";
  toast.role = "alert";
  toast.setAttribute("data-bs-delay", "3000");
  toastContainer.appendChild(toast);

  const divContenedor = document.createElement("div");
  divContenedor.className = "d-flex";
  toast.appendChild(divContenedor);

  const toastBody = document.createElement("div");
  toastBody.className = "toast-body fw-bolder";
  toastBody.innerHTML = "Producto agregado al Carrito!";
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
