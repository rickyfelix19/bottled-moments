////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - BEGIN: ENTER OUR CODE HERE
////////////////////////////////////////////////////

// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
var socket;
let userSessionId;

////////////////////////////////////////////////////////
//FIXED SECTION - END: DO NOT CHANGE THESE VARIABLES
////////////////////////////////////////////////////////

// user array -> to send to resolume
let userSelection = [
  {
    userID: "",
    artifactID: "",
    screen: "",
  },
];

////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - BEGIN: ENTER OUR CODE HERE
////////////////////////////////////////////////////

//  Global variables
let messageField, title, subtitle, UIText1, UIText2, UIText3;

// To change screen
let currentMode = 0;
let totalMode = 3;

// JSON Array
let artifactJSON = [];
let artifactsArr = [];
// artifactIDArr = [];
// artifactNameArr = [];
// artifactDescArr = [];
// artifactURL = [];

let currentIndex = 0; // Current index of the displayed
let carouselPrev, carouselNext;

///////////////////////////////////////////
// PRELOAD FUNCTION
///////////////////////////////////////////

function preload() {
  // loadImage(artifacts[i].image, (artifactImage) => {
  //   image(artifactImage, 200, 200);
  // });

  // for (let i = 0; i < artifacts.length; i++) {
  //   loadArtifactImages = loadImage(artifacts[i].image);
  // }

  artifactJSON = loadJSON("product.json", "json", storeData);
  leftWall = loadImage("../../assets/images-webp/Left.png");
  rightWall = loadImage("../../assets/images-webp/Right.png");
}

function storeData(data) {
  artifactsArr = data.map((artifact) => {
    return {
      artifactName: artifact.name,
      artifactDesc: artifact.description,
      artifactURL: loadImage(artifact.url),
    };
  });

  // console.log(artifacts);
  // console.log(artifacts[1]);
  // console.log(artifacts[1].artifactName);
  // console.log(artifacts[1].artifactURL);

  // console.log(data);

  // artifactIDArr = data.map((data) => data.artifactID);
  // console.log(artifactIDArr)

  // artifactNameArr = data.map((data) => data.name);
  // console.log(artifactIDArr)

  // artifactDescArr = data.map((data) => data.description);
  // console.log(artifactDescArr)

  // artifactURL = data.map((data) => loadImage(data.url));
  // console.log(artifactURL);
}

///////////////////////////////////////////
// SETUP FUNCTION
///////////////////////////////////////////

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // server connections
  // NUMBER OF USERS POLL: Initialise
  userSessionId = int(random(100000));
  lastTimeNumberOfUsersPolled = millis();
  setupNumberOfUsersPoll();
  console.log(setupNumberOfUsersPoll());

  initialiseResolume();

  // buttons
  let saveMessage = saveMessageButton();
  let skipMessage = skipMessageButton();
  let selectArtifact = carouselSelect();
  let selectLeft = selectLeftWall();
  let selectRight = selectRightWall();

  carouselPrev = createButton("&#8592;");
  carouselPrev.position(70, height / 2);
  carouselPrev.mousePressed(prevProduct);

  carouselNext = createButton("&#8594;");
  carouselNext.position(width / 1.2, height / 2);
  carouselNext.mousePressed(nextProduct);

  messageBox();
}

///////////////////////////////////////////
// DRAW FUNCTION
///////////////////////////////////////////

function draw() {
  let color1 = color("#cceaff");
  let color2 = color("#ffffff");

  // NUMBER OF USERS POLL: Update
  if (millis() - lastTimeNumberOfUsersPolled > intervalToPollNumberOfUsers) {
    lastTimeNumberOfUsersPolled = millis();
    getNumberOfUsers();
  }
  console.log(getNumberofUsers());

  // push();
  // for (i = 0; i < height; i++) {
  //   let finalColor = lerpColor(color1, color2, i / height);
  //   stroke(finalColor);
  //   line(0, i, width, i);
  // }
  // pop();
  // // to test each

  // screen_1();
  // screen_2();
  // screen_3();

  // seperate into components -- for easier debugging

  if (currentMode === 0) {
    screen_1();
    screen1_UI();
    carouselPrev.hide();
    carouselNext.hide();
  } else if (currentMode === 1) {
    clear();
    screen_2();
    screen2_UI();
    // screen2_blob();
    carouselNext.show();
    carouselPrev.show();
    removeElements();
  } else if (currentMode === 2) {
    clear();
    removeElements();
    screen_3();
    screen3_UI();
  }
}

