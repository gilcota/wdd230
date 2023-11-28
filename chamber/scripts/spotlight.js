const requestURL = "https://gilcota.github.io/wdd230/chamber/data/members.json";
const baseURL = "https://gilcota.github.io/wdd230/chamber/";
const spotlights = document.querySelector(".spotlights");
let j = 1;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

async function getSpotlights() {
    const response = await fetch(requestURL);
    const data = await response.json();
    console.log(data.members)
    // loop through data array and find gold membership
    let goldBusinesses = [];
    data.members.forEach((business) => {
        if (business.level === "Gold" || business.level === "Silver") {
            goldBusinesses.push(business);
        }
    })
    // limit results to three
    goldBusinesses = shuffle(goldBusinesses);
    goldBusinesses = goldBusinesses.slice(0, 3);
    // add members to page
    goldBusinesses.forEach((business) => {
        displaySpotlight(business);
    })
}

/*
<div id="spotlight1">
<h3>🏬 Box 2 Box Storage</h3>
<p class="spotlight-p"><b>"Your mini warehouse at home"</b></p>
<p class="spotlight-contact"><b>atencion@box2boxstorage.com<br>+52 55-8037-4700<br><a
            href="https://www.box2boxstorage.com/mx/warehouses/queretaro" class="spotlight-a"
            target="_blank">Website</a>
    </b>
</p>
</div>
*/
function displaySpotlight(business) {
    let div = document.createElement('div');
    // let h3 = document.createElement('h3');
    let pcontact = document.createElement('p')
    let pemail = document.createElement('p')

    let portrait = document.createElement('img');
    // let address = document.createElement('p');
    // let phone = document.createElement('p');



    let address = document.createElement('p');
    let phonenumber = document.createElement('p');
    const site = document.createElement('a');
    let memberlevel = document.createElement('p');
    let companycontact = document.createElement('p');
    let name = document.createElement('p');




    address.textContent = `${business.address}`;
    phonenumber.textContent = `${business.phonenumber}`;
    site.textContent = `${business.websiteurl}`;
    site.setAttribute('href', business.websiteurl);
    memberlevel.textContent = `${business.level} Member`;
    companycontact.textContent = `Contact: ${business.contactname} ${business.contactlastname}`;
    name.textContent = `${business.name}`

    site.setAttribute('target', "_blank")
    name.setAttribute('class', "compname")
    memberlevel.setAttribute('class', "mlevel")
    companycontact.setAttribute('class', "ccontact")








    div.setAttribute('id', "spotlight" + `${j++}`);
    // h3.textContent = `${business.name}`;
    pcontact.textContent = `${business.contactname}` + " " + `${business.contactlastname}`;
    pemail.textContent = `${business.phonenumber}`;

    portrait.setAttribute('class', "imgdir")
    portrait.setAttribute('src', baseURL + business.logo);
    portrait.setAttribute('alt', `Logo of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    // address.textContent = `${business.address}`;
    // phone.textContent = `For more information call ${business.phone}`;


    // div.appendChild(h3);
    div.appendChild(portrait);
    // div.appendChild(pcontact)
    // div.appendChild(pemail)
    // div.appendChild(address);
    // div.appendChild(phone);

    // Append the section(card) with the created elements
    // div.appendChild(logo); //fill in the blank
    // div.appendChild(name);
    div.appendChild(memberlevel);
    div.appendChild(address);
    div.appendChild(phonenumber);
    // div.appendChild(companycontact);
    div.appendChild(site);


    spotlights.appendChild(div);
}

getSpotlights();