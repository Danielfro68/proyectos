let videoVid;


function setup() 
{
  createCanvas(710, 400);
  videoVid = createVideo(['assets/blancoNegro.mp4']);
  videoVid.hide(); // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.
}

function draw() {
  background(150);
  image(videoVid, 50, 50); // dibuja el cuadro del video en el lienzo.
}

function mousePressed() {
  videoVid.loop(); // configurar el video para empezar a reproducirse en bucle
}
