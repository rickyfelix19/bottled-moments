////////////////////////////////////////////////////////
//FIXED SECTION - END: DO NOT CHANGE THESE VARIABLES
////////////////////////////////////////////////////////

// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
var socket;
let userSessionId;

// NUMBER OF USERS POLL: Variables
let lastTimeNumberOfUsersPolled;
let intervalToPollNumberOfUsers = 5000;
let currentNumberOfUsers = 1;

let lastFrameCountUpdate;
let updateRateInFrames = 5;

// constructor to be sent over ( Maybe should used TS or PropTypes)
/*
// function UserSelection(userID, artifactID, wallSelection) {
//   this.userID = userID;
//   this.artifactID = artifactID;
//   this.wallSelection = wallSelection;
// }

// user array -> to send to Resolume
// let userSelection = [{}
//   userID: '',
//   artifactID: '',
//   wallSelection: ''
// }];
// let userSelection = [];
*/

// KEEP IT SUPER SIMPLE -> REDUCE SPACE AND TIME COMPLEXITY
let userProductSelection; // productID put into the DOM
let userWallSelection; // wall choice
let meltColumn; // output to allow more users to play

////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - BEGIN: ENTER OUR CODE HERE
////////////////////////////////////////////////////

//  Global variables
let messageField, title, subtitle, UIText1, UIText2, UIText3;

// To change screen
let currentMode = 0;
let totalMode = 4;

// loading screen
const loadingTimeout = setTimeout(() => {
  if (currentMode < totalMode) {
    currentMode++;
  }
}, 1500);

// JSON Array
let artifactJSON = []; // load from product.json
let artifactsArr = []; // this comes from preload of product.json
// let artifactIDArr = [];
// artifactNameArr = [];
// artifactDescArr = [];
let artifactURL = [];
let artifactImage = [];

let currentIndex = 0; // Current index of the displayed
// let carouselPrev, carouselNext;

// let lastFrameCountUpdate;
// let updateRateInFrames = 5;

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
  //   loadingLottie = loadJSON(
  //     "https://assets9.lottiefiles.com/datafiles/QeC7XD39x4C1CIj/data.json"
  // 	);
  // loadingGIF = createImg("../../assets/gif/Loading.gif");

  leftWall = loadImage("../../assets/images-webp/Left.webp");
  rightWall = loadImage("../../assets/images-webp/Right.webp");
}

function storeData(data) {
  artifactsArr = data.map((artifact) => {
    return {
      artifactID: artifact.artifactID,
      // artifactName: artifact.name,
      // artifactDesc: artifact.description,
      artifactURL: loadImage(artifact.url),
    };
  });

  console.log(artifactsArr);

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
  // angleMode(DEGREES); // change the angle mode from radians to degrees

  // server connections
  // NUMBER OF USERS POLL: Initialise
  // userSessionId = int(random(100000));

  // userID saved as a Int inside an UserSelection Object Array
  // userSelection.push({ userID: userSessionId });

  // //userSelection[0] = { userID: userSessionId }; // this push the variable into the array of the user session

  // lastFrameCountUpdate = frameCount;

  // lastTimeNumberOfUsersPolled = millis();
  // setupNumberOfUsersPoll();

  // run Resolume
  initialiseResolume();

  // buttons
  let saveMessage = saveMessageButton();
  let skipMessage = skipMessageButton();
  let prevArtifact = carouselPrevious();
  let nextArtifact = carouselNext();
  let selectArtifact = carouselSelect();
  let selectLeft = selectLeftWall();
  let selectRight = selectRightWall();

  messageBox();
}

///////////////////////////////////////////
// DRAW FUNCTION
///////////////////////////////////////////

function draw() {
  // carouselPrev.hide();
  // carouselNext.hide();
  let color1 = color("#cceaff");
  let color2 = color("#ffffff");

  push();
  for (i = 0; i < height; i++) {
    let finalColor = lerpColor(color1, color2, i / height);
    stroke(finalColor);
    line(0, i, width, i);
  }
  pop();

  //   NUMBER OF USERS POLL: Update
  // if (millis() - lastTimeNumberOfUsersPolled > intervalToPollNumberOfUsers) {
  //   lastTimeNumberOfUsersPolled = millis();
  //   getNumberOfUsers();
  // }

  // seperate into components -- for easier debugging
  // screen_1();
  // screen_2();
  // screen_3();
  // loadingScreen();
  // messageField.hide();
  // skeletonLoading();

  messageField.hide();

  if (currentMode === 0) {
    skeletonLoading();
  } else if (currentMode === 1) {
    messageField.show();
    screen_1();
    screen1_UI();
  } else if (currentMode === 2) {
    messageField.hide();
    // input.hide();
    removeElements();
    clear();
    screen_2();
    screen2_UI();
  } else if (currentMode === 3) {
    clear();
    removeElements();
    screen_3();
    screen3_UI();
  }

  // else if (currentMode === 3) {
  // clear();
  // removeElements();
  // loadingScreen();
  // }
}

