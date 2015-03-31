// Use require to get access to the Node
// http library and store it in a variable.
var http = require("http");

// Define a function doStuff that take in two
// parameters, one for the request called req,
// and one for the response called res.

var doStuff = function(req, res) {

  // Writes the Head of the response with status
  // code 200, specifying that the request is OK,
  // and the body of the response will be given
  // in plain text

  res.writeHead(200, {"Content-Type": "html"});

  // Writes the body of the response with the content
  // 'Hello World'

  res.write("<h1>Hello World</h1>");

  // Send the response back

  res.end();
};

// Creates a server with the doStuff function
// that will respond to requests and send responses
// as specified.

var server = http.createServer(doStuff);

// Tell the server to start listening for request on
// port 3000

server.listen(3000);
