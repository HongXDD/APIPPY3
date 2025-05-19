const express = require('express');
const router = express.Router();
const student_lessonController = require('../controller/student_lesson.controller');

router.get('/student_lessons', student_lessonController.get);

router.get('/student_lessons/:id',student_lessonController.getById);

router.post('/student_lessons',student_lessonController.create);

router.put('/student_lessons/:id',student_lessonController.update);

router.delete('/student_lessons/:id',student_lessonController.delete); 

module.exports = router;