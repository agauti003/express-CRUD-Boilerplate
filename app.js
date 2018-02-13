/*@author aditya gautam
after taking git pull of this application just do npm install,
  and it will install all the dependencies required for sample CRUD application,
  defined in the package.json file

  The mysql cofiguration is in the connection.js file please add your msql configuration and you are good to go
*/ 

var express 	   = require('express'),
    path 		     = require('path'),
    favicon 	   = require('serve-favicon'),
    logger 		   = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser 	 = require('body-parser'),
    app 		     = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/* @ author aditya gautam 
creating routes for api crud application 
when you make a get or post request it searches for this host/route and maps it to the requested 
route eg:- localhost:5000/ on get request search for router function with no params in rotes/index.js i.e router.get('/')
and acordingly it will executed with the decision logic.

the sample CRUD application logic lies on router.index.js file.
*/
var index = require('./routes/index');
app.use('/', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* @author aditya gautam the below function starts the node server on 5000 port number
  you can change the port and assign it your chosen value just alter the value in app.listen 
  and then run nodejs app.js it will start the server on that defined port 
  use http://host:port_no/ for get or post request
*/
app.listen(5000, function(){
    console.log("Worm hole opened in dimension 5000, now go change the world! `_` ");
});
module.exports = app;
