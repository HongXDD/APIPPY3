const express = require('express');
const router = express.Router();

const quiz_questionController = require('../controller/quiz_question.controller');

router.get('/quiz_questions',quiz_questionController.get);

router.get('/quiz_questions/:id',quiz_questionController.getById);

router.get('/quiz_questions/option/:id',quiz_questionController.getByqueizId);

router.post('/quiz_questions',quiz_questionController.create);

router.put('/quiz_questions/:id',quiz_questionController.update);

router.delete('/quiz_questions/:id',quiz_questionController.delete);

router.get('/course/chapter/lesson/quiz/quizquest/:id',quiz_questionController.getByqueizId);

module.exports = router;