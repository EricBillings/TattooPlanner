$(document).ready(function () {

    let isSelected = false;
    let valueofthis;

    $(".body-area").on("click", function () {
        event.preventDefault();
        valueofthis = $(this).attr("alt");
        $("#bodyPartDisplay").empty();
        $("#bodyPartDisplay").append(valueofthis);
        isSelected = true;

    });

    $(".body-area").mouseover(function () {

        if (isSelected == false) {
            $("#myModalLabel").empty();
            $("#myModalLabel").append($(this).attr("alt"));
        } else {
            $("#myModalLabel").empty();
            $("#myModalLabel").append(valueofthis)
        }


    });



});


