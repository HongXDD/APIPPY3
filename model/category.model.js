const {DataTypes} = require('sequelize');
const sequelize = require('../config/database.config');

const Category = sequelize.define('Category', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4',
        unique: true
    },
}, {
    tableName: 'categories', // Specify the table name
    timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
});


function createCategoryTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('Category table synced!');
        })
        .catch((error) => {
            console.error('Error syncing Category table:', error);
        });
}

module.exports = {Category, createCategoryTable};
