const express = require('express');
const router = express.Router();

const quiz_questionController = require('../controller/quiz_question.controller');

router.get('/quiz_questions',quiz_questionController.get);

router.get('/quiz_questions/:id',quiz_questionController.getById);

router.post('/quiz_questions',quiz_questionController.create);

router.put('/quiz_questions/:id',quiz_questionController.update);

router.delete('/quiz_questions/:id',quiz_questionController.delete);

module.exports = router;