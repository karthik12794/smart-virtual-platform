const canvas=document.getElementById("sign");
const ctx=canvas.getContext("2d");
let drawing=false;
canvas.onmousedown=()=>drawing=true;
canvas.onmouseup=()=>{drawing=false; ctx.beginPath();}
canvas.onmousemove=(e)=>{
  if(!drawing) return;
  ctx.lineWidth=2; ctx.lineCap="round"; ctx.strokeStyle="#2a5298";
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
};

function clearSign(){ctx.clearRect(0,0,canvas.width,canvas.height);}
function submitOP(){
  if(!document.getElementById("name").value){alert("Enter Name"); return;}
  localStorage.setItem("op","booked");
  location.href="payment.html";
}
