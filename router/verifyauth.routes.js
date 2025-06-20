
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/auth/verify', verifyToken, (req, res) => {
    res.json({ 
        message: 'User authenticated', 
        token: req.cookies.token,
        user: req.user 
    });
});

module.exports = router;