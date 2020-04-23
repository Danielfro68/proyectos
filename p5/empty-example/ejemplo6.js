var sonido;


function preload() 
{
  soundFormats('ogg', 'mp3');
  sonido = loadSound('assets/jingle.mp3');

}

function setup() 
{
  createCanvas(640, 480);
  background(150);

  //sonido = createAudio('assets/groove.mp3');
  //sonido.autoplay(true);

  sonido.setVolume(0.5);
  //sonido.play();
  sonido.loop();
  
}

function draw()
{
  let vel = map(mouseY, 0, 480, 0, 4);
  sonido.rate(vel);
}
 

function mousePressed() 
{
	if (sonido.isPlaying()==true) 
  {
    sonido.stop();
  } 
  else 
  {
    sonido.play();
  }
}