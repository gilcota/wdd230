const url = "https://gilcota.github.io/wdd230/chamber/data/members.json";
const baseURL = "https://gilcota.github.io/wdd230/chamber/";
const grid = document.querySelector('.spotlights');

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



























//QUILMESSSSSSWAAAYYY

document.addEventListener("DOMContentLoaded", () => {
    // Create spotlight section
    spotlight_json().then(business => {
        // Display the spotlight business
        spotlight_show(business);
    });
});

/**
 * Get spotlight data from JSON file
 * @returns Array with business data
 */
async function spotlight_json() {
    // Spotlight business array
    let business = [];
    // Fetch json data
    const response = await fetch("json/directory.json");
    // Verify response
    if (response.ok) {
        // Wait for data
        const data = await response.json();
        // Filter all gold and silver members
        const filter = data.directory.filter(business => {
            // Return when membership is silver or gold
            if (business.membership === "silver" || business.membership === "gold") {
                return true;
            }
        });
        // Randomly choose three business
        for (let i = 0; i < 3; i++) {
            // Get random index
            const index = random_index(filter);
            // Add business data
            business.push(filter[index]);
            // Remove selected business
            filter.splice(index, 1);
        }
    }
    // Return array
    return business;
}

/**
 * Get a random index from an Array
 * @param {Array} arr Array with data
 * @returns Array index
 */
function random_index(arr) {
    // Random number up to arr.length
    return Math.floor(Math.random() * arr.length);
}

/**
 * Displays spotlight from Array
 * @param {Array} business Array with business data
 */
function spotlight_show(business) {
    // Get spotlights
    const spotlights = document.querySelectorAll(".spotlight");
    // Create elements for every spotlight
    business.forEach((json, index) => {
        // Create elements
        let businessName = document.createElement("h2");
        let businessLogo = document.createElement("img");
        let hr = document.createElement("hr");
        let businessContact = document.createElement("p");
        let businessAddress = document.createElement("p");
        // Fill h2 with data
        businessName.innerText = json.business;
        // Fill img with data
        businessLogo.setAttribute("src", json.logo);
        businessLogo.setAttribute("alt", json.business);
        // Fill contact
        businessContact.innerHTML = `<em>${json.phone} | ${json.email}</em>`;
        // Fill address
        businessAddress.innerHTML = `<em>${json.address}</em>`;
        // Append elements
        spotlights[index].append(businessName);
        spotlights[index].append(businessLogo);
        spotlights[index].append(hr);
        spotlights[index].append(businessAddress);
        spotlights[index].append(businessContact);
    });
}