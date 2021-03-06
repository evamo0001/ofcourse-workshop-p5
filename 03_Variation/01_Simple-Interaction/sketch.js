//The code example was written by Stavros Didakis
//for the needs of the P5.js workshop
//OFCourse, Thursday 5 July 2018 - Sunday 8 July 2018
//Shanghai, China

//01_Simple Interaction

//Define variables for the RGB
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(640, 480);
  stroke(0);
}

function draw() {
  //background(0);
  //When mouse is pressed, change randomly the RGB variables
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  //Display the ellipse
  fill(r, g, b);
  ellipse(mouseX, mouseY, 80, 80);
}
