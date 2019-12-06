const db = require("../models");

module.exports = (app => {
    app.get("/api/services", (req, res) => {
        db.Services.findAll({}).then(dbServices => {
            res.json(dbServices);
        });
    });

    app.post("/api/services", (req, res) => {
        db.Services.create({
            labor: req.body.labor,
            rate: req.body.rate
        }).then(dbServices => {
            res.json(dbServices);
        });
    });

    app.delete("/api/servives/:id", (req, res) => {
        db.Services.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbServices => {
            res.json(dbServices);
        });
    });
});