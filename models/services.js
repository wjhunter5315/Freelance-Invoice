module.exports = function(sequelize, DataTypes) {

    let Services = sequelize.define("Services", {
        labor: DataTypes.STRING,
        rate: DataTypes.INTEGER
    });
    //Services "Belongs To" User
    // will add userId to Services to hold the primary key value for User
    Services.associate = (models) => {
        Services.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Services;
};
    