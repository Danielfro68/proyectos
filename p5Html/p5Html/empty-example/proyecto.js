let table;

//numero de filas en el archivo
let rowCount;

//variable que guarda el dato
let datoComcel=0;

//variable que guarda el dato máximo
let maxDato=0;

let snowflakes = []; // array to hold snowflake objects

let cnv;

//se crea el elemento h2
let textoH2A;

//variable del selector de opciones
let sel;
//variable que guarda la opción seleccionada por el usuario
let opcion = " ";

let dato = 0;

let r = 0;
let g = 0;
let b = 0;

function preload()
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/datosInternetCompleto3.csv", "header");
}


function setup() {

  cnv = createCanvas(600, 600);
  cnv.position(305, 60);
  fill(240);
  noStroke();

  rowCount = table.getRowCount();

  const row = table.getRows();

 for (let i = 0; i < rowCount; i++)
  {
    //guardamos la información de la fila "y" en una constante
    const comcel = row[i].getNum("ComcelProveedorSuscripcion");

  }
  

  textoH2A = createElement('h2', 'Visualización de preferencia de colegios privados a públicos por localidades');

  sel = createSelect();
  sel.option('Usaquen');
  sel.option('Suba');
  sel.option('Engativa');
  sel.option('BarriosUnidos');
  sel.option('Chapinero');
  sel.option('Teusaquillo');
  sel.option('Fontibon');
  sel.option('Bosa');
  sel.option('Kennedy');
  sel.option('PuenteAranda');
  sel.option('Martires');
  sel.option('SantaFe');
  sel.option('LaCandelaria');
  sel.option('AntonioNariño');
  sel.option('SanCristobal');
  sel.option('RafaelUribe');
  sel.option('Tunjuelito');
  sel.option('CiudadBolivar');
  sel.option('Usme');
  sel.option('Sumapaz');

  //cuando se selecciona una opción llama a la funcion mySelectEvent
  sel.changed(mySelectEvent);

}

function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  let val = sel.value();
  if (val == 'Usaquen'){
    comcel = 0;
  }else if(val=='Suba'){
    comcel = 1;
  }else if(val=='Engativa'){
    comcel = 2;
  }else if(val=='BarriosUnidos'){
    comcel = 3;
  }else if(val=='Chapinero'){
    comcel = 4;
  }else if(val=='Teusaquillo'){
    comcel = 5;
  }else if(val=='Fontibon'){
    comcel = 6;
  }else if(val=='Bosa'){
    comcel = 7;
  }else if(val=='Kennedy'){
    comcel = 8;
  }else if(val=='PuenteAranda'){
    comcel = 9;
  }else if(val=='Martires'){
    comcel = 10;
  }else if(val=='Santafe'){
    comcel = 11;
  }else if(val=='LaCandelaria'){
    comcel = 12;
  }else if(val=='AntonioNariño'){
    comcel = 13;
  }else if(val=='SanCristobal'){
    comcel = 14;
  }else if(val=='RafaelUribe'){
    comcel = 15;
  }else if(val=='Tunjuelito'){
    comcel = 16;
  }else if(val=='CiudadBolivar'){
    comcel = 17;
  }else if(val=='Usme'){
    comcel = 18;
  }else if(val=='Sumapaz'){
    comcel = 19;
  }

let datoPriv = comcel;

}

function draw() {

  particles();

}

function particles(){
  background(r,g,b,);
  let t = frameCount / 60; // update time
  

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(datoPriv/10); i++) {
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
