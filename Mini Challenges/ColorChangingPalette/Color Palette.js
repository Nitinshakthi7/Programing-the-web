let colorBoxes = document.querySelectorAll('.color-box');
let body = document.querySelector('body');
let colorNameDisplay = document.querySelector('h2');
let resetButton = document.getElementById('reset-button');

let initialBackgroundColor = body.style.backgroundColor;
let initialText = colorNameDisplay.textContent;


function handleColorBoxClick(event) {
    let selectedColor = event.target.id;
    body.style.backgroundColor = selectedColor;
    colorNameDisplay.textContent = `Selected Color: ${selectedColor}`;
}

function resetToDefault() {
    body.style.backgroundColor = initialBackgroundColor;
    colorNameDisplay.textContent = initialText;
}

colorBoxes.forEach(box => {
    box.addEventListener('click', handleColorBoxClick);
});

resetButton.addEventListener('click', resetToDefault);





