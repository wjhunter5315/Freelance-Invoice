var express = require("express");

var app = express();
var PORT = process.env.PORT || 8000;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// require Multer npm
const multer = require('multer');

// Storing multer files
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

// Multer routes
app.get('/experience',(req,res) => {
  res.render('experience',  {title: 'upload file'});
});

// creating a post for a single upload
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})

// retrieving the stored upload
app.get('/resume', (req, res) => {
  db.collection('mycollection').find().toArray((err, result) => {
   
        const resume= result.map(element => element._id);
              console.log(resume);
   
     if (err) return console.log(err)
     res.send(resume)
   
    })
  });

  app.get('/photo/:id', (req, res) => {
    var filename = req.params.id;
     
    db.collection('mycollection').findOne({'_id': ObjectId(filename) }, (err, result) => {
     
        if (err) return console.log(err)
     
       res.contentType('image/jpeg');
       res.send(result.image.buffer)
       
        
      })
    })

// api & html routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// server listening
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});