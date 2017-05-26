//recipes api
var unirest = require('unirest');
var express = require("express");
var app = express();
var PORT = 3010;
// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples&limitLicense=false&number=6&ranking=1")
.header("X-Mashape-Key", "4vsF5PYiiQmshi71eKxjjMubR6Wup1l8rMejsnVUuO91IQoeXP")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});



app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});