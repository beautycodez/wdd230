const hamburger = document.querySelector("#hamburgerBtn");
const primaryNav = document.querySelector("#primaryNav");

function toggleMenu(){
    hamburger.classList.toggle("open");
    primaryNav.classList.toggle("open");
    console.log("works!");
}
hamburger.addEventListener("click", toggleMenu);





// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll 
//position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    hamBtn.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    hamBtn.classList.remove("sticky");
  }
}