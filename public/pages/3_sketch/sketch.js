// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
// let product = JSON.parse(JSON.stringify(products));

let mode = 0;
let userSelection = [];

let itemWidth = 150;
let buttonHeight = 30;

let artifacts = [
  {
    artifactID: 1,
    name: "shield",
    category: "concept",
    description: "",
    color: "red",
    image: `www.google.com`,
  },
  {
    artifactID: 2,
    name: "rose",
    category: "plant",
    description: "",
    color: "red",
    image: `www.google.com`,
  },
  {
    artifactID: 3,
    name: "carpet",
    category: "magical",
    description: "",
    color: "red",
    image: `www.google.com`
  },
  {
    artifactID: 4,
    name: "flower",
    category: "plant",
    description: "",
    color: "red",
    image: `www.google.com`,
  },
];

// function preload() {
//   let products = require("./products.js");
// }

function storeItem(artifact) {
  selectedItems.push(artifact);
}

function setup() {
  noLoop();

  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5");

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
  // 

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
  resizeCanvas(windowWidth, windowHeight);
}

function screen_1() {
  // skeleton loading


  //  choose product
  text("Choose One Object", 20, 30);
  text("Each object have different animations", 20, 50);

  // Display the items in a carousel
  let carouselWidth = artifacts.length * itemWidth;
  let carouselLeft = (width - carouselWidth) / 2;

  artifacts.forEach((artifact, index) => {
    let itemLeft = carouselLeft + index * itemWidth;

    // Display the item's name
    fill(0);
    text(artifact.name, itemLeft + 20, 100);
        // Display the item's category
    fill(128);
    text(artifact.category, itemLeft + 20, 130);

    // Display the item's description
    fill(64);
    text(artifact.description, itemLeft + 20, 160);

    // Display the item's color
    noStroke();
    fill(artifact.color);
    rect(itemLeft + 20, 180, 30, 30);

    // Display the item's image
    let img = loadImage(artifact.image);
    image(img, itemLeft + 80, 180, 50, 50);
  });
  
  // Add a button for each item
  artifacts.forEach((artifact, index) => {
    let button = createButton(artifact.name);
    button.position(20 + index * itemWidth, 20);
    button.mousePressed(() => {
      storeItem(item);
    });
  });

  // Display the selected items
  fill(0);
  text('Selected items:', 20, 300);
  selectedItems.forEach((artifact, index) => {
    text(artifact.name, 20, 330 + index * 30);
  });
}


  // map product.json data into here and then add styling into it

  // nextScreen1.draw();

function screen_2() {
  // skeleton loading

  // message checkers
  var regex = /^(?i)(?:\b\w+\b\s*){1,20}$/;
  let messageField;

  let message = messageField.value();
  var match = input.match(message);

  // write message box
  text("Message Box", 20, 30);
  text("Your message will not be saved", 20, 50);

  messageField = createInput("");
  messageField.attribute(
    "placeholder",
    "Write your feelings / emotions / thoughts inside this message box to submit it with the object you selected"
  );
  messageField.position(windowWidth/2, windowHeight/2);
  messageField.size(windowWidth/3, windowHeight/3);

  if (match) {
    textSize(24);
  }
}

function screen_3() {
  // send message
  text("Send your Artifact", 20, 30);
  text("By holding the screens", 20, 50);

  // left side
  // right side

  // loading screen
}

// storeItem(key, value)
function storeItem(artifact) {
  selectedItems.push(artifact);
}