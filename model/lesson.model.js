const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Lesson = sequelize.define('Lesson', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chapter_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'chapters', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4',
        unique: true
    },
    video_url:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    video_length:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        charset: 'utf8mb4',
        allowNull: false
    },
},{
        tableName: 'lessons', // Specify the table name
        timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
    }
);

function createLessonTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('Lesson table synced!');
        })
        .catch((error) => {
            console.error('Error syncing Lesson table:', error);
        });
};

module.exports = { Lesson, createLessonTable};
