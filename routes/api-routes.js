const db = require("../models");

module.exports = (app => {
    app.get("/api/user", (req, res) => {
        db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
        });
    });

    app.get("/api/userEDU", (req, res) => {
        db.UserEDU.findAll({}).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });

    app.get("/api/userExp", (req, res) => {
        db.UserEpx.findAll({}).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });

    app.get("/api/services", (req, res) => {
        db.Services.findAll({}).then(dbServices => {
            res.json(dbServices);
        });
    });
    
    app.get("/api/invoices", (req, res) => {
        db.Invoices.findAll({}).then(dbInvoices => {
            res.json(dbInvoices);
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
            client: req.body.client
        }).then(dbInvoices => {
            res.json(dbInvoices);
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

    app.post("/api/experience", (req, res) => {
        db.UserExp.create({
            prevJob: req.body.prevJob,
            title: req.body.title,
            description: req.body.description
        }).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });

    app.put("/api/user", (req, res) => {
        db.User.update({
            firstName: req.body.name,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            userEmail: req.body.email,
            userPhone: req.body.email,
            username: req.body.userName,
            password: req.body.password
        }, {
            where: {
                id: req.body.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        });
    });

    app.put("/api/education", (req, res) => {
        db.UserEDU.update({
            level: req.body.level,
            school: req.body.school,
            degree: req.body.degree,
            field: req.body.field
        }, {
            where: {
                id: req.body.id
            }
        }).then(dbUserEDU => {
            res.json(dbUserEDU);
        });
    });

    app.put("/api/experience", (req, res) => {
        db.UserExp.update({
            prevJob: req.body.prevJob,
            title: req.body.title,
            description: req.body.description
        }, {
            where: {
                id: req.body.id
            }
        }).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });

    app.put("/api/services", (req, res) => {
        db.Services.update({
            labor: req.body.labor,
            rate: req.body.rate
        }, {
            where: {
                id: req.body.id
            }
        }).then(dbServices => {
            res.json(dbServices);
        });
    });

    app.put("/api/invoices", (req, res) => {
        db.Invoices.update({
            client: req.body.client
        }, {
            where: {
                id: req.body.id
            }
        }).then(dbInvoices => {
            res.json(dbInvoices);
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

    app.delete("/api/userEDU/:id", (req, res) => {
        db.UserEDU.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbuserEDU => {
            res.json(dbuserEDU);
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

    app.delete("/api/servives/:id", (req, res) => {
        db.Services.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbServices => {
            res.json(dbServices);
        });
    });

    app.delete("/api/invoices/:id", (req, res) => {
        db.Invoices.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });
});