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
    category: "",
    description: "",
    color: "red",
    image: "www.google.com",
  },
  {
    artifactID: 2,
    name: "rose",
    category: "",
    description: "",
    color: "red",
    image: "www.google.com",
  },
  {
    artifactID: 3,
    name: "carpet",
    category: "",
    description: "",
    color: "red",
    image: "www.google.com",
  },
  {
    artifactID: 4,
    name: "flower",
    category: "",
    description: "",
    color: "red",
    image: "www.google.com",
  },
];

// function preload() {
//   let products = require("./products.js");
// }

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5");

  let nextScreen1 = selectButton();
  let nextScreen2 = selectMessage();
  let skipScreen = skipButton();
  let previousScreen = backButton();
  let submit = submitButton();

  // create the following files:
  // selectButton
  // selectMessage
  // skipButton
  // backButton
  // submitButton
}

function draw() {
  screen_1();
  // if (mode == 0) {
  //   mode = 1;
  // } else if (mode == 1) {
  //   mode = 2;
  // } else if (mode == 2) {
  //   mode = 0;
  // }
}

function screen_1() {
  noLoop();
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
  });
  // map product.json data into here and then add styling into it

  // nextScreen1.draw();
}

function screen_2() {
  // write message box
  text("Message Box");
  text("Your message will not be saved");

  let messageField;

  messageField = createInput("");
  messageField.attribute(
    "placeholder",
    "Write your feelings / emotions / thoughts inside this message box to submit it with the object you selected"
  );
  messageField.position(100, 100);
  messageField.size(100);

  let message = messageField.value();

  if (message) {
    textSize(24);
  }
}

function screen_3() {
  // send message
}
