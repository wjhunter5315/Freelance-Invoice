const db = require("../models");

module.exports = (app => {
    app.get("/api/user", (req, res) => {
        db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
        });
    });

    app.post("/api/user", (req, res) => {
        db.User.create({
            firstName: req.body.name,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            userEmail: req.body.email,
            userPhone: req.body.email,
            username: req.body.userName,
            password: req.body.password
        }).then(dbUser => {
            res.json(dbUser);
        });
    });

    app.delete("/api/user/:id", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        });
    });
});