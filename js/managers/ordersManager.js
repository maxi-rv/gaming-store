import { getLoggedAccountID } from "../managers/sessionManager.js";
import { getAccountByID } from "../managers/accountsManager.js";

let orders = [];
const ordersKey = "pedidos";

window.addEventListener("load", function () {
  orders = JSON.parse(localStorage.getItem(ordersKey)) || [];
  localStorage.setItem(ordersKey, JSON.stringify(orders));
});

export function addOrder(cart) {
  const accountID = getLoggedAccountID();

  if (accountID != null) {
    const order = createOrder(accountID, cart);
    orders.push(order);
    localStorage.setItem(ordersKey, JSON.stringify(orders));
  }
}

export function getOrdersByLoggedAccount() {
  const accountID = getLoggedAccountID();

  if (accountID != null) {
    let filteredOrders = orders.filter(
      (order) => order.accountID === accountID,
    );
    return filteredOrders;
  }
}

function createOrder(accountID, cart) {
  let order = {
    id: crypto.randomUUID(),
    accountID: accountID,
    cart: cart,
  };

  return order;
}
