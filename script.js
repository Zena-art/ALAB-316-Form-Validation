const registrationForm = document.getElementById("registration");
const errorDisplayEl = document.getElementById("errorDisplay");
const loginForm = document.getElementById("login");
registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"];
  const email = this.elements["email"];
  const password = this.elements["password"];
  validateUsername(username);
  validateEmail(email);
  validatePasswd(password);
});
function showErrorMsg(msg) {
  errorDisplayEl.textContent = msg;
  errorDisplayEl.style.display = "block";
  setTimeout(() => {
    errorDisplayEl.style.display = "none";
  }, 3000);
}
function validatePasswd(passwordInput) {
  const password = passwordInput.value.trim();
  if (password.length < 12) {
    return showErrorMsg("Passwords must be at least 12 characters long.");
  }
  if (!/[A-Z]{1,}|[a-z]{1,}/.test(password)) {
    return showErrorMsg(
      "Passwords must have at least one uppercase and one lowercase letter."
    );
  }
  return password;
}
function validateEmail(emailInput) {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    return showErrorMsg("The email must not be blank.");
  }
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
    return showErrorMsg("The email must be a valid email address.");
  }
  if (emailValue.lastIndexOf("example.com") > 0) {
    return showErrorMsg('The email must not be from the domain "example.com."');
  }
  return emailValue;
}
function validateUsername(usernameInput) {
  const usernameValue = usernameInput.value.trim();
  const usernameReg = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/;
  if (usernameValue === "") {
    return showErrorMsg("The username cannot be blank.");
  }
  if (usernameValue.length < 4) {
    return showErrorMsg("The username must be at least four characters long.");
  }
  //   if (!usernameReg.test(usernameValue)) {
  //     return showErrorMsg(
  //       "The username must contain at least two unique characters."
  //     );
  //   }
  if (!/[^\s\&\*\@\#\$\(\)]/.test(usernameValue)) {
    return showErrorMsg(
      "The username cannot contain any special characters or whitespace."
    );
  }
  return usernameValue;
}