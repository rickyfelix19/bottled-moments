/****************************************************************************
  TEMPLATE FOR P5JS INTERFACE TO COMMUNICATE WITH RESOLUME VIA OSC MESSAGES

  Author: Luke Hespanhol
  Date: April 2022
*****************************************************************************/
////////////////////////////////////////////////////////
//FIXED SECTION - START: DO NOT CHANGE THESE VARIABLES
////////////////////////////////////////////////////////
/*
	Disabling canvas scroll for better experience on mobile interfce.
	Source: 
		User 'soanvig', answer posted on Jul 20 '17 at 18:23.
		https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element 
*/
document.addEventListener('touchstart', function(e) {
    document.documentElement.style.overflow = 'hidden';
});

document.addEventListener('touchend', function(e) {
    document.documentElement.style.overflow = 'auto';
});


// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
var socket;
let userSessionId;
////////////////////////////////////////////////////////
//FIXED SECTION - END: DO NOT CHANGE THESE VARIABLES
////////////////////////////////////////////////////////


////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - BEGIN: ENTER OUR CODE HERE
////////////////////////////////////////////////////
let timelinePos = 0; // this is a decimal number between 0 and 1
let oldTimelinePos;

let quarterPoint;
let halfPoint;
let threeQuarterPoint;
let sliderDimension;

let lastFrameCountUpdate;
let updateRateInFrames = 5;

// NUMBER OF USERS POLL: Variables
let lastTimeNumberOfUsersPolled;
let intervalToPollNumberOfUsers = 5000;
let currentNumberOfUsers = 1;


///////////////////////////////////////////
// SETUP FUNCTION
///////////////////////////////////////////
function setup() {
	createCanvas(windowWidth, windowHeight);

	// NUMBER OF USERS POLL: Initialise
	userSessionId = int(random(100000));
	lastTimeNumberOfUsersPolled = millis();
	setupNumberOfUsersPoll();

	font = loadFont('/static/assets/SourceSansPro-Regular.otf');
  textSize(35);
}


///////////////////////////////////////////
// DRAW FUNCTION
///////////////////////////////////////////
function draw() {
	background(205, 185, 150);

	// NUMBER OF USERS POLL: Update
	if ((millis() - lastTimeNumberOfUsersPolled) > intervalToPollNumberOfUsers) {
		lastTimeNumberOfUsersPolled = millis();
		getNumberOfUsers();
	}

	textAlign(CENTER);
	text(currentNumberOfUsers, 0.5*windowWidth, 0.5*windowHeight);
}

////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - END: ENTER OUR CODE HERE
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// NUMBER OF USERS POLL: Functions
////////////////////////////////////////////////////
function setupNumberOfUsersPoll() {
	socket = io.connect(HOST);
	socket.on('numberOfUsers', updateNumberOfUsers);
}

function updateNumberOfUsers(numberOfUsers) {
	currentNumberOfUsers = numberOfUsers;
}

function getNumberOfUsers() {
	let postData = JSON.stringify({ 'id': userSessionId });

	xmlHttpRequest.open("POST", HOST + '/getNumberOfUsers', false);
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
	xmlHttpRequest.send(postData);
}

/***********************************************************************
  === PLEASE DO NOT CHANGE OR DELETE THIS SECTION ===
  This function sends a OSC message to server

  Parameters:
  	- address: the OSC message address pattern string
  	- value: single value as message payload
  	- type: type of the value passed as message payload
***********************************************************************/
function sendMessage(address, value, type) {
	let postData = JSON.stringify({ id: 1, 'address': address,
                  'value': value,
                  'type': type });

	xmlHttpRequest.open("POST", HOST + '/sendMessage', false);
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
	xmlHttpRequest.send(postData);
}

