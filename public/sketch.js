// https://editor.p5js.org/rickyfelix19/sketches/tJDT3xJJl

/*
 * This example uses some custom HTML and CSS alongside the sketch.
 * The title and paragraph are HTML elements, defined in index.html.
 * Additionally, the p5 canvas is placed in an HTML element
 * defined by the coder, with an id called 'container'.
 * This lets the programmer control where it appears on the page
 * in relationship to other elements. In this particular example,
 * this lets us put the title above the page (an h1 element) and
 * the paragraph (a p element) below it.
 */

function setup() {
  // new: keep a variable that holds the canvas element
  let cnv = createCanvas(400, 400);
  // assign the "parent" element to ensure that the canvas
  // is added to the element named "container"
  cnv.parent('container');
}

function draw() {
  background(0);

  ellipse(mouseX, mouseY, 50, 50);
}