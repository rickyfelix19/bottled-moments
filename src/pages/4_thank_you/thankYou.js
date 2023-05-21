// p5.js Default

var offset = 2;
var strum = 3;
let link;
let shadow;

// Global Variables
function preload() {
  bottle = loadImage("../../assets/images-webp/bottled-moments.webp");
}

function setup() {
  // pre setup
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // page buttons
  let like = followButton();
  let selectOther = otherArtifact();

  console.log(userSelection);
}

function draw() {
  waveBackground();
  // to create the pages

  shadow = image(
    bottle,
    width / 2.5,
    50,
    width / 3.5,
    height / 2.2,
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
  textSize(28);
  text("Your Bottle Is Now Drifting", width / 2, height / 1.8);
  text("Through The Sea", width / 2, height / 1.7);
  fill("#A0A0A0");
  textSize(16);
  text("PLEASE FIND YOUR DRIFT BOTTLE", width / 2, height / 1.55);
  text("IN THE SCREEN", width / 2, height / 1.5);

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

  like.draw();
  selectOther.draw();
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

/* ==================================== */

function footer() {
  background("#fdfdfd");
}
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

// screen 3
function followButton() {
  like = new Button({
    x: width / 2,
    y: height - 195,
    width: width / 1.2,
    height: 55,
    align_x: 0,
    align_y: 0,
    content: "Follow Lake Macquaire Arts",
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
