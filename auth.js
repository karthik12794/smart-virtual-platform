function sendOTP() {
  document.getElementById("otpBox").classList.remove("hidden");
}

function verifyOTP() {
  document.getElementById("pinBox").classList.remove("hidden");
}

function setPIN() {
  localStorage.setItem("login", "true");
  location.href = "home.html";
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
