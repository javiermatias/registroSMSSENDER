const mysql = require('mysql');
require('dotenv').config();

 // First you need to create a connection to the db
 const connection = mysql.createPool({
  connectionLimit : 10,
   host: process.env.host,
   user: process.env.user,
   password: process.env.password,   
  database: process.env.database
 });
 
 connection.getConnection((err) => {
   if(err){    
     console.log('Error connecting to Db');
	 console.log(err);
     return;
   }
   console.log('Connection established');
 });
 
/*  const connection = mysql.createPool({
  connectionLimit : 10,
   host: 'MYSQL5014.site4now.net',
   user: 'a34972_smart',
   password: '99.tutuca',   
  database: 'db_a34972_smart'
 }); */

 module.exports = connection;