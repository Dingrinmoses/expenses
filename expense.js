let totalAmount = 0;

function addExpense() {
  const titleInput = document.getElementById("title");
  const amountInput = document.getElementById("amount");
  const list = document.getElementById("expenseList");
  const total = document.getElementById("total");

  const title = titleInput.value;
  const amount = Number(amountInput.value);

  if (title === "" || amount === 0) {
    alert("Please enter expense name and amount");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${title}</td>
    <td>?${amount}</td>
  `;

  list.appendChild(row);

  totalAmount += amount;
  total.textContent = totalAmount;

  titleInput.value = "";
  amountInput.value = "";
}
