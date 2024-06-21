document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("survey-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const age = document.getElementById("number");
        const satisfaction = document.querySelectorAll('input[name="satisfaction"]:checked');
        const style = document.getElementById("dropdown");
        const recommend = document.querySelector('input[name="recommend"]:checked');

        let valid = true;

        if (!name.value.trim()) {
            alert("Name is required.");
            valid = false;
        }

        if (!email.value.trim() || !validateEmail(email.value.trim())) {
            alert("A valid email is required.");
            valid = false;
        }

        if (!age.value || age.value < 18 || age.value > 100) {
            alert("Please enter a valid age between 18 and 100.");
            valid = false;
        }

        if (satisfaction.length === 0) {
            alert("Please select your satisfaction level.");
            valid = false;
        }

        if (!style.value) {
            alert("Please select a lash style.");
            valid = false;
        }

        if (!recommend) {
            alert("Please indicate if you would recommend the service.");
            valid = false;
        }

        if (valid) {
            // If all validations pass, you can submit the form or handle the data as needed
            alert("Form submitted successfully!");
            form.reset(); // Clear the form
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
