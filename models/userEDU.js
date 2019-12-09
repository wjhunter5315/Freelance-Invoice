module.exports = function(sequelize, DataTypes) {

    const UserEDU = sequelize.define("userEDU", {
        school: DataTypes.STRING,
        degree: DataTypes.STRING,
        field: DataTypes.STRING,
    });

    UserEDU.associate = (models) => {
        UserEDU.belongsTo(models.User, {
            foreihnKey: {
                allowNull: false
            }
        });
    };
    return UserEDU;
    };