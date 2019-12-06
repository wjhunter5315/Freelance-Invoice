const db = require("../models");

module.exports = (app => {
    app.get("/api/userExp", (req, res) => {
        db.UserEpx.findAll({}).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });

    app.post("/api/experience", (req, res) => {
        db.UserExp.create({
            prevJob: req.body.prevJob,
            title: req.body.title,
            description: req.body.description
        }).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });

    app.delete("/api/userExp/:id", (req, res) => {
        db.UserEpx.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });
});