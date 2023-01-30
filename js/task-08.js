const formEl = document.querySelector(".login-form");

function onFormSubmit(e) {
  e.preventDefault();
  //Деструктуризація elements
  const {
    elements: { email: emailEl, password: passwordEl },
  } = e.currentTarget;

  const email = emailEl.value;
  const password = passwordEl.value;

  if (email === "" || password === "") {
    window.alert("Необхідно заповнити всі поля!");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  e.currentTarget.reset();
}

formEl.addEventListener("submit", onFormSubmit);
