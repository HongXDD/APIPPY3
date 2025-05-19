const express = require('express');
const router = express.Router();

const quizController  = require('../controller/quiz.controller');


router.get('/quizzes',quizController.get);

router.get('/quizzes/:id',quizController.getById);

router.post('/quizzes', quizController.create);

router.put('/quizzes/:id',quizController.update);

router.delete('/quizzes/:id',quizController.delete);

module.exports = router;