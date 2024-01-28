const burger = document.querySelector(".burger__menu");
const navMeny = document.querySelector(".nav-menu__wrapper");
const subnavMenyBtn = document.querySelectorAll(".mobile__button");
const subnavMenuAll = document.querySelectorAll(".subnav-menu");
const body1 = document.body;

burger.addEventListener("click", (e) => {
  burger.classList.toggle("opened");
  burger.setAttribute("aria-expanded", burger.classList.contains("opened"));
  if (navMeny.classList.contains("active-burger")) {
    closeAll();
  } else {
    body1.classList.add("no-scroll");
    navMeny.classList.add("active-burger");
  }
});

subnavMenyBtn.forEach((itme) => {
  itme.addEventListener("click", (event) => {
    const subnavMenu = event.currentTarget.nextElementSibling;

    subnavMenu.classList.add("subnav-menu--active");

    const subnavMenubtnClose =
      subnavMenu.firstElementChild.firstElementChild.firstElementChild;

    subnavMenubtnClose.addEventListener("click", (event) => {
      if (subnavMenu.classList.contains("subnav-menu--active")) {
        subnavMenu.classList.remove("subnav-menu--active");
      }
    });
  });
});

function closeAll() {
  subnavMenuAll.forEach((itme) => {
    if (itme.classList.contains("subnav-menu--active")) {
      itme.classList.remove("subnav-menu--active");
    }
  });
  navMeny.classList.remove("active-burger");
  body1.classList.remove("no-scroll");
}
