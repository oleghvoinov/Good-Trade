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
