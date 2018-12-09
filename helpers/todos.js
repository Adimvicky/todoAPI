/*
 Helper Functions providing Basic CRUD functionality on our mongoDB Database
*/

// Model
const db = require('../models');

// Container for the functions
const todos = {};

// Read (get) all todo
todos.get = function(req,res){
        db.Todo.find().then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({Error : err})
        })
}

// Create A todo
todos.create = function(req,res){
    db.Todo.create(req.body)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.send(err);
    })
}

// Read a single Todo
todos.getSingle = function(req,res){
    db.Todo.findById(req.params.todoId)
    .then(todo => {
        res.json(todo)
    })
    .catch(err => {
        res.send(err);
    })
}


// Update a todo
todos.update = function(req,res){
    db.Todo.findOneAndUpdate({_id : req.params.todoId},req.body,{new : true})
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.send(err);
    })
}


// Delete a todo
todos.delete = function(req,res){
    db.Todo.remove({_id : req.params.todoId})
    .then(() => {
        res.json({'Message' : `Todo deleted`})
    })
    .catch(err => {
        res.send(err);
    })
}

// Export the container object
module.exports = todos;