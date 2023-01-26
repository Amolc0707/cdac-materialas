
var express = require('express');
var router = express.Router();

const database = {
  users:[
    {
      id:'123',
      username:'Amol',
      email:'amol@gmail.com'
    }
  ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(database.users);
});

module.exports = router;


