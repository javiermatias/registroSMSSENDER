let fetch = require('node-fetch');

require('dotenv').config();

exports.sendEmail = function(req){

    fetch('http://34.94.120.97:5000/api/message/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{"from": "info@novanok.com", "to": "${process.env.toMail}", "subject": 
    "${req.body.nombre}  ${req.body.apellido}  ${req.body.email}", 
    "body": "Un nuevo Cliente!", "webhook": "emoji"}`
  }).then(response => {
    console.log( response);
  }).catch(err => { console.log(err); });

}

