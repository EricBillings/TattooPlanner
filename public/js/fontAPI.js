const families = ['Tangerine', 'Akronim', 'Luckiest Guy', 'Lobster', 'Wire One', 'Allura', 'Amatic SC', 'Baloo Bhaijaan', 'Bokor', 'Butterfly Kids', 'Calligraffitti', 'Caveat', 'Chilanka', 'Kristi', 'Lemonada', 'Londrina Shadow', 'Noto Sans SC', 'Shadows Into Light', 'Shadows Into Light Two', 'Snowburst One', 'Tajawal', 'Tangerine', 'ZCOOL KuaiLe', 'ZCOOL QingKe HuangYou'];

WebFont.load({
    google: {
        families
    }
});


$(document).ready(function() {

    let view = 0;
    $("#preview").on("click", function(event) {
        $("#previewArea").empty();
        let text = $("#phrase").val();
        const previewDiv = `<div id="previewDiv" style="font-size: 36px">${text}</div>`
        $("#previewArea").append(previewDiv);

        if (view === 0) {
            event.preventDefault();
            $(".fontClass").show();
            view = 1;
        } else {
            event.preventDefault();
            $(".fontClass").hide();
            view = 0;
        }

    })



    for (let i = 0; i < families.length; i++) {
        const family = families[i].replace(/\s/g, "");

        const option = `<option="${family} fontClass" id="dropDiv" value="${families[i]}" style="margin:5px; font-family:${families[i]}; font-size:18px" id=${family}>${families[i]}</option>`;
        $("#font").append(option);
    }

    $(".fontClass").on("mouseover", function() {

        let fontFamily = $(this).css("font-family");

        $("#previewDiv").css("font-family", fontFamily);
    });

    $(".fontClass").on("click", function() {
        $(".fontClass").hide();

    });


});