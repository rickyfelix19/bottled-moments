var offset = 0;
var strum = 1;
let link;

function preload () {
  // fontLight = loadFont('../../font/Quicksand-Light-300.ttf'); 
  // fontRegular = loadFont('../../font/Quicksand-Light-400.ttf'); 
  // fontMedium = loadFont('../../font/Quicksand-Light-500.ttf'); 
  // fontSemiBold = loadFont('../../font/Quicksand-Light-600.ttf');
  // fontBold = loadFont('../../font/Quicksand-Light-700.ttf');
  // font = loadFont("https://fonts.googleapis.com/css?Quicksand");
  bottle = loadImage('../../assets/images-webp/bottled-moments.webp')
}

function setup() {
  p5=createCanvas(windowWidth, windowHeight);
  p5.parent('container-p5');

  let myButton = primaryButton()
}

function draw() {
  // background(220);
  waveBackground();
  image(bottle, 0, 0, width, height/2, 0, 0, bottle.width, bottle.height, CONTAIN);
  myButton.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// button is not responsive
function primaryButton() {
  myButton = new Button({
    x: width/2, y: height/2,
    width: width-30, height: 50,
    align_x: 0, align_y: 0,
    color: 'rgb(4834D4)',
    content: 'Start Playing',
    border_radius: '15',
    // myButton.style('cursor', 'pointer'),

    // on_press() {
    //   window.open("https://www.google.com", '_parent')
    // },
    // on_click() {
    //   window.open("https://www.google.com", '_parent')
    // }
    // on_mouse_enter() {
    //   myButton.style('cursor', 'pointer')
    // },
    on_release() {
      window.open("../pages/2_onboarding/onboarding.html", '_parent')
    },
  });
}

function waveBackground() {
  // https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg
  noFill()
  noStroke();
  // background(230,100,60);

  // background(255);
  
  // stroke(4);

  // change to gradient color
// lerpColor('#CCEAFF', '#FFFFFF', 0.54);

  fill(230,100,60);
  // fill('#CCEAFF', '#FFFFFF', 0.54);
  
  beginShape(); 
    vertex(0, height);
    for(var x = 0; x < width; x++){    
      //var angle = map(x, 0, width, 0, TWO_PI);
      var angle = offset + x * 0.01;
      // map x between 0 and width to 0 and Two Pi
      var y = map(sin(angle), -strum, strum, 350, 200);
      vertex(x, y);
      clear();
    }  
    vertex(width, height);
  endShape();
  offset += 0.1;
}

/*
  * Expected Outcome:
 
  * Success Metrics: 
 
*/