//        ESTRUCTURA DE PROGRAMACIÓN 


//---------------------------Varibles--------------------------
int x = 5;
int y = 200;
int ancho = 10;
int alto = 10;

PFont letraFuente;
PImage foto;  

String palabra1;
String palabra2;
//--------------------------- Setup ---------------------------
void setup() 
{
  size(600,600);

  letraFuente = loadFont("MyriadCAD-32.vlw");
  foto = loadImage("1.jpg");
}

//------------------------Gráfica-----------------------------
void draw()
{  
  background(120,50,200);

  //kiero llenar de elipses la pantalla
  //ellipse (x,y,ancho,alto);
  //ellipse (x+ancho,y,ancho,alto);
  //ellipse (x+ancho+ancho,y,ancho,alto);

  //PRIMERO FOR....
  for(int i=0; i<300; i=i+ancho)
  {
    ellipse (x+i,y,ancho,alto);
    //ellipse ((x+i)*2,y,ancho*2,alto*2);
    //ellipse (4*(x+i),y,ancho*4,alto*4);
    //ellipse ((x+i)*8,y,ancho*8,alto*8);
    //ellipse ((x+i)*16,y,ancho*16,alto*16);
  }

  //SEGUNDO LETRA
  fill(28,166,214);
  textFont(letraFuente, 40);
  text("HOLA MUNDO", 300, 300);
  
  palabra1 = "abc";
  palabra2 = "def";
  text(palabra1 + palabra2, 200,400);
  
  
  
  //TERCERO IMAGENES
  //image(nombreImagen,x1,y1)
  //image(foto,230,410);
}

//------------------------Metodos-----------------------------
