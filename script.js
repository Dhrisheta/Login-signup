// Function to validate registration form
function validateForm() {
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let isValid = true;

    if (fullName.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
        isValid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    if (phone.length !== 10 || phone === "123456789") {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById("passwordError").innerText = "Choose a stronger password.";
        isValid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        showPopup();
    }

    return false;
}

// Function to show registration success popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}
// 🎉 Show Colorful Registration Success Popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);  // Wait 3 seconds before redirecting
}

// 🎊 Show Colorful Login Success Popup
function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "flex";
    setTimeout(() => {
        alert("Welcome! 🎶 Enjoy your experience!");
    }, 3000);
}

// Function to validate login
function validateLogin() {
    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        document.getElementById("loginPopup").style.display = "flex";
        setTimeout(() => {
            alert("Welcome!");
        }, 2000);
        return false;
    } else {
        alert("Invalid credentials");
        return false;
    }
}
