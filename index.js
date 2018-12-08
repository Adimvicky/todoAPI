/*
Primary File for the API
*/

// Require (import) Dependencies
const express = require('express');
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

// Creating an Instance of the Express app
const app = express();

// Port - ( Can be changed to preferred on your localhost or server)
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Routes
app.use('/api/todos',todoRoutes);


app.listen(port,() => {
    console.log(`The todo API is ready to CRUD todos on port ${port} ☺`);
})
