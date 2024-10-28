function saveUserInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Save user info in localStorage for your access later
    localStorage.setItem("storedUsername", username);
    localStorage.setItem("storedPassword", password);

    // Redirect user to their dashboard/home
    window.location.href = "dashboard.html";
}

// Fetch stored info from localStorage
var username = localStorage.getItem("storedUsername");
var password = localStorage.getItem("storedPassword");

// Display it on the information page
document.getElementById("storedUsername").innerHTML = "Username: " + username;
document.getElementById("storedPassword").innerHTML = "Password: " + password;

// Clear stored data after displaying
localStorage.removeItem("storedUsername");
localStorage.removeItem("storedPassword");