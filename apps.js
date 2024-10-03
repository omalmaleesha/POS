document.addEventListener('DOMContentLoaded', function() {
    // Function to populate the table with customer data
    function populateTable() {
        // Retrieve customer data from sessionStorage
        const customers = JSON.parse(sessionStorage.getItem('customers')) || [];

        // Select the table body where the rows will be added
        const tableBody = document.querySelector('#customersTable tbody');

        // Clear any existing rows
        tableBody.innerHTML = '';

        // Loop through the customers array and create table rows
        customers.forEach(customer => {
            // Create a new table row
            const row = document.createElement('tr');

            // Create and append table cells with customer data
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.address}</td>
                <td>${customer.description}</td>
            `;

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }

    // Add event listener to the "Reload" button
    document.querySelector('#reloadButton').addEventListener('click', function() {
        populateTable();
    });
});