///////////////////////////////////////////
// WINDOW RESIZED FUNCTION
///////////////////////////////////////////

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

///////////////////////////////////////////
// LOADING SECTION
///////////////////////////////////////////
function skeletonLoading() {}

function loadingScreen() {
  // https://editor.p5js.org/kchung/sketches/SJkdHhWUQ
}

///////////////////////////////////////////
// SCREEN_STEPPER UI
///////////////////////////////////////////

function screen1_UI() {
  textSize(16);
  fill("#A199FF");
  ellipse(65, 65, 20, 20);
  stroke("#A0A0A0");
  line(75, 65, width / 2 - 10, 65);
  noStroke();
  UIText1 = text("Write Message", 65, 95);

  noFill();
  stroke("#A0A0A0");
  ellipse(width / 2, 65, 20, 20);
  line(width / 2 + 9, 65, width - 90, 65);
  noStroke();
  fill("#A0A0A0");
  UIText2 = text("Select Object", width / 2, 95);

  noFill();
  stroke("#A0A0A0");
  ellipse(width - 80, 65, 20, 20);
  noStroke();
  fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 85, 95);

  noStroke();
}

function screen2_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(65, 65, 20, 20);
  line(75, 65, width / 2 - 10, 65);
  noStroke();
  UIText1 = text("Write Message", 65, 95);

  // noFill();
  stroke("#A0A0A0");
  ellipse(width / 2, 65, 20, 20);
  line(width / 2 + 9, 65, width - 90, 65);
  noStroke();
  // fill("#A0A0A0");
  UIText2 = text("Select Object", width / 2, 95);

  noFill();
  stroke("#A0A0A0");
  ellipse(width - 80, 65, 20, 20);
  noStroke();
  fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 85, 95);
  noStroke();
}

function screen3_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(65, 65, 20, 20);
  line(75, 65, width / 2 - 10, 65);
  noStroke();
  UIText1 = text("Write Message", 65, 95);

  // noFill();
  stroke("#A199FF");
  ellipse(width / 2, 65, 20, 20);
  line(width / 2 + 9, 65, width - 90, 65);
  noStroke();
  fill("#A199FF");
  UIText2 = text("Select Object", width / 2, 95);

  // noFill();
  stroke("#A199FF");
  ellipse(width - 80, 65, 20, 20);
  noStroke();
  fill("#A199FF");
  UIText3 = text("Send Bottle", width - 85, 95);
  noStroke();
}

///////////////////////////////////////////
// SCREEN_1 FUNCTION
///////////////////////////////////////////

function screen_1() {
  // buttons
  saveMessage.draw();
  skipMessage.draw();

  // title
  fill("#383838");
  textSize(29);
  title = text("Share your thoughts", width / 2, 150);

  // subheading
  fill("#A0A0A0");
  textSize(18);
  subtitle = text("Your message will not be saved", width / 2, 180);
}

function messageBox() {
  // regex patterns
  // let regex = "^(?i)(?:\bw+\bs*){1,20}$";

  // message Field
  messageField = createInput(userSelection.message || "");
  messageField.attribute("placeholder", "Write your message here...");
  messageField.style("background-color", "#d6d2ff");
  messageField.style("border-style", "none");
  messageField.style("border-radius", "25px");
  messageField.style("box-shadow", "0px 35px 14px -16px #000000;");
  messageField.style("font-size", "18px");
  messageField.position(45, height / 3);
  messageField.size(width - 95, height / 2);

  // check message with regex
  // let message = messageField.value();
  // var match = input.match(message);

  // messageField.input(function () {
  //   userSelection.message = messageField.value();
  // });
}

