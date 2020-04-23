let cnv;
function setup() {
  cnv = createCanvas(640, 480);
   cnv.position(600, 30);

   background(255,0,0);
}

function draw() {
	//no se usa mousePressed sino mouseIsPressed
  if (mouseIsPressed) 
  {
    fill(0);
  } 
  else 
  {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}