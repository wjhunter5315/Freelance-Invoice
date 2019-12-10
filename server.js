var express = require("express");

var app = express();
var PORT = process.env.PORT || 8000;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// // require Multer npm
// const multer = require('multer');

// // Storing multer files
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
 
// var upload = multer({ storage: storage })

// // Multer routes
// app.get('/experience',(req,res) => {
//   res.render('experience',  {title: 'upload file'});
// });

// app.post('/upload', multer(storage).single('resume'), (req, res) => {
//   res.json('This is post route upload')
// })

// api & html routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// server listening
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});