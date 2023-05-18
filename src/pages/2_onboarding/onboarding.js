// Global Variables

var ruleImage = [];

let rules = [
  {
    rulesID: 1,
    headings: "Journey through companionship",
    subheadings:
      "With people's support, we will feel warmth and have positive feelings",
    icon: "../../assets/icons-svg/family.svg",
    src: "https://img.icons8.com/color/128/family.svg",
    reference: "icons-8",
  },
  {
    rulesID: 2,
    headings: "Reflection of emotions",
    subheadings:
      "This concept is visualize through Bottled Messages and the Lake",
    icon: "../../assets/icons-svg/panorama.svg",
    src: "https://img.icons8.com/external-flat-andi-nur-abdillah/128/external-Panorama-virtual-reality-(flat)-flat-andi-nur-abdillah.svg",
    reference: "andi-nur-abdillah-from-icons-8",
  },
  {
    rulesID: 3,
    headings: "Personalized animations",
    subheadings:
      "With different animations available based on your selection of objects",
    icon: "../../assets/icons-svg/what.svg",
    src: "https://img.icons8.com/color/128/what.svg",
    reference: "icons-8",
  },
  {
    rulesID: 4,
    headings: "Share your moment",
    subheadings:
      "Don't forget to capture the moment and share it with everyone",
    icon: "../../assets/icons-svg/email.svg",
    src: "https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/128/external-email-morning-routine-flat-gradient-flat-gradient-andi-nur-abdillah.svg",
    reference: "andi-nur-abdillah-from-icons-8",
  },
  {
    rulesID: 5,
    headings: "Protect the environment",
    subheadings: "Please do not litter to the lake",
    icon: "../../assets/icons-svg/ecology.svg",
    src: "https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/128/external-ecology-ecology-flat-gradient-flat-gradient-andi-nur-abdillah-9.svg",
    reference: "andi-nur-abdillah-from-icons-8",
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
  // for (let i = 0; i < rules.length; i++) {
  //   ruleImage[i] = loadImage(rules.src);
  // }
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

  // console.log(ruleImage);

  // image(rules.src[1], 200, 200);

  // for (let i = 0; i < ruleImage; i++) {
  //   image(ruleImage[i], i * 200, 0, 600 / 3, 450 / 3);
  // }

  fill("#A0A0A0");
  textSize(15);
  text(
    "Bottled Moments uses cookie for the best experience.",
    width / 2,
    height - 110
  );

  // ruleIcons();
  ruleTexts();
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

function ruleTexts() {
  // let PosX = (i - currentIndex) * (windowWidth / 2) + carouselWidth / 100; // Calculate the X-coordinate of each item
  // let PosY = (i - currentIndex) * (windowHeight / 2) + carouselHeight; // Calculate the Y-coordinate of each item

  // let y = 80;
  let titleHeight = 110;
  let subtitleHeight = 140;
  let title, subtitle, icons;

  rules.forEach(function (rule) {
    // y = (i * windowHeight) / 5;
    fill("#222222");
    textAlign(LEFT);

    // let imageY = currentIndex * windowHeight - 100; // Calculate the
    title = textSize(20);
    title = text(rule.headings, windowWidth / 2.1, titleHeight);
    titleHeight += 110;

    subtitle = textSize(16);
    subtitle = text(rule.subheadings, windowWidth / 2.1, subtitleHeight);
    subtitleHeight += 110;
  });
}
