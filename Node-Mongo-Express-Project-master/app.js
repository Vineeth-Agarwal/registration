var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var registration = require('./routes/registration');

var port=3000;
//Try to have db connectivity related stuff in config folder and database file as below. Just uncomment below one line and remove all the db logic from here if you want to use as I suggested from config folder.
// require("./config/database")
mongoose.Promise = global.Promise;

// For now, the error is in your below link. It should be copied from Mongo Atlas. I have put my link and the connection was successful.

// mongoose.connect('mongodb://localhost/usersdb')
mongoose.connect('mongodb+srv://vineeth:fAzlIxXTBGrEHUBD@cluster0-zlyhn.mongodb.net/test?retryWrites=true')
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/Register', registration);

app.listen(port, () => {
    console.log("Server listening on port " + port);
  });

module.exports = app;