var playing = false;
var videoVid;
var button;


function setup() 
{
  videoVid = createVideo(['assets/blancoNegro.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid); // adjuntar un listener al botón
}


function toggleVid() 
{
  //si el video esta en play y oprimen el boton
  if (playing == true) 
  {
    //pause el video
    videoVid.pause();
    //coloque en el texto del boton "play"
    button.html('play');
  } 
  //si el video esta en pause y oprimen el boton
  else 
  {
    //el video continua en forma de loop
    videoVid.loop();
    //coloque en el texto del boton "pause"
    button.html('pause');
  }

  //Si esta en true lo vuelve false, y si esta en false lo vuelve true
  playing = !playing;
}
