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
