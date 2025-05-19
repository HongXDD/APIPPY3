const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/users', userController.get); 

router.get('/users/:id', userController.getByid);

router.post('/users', userController.create);

router.put('/users/:id',userController.update);

router.delete('/users/:id',userController.delete);

module.exports = router;


