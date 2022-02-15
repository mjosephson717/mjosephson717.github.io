// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

@media screen and (max-width: 720px) {
  /*changes reflects on screen with a width of 720px and below*/
}