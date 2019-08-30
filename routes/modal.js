

$("#sign-up").on("click",function(){
    let createdPassword = $("#created-password").val();
    console.log(createdPassword);
    let createdPasswordConfirm = $("#created-password-confirm").val();
    console.log(createdPasswordConfirm) ;
    if(createdPassword!="" && createdPasswordConfirm!=""){
      if(createdPassword==createdPasswordConfirm){
       alert("will send data to server")
      }else{alert("not matching")}
    }else{
        alert("try again")
    }
   
})
