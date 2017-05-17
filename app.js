const express = require('express'); 
const path = require('path') 
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/users', users); 
// if we have www.xxx.com/users/moshe then moshe will go to users

app.listen(port, function(){
    console.log('Server started on port ' + port);
//npm install -g nodemon - export PATH=${PATH}:/Users/tal/.node/bin/

app.get('/', function(req, res){
    res.send('Invalid Endpoint');
})


});



