// call.js

function requestCall() {
    const recipient = document.getElementById("recipient").value;
    const type = document.getElementById("callType").value;
    const status = document.getElementById("status");

    if (!recipient || !type) {
        alert("Please select recipient and call type.");
        return;
    }

    status.innerText = `Requesting ${type} with ${recipient}...`;

    // Simulate network delay
    setTimeout(() => {
        // Randomly accept or reject call for demo
        const accepted = Math.random() > 0.4; // 60% chance accepted
        if (accepted) {
            status.innerText = `${type} with ${recipient} Accepted ✅`;
        } else {
            status.innerText = `${type} with ${recipient} Rejected ❌`;
        }
    }, 2000);
}
