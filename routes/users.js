const express = require('express');
const router = express.Router();



//Register
router.get('/register', function(req, res, next){ //
    res.send('REGISTER'); // www.xxx.com/users/register

});

router.get('/authenticate', function(req, res, next){
    res.send('Authenticate');
});

router.get('/profile', function(req, res, next){
    res.send('Profile');
});

//Checking when logging if the token matches
router.get('/validate', function(req, res, next){
    res.send('Validate'); //will just before going to Profile and right after Authenticate
});

module.exports = router;