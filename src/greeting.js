const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handdleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handdleSubmit);
  //프로그램이 기억 못함.
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    // she is not
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
