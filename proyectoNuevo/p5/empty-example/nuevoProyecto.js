var i,a;
var r = 0;
var t = 0;
var pg;
var pg2;
var pg3;

let tableComp;

let checkboxComp;

let datoPriv;
let datoPub;

let datoPriv2;
let datoPub2;

let datoPriv3;
let datoPub3;

let mostrarPublico = false;
//numero de filas en el archivo
let rowCountComp;

//variable que guarda el dato
let datoComcel=0;

let datoPublico=0;

let datoComcel2=0;

let datoPublico2=0;


let datoComcel3=0;

let datoPublico3=0;


//variable que guarda el dato máximo
let maxDatoComp=0;
let maxDato2Comp=0;

//se crea el elemento h2
let textoH2Comp;

//variable del selector de opciones
let selComp;
let selComp2;
let selComp3;
//variable que guarda la opción seleccionada por el usuario
let opcionComp = " ";
let opcionComp2 = " ";
let opcionComp3 = " ";

let datoComp = 0;

let valorOpcionComp;
let valorOpcionComp2; 
let valorOpcionComp3;  

let rowComp;

let valComp;
let valComp2;
let valComp3;

function preload()
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  tableComp = loadTable("assets/datosInternetCompleto4.csv", "header");
}


function setup()

{
	textoH2Comp = createElement('h2', 'Visualización de preferencia de colegios privados a públicos por localidades');
	
  rowCountComp = tableComp.getRowCount();

  rowComp = tableComp.getRows();

   for (let i = 0; i < rowCountComp; i++)
  {
    //guardamos la información de la fila "y" en una constante
    const comcel = rowComp[i].getNum("ComcelProveedorSuscripcion");
    const pub = rowComp[i].getNum("publico");
    //console.log(comcel);

    datoComcel = comcel;

    datoPublico = pub;

    datoComcel2 = comcel;

    datoPublico2 = pub;

    datoComcel3 = comcel;

    datoPublico3 = pub;

    if (datoComcel > maxDatoComp)
    {
      maxDatoComp = datoComcel;
    }else if(datoPublico > maxDato2Comp)
    {
      maxDato2Comp = datoPublico;
    }

    
  }

  selComp = createSelect();
  selComp.option('Usaquen');
  selComp.option('Suba');
  selComp.option('Engativa');
  selComp.option('BarriosUnidos');
  selComp.option('Chapinero');
  selComp.option('Teusaquillo');
  selComp.option('Fontibon');
  selComp.option('Bosa');
  selComp.option('Kennedy');
  selComp.option('PuenteAranda');
  selComp.option('Martires');
  selComp.option('SantaFe');
  selComp.option('LaCandelaria');
  selComp.option('AntonioNariño');
  selComp.option('SanCristobal');
  selComp.option('RafaelUribe');
  selComp.option('Tunjuelito');
  selComp.option('CiudadBolivar');
  selComp.option('Usme');
  selComp.option('Sumapaz');
  //cuando se selecciona una opción llama a la funcion mySelectEvent
  selComp.changed(mySelectEventComp);

  selComp.position(10, 450);

  selComp2 = createSelect();
  selComp2.option('Usaquen');
  selComp2.option('Suba');
  selComp2.option('Engativa');
  selComp2.option('BarriosUnidos');
  selComp2.option('Chapinero');
  selComp2.option('Teusaquillo');
  selComp2.option('Fontibon');
  selComp2.option('Bosa');
  selComp2.option('Kennedy');
  selComp2.option('PuenteAranda');
  selComp2.option('Martires');
  selComp2.option('SantaFe');
  selComp2.option('LaCandelaria');
  selComp2.option('AntonioNariño');
  selComp2.option('SanCristobal');
  selComp2.option('RafaelUribe');
  selComp2.option('Tunjuelito');
  selComp2.option('CiudadBolivar');
  selComp2.option('Usme');
  selComp2.option('Sumapaz');
  //cuando se selecciona una opción llama a la funcion mySelectEvent
  selComp2.changed(mySelectEventComp2);

  selComp2.position(310, 450);

  selComp3 = createSelect();
  selComp3.option('Usaquen');
  selComp3.option('Suba');
  selComp3.option('Engativa');
  selComp3.option('BarriosUnidos');
  selComp3.option('Chapinero');
  selComp3.option('Teusaquillo');
  selComp3.option('Fontibon');
  selComp3.option('Bosa');
  selComp3.option('Kennedy');
  selComp3.option('PuenteAranda');
  selComp3.option('Martires');
  selComp3.option('SantaFe');
  selComp3.option('LaCandelaria');
  selComp3.option('AntonioNariño');
  selComp3.option('SanCristobal');
  selComp3.option('RafaelUribe');
  selComp3.option('Tunjuelito');
  selComp3.option('CiudadBolivar');
  selComp3.option('Usme');
  selComp3.option('Sumapaz');
  //cuando se selecciona una opción llama a la funcion mySelectEvent
  selComp3.changed(mySelectEventComp3);

  selComp3.position(610, 450);


  createCanvas(900,400);
  pg = createGraphics(300,400);
  pg.background(0,0,0,30);
  pg2 = createGraphics(600,400);
  pg2.background(0,0,0,30);
  pg3 = createGraphics(900,400);
  pg3.background(0,0,0,30);

  checkboxComp = createCheckbox('Publico');
  //palabra al lado del checkbox
  //cuando se selecciona una opción llama a la funcion changeFill
  checkboxComp.changed(changePart);
}

