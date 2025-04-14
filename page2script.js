document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("error-message").style.display = "none";
});

function login() {
    const validUsername = "Jade Rivero";
    const validPassword = "02/28/2001"; 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        alert("Login successful! Welcome, Mahal na Prinsesa!");
        window.location.href = "dashboard.html"; 
    } else {
        errorMessage.style.display = "block";
    }
}
