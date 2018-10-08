let sqlDB = require('mssql');
let DBsettings = require('settings').dbConfig;


exports.executeSql = function(sql, callback){

  let conn = new sqlDB.connection(DBsettings);
  conn.connect()
    .then(()=>{
      let req = new sqlDB.Request(conn);
      req.query(sql)
        .then((recordSet)=>{
          callback(recordSet);
        })
        .catch((err)=>{
          console.log(err);
        })
    })
    .catch((err)=>{
      console.log('An error occurred', err);
      callback(null, err);
    })

};
