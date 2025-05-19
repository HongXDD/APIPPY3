const express = require('express');
const router = express.Router();

const coursesController = require('../controller/course.controller');

router.get('/courses', coursesController.get);
router.get('/courses/:id', coursesController.getById);
router.post('/courses', coursesController.create);

module.exports = router;