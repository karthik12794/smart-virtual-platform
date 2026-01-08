function requestCall() {
  document.getElementById("status").innerText = "Request Sent...";
  setTimeout(()=>{
    document.getElementById("status").innerText =
      Math.random() > 0.5 ? "Call Accepted" : "Call Rejected";
  },2000);
}
