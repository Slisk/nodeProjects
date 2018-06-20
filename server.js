// server.js

var restify = require('restify');

function respond(req, res, next) {
  res.send('Hello ' + req.param.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function(){
  console.log('Listenting at port: ', server.name, server.url);
});
