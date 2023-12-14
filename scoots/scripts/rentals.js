const urlr = 'https://gilcota.github.io/wdd230/scoots/data/rentals.json';
const baseURL = "https://gilcota.github.io/wdd230/";
const cards = document.querySelector('#cards');

async function getRentalsData() {
    const response = await fetch(urlr);
    const data = await response.json();
    console.table(data.rentals);
    displayRentals(data.rentals); // note that we reference the prophets array of the JSON data object, not just the object
}

getRentalsData();

const displayRentals = (rentals) => {

    // Create elements to add to the div.cards element

    /*
                <td id="maxp0">1</td>
                <td id="rhday0">$20</td>
                <td id="rfday0">$30</td>
                <td id="whday0">$25</td>
                <td id="wfday0">$35</td>
    */

    let maxp0 = document.getElementById('maxp0');
    let rhday0 = document.getElementById('rhday0');
    let rfday0 = document.getElementById('rfday0');
    let whday0 = document.getElementById('whday0');
    let wfday0 = document.getElementById('wfday0');

    maxp0.textContent = `${rentals[0].maxp}`;
    rhday0.textContent = `${rentals[0].rhday}`;
    rfday0.textContent = `${rentals[0].rfday}`;
    whday0.textContent = `${rentals[0].whday}`;
    wfday0.textContent = `${rentals[0].wfday}`;

    let maxp1 = document.getElementById('maxp1');
    let rhday1 = document.getElementById('rhday1');
    let rfday1 = document.getElementById('rfday1');
    let whday1 = document.getElementById('whday1');
    let wfday1 = document.getElementById('wfday1');

    maxp1.textContent = `${rentals[1].maxp}`;
    rhday1.textContent = `${rentals[1].rhday}`;
    rfday1.textContent = `${rentals[1].rfday}`;
    whday1.textContent = `${rentals[1].whday}`;
    wfday1.textContent = `${rentals[1].wfday}`;

    let maxp2 = document.getElementById('maxp2');
    let rhday2 = document.getElementById('rhday2');
    let rfday2 = document.getElementById('rfday2');
    let whday2 = document.getElementById('whday2');
    let wfday2 = document.getElementById('wfday2');

    maxp2.textContent = `${rentals[2].maxp}`;
    rhday2.textContent = `${rentals[2].rhday}`;
    rfday2.textContent = `${rentals[2].rfday}`;
    whday2.textContent = `${rentals[2].whday}`;
    wfday2.textContent = `${rentals[2].wfday}`;

    let maxp3 = document.getElementById('maxp3');
    let rhday3 = document.getElementById('rhday3');
    let rfday3 = document.getElementById('rfday3');
    let whday3 = document.getElementById('whday3');
    let wfday3 = document.getElementById('wfday3');

    maxp3.textContent = `${rentals[3].maxp}`;
    rhday3.textContent = `${rentals[3].rhday}`;
    rfday3.textContent = `${rentals[3].rfday}`;
    whday3.textContent = `${rentals[3].whday}`;
    wfday3.textContent = `${rentals[3].wfday}`;

    let maxp4 = document.getElementById('maxp4');
    let rhday4 = document.getElementById('rhday4');
    let rfday4 = document.getElementById('rfday4');
    let whday4 = document.getElementById('whday4');
    let wfday4 = document.getElementById('wfday4');

    maxp4.textContent = `${rentals[4].maxp}`;
    rhday4.textContent = `${rentals[4].rhday}`;
    rfday4.textContent = `${rentals[4].rfday}`;
    whday4.textContent = `${rentals[4].whday}`;
    wfday4.textContent = `${rentals[4].wfday}`;

    let maxp5 = document.getElementById('maxp5');
    let rhday5 = document.getElementById('rhday5');
    let rfday5 = document.getElementById('rfday5');
    let whday5 = document.getElementById('whday5');
    let wfday5 = document.getElementById('wfday5');

    maxp5.textContent = `${rentals[5].maxp}`;
    rhday5.textContent = `${rentals[5].rhday}`;
    rfday5.textContent = `${rentals[5].rfday}`;
    whday5.textContent = `${rentals[5].whday}`;
    wfday5.textContent = `${rentals[5].wfday}`;


    // dateBirth.textContent = `Date of birth: ${rental.birthdate} `
    // placeBirth.textContent = `Place of birth: ${rental.birthplace} `

    // // Build the image portrait by setting all the relevant attributes
    // portrait.setAttribute('src', rental.imageurl);
    // portrait.setAttribute('alt', `Portrait of ${rental.name} ${rental.lastname} `); // fill in the blank
    // portrait.setAttribute('loading', 'lazy');
    // portrait.setAttribute('width', '280');
    // portrait.setAttribute('height', '362');



    // // Append the section(card) with the created elements
    // card.appendChild(fullName); //fill in the blank
    // card.appendChild(dateBirth);
    // card.appendChild(placeBirth);

    // card.appendChild(portrait);


    // cards.appendChild(card);




}