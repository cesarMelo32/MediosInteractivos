   var tablaDesempleo;
  var numFilas;
  var numColumnas;


  desempleado = [];



  var Unemployed = 0;
  var prevEmploy = 0;
  var firstJob = 0;


  var Unemployed = 0;
  var prevEmploy = 0;
  var firstJob = 0;


  var menUnemployed = 0;
  var menprevEmploy = 0;
  var menfirstJob = 0;

  var womUnemployed = 0;
  var womprevEmploy = 0;
  var womfirstJob = 0;




      var ancho=0;
      var posX=0;
      var posY=0;    



      var ano;
      var gene; 
      var estado;



var estadoBarras=0;


  function preload() {

    imagen=loadImage('fondo.jpg');
    tablaDesempleo = loadTable('desempleo.csv', 'csv', 'header');

  }


  function setup() {
    
    createCanvas(900, 900);
    background(210);
    
    imagen.resize(width,height);

    image(imagen,0,0)
    
    fill(70,80)
    rect(0,0,width,height)
    
    
    
    fill(60,150,200)
    rect(10,10,35,35)
    
    
    fill(200,150,200)
    rect(10,60,35,35)
    
    fill(0)
    textSize(25)
    text('Hombres',60,35)
    text('Mujeres',60,82)
    

    
  }




  function draw() {
    //background(220);
   
    
  var Unemployed = 0;
  var prevEmploy = 0;
  var firstJob = 0;


  var menUnemployed = 0;
  var menprevEmploy = 0;
  var menfirstJob = 0;

  var womUnemployed = 0;
  var womprevEmploy = 0;
  var womfirstJob = 0;




      var ancho=0;
      var posX=0;
      var posY=0;    
    
    
    
    numFilas = tablaDesempleo.getRowCount();
    numColumnas = tablaDesempleo.getColumnCount();


    for (var i = 0; i < numFilas; i++) {
      
      
      ano = tablaDesempleo.getString(i, 1);
      gene = tablaDesempleo.getString(i, 2);
      estado = tablaDesempleo.getString(i, 6);

      
      
      for(v=1975;v<=2008;v++)
      {
        
      if (estado == 'Unemployed' && ano==v) {

        Unemployed = Unemployed + 1;
        print('un ' + Unemployed);
      }

      
      if (estado == 'Previously employed'&& ano==v) {

        prevEmploy = prevEmploy + 1;
        //print('pre ' + prevEmploy);
      }


      if (estado == 'First job seekers'&& ano==v) {

        firstJob = firstJob + 1;
        print('first  ' + firstJob);

      }
      
      
      
      //----------------------
      
      
      
      
      if (estado == 'Unemployed' && gene == 'Men'&& ano==v) {

        menUnemployed = menUnemployed + 1;
        //print('men un ' + menUnemployed);
      }

      
      if (estado == 'Previously employed'&& gene == 'Men'&& ano==v) {

        menprevEmploy = menprevEmploy + 1;
        //print('men pre ' + menprevEmploy);
      }


      if (estado == 'First job seekers'&& gene == 'Men'&& ano==v) {

        menfirstJob = menfirstJob + 1;
        print('men first  ' + menfirstJob);

      }
      
      
      //-------------------------
      
      
      
          
      if (estado == 'Unemployed' && gene == 'Women'&& ano==v) {

        womUnemployed = womUnemployed + 1;
        //print('women un ' + womUnemployed);
      }

      
      if (estado == 'Previously employed'&& gene == 'Women'&& ano==v) {

        womprevEmploy = womprevEmploy + 1;
        //print('women pre ' + womprevEmploy);
      }


      if (estado == 'First job seekers'&& gene == 'Women'&& ano==v) {

        womfirstJob = womfirstJob + 1;
        print('women first  ' + womfirstJob);

      }
      
    }


      
 if(estadoBarras==0)
 {
   fill(220)
   text('MUJERES Y HOMBRES PRIMER EMPLEO',width/2-120,50)   
   
   
    altura = map(firstJob, 0, 150, 0, height)
     
    ancho=33;
    posX=(numFilas -1- i) * (width / 33);
    posY=height - altura;    
    
    fill(220)
    stroke(0)
    rect(posX,posY,(width / 33), altura)
      
  
    push()
    translate(posX,height-altura-10)
    rotate(-HALF_PI)
    fill(0)
    noStroke()
    textSize(20);
    text(ano,0,0)
    pop()
      
      
      
      
    altura = map(menfirstJob, 0, 98, 0, height)
    posX=(numFilas -1- i) * (width / 33);
    posY=height - altura;  
    noStroke()
    fill(60,150,200)
    rect(posX,posY,(width / 66), altura)
      

      
    altura = map(womfirstJob, 0, 98, 0, height)
    posX=((numFilas -1- i) * (width / 33))+(width / 66);
    posY=height - altura;  
    noStroke()
    fill(200,150,200)
    rect(posX,posY,(width / 66), altura)
 }
        
  }



    
 //   barras(firstJob,menfirstJob,womfirstJob);
    



  }



function barras(_x,_y,_z)
{
    this.miX=_x;
    this.miY=_y;
    this.miZ=_z;
  
  
  
  for (var i = 0; i < numFilas; i++) {
    
    altura = map(this.miX, 0, 150, 0, height)
    ancho=33;
    posX=(numFilas -1- i) * (width / 33);
    posY=height - altura;    
    
    fill(220)
    noStroke()
    rect(posX,posY,(width / 33), altura)
      
  
    push()
    translate(posX+(ancho-3),height-altura-10)
    rotate(-HALF_PI)
    fill(0)
    text(ano,0,0)
    pop()
      
      
      
      
    altura = map( this.miY , 0, 98, 0, height)
    posX=(numFilas -1- i) * (width / 33);
    posY=height - altura;  
    noStroke()
    fill(60,150,200)
    rect(posX,posY,(width / 66), altura)
      

      
    altura = map(this.miZ, 0, 98, 0, height)
    posX=((numFilas -1- i) * (width / 33))+(width / 66);
    posY=height - altura;  
    noStroke()
    fill(200,150,200)
    rect(posX,posY,(width / 66), altura)
  
  }
  

  


}