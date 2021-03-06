// Carga Libreria Express
let express = require('express');

const path = require('path');

require('dotenv').config();

// Import Body parser
let bodyParser = require('body-parser');



var cors = require('cors');

// Initialize the app
let app = express();

// use it before all route definitions
app.use(cors());

let api = require("./api")


app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

 

 console.log(process.env.PORT);
 
// Setup server port
var port = process.env.PORT || 8080;

// Launch app to listen to specified port
// Import routes
app.use(express.static('./dist/'));
app.use(express.static('./faqs/'));
/* app.use('*', (req, res, next) => {
     res.sendFile(path.join(__dirname, './dist/'));
 }); */

app.use('/', api);
//app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Se levanto la app en el puerto" + port);
});

