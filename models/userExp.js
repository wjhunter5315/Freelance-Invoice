module.exports = function(sequelize, DataTypes) {
    const UserExp = sequelize.define("userExp", {
        prevJobs: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
});
return UserExp;
};