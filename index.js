var express = require("express");
var app = express();  //as needed do things, let the errors drive where you head. Do not skip ahead. 
var PORT = 3000; // it is smart to have your port up gere
app.get("/", function (req, res) {
  res.send("Welcome to the homepage"); //sends to homepage

})

app.listen(PORT, function() {
  console.log("running on port %s", PORT);
});

