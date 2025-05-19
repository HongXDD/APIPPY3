const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Chapter = sequelize.define('Chapter', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'courses', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4',
        unique: true
    }},{
        tableName: 'chapters', // Specify the table name
        timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
    });

    function createChapterTable() {
        sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
            .then(() => {
                console.log('Chapter table synced!');
            })
            .catch((error) => {
                console.error('Error syncing Chapter table:', error);
            });
    };

    module.exports = { Chapter , createChapterTable};