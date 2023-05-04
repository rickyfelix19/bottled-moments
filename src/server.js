// Port for the Express web server
var WEB_SERVER_PORT = 3000;
var OSC_PORT_IN = 12000;


// Import Express and initialise the web server
var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var server = app.listen(WEB_SERVER_PORT);
app.use(express.static('public'));
console.log('Node.js Express server running on port ' + WEB_SERVER_PORT);

// Import and configure body-parser for Express
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Import socket.io and create a socket to talk to the client
var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('*** New connection to server web socket ' + socket.id);
}


// Create an osc.js UDP Port listening on port 57121.
// Credit: https://www.npmjs.com/package/osc
var osc = require("osc");
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: OSC_PORT_IN,
    metadata: true
});

// Listen for incoming OSC messages.
udpPort.on("message", function (oscMsg, timeTag, info) {
    // console.log("An OSC message just arrived!", oscMsg);
    // console.log("Remote info is: ", info);
    io.sockets.emit('oscMessage', oscMsg);
});

// Open the socket.
udpPort.open();
