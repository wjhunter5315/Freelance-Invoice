module.exports = ((sequelize, Sequelize) => {
    var User = sequelize.define("user", {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        userEmail: Sequelize.STRING,
        userPhone: Sequelize.INTEGER,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
    });
    return User;
});

// const Sequelize = require("sequelize");
// const sequelize = require("./index.js");

// const User = sequelize.define("user", {
//     id: Sequelize.INTEGER,
//     firstName: Sequelize.STRING,
//     lastName: Sequelize.STRING,
//     city: Sequelize.STRING,
//     state: Sequelize.STRING,
//     userEmail: Sequelize.STRING,
//     userPhone: Sequelize.INTEGER,
//     username: Sequelize.STRING,
//     password: Sequelize.STRING,
// });

// User.sync();

// module.exports = User;