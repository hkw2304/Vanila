const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";
const savedUserName = localStorage.getItem(USER_NAME);
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginFormInput.value;
  loginForm.classList.toggle(HIDDEN_CLASS);
  localStorage.setItem(USER_NAME, JSON.stringify(username));
  printingGreeting(username);
}
function printingGreeting(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.toggle(HIDDEN_CLASS);
}

if (savedUserName === null) {
  loginForm.classList.toggle(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  printingGreeting(savedUserName);
}
