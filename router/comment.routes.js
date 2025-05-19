const express = require('express');
const router = express.Router();


const commentsController = require('../controller/comment.controller');


router.get('/comments', commentsController.get);

router.get('/comments/:id',commentsController.getById); 

router.post('/comments',commentsController.create);

router.put('/comments/:id', commentsController.update);

router.delete('/comments/:id', commentsController.delete);


module.exports = router;

