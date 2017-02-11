var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("<h1>Hello from the Slash!</h1>")
});

app.get("/bye", function(req, res){
	res.send("<h1>Goodbye</h1>");
});

app.get("/dog", function(req, res){
	console.log("SOMEONE MADE A REQUEST TO /DOG");
	res.send("<h1>MEOW!</h1><h2>MEOW!</h2><h3>MEWO!</h3>" );
});

app.get("/cat", function(req, res){
	console.log("SOMEONE MADE A REQUEST TO /CAT");
	res.send("<h1>WOOF!</h1><h2>WOOF!</h2><h3>WOOF!</h3>" );
});

app.get("/r/:subredditName", function(req, res){
	console.log("SOMEONE ACCESSED A SUBREDDIT");
	res.send("<h1>WELCOME TO A SUB-REDDIT</h1>");
});

app.get("r/:subredditName/comments/:id/:title/", function(req, res){
	console.log("SOMEONE ACCESSED A COMMENTS PAGE OF A SUBREDDIT");
	res.send("<h1>WELCOME TO THE COMMENTS PAGE</h1>");
});

app.get("*", function(req, res){
	console.log("SOMEONE ACCESSED THE DEFAULT PAGE");
	res.send("<h1>THIS IS THE DEFAULT PAGE</h1><h1>THIES WOULD BE A GREAT PAGE NOT FOUND REQUEST</h1>");
});

app.listen(3000, function(){
	console.log("Server has started. Yay!!!")
});

