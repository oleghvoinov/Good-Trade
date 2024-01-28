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
