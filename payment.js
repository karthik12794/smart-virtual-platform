// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function () {
    const cardBtn = document.getElementById("cardPayBtn");
    const phonepeBtn = document.getElementById("phonepePay");

    cardBtn.addEventListener("click", function () {
        const card = document.getElementById("cardNumber").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!card || !expiry || !cvv) {
            alert("Please fill all card details!");
            return;
        }

        alert("Processing Card Payment...");
        setTimeout(() => {
            alert("Card Payment Successful! ✅");
            localStorage.setItem("paymentDone", "true");
            location.href = "home.html";
        }, 1500);
    });

    phonepeBtn.addEventListener("click", function () {
        alert("Redirecting to PhonePe...");
        setTimeout(() => {
            alert("PhonePe Payment Successful! ✅");
            localStorage.setItem("paymentDone", "true");
            location.href = "home.html";
        }, 1500);
    });
});
