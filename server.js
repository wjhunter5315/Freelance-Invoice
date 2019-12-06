var express = require("express");
var exphbs = require("express-handlebars");
var profiles = require("./js/javascript.js")

var app = express();

var PORT = process.env.PORT || 8080;

//initiating handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//initiating express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//to grab static files
app.use(express.static("public"));

app.get("/profile", function(req, res) {
    res.render("profile", profiles.users[0])
})

//syncing databases & confirming connection to PORT

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});