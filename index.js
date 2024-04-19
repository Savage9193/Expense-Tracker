const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");
const total_expense=document.getElementById("total_expense")
let total = 0;

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (description && category && !isNaN(amount)) {
    total += amount; 
    const newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`;

    expenseList.appendChild(newRow);

    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out all fields with valid data");
  }
});

total_expense.addEventListener("click", function () {
  totalDisplay.textContent = `Total amount: ${total}`;
});
