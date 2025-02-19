var createError = require('http-errors'); //Importo la libreria per la gestione degli errori 
var express = require('express');
var router = express.Router();
const app = express();
var country = require('countryjs');

// error handler 
app.use(function(err, req, res, next) { 
  // set locals, only providing error in development 
  res.locals.message = err.message; 
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 
  // render the error page 
  res.status(err.status || 500); 
  res.render('error'); 
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pages/:state/', function(req, res, next) { 
    //Se countryjs non trova il codice state allora ritorna una variabile undefined. //In questo caso richiamiamo la funzione next che passa l'errore al gestore degli errori //Il gestore degli errori è stato definito nell'app.js 
    if (typeof country.info(req.params.state) === "undefined") { 
    return next(createError(422, 'OOPS! State not found')); 
    } 
    else 
    { 
      res.render('state', {state: country.info(req.params.state)}); //Rendiamo lo stato un parametro 
      }
  });
module.exports = router;
