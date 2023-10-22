const temperature = parseFloat(document.querySelector("#temperature").textContent)
const windspeed = parseFloat(document.querySelector("#windspeed").textContent)

var windchill = "N/A";

if (temperature <= 50 && windspeed > 3) {
    windchill = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))).toFixed(1) + " °F"
} else {
    windchill = "N/A";
}


document.querySelector("#windchill").textContent = windchill;



// const temp = parseFloat(document.querySelector('.temperature').textContent);
// const wind = parseFloat(document.querySelector('.windSpeed').textContent);
// let wchill;
// if (temp <= 50 && wind > 3) {
//     wchill = windChill(temp, wind);
// } else {
//     wchill = `N/A`;
// }

// function windChill(temp, wind) { let f = 35.74 + (temp * 0.6215) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)); return f.toFixed(0); } document.querySelector('.windchill').innerHTML = `${wchill}°F`;

