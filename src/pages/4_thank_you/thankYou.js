////////////////////////////////////////////////////////
//FIXED SECTION - END: DO NOT CHANGE THESE VARIABLES
////////////////////////////////////////////////////////

// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
var socket;
let userSessionId;

////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - BEGIN: ENTER OUR CODE HERE
////////////////////////////////////////////////////

// Global Variables
var offset = 2;
var strum = 3;
let link;
let shadow;

// NUMBER OF USERS POLL: Variables
let lastTimeNumberOfUsersPolled;
let intervalToPollNumberOfUsers = 4000; // 4 second
let currentNumberOfUsers = 1;

let lastFrameCountUpdate;
let updateRateInFrames = 5;

// GIF --  loading screen
// var angle = 0; // initialize angle variable
// var scalar = 50; // set the radius of circle
// var startX = 100; // set the x-coordinate for the circle center
// var startY = 100; // set the y-coordinate for the circle center

// To change screen
let currentMode = 0;
let totalMode = 2;

// wait for two seconds then go to the next page
// an arrow funcion is just function within a function
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
const loadingTimeout = setTimeout(() => {
  if (currentMode < totalMode) {
    currentMode++;
  }
}, 4500);

function preload() {
  loadingLottie = loadJSON(
    "https://assets9.lottiefiles.com/datafiles/QeC7XD39x4C1CIj/data.json"
  );
  // loadingGIF = createImg("../../assets/gif/Loading.gif");

  bottle = loadImage("../../assets/images-webp/bottled-moments.webp");
}

function setup() {
  // pre setup
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // NUMBER OF USERS POLL: Initialise
  userSessionId = int(random(100000));
  lastTimeNumberOfUsersPolled = millis();
  setupNumberOfUsersPoll();

  //https://editor.p5js.org/codingtrain/sketches/nj_OgHPB
  playLottie = createDiv();
  let params = {
    container: playLottie.elt,
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    renderer: "svg",
  };
  anim = bodymovin.loadAnimation(params);
  playLottie.position(0, height / 5);

  // page buttons
  let likeWebsite = followButton();
  let selectOther = otherArtifact();
}

function draw() {
  //   NUMBER OF USERS POLL: Update
  if (millis() - lastTimeNumberOfUsersPolled > intervalToPollNumberOfUsers) {
    lastTimeNumberOfUsersPolled = millis();
    getNumberOfUsers();
  }

  // to create the pages
  if (currentMode === 0) {
    loadingScreen();
  } else if (currentMode === 1) {
    playLottie.hide();
    waveBackground();
    thankYouPage();
    likeWebsite.draw();
    selectOther.draw();
  }
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

/* ==================================== */

///////////////////////////////////////////
// SCREEN_1 FUNCTION
///////////////////////////////////////////

function loadingScreen() {
  // https://editor.p5js.org/kchung/sketches/SJkdHhWUQ

  // loadingLottie;
  loadingTimeout;

  // loadingLottie.position(0, 0);
  // loadingGIF.size(width, height);
  // loadingGIF.position(width / 3, height / 2);
  // var x = startX + scalar * cos(angle);
  // var y = startY + scalar * sin(angle);

  // fill("#A199FF");
  // // noStroke();
  // ellipse(x + width / 2.5, y + height / 3.5, 30);
  // angle++; // increment angle for the next frame

  textAlign(CENTER);

  fill("#000000");
  textSize(windowWidth / 18);
  text("Sending your Bottled Moments", width / 2, 100);

  fill("#222222");
  textSize(windowWidth / 24);
  text("Please do not leave or refresh your page", width / 2, height / 1.4);

  textSize(windowWidth / 24);
  text("while we are sending your message.", width / 2, height / 1.33);

  // window.open("../4_thank_you/thankYou.html", "_parent");

  // newMillis = millis();
  // after 2 seconds -> go to thankyou page
  // console.log(currentMillis);
  // if (newMillis / currentMillis < 20000) {
  // window.open("../4_thank_you/thankYou.html", "_parent");
  // }

  // let newMillis.mult(2, currentMillis);

  // if (currentMillis == newMillis) {
  // }

  // if (loadingScreen()) {
  // }
}

///////////////////////////////////////////
// SCREEN_2s FUNCTION
///////////////////////////////////////////

function waveBackground() {
  // https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg
  noFill();
  noStroke();

  // background(230,100,60);
  // background(255);
  // stroke(4);

  // change to gradient color
  let from = color("#52d2e3");
  let to = color("#514A9D");

  // fill(230, 100, 60);
  // let i = 0;
  let gradient = lerpColor(from, to, 0.33);
  // fill(gradient);

  var colorMap = random(0.73, 0.75);
  let gradientMap = lerpColor(from, to, colorMap);
  fill(gradientMap);

  // fill("#52d2e3");

  beginShape();
  vertex(0, height);
  for (var x = 0; x < width; x++) {
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 200, 360);
    // make color mapping
    // make gradient based on the mapping

    vertex(x, y);
    clear();
  }
  vertex(width, height);
  endShape();
  offset += 0.1;
}

