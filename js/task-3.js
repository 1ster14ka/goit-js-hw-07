const userInput = document.querySelector("#name-input");
console.log(userInput);
const userOutput = document.querySelector("#name-output");
userInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue) {
    userOutput.textContent = event.currentTarget.value;
  } else {
    userOutput.textContent = "Anonymous";
  }
});
console.log(userInput);
