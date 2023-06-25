const hamburger = document.querySelector("#hamburgerBtn");
const primaryNav = document.querySelector("#primaryNav");

function toggleMenu(){
    hamburger.classList.toggle("open");
    primaryNav.classList.toggle("open");
    console.log("works!");
}
hamburger.addEventListener("click", toggleMenu);