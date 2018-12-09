/*
 RESTfull routes for the API
*/

const express = require('express');
const router = express.Router();
const db = require('../models');
const todos = require('../helpers/todos')


router.get('/', (req,res) => todos.get(req,res));

router.post('/', (req,res) => todos.create(req,res));

router.get('/:todoId', (req,res) => todos.getSingle(req,res));

router.put('/:todoId',(req,res) => todos.update(req,res));

router.delete('/:todoId', (req,res) => todos.delete(req,res))



module.exports = router;