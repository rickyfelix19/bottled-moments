// DO NOT TOUCH THIS
import "./index.css"; // for Tailwind to run and work
import "flowbite"; // to make sure flowbite runs

document.addEventListener("touchstart", function (e) {
  document.documentElement.style.overflow = "hidden";
});

document.addEventListener("touchend", function (e) {
  document.documentElement.style.overflow = "auto";
});

// https://www.section.io/engineering-education/how-to-build-a-simple-router-in-javascript/
