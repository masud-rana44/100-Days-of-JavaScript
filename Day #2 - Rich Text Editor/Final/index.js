let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let isPaint = true;

const clearGridMarkup = function () {
  container.innerHTML = "";
};

const renderGridMarkup = function () {
  let markup = "";
  const row = +heightValue.textContent;
  const col = +widthValue.textContent;

  for (let i = 0; i < row; i++) {
    markup += '<div class="gridRow">';
    for (let j = 0; j < col; j++) {
      markup += '<div class="gridCol"></div>';
    }
    markup += "</div>";
  }

  clearGridMarkup();
  container.insertAdjacentHTML("beforeend", markup);
};

// Events
const events = [gridWidth, gridHeight];

window.onload = () => {
  gridHeight.value = 0;
  gridWidth.value = 0;
};

events.forEach((event) =>
  event.addEventListener("input", () => {
    if (event === gridWidth)
      widthValue.textContent = `${event.value}`.padStart(2, 0);
    else heightValue.textContent = `${event.value}`.padStart(2, 0);
  })
);

eraseBtn.addEventListener("click", () => {
  isPaint = false;
});

paintBtn.addEventListener("click", () => {
  isPaint = true;
});

clearGridButton.addEventListener("click", clearGridMarkup);
gridButton.addEventListener("click", renderGridMarkup);

container.addEventListener("mousemove", (e) => {
  const gridCell = e.target.closest(".gridCol");
  if (!gridCell) return;

  gridCell.style.backgroundColor = `${isPaint ? colorButton.value : "white"}`;
});
