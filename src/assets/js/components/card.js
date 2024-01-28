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
