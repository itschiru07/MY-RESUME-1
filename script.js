document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Clear previous errors
            clearErrors();

            // Perform validation
            let isValid = validateForm();

            if (isValid) {
                // Hide the form and show the success message
                contactForm.style.display = 'none';
                document.getElementById('form-success').style.display = 'block';
            }
        });
    }

    function validateForm() {
        let valid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Name validation
        if (name.value.trim() === '') {
            showError(name, 'Name is required.');
            valid = false;
        }

        // Email validation
        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
            valid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            valid = false;
        }

        // Subject validation
        if (subject.value.trim() === '') {
            showError(subject, 'Subject is required.');
            valid = false;
        }

        // Message validation
        if (message.value.trim() === '') {
            showError(message, 'Message is required.');
            valid = false;
        }
        
        return valid;
    }

    function showError(inputElement, message) {
        const formGroup = inputElement.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        inputElement.style.borderColor = '#e74c3c'; // Red border for error
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.style.display = 'none');
        
        const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
        inputs.forEach(input => input.style.borderColor = '#ddd'); // Reset border color
    }
    
    function isValidEmail(email) {
        // A simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
