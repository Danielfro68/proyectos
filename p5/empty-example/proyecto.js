let snowflakes = []; // array to hold snowflake objects

let slider;

let x = 1;
let y = 1;
let easing = 0.0001;

let r = 0;
let g = 0;
let b = 0;



function setup() {

  
  createCanvas(1000, 600);
  fill(240);
  noStroke();
  slider = createSlider(0, 20, 3);
  slider.position(10, 550);
  slider.style('width', '80px');

  noStroke();
 

}

function draw() {
  


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

   
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 66, 66);
  
  }
}


function keyTyped(){
  if (key == 'r'){
    
    r = 255;
    g = 0;
    b = 0;
  }else if(key == 'g'){
    r = 0;
    g = 255;
    b = 0;
  }else if(key == 'b'){
    r = 0;
    g = 0;
    b = 255;
  }else if(key == 'n'){
    r = 0;
    g = 0;
    b = 0;
  }else if (key == 'w'){
    r = 255;
    g = 255;
    b = 255;
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
