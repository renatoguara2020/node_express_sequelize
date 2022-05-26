const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_udemy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'  /* Choices  | 'mariadb' | 'postgres' | 'mssql' */
  });

  try {
     sequelize.authenticate();
    console.log('Connection has been established Successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = sequelize