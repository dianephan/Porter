  /* TODO: 
  /  https://www.youtube.com/watch?v=BWaTYiTbv7Q
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true}));

// test route
app.get('/', function(req, res) {res.status(200).send('Changing more test for testing');});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.post('/test', function(req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text: 'Henlo ' + userName + ', welcome to the begining of the app!'
  };
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});