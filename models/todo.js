/*
 The Actual Todo Model
*/

// Import Mongoose
const mongoose = require('mongoose');


// Create a schema for todos
const todoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : 'You have to provide a name for your todo'
    },
    completed : {
        type : Boolean,
        default : false
    },
    created_date : {
        type : Date,
        default : Date.now()
    }
});

// Create the model
const Todo = mongoose.model('Todo',todoSchema);

// Export the model
module.exports = Todo;