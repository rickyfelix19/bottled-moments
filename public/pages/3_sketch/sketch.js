
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
  text("Choose One Object", 20, 30);
  text("Each object have different animations", 20, 50);
  
  // // Variables for carousel
  // let canvasWidth = windowWidth - 100;
  // let canvasHeight = windowHeight / 2;
  
  let carouselWidth = width; // Width of the carousel (adjust as needed)
  let carouselHeight = height/5; // Height of the carousel (adjust as needed)
  let currentIndex = 0; // Current index of the displayed 
  
  // Array of objects (items)
  // Display items in the carousel
  for (let i = 0; i < artifacts.length; i++) {
    let itemX = (i - currentIndex) * carouselWidth; // Calculate the X-coordinate of each item

    // Draw the item
    noFill();
    noStroke();
    rect(itemX, 0, carouselWidth, carouselHeight);

    // Display the item's title and description
    fill(0);
    text(artifacts[i].name, itemX + 10, carouselHeight / 2 + 10 );
    text(artifacts[i].description, itemX + 10, carouselHeight / 2 + 30 );
  }
  
  // button onlick function
  // function previousItem() {
  //   if (currentIndex > 0) {
  //     currentIndex--;
  //     redraw(); // Redraw the carousel with the updated index
  //   }
  // }

  // // Function to go to the next item in the carousel
  // function nextItem() {
  //   if (currentIndex < artifacts.length - 1) {
  //     currentIndex++;
  //     redraw(); // Redraw the carousel with the updated index
  //   }
  // }
}

function screen_2() {
  let messageField;
  let regex = "^(?i)(?:\b\w+\b\s*){1,20}$";

    // message checkers
  // write message box
  text("Share your thoughts", 20, 30);
  text("Your message will not be saved", 20, 45);
  
  messageField = createInput("");
  messageField.attribute(
    "placeholder", "Write your message here..."
  );
  
  messageField.size(width-(width/5), height-(height/1.5));
  messageField.position(25, 250);

  
  let message = messageField.value()
  
  if (message){
    textSize(24)
  }
  
  // check message with regex
  // let message = messageField.value();
  // var match = input.match(message);
  
  // Submit Button
  // BUTTON
}

  // send message
  text("Choose your walls", 20, 30);
  text("To send your artifact", 20, 50);

  // left wall
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])

  rect(15,60, (width/2)-20 , 80+(height/1.5))
  // right wall
  rect(5 + (width / 2), 60, (width / 2) - 20, 80 + (height / 1.5))
  
  // loading screen
}

// left screen
function screen_4A() {
  text("Send your Artifact", 20, 30);

  
}

// right screen
function screen_4B() {
  text("Send your Artifact", 20, 30);
  
}

// storeItem(key, value)
function userChoice(artifact) {
  selectedItems.push(artifact);
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

