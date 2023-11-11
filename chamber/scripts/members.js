const url = "https://gilcota.github.io/wdd230/chamber/data/members.json";
const baseURL = "https://gilcota.github.io/wdd230/chamber/";
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members); // note that we reference the members array of the JSON data object, not just the object
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let dateBirth = document.createElement('p');
        let placeBirth = document.createElement('p');
        let portrait = document.createElement('img');


        // Build the h2 content out to show the member's full name
        fullName.textContent = `${member.name} ${member.lastname}`; // fill in the blank

        dateBirth.textContent = `Date of birth: ${member.birthdate}`
        placeBirth.textContent = `Place of birth: ${member.birthplace}`

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.name} ${member.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '280');
        portrait.setAttribute('height', '362');



        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);

        card.appendChild(portrait);


        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}