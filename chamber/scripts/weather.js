// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windspeed');
const captionDesc = document.querySelector('#figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.55&lon=-100.44&units=metric&appid=155931a8ab93edc39d34b1516aad0728';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
            windChillCalc(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    humidity.innerHTML = `${data.main.humidity.toFixed(0)}`;
    windSpeed.innerHTML = `${data.wind.speed.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch()





// const currentTempW = currentTemp.innerText('#current-temp');

// console.log(currentTempW);

function windChillCalc(data) {
    const temperatureC = data.main.temp;
    const windspeedM = parseFloat(document.querySelector("#windspeed").textContent);



    console.log(temperatureC);
    console.log(windspeedM);

    const temperature = (temperatureC * 9 / 5) + 32;
    console.log(temperature);

    const windspeed = windspeedM * 2.23694;
    console.log(windspeed);

    var windchill = "N/A";

    if (temperature <= 50 && windspeed > 3) {
        windchill = (((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))) - 32) * 5 / 9).toFixed(1) + " °C"
    } else {
        windchill = "N/A";
    }

    console.log(windchill);
    document.querySelector("#windchill").textContent = windchill;

}