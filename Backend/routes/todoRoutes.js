const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const summarizeService = require('../services/summarizeService');

router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.addTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.post('/summarize', summarizeService.summarizeAndSend);

module.exports = router;
