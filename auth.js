// auth.js

document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const phoneBox = document.getElementById("phoneBox");
    const otpBox = document.getElementById("otpBox");
    const pinBox = document.getElementById("pinBox");

    const phoneInput = document.getElementById("phone");
    const otpInput = document.getElementById("otp");
    const pinInput = document.getElementById("pin");

    const sendOtpBtn = document.getElementById("sendOtpBtn");
    const verifyOtpBtn = document.getElementById("verifyOtpBtn");
    const setPinBtn = document.getElementById("setPinBtn");

    // Redirect if already logged in
    if (localStorage.getItem("login") === "true") {
        window.location.href = "home.html";
    }

    // Send OTP
    sendOtpBtn.addEventListener("click", () => {
        const phone = phoneInput.value.trim();
        if (!phone || phone.length < 10) {
            alert("Please enter a valid phone number!");
            return;
        }
        alert("OTP Sent! (Demo OTP is 1234)");
        phoneBox.classList.add("hidden");
        otpBox.classList.remove("hidden");
    });

    // Verify OTP
    verifyOtpBtn.addEventListener("click", () => {
        const otp = otpInput.value.trim();
        if (!otp) {
            alert("Please enter the OTP!");
            return;
        }
        // Demo accepts any OTP
        otpBox.classList.add("hidden");
        pinBox.classList.remove("hidden");
    });

    // Set PIN & login
    setPinBtn.addEventListener("click", () => {
        const pin = pinInput.value.trim();
        if (!pin || pin.length !== 4 || isNaN(pin)) {
            alert("Please enter a 4-digit numeric PIN!");
            return;
        }
        // Save login status
        localStorage.setItem("login", "true");
        localStorage.setItem("pin", pin);
        alert("Login successful!");
        window.location.href = "home.html";
    });
});
