function requestCall(){
  const recipient=document.getElementById("recipient").value;
  const type=document.getElementById("callType").value;
  const status=document.getElementById("status");
  status.innerText="Request Sent...";
  setTimeout(()=>{
    status.innerText=Math.random()>0.5?`${type} with ${recipient} Accepted`:`${type} with ${recipient} Rejected`;
  },2000);
}
