const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModified = new Date();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const herolabel = document.querySelector('.herolabel');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#passwordr");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Passwords are incorrect, please try again!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp1.value = "";
        kp2.value = "";
        kp1.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value + "<br>";
}