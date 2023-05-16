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

// leftButton
function selectLeftWall() {
  leftWall = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Left Wall",
    on_release() {
      // console.log(currentMode);

      userSelection.wall = "Left";
      currentMode = 3;
    },
  });
}

// rightButton
function selectRightWall() {
  rightWall = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Right Wall",
    on_release() {
      // console.log(userSelection);

      userSelection.wall = "Right";
      currentMode = 4;
    },
  });
}
