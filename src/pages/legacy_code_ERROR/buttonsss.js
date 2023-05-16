function carouselNext() {
  nextArtifact = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "->",
    on_release() {
      // empty message
      mode++;
    },
  });
}

function carouselPrevious() {
  previousArtifact = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "<-",
    on_release() {
      // empty message
      mode++;
    },
  });
}

function submitButton() {
  submit = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Submit Message",
    on_release() {
      // empty message
      mode++;
    },
  });
}

//

function saveMessageButton() {
  saveMessage = new Button({
    x: width / 2,
    y: height - 55,
    width: width / 1.2,
    height: 75,
    align_x: 0,
    align_y: 0,
    content: "Save Message",
    on_clicked() {
      // console.log("this is before: " + currentMode);

      // userSelection.message = messageInput.value();
      if (currentMode <= totalMode) {
        //   console.log(userSelection);
        currentMode++;
        clear();
      }
      // console.log(userSelection);
    },
  });
}

function skipMessageButton() {
  // variables
  let skipMessage = createButton("Skip");

  // border_color: "#5960FF",

  // positions
  skipMessage.position(width / 1.2, height / 4.5, 100, 75);

  // behaviors
  skipMessage.mousePressed(function () {
    // console.log("this is before: " + currentMode);
    if (currentMode <= totalMode) {
      console.log(userSelection);
      currentMode = 1;
      clear();
    }
    // console.log(currentMode);
  });
}

// skipButton
// function skipMessageButton() {
//   skipMessage = new Button({
//     content: "Skip",
//     x: width / 1.2,
//     y: height / 4,
//     width: width / 18,
//     height: 75,
//     align_x: 0,
//     align_y: 0,
//     style_disabled: STYLE_DISABLED,
//     on_release() {
//       // console.log("this is before: " + currentMode);
//       if (currentMode <= totalMode) {
//         console.log(userSelection);
//         currentMode++;
//         clear();
//       }
//       // console.log(currentMode);
//     },
//   });
// }

function carouselSelect() {
  selectArtifact = new Button({
    x: width / 2,
    y: height / 2,
    width: width - 30,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "Select Object",
    on_release() {
      userSelection.artifact = artifact[i];
      console.log(userSelection);
      currentMode = 2;
    },
  });
}

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
