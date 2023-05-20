// p5.js Default

var offset = 2;
var strum = 4;
let link;

// Global Variables

function preload() {
  // insert fonts here
  //   fonts = loadFont("https://fonts.googleapis.com/css?Quicksand");
  //   fontLight = loadFont('./font/Quicksand-Light-300.ttf');
  //   fontRegular = loadFont('./font/Quicksand-Light-400.ttf');
  //   fontMedium = loadFont('./font/Quicksand-Light-500.ttf');
  //   fontSemiBold = loadFont('./font/Quicksand-Light-600.ttf');
  //   fontBold = loadFont('./font/Quicksand-Light-700.ttf');
  // insert images below
}

function setup() {
  // pre setup
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // page buttons
  let like = followButton();
  let selectOther = otherArtifact();

  // server connections
  // initialiseResolume();
}

function draw() {
  // waveBackground();
  // to create the pages

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
    var y = map(sin(angle), -strum, strum, 350, 200);
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
    content: "Follow Us",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log(currentMode);
      cursor(ARROW);
      window.open(`https://www.instagram.com/lakemacarts/?hl=en`);
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
    content: "Select Other Artifact",
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // console.log(userSelection);
      cursor(ARROW);
      window.open("../3_sketch/sketch.html", "_parent");
    },
  });
}
