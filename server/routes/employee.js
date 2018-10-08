let db = require('../db');

exports.getList = function(req, resp){
  db.executeSql("SELECT * FROM emp", (data, err)=>{
    if(err){
      resp.writeHead(500, "internal error occurred", {""})
    }else{

    }
  });
};

exports.get = function(req, resp, empno){

};

exports.add = function(req, res, reqBody){

};

exports.update = function(req, resp, reqBody){

};

exports.delete = function(req, resp, reqBody){

};
