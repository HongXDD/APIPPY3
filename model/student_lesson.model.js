const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const student_lesson = sequelize.define('Student_Lesson', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    lesson_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'lessons', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'quizzes', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
},{
    tableName: 'student_lessons', // Specify the table name
    timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
});

function createStudentLessonTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('Student_Lesson table synced!');
        })
        .catch((error) => {
            console.error('Error syncing Student_Lesson table:', error);
        });
};

module.exports = {student_lesson, createStudentLessonTable};