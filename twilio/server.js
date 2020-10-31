var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(
    "From: ",req.query.From,
    " Body: ",req.query.Body  
  )
  
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});