const express = require('express');
const router = express.Router();


const chaptersController = require('../controller//chapter.controller');

router.get('/chapters', chaptersController.get);

router.get('/chapters/:id', chaptersController.getById);

router.post('/chapters', chaptersController.create);

router.put('/chapters/:id', chaptersController.update);

router.delete('/chapters/:id', chaptersController.delete);



module.exports = router;
