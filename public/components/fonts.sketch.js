let fontLight, fontRegular, fontMedium, fontSemiBold, fontBold; // font styles
let fontColor, fontWeight, fontDescription, fontSizes; // font description
// let title1, title2, h1, h2, h3, h4, h5, overline1, overline2; // font sizes

function preload() {
    fontLight = loadFont('../fonts/Quicksand-Light-300.ttf'); 
    fontRegular = loadFont('../fonts/Quicksand-Light-400.ttf'); 
    fontMedium = loadFont('../fonts/Quicksand-Light-500.ttf'); 
    fontSemiBold = loadFont('../fonts/Quicksand-Light-600.ttf'); 
    fontBold = loadFont('../fonts/Quicksand-Light-700.ttf'); 
}

class Font {
    constructor(xPos, yPos, fontColor, fontWeight, fontDescription, fontSizes) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.fontColor = fontColor
        this.fontWeight = fontWeight;
        this.fontDescription = fontDescription;
        this.fontSizes = fontSizes;
    }
    show() {
        text(xPos, yPos, fontWeight, fontDescription, fontSizes);
    }
}