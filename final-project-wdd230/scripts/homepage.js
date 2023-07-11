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