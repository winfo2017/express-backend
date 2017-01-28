var express = require('express');
var app = express();


var test = {
    name: 'George',
    likes: 'cats',
    'test': 'DUEUEUEUE'
}
app.get('/', function(req, res){
    res.send(test);
});

app.listen(3000);

