var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var db = require('./db/dbConfig');


app.use(session({
  secret: 'secretkeyforthepoplartree',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(morgan('dev'));
app.use(bodyParser.json());






app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/../client'));

require('./config/passport.js')(passport);
require('./App/routes.js')(app, express, passport);

// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Oops! Something broke on our end. Please refresh');
});

var port = process.env.PORT || 4568; 
app.listen(port);
console.log('app is listening on port: ', port);