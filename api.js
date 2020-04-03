// Initialize express router
let router = require('express').Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

  router.post('/',function(req,res){
       res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
    //res.sendStatus(200);
  });