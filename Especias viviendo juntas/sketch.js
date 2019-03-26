const Y_AXIS = 1;
const X_AXIS = 2;

var tierraX = 0
var tierraY = 300


var cieloX = 0
var cieloY = 0


var abejasX = [];
var abejasY = [];
var direcabeja = true;
var cantabejas = 5;


//Flores
var floresX = [];
var floresY = [];
var cantflores = 5;
var crecimientoFlores1 = true;

//Flores 2
var flores2X = [];
var flores2Y = [];
var cantflores2 = 5;
var crecimientoFlores2 = true;



//arañas
var arañaX = [];
var arañaY = [];
var cantaraña = 5;
var direaraña=true;

//saltamontes que saltan
var saltamontesX = [];
var saltamontesY = [];
var cantsaltamontes = 5;
var direcsaltamontes = true;


function setup() {

  createCanvas(800, 400);

  for (var i = 0; i < cantabejas; i = i + 1) {
  abejasX[i] = random(width);
  abejasY[i] = random(0, 150);

  }

  for (var i = 0; i < cantflores; i = i + 1) {
    floresX[i] = random(width);
    floresY[i] = random(300, 0);
  }

  for (var i = 0; i < cantaraña; i = i + 1) {
    arañaX[i] = random(width);
    arañaY[i] = random(0, 30);

  }

  for (var i = 0; i < cantsaltamontes; i = i + 1) {
    saltamontesX[i] = random(width);
    saltamontesY[i] = random(300, 400);
  }



  for (var i = 0; i < cantflores2; i = i + 1) {
    flores2X[i] = random(width);
    flores2Y[i] = random(300);
  }

}