///////////////////////////////////////////
// WINDOW RESIZED FUNCTION
///////////////////////////////////////////

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

///////////////////////////////////////////
// SCREEN_STEPPER UI
///////////////////////////////////////////

function screen1_UI() {
  textSize(16);
  fill("#A199FF");
  ellipse(35, 35, 20, 20);
  stroke("#A0A0A0");
  line(35, 35, width / 2 - 10, 35);
  noStroke();
  UIText1 = text("Write Message", 65, 65);

  noFill();
  stroke("#A0A0A0");
  ellipse(width / 2, 35, 20, 20);
  line(width / 2 + 9, 35, width - 90, 35);
  noStroke();
  fill("#A0A0A0");
  UIText2 = text("Select Object", width / 2, 65);

  noFill();
  stroke("#A0A0A0");
  ellipse(width - 80, 35, 20, 20);
  noStroke();
  fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 85, 65);
}

function screen2_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(35, 35, 20, 20);
  line(35, 35, width / 2 - 10, 35);
  noStroke();
  UIText1 = text("Write Message", 65, 65);

  stroke("#A199FF");
  fill("#A199FF");
  ellipse(width / 2, 35, 20, 20);
  noStroke();
  UIText2 = text("Select Object", width / 2, 65);
  stroke("#A0A0A0");
  line(width / 2 + 9, 35, width - 90, 35);
  noStroke();

  noFill();
  stroke("#A0A0A0");
  ellipse(width - 80, 35, 20, 20);
  noStroke();
  fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 85, 65);
}

function screen3_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(35, 35, 20, 20);
  line(35, 35, width / 2 - 10, 35);
  noStroke();
  UIText1 = text("Write Message", 65, 65);

  // noFill();
  stroke("#A199FF");
  ellipse(width / 2, 35, 20, 20);
  line(width / 2 + 9, 35, width - 90, 35);
  noStroke();
  fill("#A199FF");
  UIText2 = text("Select Object", width / 2, 65);

  // noFill();
  stroke("#A199FF");
  ellipse(width - 80, 35, 20, 20);
  noStroke();
  fill("#A199FF");
  UIText3 = text("Send Bottle", width - 85, 65);
  noStroke();
}

///////////////////////////////////////////
// LOADING SECTION
///////////////////////////////////////////
function skeletonLoading() {
  let from = color("#d6d6d6");
  let to = color("#555555");

  // fill(230, 100, 60);
  // let i = 0;
  let gradient = lerpColor(from, to, 0.4);
  // fill(gradient);

  var colorMap = random(0.72, 0.74);
  let gradientMap = lerpColor(from, to, colorMap);
  fill(gradientMap);

  //   messageField.position(45, height / 3);
  // messageField.size(width - 95, height / 2);

  // fill("#52d2e3");

  // make rectangle that goes from left to right

  // rect(x, y, w, [h], [tl], [tr], [br], [bl]);
  let messageSkeleton = rect(
    45,
    height / 3,
    width - 95,
    height / 3,
    25,
    25,
    25,
    25
  );
  let buttonSkeleton = rect(75, height - 105, width - 175, 55, 55, 55, 55, 55);

  stroke("#A0A0A0");
  ellipse(35, 35, 20, 20);
  line(35, 35, width / 2 - 10, 35);
  noStroke();
  rect(40, 65, 45, 15);

  stroke("#A0A0A0");
  ellipse(width / 2, 35, 20, 20);
  line(width / 2 + 9, 35, width - 90, 35);
  noStroke();
  rect(width / 2 - 20, 65, 45, 15);

  stroke("#A0A0A0");
  ellipse(width - 80, 35, 20, 20);
  noStroke();
  rect(width - 85, 65, 45, 15);
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
  title = text("Share your thoughts", width / 2, 110);

  // subheading
  fill("#A0A0A0");
  textSize(18);
  subtitle = text("Your message will not be saved", width / 2, 135);
}

function messageBox() {
  // regex patterns
  // let regex = "^(?i)(?:\bw+\bs*){1,20}$";

  // message Field
  // messageField = createInput(userSelection.message || "");
  messageField = createInput("");
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
    content: "Next Step",
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
        // console.log(userSelection);
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
        // console.log(userSelection);
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
  // selectArtifact.draw();
  productCarousel();

  // buttons
  prevArtifact.draw();
  nextArtifact.draw();
  selectArtifact.draw();

  // title
  fill("#383838");
  textSize(29);
  title = text("Select your artifacts", width / 2, 110);

  // subheading
  fill("#A0A0A0");
  textSize(18);
  subtitle = text("Each artifact has different animations", width / 2, 135);
}

