module.exports = function(data){
 
    // require express and app
   const express = require('express')
   const app = express();
   
    // require Multer npm
    const multer = require('multer');
    
    // Storing multer file
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/assets/uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
    })
     
    // set variable for storage
    var upload = multer({ storage: storage })
    
    // Multer routes
    app.get('/uploadfile',(req,res) => {
      res.render('create-profile',  {title: 'upload file'});
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
        });
  };