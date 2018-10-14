const mysql = require('mysql');


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '<sisifo2016>',
  database:'news_portal'
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


module.exports = connection;

// module.exports = ()=>{
//   return mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '<sisifo2016>',
//     database:'news_portal'
//   })
// };

