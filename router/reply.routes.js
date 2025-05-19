const express = require('express');
const router = express.Router();

const repliesController = require('../controller/reply.controller');

router.get('/replies',repliesController.get);

router.get('/replies/:id',repliesController.getById);

router.post('/replies', repliesController.create);

router.put('/replies/:id', repliesController.update);

router.delete('/replies/:id', repliesController.delete);

module.exports = router;