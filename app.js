fetch("navBar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navigation").innerHTML = data;
  });
document.addEventListener("DOMContentLoaded", function () {
  // Navigate to customer.html when navigateButton is clicked
  const navigateButton = document.getElementById("navigateButton");
  if (navigateButton) {
    navigateButton.addEventListener("click", function () {
      window.location.href = "customer.html";
    });
  }

  // Navigate to index.html when navigationHomeButton is clicked
  const navigationHomeButton = document.getElementById("navigationHomeButton");
  if (navigationHomeButton) {
    navigationHomeButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  //navigate to addCustomer html
  const navigateAddCustomer = document.getElementById("navigationAddCustomer");
  if (navigateAddCustomer) {
    navigateAddCustomer.addEventListener("click", function () {
      window.location.href = "addCustomer.html";
    });
  }

  //navigate delete Customer html
  const navigateDeleteCustomer = document.getElementById(
    "navigateDeleteCustomer"
  );
  if (navigateDeleteCustomer) {
    navigateDeleteCustomer.addEventListener("click", function () {
      window.location.href = "deleteCustomer.html";
    });
  }

  //navigate to update customer html
  const navigateUpdateCustomer = document.getElementById(
    "navigateUpdateCustomer"
  );
  if (navigateUpdateCustomer) {
    navigateUpdateCustomer.addEventListener("click", function () {
      window.location.href = "updateCustomer.html";
    });
  }

  //navigate to search customer html
  const navigateSearchCustomer = document.getElementById(
    "navigateSearchCustomer"
  );
  if (navigateSearchCustomer) {
    navigateSearchCustomer.addEventListener("click", function () {
      window.location.href = "searchCustomer.html";
    });
  }
});

//Customer add delete update search
//add customerconst customers = [];
document.addEventListener("DOMContentLoaded", (event) => {
  const saveButton = document.getElementById("saveButton");
  const searchButton01 = document.getElementById("searchButton01");
  const searchButton02 = document.getElementById("searchButton02");

  // Retrieve existing customers from sessionStorage
  let customers = JSON.parse(sessionStorage.getItem('customers')) || [];

  if (saveButton) {
      saveButton.addEventListener("click", function(event) {
          event.preventDefault();

          const customer = {
              id: document.getElementById('input01').value,
              name: document.getElementById('input02').value,
              phone: document.getElementById('input03').value,
              address: document.getElementById('input04').value,
              description: document.getElementById('input05').value
          };

          // Add new customer to the array
          customers.push(customer);

          // Save the updated array back to sessionStorage
          sessionStorage.setItem('customers', JSON.stringify(customers));

          console.log(customers);

          // Reset the form after saving
          document.getElementById('customerAddForm').reset();
      });
  }

  if (searchButton01) {
      searchButton01.addEventListener("click", function(event) {
          event.preventDefault();

          const searchQuery = document.getElementById('searchField').value.trim().toLowerCase();

          // Find customer matching the search query
          const foundCustomer = customers.find(customer => customer.name.toLowerCase() === searchQuery);

          if (foundCustomer) {
              // Update labels with customer details
              document.getElementById('labelID').innerText = foundCustomer.id;
              document.getElementById('labelName').innerText = foundCustomer.name;
              document.getElementById('labelPhone').innerText = foundCustomer.phone;
              document.getElementById('labelAddress').innerText = foundCustomer.address;
              document.getElementById('labelDescription').innerText = foundCustomer.description;
          } else {
              // Clear labels if no matching customer found
              document.getElementById('labelID').innerText = '---------';
              document.getElementById('labelName').innerText = '---------';
              document.getElementById('labelPhone').innerText = '---------';
              document.getElementById('labelAddress').innerText = '---------';
              document.getElementById('labelDescription').innerText = '---------';
          }
      });
  }

  if (searchButton02) {
      searchButton02.addEventListener("click", function(event) {
          event.preventDefault();

          const searchQuery01 = document.getElementById('searchField02').value.trim().toLowerCase();

          // Find customer matching the search query
          const foundCustomer01 = customers.find(customer => customer.name.toLowerCase() === searchQuery01);

          if (foundCustomer01) {
              // Update input fields with customer details
              document.getElementById('input10').value = foundCustomer01.id;
              document.getElementById('input20').value = foundCustomer01.name;
              document.getElementById('input30').value = foundCustomer01.phone;
              document.getElementById('input40').value = foundCustomer01.address;
              document.getElementById('input50').value = foundCustomer01.description;
          } else {
              // Clear input fields if no matching customer found
              document.getElementById('input10').value = '';
              document.getElementById('input20').value = '';
              document.getElementById('input30').value = '';
              document.getElementById('input40').value = '';
              document.getElementById('input50').value = '';
          }
      });

      // Update customer details
      const updateButton = document.getElementById("updateButton");
      if (updateButton) {
          updateButton.addEventListener("click", function(event) {
              event.preventDefault();

              const customerID = document.getElementById('input10').value;
              const updatedCustomer = {
                  id: customerID,
                  name: document.getElementById('input20').value,
                  phone: document.getElementById('input30').value,
                  address: document.getElementById('input40').value,
                  description: document.getElementById('input50').value
              };

              // Find the index of the customer to be updated
              const index = customers.findIndex(customer => customer.id === customerID);

              if (index !== -1) {
                  // Replace the old customer with the updated customer
                  customers[index] = updatedCustomer;

                  // Save the updated array back to sessionStorage
                  sessionStorage.setItem('customers', JSON.stringify(customers));

                  console.log(customers);

                  // Optionally reset the form after updating
                  document.getElementById('customerUpdateForm').reset();
              }
          });
      }
  }
});






