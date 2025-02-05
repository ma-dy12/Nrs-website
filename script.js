// Contact form validation and sending data to backend
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (name && email && message) {
        // Create a JSON object with form data
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Send form data to the backend
        fetch('http://localhost:5000/send_mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("responseMessage").innerText = data.message;
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            document.getElementById("responseMessage").innerText = "Failed to send message.";
            console.error('Error:', error);
        });
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
    }
});

