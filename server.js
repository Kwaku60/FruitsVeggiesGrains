var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();


// app.use(express.static(__dirname + "/fvb"));
// app.use(express.static("assets"));
// app.use(express.static("images"));
// app.use(express.static(process.cwd()));
app.use(express.static(process.cwd() + "/fvb"));


var port = 3000;





//copied from previous examples
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");









var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fruits_veggies_grains_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

// Root get route
app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname,"FVGIndex.html"))

    connection.query("SELECT * FROM apple_comments;", function(err, data) {
      if (err) throw err;

      // Test it
      // console.log('The solution is: ', data);

      // Test it
      // res.send(data);

      res.render( "apple_comments", data );
    })
})

app.get('/', function (req, res) {

   res.sendFile(path.join(__dirname,"fvg.css"));
})




// Post route -> back to home
app.post("/", function(req, res) {

    // Test it
    // console.log('You sent, ' + req.body.event);

    // Test it
    // res.send('You sent, ' + req.body.event);

  connection.query("INSERT INTO apple_comments (comment) VALUES (?)", [req.body.comment], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });

});


app.listen(port);
