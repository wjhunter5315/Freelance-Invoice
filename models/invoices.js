module.exports = function(sequelize, DataTypes) {
    const Invoices = sequelize.define("Invoices", {
        client: DataTypes.STRING,
    });
return Invoices;
};
