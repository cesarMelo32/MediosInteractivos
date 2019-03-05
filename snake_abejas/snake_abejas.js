//SNAKE DE 2 JUGADORES UNO UTILIZA LAS TECLAS DE FELECHAS Y OTRO CON WASD


//VELOCIDAD CONSTANTE DEL PERSONAJE

//SI TOCAN LAS PAREDES PIERDE

//SI CHOCAN PIERDEN LOS DOS

// POR EL COLOR SABER QUIEN ESTA GANANDO, FONDO DE PANTALLA DE PALETA DE
//COLOR DEL JUGADOR QUE VA GANANDO.



//NO PUEDE UTILIZARCE FIGURAS BASICAS

//noLoop para matar al juego



//VARIABLES
var x = 0;
var y = 400;
var x2 = 980;
var y2 = 400;

var xR = 0;
var yR = 0;

var RED = 220;
var GREEN =220;
var BLUE = 220;





//utilizar velocidad para mantener a los personajes en movimiento

var velocidad=2;
var velocidad2=2;



//puntaje de los jugadores
var PuntajJ1=0;

var PuntajJ2=0;


//direccion de los personajes es manejada por la variable direccion

var direccion=0;
var direccion2=1;



function setup() {
  createCanvas(1000, 800);
  
  yR=random(0,height);

  xR=random(0,width);
  
}






function draw() {
background(RED,GREEN,BLUE);

  
  //Jugador 1
  
  fill(255,150,180);
  rect(x, y, 30, 20,20)
  fill(0);
  rect(x+10, y, 10, 20)
  fill(255);
  rect(x+10, y-14, 10, 20, 10, 10, 5, 5)
  
  
  
  
  
  //jugador 2fill(255,150,180);
  fill(180,120,255);
  rect(x2, y2, 30, 20,20)
  fill(0);
  rect(x2+10, y2, 10, 20)
  fill(255);
  rect(x2+10, y2-14, 10, 20, 10, 10, 5, 5)
  
  
 translate(xR,yR);
     
  noStroke();
  for (let i = 0; i < 10; i ++) {
   
    fill(250,180,36);
    ellipse(0, 7.5, 5, 20);
    rotate(PI/5);
  }
  
  
  //ellipse(xR, yR, 20, 20);

  
  
//print(dist(x,y,xR,yR));
  
  
  
  if(dist(x+10,y+10,xR,yR)<20)
  {
  yR=random(0,height);

  xR=random(0,width);

    velocidad=velocidad+0.5;
     PuntajJ1++;

    cambiofondo();
    
  }
  
  
  if((dist(x2,y2,xR,yR)<20))
  {
  yR=random(0,height);

  xR=random(0,width);
    velocidad2=velocidad2+0.5;
     PuntajJ2++;

    cambiofondo();
    
  }
  
  //mover el personaje solo por medio de la variable de direccion
  //de cada personaje
  
  if(direccion==0)
  {
    
  x=x+velocidad;
  }
  
  if(direccion==1)
  {
    
  x=x-velocidad;
  }
  if(direccion==2)
  {
    
  y=y-velocidad;
    
  }if(direccion==3)
  {
    
  y=y+velocidad;
  }
  
  
  
    //PERSONAJE 2
  
  if(direccion2==0)
  {
    
  x2=x2+velocidad2;
  }
  
  if(direccion2==1)
  {
    
  x2=x2-velocidad2;
  }
  if(direccion2==2)
  {
    
  y2=y2-velocidad2;
    
  }if(direccion2==3)
  {
    
  y2=y2+velocidad2;
  }
  
  
  
  
  
  //controles jugador 1
  if (keyIsPressed == true) {


    
    
    if (keyCode == RIGHT_ARROW) {

      direccion2=0;

    }


    if (keyCode == LEFT_ARROW) {

      direccion2 =1;

    }
    if (keyCode == UP_ARROW) {

      direccion2 =2;

    }
    if (keyCode == DOWN_ARROW) {

      direccion2 =3;

    }

    
    
    //personaje2
     
    if (key =='d') {

      direccion =0;

    }


    if (key== 'a') {

      direccion =1;

    }
    if (key== 'w') {

      direccion =2;

    }
    if (key== 's') {

      direccion =3;

    }

    
  
    
  }
    
   
    //evitar que el cuadro desparezca fuera de cuadro
    
    //si sale del perimetro se reinicia

    if (y > height) {

      y = 0;
    }

    if (y < 0) {

      y = height;
    }
    if (x > width) {

      x = 0;
    }

    if (x < 0) {

      x = width;
    }




if (y2 > height) {

      y2 = 0;
    }

    if (y2 < 0) {

      y2 = height;
    }
    if (x2 > width) {

      x2 = 0;
    }

    if (x2 < 0) {

      x2 = width;
    }

}//final de draw


function cambiofondo(){

if(PuntajJ1> PuntajJ2)
{
 RED = 250;
 GREEN =220;
 BLUE = 220;

}
 
if(PuntajJ2> PuntajJ1)
{
    RED = 220;
    GREEN =220;
    BLUE = 250;
} 
  
  

}
