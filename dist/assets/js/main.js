const slider = document.querySelector(".swiper");
const slider1 = document.querySelector(".swiper1");
const slider2 = document.querySelector(".swiper2");
const slider3 = document.querySelector(".swiper3");
const slider4 = document.querySelector(".swiper4");

w1 = 4;
w2 = 3;
w3 = 2;

if (document.documentElement.clientWidth < 750) {
  w1 = 2;
  w2 = 2;
  w3 = 2;
}
if (document.documentElement.clientWidth < 510) {
  w1 = 1;
  w2 = 1;
  w3 = 1;
}

let mySwiper = new Swiper(slider, {
  spaceBetween: 20,

  slidesPerView: w1,
  centeredSlides: false,
  loop: false,

  loopAdditionalSlides: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let mySwiper1 = new Swiper(slider1, {
  spaceBetween: 20,
  slidesPerView: w2,
  centeredSlides: false,
  loop: false,

  loopAdditionalSlides: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

let mySwiper2 = new Swiper(slider2, {
  spaceBetween: 20,
  slidesPerView: w3,
  centeredSlides: false,
  centeredSlides: false,
  loop: false,

  loopAdditionalSlides: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

let mySwiper3 = new Swiper(slider3, {
  spaceBetween: 20,
  slidesPerView: w1,
  centeredSlides: false,
  centeredSlides: false,
  loop: false,

  loopAdditionalSlides: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

let mySwiper4 = new Swiper(slider4, {
  spaceBetween: 20,
  slidesPerView: w2,
  centeredSlides: false,
  centeredSlides: false,
  loop: false,

  loopAdditionalSlides: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = this || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown-button");
  const dropDowmList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownWrapper.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );

  dropDownBtn.addEventListener("click", function () {
    dropDowmList.classList.toggle("dropdown__list--visible");
    dropDownBtn.classList.toggle("dropdown-button--active");
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation;
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDowmList.classList.remove("dropdown__list--visible");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown-button--active");
      dropDowmList.classList.remove("dropdown__list--visible");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown-button--active");
      dropDowmList.classList.remove("dropdown__list--visible");
    }
  });
});
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
const modalBtn = document.querySelectorAll("[data-modal]");
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");
let lockPadding = document.querySelector(".wrapper");

modalBtn.forEach((itme) => {
  itme.addEventListener("click", (event) => {
    let $this = event.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector(".modal__content");
    //   let modalVideo = modal.querySelector(".modal__video");

    // modalVideo.addEventListener("click", (event) => {
    //   event.stopPropagation();
    // });
    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";

    lockPadding.style.paddingRight = lockPaddingValue;

    modal.classList.add("show");
    body.classList.add("no-scroll");

    setTimeout(function () {
      modalContent.style.transform = "none";
    }, 1);
  });
});

modalClose.forEach((itme) => {
  itme.addEventListener("click", (event) => {
    let currentModal = event.currentTarget.closest(".modal");

    closeModal(currentModal);
  });
});

modal.forEach((itme) => {
  itme.addEventListener("click", (event) => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  });
});

function closeModal(currentModal) {
  let modalContent = currentModal.querySelector(".modal__content");
  modalContent.removeAttribute("style");

  setTimeout(() => {
    currentModal.classList.remove("show");
    body.classList.remove("no-scroll");
    lockPadding.style.paddingRight = 0;
  }, 250);
}
let rangeMin = 10;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      const strMax = (minRange / rangeInput[0].max) * 10;
      range.style.left = String((minRange / rangeInput[0].max) * 100) + "%";
      range.style.right =
        String(100 - (maxRange / rangeInput[1].max) * 100) + "%";
    }
  });
});

rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = Number(rangePrice[0].value);
    let maxPrice = Number(rangePrice[1].value);

    if (
      maxPrice - minPrice > rangeMin &&
      maxPrice <= Number(rangeInput[1].max)
    ) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left = String((minPrice / rangeInput[0].max) * 100) + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right =
          String(100 - (maxPrice / rangeInput[1].max) * 100) + "%";
      }
    }
  });
});
const styleRus = document.getElementById("date-type");

const RuDate = new Intl.DateTimeFormat("ru", {
  localeMatcher: "lookup",
  formatMatcher: "basic",
  //   timeZone: "UTS",
  weekday: "long",

  year: "numeric",
  month: "long",
  day: "numeric",
});

styleRus.addEventListener("keydown", (event) => {
  if (
    event.code == "Backspace" &&
    styleRus.value[styleRus.value.length - 1] == "."
  ) {
    styleRus.value = styleRus.value.substring(0, styleRus.value.length - 1);
  }

  styleRus.addEventListener("input", (event) => {
    styleRus.value = dateFormat(styleRus.value);
  });
});

