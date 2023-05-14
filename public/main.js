import "./global.css";

// this code below allow Cypress to be used with Cucumber for making BDD and User Stories
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file: preprocessor", cucumber());
};

document.addEventListener("touchstart", function (e) {
  document.documentElement.style.overflow = "hidden";
});

document.addEventListener("touchend", function (e) {
  document.documentElement.style.overflow = "auto";
});

// function preload() {
//   fontLight = loadFont('./font/Quicksand-Light-300.ttf');
//   fontRegular = loadFont('./font/Quicksand-Light-400.ttf');
//   fontMedium = loadFont('./font/Quicksand-Light-500.ttf');
//   fontSemiBold = loadFont('./font/Quicksand-Light-600.ttf');
//   fontBold = loadFont('./font/Quicksand-Light-700.ttf');
//   font = loadFont("https://fonts.googleapis.com/css?Quicksand");
// }
