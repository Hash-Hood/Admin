document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("tracking-table-body");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.forEach(order => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order.orderId}</td>
      <td>${order.customer}</td>
      <td>${order.email}</td>
      <td>${order.phone}</td>
      <td>${order.trackingNo}</td>
      <td>${order.amount}</td>
    `;
    tbody.appendChild(tr);
  });
});
