
// //select password and store it in variable
// var password = document.getElementById("password");
// var confirm_password = document.getElementById("confirm-password");


// //compare password to see if same 
// if (password == confirm_password) {
//   document.getElementById("password").style.border = "1.5px solid green";
// }

const passField = document.querySelector('#password');
const passConfirmField = document.querySelector('#confirm-password');

function check() {
  let pass = document.querySelector('#password').value;
  let passConfirm = document.querySelector('#confirm-password').value;

  if (passConfirm !== pass) {
      alert('Password fields must match.');
  }
}

passField.addEventListener('click', check);

passConfirmField.addEventListener('click', check);
