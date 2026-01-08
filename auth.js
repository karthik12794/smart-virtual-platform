function sendOTP(){
  if(!document.getElementById("phone").value){ alert("Enter phone number"); return;}
  document.getElementById("phoneBox").classList.add("hidden");
  document.getElementById("otpBox").classList.remove("hidden");
}

function verifyOTP(){
  if(!document.getElementById("otp").value){ alert("Enter OTP"); return;}
  document.getElementById("otpBox").classList.add("hidden");
  document.getElementById("pinBox").classList.remove("hidden");
}

function setPIN(){
  if(!document.getElementById("pin").value){ alert("Enter PIN"); return;}
  localStorage.setItem("login","true");
  location.href="home.html";
}

function logout(){localStorage.clear(); location.href="index.html";}
