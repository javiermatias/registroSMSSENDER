var db = require('./db');


exports.get = function (req, res) {


db.query('SELECT * from gasto', function(error, result){
        if(error){
            res.json({
                status: "error",
                message: error,
            });
        }else{
            res.json(result);
        }
     }
  );

};

exports.getParcial = function (req, res) {


    db.query('SELECT personaPago, SUM(monto) AS monto FROM gasto GROUP BY personaPago', function(error, result){
            if(error){
                res.json({
                    status: "error",
                    message: error,
                });
            }else{
                res.json(result);
            }
         }
      );
    
    };




exports.post = function (req, res) {
    
    db.query('INSERT INTO gasto SET ?', req.body ,function(error, result){
            if(error){
                res.json({
                    status: "error",
                    message: error,
                });
            }else{
                res.json(result);
            }
         }
      );
    
    };