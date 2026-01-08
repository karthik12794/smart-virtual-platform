// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const requestBtn = document.getElementById("requestBtn");
    const status = document.getElementById("status");

    requestBtn.addEventListener("click", function() {
        const recipient = document.getElementById("recipient").value;
        const type = document.getElementById("callType").value;

        if (!recipient) {
            alert("Please select a recipient!");
            return;
        }
        if (!type) {
            alert("Please select a call type!");
            return;
        }

        status.innerText = `Requesting ${type} with ${recipient}...`;

        // Simulate network delay
        setTimeout(() => {
            // Random accept/reject
            const accepted = Math.random() > 0.4; // 60% chance accepted
            if (accepted) {
                status.innerHTML = `<span style="color:green;">${type} with ${recipient} Accepted ✅</span>`;
            } else {
                status.innerHTML = `<span style="color:red;">${type} with ${recipient} Rejected ❌</span>`;
            }
        }, 2000);
    });
});
