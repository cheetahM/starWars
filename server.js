// The url library allows us to parse parts of the request url
var url = require("url");
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// start the server
server.listen(PORT, function() {
  console.log("Server Listening on http://localhost:%s", PORT);
});

// we need a function that handles requests and send the response
function handleRequest(req, res) {
  // Capturing the url the request is made to
  var urlParts = url.parse(req.url);

  // When we visit different urls, the swicth statement call on different functions

  switch(urlParts.pathname) {
    case "/":
      displayRoot(urlParts.pathname, req, res);
      break;
    case "/portfolio":
      displayPortfolio(urlParts.pathname, req, res);
      break;
    case "/edit":
      console.log("display edit");
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

function displayRoot(url, req, res) {
  // var myHTML = "<html>";
  // myHTML += "<body><h1>Home Page</h1>";
  // myHTML += "<a href='/portfolio'>Portfolio</a>";
  // myHTML += "</body></html>";

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    
    res.end(data);
  });
}


function displayPortfolio(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>My Portfolio</h1>";
  myHTML += "<a href='/'>Go Home</a>";
  myHTML += "<body></html>";

  res.writeHead(200, { "Content-Type" : "text/html" });
  res.end(myHTML);

}

// When we visit any path which is not specifically defined
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}