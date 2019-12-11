const db = require("../models");

module.exports = (app => {
    app.get("/api/User", (req, res) => {
        db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
        });
    });
    
    app.get("/api/invoices", (req, res) => {
        db.Invoices.findAll({}).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });

    app.post("/api/User", (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            username: req.body.username,
            password: req.body.password,
            school: req.body.school,
            degree: req.body.degree,
            field: req.body.field,
            title: req.body.title,
            company: req.body.company,
            description: req.body.description
        }).then(user => {
            res.json(user);
        });
    });

    app.get("/api/User/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(result => {
            var user = result
            console.log(result)
            res.render("index", { index: [user] });
        });
    });

    app.post("/api/invoices", (req, res) => {
        db.Invoices.create({
            number: req.body.number,
            company: req.body.company,
            description: req.body.description,
            rate: req.body.rate,
            hours: req.body.hours,
            tax: req.body.tax
        }).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });

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