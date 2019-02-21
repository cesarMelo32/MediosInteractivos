/*Decripcion: herramienta de dibujo con 10 herramientas diferentes, 

donde lo que dibujo no sean formas basicas
*/






var rojo = 0;
var verde = 0;
var azul = 0;

var col = 0;
var forma = 0;

var v = 30;

var tamDib = 10;

var dibujar = true;

var tamBoton = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);

}

function draw() {

  rojo = map(mouseX, 0, windowWidth, 0, 255);
  verde = map(mouseY, 0, windowWidth, 0, 255);
  azul = map(mouseX, 0, windowWidth, 255, 0);


  //background(220);

  //Boton 1

  fill(225);
  stroke(20);

  rect(10, 10, tamBoton, tamBoton);




  //boton 2 cambio de color
  fill(30);
  stroke(20);
  rect(80, 10, tamBoton, tamBoton);


  //boton 3 cambio de forma
  fill(225);
  stroke(20);
  rect(150, 10, tamBoton, tamBoton);

  //boton 4 cambio de tamaño +
  fill(225);
  stroke(20);
  rect(220, 10, tamBoton, tamBoton);

  fill(0);
  rect(227, 22, tamBoton / 2, tamBoton / 6);
  rect(232, 17, tamBoton / 6, tamBoton / 2);

  //boton 5 cambio de tamaño -
  fill(225);
  stroke(20);
  rect(290, 10, tamBoton, tamBoton);

  fill(0);
  rect(298, 22, tamBoton / 2, tamBoton / 6);


  noStroke();
  noFill();



  function mouseIsPresed() {

    col++;
    print(col);
    noloop();
  }


  if (mouseIsPressed == true) {



    //si oprime el  boton 2 cambia el color por medio de 
    //variable color col

    if (mouseX >= 80 &&
      mouseX <= (80 + tamBoton) &&
      mouseY >= 10 &&
      mouseY <= (10 + tamBoton)) {

      col = col + 0.5;
      print(col);

      if (col >= 8) {
        col = 0;
      }

      dibujar = false;

    }


    //si oprime el  boton 3 cambia la forma por medio de 
    //variable forma

    if (mouseX > 150 &&
      mouseX < (150 + tamBoton) &&
      mouseY > 10 &&
      mouseY < (10 + tamBoton))
    //150,10,40,40
    {
      dibujar = false;
      forma = forma + 1;
      if (forma >= 8) {
        forma = 0;
      }

    }





    //si oprime el 5 boton se incrmenta el tamaño del pincel
    if (mouseX > 220 &&
      mouseX < (220 + tamBoton) &&
      mouseY > 10 &&
      mouseY < (10 + tamBoton))
    //220
    {
      tamDib = tamDib + 0.5;

      dibujar = false;
    }




    //si oprime el 6 boton se reduce el tamaño del pincel
    if (mouseX > 290 &&
      mouseX < (290 + tamBoton) &&
      mouseY > 10 &&
      mouseY < (10 + tamBoton) &&
      tamDib > 1)
    //220
    {
      tamDib = tamDib - 0.5;

      dibujar = false;
    }





    //se mira que variable de color esta activa
    if (col >= 0) {
      fill(rojo, verde, azul);
    }


    if (col >= 1) {
      fill(0);
    }

    if (col >= 2) {
      fill(255, 0, 0);
    }

    if (col >= 3) {
      fill(0, 255, 0);
    }

    if (col >= 4) {
      fill(0, 0, 255);
    }



    //se mira que varaible de forma esta activa, por medio del numero
    //variable forma
    if (forma <= 2 && dibujar == true) {
      ellipse(mouseX, mouseY, tamDib, tamDib);
    }

    if (forma <= 4 && forma > 2 && dibujar == true)

    {
      rect(mouseX, mouseY, tamDib, tamDib);

    }


    if (forma <= 6 && forma > 4 && dibujar == true)

    {

      stroke(col);

      line(windowWidth / 2, windowHeight / 2, mouseX, mouseY);

    }


    if (forma <= 8 && forma > 6 && dibujar == true) {
      
      
      
      
      beginShape();
      vertex(mouseX,mouseY+(tamDib));
      vertex(mouseX+20, mouseY+(tamDib));
      vertex(mouseX+20, mouseY+20+(tamDib));
      vertex(mouseX+40, mouseY+20+(tamDib));
      vertex(mouseX+40, mouseY+40+(tamDib));
      vertex(mouseX, mouseY+40+(tamDib));
      endShape(CLOSE);


    }



    //reset de background, tamaño de dibujo
    if (mouseX >= 10 && mouseX <= 50 && mouseY >= 10 && mouseY <= 50)

    {

      background(180);
      tamDib = 10;

    }

    dibujar = true;


  }






}
