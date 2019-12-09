module.exports = function(sequelize, DataTypes) {
    const UserExp = sequelize.define("userExp", {
        title: DataTypes.STRING,
        company: DataTypes.STRING,
        description: DataTypes.STRING
});
return UserExp;
};