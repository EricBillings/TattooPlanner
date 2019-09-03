const families = ['Tangerine', 'Akronim', 'Luckiest Guy', 'Lobster', 'Kanit', 'Wire One', 'Allura', 'Amatic SC', 'Baloo Bhaijaan', 'Bokor', 'Butterfly Kids', 'Calligraffitti', 'Caveat', 'Chilanka', 'Kristi', 'Lemonada', 'Londrina Shadow', 'Noto Sans SC', 'Shadows Into Light', 'Shadows Into Light Two', 'Snowburst One', 'Tajawal', 'Tangerine', 'ZCOOL KuaiLe', 'ZCOOL QingKe HuangYou'];

WebFont.load({
    google: {
        families
    }
});


$(document).ready(function() {

    /* Generate or Update Preview of Tattoo on Click of Preview Button*/

    let view = 0;
    $("#preview").on("click", function(event) {
        let text = $("#phrase").val();
        $("#previewArea").empty();

        const previewDiv = `<div id="previewDiv" style="font-size: 36px">${text}</div>`
        let fontFamily = $("#font").val();
        let fontColor = $("#color").val();
        $("#previewArea").append(previewDiv);
        $("#previewDiv").css("font-family", fontFamily);
        $("#previewDiv").css("color", fontColor);



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

    /* Create Font Option Divs for Dropdown*/

    for (let i = 0; i < families.length; i++) {
        const family = families[i].replace(/\s/g, "");

        const option = `<option class="${family} fontClass" id="dropDiv" value="${families[i]}" style="margin:5px; font-family:${families[i]}; font-size:18px" id=${family}>${families[i]}</option>`;
        $("#font").append(option);
        $("#font").css("font-family", families[0])
    }

    /* Change Font of Preview on Change of Dropdown Option*/

    $("#font").on("change", function() {

        let previewFont = ($("#font").val());
        $("#previewDiv").css("font-family", previewFont);
        $("#font").css("font-family", previewFont);

    })

    /* Change Color of Preview on Change of Color Option*/

    $("#color").on("change", function() {

        let fontColor = ($("#color").val());

        $("#previewDiv").css("color", fontColor);


    })

    // Listen for Sign Up Click

    $(document).on("click", "#submit", handleNewTattoo);


    function handleNewTattoo(event) {
        event.preventDefault();

        let size = $("#size").val();
        let font = $("#font").val();
        let tattooSpec = $("#specify").val();
        let bodyPart = $("#bodyPartDisplay").text();
        let tattooText = $("#phrase").val();

        sendTattoo({
            text: tattooText,
            font: font,
            location: bodyPart,
            colors: fontColor,
            size: size,
            specs: tattooSpec
        });
    }

    function sendTattoo(data) {
        $.post("api/Tattoos", data)
        console.log(data);
    }

});