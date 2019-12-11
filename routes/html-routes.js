var path = require("path");
const db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/create-profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../create-profile.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../profile.html"));
  });

  app.get("/invoice", function(req, res) {
    res.sendFile(path.join(__dirname, "../invoice.html"));
  });

  // app.get("/profile/:id", function(req, res) {
  //   db.query.findAll({
  //     where: req.params.id
  //   }).then(function(result) {
  //     console.log(result);
  //   })
  //   res.render("index", data)
  // })
};
