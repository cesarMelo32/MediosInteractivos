const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

var imprimir=true;

var x = 0;

var y = 0;
var i = 0;

var rojo = 0;
var azul = 0;
var verde = 0;


function setup() {
  createCanvas(1061, 707);

  // Define colors
  b1 = color(255);
  b2 = color(0);

  i=random(width);





}

function draw() {


  //PRIME CAMBIO DE COLOR FONDO #1 azul-->morado

  // (188, 241, 242)

  //(168, 167, 242)

  if (x <= 250) {
    rojo = map(x, 0, 250, 188, 168);

    verde = map(x, 0, 250, 241, 167);

    azul = map(x, 0, 250, 241, 245);

  }


  //SEGUNDO CAMBIO DE COLOR FONDO #1 morado-->morado oscuro
  if (x >= 250) {

    //(168, 167, 242)
    //(148, 147, 216)


    rojo = map(x, 250, 700, 168, 148);

    verde = map(x, 250, 700, 167, 147);

    azul = map(x, 250, 700, 245, 216);



  }

  //Tercer CAMBIO DE COLOR FONDO #1 morado Oscuro--> Negro
  if (x >= 700) {


    //(148, 147, 216)
    //(37, 37, 56)


    rojo = map(x, 700, 1000, 148, 37);

    verde = map(x, 700, 1000, 147, 37);

    azul = map(x, 700, 1000, 216, 56);


  }


  c1 = color(rojo, verde, azul);




  //PRIME CAMBIO DE COLOR FONDO #2 gris-->amarillo
  //(234, 223, 206)
  //(247, 180, 76)


  if (x <= 600) {
    rojo = map(0, 0, 600, 234, 247);

    verde = map(x, 0, 600, 223, 180);

    azul = map(x, 0, 600, 206, 80);
  }


  // SEGUNDO CAMBIO DE COLOR FONDO #2 AMARILLO ---> NARANJA FOSFO
  else {
    //(247, 180, 76)
    //(255, 161, 15)
    rojo = map(x, 600, 1700, 247, 255);

    verde = map(x, 600, 1700, 180, 161);

    azul = map(x, 600, 1700, 80, 15);

  }

  c2 = color(rojo, verde, azul);




  setGradient(0, 0, width, height, c1, c2, 1);





  fill(255)
  // ellipse(width/2,height/2, x,x)
  fill(255, 255, 255);
  noStroke();





  //ellipse((width/2),((height/2)+80)-(x/8),60,60)

  if (x <= 10000) {

    x++;

  }

  //BAkcGRound Estrellas


  if (x >= 1000&&y<8) {

    y=y+0.05;
    
  }
  
  
  ellipse(width/4,(height/y),y*20,y*20);
  
  fill(220);
  ellipse(width/4+24,(height/y)-22,y*7.5,y*7.5);
  
  ellipse(width/4-28,(height/y)-24,y*4,y*4);
  
  
  
  fill(235);
  ellipse(width/4+30,(height/y)-30,y*8,y*8);
  
  ellipse(width/4-30,(height/y)-30,y*4,y*4);
  
  ellipse(width/4-30,(height/y)+35,y*4,y*4);
  
  
  
  
  
  
  fill(255);

  ellipse(250, 250, y, y);

  ellipse(37, 250, y, y);

  ellipse(250, 350, y, y);
  ellipse(900, 50, y, y);
  ellipse(500, 27, y, y);

  ellipse(600, 5, y, y);

  ellipse(160, 16, y, y);

  ellipse(190, 90, y, y);
  ellipse(250, 250, y, y);

  //
  ellipse(i*6, 16, y, y);

  ellipse(i/5, 250, y, y);

  ellipse(i*15, 350, y, y);
  
  ellipse(i*2, 50, y, y);
  ellipse(i/0.6, 27, y, y);

  ellipse(i*0.6, 15, y, y);

  ellipse(i*2, 16, y, y);

  ellipse(i*0.7, 90, y, y);
  ellipse(i*1.2, 250, y, y);

  //
    ellipse(i*6, i*16, y, y);

  ellipse(i/5, i*50, y, y);

  ellipse(i*15, i*30, y, y);
  
  ellipse(i*2, i/50, y, y);
  ellipse(i/0.6, i*27, y, y);

  ellipse(i*0.6, i/15, y, y);

  ellipse(i*2, i/16, y, y);

  ellipse(i*0.7, i*9, y, y);
  ellipse(i*1.2, i/5, y, y);
  
  






  //FOREGROUND LAND City


  //edifico 01 izquierda
  fill(201-(x/20));
  rect(10, (height / 2) - 30, width / 15, height / 2 + 30);


  //Edificio 2 desde izquierda

  fill(210-(x/20));
  rect(150, (height / 2) - 60, width / 15, height / 2 + 60);



  //Edifciio 3 desde izquierda
  fill(195-(x/20))
  rect(250, (height / 2) - 80, width / 5, (height / 2) + 80);



  //Edifcio 4 desde izquierda
  fill(220-(x/20));
  rect(350, (height / 2) - 50, width / 15, (height / 2) + 50);




  //Edificio 6 desde izquierda
  fill(195-(x/20));
  rect(650, (height / 2) - 80, width / 5, (height / 2) + 80);

  //Edificio 5 desde izquierda
  fill(210-(x/20));
  rect(600, (height / 2) + 80, width / 15, height / 2);


 //ventanas negra



    
    







    fill(215);
    //edificio izquierda
    rect(15, (height / 2) - 25, width / 40, height / 25);
    rect(45, (height / 2) + 105, width / 40, height / 25);

    rect(15, (height / 2) + 75, width / 40, height / 25);
    rect(45, (height / 2) + 305, width / 40, height / 25);

    //edificio izquierda 2


    rect(155, (height / 2) + 155, width / 40, height / 25);


    rect(185, (height / 2) + 305, width / 40, height / 25);

    rect(185, (height / 2) + 205, width / 40, height / 25);

    rect(185, (height / 2) + 155, width / 40, height / 25);



    //Edifciio 3 desde izquierda

    rect(295, (height / 2) - 75, width / 30, height / 20);


    rect(255, (height / 2) + 75, width / 30, height / 20);

    rect(421, (height / 2) + 75, width / 45, height / 20);

    //Edifcio 4 desde izquierda

    rect(355, (height / 2) - 45, width / 30, height / 20);

    rect(380, (height / 2) + 115, width / 30, height / 20);

    rect(355, (height / 2) + 305, width / 30, height / 20);

    //edificio izquierda 5
    rect(605, (height / 2) + 85, width / 35, height / 25);
    rect(636, (height / 2) + 115, width / 35, height / 25);



    //Edificio 6 desde izquierda


    rect(705, (height / 2) - 75, width / 27.5, height / 17.5);


    rect(750, (height / 2) - 75, width / 27.5, height / 17.5);

    rect(795, (height / 2) - 25, width / 27.5, height / 17.5);





      //edifcio izquierda 01
     

      rect(15, (height / 2) + 105, width / 40, height / 25);
      rect(45, (height / 2) + 275, width / 40, height / 25);

      rect(15, (height / 2) + 145, width / 40, height / 25);
      rect(45, (height / 2) + 185, width / 40, height / 25);




      //edifcio izquierda 2

      rect(155, (height / 2) - 55, width / 40, height / 25);

      rect(185, (height / 2) + 55, width / 40, height / 25);


      rect(185, (height / 2) + 270, width / 40, height / 25);



      //Edifcio izquierda 3
      rect(421, (height / 2) + 15, width / 45, height / 20);

      rect(335, (height / 2) + 250, width / 65, height / 20);

      rect(421, (height / 2) + 250, width / 65, height / 20);

      rect(255, (height / 2) + 250, width / 30, height / 20);

      rect(255, (height / 2) + 15, width / 30, height / 20);

      //Edifcio 4 desde izquierda

      rect(355, (height / 2) + 75, width / 30, height / 20);

      rect(380, (height / 2) + 155, width / 30, height / 20);

      rect(355, (height / 2) + 265, width / 30, height / 20);


      //edificio izquierda 5
      rect(605, (height / 2) + 145, width / 35, height / 25);

      rect(636, (height / 2) + 185, width / 35, height / 25);

      //Edificio 6 desde izquierda

      rect(660, (height / 2) - 75, width / 27.5, height / 17.5);


      rect(705, (height / 2) + 75, width / 27.5, height / 17.5);


      rect(750, (height / 2) + 175, width / 27.5, height / 17.5);

      rect(795, (height / 2) + 25, width / 27.5, height / 17.5);

        //edifcio izquierda 01

        rect(15, (height / 2) + 305, width / 40, height / 25);
        rect(45, (height / 2) + 375, width / 40, height / 25);

        rect(15, (height / 2) + 175, width / 40, height / 25);
        rect(45, (height / 2) + 240, width / 40, height / 25);


        rect(15, (height / 2) + 10, width / 40, height / 25);
        rect(45, (height / 2) + 40, width / 40, height / 25);


        //Edificio Izquierda 2

        rect(185, (height / 2) - 25, width / 40, height / 25);

        rect(155, (height / 2) + 55, width / 40, height / 25);

        rect(155, (height / 2) + 205, width / 40, height / 25);

        //Edificio izquierda 3

        rect(255, (height / 2) - 75, width / 30, height / 20);

        rect(255, (height / 2) + 175, width / 30, height / 20);

        rect(335, (height / 2) + 75, width / 65, height / 20);

        rect(335, (height / 2) + 15, width / 65, height / 20);

        rect(335, (height / 2) + 300, width / 65, height / 20);


        rect(255, (height / 2) + 175, width / 30, height / 20);

        //Edifcio 4 desde izquierda

        rect(355, (height / 2) + 15, width / 30, height / 20);

        rect(380, (height / 2) + 195, width / 30, height / 20);

        rect(355, (height / 2) + 225, width / 30, height / 20);


        //Edificio izquierda 5
        rect(605, (height / 2) + 215, width / 35, height / 25);
        
        rect(636, (height / 2) + 245, width / 35, height / 25);


        rect(606, (height / 2) + 275, width / 35, height / 25);
       
        rect(606, (height / 2) + 310, width / 35, height / 25);
      
        rect(638, (height / 2) + 295, width / 35, height / 25);

        //Edificio 6 desde izquierda

        rect(660, (height / 2) + 25, width / 27.5, height / 17.5);


        rect(705, (height / 2) + 185, width / 27.5, height / 17.5);


        rect(750, (height / 2) + 175, width / 27.5, height / 17.5);

        rect(795, (height / 2) + 25, width / 27.5, height / 17.5);
    
    

  if (x > 1000) {

   


    fill(135, 200, 205);
    //edificio izquierda
    rect(15, (height / 2) - 25, width / 40, height / 25);
    rect(45, (height / 2) + 105, width / 40, height / 25);

    rect(15, (height / 2) + 75, width / 40, height / 25);
    rect(45, (height / 2) + 305, width / 40, height / 25);

    //edificio izquierda 2


    rect(155, (height / 2) + 155, width / 40, height / 25);


    rect(185, (height / 2) + 305, width / 40, height / 25);

    rect(185, (height / 2) + 205, width / 40, height / 25);

    rect(185, (height / 2) + 155, width / 40, height / 25);



    //Edifciio 3 desde izquierda

    rect(295, (height / 2) - 75, width / 30, height / 20);


    rect(255, (height / 2) + 75, width / 30, height / 20);

    rect(421, (height / 2) + 75, width / 45, height / 20);

    //Edifcio 4 desde izquierda

    rect(355, (height / 2) - 45, width / 30, height / 20);

    rect(380, (height / 2) + 115, width / 30, height / 20);

    rect(355, (height / 2) + 305, width / 30, height / 20);

    //edificio izquierda 5
    rect(605, (height / 2) + 85, width / 35, height / 25);
    rect(636, (height / 2) + 115, width / 35, height / 25);



    //Edificio 6 desde izquierda


    rect(705, (height / 2) - 75, width / 27.5, height / 17.5);


    rect(750, (height / 2) - 75, width / 27.5, height / 17.5);

    rect(795, (height / 2) - 25, width / 27.5, height / 17.5);





    if (x > 1150) {



      //edifcio izquierda 01
      fill(185, 220, 205);

      rect(15, (height / 2) + 105, width / 40, height / 25);
      rect(45, (height / 2) + 275, width / 40, height / 25);

      rect(15, (height / 2) + 145, width / 40, height / 25);
      rect(45, (height / 2) + 185, width / 40, height / 25);




      //edifcio izquierda 2

      rect(155, (height / 2) - 55, width / 40, height / 25);

      rect(185, (height / 2) + 55, width / 40, height / 25);


      rect(185, (height / 2) + 270, width / 40, height / 25);



      //Edifcio izquierda 3
      rect(421, (height / 2) + 15, width / 45, height / 20);

      rect(335, (height / 2) + 250, width / 65, height / 20);

      rect(421, (height / 2) + 250, width / 65, height / 20);

      rect(255, (height / 2) + 250, width / 30, height / 20);

      rect(255, (height / 2) + 15, width / 30, height / 20);

      //Edifcio 4 desde izquierda

      rect(355, (height / 2) + 75, width / 30, height / 20);

      rect(380, (height / 2) + 155, width / 30, height / 20);

      rect(355, (height / 2) + 265, width / 30, height / 20);


      //edificio izquierda 5
      rect(605, (height / 2) + 145, width / 35, height / 25);

      rect(636, (height / 2) + 185, width / 35, height / 25);

      //Edificio 6 desde izquierda

      rect(660, (height / 2) - 75, width / 27.5, height / 17.5);


      rect(705, (height / 2) + 75, width / 27.5, height / 17.5);


      rect(750, (height / 2) + 175, width / 27.5, height / 17.5);

      rect(795, (height / 2) + 25, width / 27.5, height / 17.5);





      if (x > 1300) {
        fill(205, 220, 205);


        //edifcio izquierda 01

        rect(15, (height / 2) + 305, width / 40, height / 25);
        rect(45, (height / 2) + 375, width / 40, height / 25);

        rect(15, (height / 2) + 175, width / 40, height / 25);
        rect(45, (height / 2) + 240, width / 40, height / 25);


        rect(15, (height / 2) + 10, width / 40, height / 25);
        rect(45, (height / 2) + 40, width / 40, height / 25);


        //Edificio Izquierda 2

        rect(185, (height / 2) - 25, width / 40, height / 25);

        rect(155, (height / 2) + 55, width / 40, height / 25);

        rect(155, (height / 2) + 205, width / 40, height / 25);

        //Edificio izquierda 3

        rect(255, (height / 2) - 75, width / 30, height / 20);

        rect(255, (height / 2) + 175, width / 30, height / 20);

        rect(335, (height / 2) + 75, width / 65, height / 20);

        rect(335, (height / 2) + 15, width / 65, height / 20);

        rect(335, (height / 2) + 300, width / 65, height / 20);


        rect(255, (height / 2) + 175, width / 30, height / 20);

        //Edifcio 4 desde izquierda

        rect(355, (height / 2) + 15, width / 30, height / 20);

        rect(380, (height / 2) + 195, width / 30, height / 20);

        rect(355, (height / 2) + 225, width / 30, height / 20);


        //Edificio izquierda 5
        rect(605, (height / 2) + 215, width / 35, height / 25);
        fill(135, 200, 205);
        rect(636, (height / 2) + 245, width / 35, height / 25);


        rect(606, (height / 2) + 275, width / 35, height / 25);
        fill(185, 220, 205);
        rect(606, (height / 2) + 310, width / 35, height / 25);
        fill(135, 200, 205);
        rect(638, (height / 2) + 295, width / 35, height / 25);

        //Edificio 6 desde izquierda

        rect(660, (height / 2) + 25, width / 27.5, height / 17.5);


        rect(705, (height / 2) + 185, width / 27.5, height / 17.5);


        rect(750, (height / 2) + 175, width / 27.5, height / 17.5);

        rect(795, (height / 2) + 25, width / 27.5, height / 17.5);


      }

    }
  }


  print(x);


  if (x > 1600) {

    x = 0;
    y=0;
    
    imprimir=false;
  }

  /*
  
  //PARA IMPRIMIR
  
  if(frameCount%16==0&&imprimir==true)
  {
    saveCanvas('myFlipBook'+frameCount , 'jpg');
    
  

}

*/


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
