module.exports = function(sequelize, DataTypes) {

    let Services = sequelize.define("Services", {
        labor: DataTypes.STRING,
        rate: DataTypes.INTEGER
    });

Services.associate = function(models) {
    Services.belongsTo(models.Invoices, {
        foreignKey: {
            allowNull: false,
        },
    }
    )};

return Services;
};
