const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Quiz = sequelize.define('Quiz', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lesson_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'lessons', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4',
        unique: true
    },
    min_score:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false
}},{
        tableName: 'quizzes', // Specify the table name
        timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
    });

    function createQuizTable() {
        sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
            .then(() => {
                console.log('Quiz table synced!');
            })
            .catch((error) => {
                console.error('Error syncing Quiz table:', error);
            });
    };

    module.exports = {Quiz, createQuizTable};