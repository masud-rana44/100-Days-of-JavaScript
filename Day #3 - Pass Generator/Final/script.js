const lengthSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const copyIcon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passLengthValue = document.querySelector(".pass-length span");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+:;/<>{}[]";
const spaces = "      ";

const settings = [lowercase];
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomPassword(length) {
  const characters = settings.join("");
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

lengthSlider.addEventListener("input", () => {
  // Read the value & Show it
  const value = lengthSlider.value * 1;
  passLengthValue.innerHTML = value;

  // Update the random string
  const randomPassword = generateRandomPassword(value);
  passwordInput.value = randomPassword;

  // Update the indicator
  if (value <= 30) passIndicator.id = "strong";
  if (value <= 15) passIndicator.id = "medium";
  if (value <= 8) passIndicator.id = "weak";
});

options.forEach((op) => {
  op.addEventListener("change", () => {
    if (op.id === "uppercase") {
      if (op.checked && !settings.includes(uppercase)) settings.push(uppercase);
      else
        settings.splice(
          settings.findIndex((el) => el === uppercase),
          1
        );
    } else if (op.id === "numbers") {
      if (op.checked && !settings.includes(numbers)) settings.push(numbers);
      else
        settings.splice(
          settings.findIndex((el) => el === numbers),
          1
        );
    } else if (op.id === "symbols") {
      if (op.checked && !settings.includes(symbols)) settings.push(symbols);
      else
        settings.splice(
          settings.findIndex((el) => el === symbols),
          1
        );
    } else if (op.id === "spaces") {
      if (op.checked && !settings.includes(spaces)) settings.push(spaces);
      else
        settings.splice(
          settings.findIndex((el) => el === spaces),
          1
        );
    }
  });
});

generateBtn.addEventListener("click", () => {
  const value = lengthSlider.value * 1;
  const randomPassword = generateRandomPassword(value);
  passwordInput.value = randomPassword;
});
