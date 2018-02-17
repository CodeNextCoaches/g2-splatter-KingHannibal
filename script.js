// declare and initialize global variables
var canvas;
var canvasWidth=500;
var canvasHeight=400;
var button;
var slider;
var spread;
var drawSplatter;


function setup(){
  canvas=createCanvas(canvasWidth,canvasHeight);
  canvas.parent("canvas-area");
  canvas.mousePressed(drawSplatter);
  background(100,125,25);
  button=select("#clear-button");
  button.mousePressed(setup);
  slider=select("#slider");
  slider.input(updateSpread);
  updateSpread();
}



function drawEllipse(){
  fill("#ffeeff");
  ellipse(mouseX,mouseY,spread,spread);
}

function updateSpread(){
  spread=slider.value();
}

function drawSplatter(){
  var splatter=random (10,15);
  fill(random(0,255),random(0,255),random(0,255));
  for (i=0;i<splatter;i++){
    var circleSize= random(5,15);
    ellipse(random(mouseX-spread,mouseX+spread),random(mouseY-spread,mouseY+spread),circleSize, circleSize);
  }
}