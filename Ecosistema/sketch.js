/*
crear las 5 especias en forma de funcion y hacer que las 5 especies y que ellas interactuen
entre ellas




*/


//variable de abejas
var maya;
var losmayas = [];
var numMayas = 6;



//variables saltamontes
var saltamo;
var losalto = [];
var numsalto = 3;



//variables de las flores
var floresX = [];
var floresY = [];
var cantflores = 5;
var crecimientoFlores1 = true;



//variables de las arañas
var arañas = [];
var cantaraña = 5;
var direaraña=true;



//variables de muertes por cada especia


//abejas muertas por saltamontes
var AbeMueSalt=0; 
var SaltMueAra=0;




function preload()
{

miFoto=loadImage('Forest.jpg');
}


function setup() {
  createCanvas(800, 800);
   miFoto.resize(width,height);
  

   //creacion de abejas

  for (var i = 0; i < numMayas; i++) {
    losmayas[i] = new abeja(random(width), random(height / 2));
    
  }

  //creacion de saltamontes

  for (var i = 0; i < numsalto; i++)

  {

    losalto[i] = new saltamontes(random(width), random(height / 2, height));

  }

  //creacion de flores
  
   for (var i = 0; i < cantflores; i = i + 1) {
    flores[i] = new flores(random(width),height);
    }
  
  
//creacion de arañas
  
   for (var i = 0; i < cantaraña; i = i + 1) {
    arañas[i] = new araña(random(width),random(0,70));
    }  



}



function crearabejas(){


  //creacion de las 
  for (var i = 0; i < numMayas; i++) {
    losmayas[i] = new abeja(random(width), random(height / 4));
  }
}



