var db = require('./db');




exports.get = async function (req,res) {




    var banderaOK=false;
    console.log ("hola" + req.body.nombre);
    
    db.query('INSERT INTO cliente SET ?', req.body ,function(error, result){
      if(error){
          console.log(error);
          this.banderaOK=false;
      }else{

         db.query("call sp_newSMSsenderPrueba(?,?)", ['prueba', 'prueba1'], function (err, result) {
          if (err) {
            
              console.log("err:", err);
              this.banderaOK=false;
          } else {
              console.log("results:", result);
              this.banderaOK=true;
             console.log(this.banderaOK);
          }
      
      });

      this.banderaOK=true;
      }
   });
    
  
  console.log(this.banderaOK);
return banderaOK;
    
  


}





  