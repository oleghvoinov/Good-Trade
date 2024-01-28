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
