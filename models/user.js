const Sequelize = require("sequelize");
// const path = require("path");

module.exports = function(sequelize, dataTypes) {
    const User = sequelize.define("User", {
        userName: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1],
                isEmail: true
            }
        },
        nickName: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE(6),
            defaultValue: Sequelize.NOW()
        },
        updatedAt: {
            type: dataTypes.DATE(6),
            defaultValue: Sequelize.NOW()
        },
        currentSocket: {
            type: dataTypes.STRING,
            allowNull: true
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Task, {foreignKey: "originatorId", as: "Request"});
        User.hasMany(models.Task, {foreignKey: "completerId", as: "Marker"});
        User.hasMany(models.List, {foreignKey: "creatorId", as: "Wishlist"});
        User.belongsToMany(models.List, {through: "listViewers", as: "Shared", foreignKey: "CheriId"});
    };

    return User;
};
