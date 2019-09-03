$("#submit").on("click",function(){
    //event.preventDefault();
    var newTat = {
        phrase: $("#phrase").val().trim(),
        font: $("#font").val().trim(),
        location: $("#bodyPartDisplay").text(),
        color: $("#color").val(),
        size: $("#size").val(),
        specs: $("#specify").val().trim()
    }

    $.post("/api/newTat",newTat).then(function(data){
        console.log(data);
    })
})

