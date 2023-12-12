const requestURL = "https://gilcota.github.io/wdd230/chamber/data/members.json";
const baseURL = "https://gilcota.github.io/wdd230/chamber/";
const spotlights = document.querySelector(".spotlights");
let j = 1;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;


    while (currentIndex != 0) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

async function getSpotlights() {
    const response = await fetch(requestURL);
    const data = await response.json();
    // console.log(data.members)

    let goldBusinesses = [];
    data.members.forEach((business) => {
        if (business.level === "Gold" || business.level === "Silver") {
            goldBusinesses.push(business);
        }
    })

    goldBusinesses = shuffle(goldBusinesses);
    goldBusinesses = goldBusinesses.slice(0, 3);

    goldBusinesses.forEach((business) => {
        displaySpotlight(business);
    })
}


function displaySpotlight(business) {
    let div = document.createElement('div');
    let pcontact = document.createElement('p')
    let pemail = document.createElement('p')
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phonenumber = document.createElement('p');
    const site = document.createElement('a');
    let memberlevel = document.createElement('p');
    let name = document.createElement('p');

    address.textContent = `${business.address}`;
    phonenumber.textContent = `${business.phonenumber}`;
    site.textContent = `${business.websiteurl}`;
    site.setAttribute('href', business.websiteurl);
    memberlevel.textContent = `${business.level} Member`;
    name.textContent = `${business.name}`

    site.setAttribute('target', "_blank")
    name.setAttribute('class', "compname")
    memberlevel.setAttribute('class', "mlevel")

    div.setAttribute('id', "spotlight" + `${j++}`);
    pcontact.textContent = `${business.contactname}` + " " + `${business.contactlastname}`;
    pemail.textContent = `${business.phonenumber}`;

    portrait.setAttribute('class', "imgdir")
    portrait.setAttribute('src', baseURL + business.logo);
    portrait.setAttribute('alt', `Logo of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    div.appendChild(portrait);
    div.appendChild(memberlevel);
    div.appendChild(address);
    div.appendChild(phonenumber);
    div.appendChild(site);


    spotlights.appendChild(div);
}

getSpotlights();