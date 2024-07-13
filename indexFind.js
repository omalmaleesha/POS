document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username and password match
    if (username === 'admin' && password === 'admin') {
        // Redirect to index01.html
        window.location.href = 'index01.html';
    } else {
        // Display error message
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Incorrect username or password. Please try again.';
    }
});