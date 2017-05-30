
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


background();


// DESIGN: Buttons

var fruits = ["Apple", "Apricot", "Avocado", "Blueberry", "Blackberry", "Banana", "Cherry", "Fig", "Goji Berries", "Grapefruit" ,"Kiwi", "Mango","Olives", "Papaya", "Pineapple", "Plum", "Grapefruit", "Starfruit", "Strawberries", "Tomato", "Cranberry" ];



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
$(".fruit-propic").css("backgroundImage", "url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4-FDVloV_hUXzpr0YkATY0xblinlF8bgNgYsvufL9Mo5Rq-NbJA')")
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


case "Cherry":

emptyInfoFruit();
$("#body-div-fruit").append(Cherry.body);
$(".fruit-propic").css("backgroundImage","url('http://www.medicalnewstoday.com/content/images/articles/250862-cherries.jpg')");
searchTerm = "Cherry";
break;


case "Cranberry":

emptyInfoFruit();
$("#body-div-fruit").append("COMING SOON");
$(".fruit-propic").css("backgroundImage", "url('http://vegetarian-nutrition.info/wp-content/uploads/2016/03/cranberry.jpg')");
searchTerm = "Cranberry";


break;


case "Grapefruit":
$("#body-div-fruit").append(Grapefruit.body);
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdS8_qqEhxR1kUcqzwgrQPS0U8qyyUEfZ-J-3EOx63OwY4CI4')");
searchTerm = "Grapefruit";

break;



case "Kiwi":
$("#body-div-fruit").append("COMING SOON");
$(".fruit-propic").css("backgroundImage", "url('http://i.ndtvimg.com/i/2015-10/kiwi-fruit_625x350_81445871711.jpg')");
searchTerm = "Kiwi";

break;




case "Mango":

emptyInfoFruit();
$("#body-div-fruit").append(Mango.body);
$(".fruit-propic").css("backgroundImage","url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOSQ9IfCgAJuchgLR8ppWhwsiBCQkUWTw0xKLtbuJhq8eczWJqww')");
searchTerm = "Mango";
snagRecipesFruit();

break;


case "Olives":
emptyInfoFruit();
$("#body-div-fruit").append("COMING SOON");
$(".fruit-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");
searchTerm = "Olives";
snagRecipesFruit();


break;


case "Papaya":
emptyInfoFruit();
$("#body-div-fruit").append("COMING SOON");
$(".fruit-propic").css("backgroundImage", "url('http://exoticfruitbox.com/wp-content/uploads/2015/10/papaya.jpg')");
searchTerm = "Papaya";
snagRecipesFruit();

break;


case "Pineapple":
emptyInfoFruit();
$("#body-div-fruit").append("COMING SOON");
$(".fruit-propic").css("backgroundImage","url('http://www.med-health.net/images/10404951/image001.jpg')");
searchTerm = "Pineapple";
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

case "Starfruit":

