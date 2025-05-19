const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Comment = sequelize.define('Comment', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'courses', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    comment_datatime:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    total_likes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    total_dislikes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,
        charset: 'utf8mb4'
    }},{
        tableName: 'comments', // Specify the table name
        timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
    });

    function createCommentTable() {
        sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
            .then(() => {
                console.log('Comment table synced!');
            })
            .catch((error) => {
                console.error('Error syncing Comment table:', error);
            });
    };

    module.exports = { Comment, createCommentTable };