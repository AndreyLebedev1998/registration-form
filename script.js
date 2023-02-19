function myFunction() {
  let x = document.querySelector(".password");
  for (let i = 0; i < x.length; i++) {}
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFn() {
  let x = document.querySelector(".passwordd");
  for (let i = 0; i < x.length; i++) {}
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

let registration = document.querySelector(".registration");
let theEnd = document.querySelector(".theEnd");
let tel = document.querySelector(".tel");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passwordd = document.querySelector(".passwordd");
registration.addEventListener("click", endingRegistration, false);

function endingRegistration() {
  registration.style.display = "none";
  theEnd.style.display = "block";
  theEnd.style.backgroundColor = "green";
  if (tel.value.length < 11) {
    alert("Телефон должен содержать не меньше 11 символов");
    registration.style.display = "block";
    theEnd.style.display = "none";
  } else if (tel.value.length > 13) {
    alert("Телефон должнен содержать не больше 13 символов");
    registration.style.display = "block";
    theEnd.style.display = "none";
  } else if (email.value.length < 5) {
    alert("email должен содержать минимум 5 символов");
    registration.style.display = "block";
    theEnd.style.display = "none";
  } else if (email.value.split("@").length == 1) {
    alert("email должен содержать символ @");
    registration.style.display = "block";
    theEnd.style.display = "none";
  } else if (password.value.length < 10) {
    alert("Пароль должен содержать не менее 10 символов");
    registration.style.display = "block";
    theEnd.style.display = "none";
  } else if (password.value != passwordd.value) {
    password.value = "";
    passwordd.value = "";
    alert("Пароли не совпадают");
    registration.style.display = "block";
    theEnd.style.display = "none";
  }
}
