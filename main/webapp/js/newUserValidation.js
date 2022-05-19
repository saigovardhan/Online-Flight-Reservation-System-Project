const fn = document.getElementById("firstName");
const ln = document.getElementById("lastName");
const age = document.getElementById("age");
const pass = document.getElementById("pass");
const gender = document.getElementById("gender").checked;
const passConfirm = document.getElementById("passConfirm");
const address = document.getElementById("Address");
const phoneNumber = document.getElementById("phoneNumber");
const form = document.getElementById("RegistrationForm");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = [];
  if (isNullEmptyBlank(fn.value)) {
    message.push("FirstName cannot be empty!");
  }
  if (isNullEmptyBlank(ln.value)) {
    message.push("LastName cannot be empty!");
  }
  if (isNullEmptyBlank(age.value)) {
    message.push("Age cannot be empty!");
  }
  if (gender === false) {
    message.push("Please select gender");
  }
  if (pass.value.length <= 6 || pass.value.lenght >= 20) {
    message.push("passowrd must be 6-20 letter long");
  }
  if (pass.value !== passConfirm.value) {
    message.push("password dosen't match");
  }
  if (isNullEmptyBlank(phoneNumber.value)) {
    message.push("Phone number cannot be empty");
  }
  if (isNullEmptyBlank(address.value)) {
    message.push("address cannot be empty");
  }

  if (message.length > 0) {
    e.preventDefault();
    errorMessage.innerText = message.join(" \n");
  }
});

function isNullEmptyBlank(str) {
  return (
    str === null || String(str).match(/^ *$/) !== null || String(str) === ""
  );
}
