let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

// ----------------------------------menu and hamburger btn-------------------------------------------------
const hamburger = document.querySelector("#hamburgerBtn");
const menu = document.querySelector("#menu");

function toggleMenu(){
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
  console.log("it works");
}

hamburger.addEventListener("click", toggleMenu);
