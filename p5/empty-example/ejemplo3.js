

var x = 100;
var y = 250;

var anchoElipse = 100.5;

function preload() 
{
  //inconsolata = loadFont('assets/Futura.otf');
  fuente = loadFont('assets/coolveticarg.ttf');
}

function setup() 
{
  //createCanvas(600, 600);
  createCanvas(600, 600);


  //background(120,50,200);

  textFont(fuente);

}

function draw() 
{
  background(120,50,200);


  stroke(32,205,190);
  strokeWeight(10);
  line(20,60,430,160);

  
  beginShape();
  vertex(157, 115);  //primero y ultimo vertex iguales para cerrar la figura 
  vertex(192, 150); 
  vertex(157, 185); 
  vertex(122, 150); 
  vertex(157, 115);
  endShape();

  //ellipse(x,y,anchoElipse,anchoElipse);

  ellipse(mouseX,mouseY,anchoElipse,anchoElipse);

 
  
  noStroke();
  text('Hola mundo', 300, 300);


}