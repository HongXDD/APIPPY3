const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Course = sequelize.define('Course', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    total_chapters:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_lessons:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_quizzes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        charset: 'utf8mb4',
        allowNull: false
    },bg_color:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
        tableName: 'courses', // Specify the table name
        timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
});

function createCourseTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('Course table synced!');
        })
        .catch((error) => {
            console.error('Error syncing Course table:', error);
        });
}

module.exports = {Course, createCourseTable};
