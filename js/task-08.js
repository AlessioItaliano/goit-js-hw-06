const loginForm = document.querySelector(".login-form");

console.log(loginForm);

loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!(email.value && password.value)) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const data = {
      name: email.value,
      password: password.value,
    };

    console.log(data);

    loginForm.reset();
  }
}
