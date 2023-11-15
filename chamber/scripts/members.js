const url = "https://gilcota.github.io/wdd230/chamber/data/members.json";
const baseURL = "https://gilcota.github.io/wdd230/chamber/";
const grid = document.querySelector('.grid');

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
        let memberlevel = document.createElement('p');
        let companycontact = document.createElement('p');
        let name = document.createElement('p');




        address.textContent = `${member.address}`;
        phonenumber.textContent = `${member.phonenumber}`;
        site.textContent = `${member.websiteurl}`;
        site.setAttribute('href', member.websiteurl);
        memberlevel.textContent = `${member.level} Member`;
        companycontact.textContent = `Contact: ${member.contactname} ${member.contactlastname}`;
        name.textContent = `${member.name}`

        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', baseURL + member.logo);
        logo.setAttribute('alt', `Logo of ${member.name}`); // fill in the blank
        logo.setAttribute('loading', 'lazy');

        card.setAttribute('class', "sectiondir")
        logo.setAttribute('class', "imgdir")
        site.setAttribute('target', "_blank")
        name.setAttribute('class', "compname")
        memberlevel.setAttribute('class', "mlevel")
        companycontact.setAttribute('class', "ccontact")

        // Append the section(card) with the created elements
        card.appendChild(logo); //fill in the blank
        card.appendChild(name);
        card.appendChild(memberlevel);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(companycontact);
        card.appendChild(site);





        grid.appendChild(card);
    }); // end of arrow function and forEach loop
}


//------------LAYOUT VIEW SELECTION SECTION---------------//
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
