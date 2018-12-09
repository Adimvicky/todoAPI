/*
Database Stuff - Connecting to mongodb and setting some config
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-api');

mongoose.set('debug',true);

mongoose.Promise = Promise;

// Export the Todo model from this index, so other files can just require the 'models' folder
module.exports.Todo = require('./todo');
