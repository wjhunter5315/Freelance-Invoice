const Sequelize = require("sequelize");
const sequelize = require("./index.js");

const UserExp = sequelize.define("userExp", {
    prevJobs: Sequelize.STRING,
    title: Sequelize.STRING,
});

UserExp.sync();

module.exports = UserExp;