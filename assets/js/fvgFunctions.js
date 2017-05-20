// var state = 0 





//  switch (state) {

//      case (state = 0 ): 

//      	$("#te").css(("backgroundColor", "pink"), 1100)



// };





function background() {
    $("#back1").show("fade", 1600).delay(6000).hide("fade", 5200);


    $("#back2").delay(12300).show("fade", 5400).delay(7000).hide("fade", 6200);


    $("#back3").delay(30390).show("fade", 4400).delay(7000).hide("fade", 6200);

    $("#back4").delay(48560).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back5").delay(66980).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back6").delay(85120).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back7").delay(103400).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back8").delay(121680).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back9").delay(139960).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back10").delay(158240).show("fade", 5400).delay(7000).hide("fade", 6200);

    $("#back11").delay(176620).show("fade", 5400).delay(7000).hide("fade", 6200);

};


function hide() {

    $("#back1").hide();
    $("#back2").hide();
    $("#back3").hide();
    $("#back4").hide();
    $("#back5").hide();
    $("#back6").hide();
    $("#back7").hide();
    $("#back8").hide();
    $("#back9").hide();
    $("#back10").hide();
    $("#back11").hide();

    $("#veggie-display").hide();
    $("#fruit-display").hide();
    $("#grains-display").hide();
    $("#fruit-profile").hide();
    $("#veggie-profile").hide();
    $("#grains-profile").hide();

};


function snagRecipesFruit( ) {



    var queryURL = "http://food2fork.com/api/search?key=" +"2449970cf5c7851987b7a2bf1ccb3dcf" + "&q=" + searchTerm;


    console.log(queryURL);

    $.ajax({
    	
        url: queryURL,
        method: "GET",
        dataType: "json",
        // headers: { "Access-Control-Allow-Origin": "*"}
        crossDomain: true,
        // beforeSend: setHeader

    }).done(function(response) {
        
    	console.log("hey");
        // console.log(JSON.stringify(response));

        // $("#recipe-div-fruit").append(response);


    });

};

    function snagRecipesVeggies() {



        var queryURL = "http://food2fork.com/top?q=" + searchTerm;

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp",
            headers: { "header": "2449970cf5c7851987b7a2bf1ccb3dcf" }


        }).done(function(response) {

            //clear fruit recipes div
            //append to fruit recipes div



            console.log(response);


        });

};

        function snagRecipesGrains() {

            var queryURL = "http://food2fork.com/top?q=" + searchTerm;

            console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET",
                dataType: "jsonp",
                headers: { "header": "2449970cf5c7851987b7a2bf1ccb3dcf" }


            }).done(function(response) {

                //clear grains recipes div
                //append to grains recipes div



                console.log(response);


            });
        };

//fruit gradient

function fruitGradient(){
    var colors = new Array(
       [98, 171, 236], [ 66, 139, 202], [78, 151, 216], [ 66, 139, 202] );


// , [203, 52, 102], [204, 255, 204]

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.0065;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $("#fruit-button").css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        }
    }

    setInterval(updateGradient, 10);
    updateGradient();

};

fruitGradient();
    //veggie gradient


function veggieGradient(){
     var colors = new Array(
       [98, 171, 236], [ 66, 139, 202], [78, 151, 216], [ 66, 139, 202] );



//[23, 260, 9], 

//[179, 255, 102],[184, 255, 77], [179, 255, 102]
    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.0065;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $("#veggie-button").css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        }
    }

    setInterval(updateGradient, 10);
    updateGradient();

};

veggieGradient();


$(".btn-log").mouseenter (function(){

$(".crunches").css("visibility","visible"); 

    });


     $(".btn-log").mouseleave (function(){

$(".crunches").css("visibility","hidden"); 

    });

     //grains gradient

     function grainsGradient(){
     var colors = new Array(
       [98, 171, 236], [ 66, 139, 202], [78, 151, 216], [ 66, 139, 202] );



//[23, 260, 9], 

//[179, 255, 102],[184, 255, 77], [179, 255, 102]
    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.0065;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $("#grains-button").css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        }
    }

    setInterval(updateGradient, 10);
    updateGradient();

};

grainsGradient();


$(".btn-log").mouseenter (function(){

$(".crunches").css("visibility","visible"); 

    });


     $(".btn-log").mouseleave (function(){

$(".crunches").css("visibility","hidden"); 

    });









