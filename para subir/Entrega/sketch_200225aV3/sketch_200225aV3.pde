
import controlP5.*;

ControlP5 cp5;

Table dataTable;

Knob myKnobA;

Particle[] particles;
float alpha;

Particle2[] particles2;
float alpha2;

int dataMaxColumna2;

int dataMaxColumna3;

float columna3 = 0;

float columna2 = 0;

int priv[] ;
int pub[] ;
String local[] ;

int knobInt;

int rowCount;

boolean unaVez;
int dato = 0;
int datoPriv = 0;
int datoPub = 0;
String datoLocal;

PFont letraFuente;

void setup() 
{
  size(1280, 680);
  background(0);
  noStroke();
 
  setParticles();
  setParticles2();
  
  cp5 = new ControlP5(this);  

  gui();
  
  dataTable = loadTable("datos.tsv", "header");
  rowCount = dataTable.getRowCount();
  
  priv = new int [rowCount];
  pub = new int [rowCount];
  local = new String [rowCount];
  
  for (int i = 0; i < rowCount; i++) 
  {
    TableRow row = dataTable.getRow(i);
    
    priv[i] = row.getInt("PR");
    pub[i] = row.getInt("PU");
    local[i] = row.getString("LO");
    
    
    columna2 = dataTable.getInt(i, 1); // column 4
    //determina el valor max y minimo de la columna 4
    if (priv[i] > dataMaxColumna2) 
    {
      dataMaxColumna2 = priv[i];
    }
    
    columna3 = dataTable.getInt(i, 2); // column 3
    //determina el valor max y minimo de la columna 3
    if (pub[i] > dataMaxColumna3) 
    {
      dataMaxColumna3 = pub[i];   
    }
    
  }
  
  
  
  //println(dataMaxColumna3);
  //println(dataMaxColumna2);
  //println(knobInt);
  
  letraFuente = loadFont("MyriadCAD-32.vlw");
  
}

void draw() 
{
  //esto ya no va aca sino en el metodo void Escala
  //knobInt = int(myKnobA.getValue());
  //println(knobInt);
  
    
  if(knobInt > 1 && knobInt < 25)
  {
    dato = 0;  
    //PRUEBA
    //datoPriv = 1;
  }
  else if(knobInt > 25 && knobInt < 50)
  {
    dato = 1;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 50 && knobInt < 75)
  {
    dato = 2;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 75 && knobInt < 100)
  {
    dato = 3;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 100 && knobInt < 125)
  {
    dato = 4;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 125 && knobInt < 150)
  {
    dato = 5;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 150 && knobInt < 175)
  {
    dato = 6;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 175 && knobInt < 200)
  {
    dato = 7;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 200 && knobInt < 225)
  {
    dato = 8;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 225 && knobInt < 250)
  {
    dato = 9;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 250 && knobInt < 275)
  {
    dato = 10;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 275 && knobInt < 300)
  {
    dato = 11;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 300 && knobInt < 325)
  {
    dato = 12;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 325 && knobInt < 350)
  {
    dato = 13;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 350 && knobInt < 375)
  {
    dato = 14;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 375 && knobInt < 400)
  {
    dato = 15;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 400 && knobInt < 425)
  {
    dato = 16;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 425 && knobInt < 450)
  {
    dato = 17;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 450 && knobInt < 475)
  {
    dato = 18;
    //PRUEBA
    //datoPriv = 80;
  }
  else if(knobInt > 475 && knobInt < 500)
  {
    dato = 19;
    //PRUEBA
    //datoPriv = 80;
  }
  
  //revise los antteriores códigos con el uso del slider y la carga de datos, ESTO ES LO QUE DEBE IMPLEMENTAR EN SU CÓDIGO OJO!!!!
  datoPriv = priv[dato];
  datoPub = pub[dato];
  datoLocal = local[dato];
  
  
  frameRate(20);
  alpha = map(mouseX, 0, width, 5, 35);
  fill(0, alpha);
  rect(0, 0, width, height);

  loadPixels();
    for (Particle p : particles) {
      p.move();
    }
  updatePixels();
  
  
  // no todo es ctrl+C ctrl+V, ojo!! tiene que mirar que es lo que debe duplicar
  frameRate(20);
  alpha2 = map(mouseX, 0, width, 5, 35);
  fill(0, alpha2);
  rect(0, 0, width, height);

  loadPixels();
  for (Particle2 p : particles2) {
    p.move();
  }
  updatePixels();
  
 
  
  fill(255,255,255);
  textFont(letraFuente, 20);
  text("Las lineas de colores calidos representan a los padres que prefieren un coLegio privado para su hijo", 150, 650);
  text("Los frios representan a los padres que prefieren un colegio público", 150, 670);
  textFont(letraFuente, 24);
  text("Localidad "+datoLocal, 900, 30);
}

void gui()
{ 
     
     myKnobA = cp5.addKnob("Escala")
               .setRange(0,500)
               .setValue(2)
               .setPosition(10,550)
               .setRadius(50)
               .setDragDirection(Knob.VERTICAL)
               ;

}

void Escala(int theValue)
{
  knobInt = theValue;
  //println(knobInt);
  
  unaVez = false;
}


void setParticles() {
  
  
    particles = new Particle[datoPriv*100];
    
    println(datoPriv*100);
    
    for (int i = 0; i < (datoPriv*100); i++) { 
      float x = random(width);
      float y = random(height);
      float adj = map(y, 0, height, 255, 0);
      int c = color(250, adj, 20);
      particles[i]= new Particle(x, y, c);
    }
    
  
}

void setParticles2() {
  
  println(datoPub*100);
 
    particles2 = new Particle2[datoPub*100];
    for (int i = 0; i < (datoPub*100); i++) { 
      float x = random(height);
      float y = random(width);
      float adj = map(y, 0, height, 255, 0);
      int c = color(0, adj, 250);
      particles2[i]= new Particle2(x, y, c);
    }
  
  
}

void mousePressed() {
  setParticles();
  setParticles2();
}


class Particle {
  float posX, posY, incr, theta;
  color  c;

  Particle(float xIn, float yIn, color cIn) {
    posX = xIn;
    posY = yIn;
    c = cIn;
  }

  public void move() {
    update();
    wrap();
    display();
  }

  void update() {
    incr +=  .008;
    theta = noise(posX * .006, posY * .004, incr) * TWO_PI;
    posX += 2 * cos(theta);
    posY += 2 * sin(theta);
  }

  void display() {
    if (posX > 0 && posX < width && posY > 0  && posY < height) {
      pixels[(int)posX + (int)posY * width] =  c;
    }
  }

  void wrap() {
    if (posX < 0) posX = width;
    if (posX > width ) posX =  0;
    if (posY < 0 ) posY = height;
    if (posY > height) posY =  0;
  }
}

class Particle2 {
  float posX, posY, incr, theta;
  color  c;

  Particle2(float xIn, float yIn, color cIn) {
    posX = xIn;
    posY = yIn;
    c = cIn;
  }

  public void move() {
    update();
    wrap();
    display();
  }

  void update() {
    incr +=  .008;
    theta = noise(posX * .004, posY * .006, incr) * TWO_PI;
    posX += 2 * sin(theta);
    posY += 2 * cos(theta);
  }

  void display() {
    if (posX > 0 && posX < width && posY > 0  && posY < height) {
      pixels[(int)posX + (int)posY * width] =  c;
    }
  }

  void wrap() {
    if (posX < 0) posX = width;
    if (posX > width ) posX =  0;
    if (posY < 0 ) posY = height;
    if (posY > height) posY =  0;
  }
}
