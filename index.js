// At the top of our file we declare variables
// for all of the packages we're going to use
// in the file. For this example, we'll only need
// be using a single package called 'express'.
// We `require('express')` and save the results
// in an appropriately named variable.

var express = require('express');

// Next we declare a variable that instantiates
// the express server. Common names for this
// variable include `app` or `server`. We're
// going to call it `app` because that's what
// they do in the express documentation.

var app = express();

// Now that we have an app to build off of,
// we should set up some routes.

// The pattern for setting up routes in express is as follows
// 
// app . HTTP-VERB ( '/ROUTE/PATH/DELIMITED/BY/SLASHES' , function(req,res) { // DO STUFF HERE // });


// Our first route will be `GET /` which will respond
// with "Hello World" for every request that
// comes in to your server.

app.get('/', function(req,res) {

  // Send back the response 'Hello World'

  res.send("Hello World");
});

//Add a new route GET /hey that sends back an html string that has an h1 tag that says 'Hey! Look at me!' and a p tag that says 'I made a server!'.
app.get('/hey', function(req,res) {

	res.send('<h1>Hey! Look at me!</h1><p>I made a server!</p>')
});

//Add a new route GET /hi/YOURNAME that sends back an html string that has an h1 tag that says 'Hi, I'm YOURNAME'. Do this for each member of your group.

app.get('/hi/:name', function(req,res) {
	res.send("<h1>Hi, I'm "+ req.params.name + "</h1>");
});

//Add a route GET /add/:x/:y that sends back the result of x + y. For example, a request to GET /add/1/5 would send back 6.
app.get('/hi/:x/:y', function(req,res) {
	res.send("<h1>"+ (Number(req.params.x)+Number(req.params.y))+"</h1>")
})

//Subtraction
app.get('/s/:x/:y', function(req,res) {
	res.send("<h1>"+ (Number(req.params.x)-Number(req.params.y))+"</h1>")
})

//Multiplication
app.get('/m/:x/:y', function(req,res) {
	res.send("<h1>"+ (Number(req.params.x)*Number(req.params.y))+"</h1>")
})

//Division
app.get('/d/:x/:y', function(req,res) {
	res.send("<h1>"+ (Number(req.params.x)/Number(req.params.y))+"</h1>")
})


// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);