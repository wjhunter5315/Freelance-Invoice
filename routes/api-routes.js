let db = require("../models");

module.exports = (app => {
    app.get("/api/user", (req, res) => {\
        db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
        });
    });

    app.get("api/Services", (req, res) => {
        db.Services.findAll({}).then(dbServices => {
            res.json(dbServices);
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

    app.post("/api/services", (req, res) => {
        db.Services.create({
            labor: req.body.labor,
            rate: req.body.rate
        }).then(dbServices => {
            res.json(dbServices);
        });
    });

    app.post("/api/invoices", (req, res) => {
        db.Invoices.create({
            client: req.body.client;
        }).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });

    app.post("/api/education", (req, res) => {
        db.userEDU.create({
            level: req.body.level,
            school: req.body.school,
            degree: req.body.degree,
            field: req.body.field
        }).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });

    app.post("/api/experience", (req, res) => {
        db.userExp.create({
            prevJob: req.body.prevJob,
            title: req.body.title,
            description: req.body.description
        }).then(dbuserExp => {
            res.json(dbuserExp);
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