function draw() {
  
  image(miFoto, 0,0);
  frameRate(30);

  
  //creacion y dibujar abejas
  for (var i = 0; i < numMayas; i++) {
    
    
    losmayas[i].dibujarse();
    losmayas[i].moverse();


    //matar miembros del ejercito
    if (dist(mouseX, mouseY, losmayas[i].miX, losmayas[i].miY) < 15) {
      
      losmayas[i].morirse();
      

    }
  }
   
  
  
  
  //crear mas abejas si una de ellas logra llegar al suelo o si logran escapar
  for (var i = 0; i < numMayas; i++) {
  if(losmayas[i].miY>height&&losmayas[i].estaViva==true)
  {
  numMayas=numMayas+1;
  
  crearabejas()
  
  
  
  } 
  }
  
  
  //se llama las funciones creadas dentro de la misma funcion de la abeja

 
  //crear Flores
  
  for (var i = 0; i < cantflores; i++) {


    flores[i].dibujarse();
    flores[i].crecer();

  
  }

  
    //crear telarañas entre arañas no tan lejos
  
   for (var i = 0; i < cantaraña; i++) {
   for(var v = 0; v < cantaraña; v++){
     if (dist(arañas[i].miX, arañas[i].miY,arañas[v].miX,arañas[v].miY) < 150) {
  
    arañas[i].telaraña(arañas[v].miX,arañas[v].miY)
   }
  }
}
  
  
  //crear Arañas
  
  for (var i = 0; i < cantaraña; i++) {


    arañas[i].dibujarse();
    arañas[i].moverse();
  
  }

  
  



  //crear saltamontes

  for (var i = 0; i < numsalto; i++) {
    losalto[i].dibujarse();
    losalto[i].moverse();

    //muerte por los saltamontes
    if (dist(mouseX, mouseY, losalto[i].miX, losalto[i].miY) < 15) {
      losalto[i].morirse();

    }


  }
  
  
  //flores crecen mas rapidos si estan cercas la abejas
  
    for (i = 0; i < cantflores; i++) {
    for (v = 0; v < numMayas; v++) {
      if (losmayas[v].estaViva==true) {
        if (dist(flores[i].miX, flores[i].miY, 
                 
                 losmayas[v].miX, losmayas[v].miY) < 100) {
           //print("funciona");
          
          flores[i].crecerRapido();
        }
      }
    }

  }
  
  
  
  


  //saltamontes atacan a las abejas si estan cerca
 
  for (i = 0; i < numsalto; i++) {
    for (v = 0; v < cantaraña; v++) {
      if (losalto[i].estaViva==true) {
        
        if (dist(losalto[i].miX, losalto[i].miY, arañas[v].miX, arañas[v].miY) < 70) {

          losalto[i].miX = arañas[v].miX;
          losalto[i].miY = arañas[v].miY;
          losalto[i].morirse();
          arañas[v].dir=false;
               
          
        }
      }
    }

  }

  
  
  //las arañas atacan a los saltamontes si estan cerca de ellas y se regresan a la parte de
  //arriba de la pantalla
    for (i = 0; i < numsalto; i++) {
    for (v = 0; v < numMayas; v++) {
      if (losmayas[v].estaViva==true) {
        
        if (dist(losalto[i].miX, losalto[i].miY, losmayas[v].miX, losmayas[v].miY) < 70) {

          losalto[i].miX = losmayas[v].miX;
          losalto[i].miY = losmayas[v].miY;
          losmayas[v].morirse();
          AbeMueSalt=AbeMueSalt+1;
          print(AbeMueSalt);
          numMayas=numMayas-1;
      
          
          
        }
      }
    }

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  print(numMayas);
  
  //enloquecer a las abejas si han matado muchas
  
if(AbeMueSalt>=5)
{
for (v = 0; v < numMayas; v++) {
losmayas[v].enloqueser(4);
  AbeMueSalt=0;
}

}



}





//funcion creadora de abejas
function abeja(_x, _y) {

  //caracteristicas de la abeja que se crea

  this.miX = _x;
  this.miY = _y;
  this.dir = 1;
  this.estaViva = true;
  this.caos = false;


  //habilidades de la abeja

  //habilidades de dibujarse
  this.dibujarse = function() {

    if (this.estaViva == true) {
      noStroke();
      fill(0);
      ellipse(this.miX, this.miY, 20, 5);
      ellipse(this.miX + 10, this.miY - 4, 10, 10);

      stroke(0);
      strokeWeight(1);
      fill(255);
      ellipse(this.miX - 2, this.miY - 7, 10, 12);
      ellipse(this.miX + 5, this.miY - 10, 10, 15);
      ellipse(this.miX + 11, this.miY - 6, 5, 5);


      fill(225, 225, 0);
      strokeWeight(3);
      stroke(255, 200, 10);
      quad(this.miX, this.miY - 2.5, this.miX, this.miY + 2.5);
      quad(this.miX - 6, this.miY - 1.5, this.miX - 6, this.miY + 2);
      quad(this.miX + 6, this.miY - 1.5, this.miX + 6, this.miY + 3);

    }

  }

  this.moverse = function() {

    if(this.caos==false)
    {
    this.miX = this.miX + random(-1, 1);
    this.miY = this.miY + random(-1, 3);
    }
    
    
    if(this.caos==true)
    {
    this.miX = this.miX + random(-8, 8);
    this.miY = this.miY + random(5);
    }
    
  
    
    }

  this.morirse = function() {
    this.estaViva = false;
  }
  
  
   this.enloqueser = function(_x) {
    if(_x>=1)
    {
     this.caos= true;
    }
   }


//final Abejas

}




function flores(_x,_y)
{
  
  //caracteristicas
  this.miX = _x;
  this.miY = _y;
  this.dir = 1;
  this.estaViva = true;
  
  
  //dibujar
  
  this.dibujarse=function()
  {
  
for (var i = 0; i < cantflores; i = i + 1) {

    fill(100, 255, 50);
    stroke(50, 155, 10);

    quad(this.miX , this.miY , this.miX , height);
    push()
    translate(this.miX , this.miY );

    noStroke();
    for (let i = 0; i < 10; i++) {

      fill(255, 100, 120);
      ellipse(0, 10, 8, 45);
      rotate(PI / 5);
    }
    pop()

}
  
  }
  
  
  this.crecer=function(){
    if (this.miY  <= 0) {
      crecimientoFlores1 = false;
    }


    if (this.miY  >= 300) {
      crecimientoFlores1 = true;
    }

    if (crecimientoFlores1 == true) {
      this.miX  = this.miX  - random(0, 0);

      this.miY  = this.miY  - random(0.2, 0.2);
    }

    if (crecimientoFlores1 == false) {
      this.miX  = this.miX  + random(0, 0);

      this.miY  =this.miY  + random(0.2, 0.2);
    }
   }
  
  
  this.crecerRapido=function()
  {
    this.miX  = this.miX  + random(-3, 3);
   this.miY  =this.miY  - random(0.6, 0.6);
  
  
  } 
   
  
  
  }











function saltamontes(_x, _y) {


  this.miX = _x;
  this.miY = _y;
  this.dir = true;
  this.estaViva = true;
  this.miedo= false;



  //caracteristicas 
  this.dibujarse = function() {
    if (this.estaViva == true) {
      stroke(10, 90, 10);
      strokeWeight(1);
      //antenas de los saltamontes
      fill(90, 200, 150);
      ellipse(this.miX + 11, this.miY - 13, 2, 20);
      ellipse(this.miX + 17, this.miY - 13, 2, 20);

      //cuerpo de los saltamontes
      fill(90, 200, 150);
      ellipse(this.miX - 12, this.miY, 35, 15);


      //cabeza de los saltamontes
      fill(90, 255, 130);
      ellipse(this.miX + 13, this.miY - 5, 18, 18);

      //patas de los saltamontes
      fill(90, 255, 130);
      ellipse(this.miX - 18, this.miY + 7, 6, 18);
      ellipse(this.miX - 9, this.miY + 7, 6, 18);
      ellipse(this.miX - 2, this.miY + 7, 6, 18);

      //ojos negros
      fill(0);
      ellipse(this.miX + 14, this.miY - 5, 5, 5);
    }
  }


  this.moverse = function() {
    if(this.miY<height/2) {
       
      this.miedo=true;
       
       }
    if(this.miY>=height){
    this.miedo=false;
    }
    
    
    if(this.miedo == false)
    {
    this.miX = this.miX + random(-6, 6);
    this.miY = this.miY + random(-1.5, 1.5); 
    }
    if(this.miedo == true){
    this.miX = this.miX + random(-4, 4);
    this.miY = this.miY + random(0, 2.5);
  
      
  }
  }
  this.morirse = function() {
    this.estaViva = false;
  }

  this.atacar = function(_X, _Y) {
    this.miX = _X;
    this.miY = _Y;
  }
//Final Saltamontes

}



function araña(_x,_y){

  this.miX = _x;
  this.miY = _y;
  this.dir = true;

  
  this.dibujarse=function()
  {
  for (var i = 0; i < cantaraña; i = i + 1) {

    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(this.miX, this.miY, 18, 18);
    
    
    //telaraña
    quad(this.miX, this.miY, this.miX, 0);



    //patitas izquierdas

    ellipse(this.miX - 10, this.miY - 5, 5, 2);

    ellipse(this.miX - 10, this.miY, 5, 2);

    ellipse(this.miX - 10, this.miY + 5, 5, 2);



    //patitas derechas

    ellipse(this.miX + 10, this.miY - 5, 5, 2);

    ellipse(this.miX + 10, this.miY, 5, 2);

    ellipse(this.miX + 10, this.miY + 5, 5, 2);



    //ojos  blancos

    fill(255);

    ellipse(this.miX - 4, this.miY - 2, 7, 7);

    ellipse(this.miX + 4, this.miY - 2, 7, 7);

    //ojos  negros

    fill(0);

    ellipse(this.miX - 4, this.miY - 2, 1, 1);

    ellipse(this.miX + 4, this.miY - 2, 1, 1);

  }

  }
   
  
    this.moverse=function()
  {
  
    
if(this.miY>=height)
{
this.dir=false;

}
 
    
if(this.miY<=0)
{
this.dir=true;

}
    
    
if(this.dir==true)
{
    this.miX = this.miX + random(0, 0);

    this.miY = this.miY + random(0, 1.5);
}
    
if(this.dir==false)
{
    this.miX = this.miX + random(0, 0);

    this.miY = this.miY - random(0, 0.5);
}

    }
  
  
    this.telaraña=function(_x,_y)
  {
    stroke(0);
      strokeWeight(0.5);
    quad(this.miX, this.miY, _x, _y);
      
    
    }

this.subri=function()
{
this.dir=false;

}


}








