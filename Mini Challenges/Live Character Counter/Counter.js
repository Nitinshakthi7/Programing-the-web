document.addEventListener('DOMContentLoaded', () => {
    let messageInput = document.querySelector('#messageInput');
    let charCountSpan = document.querySelector('#charCount');
    let counterDisplay = document.querySelector('.counter-display');
    let submitButton = document.querySelector('#submitButton');
    let maxChars = 1000;
    let warningThreshold = 990;

    updateCounter();

    messageInput.addEventListener('input', updateCounter);

    function updateCounter() {
        let currentLength = messageInput.value.length;
        charCountSpan.textContent = currentLength;

        if (currentLength > warningThreshold) {
            counterDisplay.classList.add('warning');
        } else {
            counterDisplay.classList.remove('warning');
        }

        submitButton.disabled = (currentLength === 0 || currentLength > maxChars);
    }
});