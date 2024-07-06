fetch('navBar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navigation').innerHTML = data;
});
document.addEventListener("DOMContentLoaded", function() {
    // Navigate to customer.html when navigateButton is clicked
    const navigateButton = document.getElementById("navigateButton");
    if (navigateButton) {
        navigateButton.addEventListener("click", function() {
            window.location.href = "customer.html";
        });
    }

    // Navigate to index.html when navigationHomeButton is clicked
    const navigationHomeButton = document.getElementById("navigationHomeButton");
    if (navigationHomeButton) {
        navigationHomeButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    //navigate to addCustomer interface
    const navigateAddCustomer = document.getElementById("navigationAddCustomer");
    if (navigateAddCustomer) {
        navigateAddCustomer.addEventListener("click", function(){
            window.location.href = "addCustomer.html";
        })
    }
});
