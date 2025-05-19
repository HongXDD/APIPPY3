const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database.config');
const router = express.Router();

const saltRounds = 10;

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, profile_picture } = req.body;

        if (!name || !email || !password || !profile_picture) {
            return res.status(400).json({ Error: 'All fields are required.' });
        }

        const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

        const sql = "INSERT INTO users (`name`, `email`, `password`, `profile_picture`) VALUES (?, ?, ?, ?)";
        await sequelize.query(sql, {
            replacements: [name, email, hashedPassword, profile_picture],
            type: sequelize.QueryTypes.INSERT
        });
        return res.json({ Status: "Success" });
    } catch (err) {
        console.error("Registration error:", err);
        return res.status(500).json({ Error: "Server error while registering user." });
    }
});

module.exports = router;
