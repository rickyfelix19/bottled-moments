// For network
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // buttons
  let selectArtifact = carouselSelect();

  noLoop();
}

function draw() {
  messageBox();
  selectArtifact.draw();
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

////////////////////////////////////////////////

function productCarousel() {
  //  choose product
  text("Choose One Object", 20, 30);
  text("Each object have different animations", 20, 50);

  // // Variables for carousel
  let currentIndex = 0; // Current index of the displayed

  let carouselWidth = windowWidth;
  let carouselHeight = windowHeight / 2;

  // Array of objects (items)
  // Display items in the carousel

  for (let i = 0; i < artifacts.length; i++) {
    noStroke();

    let itemX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 2.5; // Calculate the X-coordinate of each item
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

function carouselSelect() {
  selectArtifact = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Object",
    on_release() {
      userSelection.artifact = artifact[i];
      console.log(userSelection);
      windows.open("../5_wall/wall.js");
      clear();
    },
  });
}
