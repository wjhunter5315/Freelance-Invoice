module.exports = function(sequelize, DataTypes) {

    let Services = sequelize.define("Services", {
        labor: DataTypes.STRING,
        rate: DataTypes.INTEGER
    });
    return Services;
    };
    