function saveMessageButton() {
  saveMessage = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 55,
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
      // clear();
      cursor(ARROW);
      // console.log(userSelection);
    },
  });
}

function skipMessageButton() {
  skipMessage = new Button({
    content: "Skip ->",
    x: width - 105,
    y: height / 3.5,
    width: 100,
    height: 33,
    align_x: 0,
    align_y: 0,
    STYLE_DEFAULT: STYLE_DISABLED,
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
        // clear();
        // currentMode = 2;
      }
      cursor(ARROW);
      // console.log(currentMode);
    },
  });
}

///////////////////////////////////////////
// SCREEN_2 FUNCTION
///////////////////////////////////////////
function screen_2() {
  selectArtifact.draw();
  productCarousel();

  // title
  fill("#383838");
  textSize(29);
  title = text("Select your artifacts", width / 2, 150);

  // subheading
  fill("#A0A0A0");
  textSize(18);
  subtitle = text("Each artifact has different animations", width / 2, 180);
}

function productCarousel() {
  // https://editor.p5js.org/slow_izzm/sketches/535SiO_aC

  // Variables for carousel
  let artifactTitle, artifactDescription, artifactImage, artifactID;
  let indicatorCircle;
  let indicatorSize = 10;
  let carouselWidth = windowWidth;
  let carouselHeight = windowHeight / 2;

  // create the artifacts
  for (let i = 0; i < artifactsArr.length; i++) {
    noStroke();

    // for image
    let picX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 120;
    let picY = (i - currentIndex) * windowHeight + carouselHeight / 2.5;

    // for title and description
    let itemX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 100; // Calculate the X-coordinate of each item
    let itemY = (i - currentIndex) * (windowHeight / 2) + carouselHeight; // Calculate the Y-coordinate of each item

    // for indicators
    // let indicatorCircleIndex = [];
    // let indicatorX = (i - currentIndex) * windowWidth - 20;
    // let indicatorY = windowHeight / 2;

    // Display the item's picture, title, and description:
    // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit])
    // text(str, x, y, [x2], [y2])

    artifactImage = image(
      artifactsArr[i].artifactURL,
      picX,
      picY,
      width,
      height / 2,
      0,
      0,
      artifactsArr.width,
      artifactsArr.height
    );

    fill("#000000");
    artifactTitle = textSize(22);
    artifactTitle = text(
      artifactsArr[i].artifactName,
      itemX,
      itemY - 70,
      carouselWidth,
      carouselHeight
    );

    fill("#222222");
    artifactDescription = textSize(18);
    artifactDescription = text(
      artifactsArr[i].artifactDesc,
      itemX,
      itemY,
      carouselWidth,
      carouselHeight
    );
  }
  selectArtifact.draw();
}

function prevProduct() {
  console.log("prevProduct pressed");
  currentIndex = (currentIndex - 1 + artifactsArr.length) % artifactsArr.length;
}

function nextProduct() {
  console.log("nextProduct pressed");
  currentIndex = (currentIndex + 1) % artifactsArr.length;
}

function carouselSelect() {
  selectArtifact = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 55,
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
      // userSelection.artifact = artifact[i];
      console.log(userSelection);
      currentMode = 2;
      // clear();
      cursor(ARROW);
    },
  });
}

