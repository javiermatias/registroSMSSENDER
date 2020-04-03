// Initialize express router
let router = require('express').Router();
//const path = require('path');

 // Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Funcionando Ok',
        message: 'Bienvenido a la votacion!'
    });
}); 

/* router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  }); */


var gastosController = require('./gastosController');

// Contact routes
router.route('/gastos')
    .get(gastosController.get)
    .post(gastosController.post);
    

    router.route('/gastosParcial')
    .get(gastosController.getParcial)
  

module.exports = router;