emptyInfoFruit();
$("#body-div-fruit").append("COMING SOON");
$(".fruit-propic").css("backgroundImage", "url('data:image/jpeg;base64,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')");
searchTerm = "Starfruit";
snagRecipesFruit();

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
$(".veggie-propic").css("backgroundImage", "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMTExUXFxYaGBYXGBgXFxcaFRcaGhcVGBgaHSggGRolGxcaITEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGy0lHyYtLS0tLS0tLS0tKy0tMC0tLS8tKy0tLi0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYHAQj/xABBEAABAwIEAwQGBwcDBQEAAAABAAIRAyEEEjFBBVFhBnGBkRMiQqGx8AcyUmLB0eEUI3KCkqLxQ7LSFjM0g+IV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQQAAwkBAQAAAAAAAAABAhEDBBIhMRNBUQUiMmFxgZGh8OHR/9oADAMBAAIRAxEAPwD3FERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBasViG02Oe6waJP5Dqtq5DtlxOT6EXa2795d7NON+cdeihujXDieSaii34Fxl1cuBp5coaZBketMNNheAD83lcY4rTw7M9QmJgAannE8hdaeEYUYbDzUIBgvquJtMS6TyAEeC864xxh2MxEtsxshgOgFjmcPJxHPKNlWUtqOzT6WOfK64gu/75nf8M7S0a3OmS7KM8AE7NBm7r6c7K6Xl3Z/CftWIYGz6KnIaegPr1T95xsDzJPsr1FTF2jLWYYYp1H8egREVjjCIiAIiIAiIgCIiAIiIAiIgCIiAIij1MbTGr2+c/BASEUB/GKQ3M8oMnzWg8fpcn/2/wDJRaLKEn5Fsipv+oqdvVqQeg15aqzw+KY/6jg7uKKSZMsco9o3IiKShB4zxBtCi+q7YWHM7BcJ2YpOxGLbn9bLNWoebp9Vs8sxBjaCvn0h8Zz1W0WmWsIkbOIMkHxH9h5r5w7igwGAq4l0GrVfkpA+05oNz0Di4no0c1k5c/Q9nBglj09r4pcL7/5bM/pL7QZnfsdJ0AQax25tpnoB6x/lG65amCAKTZDqg9aLubTBuP4nEx1J7lUcPqF2apUcXXL3uOriTPmSQe8t5LvOwfDRmfisQWtayHOc6zQ4D1WydAxt+8jkslc5Wek1DSYNq5r9v+/R2vZnhIw9EDKA9wBdG0D1WA8mi3fJ3VsCvN+1Pb/NNLCzB1qaEjmPsN+8bnbmnYTCYg1fSMe5rLZ5BDX6+ydG3JB+s43MBbKaukeRk0OR43myun6P+4PSURFoeWEXyV9QBERAEREAREQBERAERUPHuPtpDKwid3bN5+KEpNukXGJxTKYl7gFR4vtKBOTL4n5grguJcZFS7nZhM3zfOhVFW4uPqUhAE3Gb1ecRpbeyzcjux6NtWzu8d2lEnMXE6aWm2w/wqapxw+wHAnxJ964t9eNL9QCDtcGTKuuGUy+AwfWAM6gXgkA7EGNNelznbZ6C02PGraLuhj6hMO0tma7aYuZJMQZnS3irmhhsw1MD2Xatv7J10+Kg4QNp3eZcYBcdid50AnfuVlSpkGx5nunl0PLTlCnZRzznfSo+iiAIlxE7Hfr+qlYYwDEDe3u8Y+CxYGxsDqRtM6rNpGa9uaVZlbNtbG1mua5jidi0u9UiDEDYzHhKoOLccxbXkU8bSD5BFKq1g9UQXzlAc2ARcgi4mJlXTnP+qIkanYjeOvx+FTj+BUKrhWexjawaWtquktaINnNGuvhCo215iMUndL8HKjB1DXf6Wzw50+sDce1OlySe4qh7ScX/AGqsynTM0aLclMbED61Q9XuE9w6LvcU0vmBLw6SLS0OMNmPrAwfgvOeKYA4WuWNa6HR6MOB1cYFME/WA2P2TeZkwmmuD0o57UfUsMNUAbmNmU7mfaqXgR01jmY0IWrH9o6tZrKZdFNv1abfqyTJeftvJk5nWGy0cRykNpPccg5G7yNTvYnToANlJwlShTjLSYD9p8Od4B+YnwaFDR2wlTtrk6vsf2YDwK2IcKdPUFxAL+rQfrfxG3Icu/bx/CUmhtI5mj7IJbP3nm095XmLMY4+s4mObgGgdzqpJHg0IeI0iYJNVx9luaoT0BdDfJq2hUVwcWo08tRK8jdei6R6Die2QmGMvy+s7+kajuKrq/HsRUsXej6TfwDfW8C0qs4fwjGVQMmH9EznVOUR1piP9pXQYLsSf9au533WANb3cj/SFpbOVx0uHtq/y/wDhr7N46MQGF7nF4II0GkyW5pBtrAXaqu4dwShQj0dMAifWMudfWCdPBWKsebqckMk7igiIhzhERAEREARFG4hihTYXHbTqUBR9rOOeiaWNMW9Y7n7g79yvL8fxVziTmyi9jLR7/nzUrj/EqlSoADcuMyJHeSLhc7xLEgnIzbU3PK8qjZ6WnxJfUj1uICSDmOpkmZ6uEKEcW6w0E6ARPVa3CSRmggmJET1WukWuhrjl+8Np3jkqHowVFlQqAkZpaZFyCdYHzM6eC6XhIyEObLZJkQYsJtyudjfvXJ5chzNPqgCWvggZiMpmI7+5xuF0fC8XckWInMw7FokG97g6/wCVCRE8m5cHVsqEgG0GZ3BBJ/WfkLfQxLW5GggA2EGBpMCe7RV2DxzHTlMG3ebEzH2rGRyW2WvBB0sbR4Pbygn53ucTVcMunTtr87La15EH4qlwPEMrvQ1nAPAmm/RtRo+DhuOUa7WTa4PQoUlGiRXxGUgkOEbC4gbSNFsqAFrT7DoEHW55DS06aQteGI2Nxe+luuyra/ERna2nPPLaQZ0Ph4rKaLQTY4xhmOa4OL/WDg3IRLSPWZBI0zEam096oKOLZXBZUb6zHtBYJa6m/wC2GPb+7fJMEZmkzJOYq8xtQOaHi0HNzsLOE8ryuZ7RVm4eoMSZcK7m0nnWwAg5jdpBaTbXzKpB06OmKSqyp492bxJfnwzW4hgDQMtT0bhA9pjiN5sC7VUWKxGMoWq0qmH65Mgv98CCux4vjXB7TTFQtyyTlJymYIOUWaYJCy4b2hBsHHrEEn+UZf7lpaN4xk/eiziqdao+5N+ZDnHzcF2vZztRWw7YaWeFOg0nvLRmPitlXAYStd9Fkzd1M+id/MWQHOPLK7vVlw/szw59jVxlA6WqggHkczTHdqoin5Fsk41WSLf7LjB9u6x1a13/AK3/AIFXfDO1vpKjGPYG5iBPrC50sRztqqun9G1AiWYvFOHU0nD/AGBTOH9hvRVGP/aXua1wJbkaM2UzBcFstx5+SWiadcP6M7FERXPJCIiAIiIAiIgC5ntrXOVrBq7fkDqfILplwvbfFeuQNYy+6T7/AIqGXxq5Hn3EcVlcS2wki3L9VS4lpIJHkr1uFm/yea1VsMI0VGj1sbo5s0jGn4xOyhhtzY8vy77q2r0CD59JVfi23n3nW346e5VN9x9wtQ6abBsDTU7ba9O5TqeKdTJNrDQyDvYHlecs7lV1KsYuRJIBdMEGdZ2ssqWJ9h0EXiQCfAxrPjojIjR0OC4hlILX5ddQdReCN4Dic3T+q5xXE8rW1JbE2cNB4wbEa23XFsxT2XaXRYmJF/vR0Pd60bwpNPipDZAJtBAdG8mBve8d+iJkThu5R3LMSKjQSAR5tvuJ1CmNxMcguDw3HGsglgYIIsMoeBvYQL5ueqzq9pB7IJgwBqbaGdPCVazPwW3wdPxLjTqTxlBvIIEEi0yOkSIPMKI14ziox0tdM9J26fp58i3FvcAYlwtMmY9kGNxpO4hT6fFqoblDBlBBGtoMx8/ks3ydK08kjqcPiSS4Hm73jfoR8AoWMa2q5ucB2R4ewbyG36alx8uSpqXFiDJaROpF/wAlKp43OZa7TUbxqIGus+ao4tcmc41weydiP/Dp2i7vH1jdTOI8Awtf/vYelUPNzBm/q1Wrsl/4WGtE0mE95aCT4m/irddSXB4kptTbXHJxeL+jqhrh6tWgdgT6VndD/WA7nBUWM7J4uj7AqtGjqJMgfwG7R/DmJ5r1FFVwR04/aGaHbv6nk/DeLVqLjkc4EasIg9zqZ06C3UruuznaMYklhYWvaJJF26xrqD0PIwTCsuIcMo1hFWm18aEj1h/C4Xb4FbMFg2UmhlNoaOmp6km5PUootFtRqcWWPwVIkIiK5wBERAEREAREQBeZdrH5qzh1nzOi9NXlfG3zVceahm+nXvFc9sBQMQFOrOUCuVU70VuIAOuypMQYmRImD7oCt8S/NI06j4hVVSnMgmZUGiZWuYQczdNv1WzM08jMWOo5ifz/AEXzMRIn/HP3qK+Zv5qCX6okNJEAmPnQ7SsmydAGjnGnd7/NY0GkxKsaLLfPmqydHbpsG9WyPTwdr+9SKNIDae9bKQ5wR8YUovAEDb5sqWehHDxa4Rg2m7YgW5Layi6dedlH9M47RynXyWWV+zj5KURKUapWzaKDrAkEb2vaesLF2Hm5EbyDfpFvgs2Ofud506LdTxHPmI5wR+a0Rzy2vh39y37P9uMZhoYHivSFg198onQOHrCNNxbRemdme2+HxZDD+5rH/TedT9x1s3uPRePFjXtOSxuDET+c/ko7Ww7e1w4Dcb9CrKRwaj2fCSuPDP0gi8w7M/SC6mW08Wc9MwBWvnb/ABj2x1F+/Vem0qgcA5pDmkAggyCDcEHcK54eXFLG6kjJERDMIiIAiIgCIiAIiIDXXqZWudyBPkF5DjK8uPevU+PVsmHqu5Md7xH4rxjEYi8qGdWmXbJFSooNd6xNeVHq1VVnckRqmpVdjD89eal18SNJuq+u6VBZIi4lfeF0PSvaw6anubd3jCxc6bH5+YnwVl2Zw5mo7eGtHTMZJ/tHmpSIk6RrZaQYkEg8pBv4Lc63yfiteJoxWeNbjlyCzesn2evhk5YkbsttF8otm5/whday30GgtCpfB2RjckgXBoKisxbp9Ub89VnXaZA1C2hoATrsluU21Dij4zEuABLd7xy5qXSc14kXHVQ6L2OsDKwe7I7MDH4/MK1p9FPfjTnTiSanquzN2Gm1+5STFUWIBB8D07lrc+dNwOe+uij4TEFj7j1T0Ef5UqVlcmLY+PhNzKZEtN5Bgco2ldv9G3ad1OoMJVJ9E8xSJ9hxvk/hdtyJ625DGkhudl76dNzfeFg2uCJBPhsTvPQwVrFo87VabxE4v7H6HRUXY3jH7ThmucQajfVf3jR3iIPfKvVc+alFxbTCIiFQiIgCp+NcYqUHCMNVrMLZL6dyDMZS0CdLyrhEJi0nyjmcD2zoueKdZlTDuJgekEA8rmCJ7o6rplyH0mcEOIwpfTE1KVxAklps9o/3fy9V5dU7U4t1JuHdXqZMsRaSG6NLozHxKg22Rmrjwdf9JnarM44Wi4FrYNRw3cD/ANueQ369y81PEDN7HcKLia5J+0M1wDeAeu8KPWaM8kuuN7C3PwCg3gtvCLnOSJUXEE9Vvo/VbbUS07EcvetNcA6bbdFB1RZDlZPjZZlqwcFBpRpc0LoOzpik53Nx6aNaPnvXP1Cr3s+79yejnfAK3kZyZHxgh0ka6/h89FombzopePbJMi/zBUGSD86LJqzv0+batr6JTRI20TB1vZ0gxzuFrY8Rcn8FsdS9puvLmqM9KL5Ul9zPGUjZwAd1WTXBzYMad4vslPEB1jry/Ran0y3QeryHP8lWrNVLw25dxZi3Chpkd3gs8VVBHLn4e/ZHVtj/AIK0VqZdp56EIk3K2J5McMWyBKwlSWjcdDPisMRadPh79lnQYWCCJB30WnFOBFj56KYrkjLJ+Ei3wjw+ncfj79Fpw9O55X+YUfBVMumm4Umk0F23nBWi5ObI2trZ2X0YYwtxbqZPq1KZEc3MMt/tze9erLxLgNYUsXRfM/vGeAecrr8oJXtq2XR8z7Qhty36hERScIREQBERAfHTFtVxna3sFTxLc1HLSrTJebB0n1szQLnXSLrtF8QmMmujzLhv0RUQScRWqPgiPRhrA7vzBx5aELscJ2SwVKkaTcPTyuEOJGZ7upefWJ31srsrW9CXOT8zxntp2WGDcHtDnUrhhF4nVhA3tyvrsY5PEUNxf50IX6B4hh21GOY9oc1wgtOhXlnaXsXUYS6h+9Z9k/XH/P49CqtHZgzJ8SODc8DVazUaTYqRXbBLHgtcLXse4yoNelF1U7dwqq77Mn1KjeTgfAj/AOVztR5Vr2ZxH70tJ+u2B3i490q7M27ZYcQde4voqx1UaEQbz+Hd+qvOIUJAMX35d/6KhrtmYtyG0HafFZmyYBje3PvUjC4n/KrfSuabixm23UIx1pBkfBQ1Zvi1EofMujBgr5TxECHAj58lWUcSQVLp4rmJ6foq7TthqVJ3F18ic2o13LkshSA0lQx6N3QzPK6+1CbZD38lDTN45Yrlr8EmpUAG+ihPZJtf53sjS462W2kAN/BSlRnOfiP5GygYsQW201HwUvhj/Wt15W+RuFp9KHCIj4KZhcNklxg89laEa5M82TdUfJFpwykXYqgAAf3tIR3PBI8rr3FeafRvwEvq/tjwQxsik07uNnP7gLDqTyXpa1R877QyqeSl5BERScIREQBERAF8X1EBiVg4LavkICLUYoOIw8q2LVrfSQHD8d7N0q4/eMDuR0cO5wuFw/EuwYbJpueOhhwXtFTDKBiMBKG0MrR4Di+zVZn2SO4j81EZgKrHBwAlpBFzt4L3DG8GnZc7juAHkpNllOTxRgB4uHXAJiD3jQ/OyqKwE6gRJGnv53+C6ytwxwBaRb3eRXJcToZTaT0OvyIWclR145J8lXUgm4IMmW6QeXS60OGUWNjsdQt1Q5onW2keJ05bLS6rpm0ETrBjSRsVUu+7MQ/mt9N/J3hqPzUVzeR+e9ZMYZv5qSu4sW1TvB7isi3eDHMa37pWmi06z5qXhXybEfP4obLM35mDXGNHeR/Jbmjo4nuJVjTd1JU3C05Ol/h5oTLUM0cP4bUN9B963uAXXdnOyvpajQ85hvFmgDnzWPC8GXEAXXonB6bKTMo1P1jzP5KyOPPqZ1wWuHotY0MaIa0AADYDRbFobXC2B6seYZovkr6gCIiAIiIAiIgCIiAL5C+ogMSFi6mtiICLUoSoVfAg7K2hfC1CbOTxnCZ2XE9pOy7nAuYL8riff8wvXn0goeIwIOyPk1hlcWfmniWALSQWkQdxp0O8jrzVZeb68x+i/Q3G+yNKuCHMB67+a884x9F9UEmjUkfZeJ8nDTyVXE7YZ4y7PPTTkWt4W8OS30fA94lWmK7I42mb0p6tIPxgrS3hlZutN/i0lVpmzcO0zFrzyt36e5bKWJtaJ/i98R+K+/sdUiBSf/SVLwfAqx/0neITaRvSd2SMAwnU+A0V/gaICx4f2ermJELpuHdnSNVKiZZM0fIx4fUI0Cv8LXcvuG4VGyn0sFCuccp2KVVyl06pXxmGK3tw5QyZnTqre161sora1iFT7KL7CID6iIgCIiAIiIAiIgCIiAIiIAvkL6iAwLFgaIW5EBFdg2nYLS7hjD7I8lYIhNsrP/yaf2R5LIcMYPZCsUQncyE3At5LNuFClIhFs0iiFkKa2IhBiGr7C+ogCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID//2Q==')");

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;


