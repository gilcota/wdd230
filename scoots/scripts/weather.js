// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windspeed');
const captionDesc = document.querySelector('#figcaption');
const tempmax = document.querySelector('#temp-max');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=86.92&units=metric&appid=155931a8ab93edc39d34b1516aad0728';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
            // windChillCalc(data);
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
    // windSpeed.innerHTML = `${data.wind.speed.toFixed(0)}`;
    tempmax.innerHTML = `${data.main.temp_max.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch()


// function windChillCalc(data) {
//     const temperatureC = data.main.temp;
//     const windspeedM = parseFloat(document.querySelector("#windspeed").textContent);

//     // console.log(temperatureC);
//     // console.log(windspeedM);

//     const temperature = (temperatureC * 9 / 5) + 32;
//     // console.log(temperature);

//     const windspeed = windspeedM * 2.23694;
//     // console.log(windspeed);

//     var windchill = "N/A";

//     if (temperature <= 50 && windspeed > 3) {
//         windchill = (((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))) - 32) * 5 / 9).toFixed(1) + " °C"
//     } else {
//         windchill = "N/A";
//     }

//     // console.log(windchill);
//     document.querySelector("#windchill").textContent = windchill;

// }

//Forecast start


const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.55&lon=-100.44&units=metric&appid=d7ffb76f27d5f75f6ce4b7817252176f";
const process = NaN;

fetch(urlForecast)
    .then((response) => response.json())
    .then((forecast) => {
        for (const item in forecast.list) {
            if (forecast.list[item].dt_txt.includes("15:00")) {
                // console.log(forecast.list[item]);
                var date = new Date(forecast.list[item].dt_txt);
                var day = date.toString();
                day = day.slice(0, 10).replace(day[3], ', ')

                let card = document.createElement('section');
                let dd = document.createElement('p');
                dd.textContent = day + ", 3pm";
                card.appendChild(dd);

                let img = document.createElement('img')
                const imagesrc = 'https://openweathermap.org/img/w/' + forecast.list[item].weather[0].icon + '.png';
                img.setAttribute('src', imagesrc);
                img.setAttribute('alt', forecast.list[item].weather[0].main);
                card.appendChild(img);

                let lineBreak = document.createElement('p');
                card.appendChild(lineBreak);

                let tt = document.createElement('span');
                tt.textContent = forecast.list[item].main.temp.toFixed(1) + " °C - ";
                card.appendChild(tt);

                let hu = document.createElement('span');
                hu.textContent = forecast.list[item].main.humidity.toFixed(1) + " %";
                card.appendChild(hu);

                document.querySelector('section.forecast').appendChild(card);
                break;
            }

        }
    });


//Forecast end


