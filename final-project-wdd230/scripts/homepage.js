const hamburger = document.querySelector("#hamburgerBtn");
const nav = document.querySelector("#primaryNav");
function toggleMenu () {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);
// ---------------------------------------------------
let slideIndex = 1;
var slides = document.querySelector(".mySlides");
var intervalId;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    clearInterval(intervalId);
    showSlides(slideIndex += n);
    startInterval();
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(intervalId);
    showSlides(slideIndex = n);
    startInterval();
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
//   delete all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
//   show only one slide
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function startInterval() {
    intervalId = setInterval(function() {
      plusSlides(1);
    }, 8000);
  }

  startInterval();
// ------------call to action-----------------
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

const gridBtn = document.querySelector(".grid-btn");
const listLink = document.querySelector(".list-link");
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
// ----------------weather----------------------------
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('#weather-icon');
const condition = document.querySelector('.condition');   
const forecast = document.querySelector('.forecast');   
const humidity = document.querySelector(".humidity");


const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=f093ffd9fe067670b40d9ac069415766&units=imperial"

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
  condition.innerHTML = weatherData.weather[0].description;
  humidity.innerHTML = weatherData.main.humidity;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}


// -----------------forecast------------
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=f093ffd9fe067670b40d9ac069415766&units=imperial"

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");

const forecast1 = document.querySelector(".forecast1");
const forecast2 = document.querySelector(".forecast2");
const forecast3 = document.querySelector(".forecast3");

async function apiFetch2() {
    try {
      const response2 = await fetch(urlForecast);
      if (response2.ok) {
        const data2 = await response2.json();
        console.log(data2); // this is for testing the call
        displayResults2(data2);
      } else {
          throw Error(await response2.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch2();

function displayResults2 (weatherData){
  let dia = weatherData.list[4].dt_txt;
  var date1 = Date.parse(dia);
  var finalDate1 =new Date(date1).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
  day1.innerHTML = finalDate1;

  let dia2 = weatherData.list[12].dt_txt;
  var date2 = Date.parse(dia2);
  var finalDate2 =new Date(date2).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
  day2.innerHTML = finalDate2;

  let dia3 = weatherData.list[19].dt_txt;
  var date3 = Date.parse(dia3);
  var finalDate3 =new Date(date3).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
  day3.innerHTML = finalDate3;

  forecast1.innerHTML = `${weatherData.list[4].main.temp} F°`
  forecast2.innerHTML = `${weatherData.list[12].main.temp} F°`
  forecast3.innerHTML = `${weatherData.list[19].main.temp} F°`



}