case "Bell Pepper":

emptyInfoVeggies();
$("#body-div-veggie").append("COMING SOON");
searchTerm = "Bell Pepper";
$(".veggie-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");


break;

case "Celery":

emptyInfoVeggies();
$("#body-div-veggie").append("COMING SOON");
searchTerm = "Celery";
$(".veggie-propic").css("backgroundImage","url('data:image/jpeg;base64,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')");

break;


case "Cucumber":

emptyInfoVeggies();
$("#body-div-veggie").append(Cucumber.body);
searchTerm = "Cucumber";
$(".veggie-propic").css("backgroundImage", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wgnB-3DYp7TTqm7THzHe2ZBDT_xJ68XIjRGTMC8giyzwyoQm')");

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;


case "Fermented Veggies":

emptyInfoVeggies();
$("#body-div-veggie").append("COMING SOON");
searchTerm = "Cucumber";
$(".veggie-propic").css("backgroundImage", "url('http://foodlamor.com/wp-content/uploads/2014/09/fermented-vegetables-3.gif')");

break;


case "Garlic":

emptyInfoVeggies();
$("#body-div-veggie").append(Garlic.body);
$(".veggie-propic").css("backgroundImage", "url('data:image/jpeg;base64,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')");
searchTerm = "Garlic";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;



case "Kale":

emptyInfoVeggies();
$("#body-div-veggie").append("COMING SOON");
$(".veggie-propic").css("backgroundImage", "url('http://static.emol.cl/emol50/Fotos/2015/11/04/file_20151104085142.jpg')");
searchTerm = "Kale";


break;


case "Mushroom":

emptyInfoVeggies();
$("#body-div-veggie").append(Mushroom.body);
$(".veggie-propic").css("backgroundImage", "url('data:image/jpeg;base64,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')");
searchTerm = "Mushroom";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;

case "Onion":

emptyInfoVeggies();
$("#body-div-veggie").append(Onion.body);
$(".veggie-propic").css("backgroundImage", "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUSEhIVFRMXGBcXFhcWFxcVFxcVFRcXFhcZFxcZHSggGhslGxcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtNS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIAMEBBgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA9EAABAgMFBAgEBQMEAwAAAAABAAIDBBEFEiExQQZRYXETIjKBkaGx0ULB4fAHI1Jy8RQzghUWYtKSorL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKREAAgICAgEDBAEFAAAAAAAAAAECEQMhEjEEQVFhBRMigfAjMjOR0f/aAAwDAQACEQMRAD8A9xQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEKq2lt6FJy7o0U5YMYO092jW++i8ymvxTjtEUtuue40h9X8mGwfFjR73HjQYdyhs3x+PkyR5JaPYkKm2QtGNMSUKPHa1r4gvUYCBdr1TiTiRQ96uVJi1ToEIQhAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAKJOWjDh9o47hiVn9r9qmy4LWuAI7Tv08BvK8ctva+I9xoSBo2uLuLz8lVyo6MPjyyHtUfahtaAsHM1Pko3+8IYNDFZy6vuvn987Fi9p5purQcgAnWw4jRUOcONKKnM74/T7R9Fym00J3xDuI91bwJpj+y4FfMUtbUeGcIj+9xIWtsHbSI0i8QRropUzHJ4El0e7IWFbtTEMK/CcCaZGh81ipj8Qp6K9zOk6Kla3GivjRWckYY/EnkeqPb1R7R7VS0m38xxc+lRDZ1nnu0HErxWanY8Q1iR4j/ANznGvifQKFHddBJ7v4UcjeHhRT/ACY1tRtBMzsfpY1ABUMYCbrGk4DHfqdeChWfZkabmGQILb7ya3dBSnWc7JrRx8yVOsGw409MCFAFT8TzW5Dbq51Nc6DM+nvmyuzECRg9HCbVx/uRCBfiO3k7tzcgoSs3z544o8V/r2LSQhvbCY2IQ6IGtDyMAXAAOIGgJqn0IWh44IQhACEIQAhCEAIQhACEIQAhCEAIQhACEKBalpCHRrReiuBut0oPicdB6+glJt0h6dnWQgC80rkMyTwCpJi0Yrzi4QmaAGjjzdv5KpiRTec9zr79XO7LeA4DwS4THPN5rS4/qdl3D+FajpjiS7JcOPCpS+52/tHzXHRWuwa9zTuq5vglMs6J+oDfh6JEWWcAQWhw8DTkpLaKK3tlIcww33PDhUhzTkTqWnB3rxXk1s7Nx5d9XtL4ZddbEAIaTudXsnh4Er3CDHLRh1mbvib458ilRZFsWG5zQHscKOaR2gMDgdQqSgmdOLM8ffR49ZUmxmJ679Nw5K3NimLi/AfeSfjWWJaJ1QTDcSWOOOG41xqOKt4TxStQsaPQ+5atGRtDZ9rASKn1WUmGljqYheqzDQQspbtkh3WARom+aplbYVuOhmhNWnMVKZt2LcjdIzC9jhqqmM0sduXYscvADtMlUx4cZWaaTnw+HX4tQocw98RwhwwSSQKZkkmgA3lVchLRQ4XAV6X+FFlCLN9PEGEBpdjh+Y7BteQvHuCunejPLJRi5HpmxmzzJGUZBAF/tRXauikC8a7hkOACvVTWhtBDYOr1uOix9rbbuFQCOV4DyC0tI8qOHJkdnozorRm4DvCQZpn6h4rxSa2vjnsgDkT8lD/3ZGyJeDxo4eYVeaOlfT5nvLI7Tk4eKcXhktta+uNa72/9Dn3LU2LtwRS84Ob5e7SimjKfhzielIUOzbShxm1YcdRqFMVzlarsEIQhAIQhACEIQAhCEAIQkRYga0ucaNAJJOgGJKAYtCdbCbU4uODW6uPtvKyM5Mufe61RXrvHxHRjBu0Tc/MPixTFJLatwGXRQvk52Z+gUyzJQU6R4usHZG76lWSOqEFFWxuUs8uAMSjWNyByHElWgnGgUhtvcch4qFNxr2LsGDstHz3lELpHdloaNNT9FJdq9sliciV7Lad9fH6Lv9WMnCnmPFMGDEHxA8x7JbH16rhQ7t/LehWkNTcv8Tcx5jcoknFcyIHMdWE/ttOIBpQObuOAqOG9WLKg3TiDkfkosaAAS34SCRwOvv4oTF+hmdo4jIcQtdXoolXYYhrhmRuOR7yslHnXQ33XEUzB/UNCFt7fl6yl7N0OnfTqu8RUrz61GNjw+oKRGacM6jlj4lROOrR6uBXC/wBP/pbS9otcKk0C7MTALSdNFh4M7dPWdlpph6pUW13vNK0asORdwO224F1fsqmKemZgvdwXJSXc84ZDXjwVWVlvRptiJiIY1wCrdScgtzMWrClmuuUBdQuONCRl1e/zWYsmE2BCzDSczqeQVLaM8HvoKuG8n5YKbpGCwrJP4J9q7QOik9Zx3aBV0OFeONT3/RPWfBqR1fILWWXZjNWAn9oVTuShijop5bZ8uFRXuIJ8EqNZ0RnaFRxFQtkyA1uTad9PJMTl0jdz90MvvOzCzMqCMMCNPbUKtE6Wuoah2/Kv7uPFX9tADPA6ELKTLtHY8VBtfJbNvsptS6E9vWIFacjuPBe32VPtjwhEbrmNxXyrAjFruGXMaL2X8KbcJd0Tj2hTvGI+Y7wtMcjx/Nwr+5HqKEIWp5oIQhACEIQAhCEALPbVTfZgg4HrvG9oNGt73f8AytCsLMx+ljPi4Xcx+0dVg76V71KRrijbsdkpQvfQ/ufuroOQUuZjh2OUNuAA1O9KYCyCAO08mp4HNchwwTTJrPUZq50fIiHBH9yJ3D6b04JiI7si6PEpkvvuvHBoyH3qpbIcRw6tGjiKoyX8jJjxGmp6w4DH6pcQX21bnmDxSIl5po4ChyI+aJfqvI0ND44H74qCH7j7yCwHUY+/zC5OswaePqCB50TjIfaH3iK+6ajtJhd7fIhCi7Kqfe0Q4zXdkMJdhhQgj5LyWK/o4oeDSh4r16Zb1YtcrgrxwcvGbWBBV10e19OSlGSfwVu18s1kYRYfYii9hkHDOipOlU+ZeXgQyTSuA3E4Yc0u0rEMv0ZfgXV6uoLTnXI1BGS5ZR2ZZU8c+JHhwcAXYVybrTjuV5LuaxoJIA0HsFnGxKvrxU6NMBxoMfJUejSEefRLmrSc/AHBSrMli4gD78lFkmGuFB/jX1Wpsq+3cO4BEjp4xgqRdWZJNY0Eg1yzV1BhimZ++9Q5aKab/vkpbZp3NKOSWxyIBTHHmqmccBXG76KfGmcMWeVFT2hOQzhdIzyKUIpWZi03OqaULeGPiNFUR4QduB8iriahtc6rXU8imHypzdiN4+aqdTVLRnXspgf4Wp2ItIwozTXEEeRqPRUs5DANNNOH0SZRjh1gf4SPZz5MfNUfVMCKHta8ZOAI5EVCcWF/C3aQR5YQIjh0sPAY9tmYpxGII3UW6XQnZ8/kg4ScWCEIUlAQhCAEIQgK+3Y5ZLvp2iLo5v6vlUnuWUsyXvuA0JvH9rcGq322jEQ4bW6vJ8Gkerh4KJYhul50AA8B/Kuujqx6x2Sy6sRzvhZ1R3Z+a5EZSFTVxx9SuQx+UDq4jzNUqa/uNGgb6qSyEysneeB8LaHmSpE+CXNY12GZoozIjmtdc7ZfQHh/CtZGWDW1di45kqrZEnW2V0dl1pFa4YVxTbR+YOXqfonpp4L6D7A+qahH8w00oPCp+aIm9DrXUL+HsEmYdSFjw8SQuNdVhOhPqcETuNxo31PcD86KSvqVdpEXI1crgr4O9147bDusRVeo7STFJaKdXOujTAUHyK8etSOS8q90j2/pyqLZAikX28xnzVrtXaLIr8AHNHZeHdqgyu6C8T3KgmImPeosSNecXYCpyGS5nt2YeVJPKh1imS7DUZKvBUmA41zWPqdWGSWjfbNyra1NCTiBQ4b9FqJqTaGgkUNM6Ur5Ki2JoWgnE/Jam25hoZdrpRbJaMc039woWRHDCrKefon2zkRvxMppvWZmzQmj1XmZNTVxVGa8VRrI1rRRgSPAqDMTd7d6KjZNuAoLzq8KpcN7nECjh3FVsslFFzKWdeFc+Zr4VTc3JFnZvNOlFa2ZAIb74KLagIr1gruqOVzcpGVm2EuxFD4VSmNTjjU4/MpIGGOXf97lVdHWS5N4ZQtJDmmoIq03tCOXBaWU2ynWxIbnRXOu6Em64GlQ7f34hZCXmHkgXQWev+JPurqBOwqEPqcBQDGg1cANBz3qbIksbVzV/o90sS2IU1CEWE6tQLzfiYTm1w35+CsF5t+FjoYixS14o4NutvYmlS7DI5VG6p3r0laRdo+d8nEseRxj0CEIVjAEIQgMntwavl2jMl57hcSbPFIUTD9Xku7cEiJLEal4r/4/VJspxIew/wDIeP8AKuujrj/jX89SWH9VlMqj0KROPpFFdW+YK7KgmAOHyzSpiH0rARmMQpJ6ZD6YhxGodfHGv2QrB9qVblSuHE8lXOLHtAdmNMQR4YhLZ0cPGuPMuPIVUMlpMeiRLjS49o4AegSYbaNp8TsK88SUwwF7r7hQaDcPdTJcfGcqYct/khDFxqC60aY+G9RY0wAXu0YPOlfZddF7UQ65chl796q40QNFCc6uPjU9yIRjZm9r45DWQ3HEC86n6j/JXl1pxBfJC2G0Vp9KandQ8cSe7NYKaJqeajIz28X9PGR3EE9atNaenBRXRKuqRSugyFBSnorqBs1MxWNe24GuFcXEGmlaBMWlYr5cViuhknINcS45A4ED608ckeLly3k5EBpU2Wca5qECDiFMljjj7LNqj0fFyXs9B2aiEMGPorS05t1Ne+qo7GeQ1pGXip85Q51++9WT0avcrKSZmHGtKqtfEfXN3irWYhDf/wCv1UB8LcC7yVWWlJkVkR5Pad4/VWMoHkihJ8UxDhvArRo5/VSZd7hheqeAoqkRm0jWSTHXdBzVdbDKZmp5UCXIxKCrjTmk2g6+KjLf7K96M4JcigJxRMxKUG8c+KU4Y/eScdCvAUGKG8nQmwLHiTUdsGGOtENCdAMySdwFT9aLawNiHNtOLLCI64IYdDcaVDHMpiABgXXmYZVC1X4V2UyFLuiXRfc67e1DQAbo3Cpr/C2LpRpiiLk8Nuk4YtzAOGhJOG8q6ieVm8x82o9VX79zCfh3IxIMzEa5jm9XrAtFGkEil7eccs+S9DQhWSo4cuR5JcmCEIUmYIQuFAZ7baFWA1wGLXg+II9aKpsqJR4NRR7R3kfSi09swOkgvaM6VHNpDh5hY6WhEVZXFtHs4g5CvKo7lZdHVidwovYEUMcWaOxG7HMIh/luoeyez7JAAiMGh03gpUGMa3Ygx01B5KSRcxDY8Y0NVDEFjcaAbz9VLdJsOIqORISRKw2mpxO8mvhXJAmhmEwvpozXQn6Im5gVuNOVK+3380mamScGZb1WRoxrcZi7C9wFcSeO7uQlKx2ajEkaMANeJy8sfJY3a22w2sMHruHW/wCLQcBwrnyorXaO1hChE7sAN50H37LyqfnXPcXONXE1Klujv8TFf5voenZskfNV9nSRmI7YQrTN5GjBn7cyo8aKj+vLIRhwyW3/AO674nUyYNzBU8SSdMFg3Y8vyVFUuzR29tMyCOhl7rnAXajFjAMKD9RHh6LDTEw57i57i5xzJzKd6FNuhoqPFbbG4b6FWcm/v5qtMMqRJxMaKJq0dPi5uEjZWVMtApi3zCuxGBycD4rKWfForuXiV/hZqR7SaeyU9oOdPNR3wxnWncpt0Ee4TboQ5dykjv0K5zhuJUmGw0FBd8vFKoultd9d30CqSr9SdJOaMO0fJSZmJ1N2n8KrhRKYDE8Mgll5OZy10CsUb3oidFidw9dFKkYBLgKJMMVPD7xK0+xtk9NGBI6jcXd2Te/3RdlM2WoNs9K2WleilYbdSLx/yx9KK3qobIifa9bnhvbHartUgFdQihaElCEClwrqEAxFCzE/LhsTdq08DmPFa1zVV2rI32EZbjuO9SaQlTKFsY16RhvNwqPmPZTWTLXDMKhhB8Jxacq1IHmW+ynwhDcK68DQ99FY6GkPlhJxceQwTMSCNSTzNfJLZJ633U5j2SJiFDaKk5b3H+EFjExGPZaOZ0A+aobWtGHLsca0ObnHEknKo1O4cEztHtIyCw0z0FMe4H1OHNeT2zbMSM8ucTwFTQe54o5JG+OCq5aRNtm2XRn1NQ0dkVrTfXeTvVLFjKIY7jlinYEs55yJ4LGT9WTl82KVREglxUiHAVnKWM6lTgrSDIMbzWEsy6R5WTK5O2UDZMnguPlAMhUrSNkS7gPNOf0TWhZfdZlyZkXyRzOCixJamS0NoTMNuAN47hj56KE2TiPFaXQfGi0jkdWy6kRpCaoaE0K1VlEOFfosvGs+h3laTZuzYwaS7BpxbWtT9FOpO0ej4/ltaZdXfuqQW8/EJy44Zjv0SHlSehHLyWjnQHOniuBgGZ7glNfz9EX+7lmpRLbY0Wb+qNwxJSwwnClBo35uS2EDTxzVjZ9muiEV6jNScSeQ19FJVzUVbGLOs90V4YwVJzPzO4L06xpJsCGIbeZO871CsqThw20hjDU6k7yVbQQtIqjzs+Z5H8EyG5SGOUaGE+wKxzMkNKcBTTQnAFJApC6FxCBaEIQgEh7apa4gKefssOyWZnLLiMOFTxOfiFviEzFgA5hSmaxyNHm0eNHGppqK/RUlrOmogoHBo35nxIzXoG0LocIYQokR5yaxhPi6lAvOrfZNvFXt6GGTQCuJ7gfVZTzUXfkcfQxVsybGk35h8SIT2WYkni41p4E8FXQbCe41fXHJgNfErVSNmdb8scC84k8Bu7ldQpVrBxXPLM/Q5smec+zJS2zQGLsOA91Yw5NrMA3uAV7/AE73dlt0ak59wT0Gz6ZDnvKx/KT2ZVJlKJNx4Dz8U/DlKZCqvIchwqpsGyycgtFhb7LLH7maMqaVJDQMSdwWetCEYzqCohDIY3n8SBkNw+xq7YbVxhMyaeudC4fD3a8UxBlgMhj9+Cym4w0iJNLSKaRsJrRVzRhk3dxO8qcZAuNGipV9JWU95GFAtbZVgNaMkx4Z5HcuhGDfZirO2UHac2p8h7q4/wBH4LbMkBuXTIjcu+GNRVI3jow/+mEaJqJY7Tm3wwW6dIDcmnWfwV6RoptdGBfs83eVxuzzd7vIfJbw2bwXW2dwUcUaffn7mNlrFa3JuO84q1gSJWiZZ43KRDkhuU0Uc2+yplJYhXECFUJ5kspEKHRKKNjbIKebDTwC7RSUsQGpQC7RdQWcohdQhAIQhACEIQAuFdQgGIkIHMLz/am3Xue6DDFxjTRzqddxGdP0jz5LfzkNzmODHXXEUDqVpxos9J7JQ2G86r3Z1djjwHvVZZFJ6iQ7ZiJSz3vGDbrd9PQK3lbC4VO9baHZTRnipTJZoyCiGFIKKRjmWGdykQrBWt6MILeC14osUEOx2MF51ABiScABxKz1t2/DAMOXx0MTKn7OPHw3q2n7Fmpl1Y8VkOHpDbV1OeQJ4kpcDZ6XhZNL3b3Y+WSxlzlqOl7lHb6MNK2e92TcN9KBXtm2FjiKnetPCkKnLBWcCVDdFWHjxjt7CgkQJCyw3RWTISdDUoBdKRcQGLvRpa6pA10aOiTqEAz0IXeiCdQgGxDXQxLXEBy6u0QhAKC6khdUEHUIQgBCEIAQhCAEIQgBCEIDiF1CA4uJS4gOLjkpcogI8RpKQyWUui6gG2wwEqiUhAcohdXEAIXUIDiF1cQAhCFIBCEIAQhCA6F1cC6oAIQhACEIQAhCEAIQhACEIQAhCEAIQhAcKEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhAAXUIQAhCEAIQhAf/Z')");
searchTerm = "Onion";

//snagrecipesveggies currently undefined
// snagRecipesVegies();


break;


case "Parsley":

emptyInfoVeggies();
$("#body-div-veggie").append("COMING SOON");
$(".veggie-propic").css("backgroundImage", "url('https://abs-images.aussiefarmers.com.au/unsafe/1000x/https://s3-ap-southeast-2.amazonaws.com/abs-afd-images/store/product/curly-leaf-parsley-bunch-8923.jpg')");
searchTerm = "Parsley";





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



