module.exports = function(sequelize, DataTypes) {
    const Invoices = sequelize.define("Invoices", {
        number: DataTypes.STRING,
        company: DataTypes.STRING,
        description: DataTypes.STRING,
        rate: DataTypes.STRING,
        hours: DataTypes.STRING,
        tax: DataTypes.STRING
    });

    Invoices.associate = function(models) {
        Invoices.belongsTo(models.User, {
            foreignKey: {
                allowNull: true,
            }
    });
};
return Invoices;
};
