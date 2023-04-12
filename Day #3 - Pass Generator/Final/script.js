const lengthSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const copyIcon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

lengthSlider.addEventListener("change", () => {
  const value = lengthSlider.value * 1;
  if (value <= 30) passIndicator.setAttribute("id", "strong");
  if (value <= 15) passIndicator.setAttribute("id", "medium");
  if (value <= 8) passIndicator.setAttribute("id", "weak");
});

options.forEach((op) => {
  if (op.checked) console.log(op.id);
});
