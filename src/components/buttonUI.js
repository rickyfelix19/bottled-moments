/*
 * Primary: Fill-'Gradient' ; Text-#FBF4E9
 * Secondary: #5960FF ✅
 * Carousel Arrows: #383838 ✅
 */

var saveBtn,
	skipBtn,
	nextArrow,
	prevArrow,
	backBtn,
	leftWallBtn,
	rightWallBtn,
	submitBtn;

function saveMessageButton() {
	saveBtn = new Button({
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
		content: "Save Message",
		text_size: "24",
		text_font: "Quicksand",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

// skipButton
function skipMessageButton() {
	skipBtn = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		color: "#5960FF",
		content: "Skip",
		text_size: "24",
		text_font: "Quicksand",
		border_color: "#5960FF",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

function carouselNextButton() {
	nextArrow = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		color: "#383838",
		content: "->",
		text_size: "24",
		text_font: "Quicksand",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

function carouselPrevButton() {
	prevArrow = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		color: "#383838",
		content: "<-",
		text_size: "24",
		text_font: "Quicksand",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

// backButton
function backButton() {
	backBtn = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		content: "Back",
		border_radius: "15",
		color: "#5960FF",
		content: "Skip",
		text_size: "24",
		text_font: "Quicksand",
		border_color: "#5960FF",
		// myButton.style('cursor', 'pointer'),
		on_release() {
			mode--;
		},
	});
}

// leftButton
function selectLeftWallButton() {
	leftWallBtn = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		color: "#FBF4E9",
		background: "lightred",
		style_hover: "lightred",
		style_pressed: "lightred",
		content: "Select Left Wall",
		text_size: "24",
		text_font: "Quicksand",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

// rightButton
function selectRightWallButton() {
	rightWallBtn = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		color: "#FBF4E9",
		background: "red",
		// style_hover: "lightred",
		// style_pressed: "lightred",
		content: "Select Right Wall",
		text_size: "24",
		text_font: "Quicksand",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

function submitButton() {
	submitBtn = new Button({
		x: width / 2,
		y: height / 2,
		width: width - 30,
		height: 50,
		align_x: 0,
		align_y: 0,
		color: "#FBF4E9",
		background: "red",
		// style_hover: "lightred",
		// style_pressed: "lightred",
		content: "Submit Message",
		text_size: "24",
		text_font: "Quicksand",
		// myButton.style('cursor', 'pointer'),
		border_radius: "15",
		on_release() {
			// empty message
			mode++;
		},
	});
}

// export {
// 	saveMessageButton,
// 	skipMessageButton,
// 	carouselNextButton,
// 	carouselPrevButton,
// 	backButton,
// 	selectLeftWallButton,
// 	selectRightWallButton,
// 	submitButton,
// };
