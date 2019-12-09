module.exports = ((sequelize, Sequelize) => {
    var UserExp = sequelize.define("userEpx", {
        prevJob: Sequelize.STRING,
        title: Sequelize.STRING,
        description: Sequelize.STRING,
    });
    return UserExp;
});

// const Sequelize = require("sequelize");
// const sequelize = require("./index.js");

// const UserExp = sequelize.define("userExp", {
//     prevJobs: Sequelize.STRING,
//     title: Sequelize.STRING,
//     description: Sequelize.STRING,
// });

// UserExp.sync();

// module.exports = UserExp;