document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#loginForm');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        clearErrors();

        let isValid = true;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email cannot be empty');
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password cannot be empty');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');

        input.classList.add('error');
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }
    
    function clearErrors() {
        const errorInputs = form.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));

        const errorMessages = form.querySelectorAll('.visible');
        errorMessages.forEach(message => message.classList.remove('visible'));
    }
});