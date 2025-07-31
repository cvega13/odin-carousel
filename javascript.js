const slides = document.querySelector(".slides");
let currentSlide = slides.firstElementChild;
currentSlide.style.visibility = "visible";

let currentDot = document.querySelector("#" + currentSlide.className);
currentDot.setAttribute("status", "active");


// Updates the navigation circles but updating current circle
function updateCurrentDot(newSlide) {
  currentDot.setAttribute("status", "");

  currentDot = document.querySelector("#" + newSlide.className);

  currentDot.setAttribute("status", "active");
}


// Changes current slide to next in list
function next() {
  currentSlide.style.visibility = "hidden";

  currentSlide =
    currentSlide.nextElementSibling === null
      ? slides.firstElementChild
      : currentSlide.nextElementSibling;

  currentSlide.style.visibility = "visible";
  updateCurrentDot(currentSlide);
}
const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => next());


// Changes current slide to previous in list
function previous() {
    currentSlide.style.visibility = "hidden";

    currentSlide =
      currentSlide.previousElementSibling === null
        ? slides.lastElementChild
        : currentSlide.previousElementSibling;
  
    currentSlide.style.visibility = "visible";
    updateCurrentDot(currentSlide);
}
const previousButton = document.querySelector(".previous");
previousButton.addEventListener("click", () => previous());


// Associates navigation circle to slide
const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        currentSlide.style.visibility = "hidden";

        currentSlide = document.querySelector("." + `${circle.getAttribute("id")}`);

        currentSlide.style.visibility = "visible";
        updateCurrentDot(currentSlide);
    })
})

// Changes slide every 5000 miliseconds (5 seconds)
setInterval(function() {next()}, 5000);







