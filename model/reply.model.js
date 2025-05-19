const {DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Reply = sequelize.define('Reply', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'comments', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Name of the referenced table
            key: 'id' // Key in the referenced table
        }
    },
    content: {
        type: DataTypes.TEXT,
        charset: 'utf8mb4',
        allowNull: false
    },
}, {
    tableName: 'replies', // Specify the table name
    timestamps: false // Disable automatic timestamp fields like createdAt/updatedAt
});


function createReplyTable() {
    sequelize.sync({ force: false }) // Use 'force: true' to drop the table if it already exists
        .then(() => {
            console.log('Reply table synced!');
        })
        .catch((error) => {
            console.error('Error syncing Reply table:', error);
        });
};

module.exports = { Reply, createReplyTable };

