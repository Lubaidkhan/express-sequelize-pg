
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// module.exports = sequelize;
require('dotenv').config(); 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testsequelize_db', 'postgres', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;


