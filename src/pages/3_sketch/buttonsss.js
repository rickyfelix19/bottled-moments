function saveMessageButton() {
	saveMessage = new Button({
		x: width / 2,
		y: height - 150,
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
			mode++;
			screen_2();
			// empty message
		},
	});
}

// skipButton
function skipMessageButton() {
	skipMessage = new Button({
		x: width / 1.2,
		y: height / 10 + 50,
		width: 70,
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

function carouselNext() {
	nextArtifact = new Button({
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

function carouselPrevious() {
	previousArtifact = new Button({
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

function carouselSelect() {
	selectArtifact = new Button({
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

// leftButton
function selectLeftWall() {
	leftWall = new Button({
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
function selectRightWall() {
	rightWall = new Button({
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
	submit = new Button({
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

// backButton
function backButton() {
	previousScreen = new Button({
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
