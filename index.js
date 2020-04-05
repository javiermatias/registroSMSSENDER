// Carga Libreria Express
let express = require('express')

require('dotenv').config();

// Import Body parser
let bodyParser = require('body-parser');

var cors = require('cors');

// Initialize the app
let app = express();

// use it before all route definitions
app.use(cors());

let api = require("./api")

let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

 console.log(process.env.PORT);
 
// Setup server port
var port = process.env.PORT || 8080;

// Launch app to listen to specified port
// Import routes
app.use('/', api);
//app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Se levanto la app en el puerto" + port);
});

