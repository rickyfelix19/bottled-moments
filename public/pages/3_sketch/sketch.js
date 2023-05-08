
// Fixed variables
var HOST = window.location.origin;
let xmlHttpRequest = new XMLHttpRequest();

let mode = 0;
let userArray = [];

function setup() {
  p5=createCanvas(windowWidth, windowHeight);
  p5.parent('container-p5');

  initialiseResolume();
  let myButton = primaryButton()
  
}

function draw() {
  // page 1 button 1 clicked -> page 2
  // page 2 button 1 clicked -> page 1, page 2 button 2 clicked -> page 3
  // page 3 button 1 clicked -> page 2, page 3 button 2 clicked -> send request
    if (mode == 0) {
    screen_1();
  } else if (mode == 1) {
    screen_2();
  } else if (mode == 2) {
    screen_3();
  }
}

function screen_1() {
  //  choose product
  text('Choose One Object')
  text('Each object have different animations')

}

function screen_2() {
  // write message box
  text('Message Box')
  text('Your message will not be saved')

  let messageField;

  messageField = createInput('')
  messageField.attribute('placeholder', 'Write your feelings / emotions / thoughts inside this message box to submit it with the object you selected')
  messageField.position(100, 100)
  messageField.size(100)
  
  let message = messageField.value()
  
  if (message){
    textSize(24)
  }
}

function screen_3() {
  // send message
}

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
function updateResolumeState() {
}


/////////////////////////////////////////////////////////////////////
// redrawResolumeComponents()
//
// This is like "draw", but applied to Resolume. In other words,
// it runs over and over, every frame, after the website is loaded.
/////////////////////////////////////////////////////////////////////
function redrawResolumeComponents() {
}

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
	sendMessage("/composition/layers/" + layer + "/clips/" + clip + "/connect", 1, "f");
}

function turnLayerOff(layer) {
	sendMessage("/composition/layers/" + layer + "/clear", 0, "f");
}

function setLayerOpacity(layer, opacityLevel) {
	sendMessage("/composition/layers/" + layer + "/video/opacity", opacityLevel, "f");
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
	let postData = JSON.stringify({ id: 1, 'address': address,
                  'value': value,
                  'type': type });

	xmlHttpRequest.open("POST", HOST + '/sendMessage', false);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
	xmlHttpRequest.send(postData);
}

