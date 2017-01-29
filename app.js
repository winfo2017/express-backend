var express = require('express')
var app = express()
var fs = require('fs');
var util = require('util');

var users;
fs.readFile('fake.json', 'utf8', function (err, data) {
  if (err) throw err;
  users = JSON.parse(data);
});

// var log_file = fs.createWriteStream('tests.log', {flags : 'w'});
// var log_stdout = process.stdout;

// return a user in the users object
app.get('/users/:userId', function (req, res) {
    res.send(users.users[req.params.userId]);
    //res.send(req.params)
})

// get a list of all the users previous matches
app.get('/users/:userId/matches/', function(req, res){
    // find all the matches for a user and return as an array
    var matches = users.users[req.params.userId]['matches'];
    var matchReturn = [];
    
    matches.forEach(function(match){
        matchReturn.push(users.users[match]);
    });
    res.send(matchReturn);
});

// get a list of new people to swipe on
app.get('/users/:userId/swipes', function(req, res){
    // get their matches so we can compare against to return non matched users
    var matches = users.users[req.params.userId]['matches'];
    var swipes = [];
    for(var key in users['users']){
        if(!matches.includes(key)){
            swipes.push(users.users[key])
        }
    }
    res.send(swipes);
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});