function mySelectEventComp() 
{
  //guarda la opción seleccionada en la variable opcion
  valComp = selComp.value();
  if (valComp == 'Usaquen'){
    valorOpcionComp = 0;
  }else if(valComp=='Suba'){
    valorOpcionComp = 1;
  }else if(valComp=='Engativa'){
    valorOpcionComp = 2;
  }else if(valComp=='BarriosUnidos'){
    valorOpcionComp = 3;
  }else if(valComp=='Chapinero'){
    valorOpcionComp = 4;
  }else if(valComp=='Teusaquillo'){
    valorOpcionComp = 5;
  }else if(valComp=='Fontibon'){
    valorOpcionComp = 6;
  }else if(valComp=='Bosa'){
    valorOpcionComp = 7;
  }else if(valComp=='Kennedy'){
    valorOpcionComp = 8;
  }else if(valComp=='PuenteAranda'){
    valorOpcionComp = 9;
  }else if(valComp=='Martires'){
    valorOpcionComp = 10;
  }else if(valComp=='Santafe'){
    valorOpcionComp = 11;
  }else if(valComp=='LaCandelaria'){
    valorOpcionComp = 12;
  }else if(valComp=='AntonioNariño'){
    valorOpcionComp = 13;
  }else if(valComp=='SanCristobal'){
    valorOpcionComp = 14;
  }else if(valComp=='RafaelUribe'){
    valorOpcionComp = 15;
  }else if(valComp=='Tunjuelito'){
    valorOpcionComp = 16;
  }else if(valComp=='CiudadBolivar'){
    valorOpcionComp = 17;
  }else if(valComp=='Usme'){
    valorOpcionComp = 18;
  }else if(valComp=='Sumapaz'){
    valorOpcionComp = 19;
  }

  datoComcel = rowComp[valorOpcionComp].getNum("ComcelProveedorSuscripcion");
  datoPriv = datoComcel;

  datoPublico = rowComp[valorOpcionComp].getNum("publico");
  datoPub = datoPublico;

}
function mySelectEventComp2() 
{
  //guarda la opción seleccionada en la variable opcion
  valComp2 = selComp2.value();
  if (valComp2 == 'Usaquen'){
    valorOpcionComp2 = 0;
  }else if(valComp2=='Suba'){
    valorOpcionComp2 = 1;
  }else if(valComp2=='Engativa'){
    valorOpcionComp2 = 2;
  }else if(valComp2=='BarriosUnidos'){
    valorOpcionComp2 = 3;
  }else if(valComp2=='Chapinero'){
    valorOpcionComp2 = 4;
  }else if(valComp2=='Teusaquillo'){
    valorOpcionComp2 = 5;
  }else if(valComp2=='Fontibon'){
    valorOpcionComp2 = 6;
  }else if(valComp2=='Bosa'){
    valorOpcionComp2 = 7;
  }else if(valComp2=='Kennedy'){
    valorOpcionComp2 = 8;
  }else if(valComp2=='PuenteAranda'){
    valorOpcionComp2 = 9;
  }else if(valComp2=='Martires'){
    valorOpcionComp2 = 10;
  }else if(valComp2=='Santafe'){
    valorOpcionComp2 = 11;
  }else if(valComp2=='LaCandelaria'){
    valorOpcionComp2 = 12;
  }else if(valComp2=='AntonioNariño'){
    valorOpcionComp2 = 13;
  }else if(valComp2=='SanCristobal'){
    valorOpcionComp2 = 14;
  }else if(valComp2=='RafaelUribe'){
    valorOpcionComp2 = 15;
  }else if(valComp2=='Tunjuelito'){
    valorOpcionComp2 = 16;
  }else if(valComp2=='CiudadBolivar'){
    valorOpcionComp2 = 17;
  }else if(valComp2=='Usme'){
    valorOpcionComp2 = 18;
  }else if(valComp2=='Sumapaz'){
    valorOpcionComp2 = 19;
  }

  datoComcel2 = rowComp[valorOpcionComp2].getNum("ComcelProveedorSuscripcion");
  datoPriv2 = datoComcel2;

  datoPublico2 = rowComp[valorOpcionComp2].getNum("publico");
  datoPub2 = datoPublico2;
}
function mySelectEventComp3() 
{
  //guarda la opción seleccionada en la variable opcion
  valComp3 = selComp3.value();
  if (valComp3 == 'Usaquen'){
    valorOpcionComp3 = 0;
  }else if(valComp3=='Suba'){
    valorOpcionComp3 = 1;
  }else if(valComp3=='Engativa'){
    valorOpcionComp3 = 2;
  }else if(valComp3=='BarriosUnidos'){
    valorOpcionComp3 = 3;
  }else if(valComp3=='Chapinero'){
    valorOpcionComp3 = 4;
  }else if(valComp3=='Teusaquillo'){
    valorOpcionComp3 = 5;
  }else if(valComp3=='Fontibon'){
    valorOpcionComp3 = 6;
  }else if(valComp3=='Bosa'){
    valorOpcionComp3 = 7;
  }else if(valComp3=='Kennedy'){
    valorOpcionComp3 = 8;
  }else if(valComp3=='PuenteAranda'){
    valorOpcionComp3 = 9;
  }else if(valComp3=='Martires'){
    valorOpcionComp3 = 10;
  }else if(valComp3=='Santafe'){
    valorOpcionComp3 = 11;
  }else if(valComp3=='LaCandelaria'){
    valorOpcionComp3 = 12;
  }else if(valComp3=='AntonioNariño'){
    valorOpcionComp3 = 13;
  }else if(valComp3=='SanCristobal'){
    valorOpcionComp3 = 14;
  }else if(valComp3=='RafaelUribe'){
    valorOpcionComp3 = 15;
  }else if(valComp3=='Tunjuelito'){
    valorOpcionComp3 = 16;
  }else if(valComp3=='CiudadBolivar'){
    valorOpcionComp3 = 17;
  }else if(valComp3=='Usme'){
    valorOpcionComp3 = 18;
  }else if(valComp3=='Sumapaz'){
    valorOpcionComp3 = 19;
  }

  datoComcel3 = rowComp[valorOpcionComp3].getNum("ComcelProveedorSuscripcion");
  datoPriv3 = datoComcel3;

  datoPublico3 = rowComp[valorOpcionComp3].getNum("publico");
  datoPub3 = datoPublico3;


}

