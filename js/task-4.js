const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const res = {
    email: email,
    password: password,
  };
  console.log(res);
  form.reset();
}
