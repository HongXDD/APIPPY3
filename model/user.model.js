const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config'); // Import the sequelize instance

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile_picture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role:{
    type: DataTypes.ENUM('user'),
    defaultValue: 'user'
  },
    createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
    }
}
, {
  tableName: 'users', // Specify the table name
  timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
});

// Sync the model with the database (create the table if it doesn’t exist)
const createUserTable = async () => {
  await User.sync({ force: false }); // Use 'force: true' to drop the table if it already exists
  console.log('Users table synced!');
};

module.exports = { User, createUserTable };
