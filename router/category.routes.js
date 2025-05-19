const express = require('express');
const router = express.Router();
const { Category } = require('../model/category.model');

const categoriesController = require('../controller/category.controller');

router.get('/categories',categoriesController.get );

router.get('/categories/:id',categoriesController.getById);

router.post('/categories', categoriesController.create);

router.put('/categories/:id', categoriesController.update);

module.exports = router;


