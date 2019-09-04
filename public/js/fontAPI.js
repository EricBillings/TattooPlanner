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

    // Listen for Submit Click and Send Tattoo Details to db

    $(document).on("click", "#submit", handleNewTattoo);


    function handleNewTattoo(event) {
        event.preventDefault();

        let size = $("#size").val();
        let font = $("#font").val();
        let tattooSpec = $("#specify").val();
        let fontColor = $("#color").val();
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



    // Populate Shop Tattoo Cards

    getTattoos();


    function getTattoos() {
        $.get("/api/Tattoos", function(data) {
            $("#tattooList").empty();
            buildCards(data);

        })
    }

    function buildCards(data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            let cardDiv = `<div class="row">
            <div class="col-4" style="color:black; font-family:arial">Customer: ${data[i]["CustomerId"]}</div>
            <div class="col-8" style="color:${data[i]["colors"]}; font-family:${data[i]["font"]}">${data[i]["text"]}</div>
            <div class="col" style="color:black; font-family:arial">Text: ${data[i]["text"]}</div>
            </div><div class="col" style="color:black; font-family:arial">Font: ${data[i]["font"]}</div><div class="col" style="color:black; font-family:arial">Location: ${data[i]["location"]}</div><div class="col" style="color:black; font-family:arial">Color: ${data[i]["colors"]}</div><div class="col" style="color:black; font-family:arial">Size: ${data[i]["size"]}</div>
            <div class="col-6" style="color:black; font-family:arial">Specifications: ${data[i]["specs"]}</div>
            <button class="trash" id="${data[i]["id"]}">Trash</button>
            </div>
            <hr>
            `
            $("#tattooList").append(cardDiv);
        }
    }

    // Remove Tattoo from Shop List

    $("#tattooList").on("click", ".trash", function(data) {
        $.ajax({
                method: "DELETE",
                url: "/api/Tattoos/" + event.target.id
            })
            .then(getTattoos);

    })







});