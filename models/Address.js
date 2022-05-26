const { DataTypes } = require('sequelize')

const db = require('../connSequelize')

const User = require('./User')

const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
})

User.hasMany(Address)
Address.belongsTo(User)
//Address.sync({ force: true });
module.exports = Address