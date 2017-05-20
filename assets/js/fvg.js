
//GLOBALS

var searchTerm = ""


 var Mango =  {

    body: '<p class="quick-info">Quick Info</p> <p class="eyes">Eyes</p> The antioxidant Zeaxanthin, found in mangoes, is linked to play a protective role in eye health and ward of damage from macular degeneration, a condition acurring in many older adults, which results in distortion of or loss of central vision. <p class="hair">Hair</p> Mangoes contain a strong source of Vitamin A, a nutrient required for sebum production, which keeps hair moisturized. Vitamin A is also necessary for the growth of skin \& hair <p class="skin">Skin</p> Mangoes are high in Vitamin C, which is necessary for the building and maintanence of collagen, which provides structure to skin \& hair',

};
    

var Apple = {
    body: '<p class="quick-info">Quick Info</p> <p> Apples are good source of fiber an Vitamin C. They help lower cholestorol and are linked to lowering blood pressure and risk of stroke. <p class="brain">Brain</p> <p>Apples have been shown to protect neuron cells aginst oxidative stress-inducided neurotoxicity and may play an important role in reducing the risk of neurodegenerative disorders such as Alzheimer\'s Disease. <p class="gut"> Gut<p> the type of fiber in apples, pectin, feeds good bacteria in your gut, promoting overall health. Pectin also acts as a mop of sort, moving through the digestive system and collecting excess clumps of cholesterol and carrying them out',
    

    };

var Apricot = {
    body:'<p class="bones">Bones</P> Apricots have either significant or moderate amounts of all the minerals necessary for healthy bone growth: Calcium, phosphorus, maganese, iron, and copper. Eating apricots can ensure the healthy growth and development of your bones and prevent age-related conditions such as osteoporosis. <p class="heart">Heart</p> The significant amount of Vitamin C, potassium and dietary fiber in apricots all contribute to cardiovascular health. Vitamin C protects the heart from free radicals, potassium lowers blood pressure by relaxing the tension of blood vessels and arteries, cleaning them and reducing the strain on the heart.'


};


var Avocado = {
    body: '<p class="nutrient-absorbtion"> Nutrient Absorbtion: </p> <p> Some nutrients are \'fat soluble\', meaning they need to be combined with healthy fats in order to be utilized. Avocados are one of the few plants containing a high percentage of such healthy fats. <p class="eyes"> Eyes<p> Avocados are high in antioxidants that promote eye health: Lutein & Zeaxanthin. <p class="skin"> Skin </p> <p> Avocados contain nutrients, which can fight harmful free radicals tied to premature skin aging.',

};

var Banana = {

    body: '<p class="heart">Heart</p> Potassium and magnesium, minerals which are essential for general heart health and maintaining blood pressure are found in significant amounts in bananas.<p class="fullness">Fullness</p> Resistance starh and soluble fiber, found in unripe and ripe bananas (respectively), have been shown to have appetitie reducing effects and increase feelings of fullness after meals <p class="excercise">Excercise</p> Bananas have been found to reduce excercise-related muscle cramps and soreness.'
}

var Blueberry = {

body:  '<p class="bones">Bones</p> The nutrients in blueberries contribute to building and maintaining bone structure and strength(calcium, magnesium, maganese, zink and Vitamin k) <p class="brain">Brain</p> blueberries have been shown to improve short-term memory and reduce the risk of cognitive decline. <p class="Skin"></p> Collagen, the skin\'s support system relies on Vitamin C an essential nutrient that works as a antioxidant to prevent damage caused by sun, pollution, and smoke. Vitamin C also promotes collagen\'s ability to smooth wrinkles and improve overall skin texture. A cup of blueberries provides 24% of year daily need for Vitamin C',

};

var Blackberry = {

body: '<p class="digestion">Digestion</p>As a source of both insoluble and soluble fiber essential for the optimal functionality of the digestive system, blackberries encourage more efficient absorption of water in the large intenstine. <p class="heart">Heart</p>The richness of flavonoids such as anthocyanin make blackberries a heart-friendly fruit. The magnesium \& fiber content present in blackberries prevent the arteries from getting blocked and stimulates smooth flow of blood, reducing the risk of heart diseases such as stroke, maintaining cardiovascular health.<p class="skin">Skin</p>Blackberries contain a considerable amount of Vitamin E, which aids in maintaining the health of skin fats and preventing the skin from wrinkles.    '

};

var Bannana = {

    body: ''
};

