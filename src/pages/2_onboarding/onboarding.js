// Global Variables

let rules = [
  {
    rulesID: 1,
    headings: "Journey through companionship",
    subheadings:
      "With people's support, we will feel warmth and have positive feelings",
    icon: "https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/256/external-advertising-digital-marketing-flat-gradient-flat-gradient-andi-nur-abdillah-10.png",
  },
  {
    rulesID: 2,
    headings: "Reflection of emotions",
    subheadings:
      "This concept is visualize through Bottled Messages and the Lake",
    icon: "https://img.icons8.com/external-flat-andi-nur-abdillah/256/external-Panorama-virtual-reality-(flat)-flat-andi-nur-abdillah.png",
  },
  {
    rulesID: 3,
    headings: "Personalized animations",
    subheadings:
      "With different animations available based on your selection of objects",
    icon: "https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/256/external-bottle-ecology-flat-gradient-flat-gradient-andi-nur-abdillah.png",
  },
  {
    rulesID: 4,
    headings: "Share your moment",
    subheadings:
      "Don’t forget to capture the moment and share it with everyone",
    icon: "https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/256/external-discussion-online-learning-flat-gradient-flat-gradient-andi-nur-abdillah.png",
  },
  {
    rulesID: 5,
    headings: "Protect the environment",
    subheadings: "Please do not litter to the lake",
    icon: "https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/256/external-ecology-ecology-flat-gradient-flat-gradient-andi-nur-abdillah-9.png",
  },
];

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

  text(
    "Bottled Moments uses cookie for the best experience.",
    width / 2,
    height - 110
  );
}

function windowResized() {
  p5 = resizeCanvas(windowWidth, windowHeight);
}

/* ==================================== */

function productPageButton() {
  productPage = new Button({
    content: "Accept and Continue",
    x: width / 2,
    y: height - 55,
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
