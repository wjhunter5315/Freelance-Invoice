module.exports = function(sequelize, DataTypes) {

    const UserEDU = sequelize.define("userEDU", {
        level: DataTypes.STRING,
        school: DataTypes.STRING,
        degree: DataTypes.STRING,
        field: DataTypes.STRING,
    });
    return UserEDU;
    };