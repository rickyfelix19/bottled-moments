///////////////////////////////////////////////////////////////////
// initialiseResolume()
//
// This is like "setup", but applied to Resolume. In other words,
// it runs only once, when the website is loaded.
///////////////////////////////////////////////////////////////////
function initialiseResolume() {
  loadClip(1, 1); // load beach video
  loadClip(2, 1); // load virus video

  // Initialise text caption (layer 6)
  loadClip(6, 1);
  setLayerOpacity(6, 0.2);
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/size",
    5,
    "f"
  ); // set font size
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/color/red",
    255,
    "f"
  ); // set text colour to white
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/color/green",
    255,
    "f"
  );
  sendMessage(
    "/composition/layers/6/clips/1/video/source/blocktextgenerator/color/blue",
    255,
    "f"
  );
}

//////////////////////////////////////////////////////////////////////////////
// updateResolumeState()
//
// This function is invoked occasionally, based on certain conditions,
// tested within "draw". However, the steps included here should not be run
// every frame, to avoid too many OSC messages being sent to Resolume.
//////////////////////////////////////////////////////////////////////////////
function updateResolumeState() {
  // var brightnessLayer1 = map(timelinePos, 0, 1, 0.3, 0.7);
  // sendMessage('/composition/layers/1/video/effects/brightnesscontrast/effect/brightness', brightnessLayer1, "f");
  // var opacityLayer2 = 0;
  // if (timelinePos < 0.5) {
  // 	opacityLayer2 = map(timelinePos, 0.2, 0.5, 0, 1);
  // } else {
  // 	opacityLayer2 = map(timelinePos, 0.5, 1, 1, 0);
  // }
  // setLayerOpacity(2, opacityLayer2);
  // // Turn pulsing dots on/off
  // if (timelinePos < 0.25) {
  // 	turnLayerOff(3);
  // 	sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2019', "s"); // set caption text
  // } else {
  // 	loadClip(3, 1);
  // 	setLayerOpacity(3, 0.75);
  // 	if (timelinePos < 0.5) {
  // 		turnLayerOff(4);
  // 		sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2020', "s"); // set caption text
  // 	} else {
  // 		loadClip(4, 1);
  // 		setLayerOpacity(4, 0.75);
  // 		if (timelinePos < 0.75) {
  // 			turnLayerOff(5);
  // 		sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2021', "s"); // set caption text
  // 		} else {
  // 			loadClip(5, 1);
  // 			setLayerOpacity(5, 0.75);
  // 			sendMessage('/composition/layers/6/clips/1/video/source/blocktextgenerator/text/params/lines', '2022', "s"); // set caption text
  // 		}
  // 	}
  // }
}

/////////////////////////////////////////////////////////////////////
// redrawResolumeComponents()
//
// This is like "draw", but applied to Resolume. In other words,
// it runs over and over, every frame, after the website is loaded.
/////////////////////////////////////////////////////////////////////
function redrawResolumeComponents() {
  if (timelinePos > 0.75) {
    var posDotLayer5 = map(abs(cos(frameCount * 0.005)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/5/clips/1/dashboard/link2",
      posDotLayer5,
      "f"
    );

    var posDotLayer4 = map(abs(cos(frameCount * 0.02)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/4/clips/1/dashboard/link2",
      posDotLayer4,
      "f"
    );

    var posDotLayer3 = map(abs(cos(frameCount * 0.01)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link2",
      posDotLayer3,
      "f"
    );

    // Colour
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link1",
      abs(cos(frameCount * 0.5)),
      "f"
    );
    sendMessage(
      "/composition/layers/4/clips/1/dashboard/link1",
      abs(sin(frameCount * 0.1)),
      "f"
    );
    sendMessage(
      "/composition/layers/5/clips/1/dashboard/link1",
      abs(cos(frameCount * 0.3)),
      "f"
    );
  } else if (timelinePos > 0.5) {
    var posDotLayer4 = map(abs(cos(frameCount * 0.02)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/4/clips/1/dashboard/link2",
      posDotLayer4,
      "f"
    );

    var posDotLayer3 = map(abs(cos(frameCount * 0.01)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link2",
      posDotLayer3,
      "f"
    );

    // Colour
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link1",
      abs(cos(frameCount * 0.05)),
      "f"
    );
    sendMessage("/composition/layers/4/clips/1/dashboard/link1", 0, "f");
  } else if (timelinePos > 0.25) {
    var posDotLayer3 = map(abs(cos(frameCount * 0.01)), 0, 1, 0.3, 0.7);
    sendMessage(
      "/composition/layers/3/clips/1/dashboard/link2",
      posDotLayer3,
      "f"
    );

    // Colour
    sendMessage("/composition/layers/3/clips/1/dashboard/link1", 0, "f");
  }
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
  sendMessage(
    "/composition/layers/" + layer + "/clips/" + clip + "/connect",
    1,
    "f"
  );
}

function turnLayerOff(layer) {
  sendMessage("/composition/layers/" + layer + "/clear", 0, "f");
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
