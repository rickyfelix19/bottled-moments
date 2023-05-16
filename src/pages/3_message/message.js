// For network
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
var messageField;

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // buttons
  let saveMessage = saveMessageButton();
  let skipMessage = skipMessageButton();

    messageField = createInput("");
  messageField.attribute("placeholder", "Write your message here...");
  
  messageField.position(75, height / 5);
  messageField.size(width / 1.1, height / 1.8);

  // server connections
  //   initialiseResolume();
}

function draw() {
    messageField;
  messageBox();
}
function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

////////////////////////////////////////////////

function messageBox() {
  let regex = "^(?i)(?:\bw+\bs*){1,20}$";

  //   messageField = createInput(userSelection.message || "");
  //   messageField.input(function () {
  //     userSelection.message = messageField.value();
  //   });

  // let message = messageField.value();
  // var match = input.match(message);

  // Submit Button
  skipMessage.draw();
  saveMessage.draw();
  //   noLoop();
}

function saveMessageButton() {
  saveMessage = new Button({
    x: width / 2,
    y: height / 1.4,
    width: width / 1.2,
    height: 75,
    align_x: 0,
    align_y: 0,
    content: "Save Message",
    on_release() {
      // console.log("this is before: " + currentMode);

      // userSelection.message = messageInput.value();
      console.log(userSelection);
      // clear();
      windows.open("../4_product/product.js");
      console.log(userSelection);
    },
  });
}

// skipButton
function skipMessageButton() {
  skipMessage = new Button({
    content: "Skip",
    x: width / 1.2,
    y: height / 6,
    width: width / 15,
    height: 45,
    align_x: 0,
    align_y: 0,
    style_disabled: STYLE_DISABLED,
    on_release() {
      // console.log("this is before: " + currentMode);
      console.log(userSelection);
      // currentMode++;
      // currentMode = 2;
      //   clear();
      windows.open("../4_product/product.js");
      // console.log(currentMode);
    },
  });
}
