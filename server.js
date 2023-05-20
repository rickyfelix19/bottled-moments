// Port for the Express web server
var PORT = 4040;

//SERVER VARIABLES
var userSessionIds = new Map();

// Import Express and initialise the web server
var express = require("express");
var app = express();
var server = app.listen(PORT);
// app.use(express.static("public"));
app.use(express.static("src"));
console.log("Node.js Express server running on port " + PORT);

// Import socket.io and create a socket to talk to the client
var socket = require("socket.io");
var io = socket(server);
io.sockets.on("connection", newSocketConnection);

function newSocketConnection(socket) {
  console.log("*** New connection to server web socket " + socket.id);
}

// Import and configure body-parser for Express
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
    Create an osc.js UDP Port listening on port 57121.
    Credit: https://www.npmjs.com/package/osc
    * this is outgoing address and port
*/
var osc = require("osc");
var udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 57121,
  metadata: true,
});

// Open the socket.
udpPort.open();

// Handle POST requests
app.post("/sendMessage", function (request, response) {
  var address = request.body.address;
  var value = request.body.value;
  var type = request.body.type;

  sendOSC(address, value, type);
  response.end("");
});

// // Handle POST requests about number of users
app.post("/getNumberOfUsers", function (request, response) {
  // Handle user sessions
  var userId = request.body.id;
  userSessionIds.set(userId, Date.now());
  io.sockets.emit("numberOfUsers", userSessionIds.size);

  response.end("");
});

setInterval(cleanUpOldUserSessions, 5000); // Periodically calls cleanUpOldUserSessions()

// // Cleans up any unused user sessions
function cleanUpOldUserSessions() {
  for (var userId of userSessionIds.keys()) {
    var userLastAccess = userSessionIds.get(userId) * 1.0;

    if (Date.now() - userLastAccess > 10000) {
      // After 10s of inactivity, remove reference to user
      userSessionIds.delete(userId);
    }
  }
}

// Handle POST requests about sending messages
app.post("/sendMessage", function (request, response) {
  var address = request.body.address;
  var value = request.body.value;
  var type = request.body.type;

  sendOSC(address, value, type);
  response.end("");
});

/*
    Send OSC messages
    * Incoming Port
   * 127.0.0.1 is localhost
*/
function sendOSC(address, value, type) {
  // console.log('OSC message sent: address: ' + address + ', value: ' + value);
  udpPort.send(
    {
      address: address,
      args: [
        {
          //                type: "f",
          type: type,
          value: value,
        },
      ],
    },
    "127.0.0.1",
    7000
  );
}
