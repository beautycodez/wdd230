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

// ------------------------------------------------------------------------------------------

const url2 = 'https://beautycodez.github.io/wdd230/lesson4/chamber/data/data-companies.json';

async function getCompaniesData() {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displaySpotlights(data.companies);
  }
  
  getCompaniesData();

const displaySpotlights =  (companies) =>{
	
	var i = Math.floor(Math.random() * 9);
	console.log (i);
	const section1 = document.querySelector("#section1");
	// const section2 = doucment.querySelector("#section2");
	// const section3 = document.querySelector("#section3");

    // create spotlight 1
    const simg = document.createElement("img");
	const spicture = document.createElement("picture");
    const sh1 = document.createElement("h1");
    const sh4 = document.createElement("h4");
    const spLink = document.createElement("p");
    const spPhone = document.createElement("p");

    // set
    simg.setAttribute("src", companies[i].image);
    simg.setAttribute("alt", "Picture of the company");
	simg.setAttribute("class", "spot-img");

	sh1.textContent = `${companies[i].companyName}`;

	sh4.textContent = `${companies[i].address}`

	spLink.textContent = `${companies[i].website}`

	spPhone.textContent = `${companies[i].phone}`
    // append
	spicture.appendChild(simg);

    section1.appendChild(spicture);
	section1.appendChild(sh1);
	section1.appendChild(spLink);
	section1.appendChild(sh4);
	section1.appendChild(spPhone);

	// ------------------------------------------------
	var j = Math.floor(Math.random() * 9);
	console.log (j);
	const section2 = document.querySelector("#section2");
	// const section2 = doucment.querySelector("#section2");
	// const section3 = document.querySelector("#section3");

    // create spotlight 1
    const simg2 = document.createElement("img");
	const spicture2 = document.createElement("picture");
    const sh12 = document.createElement("h1");
    const sh42 = document.createElement("h4");
    const spLink2 = document.createElement("p");
    const spPhone2 = document.createElement("p");

    // set
    simg2.setAttribute("src", companies[j].image);
    simg2.setAttribute("alt", "Picture of the company");
	simg2.setAttribute("class", "spot-img");

	sh12.textContent = `${companies[j].companyName}`;

	sh42.textContent = `${companies[j].address}`

	spLink2.textContent = `${companies[j].website}`

	spPhone2.textContent = `${companies[j].phone}`
    // append
	spicture2.appendChild(simg2);

    section2.appendChild(spicture2);
	section2.appendChild(sh12);
	section2.appendChild(spLink2);
	section2.appendChild(sh42);
	section2.appendChild(spPhone2);
	// --------------------------------------------------------------
	var k = Math.floor(Math.random() * 9);
	console.log (k);
	const section3 = document.querySelector("#section3");
	// const section2 = doucment.querySelector("#section2");
	// const section3 = document.querySelector("#section3");

    // create spotlight 1
    const simg3 = document.createElement("img");
	const spicture3 = document.createElement("picture");
    const sh13 = document.createElement("h1");
    const sh43 = document.createElement("h4");
    const spLink3 = document.createElement("p");
    const spPhone3 = document.createElement("p");

    // set
    simg3.setAttribute("src", companies[k].image);
    simg3.setAttribute("alt", "Picture of the company");
	simg3.setAttribute("class", "spot-img");

	sh13.textContent = `${companies[k].companyName}`;

	sh43.textContent = `${companies[k].address}`

	spLink3.textContent = `${companies[k].website}`

	spPhone3.textContent = `${companies[k].phone}`
    // append
	spicture3.appendChild(simg3);

    section3.appendChild(spicture3);
	section3.appendChild(sh13);
	section3.appendChild(spLink3);
	section3.appendChild(sh43);
	section3.appendChild(spPhone3);

}