var express = require('express');
var departamento_empleadoRoute = express.Router();
let connection = require('../config/db');
let routeString = 'departamentoEmpleados';


departamento_empleadoRoute.get(`/${routeString}`, function(req, res, next) {
  connection.query('SELECT * FROM news', (err, result)=>{
    if(err) throw err;

    res.send(JSON.stringify(result));


  });
});

/* parameters */
departamento_empleadoRoute.get(`/${routeString}/:id`, function(req, res, next) {
  console.log(req.params);
  console.log(req.params.id);
  connection.query({
    sql: 'SELECT title, news FROM `news` WHERE `id_news` = ?',
    timeout: 40000, // 40s
    values: [req.params.id]
  }, function (error, results, fields) {
    if(error) throw error;
    res.send(JSON.stringify(results));
  });

});


departamento_empleadoRoute.post(`/${routeString}`, (req, res)=>{
  console.log(req.body);
  const {title, news} = req.body;
  connection.query('INSERT INTO news SET ?',
    {
      title, news
    },
    (err, result)=>{
      res.send('info gotten: ' + JSON.stringify(result))
    })
});


departamento_empleadoRoute.put(`/${routeString}/:id`, (req, res)=>{
  console.log(req.body);
  const {title, news} = req.body;
  connection.query('UPDATE news SET ? WHERE id_news = ?',
    [
      {title, news},
      req.params.id
    ]
    ,
    (err, result)=>{
      if(err) throw err;
      res.send('info updated: ' + JSON.stringify(result))
    })
});



/* parameters */
departamento_empleadoRoute.delete(`/${routeString}/:id`, function(req, res, next) {
  console.log(req.params);
  console.log(req.params.id);
  connection.query({
    sql: 'DELETE FROM news WHERE `id_news` = ?',
    timeout: 40000, // 40s
    values: [req.params.id]
  }, function (error, results, fields) {
    if(error) throw error;
    res.send(JSON.stringify(results.affectedRows));
  });

});




module.exports = departamento_empleadoRoute;
