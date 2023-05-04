/* 
    things to add:
    
    - font ✅
    - background 
    -- background color ✅
    -- waves -> sin ✅
    -- productCircle
    
    color palettes

    - buttons:  -> library ✅
    -- primary
    -- secondary
    -- outline

    advanced UI:
    - carousel
    - stepperUI
    - container
    - messageBox

    then extra layers of:
    - light first then dark
    - microanimations

*/

/* --------------- Variables  --------------- */

/* ----- Global Variable ----- */
let a, b, c, temp; // temporary variables 
let xPos, yPos, zPos; // positions
let amount; // for color or combining things
let width, height;

/* ----- Font ----- */
let fontLight, fontRegular, fontMedium, fontSemiBold, fontBold; // font styles
let fontColor, fontWeight, fontDescription, fontSizes; // font description
// let title1, title2, h1, h2, h3, h4, h5, overline1, overline2; // font sizes

/* ----- Color ----- */
let rgba1, rgba2, rgba3; // rgba values
let colorBackground; // #RGBA 
let colorOpacity; // opacity

/* ----- Waves ----- */
let angle;
let sin, cos, tan; // angleMode(Degrees)

/* ----- Circle Gradient ----- */
let radius;

/* ----- Buttons ----- */
let buttonPrimary, buttonSecondary, buttonOverline;

/* --------------- p5.js function start here  --------------- */

function preload () {
    fontLight = loadFont('./fonts/Quicksand-Light-300.ttf'); 
    fontRegular = loadFont('./fonts/Quicksand-Light-400.ttf'); 
    fontMedium = loadFont('./fonts/Quicksand-Light-500.ttf'); 
    fontSemiBold = loadFont('./fonts/Quicksand-Light-600.ttf'); 
    fontBold = loadFont('./fonts/Quicksand-Light-700.ttf'); 
}

/* --------------- UI Component starts here  --------------- */


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

class Background {
    constructor(rgba1, rgba2, colorBackground, colorOpacity, amount) {
        this.rgba1 = rgba1; // rgba values
        this.rgba2 = rgba2; // rgba values
        this.colorBackground = colorBackground; // #RGBA 
        this.colorOpacity = colorOpacity; // opacity
        this.amount = amount; //
    }
    showGradient() {
        lerpColor(rgba1, rgba2, amount);
    }

    showWaves() {
        // https://editor.p5js.org/RUIJUANMAO/sketches/itL9OccGI

        // beginShape()
        lerpColor(rgba1, rgba2, amount)
        // endShape()
    }
}

