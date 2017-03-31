var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var Twitter = require('twit');

const T = new Twitter({
    consumer_key: 'ZYo3KjfE00026JwA8Wrt0oj2G',
    consumer_secret: 'QaqZl4gczZGrVLVHPMGVkZUCZOUYVaM5VKjZzqnrL13GyW3zEX',
    access_token: '2241868928-qLI249NTVeyIthQ1XQRIHCyFjzjWDt6q7O1k4bb',
    access_token_secret: 'zPxG86Tb3izGgsOOvNqIxgGSUNQLAVFApcGG8SHAOTEzd',
    timeout_ms: 60*1000
});

// T.get('search/tweets', { q: 'I want shoes' }, function(err, data, response) {
    // console.log('data: ', data)
// })


T.get('statuses/user_timeline',
    { screen_name: 'megatricycle', count: 200  }, 
    function (err, data, response) {
    // console.log(data.text);
    console.log(data.map(x => x.text));
})
// })
// var stream = T.stream('statuses/filter', { track: 'play'  })

// stream.on('tweet', function (tweet) {
    // console.log(tweet.text);

// })


// T.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response) {
    // if (!error) {
        // console.log(tweet);
    // }
    // else {
        // console.error(error)
    // }
// });

module.exports = app;
