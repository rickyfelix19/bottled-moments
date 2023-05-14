// import * as buttons from "../../components/buttonUI";

var offset = 0;
var strum = 1;
let link;
var nextPage;

function preload() {
	bottle = loadImage("../../assets/images-webp/bottled-moments.webp");
}

function setup() {
	p5 = createCanvas(windowWidth, windowHeight);
	p5.parent("container-p5");

	let nextPage = nextPageButton();
}

function draw() {
	// background(220);
	waveBackground();
	image(
		bottle,
		0,
		0,
		width,
		height / 2,
		0,
		0,
		bottle.width,
		bottle.height,
		CONTAIN
	);
	nextPage.draw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function waveBackground() {
	// https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg
	noFill();
	noStroke();
	// background(230,100,60);

	// background(255);

	// stroke(4);

	// change to gradient color
	let from = color("#52d2e3");
	let to = color("#514A9D");

	// fill(230, 100, 60);
	// let gradient = lerpColor(c1, c2, 0.33);
	// fill(gradient);
	// let i = 0;
	// var colorMap = random(0, 0.75);
	// let gradientMap = lerpColor(from, to, random(0.65, 0.75));
	// fill(gradientMap);
	fill("#52d2e3");

	beginShape();
	vertex(0, height);
	for (var x = 0; x < width; x++) {
		//var angle = map(x, 0, width, 0, TWO_PI);
		var angle = offset + x * 0.01;
		// map x between 0 and width to 0 and Two Pi
		var y = map(sin(angle), -strum, strum, 350, 200);
		// make color mapping
		// make gradient based on the mapping

		vertex(x, y);
		clear();
	}
	vertex(width, height);
	endShape();
	offset += 0.1;
}

function nextPageButton() {
	nextPage = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		background: "FBF4E9",
		color: "#FFFFFF",
		// style_hover: "lightred",
		// style_pressed: "lightred",
		content: "Start Playing",
		text_size: 24,
		text_font: "Quicksand",
		style: ("cursor", "pointer"),
		border_radius: 15,
		on_release() {
			// empty message
			window.open("../pages/3_sketch/sketch.html", "_parent");
		},
	});
}
