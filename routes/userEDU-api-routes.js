const db = require("../models");

module.exports = (app => {
    app.get("/api/userEDU", (req, res) => {
        db.UserEDU.findAll({}).then(dbUserEDU => {
        res.json(dbUserEDU);
        });
    });

    app.post("/api/education", (req, res) => {
        db.UserEDU.create({
            level: req.body.level,
            school: req.body.school,
            degree: req.body.degree,
            field: req.body.field
        }).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });

    app.delete("/api/userEDU/:id", (req, res) => {
        db.UserEDU.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });
});