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
// messageButton
function messageButton() {
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

// leftButton
function leftWall() {

}

// rightButton
function rightWall() {

}