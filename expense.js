const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalText = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", () => {
  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);

  if (name === "" || amount <= 0) {
    alert("Please enter valid expense details");
    return;
  }

  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = name;

  const amountCell = document.createElement("td");
  amountCell.textContent = amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });

  row.appendChild(nameCell);
  row.appendChild(amountCell);
  expenseList.appendChild(row);

  total += amount;
  totalText.textContent =
    "Total: " +
    total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR"
    });

  expenseName.value = "";
  expenseAmount.value = "";
});
