
//select password and store it in variable
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");


//compare password to see if same 
if (password == confirm_password) {
  document.getElementById("password").style.border = "1.5px solid green";
}