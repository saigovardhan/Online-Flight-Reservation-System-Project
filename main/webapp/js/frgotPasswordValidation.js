const userid = document.getElementById("userid");
const email = document.getElementById("emailid");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const errorMessage = document.getElementById("error");

forgotPasswordForm.addEventListener("submit", (e) => {
  let message = [];

  if (userid.value === "") {
    message.push("Please provide correct user id");
  }
  if (ValidateEmail(email) || email.value === null || email.value === "") {
    message.push("Please provide correct email id");
  }
  if (message.length > 0) {
    e.preventDefault();
    errorMessage.innerText = message.join("\n");
  }
  e.preventDefault();
});

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
