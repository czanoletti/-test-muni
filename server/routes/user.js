var express = require('express');
var router = express.Router();
let { poolConnection, sql } = require('../db');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a user');
});

router.post('/user', ()=>{



});




module.exports = router;
