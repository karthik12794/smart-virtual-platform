// auth.js

// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function () {
    // Check if user already logged in
    if (localStorage.getItem("login") === "true") {
        location.href = "home.html";
    }
});

function sendOTP() {
    const phone = document.getElementById("phone").value.trim();
    if (!phone) {
        alert("Please enter phone number!");
        return;
    }
    // Hide phone input, show OTP input
    document.getElementById("phoneBox").classList.add("hidden");
    document.getElementById("otpBox").classList.remove("hidden");
    alert("OTP Sent! (Demo OTP is 1234)");
}

function verifyOTP() {
    const otp = document.getElementById("otp").value.trim();
    if (!otp) {
        alert("Please enter OTP!");
        return;
    }
    // For demo, accept any OTP
    document.getElementById("otpBox").classList.add("hidden");
    document.getElementById("pinBox").classList.remove("hidden");
}

function setPIN() {
    const pin = document.getElementById("pin").value.trim();
    if (!pin || pin.length !== 4) {
        alert("Please enter a 4-digit PIN!");
        return;
    }
    // Save login status in localStorage
    localStorage.setItem("login", "true");
    localStorage.setItem("pin", pin); // optional: store pin for demo
    alert("Login Successful!");
    location.href = "home.html";
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        location.href = "index.html";
    }
}
