// Global Variables

// let rules = [
//   {
//     rulesID: 1,
//     headings: "Journey through companionship",
//     subheadings:
//       "With people's support, we will feel warmth and have positive feelings",
//     image: "../../assets/images-webp/bottled-moments.webp",
//   },
//   {
//     rulesID: 2,
//     headings: "Reflection of emotions",
//     subheadings:
//       "This concept is visualize through Bottled Messages and the Lake",
//     image: "../../assets/images-webp/bottled-moments.webp",
//   },
//   {
//     rulesID: 3,
//     headings: "Personalized animations",
//     subheadings:
//       "With different animations available based on your selection of objects",
//     image: "../../assets/images-webp/bottled-moments.webp",
//   },
//   {
//     rulesID: 4,
//     headings: "Share your moment",
//     subheadings:
//       "Don’t forget to capture the moment and share it with everyone",
//     image: "../../assets/images-webp/bottled-moments.webp",
//   },
//   {
//     rulesID: 5,
//     headings: "Protect the environment",
//     subheadings: "Please do not litter to the lake",
//     image: "../../assets/images-webp/bottled-moments.webp",
//   },
// ];

function preload() {
  // insert fonts here
  //   fonts = loadFont("https://fonts.googleapis.com/css?Quicksand");
  //   fontLight = loadFont('./font/Quicksand-Light-300.ttf');
  //   fontRegular = loadFont('./font/Quicksand-Light-400.ttf');
  //   fontMedium = loadFont('./font/Quicksand-Light-500.ttf');
  //   fontSemiBold = loadFont('./font/Quicksand-Light-600.ttf');
  //   fontBold = loadFont('./font/Quicksand-Light-700.ttf');
  // insert images below
}

function setup() {
  p5 = createCanvas(windowWidth, windowHeight);
  p5.parent("container-p5"); // div

  textSize(10);
  // page buttons
  let productPage = productPageButton();
}

function draw() {
  productPage.draw();
  fill("#A0A0A0");
  textSize(15);

  p5.text(
    "Bottled Moments uses cookie for the best experience.",
    width / 2,
    height / 1.55
  );

  // viewRules();
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

/* ==================================== */

function productPageButton() {
  productPage = new Button({
    content: "Accept and Continue",
    x: width / 2,
    y: height / 1.4,
    width: width / 1.2,
    height: 75,
    align_x: 0,
    align_y: 0,
    on_release() {
      // empty7_legacy_code_ERROR
      window.open("../3_sketch/sketch.html", "_parent");
    },
  });
}
