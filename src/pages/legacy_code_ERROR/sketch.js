//  Global variables
var messageField;
let regex = "^(?i)(?:\bw+\bs*){1,20}$";

// For network
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

// To change screen
let currentMode = 0;
let totalMode = 4;

// text
let title, subtitle;

// Object properties -> to loop via array properties
let artifacts = [
  {
    artifactID: 1,
    name: "Flower",
    description: "lorem ipsum",
    // image: `https://drive.google.com/file/d/1CaZ3yetUebhvGsLsJp18zThW_wo0McY7/view`,
    color: "red",
    image: "../../assets/images-webp/bottled-moments.webp",
  },
  {
    artifactID: 2,
    name: "Miners Lamp",
    description: "lorem ipsum",
    color: "red",
    image: `www.google.com`,
  },
  {
    artifactID: 3,
    name: "Fishing Pole",
    description: "lorem ipsum",
    color: "red",
    image: `www.google.com`,
  },
  {
    artifactID: 4,
    name: "Surfboard",
    description: "lorem ipsum",
    color: "red",
    image: `www.google.com`,
  },
];

// user array -> to send to resolume
let userSelection = [
  {
    userID: "",
    message: "",
    artifactID: "",
    screen: "",
  },
];

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // buttons
  let saveMessage = saveMessageButton();
  let skipMessage = skipMessageButton();
  let selectArtifact = carouselSelect();
  let selectLeft = selectLeftWall();
  let selectRight = selectRightWall();

  // message Field
  messageField = createInput(userSelection.message || "");
  messageField.attribute("placeholder", "Write your message here...");

  messageField.position(40, height / 5);
  messageField.size(width - 80, height / 1.7);

  messageField.input(function () {
    userSelection.message = messageField.value();
  });

  // check message with regex
  // let message = messageField.value();
  // var match = input.match(message);

  // server connections
  //   initialiseResolume();
}

function draw() {
  // to test each screen
  // screen_1();
  // screen_2();
  // screen_3();
  //////////////////////////////
  if (currentMode === 0) {
    screen_1();

    // title
    fill("#383838");
    textSize(29);
    title = text("Share your thoughts", width / 2, 55);

    // subheading
    fill("#A0A0A0");
    textSize(18);
    subtitle = text("Your message will not be saved", width / 2, 85);
  } else if (currentMode === 1) {
    clear();

    screen_2();

    // title
    fill("#383838");
    textSize(29);
    title = text("Select your artifacts", width / 2, 55);

    // subheading
    fill("#A0A0A0");
    textSize(18);
    subtitle = text("Each artifact has different animations", width / 2, 85);

    removeElements();
  } else if (currentMode === 2) {
    clear();
    screen_3();

    // title
    fill("#383838");
    textSize(29);
    title = text("Select your artifacts", width / 2, 55);

    // subheading
    fill("#A0A0A0");
    textSize(18);
    subtitle = text("Each artifact has different animations", width / 2, 85);
    removeElements();
  }
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

/* ==================================== */

function screen_1() {
  // let messageField
  saveMessage.draw();
  skipMessage.draw();
}

function screen_2() {
  //  choose product

  // // Variables for carousel
  let currentIndex = 0; // Current index of the displayed

  let carouselWidth = windowWidth;
  let carouselHeight = windowHeight / 2;

  // Array of objects (items)
  // Display items in the carousel

  for (let i = 0; i < artifacts.length; i++) {
    noStroke();

    let itemX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 100; // Calculate the X-coordinate of each item
    let itemY = (i - currentIndex) * (windowHeight / 2) + carouselHeight; // Calculate the Y-coordinate of each item

    // background(0);
    // Display the item's picture, title, and description

    let artifactName = text(
      // text(str, x, y, [x2], [y2])
      artifacts[i].name,
      itemX,
      itemY,
      carouselWidth,
      carouselHeight
    );

    let artifactDescription = text(
      artifacts[i].description,
      itemX,
      itemY + 20,
      carouselWidth,
      carouselHeight
    );
  }
}

function screen_3() {
  // left wall
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])

  rect(15, 60, width / 2 - 20, 80 + height / 1.5);
  // right wall
  rect(5 + width / 2, 60, width / 2 - 20, 80 + height / 1.5);

  // loading screen
  // send message
  text("Choose your walls", 20, 30);
  text("To send your artifact", 20, 50);
}

/* ==================================== */

/*
 * Primary: Fill-'Gradient' ; Text-#FBF4E9
 * Secondary: #5960FF ✅
 * Carousel Arrows: #383838 ✅
 */

// screen 1

function saveMessageButton() {
  saveMessage = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 75,
    align_x: 0,
    align_y: 0,
    content: "Save Message",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log("this is before: " + currentMode);
      // userSelection.message = messageInput.value();
      if (currentMode < totalMode) {
        console.log(userSelection);
        currentMode++;
      }
      clear();
      cursor(ARROW);
      // console.log(userSelection);
    },
  });
}

function skipMessageButton() {
  skipMessage = new Button({
    content: "Skip",
    x: width - 80,
    y: height / 6,
    width: 80,
    height: 45,
    align_x: 0,
    align_y: 0,
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log("this is before: " + currentMode);
      if (currentMode < totalMode) {
        console.log(userSelection);
        currentMode++;
        // currentMode = 2;
      }
      clear();
      cursor(ARROW);
      // console.log(currentMode);
    },
  });
}

// screen 2

function carouselSelect() {
  selectArtifact = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Object",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      userSelection.artifact = artifact[i];
      console.log(userSelection);
      currentMode = 2;
      // clear();
      cursor(ARROW);
    },
  });
}

// screen 3
function selectLeftWall() {
  leftWall = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Left Wall",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log(currentMode);
      userSelection.wall = "Left";
      cursor(ARROW);
    },
  });
}

