$(document).ready(function () {

  $("#sign-in-button").on("click", function () {
    let formEmailSignIn = $("#form-email-sign-in").val();
    let formPasswordSignIn = $("#form-password-sign-in").val();
  });

  $("#sign-up-button").on("click", function () {
    let formEmailSignUp = $("#form-email-sign-up").val();
    let formPasswordCreate = $("#form-password-create").val();
    let formPasswordConfirm = $("#form-password-confirm").val();
    
  });
});




