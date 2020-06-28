
var nodemailer = require('nodemailer');

require('dotenv').config();

exports.sendEmailSMS = function(req){


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,    //<<here   
    auth: {
    user: process.env.userMail1,
    pass: process.env.passMail1
  }
});

var mailOptionsSMS = {
  from: process.env.fromMail1,
  to: process.env.toMail1,
  subject: `${req.body.nombre}  ${req.body.apellido}  ${req.body.email}  `,
  text: 'Un nuevo Cliente SMS!'
};



transporter.sendMail(mailOptionsSMS, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });



}




exports.sendEmailWhats = function(req){


  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,    //<<here 
      auth: {
      user: process.env.userMail1,
      pass: process.env.passMail1
    }
  });
  
  
  var mailOptionsWhats = {
    from: process.env.fromMail1,
    to: process.env.toMail1,
    subject: `${req.body.nombre}  ${req.body.apellido}  ${req.body.email}  `,
    text: 'Un nuevo Cliente WhatsAPP!'
  };
  
  
    transporter.sendMailWhats(mailOptionsWhats, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
  }