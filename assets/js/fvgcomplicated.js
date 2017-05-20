
//GLOBALS

 var Mango =  {

    body: "Mangoes are good for energy. They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",
    nutrition: "Mangoes contain fructose They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",
    culture: "Mangoes originate in west Africa They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",

};

var Apple = {
    body: "Apples are good for energy. They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",
    nutrition: "Apples contain fructose They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",
    culture: "Apples originate in west Africa They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",

};

var Cherries = {

   body: "Cherries are good for energy. They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",
    nutrition: "Cherries contain fructose They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",
    culture: "Cherries originate in west Africa They contain this which does this. Do know <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text<p> <p>more more more more more<p> <p> thus thus thus thus thus <p> <p> this this this this this this <p>",

};



//END GLOBALS

function emptyInfoFruit(){

$("#fruit-body").empty();
$("#fruit-nutrition").empty();
$("#fruit-culture").empty();


}




$(document).ready(function() {
//GLOBAL
var begin = true;

hide();
// DESIGN: Background
// $("#back1").hide();
// $("#back2").hide();
// $("#back3").hide();
// $("#back4").hide();
// $("#back5").hide();
// $("#back6").hide();
// $("#back7").hide();
// $("#back8").hide();
// $("#back9").hide();
// $("#back10").hide();
// $("#back11").hide();

// $("#veggie-display").hide();
// $("#fruit-display").hide();
// $("#grains-display").hide();
// $("#fruit-profile").hide();
// $("#veggie-profile").hide();
// $("#grains-profile").hide();

// function background (){
//     $("#back1").show("fade",1600).delay(6000).hide("fade", 5200);
 
    
//     $("#back2").delay(12300).show("fade", 5400).delay(7000).hide("fade", 6200);


//     $("#back3").delay(30390).show("fade", 4400).delay(7000).hide("fade", 6200);

//     $("#back4").delay(48560).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back5").delay(66980).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back6").delay(85120).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back7").delay(103400).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back8").delay(121680).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back9").delay(139960).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back10").delay(158240).show("fade", 5400).delay(7000).hide("fade", 6200);

//     $("#back11").delay(176620).show("fade", 5400).delay(7000).hide("fade", 6200);

// };

	background();


// DESIGN: Buttons

var fruits = ["Apple", "Blueberry", "Blackberry", "Bannana", "Plum", "Mango", "Tomato", "Cherry"];

// function(){

for (var i= 0; i< fruits.length; i++){

var a= $("<button>");
a.addClass("btn");
a.addClass("btn-primary");
a.addClass("food");
a.addClass("fruits");
a.text(fruits[i]);
a.addClass(fruits[i]);
a.attr("data-name", fruits[i]);
$("#fruit-display").append(a);


//end of for loop

};



$(".fruits").on("click", function(){

    var fruitName = $(this).text();
console.log(fruitName);


switch(fruitName){

case "Apple":

emptyInfoFruit();
$("#fruit-body").append(Apple.body);
$("#fruit-nutrition").append(Apple.nutrition);
$("#fruit-culture").append(Apple.culture);
//here append apple recipes

// console.log("append working");

break;


case "Mango":

emptyInfoFruit();
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOSQ9IfCgAJuchgLR8ppWhwsiBCQkUWTw0xKLtbuJhq8eczWJqww')");
$("#fruit-body").append(Mango.body);
$("#fruit-nutrition").append(Mango.nutrition);
$("#fruit-culture").append(Mango.culture);


break;





};


});





//end of function
// };



$(a).on("click", function(fruits){
    var store = $(this).attr("data-name")
    console.log(store);
    store.append(text);
});

var veggies = ["Kale", "Parsley", "Cucumber", "Sweet Potato", "Beet", "Fermented Veggies", "Onion", "Celery"];

for (var i= 0; i< veggies.length; i++){

var a= $("<button>");
a.addClass("btn");
a.addClass("btn-primary");
a.addClass("food");
a.addClass("veggies");
a.text(veggies[i]);
a.attr("data-name", veggies[i]);
$("#veggie-display").append(a);

};

//nuts are in grains...it's ok :)

var grains = ["Oats", "Wild Rice", "Brown Rice", "Cashew", "Almond", "Macadamia", "Barley", "Quinoa"];

for (var i= 0; i< grains.length; i++){

var a= $("<button>");
a.addClass("btn");
a.addClass("btn-primary");
a.addClass("food");
a.addClass("grains")
a.text(grains[i]);
a.attr("data-name", grains[i]);
$("#grains-display").append(a);

};


//FUNCTIONALITY: buttons


$("#fruit-button").on("click", function(){

$("#fruit-button").hide();
$("#fruit-display").show();




});



$("#veggie-button").on("click", function(){

$("#veggie-button").hide();
$("#veggie-display").show();




});




$("#grains-button").on("click", function(){

$("#grains-button").hide();
$("#grains-display").show();




});



 $("#arrow1").on("click", function() {

        $("#fruit-display").hide();
        $("#fruit-button").show();
        console.log("working");
    });

 $("#arrow2").on("click", function() {

        $("#veggie-display").hide();
        $("#veggie-button").show();
        console.log("working");
    });

$("#arrow3").on("click", function() {

        $("#grains-display").hide();
        $("#grains-button").show();
        console.log("working");
    });



$(".fruits").on("click", function(){

$("#fruit-display").hide();
$("#fruit-profile").show();
$(".fruit-button1-trigger").hide();
$(".fruit-button2-trigger").hide();
$(".fruit-button3-trigger").hide();
$(".fruit-button4-trigger").hide();


});



$("#arrow4").on("click", function(){

$("#fruit-profile").hide();
$("#fruit-display").show();

});


$("#fruit-profile-button1").on("click", function(){


$(".fruit-button1-trigger").show();


});


$("#fruit-profile-button2").on("click", function(){


$(".fruit-button2-trigger").show();

});



$("#fruit-profile-button4").on("click", function(){


$(".fruit-button4-trigger").show();

});



$("#fruit-profile-button3").on("click", function(){
console.log("working");

$(".fruit-button3-trigger").show();

});

$("#veggie-button").on("click", function(){

$("#veggie-display").show();
// $("#veggie-profile").show();
$(".veggie-button1-trigger").hide();
$(".veggie-button2-trigger").hide();
$(".veggie-button3-trigger").hide();
$(".veggie-button4-trigger").hide();





});


$("#veggie-profile-button1").on("click", function(){


$(".veggie-button1-trigger").show();


});


$("#veggie-profile-button2").on("click", function(){


$(".veggie-button2-trigger").show();

});

$("#veggie-profile-button3").on("click", function(){


$(".veggie-button3-trigger").show();

});

$("#veggie-profile-button4").on("click", function(){


$(".veggie-button4-trigger").show();

});









$("#arrow5").on("click", function(){


    $("#veggie-profile").hide();
    $("#veggie-display").show();
});




$(".veggies").on("click", function(){

$("#veggie-display").hide();
$("#veggie-profile").show();
$(".veggie-button1-trigger").hide();
$(".veggie-button2-trigger").hide();
$(".veggie-button3-trigger").hide();
$(".veggie-button4-trigger").hide();


});




$(".grains").on("click", function(){

$("#grains-display").hide();
$("#grains-profile").show();
$(".grains-button1-trigger").hide();
$(".grains-button2-trigger").hide();
$(".grains-button3-trigger").hide();
$(".grains-button4-trigger").hide();





});



$("#grains-profile-button1").on("click", function(){


$(".grains-button1-trigger").show();


});


$("#grains-profile-button2").on("click", function(){


$(".grains-button2-trigger").show();

});

$("#grains-profile-button3").on("click", function(){


$(".grains-button3-trigger").show();

});

$("#grains-profile-button4").on("click", function(){


$(".grains-button4-trigger").show();

});












$("#arrow6").on("click", function(){


    $("#grains-profile").hide();
    $("#grains-display").show();
});


//end of on ready
});



