// Here we require/import the HTTP module
var http = require("http");

// ===========================================================================

// Here we define ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

//===================================================================

// Here we create two generic functions to handle requests and responses
function handleRequestOne(request, response) {
  // The below statement is triggered (client-side) when the user visits the PORT URL
  //response.end("You're a JavaScript mastermind!");
  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequestTwo(request, response) {
    response.end("You smell.");
}

// =======================================================================
// Here we use the Node HTTP package to create our two servers.
// We then pass it the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);
// Here we start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {
  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});