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
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        const site = document.createElement('a');




        address.textContent = `${member.address}`;
        phonenumber.textContent = `${member.phonenumber}`;
        site.textContent = `${member.websiteurl}`;
        site.setAttribute('href', member.websiteurl);

        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', baseURL + member.logo);
        logo.setAttribute('alt', `Logo of ${member.name}`); // fill in the blank
        logo.setAttribute('loading', 'lazy');

        // Append the section(card) with the created elements
        card.appendChild(logo); //fill in the blank
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(site);



        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}