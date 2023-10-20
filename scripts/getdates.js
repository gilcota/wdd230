const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModified = new Date();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const herolabel = document.querySelector('.herolabel');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    herolabel.classList.toggle('herolabelshift')
    hamButton.classList.toggle('open');
});