$(document).ready(function () {

  // frontend email validation begins.
  // sign in validation begins
  let formEmailSignIn = document.getElementById("form-email-sign-in");
  formEmailSignIn.addEventListener("keyup", function () {
    let emailValidated = validateEmail($("#form-email-sign-in").val());
    if (emailValidated) { $("#sign-in-button").removeAttr("disabled"); }
  });
  // sign in validation ends.

  //this value is made global for signup because its need for the create password and confirm password
  let signUpEmailValid = false;

  // sign up validation begins
  let formEmailSignUp = document.getElementById("form-email-sign-up");
  formEmailSignUp.addEventListener("keyup", function (e) {
    let emailValidated = validateEmail($("#form-email-sign-up").val());
    if (emailValidated) { signUpEmailValid = true; 
      $("#form-password-create").removeAttr("disabled")
       $("#form-password-confirm").removeAttr("disabled")}
  });
  // sign up validation ends.

  //password checker sign up begins.
  let formPasswordSignUp = document.getElementById("form-password-create");
  let formPasswordSignUpConfirm = document.getElementById("form-password-confirm");
  formPasswordSignUp.addEventListener("keyup", function (e) {
    const validatePassword = validatePasswords($("#form-password-create").val(), $("#form-password-confirm").val());
    console.log(validatePassword);
    if (validatePassword == true && signUpEmailValid == true) { $("#sign-up-button").removeAttr("disabled"); }
  });
  formPasswordSignUpConfirm.addEventListener("keyup", function (e) {
    const validatePassword = validatePasswords($("#form-password-create").val(), $("#form-password-confirm").val());
    console.log(validatePassword);
    if (validatePassword == true && signUpEmailValid == true) { $("#sign-up-button").removeAttr("disabled"); };
  });
  //password checker sign up ends.

  //when creating a password we input password twice to confirm its correct 
  function validatePasswords(create, confirm) {
    if (create == confirm) {
      return true;
    }
    else {
      return false;
    }
  };
  //when creating a password we input password twice to confirm its correct 

  //function to check email format.
  function validateEmail(inputText) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if (inputText.match(emailFormat)) {
      return true;
    }
    else {
      return false;
    }
  }
  // frontend email validation ends.

});