function thankYouPage() {
  shadow = image(
    bottle,
    width / 2.5,
    50,
    width / 3.5,
    height / 2,
    0,
    0,
    bottle.width,
    bottle.height,
    CONTAIN
  );

  fill("#fffffff");
  rect(0, windowHeight / 2, windowWidth, windowHeight);

  textAlign(CENTER);
  fill("#383838");

  textSize(windowWidth / 18);
  text("Your Bottle Is Now Drifting", width / 2, height / 1.85);
  text("Through The Sea", width / 2, height / 1.75);

  textSize(windowWidth / 28);
  fill("#A0A0A0");
  text("PLEASE FIND YOUR DRIFT BOTTLE", width / 2, height / 1.6);
  text("IN THE SCREEN", width / 2, height / 1.55);

  // image(
  //   bottle,
  //   width / 3,
  //   50,
  //   width / 3,
  //   height / 2,
  //   0,
  //   0,
  //   bottle.width,
  //   bottle.height,
  //   CONTAIN
  // );
}

// screen 3
function followButton() {
  likeWebsite = new Button({
    x: width / 2,
    y: height - 195,
    width: width / 1.2,
    height: 55,
    align_x: 0,
    align_y: 0,
    content: "Follow Lake Macquarie Arts",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log(currentMode);
      cursor(ARROW);
      window.open(`https://www.instagram.com/lakemacarts/`);
    },
  });
}

function otherArtifact() {
  selectOther = new Button({
    x: width / 2,
    y: height - 110,
    width: width / 1.2,
    height: 55,
    align_x: 0,
    align_y: 0,
    content: "Send Other Messages",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log(userSelection);
      cursor(ARROW);
      window.open("../../index.html", "_parent");
    },
  });
}

function resetResolume() {
  loadClip(1, 1); // lake passive background
  loadClip(6, 1); // sun layer background (float: 0.14)
  setLayerOpacity(6, 0.4);
}

//   ***********************************************************************
// updateResolumeState()
//
// This function is invoked occasionally, based on certain conditions,
// tested within "draw". However, the steps included here should not be run
// every frame, to avoid too many OSC messages being sent to Resolume.
//   ************************************************************************