function screen2_blob() {
  // https://editor.p5js.org/mcpecommander/sketches/GPDsjtaXD

  // for blob
  const slices = 7,
    size = 200;
  let randomWeights = [];

  fill(93, 119, 255);
  translate(width / 2, height / 2);
  rotate(millis() / 1000);
  scale(map(sin(millis() / 800), 0, 1, 0.85, 1));
  beginShape();
  for (var i = 0, j = 0; i < TWO_PI; i += TWO_PI / slices, j++) {
    curveVertex(
      sin(i) * size + map(cos(millis() / randomWeights[j]), 0, 1, -30, 30),
      cos(i) * size +
        map(sin(millis() / randomWeights[j + slices]), 0, 1, -20, 20)
    );
  }
  //Needed to make the blob correctly shaped.
  curveVertex(
    sin(0) * size + map(cos(millis() / randomWeights[0]), 0, 1, -30, 30),
    cos(0) * size +
      map(sin(millis() / randomWeights[0 + slices]), 0, 1, -20, 20)
  );
  curveVertex(
    sin(TWO_PI / slices) * size +
      map(cos(millis() / randomWeights[1]), 0, 1, -30, 30),
    cos(TWO_PI / slices) * size +
      map(sin(millis() / randomWeights[1 + slices]), 0, 1, -20, 20)
  );
  curveVertex(
    sin((2 * TWO_PI) / slices) * size +
      map(cos(millis() / randomWeights[2]), 0, 1, -30, 30),
    cos((2 * TWO_PI) / slices) * size +
      map(sin(millis() / randomWeights[2 + slices]), 0, 1, -20, 20)
  );
  endShape();
}

///////////////////////////////////////////
// SCREEN_3 FUNCTION
///////////////////////////////////////////

function screen_3() {
  // left wall
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])

  // rect(15, 130, width / 2 - 20, 80 + height / 2 - 50);
  // right wall
  // rect(5 + width / 2, 130, width / 2 - 20, 80 + height / 2 - 50);

  image(
    leftWall,
    15,
    130,
    width / 2 - 30,
    height / 2,
    0,
    0,
    leftWall.width,
    leftWall.height
  );

  image(
    rightWall,
    width / 2 + 5,
    130,
    width / 2 - 30,
    height / 2,
    0,
    0,
    rightWall.width,
    rightWall.height
  );

  // title
  fill("#383838");
  textSize(20);
  title = text("Choose the walls you would", width / 2, height / 1.45);
  fill("#383838");
  textSize(20);
  title = text("like to send your bottle", width / 2, height / 1.4);
  // subheading
  fill("#A0A0A0");
  textSize(18);
  subtitle = text(
    "This won't affect your animations",
    width / 2,
    height / 1.33
  );

  // send message
  selectLeft.draw();
  selectRight.draw();
}

function selectLeftWall() {
  selectLeft = new Button({
    x: width / 2,
    y: height - 145,
    width: width / 1.2,
    height: 55,
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
      window.open("../4_thank_you/thankYou.html", "_parent");
    },
  });
}

function selectRightWall() {
  selectRight = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 55,
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
      window.open("../4_thank_you/thankYou.html", "_parent");
    },
  });
}

///////////////////////////////////////////
// RESOLUME
///////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// initialiseResolume()
//
// This is like "setup", but applied to Resolume. In other words,
// it runs only once, when the website is loaded.
///////////////////////////////////////////////////////////////////
function initialiseResolume() {}

////////////////////////////////////////////////////////////////////////////
// updateResolumeState()
//
// This function is invoked occasionally, based on certain conditions,
// tested within "draw". However, the steps included here should not be run
// every frame, to avoid too many OSC messages being sent to Resolume.
//////////////////////////////////////////////////////////////////////////////
function updateResolumeState() {}

/////////////////////////////////////////////////////////////////////
// redrawResolumeComponents()
//
// This is like "draw", but applied to Resolume. In other words,
// it runs over and over, every frame, after the website is loaded.
/////////////////////////////////////////////////////////////////////
function redrawResolumeComponents() {}

// ////////////////////////////////////////////////////
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
function loadClip(layer, clip) {}

function turnLayerOff(layer) {}

// ////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - END: ENTER OUR CODE HERE
// ////////////////////////////////////////////////////

////////////////////////////////////////////////////
// NUMBER OF USERS POLL: Functions
////////////////////////////////////////////////////
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

// /***********************************************************************
//     === PLEASE DO NOT CHANGE OR DELETE THIS SECTION ===
//     This function sends a OSC message to server

//     Parameters:
//       - address: the OSC message address pattern string
//       - value: single value as message payload
//       - type: type of the value passed as message payload
//   /***********************************************************************

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
