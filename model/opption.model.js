const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');
const { options } = require('../router/chapter.routes');

const Option = sequelize.define('option_question',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    options:{
                type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4',
        unique: true
    },
    quiz_question_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'quiz_questions', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    }
},
{
    tableName: 'option_question', // Specify the table name
    timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
}
);

function createOptionQuestionTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('Lesson table synced!');
        })
        .catch((error) => {
            console.error('Error syncing Lesson table:', error);
        });
};

module.exports = { Option, createOptionQuestionTable};