function draw() {

  background(220);

  c1 = color(200,210, 255);
  c2 = color(200, 250, 255);



  setGradient(0, 0, width, height, c1, c2, 1);



  noStroke();

  fill(180, 150, 100);

  c1 = color(200, 180, 130);

  c2 = color(240, 200, 30);



  setGradient(0, tierraY, width, height, c1, c2, 1);


//flores rosadas
  for (var i = 0; i < cantflores; i = i + 1) {

    fill(100, 255, 50);
    stroke(50, 155, 10);

    quad(floresX[i], floresY[i], floresX[i], 300);

    
    


    push()
    translate(floresX[i], floresY[i]);

    noStroke();
    for (let i = 0; i < 10; i++) {

      fill(255, 100, 120);
      ellipse(0, 7.5, 5, 20);
      rotate(PI / 5);
    }
    pop()


    if (floresY[i] <= 0) {
      crecimientoFlores1 = false;
    }


    if (floresY[i] >= 300) {
      crecimientoFlores1 = true;
    }

    if (crecimientoFlores1 == true) {
      floresX[i] = floresX[i] - random(0, 0);

      floresY[i] = floresY[i] - random(0.2, 0.2);
    }

    if (crecimientoFlores1 == false) {
      floresX[i] = floresX[i] + random(0, 0);

      floresY[i] = floresY[i] + random(0.2, 0.2);
    }

  }


  //segundo grupo de flores
  
  for (var i = 0; i < 4; i = i + 1) {

    fill(100, 255, 50);
    stroke(50, 155, 10);

    quad(flores2X[i], flores2Y[i], flores2X[i], 300);

    
    


    push()
    translate(flores2X[i], flores2Y[i]);

    noStroke();
    for (let i = 0; i < 10; i++) {

      fill(20, 140, 180);
      ellipse(0, 7.5, 5, 20);
      rotate(PI / 5);
    }
    pop()


    if (flores2Y[i] <= 0) {
      crecimientoFlores2 = false;
    }


    if (flores2Y[i] >= 300) {
      crecimientoFlores2 = true;
    }

    if (crecimientoFlores2 == true) {
      flores2X[i] = flores2X[i] - random(0, 0);

      flores2Y[i] = flores2Y[i] - random(0.2, 0.2);
    }

    if (crecimientoFlores2 == false) {
      flores2X[i] = flores2X[i] + random(0, 0);

      flores2Y[i] = flores2Y[i] + random(0.2, 0.2);
    }

  }


  
  


  for (var i = 0; i < cantabejas; i = i + 1) {

    noStroke();

    fill(0);

    ellipse(abejasX[i], abejasY[i], 20, 5);

    ellipse(abejasX[i] + 10, abejasY[i] - 4, 10, 10);
   
    stroke(100);

    fill(255);

    ellipse(abejasX[i]-2, abejasY[i] - 7, 10, 12);
    ellipse(abejasX[i]+5, abejasY[i] - 10, 10, 15);
    ellipse(abejasX[i] + 11, abejasY[i] - 6, 3.5, 3.5);

    
    fill(225,225,0);
    push()
    strokeWeight(5);
    stroke(255,200,10);
    quad(abejasX[i], abejasY[i]-2.5,abejasX[i], abejasY[i]+2.5);
    
    
    strokeWeight(3);
    stroke(255,200,10);
    quad(abejasX[i]-6, abejasY[i]-1.5,abejasX[i]-6, abejasY[i]+2);
    
    
    strokeWeight(3);
    stroke(255,200,10);
    quad(abejasX[i]+6, abejasY[i]-1.5,abejasX[i]+6, abejasY[i]+3);
    
    pop()
    

    if (abejasX[i] >= width) {
      direcabeja = false;
    }

    if (abejasX[i] <= 0) {
      direcabeja = true;
    }


    if (direcabeja == true) {
      abejasX[i] = abejasX[i] + random(1, 1);

      abejasY[i] = abejasY[i] + random(-1, 1);

    } else {
      abejasX[i] = abejasX[i] + random(-1, 0);

      abejasY[i] = abejasY[i] + random(-1, 1);
    }



  }



  for (var i = 0; i < cantaraña; i = i + 1) {

    stroke(10, 90, 10);
    fill(0);
    ellipse(arañaX[i], arañaY[i], 18, 18);
    quad(arañaX[i], arañaY[i], arañaX[i], 0);



    //patitas izquierdas

    ellipse(arañaX[i] - 10, arañaY[i] - 5, 5, 2);

    ellipse(arañaX[i] - 10, arañaY[i], 5, 2);

    ellipse(arañaX[i] - 10, arañaY[i] + 5, 5, 2);



    //patitas derechas

    ellipse(arañaX[i] + 10, arañaY[i] - 5, 5, 2);

    ellipse(arañaX[i] + 10, arañaY[i], 5, 2);

    ellipse(arañaX[i] + 10, arañaY[i] + 5, 5, 2);



    //ojos  blancos

    fill(255);

    ellipse(arañaX[i] - 4, arañaY[i] - 2, 7, 7);

    ellipse(arañaX[i] + 4, arañaY[i] - 2, 7, 7);

    //ojos  negros

    fill(0);

    ellipse(arañaX[i] - 4, arañaY[i] - 2, 1, 1);

    ellipse(arañaX[i] + 4, arañaY[i] - 2, 1, 1);


if(arañaY[i]>=300)
{
direaraña=false;

}
 
    
if(arañaY[i]<=0)
{
direaraña=true;

}
    
    
if(direaraña==true)
{
    arañaX[i] = arañaX[i] + random(0, 0);

    arañaY[i] = arañaY[i] + random(0, 0.5);
}
    
if(direaraña==false)
{
    arañaX[i] = arañaX[i] + random(0, 0);

    arañaY[i] = arañaY[i] - random(0, 0.5);
}


  }





  for (var i = 0; i < cantsaltamontes; i = i + 1) {

    stroke(10, 90, 10);


    
    //antenas de los saltamontes
    fill(90, 200, 150);
    ellipse(saltamontesX[i]+11, saltamontesY[i]-13, 2, 20);
    ellipse(saltamontesX[i]+17, saltamontesY[i]-13, 2, 20);

    //cuerpo de los saltamontes
    fill(90, 200, 150);
    ellipse(saltamontesX[i]-12, saltamontesY[i], 35, 15);

    
    //cabeza de los saltamontes
    fill(90, 255, 130);
    ellipse(saltamontesX[i] + 13, saltamontesY[i] - 5, 18, 18);
    
    //patas de los saltamontes
    fill(90, 255, 130);
    ellipse(saltamontesX[i] - 18, saltamontesY[i]+7, 6, 18);
    ellipse(saltamontesX[i] - 9, saltamontesY[i]+7, 6, 18);
    ellipse(saltamontesX[i] - 2, saltamontesY[i]+7, 6, 18);
    
    //ojos negros
    fill(0);
    ellipse(saltamontesX[i] + 14, saltamontesY[i] - 5, 5, 5);


    if (saltamontesX[i] >= width) {
      direcsaltamontes = false;
    }

    if (saltamontesX[i] <= 0) {
      direcsaltamontes = true;
    }



    if (direcsaltamontes == true) {

      saltamontesX[i] = saltamontesX[i] + random(0.2, 0);

      saltamontesY[i] = saltamontesY[i] + random(-3, 3);
    }


    if (direcsaltamontes == false) {

      saltamontesX[i] = saltamontesX[i] - random(0.2, 0);

      saltamontesY[i] = saltamontesY[i] + random(-3, 3);
    }


  }


}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}