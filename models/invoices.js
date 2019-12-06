const Sequelize = require("sequelize");
const sequelize = require("./index.js");

const Invoices = sequelize.define("invoices", {
    client: Sequelize.STRING,
});

Invoices.sync();

module.exports = Invoices;