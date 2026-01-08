// auth.js

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const phoneBox = document.getElementById("phoneBox");
  const otpBox = document.getElementById("otpBox");
  const pinBox = document.getElementById("pinBox");

  const sendOtpBtn = document.getElementById("sendOtpBtn");
  const verifyOtpBtn = document.getElementById("verifyOtpBtn");
  const setPinBtn = document.getElementById("setPinBtn");

  // Redirect if already logged in
  if (localStorage.getItem("login") === "true") {
    window.location.href = "home.html";
  }

  // Send OTP button click
  sendOtpBtn.addEventListener("click", function () {
    const phone = document.getElementById("phone").value.trim();
    if (!phone) return alert("Enter phone number!");
    alert("OTP sent! (Demo OTP: 1234)");
    phoneBox.classList.add("hidden");
    otpBox.classList.remove("hidden");
  });

  // Verify OTP
  verifyOtpBtn.addEventListener("click", function () {
    const otp = document.getElementById("otp").value.trim();
    if (!otp) return alert("Enter OTP!");
    otpBox.classList.add("hidden");
    pinBox.classList.remove("hidden");
  });

  // Set PIN and login
  setPinBtn.addEventListener("click", function () {
    const pin = document.getElementById("pin").value.trim();
    if (!pin || pin.length !== 4) return alert("Enter 4-digit PIN!");
    localStorage.setItem("login", "true");
    localStorage.setItem("pin", pin);
    alert("Login successful!");
    window.location.href = "home.html";
  });
});
