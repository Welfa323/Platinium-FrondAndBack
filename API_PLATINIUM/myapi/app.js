var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsletterRouter = require('./routes/newsletter')
var messagerieRouter = require('./routes/messagerie')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(
  {
    origin : '*',
    methods: ['GET','DELETE','UPDATE','PUT','PATCH','OPTIONS'],
  }
))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/messagerie', messagerieRouter)



mongoose.connect('mongodb://localhost:27017/NewsletterPlatinum', () => {
  console.log('Database is connected');
})
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
