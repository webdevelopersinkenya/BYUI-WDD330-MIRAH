document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add form validation and submission logic here

        // For example, you can access form fields like this:
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Perform any necessary actions with the form data

        // For now, let's log the form data to the console
        console.log('Form Data:', {
            firstName,
            lastName,
            email,
            phone,
            message
        });
    });
});