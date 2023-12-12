const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModified = new Date();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



//Invitation banner
const invitationBanner = document.querySelector(".invbanner")
const d = new Date();
let day = d.getDay();
// console.log(day);

if (day == 4 | day == 5 | day == 6 | day == 7) {
    console.log("Today is not Mon-Wed")
    invitationBanner.style.display = 'none';
};

//Invitation banner close button
// Get all elements with class="close"
var closebtns = document.getElementsByClassName("close");
var i;

// Loop through the elements, and hide the parent, when clicked on
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        this.parentElement.style.display = 'none';
    });
}