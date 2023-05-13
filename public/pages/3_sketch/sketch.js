
// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

// screen
let mode = 0;

// buttons
let itemWidth = 150;
let buttonHeight = 30;

let canvasWidth, canvasHeight;

// carousel variables
// messageBox variables

let artifacts = [
  {
    artifactID: 1,
    name: "Flower",
    description: "lorem ipsum",
    // image: `https://drive.google.com/file/d/1CaZ3yetUebhvGsLsJp18zThW_wo0McY7/view`,
    color: "red",
    image: '../../assets/images-webp/bottled-moments.webp',
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
    image: `www.google.com`
  },
  {
    artifactID: 4,
    name: "Surfboard",
    description: "lorem ipsum",
    color: "red",
    image: `www.google.com`,
  },
];

// user array json array
let userSelection = [{
  'artifactID': '',
  'message': '',
  'screen': ''
}];

function setup() {
  // textWrap(CHAR);
  p5=createCanvas(windowWidth, windowHeight);
  p5.parent('container-p5');
  
  // screen 1
  let skipMessage = skipMessageButton();
  let saveMessage = saveMessageButton();

  // screen 2
  let nextArtifact = carouselNext();
  let previousArtifact = carouselPrevious();
  let selectArtifact = carouselSelect();

  // screen 3 and 4
  let leftWall = selectLeftWall();
  let rightWall = selectRightWall();
  let submit = submitButton();
  
  // return to previous screen
  let previousScreen = backButton();
  
  initialiseResolume();  
  noLoop();
}

function draw() {
  // screen_1();
  // screen_2();
  // screen_3();
  // screen_4A();
  // screen_4B();

  if (mode == 0) {
    // message screen
    screen_1();
  } else if (mode == 1) {
    // artifact screen
    screen_2();
  } else if (mode == 2) {
    // artifact choose wall
    screen_3();
  } else if (mode == 3) {
    // left wall
    screen_4A();
  } else if (mode == 4) {
    // right wall
    screen_4B();
  }
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

function screen_1() {
  //  choose product
  text("Choose One Object", 20, 30);
  text("Each object have different animations", 20, 50);
  
  // // Variables for carousel
  // let canvasWidth = windowWidth - 100;
  // let canvasHeight = windowHeight / 2;
  
  let carouselWidth = width; // Width of the carousel (adjust as needed)
  let carouselHeight = height/5; // Height of the carousel (adjust as needed)
  let currentIndex = 0; // Current index of the displayed 
  
  // Array of objects (items)
  // Display items in the carousel
  for (let i = 0; i < artifacts.length; i++) {
    let itemX = (i - currentIndex) * carouselWidth; // Calculate the X-coordinate of each item

    // Draw the item
    noFill();
    noStroke();
    rect(itemX, 0, carouselWidth, carouselHeight);

    // Display the item's title and description
    fill(0);
    text(artifacts[i].name, itemX + 10, carouselHeight / 2 + 10 );
    text(artifacts[i].description, itemX + 10, carouselHeight / 2 + 30 );
  }
}

function screen_2() {
  let messageField;
  let regex = "^(?i)(?:\b\w+\b\s*){1,20}$";

  // message checkers
  // write message box
  text("Share your thoughts", 20, 30);
  text("Your message will not be saved", 20, 45);
  
  messageField = createInput("");
  messageField.attribute(
    "placeholder", "Write your message here..."
  );
  
  messageField.size(width - (width / 5), height - (height / 1.5));
  messageField.position(25, 250);
  
  let message = messageField.value()
  
  if (message) {
    textSize(24)
  }
  
  // check message with regex
  // let message = messageField.value();
  // var match = input.match(message);
  
  // Submit Button
  // BUTTON
}

function screen_3() {
  // send message
  text("Choose your walls", 20, 30);
  text("To send your artifact", 20, 50);

  // left wall
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])

  rect(15,60, (width/2)-20 , 80+(height/1.5))
  // right wall
  rect(5 + (width / 2), 60, (width / 2) - 20, 80 + (height / 1.5))
  
  // loading screen
}

// left screen
function screen_4A() {
  text("Send your Artifact", 20, 30);
  
}

// right screen
function screen_4B() {
  text("Send your Artifact", 20, 30);
  
}

// storeItem(key, value)
function userChoice(artifact) {
  selectedItems.push(artifact);
}
