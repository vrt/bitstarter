var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
response.send(buffer.toString('utf-8'));
rs.});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
