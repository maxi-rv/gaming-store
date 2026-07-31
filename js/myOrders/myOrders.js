import { getOrdersByLoggedAccount } from "../managers/ordersManager.js";

const ordersContainer = document.getElementById("contenedorPedidos");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  loadOrders();
});

export function loadOrders() {
  const orders = getOrdersByLoggedAccount();

  ordersContainer.innerHTML = "";

  // Use DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  // Iterate through array in reverse
  for (let i = orders.length - 1; i >= 0; i--) {
    const order = orders[i];
    const index = i;
    const orderCard = createOrderCard(order, index);
    fragment.appendChild(orderCard);
  }

  ordersContainer.appendChild(fragment);
}

function createOrderCard(order, index) {
  const card = document.createElement("div");
  card.className =
    "card mx-auto col-12 col-md-10 border-0 shadow-lg cardStyle my-4";
  card.setAttribute("data-bs-theme", "dark");

  const header = createHeader(order, index);
  card.appendChild(header);

  const { bodyItems, total } = createBodyItems(order.cart);
  bodyItems.forEach((item) => card.appendChild(item));

  const footer = createFooter(total);
  card.appendChild(footer);

  return card;
}

function createHeader(order, index) {
  const header = document.createElement("div");
  header.className = "card-header mb-2 border-bottom border-warning fw-bold";

  const icon = document.createElement("i");
  icon.className = "bi bi-box2 text-warning mx-3";
  header.appendChild(icon);

  const title = document.createElement("span");
  title.textContent = `Order: ${formatDate(order.date)}`;
  header.appendChild(title);

  return header;
}

function createBodyItems(cart) {
  const items = [];
  let total = 0;

  cart.forEach((item) => {
    const body = document.createElement("div");
    body.className =
      "card-body row g-0 border-0 border-bottom border-warning p-3 align-items-center";

    const imgCol = document.createElement("div");
    imgCol.className = "col-3 col-sm-4 col-md-3";

    const img = document.createElement("img");
    img.className = "img-fluid rounded-2";
    img.style.cssText = "max-height: 75px; width: auto;";
    img.src = item.product.img;
    img.alt = item.product.name;
    imgCol.appendChild(img);
    body.appendChild(imgCol);

    // Details column
    const detailsCol = document.createElement("div");
    detailsCol.className = "col-9 col-sm-8 col-md-9";

    const title = document.createElement("h4");
    title.className = "card-title ms-3 align-items-center";

    // Use spans with proper classes
    const nameSpan = createSpan(item.product.name);
    const qtySpan = createSpan(` x${item.quantity}`, "text-warning");
    const separatorSpan = createSpan(` : `);
    const subtotalSpan = createSpan(
      ` $${item.subtotal.toFixed(2)}`,
      "text-warning",
    );

    title.append(nameSpan, qtySpan, separatorSpan, subtotalSpan);
    detailsCol.appendChild(title);
    body.appendChild(detailsCol);

    items.push(body);
    total += item.subtotal;
  });

  return { bodyItems: items, total };
}

function createSpan(content, className = "") {
  const span = document.createElement("span");
  span.className = className;
  span.textContent = content;
  return span;
}

function createFooter(total) {
  const footer = document.createElement("div");
  footer.className = "d-flex flex-column align-items-end col-12  p-3";

  const totalElement = document.createElement("h3");
  totalElement.className = "m-2";
  footer.appendChild(totalElement);

  const totalElementA = document.createElement("span");
  totalElementA.className = "";
  totalElementA.textContent = `Total: `;
  totalElement.appendChild(totalElementA);

  const totalElementB = document.createElement("span");
  totalElementB.className = " text-warning";
  totalElementB.textContent = `$${total.toFixed(2)}`;
  totalElement.appendChild(totalElementB);

  return footer;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
