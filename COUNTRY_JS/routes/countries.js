var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');

router.get('/info/:state/', function(req, res, next){ //Rendiamo lo stato un parametro
    res.send(req.params);
})

module.exports = router;