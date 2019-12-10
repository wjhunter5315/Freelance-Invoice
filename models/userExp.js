module.exports = function(sequelize, DataTypes) {
    let UserExp = sequelize.define("userExp", {
        title: DataTypes.STRING,
        company: DataTypes.STRING,
        description: DataTypes.STRING
});

UserExp.associate = function(models) {
    UserExp.belongsTo(models.User, {
        foreignKey: {
            allowNull: false,
        }
    }
    )};

return UserExp;
};