// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");
// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
var dayNow = now.getDay();
console.log(dayNow);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// "full" or long, medium, short options ... try them

// datefield.textContent = fulldate;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
datemessage.innerHTML = fulldate;


function toggleMenu (){
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
	document.querySelector("#navigation").classList.toggle("open");

	console.log("It works!")
}
const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;	

if (dayNow == 1 || dayNow == 2){
	const banner = document.querySelector("#banner-msg").classList.toggle("open");
}
