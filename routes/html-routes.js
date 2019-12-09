var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/education", function(req, res) {
    res.sendFile(path.join(__dirname, "../education.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/experience", function(req, res) {
    res.sendFile(path.join(__dirname, "../experience.html"));
  });

};
