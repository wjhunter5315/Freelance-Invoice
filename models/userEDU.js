const Sequelize = require("sequelize");
const sequelize = require("./index.js");

const UserEDU = sequelize.define("userEDU", {
    level: Sequelize.STRING,
    school: Sequelize.STRING,
    degree: Sequelize.STRING,
    field: Sequelize.STRING,
});

UserEDU.sync();

module.exports = UserEDU;