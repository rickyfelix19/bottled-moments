//  Global variables
var messageField;

// For network
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

// To change screen
let currentMode = 0;
let totalMode = 3;

// for blob
const slices = 7,
  size = 160;
let randomWeights = [];

// text
let title, subtitle, UIText1, UIText2, UIText3;

// user array -> to send to resolume
let userSelection = [
  {
    userID: "",
    message: "",
    artifactID: "",
    screen: "",
  },
];

function preload() {
  // loadImage(artifacts[i].image, (artifactImage) => {
  //   image(artifactImage, 200, 200);
  // });

  // for (let i = 0; i < artifacts.length; i++) {
  //   loadArtifactImages = loadImage(artifacts[i].image);
  // }

  artifact = loadJSON("./product.json")   ;
  leftWall = loadImage("../../assets/images-webp/Left.png");
  rightWall = loadImage("../../assets/images-webp/Right.png");
}

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // regex patterns
  let regex = "^(?i)(?:\bw+\bs*){1,20}$";

  // buttons
  let saveMessage = saveMessageButton();
  let skipMessage = skipMessageButton();
  let selectArtifact = carouselSelect();
  let selectLeft = selectLeftWall();
  let selectRight = selectRightWall();

  // message Field
  messageField = createInput(userSelection.message || "");
  messageField.attribute("placeholder", "Write your message here...");

  messageField.position(20, height / 3);
  messageField.size(width - 35, height / 2);

  messageField.input(function () {
    userSelection.message = messageField.value();
  });

  // blob
  for (var i = 0; i < slices * 2; i++) {
    randomWeights[i] = random(700, 1000);
  }

  // check message with regex
  // let message = messageField.value();
  // var match = input.match(message);

  // server connections
  //   initialiseResolume();
}

function draw() {
  // // to test each screen
  // screen_1();
  // screen_2();
  // screen_3();
  // // To test images
  // image(productImg1URL, width / 2, height / 2);
  // image(productImg1, width / 2, height / 2);

  if (currentMode === 0) {
    screen_1();
    screen1_UI();
    // title
    fill("#383838");
    textSize(29);
    title = text("Share your thoughts", width / 2, 150);
    // subheading
    fill("#A0A0A0");
    textSize(18);
    subtitle = text("Your message will not be saved", width / 2, 180);
  } else if (currentMode === 1) {
    clear();
    screen_2();
    screen2_UI();
    // screen2_blob();
    // title
    fill("#383838");
    textSize(29);
    title = text("Select your artifacts", width / 2, 150);
    // subheading
    fill("#A0A0A0");
    textSize(18);
    subtitle = text("Each artifact has different animations", width / 2, 180);

    removeElements();
  } else if (currentMode === 2) {
    clear();
    screen_3();
    screen3_UI();
    // title
    fill("#383838");
    textSize(29);
    title = text("Choose the walls you would", width / 2, height / 1.4);
    fill("#383838");
    textSize(29);
    title = text("like to send your bottle", width / 2, height / 1.35);
    // subheading
    fill("#A0A0A0");
    textSize(18);
    subtitle = text(
      "This won't affect your animations",
      width / 2,
      height / 1.3
    );
    removeElements();
  }

  noLoop();
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

/* ===============SCREEN================= */

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
    // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
    image(
      productImg1URL,
      0,
      150,
      width,
      height / 1.8,
      0,
      0,
      productImg1URL.width,
      productImg1URL.height,
      CONTAIN
    );

    // for (let i = 0; i < loadArtifactImages.length; i++) {
    // image(loadedImages[i], x, 0, 100, 100);
    //   image(
    //     loadedImages[i],
    //     0,
    //     80,
    //     width,
    //     height / 1.8,
    //     0,
    //     0,
    //     200,
    //     200,
    //     CONTAIN
    //   );
    // }

    fill("#000000");

    let artifactName = text(
      // text(str, x, y, [x2], [y2])
      artifacts[i].name,
      itemX,
      itemY - 70,
      carouselWidth,
      carouselHeight
    );

    fill("#222222");
    let artifactDescription = text(
      artifacts[i].description,
      itemX,
      itemY,
      carouselWidth,
      carouselHeight
    );
  }
  selectArtifact.draw();
}

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
    width / 2 - 20,
    height / 2 + 80 - 50,
    0,
    0,
    leftWall.width,
    leftWall.height,
    CONTAIN
  );

  image(
    rightWall,
    5 + width / 2,
    130,
    width / 2 - 20,
    80 + height / 2 - 50,
    0,
    0,
    rightWall.width,
    rightWall.height,
    CONTAIN
  );

  // loading screen
  // selectArtifact.draw();
  // send message
  selectLeft.draw();
  selectRight.draw();
}

/* ================STEPPER==================== */

function screen1_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(65, 65, 20, 20);
  line(65, 65, width / 2 - 10, 65);
  UIText1 = text("Write Message", 65, 95);

  noFill();
  stroke("#A0A0A0");
  ellipse(width / 2, 65, 20, 20);
  line(width / 2 + 9, 65, width - 73, 65);
  noStroke();
  fill("#A0A0A0");
  UIText2 = text("Select Object", width / 2 + 5, 95);

  noFill();
  stroke("#A0A0A0");
  ellipse(width - 60, 65, 20, 20);
  noStroke();
  fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 55, 95);

  noStroke();
}

function screen2_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(65, 65, 20, 20);
  line(65, 65, width / 2 - 10, 65);
  UIText1 = text("Write Message", 65, 95);

  // noFill();
  // stroke("#A0A0A0");
  ellipse(width / 2, 65, 20, 20);
  line(width / 2 + 9, 65, width - 73, 65);
  // noStroke();
  // fill("#A0A0A0");
  UIText2 = text("Select Object", width / 2 + 5, 95);

  noFill();
  stroke("#A0A0A0");
  ellipse(width - 60, 65, 20, 20);
  noStroke();
  fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 55, 95);

  noStroke();
}

function screen3_UI() {
  textSize(16);
  stroke("#A199FF");
  fill("#A199FF");
  ellipse(65, 65, 20, 20);
  line(65, 65, width / 2 - 10, 65);
  UIText1 = text("Write Message", 65, 95);

  // noFill();
  // stroke("#A0A0A0");
  ellipse(width / 2, 65, 20, 20);
  line(width / 2 + 9, 65, width - 73, 65);
  // noStroke();
  // fill("#A0A0A0");
  UIText2 = text("Select Object", width / 2 + 5, 95);

  // noFill();
  // stroke("#A0A0A0");
  ellipse(width - 60, 65, 20, 20);
  // noStroke();
  // fill("#A0A0A0");
  UIText3 = text("Send Bottle", width - 55, 95);

  noStroke();
  noFill();
}

// blobs

function screen2_blob() {
  // https://editor.p5js.org/mcpecommander/sketches/GPDsjtaXD
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

/* =================BUTTONSS=================== */

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
    content: "Skip ->",
    x: width - 70,
    y: height / 3.5,
    width: 100,
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
        clear();
        // currentMode = 2;
      }
      cursor(ARROW);
      // console.log(currentMode);
    },
  });
}

// screen 2

function carouselLeft() {}

function carouselRight() {}

function carouselSelect() {
  selectArtifact = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 75,
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

// screen 3
function selectLeftWall() {
  selectLeft = new Button({
    x: width / 2,
    y: height - 145,
    width: width / 1.2,
    height: 75,
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
      window.open("../6_thank_you/thankYou.html", "_parent");
    },
  });
}

function selectRightWall() {
  selectRight = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 75,
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
      window.open("../6_thank_you/thankYou.html", "_parent");
    },
  });
}
