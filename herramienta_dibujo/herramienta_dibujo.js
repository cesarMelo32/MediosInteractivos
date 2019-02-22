/*Decripcion: herramienta de dibujo con 10 herramientas diferentes, 

donde lo que dibujo no sean formas basicas
*/






var rojo = 0;
var verde = 0;
var azul = 0;

var col = 1;
var forma = 1;

var v = 30;

var tamDib = 10;

var dibujar = true;

var tamBoton = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);

}




function mouseClicked()
{
    //si oprime el  boton 2 cambia el color por medio de 
    //variable color col  
   if (mouseX >= 80 &&
      mouseX <= (80 + tamBoton) &&
      mouseY >= 10 &&
      mouseY <= (10 + tamBoton)) 
   {

      col = col + 1;
      print(col);

     

      dibujar = false;

    }
  
  if (mouseX > 150 &&
      mouseX < (150 + tamBoton) &&
      mouseY > 10 &&
      mouseY < (10 + tamBoton))
    //150,10,40,40
    {
      dibujar = false;
      forma = forma + 1;
      
      print('forma'+forma);
      if (forma >= 8) {
        forma = 0;
      }

    }
  
  
  
  
  
  
  
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



  


  if (mouseIsPressed == true) {



   //ESTA SECCION EVITA QUE SE DIBUJE CUANDO SE PRESIONEN LOS BOTONES

    if (mouseX >= 80 &&
      mouseX <= (80 + tamBoton) &&
      mouseY >= 10 &&
      mouseY <= (10 + tamBoton)) {

       if(col==10) 
      {
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

    }

   //Fin de La Seccion de Evita Dibujo



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
    
    if (col == 1) {
      fill(rojo, verde, azul);
    }


    if (col == 2) {
      fill(0);
    }

    if (col == 3) {
      fill(255, 0, 0);
    }

    if (col == 4) {
      fill(0, 255, 0);
    }

    if (col == 5) {
      fill(0, 0, 255);
    }

    
    if (col == 6) {
      fill(255, 255, 0);
    }

    if (col == 7) {
      fill(0, 255, 255);
    }

    if (col == 8) {
      fill (255, 0,255);
    }

    if (col==9) {
      fill(0, 0, 255);
    }
    
     if (col == 10) {
      fill(185, 66, 244);
    }

    if (col == 11) {
      fill(0, 255, 255);
    }

    if (col == 12) {
      fill (255, 0,255);
    }

    if (col==13) {
      fill(0, 0, 255);
    }

    
    
    
    
    
    
    


    //se mira que varaible de forma esta activa, por medio del numero
    //variable forma
    if (forma ==1 && dibujar == true) {
      ellipse(mouseX, mouseY, tamDib, tamDib);
    }

    if (forma == 2 && dibujar == true)

    {
      rect(mouseX, mouseY, tamDib, tamDib);

    }


    if (forma == 3 && dibujar == true)

    {

      stroke(col);

      line(windowWidth / 2, windowHeight / 2, mouseX, mouseY);

    }


    if (forma ==4 && dibujar == true) {
      
      
      
      
      beginShape();
      vertex(mouseX,mouseY);
      vertex(mouseX+20, mouseY+(tamDib));
      vertex(mouseX+20, mouseY+20+(tamDib));
      vertex(mouseX+40, mouseY+20+(tamDib));
      vertex(mouseX+40, mouseY+40+(tamDib));
      vertex(mouseX, mouseY+40+(tamDib));
      endShape(CLOSE);


    }
    
    
    
    
    if (forma ==5 && dibujar == true) {
      
      
       beginShape();
    vertex(mouseX, mouseY);
    bezierVertex(mouseX, mouseY-20, mouseX+40, mouseY-10, mouseX, 40);
    vertex(mouseX, mouseY);
    bezierVertex(mouseX, mouseY-20, mouseX-40, mouseY-10, mouseX, 40);
    endShape();
      
      
      
      
      /* heart.beginShape();
    heart.vertex(50, 15);
    heart.bezierVertex(50, -5, 90, 5, 50, 40);
    heart.vertex(50, 15);
    heart.bezierVertex(50, -5, 10, 5, 50, 40); 
    heart.endShape();*/
      
      //ellipse((mouseX-11)-tamDib/3, mouseY, 20+tamDib,20+tamDib);
      //ellipse((mouseX+11)+tamDib/3, mouseY, 20+tamDib,20+tamDib);
      


    }

    
    if (forma ==6 && dibujar == true) {
      
      
       beginShape();
    vertex(mouseX, mouseY);
    bezierVertex(mouseX, mouseY-20, mouseX+40, mouseY-10, mouseX, mouseX-10);
    vertex(mouseX, mouseY);
    bezierVertex(mouseX, mouseY-20, mouseX-40, mouseY-10, mouseX, mouseX-10);
    endShape();
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
