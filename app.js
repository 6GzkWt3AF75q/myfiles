//let's bring all the modules we want - importing all the depancies 
const express = require('express'); 
const path = require('path') //it's a default module so we don't need to install it
const bodyParser = require("body-parser");
const cors = require('cors'); 
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database.js')


mongoose.connect(config.database); //location of the place from config values


mongoose.connection.on("connected", () => {
    console.log('Connected to DB ' + config.database )
});

mongoose.connection.on("error", (err) => {
    console.log('DB error '+ err )
});


const app = express(); //intialize app var with express - 

const users = require('./routes/users'); // setting a route to users 

//Port Number 
const port = 3000; 

app.use(cors()); // after importing it we will set it like this
// we accepting a request from user, and we will accept them only if they are following few guidelines
//is used many times for font so you can know what's coming to you after your request

// Set static Folder
app.use(express.static(path.join(__dirname, 'public'))); //we can call it client too

app.use(bodyParser.json()); //enabling after importing - grabbing data from any form submited 

app.use('/users', users); //routring - when user clicks www.xxx.com/users/ its routing to users
// if we have www.xxx.com/users/moshe then moshe will go to users

//listening to a port and start our parser
app.listen(port, function(){ 
    console.log('Server started on port ' + port);
//npm install -g nodemon - export PATH=${PATH}:/Users/tal/.node/bin/

//setting the first route to home page 
app.get('/', function(req, res){ //for now we going to use localhost:3000 and point to homepage
    res.send('Invalid Endpoint');
    //now we can see invalid point text when we getting to / folder
})


});



