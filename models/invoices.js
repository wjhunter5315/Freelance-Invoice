module.exports = function(sequelize, DataTypes) {
    const Invoices = sequelize.define("Invoices", {
        client: DataTypes.STRING,
    });
    //Invoices "Belongs To" Services 
    // will add servicesId to Invoices to hold the primary key value for Services
    Invoices.associate = (models) => {
        Invoices.belongsTo(models.Services, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Invoices;
};
