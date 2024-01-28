let navBtn = document.querySelector(".nav__btn");
let navChevron = document.querySelector(".nav__chevron");
let accordion = document.querySelector(".accordion");

navBtn.addEventListener("click", function () {
  navBtn.classList.add("noHover");
  navChevron.classList.remove("noHover");
  accordion.classList.add("show");
});

navChevron.addEventListener("click", function () {
  navBtn.classList.remove("noHover");
  navChevron.classList.add("noHover");
  accordion.classList.remove("show");
});
