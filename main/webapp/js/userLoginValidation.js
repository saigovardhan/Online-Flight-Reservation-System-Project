const userid = document.getElementById("userid");
const password = document.getElementById("pass");
const userLoginForm = document.getElementById("userLoginForm");
const errorMessage = document.getElementById("error");

userLoginForm.addEventListener("submit", (e) => {
  let message = "";

  if (password.value.length <= 6 || password.value.length >= 20) {
    if (isNullEmptyBlank(password.value)) {
      message = "Password cannot be blank";
    } else {
      message = "Password must be 6-20 letters long";
    }
  }
  if (message.length > 0) {
    e.preventDefault();
    errorMessage.innerText = message;
  }
  e.preventDefault();
});

function isNullEmptyBlank(str) {
  return (
    str === null || String(str).match(/^ *$/) !== null || String(str) === ""
  );
}
