// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var date = new Date();
  response.end("Hello World and the time is: "+date);
});

// Listen on port 8002, IP defaults to 127.0.0.1
server.listen(8002);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8002/");// Load the http module to create an http server.