function selectRightWall() {
  rightWall = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Right Wall",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log(userSelection);
      userSelection.wall = "Right";
      cursor(ARROW);
    },
  });
}

function screen1_UI() {}

function screen2_UI() {}

function screen3_UI() {}

///////////////////////////////////////////////////////////////////
// initialiseResolume()
//
// This is like "setup", but applied to Resolume. In other words,
// it runs only once, when the website is loaded.
///////////////////////////////////////////////////////////////////
function initialiseResolume() {
  loadClip(1, 1); // load beach video
  loadClip(2, 1); // load virus video

  // Initialise text caption (layer 6)
  loadClip(6, 1);
  setLayerOpacity(6, 0.2);
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/size",
    5,
    "f"
  ); // set font size
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/color/red",
    255,
    "f"
  ); // set text colour to white
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/color/green",
    255,
    "f"
  );
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/color/blue",
    255,
    "f"
  );
}

//////////////////////////////////////////////////////////////////////////////
// updateResolumeState()
//
// This function is invoked occasionally, based on certain conditions,
// tested within "draw". However, the steps included here should not be run
// every frame, to avoid too many OSC messages being sent to Resolume.
//////////////////////////////////////////////////////////////////////////////
function updateResolumeState() {
  // var brightnessLayer1 = map(timelinePos, 0, 1, 0.3, 0.7);
  // sendMessage('/composition/layers/1/video/effects/brightnesscontrast/effect/brightness', brightnessLayer1, "f");
  // var opacityLayer2 = 0;
  // if (timelinePos < 0.5) {
  // 	opacityLayer2 = map(timelinePos, 0.2, 0.5, 0, 1);
  // } else {
  // 	opacityLayer2 = map(timelinePos, 0.5, 1, 1, 0);
  // }
  // setLayerOpacity(2, opacityLayer2);
  // // Turn pulsing dots on/off
  // if (timelinePos < 0.25) {
  // 	turnLayerOff(3);
  // 	sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2019', "s"); // set caption text
  // } else {
  // 	loadClip(3, 1);
  // 	setLayerOpacity(3, 0.75);
  // 	if (timelinePos < 0.5) {
  // 		turnLayerOff(4);
  // 		sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2020', "s"); // set caption text
  // 	} else {
  // 		loadClip(4, 1);
  // 		setLayerOpacity(4, 0.75);
  // 		if (timelinePos < 0.75) {
  // 			turnLayerOff(5);
  // 		sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2021', "s"); // set caption text
  // 		} else {
  // 			loadClip(5, 1);
  // 			setLayerOpacity(5, 0.75);
  // 			sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2022', "s"); // set caption text
  // 		}
  // 	}
  // }
}

/////////////////////////////////////////////////////////////////////
// redrawResolumeComponents()
//
// This is like "draw", but applied to Resolume. In other words,
// it runs over and over, every frame, after the website is loaded.
/////////////////////////////////////////////////////////////////////
function redrawResolumeComponents() {
  if (timelinePos > 0.75) {
    var posDotLayer5 = map(abs(cos(frameCount * 0.005)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/5/clips/1/dashboard/link2",
      posDotLayer5,
      "f"
    );

    var posDotLayer4 = map(abs(cos(frameCount * 0.02)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/4/clips/1/dashboard/link2",
      posDotLayer4,
      "f"
    );

    var posDotLayer3 = map(abs(cos(frameCount * 0.01)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link2",
      posDotLayer3,
      "f"
    );

    // Colour
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link1",
      abs(cos(frameCount * 0.5)),
      "f"
    );
    sendMessage(
      "/composition/layers/4/clips/1/dashboard/link1",
      abs(sin(frameCount * 0.1)),
      "f"
    );
    sendMessage(
      "/composition/layers/5/clips/1/dashboard/link1",
      abs(cos(frameCount * 0.3)),
      "f"
    );
  } else if (timelinePos > 0.5) {
    var posDotLayer4 = map(abs(cos(frameCount * 0.02)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/4/clips/1/dashboard/link2",
      posDotLayer4,
      "f"
    );

    var posDotLayer3 = map(abs(cos(frameCount * 0.01)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link2",
      posDotLayer3,
      "f"
    );

    // Colour
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link1",
      abs(cos(frameCount * 0.05)),
      "f"
    );
    sendMessage("/composition/layers/4/clips/1/dashboard/link1", 0, "f");
  } else if (timelinePos > 0.25) {
    var posDotLayer3 = map(abs(cos(frameCount * 0.01)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link2",
      posDotLayer3,
      "f"
    );

    // Colour
    sendMessage("/composition/layers/3/clips/1/dashboard/link1", 0, "f");
  }
}

////////////////////////////////////////////////////
// Helper functions:
//		- loadClip(layer, clip)
//				Loads a clip on Resolume. Arguments:
//						- layer: integer number of the layer where the clip is
//						- clip: integer number of the clip, within the layer
//		- turnLayerOff(layer)
//				Turns off a layer on Resolume. Arguments:
//						- layer: integer number of the layer to be turned off
//		- setLayerOpacity(layer, opacityLevel)
//						- layer: integer number of the layer we are setting the opacity of
//						- opacityLevel: decimal number between 0.0 (full transparency) and 1.0 (full opacity)
////////////////////////////////////////////////////
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

////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - END: ENTER OUR CODE HERE
////////////////////////////////////////////////////

/***********************************************************************
    === PLEASE DO NOT CHANGE OR DELETE THIS SECTION ===
    This function sends a OSC message to server
  
    Parameters:
      - address: the OSC message address pattern string
      - value: single value as message payload
      - type: type of the value passed as message payload
  ***********************************************************************/
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
