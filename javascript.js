const buttons = document.querySelectorAll("[data-carousel-button]")
const circles = document.querySelectorAll(".circle");

// Updates current slide to next/prev slide
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides =  button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    updateCurrentDot(slides.children[newIndex]);
  })
})

// Updates the navigation circles by updating current circle
function updateCurrentDot(newSlide) {
  const dots = newSlide.closest("[data-carousel]").querySelector("[data-dots]");
  const activeDot = dots.querySelector("[data-active]");

  newDot = dots.querySelector("#" + newSlide.firstElementChild.className);
  newDot.dataset.active = true;
  delete activeDot.dataset.active;
}

// Associates navigation circle to slide
circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        const slides =  circle.closest("[data-carousel]").querySelector("[data-slides]");
        const dots = circle.closest("[data-carousel]").querySelector("[data-dots]");

        const activeSlide = slides.querySelector("[data-active]");
        let currentIndex = [...slides.children].indexOf(activeSlide)
        let newIndex = [...dots.children].indexOf(circle)

        if (currentIndex !== newIndex) {
          slides.children[newIndex].dataset.active = true;
          delete activeSlide.dataset.active;

          updateCurrentDot(slides.children[newIndex]);
        }
    })
})








