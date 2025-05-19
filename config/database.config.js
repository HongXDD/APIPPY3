require('dotenv').config();
const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Database name
  process.env.DB_USER,  // Username
  process.env.DB_PASSWORD,  // Password
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',  // Database dialect
    port: process.env.DB_PORT || 3306,  // Port, default to 3306 if not specified
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    dialectOptions:{
        charset: 'utf8mb4',
    }
  }
);

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
