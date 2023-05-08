var offset = 0;
var strum = 1;
let link;

function setup() {
  p5=createCanvas(windowWidth, windowHeight/1.5 );
  p5.parent('container-p5-waves');
}

function draw() {
  // background(220);
  waveBackground();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight/1.5);
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