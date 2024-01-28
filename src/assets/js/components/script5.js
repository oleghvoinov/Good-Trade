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
