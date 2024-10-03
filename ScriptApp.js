document.addEventListener("DOMContentLoaded", function () {
    // Navigate to customer.html when navigateButton is clicked
    const navigateButton = document.getElementById("navigationHomeButton01");
    if (navigateButton) {
      navigateButton.addEventListener("click", function () {
        window.location.href = "index01.html";
      });
    }
    
    const navigateBill = document.getElementById("navigationHomeButtonBill");
    if (navigateBill) {
        navigateBill.addEventListener("click", function () {
        window.location.href = "bill.html";
      });
    }

    const additem = document.getElementById("additem");
    if (additem) {
        additem.addEventListener("click", function () {
        window.location.href = "addItem.html";
      });
    }

    const deleteitem = document.getElementById("deleteitem");
    if (deleteitem) {
        deleteitem.addEventListener("click", function () {
        window.location.href = "deleteItem.html";
      });
    }
});


const cardDatas = {
    // "Burgers": [
    //     ["Burger 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
    //     ["Burger 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    // ],
    // "Submarian": [
    //     ["Sub 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
    //     ["Sub 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    // ],
    // "Fries": [
    //     ["Fries 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
    //     ["Fries 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    // ],
    // "Pasta": [
    //     ["Pasta 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
    //     ["Pasta 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    // ],
    // "Chicken": [
    //     ["Chicken 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
    //     ["Chicken 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    // ],
    // "Beverage": [
    //     ["Beverage 1", "Description 1", "Price 1", "Calories 1", "Size 1", "Type 1"],
    //     ["Beverage 2", "Description 2", "Price 2", "Calories 2", "Size 2", "Type 2"]
    // ]
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

    if (category in cardDatas) {
      cardDatas[category].forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${item[0]}</td>
          <td>${item[2]}</td>
          <td>${item[1]}</td>
          <td>${item[3]}</td>
          <td>${item[4]}</td>
          <td><button class="btn btn-primary btn-sm add-to-cart">Add</button></td>
        `;
        tableBody.appendChild(row);
      });
    }
  }
 // Event listener for card buttons
 document.addEventListener("DOMContentLoaded", function() {
    const cardButtons = document.querySelectorAll(".card-button");
    cardButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.dataset.type;
            document.getElementById("selectedType").textContent = category;
            updateTables(category); // Call the correct function
        });
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

 function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemCategory = document.getElementById('itemCategory').value;
 
    const item = {
        name: itemName,
        description: itemDescription,
        quantity: itemQuantity,
        price: itemPrice,
        category: itemCategory
    };
 
    const allowedCategories = ["Burgers", "Submarian", "Fries", "Pasta", "Chicken", "Beverage"];
 
    if (allowedCategories.includes(itemCategory)) {
        let categoryArray = JSON.parse(localStorage.getItem(itemCategory)) || [];
        categoryArray.push(item);
        localStorage.setItem(itemCategory, JSON.stringify(categoryArray));
 
        document.getElementById('itemName').value = '';
        document.getElementById('itemDescription').value = '';
        document.getElementById('itemQuantity').value = '';
        document.getElementById('itemPrice').value = '';
        document.getElementById('itemCategory').value = '';
 
        console.log('Item added to', itemCategory, 'category:', item);
    } else {
        alert("Invalid category! Please use one of the following categories: " + allowedCategories.join(", "));
    }
 }
 
 function updateTables(category) {
    const itemsArray = JSON.parse(localStorage.getItem(category)) || [];
    const tableBody = document.querySelector("#menuTable tbody");
    tableBody.innerHTML = "";
 
    console.log(`Updating table for category: ${category}`);
    console.log(itemsArray);
 
    if (itemsArray.length === 0) {
        console.log("No items to display.");
        return;
    }
 
    itemsArray.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.description}</td>
            <td>${item.price}</td>
            <td>${item.category}</td>
            <td><button class="btn btn-primary btn-sm add-to-cart">Add</button></td>
        `;
        tableBody.appendChild(row);
    });
 }
 
 



  