module.exports = ((sequelize, Sequelize) => {
    var Services = sequelize.define("services", {
        labor: Sequelize.STRING,
        rate: Sequelize.INTEGER,
    });
    return Services;
});

// const Sequelize = require("sequelize");
// const sequelize = require("./index.js");

// const Services = sequelize.define("services", {
//     labor: Sequelize.STRING,
//     rate: Sequelize.INTEGER,
// });

// Services.sync();

// module.exports = Services;