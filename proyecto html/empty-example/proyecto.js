let snowflakes = []; // array to hold snowflake objects

let slider;

let cnv;

let textoInputField = " ";

//variable del selector de opciones

//se crea el elemento h2
let textoH2A;
let textoH2B;

//variable de input field
let inputField;


//variable que agrupa los botones creados
let buttons;

//se crean 3 botones
let btn1;
let btn2;
let btn3;

//variable de checkbox
let checkbox;
//variable que muestra el circulo cuando el checkbox esta activo
let mostrarCirculo = false;


let casa = false;

let edificio = false;

let arbol = false;
//variable de radio button
let radio;
//variable que guarda el valor de radio button escogido
let valorRadioBtn;

//variable del selector de opciones
let sel;
//variable que guarda la opción seleccionada por el usuario
let opcion = " ";

let r = 0;
let g = 0;
let b = 0;



function setup() {

  cnv = createCanvas(300, 600);
  cnv.position(305, 50);
  fill(240);
  noStroke();

  textoH2A = createElement('h2', 'Crea tu propio escenario');
  textoH2B = createElement('h2', 'Ponle un titulo!');
  textoH2B.position(610, 200);

  createP('Ajusta la cantidad de nieve');
  slider = createSlider(0, 20, 3);
  slider.style('width', '80px');
  noStroke();

  inputField = createInput('');
  inputField.position(610, 250);
  //cada que se escribe una letra llama a la funcion myInputEvent
  inputField.input(myInputEvent);

  createP('Ponle figuras a la escena');

  checkbox = createCheckbox('Montaña'); //palabra al lado del checkbox
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(changeFill);

  btn1 = createButton('Edificio fondo Amarillo');
  btn2 = createButton('Casa fondo Rojo');
  btn3 = createButton('Arbol fondo Azul');   
  //se determina la función de cada botón cuado se oprime
  btn1.mousePressed(btnPressed1);
  btn2.mousePressed(btnPressed2);
  btn3.mousePressed(btnPressed3);

  createP('Cambia las particulas de color');

  radio = createRadio();
  radio.option('black');
  radio.option('gray');
  radio.option('white');
  radio.style('width', '60px');

  //se crea un elemento que agrupa todos los botones
  buttons = selectAll('button');
  //a los botones se les da caracteristicas
  for (let i = 0; i < buttons.length; i++) 
  {
    //que tengan este tamaño
    buttons[i].size(100, 75);
    //que se ubiquen de esta forma
  }

  
}

function myInputEvent() 
{
  //coloca en la consola las teclas del inputfield
  console.log('you are typing: ', this.value());

  //lo escrito el el input field se guarda en la variable textoInputField como un string
  textoInputField = str(this.value());
  
  //en el elemento creado H2, se muestra lo escrito en el inputfield
  textoH2B.html(this.value());
}


function btnPressed1() 
{
  //escriba en la consola 
  console.log('boton oprimido 1');  

    r = 255;
    g = 204;
    b = 0;

    edificio = true;

}

//cuando se oprime el botón 2nd btn
function btnPressed2() 
{
  //escriba en la consola 
  console.log('boton oprimido 2'); 
    r = 255;
    g = 0;
    b = 0; 

    casa = true;
}

//cuando se oprime el botón 3rd btn
function btnPressed3() 
{
  //escriba en la consola 
  console.log('boton oprimido 3');
    r = 0;
    g = 0;
    b = 255;  

    arbol = true;
}

function changeFill() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarCirculo = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarCirculo = false;
  }
}

function draw() {

valorRadioBtn = radio.value();
  fill(valorRadioBtn);

  particles();

  if(mostrarCirculo == true)
  {
    push();
    fill(0,255,0);
    ellipse(150, 600, 300, 150);
    pop();
  }
  if(casa == true){
    push();
    fill(255,165,0);
    rect(60, 510, 50, 50);
    pop();
    push();
    fill(0,0,125);
    triangle(50,510,120,510,85,480);
    pop();
  }
  if(edificio == true){
    push();
    fill(125);
    rect(200, 480, 50, 100);
    pop();
    push();
    fill(139,0,0);
    rect(212, 555, 25, 25);
    pop();
  }
  if(arbol == true){
    
    push();
    fill(139,69,19);
    rect(137, 480, 25, 80);
    pop();
    push();
    fill(0,200,0);
    ellipse(150, 470, 50, 50);
    ellipse(155, 475, 50, 50);
    ellipse(145, 475, 50, 50);
    ellipse(145, 455, 50, 50);
    ellipse(155, 455, 50, 50);

    pop();
  }

  
  
}

function particles(){
  background(r,g,b,);
  let t = frameCount / 60; // update time
  

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(1*slider.value()); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  
  }

}


// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };


}
