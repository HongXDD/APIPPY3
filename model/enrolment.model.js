const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');


const Enrolment = sequelize.define('Enrolment', {
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'courses', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    User_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    enrolment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    complete_date: {
        type: DataTypes.DATE,
        allowNull: true
    }},
    {
        tableName: 'enrolments',
        timestamps: false
    });

    function createEnrolmentTable() {
        sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
            .then(() => {
                console.log('Enrolment table synced!');
            })
            .catch((error) => {
                console.error('Error syncing Enrolment table:', error);
            });
    }


    module.exports = { Enrolment, createEnrolmentTable };