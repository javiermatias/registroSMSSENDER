const path = require('path');
// Initialize express router
let router = require('express').Router();

var db = require('./db');

var htmlscript = require('./html');

//require('dotenv').config();

var enviarMail = require('./mailAPI');
var enviarGmail = require('./mailGmail');

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
  
});

router.get('/whatsapp-landing', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
  
});


/* router.post('/', function(req,res){
  setTimeout(function(){ res.send("hola") }, 10000);
}
) */

router.get('/test',function(req,res){
  enviarGmail.sendEmailSMS(req);
  res.send(200);
})

router.post('/sms', function (req, res) {
  var user = req.body.nombre.charAt(0) + req.body.apellido.trim() + 'demo';
  db.query('INSERT INTO cliente SET ?', req.body, function (error, result) {
    
    if (error) {
      res.send(500);
    } else {

      db.query("call sp_newSMSsenderPrueba(?,?)", [user, user], function (err, result) {
        if (err) {

          res.send(500);
        } else {
          enviarMail.sendEmail(req); //send via novanok
          //enviarGmail.sendEmailSMS(req);
          //res.send(htmlscript.devolverHTML(user));
          res.status(200).json({user})
          console.log("se realizo correctamente el user")

        }

      });


    }
  });

 

});




router.post('/whatsapp', function (req, res) {
  var user = req.body.nombre.charAt(0) + req.body.apellido.trim() + 'demo';
  db.query('INSERT INTO cliente SET ?', req.body, function (error, result) {
    
    if (error) {
      res.send(500);
    } else {

      db.query("call sp_newUserWhatsPrueba(?,?)", [user, user], function (err, result) {
        if (err) {

          res.send(500);
        } else {
          enviarMail.sendEmailWhats(req);
          //enviarGmail.sendEmailWhats(req);
          //res.send(htmlscript.devolverHTML(user));
          res.status(200).json({user})
          console.log("se realizo correctamente el user")

        }

      });


    }
  });

 

});















router.get('/sms', function (req, res) {

  res.status(200).json({status:"ok"})

});


router.post('/', function (req, res) {

  var user = req.body.nombre.charAt(0) + req.body.apellido.trim()  + 'demo';

  console.log(user);
  db.query('INSERT INTO cliente SET ?', req.body, function (error, result) {
    if (error) {
      res.send('hubo un error al procesar la petición, intente nuevamente');
    } else {

      db.query("call sp_newSMSsenderPrueba(?,?)", [user, user], function (err, result) {
        if (err) {

          res.send('hubo un error maquina');
        } else {


          enviarMail.sendEmail(req);
          res.send(htmlscript.devolverHTML(user));
          console.log("se realizo correctamente el user")

          ///////////

          //curl -X POST -H "Content-Type: application/json" -d '{"from": "info@novanok.com", "to": "marcosdonalisio@gmail.com", "subject": "Hola", "body": "Prueba de envio", "webhook": "emoji"}' http://34.94.120.97:5000/api/message/email --verbose



        
          ///////// 
        }

      });


    }
  });






});











module.exports = router;