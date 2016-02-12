var express = require("express");
var app = express();  //as needed do things, let the errors drive where you head. Do not skip ahead. 
var PORT = 3000; // it is smart to have your port up here

var exphbs = require('express-handlebars'); //exphbs means express handlebars
app.engine('handlebars', exphbs ({defaultLayout: 'main'}));
app.set('view engine', "handlebars")


var mysql = require("mysql");  //use snippets to create snippets that you use all the time. Sublime packages
mysql.createConnection({
port: 3306, // default port for mysql
host: 'localhost'.
user: 'root',
password: '/*your password*/',
database: 'quick_notes_db',

})

app.get("/", function (req, res) {
  connection.query("SELECT * FROM quick_notes", function (err, data) /* error row fields */ {
    //html =""; this could be done, but this is for junior developers, we are mid level now
    //html += ""
    if(err) throw(err)
  res.send(data);
  });

          //res.send("Welcome to the homepage"); //sends to homepage just to check your code and node app are connecting to the page

});

app.listen(PORT, function() {
  console.log("running on port %s", PORT);
});

