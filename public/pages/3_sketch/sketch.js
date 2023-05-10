// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

// change screen display
var screenMode = 0;

// save user selection
let userStorage = [];

// carousel
let leftArrow, rightArrow, 

function preload() {
  let products = loadJSON('./product.json')
}

function setup() {
  p5=createCanvas(windowWidth, windowHeight);
  p5.parent('container-p5');

  // let nextPage = primaryButton()
  // let prevPage = previousButton()
  // let sendLeft = leftScreen()
  // let sendRight = rightScreen()

  // initialiseResolume();

    // createCanvas(windowWidth, windowHeight);
  let myButton = primaryButton()
}

function draw() {
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

  //  choose product
  textSize(32);
  text('Choose One Object', 10, 30);
  textSize(20);
  text('Each object have different animations', 10, 55);

  

  // products.artifacts.forEach(function (artifact) {
  //   fill(artifact.color);
  //   text(32)
  //   text(artifact.name, 10, 75);
  // });  
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
    x: width/2, y: height/2,
    width: width, height: 50,
    align_x: 0, aw: 0,
    content: 'Clicks: 0',
    on_press() {
      count++;
      myButton.text( 'Clicks: '+count );
    }
  });
}

// //Method 2: Can only go in order
// function nextButton() {
//   myButton = new Button({
//     x: width / 2, y: height / 2,
//     width: width - 30, height: 50,
//     align_x: 0, align_y: 0,
//     color: 'rgb(000000)',
//     content: 'Start Playing',
//     border_radius: '15',
//     // myButton.style('cursor', 'pointer'),

//     on_press() {
//       screenMode++;
//       if (screenMode == 3) {
//         screenMode = 0;
//       }
//       print(screenMode);
//     },
//   });
// }

// function previousButton() {
//   myButton = new Button({
//     x: width / 2, y: height / 2,
//     width: width - 30, height: 50,
//     align_x: 0, align_y: 0,
//     color: 'rgb(000000)',
//     content: 'Previous Page',
//     border_radius: '15',
//     // myButton.style('cursor', 'pointer'),

//     on_press() {
//       if (screenMode != 0) {
//         screenMode--;
//       }
//       print(screenMode);
//     },
//   });
// }

// function leftScreen() {
//   myButton = new Button({
//     x: width/2, y: height/2,
//     width: width, height: 50,
//     align_x: 0, aw: 0,
//     content: 'Clicks: 0',
//     on_press() {
//       count++;
//       myButton.text( 'Clicks: '+count );
//     }
//   });
// }

// function rightScreen() {
//   myButton = new Button({
//     x: width/2, y: height/2,
//     width: width, height: 50,
//     align_x: 0, aw: 0,
//     content: 'Clicks: 0',
//     on_press() {
//       count++;
//       myButton.text( 'Clicks: '+count );
//     }
//   });
// }


///////////////////////////////////////////////////////////////////
// initialiseResolume()
//
// This is like "setup", but applied to Resolume. In other words,
// it runs only once, when the website is loaded.
///////////////////////////////////////////////////////////////////
function initialiseResolume() {

}


//////////////////////////////////////////////////////////////////////////////
// updateResolumeState()
//
// This function is invoked occasionally, based on certain conditions,
// tested within "draw". However, the steps included here should not be run 
// every frame, to avoid too many OSC messages being sent to Resolume.
//////////////////////////////////////////////////////////////////////////////
// function updateResolumeState() {
// }


/////////////////////////////////////////////////////////////////////
// redrawResolumeComponents()
//
// This is like "draw", but applied to Resolume. In other words,
// it runs over and over, every frame, after the website is loaded.
/////////////////////////////////////////////////////////////////////
// function redrawResolumeComponents() {
// }

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
// function loadClip(layer, clip) {
// 	sendMessage("/composition/layers/" + layer + "/clips/" + clip + "/connect", 1, "f");
// }

// function turnLayerOff(layer) {
// 	sendMessage("/composition/layers/" + layer + "/clear", 0, "f");
// }

// function setLayerOpacity(layer, opacityLevel) {
// 	sendMessage("/composition/layers/" + layer + "/video/opacity", opacityLevel, "f");
// }

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
	let postData = JSON.stringify({ id: 1, 'address': address,
                  'value': value,
                  'type': type });

	xmlHttpRequest.open("POST", HOST + '/sendMessage', false);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
	xmlHttpRequest.send(postData);
}

