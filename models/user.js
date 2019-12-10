module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        userPhone: DataTypes.INTEGER,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });
    //User owns ("has") Services
    // this will add userId to Services
    User.associate = (models) => {
        User.hasMany(models.Services, {
            onDelete: "cascade"
        });
    };
    return User;
};
    