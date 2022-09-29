var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");

if (password == confirm_password) {
  document.getElementById("password").style.border = "1.5px solid green";
}