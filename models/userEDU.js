module.exports = function(sequelize, DataTypes) {

    const UserEDU = sequelize.define("userEDU", {
        school: DataTypes.STRING,
        degree: DataTypes.STRING,
        field: DataTypes.STRING,
    });
    //Education is associated with ("Belongs To") User
    // will add userId to UserEDU to hold the primary key value for User
    UserEDU.associate = (models) => {
        UserEDU.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return UserEDU;
};