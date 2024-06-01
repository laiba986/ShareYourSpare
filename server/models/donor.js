// server/models/donor.js

module.exports = (sequelize, DataTypes) => {
    const Donor = sequelize.define('Donor', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Donor;
  };
  