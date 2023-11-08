const baseURL = "https://gilcota.github.io/wdd230/";
const linksURL = "https://gilcota.github.io/wdd230/data/links.json";
const lessonsList = document.querySelector("#lessonsList");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lessonItem) => {
        let listItem = document.createElement('li');

        listItem.textContent = `${lessonItem.lesson}: `

        lessonItem.links.forEach((link) => {

            const linkElement = document.createElement("a");

            if (link.url.startsWith("https://")) {
                linkElement.href = link.url;
            }
            else {
                linkElement.href = baseURL + link.url;
            }

            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);

            const separator = document.createTextNode(" | ");
            listItem.appendChild(separator);

        })

        lessonsList.appendChild(listItem);

    }); // end of arrow function and forEach loop

}
