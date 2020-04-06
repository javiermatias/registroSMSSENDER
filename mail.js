
var nodemailer = require('nodemailer');

require('dotenv').config();

exports.sendEmail = function(req){


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.userMail,
    pass: process.env.passMail
  }
});

var mailOptions = {
  from: process.env.fromMail,
  to: process.env.toMail,
  subject: `${req.body.nombre}  ${req.body.apellido}  ${req.body.email}  `,
  text: 'Un nuevo Cliente!'
};



transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
