const db = require("../models");

module.exports = (app => {
    app.get("/api/User", (req, res) => {
        db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
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

    app.post("/api/User", (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            username: req.body.username,
            password: req.body.password,
            school: req.body.school,
            degree: req.body.degree,
            field: req.body.field,
            title: req.body.title,
            company: req.body.company,
            description: req.body.description
        }).then(dbUser => {
            res.json(dbUser);
        });
    });

    // app.post("/api/services", (req, res) => {
    //     db.Services.create({
    //         labor: req.body.labor,
    //         rate: req.body.rate
    //     }).then(dbServices => {
    //         res.json(dbServices);
    //     });
    // });

    // app.post("/api/invoices", (req, res) => {
    //     db.Invoices.create({
    //         client: req.body.client
    //     }).then(dbInvoices => {
    //         res.json(dbInvoices);
    //     });
    // });

    // app.put("/api/User", (req, res) => {
    //     db.User.update({
    //         firstName: req.body.name,
    //         lastName: req.body.lastName,
    //         city: req.body.city,
    //         state: req.body.state,
    //         userEmail: req.body.email,
    //         userPhone: req.body.email,
    //         username: req.body.userName,
    //         password: req.body.password,
    //         school: req.body.school,
    //         degree: req.body.degree,
    //         field: req.body.field,
    //         title: req.body.title,
    //         company: req.body.company,
    //         description: req.body.description
    //     }, {
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(dbUser => {
    //         res.json(dbUser);
    //     });
    // });

    // app.put("/api/services", (req, res) => {
    //     db.Services.update({
    //         labor: req.body.labor,
    //         rate: req.body.rate
    //     }, {
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(dbServices => {
    //         res.json(dbServices);
    //     });
    // });

    // app.put("/api/invoices", (req, res) => {
    //     db.Invoices.update({
    //         client: req.body.client
    //     }, {
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(dbInvoices => {
    //         res.json(dbInvoices);
    //     });
    // });

//     app.delete("/api/user/:id", (req, res) => {
//         db.User.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(dbUser => {
//             res.json(dbUser);
//         });
//     });

//     app.delete("/api/servives/:id", (req, res) => {
//         db.Services.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(dbServices => {
//             res.json(dbServices);
//         });
//     });

//     app.delete("/api/invoices/:id", (req, res) => {
//         db.Invoices.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(dbInvoices => {
//             res.json(dbInvoices);
//         });
//     });
});