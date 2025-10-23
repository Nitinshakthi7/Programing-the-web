document.addEventListener('DOMContentLoaded', () => {

    const profileCard = document.querySelector('#profileCard');
    const profileName = document.querySelector('#profileName');
    const profileTitle = document.querySelector('#profileTitle');
    const profileDescription = document.querySelector('#profileDescription');
    const editorCard = document.querySelector('.editor');

    const nameInput = document.querySelector('#nameInput');
    const titleInput = document.querySelector('#titleInput');
    const descriptionInput = document.querySelector('#descriptionInput');
    const bgColorInput = document.querySelector('#bgColorInput');

    nameInput.addEventListener('input', () => {
        profileName.textContent = nameInput.value;
    });
    titleInput.addEventListener('input', () => {
        profileTitle.textContent = titleInput.value;
    });
    descriptionInput.addEventListener('input', () => {
        profileDescription.textContent = descriptionInput.value;
    });
    bgColorInput.addEventListener('input', () => {
        profileCard.style.backgroundColor = bgColorInput.value;
        editorCard.style.backgroundColor = bgColorInput.value;
    });
});
