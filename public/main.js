import "./global.css";

// this code below allow Cypress to be used with Cucumber for making BDD and User Stories
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file: preprocessor", cucumber());
};

// light mode-dark mode switch
function lightMode() {
  console.log("light mode");
}