styleRus.addEventListener("change", (event) => {
  let dat1 = new Date(Date.parse(styleRus.value));
  if (dat1 == "Invalid Date") {
    dat1 = new Date(Date.parse(NewDat(styleRus.value)));
  }

  styleRus.value = RuDate.format(dat1);
});

function NewDat(str) {
  if (str.indexOf("-") >= 0) {
    let fields = str.split("-");
    str = fields.reverse().join("-");
  }
  if (str.indexOf("/") >= 0) {
    let fields = str.split("/");
    str = fields.reverse().join("/");
  }
  if (str.indexOf(".") >= 0) {
    let fields = str.split(".");
    str = fields.reverse().join("/");
  }
  return str;
}

function dateFormat(input) {
  input = input.replace(/\D/g, "");
  length;
  let size = input.length;
  if (size < 2) {
    input = input;
  } else if (size < 4) {
    input = input.substring(0, 2) + "." + input.substring(2, 4);
  } else if (size >= 4) {
    input =
      input.substring(0, 2) +
      "." +
      input.substring(2, 4) +
      "." +
      input.substring(4, input.length + 1);
  }

  return input;
}
const styleRu = document.getElementById("currency-type");

let formatter = new Intl.NumberFormat("ru", {
  localeMatcher: "best fit",
  style: "currency",
  currency: "USD",
});

styleRu.addEventListener("change", (event) => {
  styleRu.value = formatter.format(styleRu.value);
});
const phoneNomber = document.getElementById("phone-type");

phoneNomber.addEventListener("keydown", (event) => {
  if (
    event.code == "Backspace" &&
    (phoneNomber.value[phoneNomber.value.length - 1] == " " ||
      phoneNomber.value[phoneNomber.value.length - 1] == "-" ||
      phoneNomber.value[phoneNomber.value.length - 1] == "(")
  ) {
    phoneNomber.value = phoneNomber.value.substring(
      0,
      phoneNomber.value.length - 2
    );
  }
  phoneNomber.addEventListener("input", (event) => {
    phoneNomber.value = phoneFormat(phoneNomber.value);
  });
});

function phoneFormat(input) {
  if (input[0] == "+") {
    input = input.replace(/\D/g, "");
    input = "+" + input;
    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0, 12);

    // Based upon the length of the string, we add formatting as necessary
    let size = input.length;
    if (size < 2) {
      input = input;
    } else if (size < 5) {
      input = input.substring(0, 2) + " (" + input.substring(2, 5);
    } else if (size < 9) {
      input =
        input.substring(0, 2) +
        " (" +
        input.substring(2, 5) +
        ") " +
        input.substring(5, 8);
    } else {
      input =
        input.substring(0, 2) +
        " (" +
        input.substring(2, 5) +
        ") " +
        input.substring(5, 8) +
        " - " +
        input.substring(8, 12);
    }

    return input;
    // Strip all characters from the input except digits
  } else {
    input = input.replace(/\D/g, "");
    input = "+7" + input.substring(1, 11);
    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0, 12);

    // Based upon the length of the string, we add formatting as necessary
    let size = input.length;
    if (size < 2) {
      input = input;
    } else if (size < 6) {
      input = input.substring(0, 2) + " (" + input.substring(2, 5);
    } else if (size < 9) {
      input =
        input.substring(0, 2) +
        " (" +
        input.substring(2, 5) +
        ") " +
        input.substring(5, 8);
    } else {
      input =
        input.substring(0, 2) +
        " (" +
        input.substring(2, 5) +
        ") " +
        input.substring(5, 8) +
        " - " +
        input.substring(8, 12);
    }

    return input;
  }
}
const cardType = document.getElementById("card-type");

cardType.addEventListener("keydown", (event) => {
  if (
    event.code == "Backspace" &&
    cardType.value[cardType.value.length - 1] == " "
  ) {
    cardType.value = cardType.value.substring(0, cardType.value.length - 1);
  }

  cardType.addEventListener("input", (event) => {
    cardType.value = formatCard(cardType.value);
  });
});

function formatCard(input) {
  input = input.replace(/\D/g, "");
  input = input.substring(0, 16);

  let size = input.length;
  if (size < 4) {
    input = input;
  } else if (size < 8) {
    input = input.substring(0, 4) + " " + input.substring(4, 8);
  } else if (size < 12) {
    input =
      input.substring(0, 4) +
      " " +
      input.substring(4, 8) +
      " " +
      input.substring(8, 12);
  } else if (size < 17) {
    input =
      input.substring(0, 4) +
      " " +
      input.substring(4, 8) +
      " " +
      input.substring(8, 12) +
      " " +
      input.substring(12, 16);
  }

  return input;
}
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