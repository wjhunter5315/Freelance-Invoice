const db = require("../models");

module.exports = (app => {
    //Get all users
    app.get("/api/user", (req, res) => {
        db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
        });
    });
    //Get one user by id
    app.get("/api/user/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(dbUser => {
            res.json(dbUser);
        });
    });
    //Get the user's education
    app.get("/api/userEDU", (req, res) => {
        db.UserEDU.findAll({}).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });
    //Get the user's experience
    app.get("/api/userExp", (req, res) => {
        db.UserEpx.findAll({}).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });
    //Get the services the user has applied for
    app.get("/api/services", (req, res) => {
        db.Services.findAll({}).then(dbServices => {
            res.json(dbServices);
        });
    });
    //Get the invoices the user has created
    app.get("/api/invoices", (req, res) => {
        db.Invoices.findAll({}).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });
    //Create a new user
    app.post("/api/user", (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            username: req.body.username,
            password: req.body.password
        }).then(dbUser => {
            res.json(dbUser);
        });
    });
    //Create a new services page for the user
    app.post("/api/services", (req, res) => {
        db.Services.create({
            labor: req.body.labor,
            rate: req.body.rate
        }).then(dbServices => {
            res.json(dbServices);
        });
    });
    //Create an invoice for the service taken
    app.post("/api/invoices", (req, res) => {
        db.Invoices.create({
            client: req.body.client
        }).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });
    //Create an education object for the user
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
    //Create an experience object for the user
    app.post("/api/experience", (req, res) => {
        db.UserExp.create({
            prevJob: req.body.prevJob,
            title: req.body.title,
            description: req.body.description
        }).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });
    // Update a User's info by the id
    app.put("/api/user", (req, res) => {
        db.User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            username: req.body.username,
            password: req.body.password
        }, {
            where: {
                id: req.body.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        });
    });
    //Update the User's Education by the id
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
        }).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });
    //Update a User's work Experience by the id
    app.put("/api/experience", (req, res) => {
        db.UserEpx.update({
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
    //Udpate a User's Services by id
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
    //Update an Invoice for a User's services by id
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
    //Delete a user by the id
    app.delete("/api/user/:id", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        });
    });
    //Delete education from a user by id
    app.delete("/api/userEDU/:id", (req, res) => {
        db.UserEDU.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbuserEDU => {
            res.json(dbuserEDU);
        });
    });
    //Delete work experience from a user by id
    app.delete("/api/userExp/:id", (req, res) => {
        db.UserEpx.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbuserExp => {
            res.json(dbuserExp);
        });
    });
    //Delete a service from the user by id
    app.delete("/api/servives/:id", (req, res) => {
        db.Services.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbServices => {
            res.json(dbServices);
        });
    });
    //Delete an invoice for a service for a user by id
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