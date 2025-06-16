const express = require('express');
const router = express.Router();

const detailcourse = require('../controller/detailcourse.controller');

router.get('/detailcourse/:id',detailcourse.getById)

module.exports = router;
