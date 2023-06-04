const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

var numVisits = Number(window.localStorage.getItem("visits-ls"));
console.log(numVisits);
var timeStampGet = Date.now(window.localStorage.getItem("globalAddressTimeStamp"));


if (numVisits != 0){
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "This is your first visit"
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);

localStorage.setItem(numVisits, timeStampGet);

if (numVisits )

// -----------------------------------------------------------------
var dateNow = Date.now();
console.log (dateNow);

var lastTimeStamp = localStorage.getItem(numVisits - 1);
console.log (lastTimeStamp);

var daysBetween = (dateNow - lastTimeStamp) * 0.000000012;
console.log(daysBetween);
todayDisplay.textContent = Math.round(daysBetween);
// localStorage.clear()