function productCarousel() {
  // https://editor.p5js.org/slow_izzm/sketches/535SiO_aC
  // Variables for carousel
  // let artifactTitle, artifactDescription,
  // let indicatorCircle;
  // let indicatorSize = 10;
  // artifactImage = loadImage(artifactsArr[i].artifactURL);
  // create the artifacts

  // let currentImage = artifactImage[currentIndex];

  image(
    artifactsArr[currentIndex].artifactURL,
    width / 4,
    height / 4,
    width / 2,
    height / 2,
    0,
    0,
    artifactsArr.width,
    artifactsArr.height,
    CONTAIN
  );

  // image(
  //   artifactURL[currentIndex],
  //   0,
  //   150,
  //   width,
  //   height / 1.5,
  //   0,
  //   0,
  //   artifactsArr.width,
  //   artifactsArr.height
  // );
  /*
    // for indicators
    // let indicatorCircleIndex = [];
    // let indicatorX = (i - currentIndex) * windowWidth - 20;
    // let indicatorY = windowHeight / 2;

    // Display the item's picture, title, and description:
    // text(str, x, y, [x2], [y2])

    // for title and description
    let itemX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 100; // Calculate the X-coordinate of each item
    let itemY = (i - currentIndex) * (windowHeight / 2) + carouselHeight; // Calculate the Y-coordinate of each item
   
    image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit])
    
    for (i = 0; i < artifactsArr.length; i++) {
    artifactURL[i],
      0,
      150,
      width,
      height / 1.5,
      0,
      0,
      artifactsArr.width,
      artifactsArr.height,
      CONTAIN;
  }
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

    artifactID = createButton("Select Artifact");
  }
  */
  // selectArtifact.draw();
}

function carouselPrevious() {
  prevArtifact = new Button({
    x: 35,
    y: height / 2,
    width: 30,
    height: 30,
    align_x: 0,
    align_y: 0,
    content: "<-",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      cursor(ARROW);

      prevArtifact;
      currentIndex =
        (currentIndex - 1 + artifactsArr.length) % artifactsArr.length;
    },
  });
}

function carouselNext() {
  nextArtifact = new Button({
    x: width - 55,
    y: height / 2,
    width: 30,
    height: 30,
    align_x: 0,
    align_y: 0,
    content: "->",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      cursor(ARROW);
      nextArtifact;
      currentIndex = (currentIndex + 1) % artifactsArr.length;
    },
  });
}

/*
// function prevProduct() {
//   carouselPrev = createButton("&#8592;");
//   carouselPrev.position(70, height / 2);
//   carouselPrev.mousePressed(prevProduct);

//   currentIndex = (currentIndex - 1 + artifactsArr.length) % artifactsArr.length;
// }

// function nextProduct() {
//   // Button for next slide
//   let nextButton = createButton("&#8594;");
//   nextButton.position(width - 100, height / 2);
//   nextButton.mousePressed(nextProduct);

//   currentIndex = (currentIndex + 1) % artifactsArr.length;
// }
*/

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
      cursor(ARROW);
      if (currentMode < totalMode) {
        // console.log(userSelection);
        userProductSelection = currentIndex;
        userProductSelection++;
        console.log(userProductSelection);
        currentMode++;
      }
    },
  });
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
    height / 2.3,
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
    height / 2.3,
    0,
    0,
    rightWall.width,
    rightWall.height
  );

  // title
  fill("#383838");

  textSize(29);
  title = text("Choose the walls you would", width / 2, height / 1.45);
  fill("#383838");

  textSize(29);
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
    y: height - 120,
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
    on_press() {
      cursor("progress");
    },
    on_release() {
      cursor(ARROW);
      // go to loading screen

      // console.log(currentMode);
      // userSelection.wall = "Left";
      // setTimeout(function, time);
      // use asyncWith
      // or set timeOut

      // window.open("../4_thank_you/thankYou.html", "_parent");
      // if (currentMode < totalMode) {
      // console.log(userSelection);
      // userWallSelection = 3;
      // currentMode++;
      // }

      //       if (updateResolumeState()) {
      //         meltColumn = userProductSelection * 0 + 5;

      //         // currentMode++;
      //       }
      //       window.open("../4_thank_you/thankYou.html", "_parent");

      if (currentMode < totalMode) {
        userWallSelection = 2;
        meltColumn = userProductSelection * 0 + 5;
        updateResolumeState();
      }

      // meltColumn = userProductSelection * 0 + 3;

      setTimeout(() => {
        window.open("../4_thank_you/thankYou.html", "_parent");
      }, 1500);
    },
    // currentMode++;
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
    on_press() {
      cursor("progress");
    },
    on_release() {
      cursor(ARROW);
      // console.log(userSelection);
      // userSelection.wall = "Right";
      // window.open("../4_thank_you/thankYou.html", "_parent");

      // if (currentMode < totalMode) {
      //   // console.log(userSelection);
      //   userWallSelection = 5;
      // }

      //       if (updateResolumeState()) {
      //         meltColumn = userProductSelection * 0 + 5;

      //         // currentMode++;
      //       }
      //       window.open("../4_thank_you/thankYou.html", "_parent");

      if (currentMode < totalMode) {
        userWallSelection = 4;
        meltColumn = userProductSelection * 0 + 5;
        updateResolumeState();
      }

      setTimeout(() => {
        window.open("../4_thank_you/thankYou.html", "_parent");
      }, 1500);
      // currentMode++;
    },
  });
}

