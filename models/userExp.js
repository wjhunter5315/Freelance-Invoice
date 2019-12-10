module.exports = function(sequelize, DataTypes) {
    const UserExp = sequelize.define("userExp", {
        title: DataTypes.STRING,
        company: DataTypes.STRING,
        description: DataTypes.STRING
    });
    //User Experience is associated with ("Belongs To") User
    // will add userId to UserEpx to hold the primary key value for User
    UserExp.associate = (models) => {
        UserExp.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserExp;
};