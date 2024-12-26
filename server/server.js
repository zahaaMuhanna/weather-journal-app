// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;
// Callback to debug
const server = app.listen(port, listening);

function listening(){
 console.log(`server running on localhost: ${port}`);
}


// GET route
app.get('/all', sendData);

function sendData (req, res) {
 res.send(projectData);
}

// POST route
app.post('/add', addData);

function addData (req, res){
 projectData['temp'] = req.body.temp;
 projectData['date'] = req.body.date;
 projectData['feel'] = req.body.feel;
 res.send(projectData);
}