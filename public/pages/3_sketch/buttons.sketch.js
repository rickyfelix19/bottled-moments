// messageButton
function saveMessageButton() { // primary
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Save Message",
    border_radius: "15",
    on_release() {
      // copy the product array and send it into user array
      // promise wait; send the data first then move ot the next page

      // if array is empty fill it in; if not clear it out and then fill it in
      mode++;
    },
  });
}

// skipButton
function skipMessageButton() { // secondary outline
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
    on_release() {
      mode++;
    },
  });
}

// selectMessage
function carouselNext() { // ->
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "->",
    border_radius: "15",
    on_release() {
      // copy the product array and send it into user array
      if (currentIndex < artifacts.length - 1) {
        currentIndex++;
        redraw(); // Redraw the carousel with the updated index
      }
    }
  })
}

function carouselPrevious() { // <-
  myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "<-",
    border_radius: "15",
    on_release() {
      if (currentIndex > 0) {
      currentIndex--;
      redraw(); // Redraw the carousel with the updated index
      }
    }
  })
}
    
function carouselSelect() { // primary button
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
    on_release() {
      // if array is empty fill it in; if not clear it out and then fill it in

      mode++;
    },
  });
}

// backButton
function backButton() { // secondary outline button
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
    on_release() {
      mode--;
    },
  });
}

// leftButton
function selectLeftWall() { // primary button 
    myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Left Wall",
    border_radius: "15",
    on_release() {
      
    },
  });
}

// rightButton
function selectRightWall() { // primary button 
      myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Select Right Wall",
    border_radius: "15",
    on_release() {
    },
  });
}

function submitBottle() { // button with icon 
      myButton = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    color: "rgb(4834D4)",
    content: "Submit Artifact",
    border_radius: "15",
        on_release() {
      // submit user array to the server
    },
  });
}