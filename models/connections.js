module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define("Connection", {
    // name of the contact
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // C-level, VP, Director, Manager, Senior, Entry
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Logistics, Engineering, etc.
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Food and Bev, Telecommunications, Manufacturing, etc.
    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Siemens, Toyota, etc.
    company: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //Cost is zero if this is created by the SELLER
    cost: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
  });

  Connection.associate = (models) => {
    // We're saying that a Connection should belong a User
    // A Connection cannot be created without a User due to the foreign key constraint
    Connection.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Connection;
};
