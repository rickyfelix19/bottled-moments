let mode = 0;
let userArray = [];

function setup() {
  p5=createCanvas(windowWidth, windowHeight);
  p5.parent('container-p5');
}

function draw() {
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

