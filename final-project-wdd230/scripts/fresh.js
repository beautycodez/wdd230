const select = document.querySelector(".select");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");

const urlFresh = "https://brotherblazzard.github.io/canvas-content/fruit.json"
var fruitList = [];

async function apiFetch() {
    try {
      const response3 = await fetch(urlFresh);
      if (response3.ok) {
        const data3 = await response3.json();
        console.log(data3); // this is for testing the call
        displayResults(data3);
        fruitList = data3;
      } else {
          throw Error(await response3.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();
var envios = localStorage.getItem("Drinks");
function displayResults (fruitData){
    var fruits = fruitData.forEach(fruit => {
        const option = document.createElement("option");

        option.setAttribute("value", fruit.name)
        option.innerHTML=fruit.name;

        select.appendChild(option)});
    // ------------------------------------------------------  
    var fruits2 = fruitData.forEach(fruit => {
        const option2 = document.createElement("option");

        option2.setAttribute("value", fruit.name)
        option2.innerHTML=fruit.name;

        select2.appendChild(option2);
        // select3.appendChild(option);
    });
    var fruits3 = fruitData.forEach(fruit => {
        const option3 = document.createElement("option");

        option3.setAttribute("value", fruit.name)
        option3.innerHTML=fruit.name;

        select3.appendChild(option3);
        // select3.appendChild(option);
    });
    }
// -------------------------------
var answers = document.querySelector("#answers");
const submitBtn = document.querySelector(".submitBtn");

const inputName = document.querySelector("#name");
const extraDiv = document.createElement("div");
const answersContainer = document.querySelector(".answers-container");

function limpiarFormulario() {
    const form = document.querySelector("#fresh-form");
    form.reset(); // Restablece los valores del formulario a sus valores predeterminados
};
function showData(form) {
    var fname = form.fname.value;
    var emailFruit = form.email.value;
    var phone = form.tel.value;
    var descriptionFresh = form.description.value;
    const dateFreshForm = new Date().toLocaleDateString('en-us',{weekday:"long", year:"numeric", month:"short", day:"numeric"});
    // const dateNow = dateFreshForm;

    var selectElement1 = document.querySelector("#select-fruit");
    var selectedValue1 = selectElement1.value;
    var indiceSeleccionado1 = selectElement1.selectedIndex; 
    indiceSeleccionado1 = indiceSeleccionado1 - 1; 

    var selectElement2 = document.querySelector("#select-fruit2");
    var selectedValue2 = selectElement2.value;
    var indiceSeleccionado2 = selectElement2.selectedIndex; 
    indiceSeleccionado2 = indiceSeleccionado2 - 1; 

    var selectElement3 = document.querySelector("#select-fruit3");
    var selectedValue3 = selectElement3.value;
    var indiceSeleccionado3 = selectElement3.selectedIndex; 
    indiceSeleccionado3 = indiceSeleccionado3 - 1; 

    const totalCarbohydrates = fruitList[indiceSeleccionado1].nutritions.carbohydrates + fruitList[indiceSeleccionado2].nutritions.carbohydrates + fruitList[indiceSeleccionado3].nutritions.carbohydrates;
    const totalProtein = fruitList[indiceSeleccionado1].nutritions.protein + fruitList[indiceSeleccionado2].nutritions.protein + fruitList[indiceSeleccionado3].nutritions.protein;
    const totalFat = fruitList[indiceSeleccionado1].nutritions.fat + fruitList[indiceSeleccionado2].nutritions.fat + fruitList[indiceSeleccionado3].nutritions.fat;
    const totalSugar = fruitList[indiceSeleccionado1].nutritions.sugar + fruitList[indiceSeleccionado2].nutritions.sugar + fruitList[indiceSeleccionado3].nutritions.sugar;
    const totalCalories = fruitList[indiceSeleccionado1].nutritions.calories + fruitList[indiceSeleccionado2].nutritions.calories + fruitList[indiceSeleccionado3].nutritions.calories;

    


    extraDiv.innerHTML = `<br><strong>Order Date:</strong> ${dateFreshForm}<br>
    <strong>Name:</strong>  ${fname}<br> 
    <strong>E-mail:</strong> ${emailFruit}<br>
    <strong>Phone-number:</strong> ${phone}<br>
    <strong>Fruits:</strong> ${selectedValue1}, ${selectedValue2}, ${selectedValue3}<br>
    <strong>Total Carbohydrates:</strong> ${totalCarbohydrates}<br>
    <strong>Total Protein:</strong> ${totalProtein}<br>
    <strong>Total Fat:</strong> ${totalFat}<br>
    <strong>Total Sugar:</strong> ${totalSugar}<br>
    <strong>Total Calories:</strong> ${totalCalories}<br>
    <strong>Additional Instructions:</strong> ${descriptionFresh}`;
    answers.appendChild(extraDiv)
    answers.classList.add("mostrar");
    answersContainer.classList.add("open");
    limpiarFormulario();
};

function cerrarDivEmergente() {
    var answers = document.getElementById("answers");
    answers.classList.remove("mostrar");
    answersContainer.classList.remove("open");
    envios++;
    localStorage.setItem("Drinks", envios);
};


// ----------------Local storage--------------------------------
// function localstorageDrinks (){
//     envios++;
//     localStorage.setItem("Drinks", envios);
// }
// submitBtn.addEventListener("click",localstorageDrinks);


// ----------------------------
const lastModifiedFresh = document.querySelector(".last-modi-fresh");

var lastModiFresh = new Date(document.lastModified);
const dayfresh2 = lastModiFresh.getDate();
const month2 = lastModiFresh.getMonth();
const year2 = lastModiFresh.getFullYear();
const hour2 = lastModiFresh.getHours();
const min2 = lastModiFresh.getMinutes();
const sec2 = lastModiFresh.getSeconds();

lastModifiedFresh.innerHTML += `${month2 + 1}/${dayfresh2}/${year2} ${hour2}:${min2}:${sec2}`;
