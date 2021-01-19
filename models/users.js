module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // Users are either Buyer, Seller, or Admin
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.associate = (models) => {
        // Associating User with Connections
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Connection, {
            onDelete: 'cascade',
        });
    };
    return User;
};