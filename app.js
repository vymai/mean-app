// Importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in database connection: ' + err);
    }
});

const port = 3000;

// Adding Middleware - Cors
app.use(cors());

// Body - Parser
app.use(bodyparser.json());

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