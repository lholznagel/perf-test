var restify = require('restify');

var server = restify.createServer();

server.get('/', function (req, res, next) {
  res.send("Hello world!");
  return next();
});

server.listen(5002);
