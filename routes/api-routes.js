let db = require("../models");

module.exports = (app => {
    app.get("/api/user", (req, res) => {
        db.User.findAll({}).then(dbUser => {
            res.json(dbUser);
        });
    });

    app.get("api/companies", (req, res) => {
        db.Companies.findAll({}).then(dbCompanies => {
            res.json(dbCompanies);
        });
    });

    app.post("/api/user", (req, res) => {
        db.User.create({
            firstName: req.body.name,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            phone: req.body.phone
        }).then(dbUser => {
            res.json(dbUser);
        });
    });

    app.delete("/api/user/:id", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        });
    });
})