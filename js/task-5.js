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

  return `${r}, ${g}, ${b}`;
}

const setColor = document.querySelector('[data-action="change"]');

const textColor = document.querySelector(".color");

setColor.addEventListener("click", () => {
  const random = randomRGB(getRandomHexColor());
  setColor.style.backgroundColor = `rgb(${random})`;
  textColor.textContent = `rgb(${random})`;
});
