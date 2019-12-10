module.exports = function(sequelize, DataTypes) {
    let UserEdu = sequelize.define("userEdu", {
        school: DataTypes.STRING,
        degree: DataTypes.STRING,
        field: DataTypes.STRING,
});

// UserEdu.associate = function(models) {
//     UserEdu.belongsTo(models.User, {
//         foreignKey: {
//             allowNull: false,
//         }
//     }
//     )};

return UserEdu;
};