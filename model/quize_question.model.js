const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Quiz_Question = sequelize.define('QuizQuestion', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quiz_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'quizzes', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    question:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4'
    },
    option_a:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4'
    },
    option_b:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4'
    },
    option_c:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4'
    },
    answer:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
        tableName: 'quiz_questions', // Specify the table name
        timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
});


function createQuizQuestionTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('QuizQuestion table synced!');
        })
        .catch((error) => {
            console.error('Error syncing QuizQuestion table:', error);
        });
};

module.exports = {Quiz_Question, createQuizQuestionTable};

