function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function randomRGB(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
const input = document.querySelector("input");
const resetBtn = document.querySelector("[data-destroy]");
const btn = document.querySelector("[data-create]");
const mainDiv = document.querySelector("#boxes");

resetBtn.addEventListener("click", () => (mainDiv.innerHTML = ""));

btn.addEventListener("click", (event) => {
  const inputValue = Number(input.value);
  if (inputValue > 0 && inputValue <= 100) {
    mainDiv.innerHTML = "";
    createBoxes(inputValue);
  }
  input.value = "";
});

function createBoxes(amount) {
  let widthHeight = 30;
  let boxesContent = "";
  for (let i = 0; i < amount; i++) {
    boxesContent += `<div style="width:${widthHeight}px; height:${widthHeight}px; background-color:${randomRGB(
      getRandomHexColor()
    )}"></div> `;
    widthHeight += 10;
  }
  mainDiv.innerHTML = boxesContent;
}

// function createBoxes(amount) {
//   console.log(input.value);
// }
