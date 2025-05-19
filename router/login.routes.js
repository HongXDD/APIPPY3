const express = require('express');
const router = express.Router();

const userController = require('../controller/login.controller')

router.post('/login', userController.login);

module.exports = router;

