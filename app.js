var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("<h1>Hello from the Slash!</h1>")
});

app.get("/bye", function(req, res){
	res.send("<h1>Goodbye</h1>");
});

app.get("/dog", function(req, res){
	console.log("SOME MAD A REQUEST TO /DOG");
	res.send("<h1>MEOW!</h1><h2>MEOW!</h2><h3>MEWO!</h3>" );
});

app.get("/cat", function(req, res){
	console.log("SOME MAD A REQUEST TO /CAT");
	res.send("<h1>WOOF!</h1><h2>WOOF!</h2><h3>WOOF!</h3>" );
})