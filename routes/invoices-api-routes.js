const db = require("../models");

module.exports = (app => {
    app.get("/api/invoices", (req, res) => {
        db.Invoices.findAll({}).then(dbInvoices => {
            res.json(dbInvoices);
        });
    });

    app.post("/api/invoices", (req, res) => {
        db.Invoices.create({
            client: req.body.client
        }).then(dbInvoices => {
            res.json(dbInvoices);
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
