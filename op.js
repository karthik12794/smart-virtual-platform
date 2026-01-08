const canvas = document.getElementById("sign");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.onmousedown = () => drawing = true;
canvas.onmouseup = () => drawing = false;
canvas.onmousemove = e => {
  if (!drawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

function clearSign() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function submitOP() {
  localStorage.setItem("op", "booked");
  location.href = "payment.html";
}
