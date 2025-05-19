const express = require('express');
const router = express.Router();
const enrolmentController = require('../controller/enrollment.controller');




router.get('/enrolments',enrolmentController.get);

router.get('/enrolments/:id',enrolmentController.getById);

router.post('/enrolments',enrolmentController.create);

router.put('/enrolments/:id',enrolmentController.update);

router.delete('/enrolments/:id',enrolmentController.delete);

module.exports = router;