function draw()
{
if(mostrarPublico == true){
   	particles4();
    particles5();
    particles6();
  }else if(mostrarPublico == false){
    particles();
    particles2();
    particles3();
  }
  fill(255);
  text("Seleccionaste: " + valComp, 10, 30);
  text("Seleccionaste: " + valComp2, 310, 30);
  text("Seleccionaste: " + valComp3, 610, 30);

}

function changePart() 
{
  //si el boton esta activo
  if (checkboxComp.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarPublico = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarPublico = false;
  }
}


function particles(){
  push();
  image(pg, 0	,0);
  stroke(255,0,0);

  let datoMap = map(datoPriv, 52, maxDatoComp, 0, 1000);
  
  for(i=0;i++<(datoMap);a= noise(i%64.0)*5+t/r, point(150+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*300;
     t+=0.001;
  }
  pop();
}
function particles2(){
  push();
  image(pg2, 0	,0);
  stroke(0,255,0);

  let datoMap = map(datoPriv2, 52, maxDatoComp, 0, 1000);
  
  for(i=0;i++<(datoMap);a= noise(i%64.0)*5+t/r, point(450+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*300;
     t+=0.001;
  }
  pop();
}
function particles3(){
  push();
  image(pg3, 0	,0);
  stroke(0,0,255);

  let datoMap = map(datoPriv3, 52, maxDatoComp, 0, 1000);
  
  for(i=0;i++<(datoMap);a= noise(i%64.0)*5+t/r, point(750+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*300;
     t+=0.001;
  }
  pop();
}
  function particles4(){
  push();
  image(pg, 0	,0);
  stroke(255,0,0);

  let datoMap = map(datoPub, 9, maxDato2Comp, 0, 1000);
  
  for(i=0;i++<(datoMap);a= noise(i%64.0)*5+t/r, point(150+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*300;
     t+=0.001;
  }
  pop();
  
}
function particles5(){
  push();
  image(pg2, 0	,0);
  stroke(0,255,0);

  let datoMap = map(datoPub2, 9, maxDato2Comp, 0, 1000);
  
  for(i=0;i++<(datoMap);a= noise(i%64.0)*5+t/r, point(450+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*300;
     t+=0.001;
  }
  pop();
  
}
function particles6(){
  push();
  image(pg3, 0	,0);
  stroke(0,0,255);

  let datoMap = map(datoPub3, 9, maxDato2Comp, 0, 1000);
  
  for(i=0;i++<(datoMap);a= noise(i%64.0)*5+t/r, point(750+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*300;
     t+=0.001;
  }
  pop();
  
}
