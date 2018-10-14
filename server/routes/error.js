var express = require('express');
var errorRoute = express.Router();


errorRoute.get(`/`, function(req, res, next) {

  res.send(JSON.stringify({error: "Error no encontrado."}));

});


module.exports = errorRoute;
