// payment.js

function pay() {
    // Get input fields
    const cardInputs = document.querySelectorAll("input");
    
    // If using Card payment, validate at least some input
    let cardValid = false;
    cardInputs.forEach(input => {
        if (input.value.trim() !== "") cardValid = true;
    });

    if (!cardValid) {
        alert("Please fill at least one payment field or click PhonePe image.");
        return;
    }

    // Simulate payment process
    const paymentType = event?.target?.tagName === "IMG" ? "PhonePe" : "Card";

    // Show processing
    alert(`${paymentType} Payment Processing...`);

    // Fake delay to simulate real payment
    setTimeout(() => {
        alert(`${paymentType} Payment Successful!`);
        localStorage.setItem("paymentDone", "true"); // optional state
        location.href = "home.html"; // redirect to dashboard
    }, 1500);
}