var Cherry = {

   body: '<p class="sleep">sleep</p> Cherries are a good source of melatonin, which helps us regulate our sleep cycles (the levels are even higher in tart cherries over sour ones). <p class="excercise">Excerise</p>Anthocyanins are responsible for the deep colors in some berries. Unique anthocyanins exist in cherries that don\'t exist in other berries. They provide  substancial anti-inflammatory activitity. Research has shown that a cup and a half of tart cherries can significantly reduce muscle inflammation and some soreness.'  

};

var Fig = {

body: '<p class="gut">Gut</p> The type of fiber in figs, pectin, feeds the good bacteria in your gut. Pectin also acts as a mop of sort, moving through the digestive system and collecting excess clumps of cholesterol and carrying them out.<p class="heart">Heart</p>Dried figs contain phenol, omega-3, and omega-6. these fatty acids have a significant effect on the level of triglycerides in a person\'s system. Triglycerides are a major factor behind various heart diseases such has coronary heart disease.<p class="bones">Bones</p>Figs are rich in calcium, one of the most important components in strengthening bones. They are also rich in phosphorus. which encourages bone formation and spurs regrowth if there is any degredation to bones.'

};



var Kiwi = {

    body: ''
}; 


var Olives = {

    body: ''
}; 


var Papaya = {

    body: ''

};

var Pineapple = {

    body: ''
};

var Plum = {

    body: '<p class="brain">Brain</p> Plums are full of antioxidants that have been shown to slow the development of Alzheimer\'s disease and improve memory. They also contain anthocyanin and quercetin, which are beneficial for preventing brain cell breakdown.<p class="skin">Skin</p> Plums are rich in Vitamin C along with other antioxidants, which help to maintain healthy, radiant, and youthful skin.<p class="bones">Bones</p>Dried plums (a.k.a prunes) exert anabolic and anti-resorptive actions , which aid in maintaining healthy bones. Caffeic acid and rutin, both present in plums, help in inhibiting the deterioration of bone tissues and prevent diseases such as osteoporosis. Research has shown that the regular consumption of dried plums helps in the restoration of bone density that has already been lost due to aging.'
};  

var GojiBerries = {

    body: '<p class="blood-sugar">Blood Sugar</p>Goji berries help control the release of sugar into the bloodstream, which prevent spikes and dips due to issues with balancing glucose levels.<p class="mood">Mood</p> Various studies have shown goji berries to improve energy levels and to boost both mood and feelings of well being and calmness. <p class="reproductive">Reproductive </p> Though not rigorously tested, some studies have linked the consumption of goji berries to increased fertility, higher testosterone levels, and increased sperm count. Perhaps this is why, traditionally, the Chinese beleived that goji berries were beneficial to the reproductive system.<p class="skin">Skin</p> <p class="hair">Hair</p> A 1/4 cup serving of goji berries contain 80% of the recommended daily value of Vitamin A (this is a lot, so don\'t go overboard to prevent Vitamin A poisoning). Vitamin A aids in cell reproduction in both the skin and hair. It also aids the body in fighting free radicals that speed up the aging process. Vitamin A is also needed for good eyesight.'
};

var Grapefruit = {

body: '<p class="energy">Energy</p> Nootkatone, a rare compound found in grapefruit has been studied to improve energy metabolism in the body, resulting in higher endurance and energy.<p class="sleep">Sleep</p>Tryptophan, a chemical associated with feelings sleepy after big meals (a.k.a "food coma") is foud in considerable amounts in grapefruit. Thus, grapefruits are a useful snack for those dealing with insomnia.'

};

var Tomato = {

body: '<p class="heart">Heart</p>Tomatoes have been show to provide both antioxidant support and protection and to regulate the fats in the bloodstream. No body system has a greater need for antioxidant protection than the cardiovascular system. The phytonutrients in tomatoes also aid in reducing blood clots in the bloostream.<p class="fun-fact">Fun Fact</p>Eat them cooked: lycopene, which has significant antioxidant properties has been show to increase in level when tomatoes are cooked. Lycopene is responsible for the red color in the fruit and protects various plant organisms from sun damage.'

};

var Starfruit = {

    body: ''
}; 


var Strawberries = {

    body: '<p class="skin">Skin</p> A serving of strawberries contains 94% of the recommended daily value of Vitamin C, which helps to maintain healthy, radiant, youthful skin. <p class="eyes">Eyes</p>Strawberries contain antioxidants such as flavonoids, phenolic phtochemicals, and elagic acid, all of which aid in the protecting of naturally aging eyes. They protect them from harmful oxidants and free radicals, which can cause eye damage, excessive eye dryness, degeneration o the optical nerves, and increased susceptibility to infections.'
};



