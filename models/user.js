module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        userPhone: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });

    // User.associate = function(models) {
    //     User.hasMany(models.UserEdu, models.UserExp, models.Invoices, {
    //         onDelete: "cascade",
    //     });
    // };
    return User;
    };
    return User;
};
    