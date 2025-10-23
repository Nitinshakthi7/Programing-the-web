const lightBulbDiv = document.querySelectorAll('#light-bulb')[0];
const switchButton = document.querySelectorAll('#Switch-button')[0];
let isLightOn = false;

switchButton.addEventListener('click', () => {
  isLightOn = !isLightOn;
    if (isLightOn) {
        lightBulbDiv.classList.remove('light-off');
        lightBulbDiv.classList.add('light-on');
        switchButton.textContent = 'Turn Off';
    } else {
        lightBulbDiv.classList.remove('light-on');
        lightBulbDiv.classList.add('light-off');    
        switchButton.textContent = 'Turn On';
    }
});
                    
