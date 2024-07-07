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