//veggie objects


var Beets = {

    body: '<p class="excercise"> Excercise</p> Studies have show a connection between beet juice and boosted stamina, allowing for longer excercise. This is attributed to naturally occuring nitrates in beets, which convert into nitric oxide in the body. Nitric oxide may reduce the oxygen cost of low intensity excercise as well as enhance tolorenance for high-intensity excercise.<p class="detoxification">Detoxification </p> Beets are known to contain betalin pigments, which aid the body in the detoxification process by aiding in binding molecules to toxins in order to assist in ridding them from the body. The liver filters and detoxifies blood that comes through the digestive track before it reaches the rest of the body and eating beets can aid in this process. <p class="detoxification">Detoxification</p> Eating cucumbers actively removes accumulated waste and toxins in the body. They are also effective in optimizing unrinary, bladder, kidney, and liver functions. These organs work together to rid the body of toxins.'
}


var Cucumber = {

    body: '<p class="hydration">Hydration</p> Cucumbers are 96% water. Consuming more of them can aid in maintaining healthy hydration levels.<p class="hair">Hair</p> Silica, a mineral found in cucumbers aids in stronger hair and nail growth. Silica is essential in aiding in the development of strong and healthy connective tissues in the muscles, ligaments, tendons, cartilage, and bone.'
}


var Garlic = {

    body: '<p class="brain">Brain</p>Garlic contains antioxidants that support the body\'s protective mechanisms against oxidative damage, preventing cell damage in the brain, potentially reducing the risk of Alzheimer\'s disease and dimentia.<p class="detoxification">Detoxification</p> The sulfur compounds in garlic have been shown to protect against organ damage from having metal toxicity.'   
}


var Mushroom = {

    body: '<p class="bones">Bones</p>Mushrooms are rich in calcium, one of the most important components in strengthening bones. Mushrooms are also a strong source of seleniu,, which aids bone health by adding strength to bones and increasing durability. Selenium also strengthens the teeth, hair, and nails.<p class="nutrient-absorbtion">Nutrient Absorbtion</p>Vitamin D, a relatively rare Vitamin to find in vegetables, fascilitates the absortion and metabolism of calcium and phoosphorus (which are beneficial nutrients also found in mushrooms).'

}


var Onion = {

    body: '<p class="heart">Heart</p>Onions act as anticoagulants (blood thinners), which prevent red blood cells from forming clumps. Such clumps, if severe can lead to heart disorders or cardiovascular diseases.<p class="blood-sugar">Blood Sugar</p> Onions contain chronium, a rare material to find naturally in food. Chronium aids the body in managing blood sugar levels and ensures a slow, gradual release of glucose to the muscles and cells in the body.<p class="fun-fact">Fun Fact</p> The scent of onions causes many insects to flee. Therefore onions can be used as a natural insect repellant. additionally onion juice or paste can be applied topically to reduce the pain caused by bee strings and various other insect bites.'

}


// function(){




//END GLOBALS

function emptyInfoFruit(){

$("#body-div-fruit").empty();

}

