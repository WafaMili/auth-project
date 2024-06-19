const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'wafa', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  
});

module.exports = sequelize;
