// server/models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Donor = require('./donor')(sequelize, Sequelize);
const Organization = require('./organization')(sequelize, Sequelize);
const Donation = require('./donation')(sequelize, Sequelize);
const Admin = require('./admin')(sequelize, Sequelize);
const Cause = require('./cause')(sequelize, Sequelize);

// Define relationships if any
Donor.hasMany(Donation);
Donation.belongsTo(Donor);
Organization.hasMany(Donation);
Donation.belongsTo(Organization);

module.exports = {
  sequelize,
  Donor,
  Organization,
  Donation,
  Admin,
  Cause,
};
