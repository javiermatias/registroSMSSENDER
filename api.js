const path = require('path');
// Initialize express router
let router = require('express').Router();

var db = require('./db');

var htmlscript = require('./html');

var registroController = require('./registroController');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });


/* router.post('/', function(req,res){
  setTimeout(function(){ res.send("hola") }, 10000);
}
) */

  router.post('/', function(req,res){

      var user = req.body.nombre.charAt(0) +  req.body.apellido + 'demo';
      
       console.log(user);
      db.query('INSERT INTO cliente SET ?', req.body ,function(error, result){
        if(error){
          res.send('hubo un error al procesar la petición, intente nuevamente');
        }else{
  
           db.query("call sp_newSMSsenderPrueba(?,?)", [user, user], function (err, result) {
            if (err) {
              
              res.send('hubo un error maquina');
            } else {
                //console.log("results:", result);
                //res.send(`Full name is:${user} ${user} ${req.body.email}. `);html
                res.send(htmlscript.devolverHTML(user));
            }
        
        });
  
       
        }
     });
  
  
  
  
  
  
    });











  module.exports = router;