function updateResolumeState() {
  // change background colors
  /*
   * Change background color: 

    * if no users
      * Passive
    * if one users
      * Passive then 1
    * if two users -> 2 then 2
      * 1 then 2
    * if three users -> 3 then 3, more than 3
      * 2 then 3
        * Always loop 3 times then goes from current back to passive
    
    * Random Pattern:

    * 1) Sun -> Currently Static
    * 2) Building -> Cannot
    * 3) Cloud
   */
  /*
		Animation Triggers:
	
	  * Passive: (1,1) -> Default
	  * 1 User:  (1,2)
	  * 2 Users:  (1,3)
	  * 3 Users:  (1,4)
	  * 4 Users:  (1,5)
	  * Long: (1,7) -> all of the above
    
    * Check how many active layers are running at a time and triggers the video
      * Loading -> 2s
      * Total: 
        * Left Product -> 3s
        * Left Melt -> 2s 

      * Loading -> 2s
      * Total: 
        * Right Product -> 3s
        * Right Melt -> 2s
      * 
    * So in total, there are 4 users that can play at a time
	*/

  // can also use promise await
  let userNum = getNumberofUsers();

  if (userNum == 2) {
    loadClip(1, 2);
    loadClip(1, 3);
    loadClip(6, 1); // sun layer background (float: 0.14)
    setLayerOpacity(6, 1);
  } else if (userNum == 3) {
    loadClip(1, 2);
    loadClip(1, 3);
    loadClip(1, 4);
    loadClip(6, 1); // sun layer background (float: 0.14)
    setLayerOpacity(6, 1);
  } else if (userNum == 4 || userNum > 4) {
    loadClip(1, 2);
    loadClip(1, 3);
    loadClip(1, 4);
    loadClip(1, 5);
    loadClip(6, 1); // sun layer background (float: 0.14)
    setLayerOpacity(6, 1);
  } else {
    loadClip(1, 1); // lake passive background
    loadClip(6, 1); // sun layer background (float: 0.14)
    setLayerOpacity(6, 0.4);
  }
  resetResolume();
}

//   ***********************************************************************
// Helper functions:
//		- loadClip(layer, clip)
//				Loads a clip on Resolume. Arguments:
//						- layer: integer number of the layer where the clip is
//						- clip: integer number of the clip, within the layer
//		- turnLayerOff(layer)
//				Turns off a layer on Resolume. Arguments:
//						- layer: integer number of the layer to be turned off
//
// Opacity wont be used
//		- setLayerOpacity(layer, opacityLevel)
//						- layer: integer number of the layer we are setting the opacity of
//						- opacityLevel: decimal number between 0.0 (full transparency) and 1.0 (full opacity)
//   ***********************************************************************

function loadClip(layer, clip) {
  sendMessage(
    "/composition/layers/" + layer + "/clips/" + clip + "/connect",
    1,
    "f"
  );
}

function turnLayerOff(layer) {
  sendMessage("/composition/layers/" + layer + "/clear", 0, "f");
}

function setLayerOpacity(layer, opacityLevel) {
  sendMessage(
    "/composition/layers/" + layer + "/video/opacity",
    opacityLevel,
    "f"
  );
}

// ////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - END: ENTER OUR CODE HERE
// ////////////////////////////////////////////////////

//   ***********************************************************************
// NUMBER OF USERS POLL: Functions
//   ***********************************************************************

function setupNumberOfUsersPoll() {
  socket = io.connect(HOST);
  socket.on("numberOfUsers", updateNumberOfUsers);
}

function updateNumberOfUsers(numberOfUsers) {
  currentNumberOfUsers = numberOfUsers;
}

function getNumberOfUsers() {
  let postData = JSON.stringify({ id: userSessionId });

  xmlHttpRequest.open("POST", HOST + "/getNumberOfUsers", false);
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
  xmlHttpRequest.send(postData);
}

// ***********************************************************************
//     === PLEASE DO NOT CHANGE OR DELETE THIS SECTION ===
//     This function sends a OSC message to server

//     Parameters:
//       - address: the OSC message address pattern string
//       - value: single value as message payload
//       - type: type of the value passed as message payload
//   ***********************************************************************

function sendMessage(address, value, type) {
  let postData = JSON.stringify({
    id: 1,
    address: address,
    value: value,
    type: type,
  });

  xmlHttpRequest.open("POST", HOST + "/sendMessage", false);
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
  xmlHttpRequest.send(postData);
}
