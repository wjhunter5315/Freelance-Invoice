module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        userPhone: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        title: DataTypes.STRING,
        company: DataTypes.STRING,
        description: DataTypes.STRING,
        school: DataTypes.STRING,
        degree: DataTypes.STRING,
        field: DataTypes.STRING,
    });

    User.associate = function(models) {
        User.hasMany(models.Invoices, {
            onDelete: "cascade",
        });
    };

    return User;
};
    