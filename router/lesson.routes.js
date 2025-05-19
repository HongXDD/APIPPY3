const express = require('express');
const router = express.Router();

const lessonController = require('../controller/lesson.controller');


router.get('/lessons', lessonController.get);
router.get('/lessons/:id',lessonController.getByid);
router.post('/lessons',lessonController.post);
router.put('/lessons/:id',lessonController.update);
router.delete('/lessons/:id',lessonController.delete);
module.exports = router;

