// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

let mode = 0;
let userSelection = [];

let itemWidth = 150;
let buttonHeight = 30;

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

let canvasWidth, canvasHeight;

function setup() {
  // textWrap(CHAR);

  // let canvasWidth = windowWidth - 100;
  // let canvasHeight = windowHeight /2 ;

  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5");
  // p5.center();

  // let nextScreen1 = selectButton();
  // let nextScreen2 = selectMessage();
  // let skipScreen = skipButton();
  // let previousScreen = backButton();
  // let submitMessage = submitButton();

  // create the following files:
  // selectButton
  // selectMessage
  // skipButton
  // backButton
  // messageButton

  noLoop(); // Stop the draw() function from continuously running
}

function draw() {
  // screen_1();
  // screen_2();
  screen_3();

  // if (mode == 0) {
  //   mode = 1;
  // } else if (mode == 1) {
  //   mode = 2;
  // } else if (mode == 2) {
  //   mode = 0;
  // }
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

// messageField
// carousel

function screen_1() {
  // noLoop();
  // skeleton loading
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
  
  messageField.size(width-(width/5), height-(height/1.5));
  messageField.position(25, 250);

  
  // check message with regex
  // let message = messageField.value();
  // var match = input.match(message);
  
  // Submit Button
  // BUTTON
}

function screen_2() {
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
  
  // button onlick function
  // function previousItem() {
  //   if (currentIndex > 0) {
  //     currentIndex--;
  //     redraw(); // Redraw the carousel with the updated index
  //   }
  // }

  // // Function to go to the next item in the carousel
  // function nextItem() {
  //   if (currentIndex < artifacts.length - 1) {
  //     currentIndex++;
  //     redraw(); // Redraw the carousel with the updated index
  //   }
  // }
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

