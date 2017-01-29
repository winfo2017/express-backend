var express = require('express')
var app = express()
var fs = require('fs');
var util = require('util');

var users;
fs.readFile('file', 'utf8', function (err, data) {
  if (err) throw err;
  users = JSON.parse(data);
});

// var log_file = fs.createWriteStream('tests.log', {flags : 'w'});
// var log_stdout = process.stdout;

// return a user in the users object
app.get('/users/:userId', function (req, res) {
    return users[req.params.userId];
    //res.send(req.params)
})

function getUser(){

}

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});

