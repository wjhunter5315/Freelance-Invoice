
module.exports = function(app){

  // require express and router
  // const express = require("express");
  const bodyParser = require("body-parser");
  const approot = require("app-root-path");  
  // require multer
  const multer = require('multer');
  
  // require path
  const path = require('path');
  // require ejs npm
  // const ejs = require("ejs");
  const exhbs = require("express-handlebars")
  
  // const app = express();
  
  // set views files
  app.set('views', path.join(__dirname, 'views'))
  
  // set view engine
  app.engine("handlebars", exhbs())
  app.set('view engine', 'handlebars');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Index route
  app.get('/', function(req, res) {
    const uploadStatus = req.app.locals.uploadStatus;
    req.app.locals.uploadStatus = null;
    res.render('file-upload', {
      title: "using multer to upload files",
      uploadStatus: uploadStatus
    })
  });
  
  // Storing multer file
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, approot + "/public/assets/uploads" );
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
  
  // set variable for multer storage
  var upload = multer({ storage: storage });
  
  // creating a post for a single upload
  app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    console.log(req)
    const file = req.file

    if (!file) {
      return res.send('Please choose file to upload!');
    }
      req.app.locals.uploadStatus = true;
      res.redirect('/create-profile');
  
  })

}

// app.get('/uploadfile',(req,res) => {
//   res.render('create-profile',  {title: 'upload file'});
// });


// // retrieving the stored upload
// app.get('/resume', (req, res) => {
//   db.collection('mycollection').find().toArray((err, result) => {

//         const resume= result.map(element => element._id);
//               console.log(resume);

//      if (err) return console.log(err)
//      res.send(resume)

//     })
//   });

//   app.get('/photo/:id', (req, res) => {
//     var filename = req.params.id;

//     db.collection('mycollection').findOne({'_id': ObjectId(filename) }, (err, result) => {

//         if (err) return console.log(err)

//        res.contentType('image/jpeg');
//        res.send(result.image.buffer)
//       })
//     });
//     console.log(multer);
