// Global Variables

var offset = 1;
var strum = 3;

let title, subheading;
let link;

var nextPage;

function preload() {
  // insert fonts here
  //   fonts = loadFont("https://fonts.googleapis.com/css?Quicksand");
  //   fontLight = loadFont('./font/Quicksand-Light-300.ttf');
  //   fontRegular = loadFont('./font/Quicksand-Light-400.ttf');
  //   fontMedium = loadFont('./font/Quicksand-Light-500.ttf');
  //   fontSemiBold = loadFont('./font/Quicksand-Light-600.ttf');
  //   fontBold = loadFont('./font/Quicksand-Light-700.ttf');

  // insert image below
  bottle = loadImage("../../assets/images-webp/bottled-moments.webp");
}

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5");

  // page buttons
  let nextPage = nextPageButton();
}

function draw() {
  // background(220);
  waveBackground();
  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
  image(
    bottle,
    0,
    50,
    width,
    height / 2.3,
    0,
    0,
    bottle.width,
    bottle.height,
    CONTAIN
  );
  // background("#222222");
  // fill("#222222");
  // textSize(48);
  // title = text("Bottled Moments", width / 2, 75);
  // textSize(20);
  // subtitle = text("Journey through Companionship", width / 2, 120);

  nextPage.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* ==================================== */

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
    var y = map(sin(angle / 3), -strum, strum, 120, 360);
    // make color mapping
    // make gradient based on the mapping

    vertex(x, y);
    clear();
  }
  vertex(width, height);
  endShape();
  offset += 0.1;
}

function nextPageButton() {
  nextPage = new Button({
    content: "Start Playing",
    x: width / 2,
    y: height / 1.6,
    width: width / 1.2,
    height: 55,
    align_x: 0,
    align_y: 0,
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // empty message
      window.open("../pages/2_onboarding/onboarding.html", "_parent");
    },
  });
}
