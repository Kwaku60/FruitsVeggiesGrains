
var rainingDogs = false;

var Dog = {
	
raining: true,


noise: "Woof!",


makeNoise: function(){

	if(raining){

console.log(this.noise); 


};


};



};


var Cat = {

	raining: false,
	noise: "Meow",
	makeNoise: function (){

		if(raining){

			console.log(this.noise);
		}

	};


Dog.makeNoise();

Cat.makeNoise(); 



//faster way with constructors


function Animal(raining,noise){

	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function(){

		if(this.raining ===true){


		};
	};
};



var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");
var birds = new Animal(true, "Chirp!");



};