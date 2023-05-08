// this code below allow Cypress to be used with Cucumber for making BDD and User Stories
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file: preprocessor", cucumber());
};

document.addEventListener('touchstart', function(e) {
    document.documentElement.style.overflow = 'hidden';
});

document.addEventListener('touchend', function(e) {
    document.documentElement.style.overflow = 'auto';
});