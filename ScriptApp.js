document.addEventListener("DOMContentLoaded", function () {
    // Navigate to customer.html when navigateButton is clicked
    const navigateButton = document.getElementById("navigationHomeButton01");
    if (navigateButton) {
      navigateButton.addEventListener("click", function () {
        window.location.href = "index01.html";
      });
    }

});


const cardData = {
    "Burgers": [
        ["Burger 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
        ["Burger 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    ],
    "Submarian": [
        ["Sub 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
        ["Sub 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    ],
    "Fries": [
        ["Fries 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
        ["Fries 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    ],
    "Pasta": [
        ["Pasta 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
        ["Pasta 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    ],
    "Chicken": [
        ["Chicken 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
        ["Chicken 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    ],
    "Beverage": [
        ["Beverage 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
        ["Beverage 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    ]
};

function updateContent(title) {
    document.getElementById("table-heading").innerText = title;
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    cardData[title].forEach(detail => {
        const row = document.createElement("tr");
        detail.forEach(data => {
            const cell = document.createElement("td");
            cell.innerText = data;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}
function updateTable(category) {
    const tableBody = document.querySelector("#menuTable tbody");
    tableBody.innerHTML = "";

    if (category in cardData) {
        cardData[category].forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item[0]}</td>
                <td>${item[1]}</td>
                <td>${item[2]}</td>
                <td>${item[3]}</td>
                <td>${item[4]}</td>
                <td>${item[5]}</td>
                <td><button class="btn btn-primary btn-sm add-to-cart">Add</button></td>
            `;
            tableBody.appendChild(row);
        });
    }
}
 // Event listener for card buttons
 const cardButtons = document.querySelectorAll(".card-button");
 cardButtons.forEach(button => {
     button.addEventListener("click", function() {
         const category = this.dataset.type;
         document.getElementById("selectedType").textContent = category;
         updateTable(category);
     });
 });

 // Event listener for Add buttons in the table
 document.addEventListener("click", function(event) {
     if (event.target.classList.contains("add-to-cart")) {
         const itemRow = event.target.closest("tr");
         const itemName = itemRow.cells[0].textContent;
         const itemPrice = itemRow.cells[2].textContent;

         const orderItems = document.getElementById("orderItems");
         const orderItem = document.createElement("div");
         orderItem.classList.add("mb-2");
         orderItem.innerHTML = `
             <p><strong>${itemName}</strong> - Price: ${itemPrice}</p>
         `;
         orderItems.appendChild(orderItem);
     }
 });