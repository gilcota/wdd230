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


// # Visits counter
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
localStorage.setItem("numVisits-ls", numVisits);

