// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();
// let product = JSON.parse(JSON.stringify(products));

let mode = 0;
let userArray = [];

// function preload() {
//   let products = require("./products.js");
// }

// carousel
let leftArrow, rightArrow, 

function preload() {
  let products = loadJSON('./product.json')
}

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
  background(220);

  // screen_1();
  // screen_2();
  screen_3();
  // sendLeft.draw();
  // sendRight.draw();
  myButton.draw();



  // if (screenMode == 0) {
  //   screen_1();
      // clear();
  // } else if (screenMode == 1) {
  //   screen_2();
      // clear();
  // } else if (screenMode == 2) {
  //   screen_3();
      // clear();
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function screen_1() {
  // https://editor.p5js.org/slow_izzm/sketches/VjpH74Oc1
  // https://editor.p5js.org/slow_izzm/sketches/535SiO_aC
  
  // ellipse(width / 2, height / 2, 300, 300);

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
  noLoop();
//   // rect(50, 50, 300, 300);

//   // write message box
  textSize(32);
  text('Message Box', 10, 30);
  textSize(20);
  text('Your message will not be saved', 10, 55);

  // let messageField;

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
  // messageField = createInput('')
  // messageField.attribute('placeholder', 'Write your feelings / emotions / thoughts inside this message box to submit it with the object you selected')
  // messageField.position(100, 100)
  // messageField.size(100)
  
  // let message = messageField.value()
  
  // if (message){
  //   textSize(24)
  // }
}

function screen_3() {

  textSize(32);
  text('Hold the screen on send your bottle', 10, 30);
  textSize(16);
  text('Your screen choice has no affect on your animations only on where it will show', 10, 55);

  // create two equally sized div / button to be sent to Resolume display  
}

function primaryButton() {
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Artifact",
    border_radius: "15",
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
      // copy the product array and send it into user array
      window.open("../pages/2_onboarding/onboarding.html", "_parent");
    },
  });
}

// selectButton
function selectButton() {
  function primaryButton() {
    myButton = new Button({
      x: width / 2,
      y: height / 2,
      width: width - 30,
      height: 50,
      align_x: 0,
      align_y: 0,
      color: "rgb(4834D4)",
      content: "Select Artifact",
      border_radius: "15",
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
        // copy the product array and send it into user array
        window.open("../pages/2_onboarding/onboarding.html", "_parent");
      },
    });
  }
}

// selectMessage
function selectMessage() {
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Artifact",
    border_radius: "15",
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
      // copy the product array and send it into user array
      window.open("../pages/2_onboarding/onboarding.html", "_parent");
    },
  });
}

// skipButton
function skipButton() {
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Artifact",
    border_radius: "15",
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
      // empty message
      mode++;
    },
  });
}
// backButton
function backButton() {
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Artifact",
    border_radius: "15",
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
      mode--;
    },
  });
}
// submitButton
function submitButton() {
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Artifact",
    border_radius: "15",
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
      // copy the product array and send it into user array
      // promise wait; send the data first then move ot the next page
    },
  });
}
``;

///////////////////////////////////////////////////////////////////
// initialiseResolume()
//
// This is like "setup", but applied to Resolume. In other words,
// it runs only once, when the website is loaded.
///////////////////////////////////////////////////////////////////
function initialiseResolume() {}

//////////////////////////////////////////////////////////////////////////////
// updateResolumeState()
//
// This function is invoked occasionally, based on certain conditions,
// tested within "draw". However, the steps included here should not be run
// every frame, to avoid too many OSC messages being sent to Resolume.
//////////////////////////////////////////////////////////////////////////////
function updateResolumeState() {
}


/////////////////////////////////////////////////////////////////////
// redrawResolumeComponents()
//
// This is like "draw", but applied to Resolume. In other words,
// it runs over and over, every frame, after the website is loaded.
/////////////////////////////////////////////////////////////////////
function redrawResolumeComponents() {}

////////////////////////////////////////////////////
// Helper functions:
//		- loadClip(layer, clip)
//				Loads a clip on Resolume. Arguments:
//						- layer: integer number of the layer where the clip is
//						- clip: integer number of the clip, within the layer
//		- turnLayerOff(layer)
//				Turns off a layer on Resolume. Arguments:
//						- layer: integer number of the layer to be turned off
//		- setLayerOpacity(layer, opacityLevel)
//						- layer: integer number of the layer we are setting the opacity of
//						- opacityLevel: decimal number between 0.0 (full transparency) and 1.0 (full opacity)
////////////////////////////////////////////////////
function loadClip(layer, clip) {
  sendMessage(
    "/composition/layers/" + layer + "/clips/" + clip + "/connect",
    1,
    "f"
  );
}

function turnLayerOff(layer) {
  sendMessage("/composition/layers/" + layer + "/clear", 0, "f");
}

function setLayerOpacity(layer, opacityLevel) {
  sendMessage(
    "/composition/layers/" + layer + "/video/opacity",
    opacityLevel,
    "f"
  );
}

////////////////////////////////////////////////////
// CUSTOMIZABLE SECTION - END: ENTER OUR CODE HERE
////////////////////////////////////////////////////

/***********************************************************************
  === PLEASE DO NOT CHANGE OR DELETE THIS SECTION ===
  This function sends a OSC message to server

  Parameters:
  	- address: the OSC message address pattern string
  	- value: single value as message payload
  	- type: type of the value passed as message payload
***********************************************************************/
function sendMessage(address, value, type) {
  let postData = JSON.stringify({
    id: 1,
    address: address,
    value: value,
    type: type,
  });

  xmlHttpRequest.open("POST", HOST + "/sendMessage", false);
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
  xmlHttpRequest.send(postData);
}