function emptyInfoVeggies(){

    $("#body-div-veggie").empty();
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

var fruits = ["Apple", "Apricot", "Avocado", "Blueberry", "Blackberry", "Banana", "Cherry", "Fig", "Goji Berries", "Grapefruit" ,"kiwi", "Mango","olives", "Papaya", "Pineapple", "Plum", "Grapefruit", "Starfruit", "Strawberries", "Tomato", "Cranberry" ];

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




//API for recipes, storing in a function to be run with each fruit, veggie, and grain onclick

















//end of APIs for recipe



$(".fruits").on("click", function(){

    var fruitName = $(this).text();
console.log(fruitName);
$("#selected-name-fruit").empty().append(fruitName);



switch(fruitName){

case "Apple":

emptyInfoFruit();
$("#body-div-fruit").append(Apple.body);

searchTerm = "Apple";
var query = {

    q: searchTerm
};
snagRecipesFruit();

// console.log("append working");

break;

case "Apricot":

emptyInfoFruit();
$("#body-div-fruit").append(Apricot.body);
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSu98zrJmyn_yesoRg8tdzNtV1R7YHxet14waiDC3tITv9Uo-G_A')");

break;

case "Avocado":

emptyInfoFruit();
$("#body-div-fruit").append(Avocado.body);
$(".fruit-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");
searchTerm = "Avocado";


break;

case "Banana":

emptyInfoFruit();
$("#body-div-fruit").append(Banana.body);
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oQdI05slD9ijtQUm30W5PxLtp0AAxOlGJQ1IURxsSIx4vGz8')");
break;


case "Cherry":

emptyInfoFruit();
$("#body-div-fruit").append(Cherry.body);

break;

case "Blueberry":

emptyInfoFruit();
$("#body-div-fruit").append(Blueberry.body);
$(".fruit-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");
searchTerm = "Blueberries";

break;

case  "Blackberry":

emptyInfoFruit();
$("#body-div-fruit").append(Blackberry.body);
$(".fruit-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");
searchTerm = "Blackberry";

break; 

case "Grapefruit":
$("#body-div-fruit").append(Grapefruit.body);
searchTerm = "Grapefruit";

break;



case "Mango":

emptyInfoFruit();
$("#body-div-fruit").append(Mango.body);
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOSQ9IfCgAJuchgLR8ppWhwsiBCQkUWTw0xKLtbuJhq8eczWJqww')");
searchTerm = "Mango";
snagRecipesFruit();

break;


case "Plum":

emptyInfoFruit();
$("#body-div-fruit").append(Plum.body);
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypVyr6GaeSmS4kxRj1NNrl86gqt5ylwzYaIeCeFvNzswjFnlDjw')");
searchTerm = "Plum";
snagRecipesFruit();

break;

case "Strawberries":

emptyInfoFruit();
$("#body-div-fruit").append(Strawberries.body);
$(".fruit-propic").css("backgroundImage", "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOoMZCs6kErpD5jwSt0cdVZhQD0JAeq3gqYgKgpOUf6vhuRdnXFg')");

break;


case "Fig":

emptyInfoFruit();
$("#body-div-fruit").append(Fig.body);
$(".fruit-propic").css("backgroundImage", "url('data:image/jpeg;base64,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')");

break;







case "Goji Berries":

emptyInfoFruit();
$("#body-div-fruit").append(GojiBerries.body);
$(".fruit-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");
searchTerm = "Goji";

break;


case "Tomato":

emptyInfoFruit();
$("#body-div-fruit").append(Tomato.body);
$(".fruit-propic").css("backgroundImage","url('data:image/jpeg;base64,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')")
searchTerm="Tomato";

};


});




//end of function
// };


// $(".veggies").on("click", function(){
//  var veggieName = $(this).text();
//  console.log(veggieName);
// $("#selected-name-veggie").empty().append(veggieName);


// switch(veggieName){

// case "Beets":

// emptyInfoVeggies();
// $("#body-div-veggie").append(Beets.body);
// console.log("tryin");
// searchTerm = "Beets";

// //snagrecipesveggies currently undefined
// // snagRecipesVegies();


// break;

// }


//end of click function for veggies
// });




$(a).on("click", function(fruits){
    var store = $(this).attr("data-name")
    console.log(store);
    store.append(text);
});

var veggies = ["Beets", "Bell Pepper", "Celery", "Cucumber","Fermented Veggies", "Garlic", "Kale","Mushroom", "Onion", "Parsley","Pumpkin","Sweet Potato", "Watercress" ];

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

var grains = ["Almonds","Barley", "Brown Rice", "Buckwheat", "Cashew", "Corn", "Macadamia", "Millet", "Oats","Quinoa","Wild Rice",  "Whole Wheat", "Rye"];

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


 var veggieName = $(this).text();
 console.log(veggieName);
$("#selected-name-veggie").empty().append(veggieName);


switch(veggieName){

case "Beets":

emptyInfoVeggies();
$("#body-div-veggie").append(Beets.body);
searchTerm = "Beets";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;




case "Cucumber":

emptyInfoVeggies();
$("#body-div-veggie").append(Cucumber.body);
searchTerm = "Cucumber";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;

case "Garlic":

emptyInfoVeggies();
$("#body-div-veggie").append(Garlic.body);
searchTerm = "Garlic";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;


case "Mushroom":

emptyInfoVeggies();
$("#body-div-veggie").append(Mushroom.body);
searchTerm = "Mushroom";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;

case "Onion":

emptyInfoVeggies();
$("#body-div-veggie").append(Onion.body);
searchTerm = "Onion";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;





};



});




$(".grains").on("click", function(){

$("#grains-display").hide();
$("#grains-profile").show();
$(".grains-button1-trigger").hide();
$(".grains-button2-trigger").hide();
$(".grains-button3-trigger").hide();
$(".grains-button4-trigger").hide();
var grainsName = $(this).text();
$("#selected-name-grains").empty().append(grainsName);





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



