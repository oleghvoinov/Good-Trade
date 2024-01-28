const styleRu = document.getElementById("currency-type");

let formatter = new Intl.NumberFormat("ru", {
  localeMatcher: "best fit",
  style: "currency",
  currency: "USD",
});

styleRu.addEventListener("change", (event) => {
  styleRu.value = formatter.format(styleRu.value);
});
