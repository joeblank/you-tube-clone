var express = require('express');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');

var app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));




















var port = 8050;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
