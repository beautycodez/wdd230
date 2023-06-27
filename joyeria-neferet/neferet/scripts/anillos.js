
const url = "https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=f093ffd9fe067670b40d9ac069415766&units=imperial"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults (weatherData){
currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)} F°</strong>`;
windspeed.innerHTML = `<strong>${weatherData.wind.speed} m/h</strong>`;
const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
const desc = weatherData.weather[0].description;

const windChillValue = 35.74 + (0.6215 * weatherData.main.temp.toFixed(0)) - (35.75 * (weatherData.wind.speed ** 0.16)) + (0.4275 * weatherData.main.temp.toFixed(0) * (weatherData.wind.speed ** 0.16));
if (currentTemp <= 50 && windspeed >=3){
    windChillElement.innerHTML = `${windChillValue.toFixed(2)}°F`;
}else {
    windChillElement.innerHTML = "N/A";
}

weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;
}