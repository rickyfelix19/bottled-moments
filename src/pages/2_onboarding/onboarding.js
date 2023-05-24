// Global Variables

let rulesJSON = [];
let headingArr = [];
let subHeadingArr = [];
let iconArr = [];

function preload() {
  // insert fonts here
  //   fonts = loadFont("https://fonts.googleapis.com/css?Quicksand");
  //   fontLight = loadFont('./font/Quicksand-Light-300.ttf');
  //   fontRegular = loadFont('./font/Quicksand-Light-400.ttf');
  //   fontMedium = loadFont('./font/Quicksand-Light-500.ttf');
  //   fontSemiBold = loadFont('./font/Quicksand-Light-600.ttf');
  //   fontBold = loadFont('./font/Quicksand-Light-700.ttf');

  // loadJSON(path, datatype, [callback], [errorCallback])
  rulesJSON = loadJSON("rules.json", "json", storeData);
}

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  // page buttons
  let productPage = productPageButton();
  // noLoop();
}

function draw() {
  // console.log(ruleImage);
  productPage.draw();

  // image(iconsArr[1], 200, 200);

  // for (let i = 0; i < iconsArr.length; i++) {
  //   image(iconsArr[i], i * 200, 0, 600 / 3, 450 / 3);
  // }

  fill("#A0A0A0");
  textSize(windowHeight / 64);
  text(
    "Bottled Moments uses cookie for the best experience.",
    width / 2,
    height / 1.5
  );

  // image(iconsArr[1], width / 2, height / 2);
  rulesLeftColumn();
  rulesRightColumn();

  // productPage.draw();
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

function storeData(data) {
  // console.log(data); // return array of objects

  headingArr = data.map((data) => data.headings);
  // console.log(headingArr); // store heading arrays

  subHeadingArr = data.map((data) => data.subheadings);
  // console.log(subHeadingArr); // stores subheadings array

  iconArr = data.map((data) => loadImage(data.src));
  // console.log(iconsArr); // return icons arrays
}

/* ==================================== */

function rulesLeftColumn() {
  let images;
  let imageYPos = 15;

  for (let i = 0; i < iconArr.length; i++) {
    // image(iconArr[i], i * 200, 0, 600 / 3, 450 / 3);
    images = image(
      iconArr[i],
      windowWidth / 2.5 - 120,
      imageYPos,
      windowWidth / 6,
      windowHeight / 15,
      0,
      0,
      width,
      height,
      CONTAIN
    );
    imageYPos += 95;
  }

  // image.size(64, 64);
  // iconArr.forEach((rule) => {
  //   // // image(img, x, y, [width], [height]);
  //   images = image(
  //     rule,
  //     windowWidth / 2 - 170,
  //     imageYPos,
  //     64,
  //     64,
  //     0,
  //     0,
  //     rule.width,
  //     rule.height,
  //     CONTAIN
  //   );
  //   imageYPos += 100;
  //   // console.log(rule);
  // });
}

function rulesRightColumn() {
  // let PosX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 100; // Calculate the X-coordinate of each item
  // let PosY = (i - currentIndex) * (windowHeight / 2) + carouselHeight; // Calculate the Y-coordinate of each item

  // let y = 80;
  let titleHeight = windowHeight / 23;
  let subtitleHeight = windowHeight / 16;
  let title, subtitle;

  title = textSize(18);
  for (let i = 0; i < headingArr.length; i++) {
    fill("#4456F5");
    textAlign(LEFT);

    // let imageY = currentIndex * windowHeight - 100; // Calculate the
    title = text(headingArr[i], width / 2 - 90, titleHeight);
    titleHeight += 95;
  }

  subtitle = textSize(14);
  for (let i = 0; i < subHeadingArr.length; i++) {
    fill("#222222");
    textAlign(LEFT);

    // let imageY = currentIndex * windowHeight - 100; // Calculate the
    subtitle = text(subHeadingArr[i], width / 2 - 90, subtitleHeight);
    subtitleHeight += 95;
  }

  /* 
    * for Each cant be used in p5JS
    * it creates a never ending loop

   console.log(headingArr); // this should show the arrays in a Object format (exactly the same as JSON)
   headingArr.forEach(function (rule) {
     // y = (i * windowHeight) / 5;
     fill("#4456F5");
     textAlign(LEFT)
     // let imageY = currentIndex * windowHeight - 100; // Calculate the
     title = textSize(18);
     title = text(rule, windowWidth / 2 - 90, titleHeight);
     titleHeight += 100;
   })
   subHeadingArr.forEach(function (rule) {
     fill("#222222");
     textAlign(LEFT)
     // let imageY = currentIndex * windowHeight - 100; // Calculate the
     subtitle = textSize(14);
     subtitle = text(rule, windowWidth / 2 - 90, subtitleHeight);
     subtitleHeight += 100;
   })
   iconArr.forEach(function (rule) {
   // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
   icons = image(
     rule,
     0,
     0,
     width,
     height / 1.8,
     100,
     100,
     rule.width,
     rule.height,
     CONTAIN
   );
  */
}

function productPageButton() {
  productPage = new Button({
    content: "Accept and Continue",
    x: width / 2,
    y: height / 1.4,
    width: width / 1.2,
    height: 55,
    align_x: 0,
    align_y: 0,
    on_mouse_enter() {
      cursor("pointer");
    },
    on_mouse_exit() {
      cursor(ARROW);
    },
    on_release() {
      // empty message
      cursor(ARROW);
      window.open("../3_sketch/sketch.html", "_parent");
    },
  });
}
