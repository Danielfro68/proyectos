var imagen;

function preload() 
{
  imagen = loadImage('assets/mundo.jpg');
}

function setup() {
  createCanvas(720, 320);
}

function draw() 
{
  image(imagen, mouseX, mouseY);
}