module.exports = function(sequelize, DataTypes) {
    const Invoices = sequelize.define("Invoices", {
        client: DataTypes.STRING,
    });

Invoices.associate = function(models) {
    Invoices.belongsTo(models.User, {
        foreignKey: {
            allowNull: false,
        }
    });
};
return Invoices;
};