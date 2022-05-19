const userName = document.getElementById("username");
const password = document.getElementById("pass");
const errorMessage1 = document.getElementById("error1");
const errorMessage2 = document.getElementById("error2");
const loginPageForm = document.getElementById("loginPageForm");

loginPageForm.addEventListener("submit", (e) => {
  let message1 = "";
  let message2 = "";
  if (userName.value === " " || userName.value === null) {
    message1 = "UserName cannot be empty...";
  }
  if (password.value.length <= 6 || password.value.length >= 20) {
    message2 = "Password must be 6-20 letters long";
  }
  if (message1.length > 0 || message2.length > 0) {
    e.preventDefault();
    errorMessage1.innerText = message1;
    errorMessage2.innerText = message2;
  }
});
