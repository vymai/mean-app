// Importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

const port = 3000;

// Adding Middleware - Cors
app.user(cors());

// Body - Parser
app.user(bodyparser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', route);

// Testing Server
app.get('/', (req, res) => {
    res.send('foobar');
})

app.listen(port, () => {
    console.log('Server started at port: ' + port);
})