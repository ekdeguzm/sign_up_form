// create variable of password fields
const passField = document.querySelector('#password');
const passConfirmField = document.querySelector('#confirm-password');

// compare passwords 
function check() {
  let pass = document.querySelector('#password').value;
  let passConfirm = document.querySelector('#confirm-password').value;

  if (passConfirm !== pass) {
      alert('Password fields must match.');
      document.querySelector("#password").style.border = "2px solid red";
      document.querySelector("#confirm-password").style.border = "2px solid red";
  }
  else {
    document.querySelector("#password").style.border = "2px solid green";
    document.querySelector("#confirm-password").style.border = "2px solid green";
  }
}

passField.addEventListener('click', check);
passConfirmField.addEventListener('click', check);
