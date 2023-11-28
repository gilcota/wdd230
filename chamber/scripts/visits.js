// # Visits counter


// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
const today = Date.now();

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
const visitsDays = document.querySelector(".visitsdays")


// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let timeVisits = Number(window.localStorage.getItem("timeVisits-ls")) || 0;




// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits == 0) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if ((today - timeVisits) < msToDays) {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
} else if ((today - timeVisits) >= msToDays) {
    visitsDisplay.textContent = `You last visited ${((today - timeVisits) / msToDays).toFixed(0)} days ago.`;
}
console.log(today - timeVisits)
// if (numVisits !== 0) AND  {
//     visitsDisplay.textContent = numVisits;
// } else {
//     visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
// }


// 4️⃣ increment the number of visits by one.
numVisits++;
timeVisits = today;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("timeVisits-ls", timeVisits);

