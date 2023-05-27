const temperature = document.querySelector("#temperature");
const windspeed = document.querySelector("#windspeed");
const windChillElement = document.querySelector("#windchill");

var tempValue = 50;
var wsValue = 20;

const windChillValue = 35.74 + (0.6215 * tempValue) - (35.75 * (wsValue ** 0.16)) + (0.4275 * tempValue * (wsValue ** 0.16));

temperature.innerHTML = `${tempValue} °F`;
windspeed.innerHTML = `${wsValue}m/h`;

if (tempValue <= 50 && wsValue >=3){
    windChillElement.innerHTML = `${windChillValue.toFixed(2)}°F`;
}else {
    windChillElement.innerHTML = "N/A";
}