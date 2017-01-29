var express = require('express');
var app = express();
var fs = require("fs");
var content = fs.readFileSync("./fake.json");
var jsonContent = JSON.parse(content);
//console.log(jsonContent.users);




fs.readFile('./fake.json', function (err, data) {
	if (err) return console.error(err);
	var content = JSON.parse(data);
	var users = content.users;
	var interest = "soccer";
	var list = [];
	for (var userID in users) {
		var user = users[userID];
		var userInterests = user.interest;
		for (var interest2 in userInterests) {
			console.log(interest2.toString());
			if (interest2 == interest) {

				list.push(user.name);
			}
		}
	}
	console.log(list);
   //console.log(user);
});




/*
app.get('./fake.json', function (req, res) {
   fs.readFile("./" + "fake.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
*/