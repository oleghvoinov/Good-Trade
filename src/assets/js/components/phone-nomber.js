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
