document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    document.getElementById("formMessage").textContent = 
        name && email && message ? "Thank you for reaching out!" : "Please fill in all fields.";
    document.getElementById("contactForm").reset();
});
