


























//QUILMESSSSSSWAAAYYY

document.addEventListener("DOMContentLoaded", () => {
    // Create spotlight section
    spotlight_json().then(name => {
        // Display the spotlight name
        spotlight_show(name);
    });
});

/**
 * Get spotlight data from JSON file
 * @returns Array with name data
 */
async function spotlight_json() {
    // Spotlight name array
    let name = [];
    // console.log(name);
    // Fetch json data
    const response = await fetch("data/members.json");
    // Verify response
    if (response.ok) {
        // Wait for data
        const data = await response.json();
        // Filter all gold and silver members
        console.table(data.members);
        const filter = data.members.filter(name => {
            // Return when membership is silver or gold
            if (name.membership === "Silver" || name.membership === "Gold") {
                return true;
            }
        });
        // Randomly choose three name
        for (let i = 0; i < 3; i++) {
            // Get random index
            const index = random_index(filter);
            // Add name data
            name.push(filter[index]);
            // Remove selected name
            filter.splice(index, 1);
        }
    }
    // Return array
    return name;
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
 * @param {Array} name Array with name data
 */
function spotlight_show(name) {
    // Get spotlights
    const spotlights = document.querySelectorAll(".spotlights");
    // Create elements for every spotlight
    name.forEach((json, index) => {
        // Create elements
        let nameName = document.createElement("h2");
        let nameLogo = document.createElement("img");
        let hr = document.createElement("hr");
        let nameContact = document.createElement("p");
        let nameAddress = document.createElement("p");
        // Fill h2 with data
        nameName.innerText = json.name;
        // Fill img with data
        nameLogo.setAttribute("src", json.logo);
        nameLogo.setAttribute("alt", json.name);
        // Fill contact
        nameContact.innerHTML = `<em>${json.phone} | ${json.email}</em>`;
        // Fill address
        nameAddress.innerHTML = `<em>${json.address}</em>`;
        // Append elements
        spotlights[index].append(nameName);
        spotlights[index].append(nameLogo);
        spotlights[index].append(hr);
        spotlights[index].append(nameAddress);
        spotlights[index].append(nameContact);
    });
}