///////////////////////////////////////////
// RESOLUME
// this part does not check number of users
///////////////////////////////////////////

//   ***********************************************************************
// initialiseResolume()
//
// This is like "setup", but applied to Resolume. In other words,
// it runs only once, when the website is loaded.
//   ***********************************************************************
function initialiseResolume() {
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

// async function updateMelt() {
//   console.log("initiating async functions");
//   const meltArtifact = await loadClip(userWallSelection + 1, meltColumn); // play melt animation
// }

function updateResolumeState() {
  // send artifacts

  /*
    * STRUCTURE 1: If no wall:
      * Which artifact 
      * Play animation
      * Melt
    
    * STRUCTURE 2: With wall:
      * Check which wall
      * Which artifact 
      * Play animation
      * Melt
    
    * STRUCTURE 3: With multiple users:
      * Check which wall
      * Check if column is active:
        * Trigger Reset Video
          * Ideal Condition: Wait / Loading  
      * Which artifact
      * Play animation
      * Melt
  */
  /*
	----------------------------------------------------------------
	Animation Triggers:
	
	  * Left -> Artifact 1 {Bottle (3,2) + Flower (4,3)} -> Melt (3,7)
	  * Left -> Artifact 2 {Bottle (3,2) + Light(4,4)} -> Melt (3,7)
	  * Left -> Artifact 3 {Bottle (3,2) + Clock (4,5)} -> Melt (3,7)
	  * Left -> Artifact 4 {Bottle (3,2) + Surfboard (4,6)} -> Melt (3,7)

	  * Right -> Artifact 1 {Bottle (5,2) + Flower (6,3)} -> Melt (5,7)
	  * Right -> Artifact 2 {Bottle (5,2) + Light (6,4)} -> Melt (5,7)
	  * Right -> Artifact 3 {Bottle (5,2) + Clock (6,5)} -> Melt (5,7)
	  * Right -> Artifact 4 {Bottle (5,2) + Surfboard (6,6)} -> Melt (5,7)
    
    * REDUCE THE SPACE TIME COMPLEXITY!

    * CHANGES:
    * 1) Resolume Trigger Autopilot, so the code only need to call once thing
    * 2) only ask for product instead of wall and product saved within the global const and compare it to product.JSON variableID
    * 3) combine bottle and artifact animation to reduce complexity
    * 4) make the wall selection and product selection same as Resolume and JSON respectively

    * SYNTAX: loadClip(layer, clip)
    * loadClip(Left or Right, artifactNumber)
    
    * ARTIFACT (X) LEFT: 2; RIGHT: 5
    * ARTIFACT (Y) PRODUCT: 1,2,3,4
    * MELT-LEFT: 3,5
    * MELT-RIGHT: 5,5
    * BACKGROUND: 1,2,3,4,5 ( Passive, 1++ ); 
    * SUN: 6,1
	----------------------------------------------------------------
  */

  loadClip(1, 1); // play single user mode
  setLayerOpacity(6, 1); // make sun brigher
  loadClip(userWallSelection, userProductSelection); // play artifact

  //   loadClip(userWallSelection + 1, meltColumn); // play melt animation
  // initialiseResolume();

  //   loadClip(1, 1); // play s`ingle user mode
  //   setLayerOpacity(6, 1); // make sun brigher
  //   loadClip(userWallSelection, userProductSelection); // play artifact
  //   loadClip(userWallSelection + 1, meltColumn); // play melt animation
  //   initialiseResolume();
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

// ////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - END: ENTER OUR CODE HERE
// ////////////////////////////////////////////////////

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
