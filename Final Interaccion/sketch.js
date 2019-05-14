//variables basicas para poder usar las tablas cvs
var tablaDesempleo;
var numFilas;
var numColumnas;

//variables del boton de reset
var botx, boty, tamBot;

//variables boton de reinicio
botx = 25;
boty = 25;
tamBot = 40;





//un arraylist multiusos para diferentes usos dentro del codio, principalmente encontrar los valores mayores dentro
//de columnas de la tabla
multArray = [];



//variables que dictaminan los diferentes estados que se quieren mostrar
var estadoGeneral = 0;
var estadoBarras = 1;





//preload donde se cargan las tablas csv que se utilizaran

function preload() {

  fondo = loadImage('fondo-1.jpg');
  flecha = loadImage('back arrow.png');
  tablaDesempleo = loadTable('desempleo.csv', 'csv', 'header');

  tablaPoblacion = loadTable('DatosPoblacion-1.csv', 'csv', 'header');

}


function setup() {

  
  //createCanvas(windowWidth, windowHeight);
 createCanvas(900, 1200);
  background(210);

  
  /*

  //se carga y se pone la imagen como fondo de pantalla
  fondo.resize(width, height);
  image(fondo, 0, 0)
  filter(BLUR, 7);
  
  */
 cargarfondo(); 
  
  fill(70, 80)
  rect(0, 0, width, height)








  //se obtiene el numero de columnas y filas de las tablas
  numFilas = tablaDesempleo.getRowCount();
  numColumnas = tablaDesempleo.getColumnCount();

  
  numFilas1 = tablaPoblacion.getRowCount();
  numColumnas1 = tablaPoblacion.getColumnCount();



}




function draw() {

  frameRate(30);
  frameRate(4);





  var altura = 0;
  var ancho = 0;
  var posX = 0;
  var posY = 0;

  var valorMax = 0;

  var ano;
  var estadoDeseado;
  multArray = [];

  
 
  ///----------------------------------------------
  

  if (estadoGeneral == 0) {
  
  
    //volver a dibujar el fondo para ocultar los estados anteriores
    image(fondo, 0, 0)
    //Borrar esta parte para recuperar el efecto filter(BLUR, 7);



    //recuadro que acompaña el texto de la pregunta
    fill(250)
    tamBot = 40;
    textSize(20);
    
    var texto = 'LA SIGUIENTE, ES UNA INFOGRAFIA INTERACTIVA ACERCA DEL DESEMPLEO EN COLOMBIA DE LOS AÑOS 1975 AL 2008';
    
    var texto2= 'MOSTRANDO DIFERENTES CATEGORIAS Y LA INFORMACION SEPARADA POR HOMBRES Y MUJERES DENTRO DE CADA AÑO';
    
    var texto3= 'TAMBIEN EXISTE LA OPCION DE MOSTRAR INFORMACION MAS DETALLADA DE CADA AÑO';
    
    rect((width / 2) - (textWidth('Escoja una de las siguientes opciones de busqueda') / 2) - 10, height / 4 - 20, tamBot * 12, tamBot * 15);


    //texto de la pregunta sobre cual categoria quiere la persona
    fill(0)
    textFont('Helvetica');
     push()
    textAlign(CENTER);
    text(texto, (width / 2)-(textWidth(texto)/5), height / 4 + 8  ,480,100);
    pop()
    //se crean botones para preguntar 
    
    
    print(frameCount);
    if(frameCount>=5)
    {
    
    
    //texto de la pregunta sobre cual categoria quiere la persona
    fill(0)
    textFont('Helvetica');
     push()
    textAlign(CENTER);
    text(texto2, (width / 2)-(textWidth(texto2)/5), (height / 4 + 8) +100 ,480,100);
    pop()
    //se crean botones para preguntar 
    
    
    
    }
  
    
    
    if(frameCount>=12)
    {
    
    
    //texto de la pregunta sobre cual categoria quiere la persona
    fill(0)
    textFont('Helvetica');
     push()
    textAlign(CENTER);
    text(texto3, (width / 2)-(textWidth(texto2)/5), (height / 4 + 8) +200 ,480,100);
    pop()
    //se crean botones para preguntar 
    
    
    
    }
    
    
        if(frameCount>=20)
    {
    
    
      
      
    //posicion y texto del boton de continuar
    tamBot = 80;
    botx = width / 2 - (tamBot * 1.8)
    boty = width / 2 + width / 4



 


   if(frameCount%2==0)
   {
    fill(255);
   }
      else{
      fill(180);
      
      }
    rect(botx, boty, tamBot * 3, tamBot);
    flecha.resize(width, height);
    flecha.resize(tamBot, tamBot);

    fill(0)
    textSize(38);
    text('CONTINUAR', botx+5 , boty + tamBot - 20)

    
    
    }
  
  
  
  
  
  }  
  
  
  
  
  
  
  
  


  ///---------------------------------------------------

  if (estadoGeneral == 1) {



    //volver a dibujar el fondo para ocultar los estados anteriores
    image(fondo, 0, 0)
    //Borrar esta parte para recuperar el efecto filter(BLUR, 7);







    //recuadro que acompaña el texto de la pregunta
    fill(250)
    tamBot = 40;
    textSize(20);
    rect((width / 2) - (textWidth('Escoja una de las siguientes opciones de busqueda') / 2) - 10, height / 4 - 20, tamBot * 12, tamBot * 2);


    //texto de la pregunta sobre cual categoria quiere la persona
    fill(0)
    textFont('Helvetica');
     push()
    textAlign(CENTER);
    text('ESCOJA UNA DE LAS SIGUIENTES OPCIONES DE BUSQUEDA', (width / 2) - (textWidth('Escoja una de las siguientes       opciones de busqueda') / 2), height / 4 + 8  ,500,50);
    pop()
    
    
    
    //se crean botones y recuadros dados como opciones de categorias para dar la informacion especifica 

    fill(255)
    rect(width / 2 + ((tamBot * 5) / 2), height / 2 - ((tamBot * 5) / 2), tamBot * 5, tamBot * 6);
    rect(width / 4 + ((tamBot * 5) / 2), height / 2 - ((tamBot * 5) / 2), tamBot * 5, tamBot * 6);
    rect(0 + ((tamBot * 5 / 2)), height / 2 - ((tamBot * 5) / 2), tamBot * 5, tamBot * 6);



    //se pregunta cual es el tipo de busqueda que quiere el usuario dentro de las 3 categorias


    /* CAMBIAR TODA ESTA PARTE PARA QUE FUNCIONE CON TOUCHES EN VEZ DEL MOUSE*/
   
    
    
    //if (dist(touches[j].x, touches[j].y, botx, boty) < 20) {

    
    for (var i = 0; i < touches.length; i++) {

      touchX= touches[i].x;
      touchY= touches[i].y;
  
    if (touchX >= (width / 2 + ((tamBot * 5) / 2)) &&
      touchX <= (width / 2 + ((tamBot * 5) / 2) + tamBot * 5) &&
      touchY >= (height / 2 - ((tamBot * 5) / 2)) &&
      touchY <= (height / 2 + ((tamBot * 5) / 2))
    ) {

      estadoBarras = 1;
      estadoGeneral = 2;
      //print('estadobarras1');
    }



    if (touchX >= (width / 4 + ((tamBot * 5) / 2)) &&
      touchX <= (width / 4 + ((tamBot * 5) / 2) + tamBot * 5) &&
      touchY >= (height / 2 - ((tamBot * 5) / 2)) &&
      touchY <= (height / 2 + ((tamBot * 5) / 2))
    ) {

      estadoBarras = 2
      estadoGeneral = 2;
    }

    if (touchX >= (0 + (tamBot * 5 / 2)) &&
      touchX <= (0 + (tamBot * 5 / 2) + tamBot * 5) &&
      touchY >= (height / 2 - ((tamBot * 5) / 2)) &&
      touchY <= (height / 2 + ((tamBot * 5) / 2))
    ) {

      estadoBarras = 3
      estadoGeneral = 2;
    }


  }
    
    
    //texto que acompaña a cada boton de las opciones de busqueda
    fill(0)
    push()
    textAlign(CENTER);
    text('ANTERIORMENTE', tamBot * 5, (height / 2));
    text('EMPLEADO', tamBot * 5, height / 2 + (tamBot / 2));
    text('DESEMPLEADOS', width / 2 - (tamBot / 2), (height / 2));
    text('PRIMER EMPLEO', width / 2 + (tamBot * 5), height / 2);
    pop()

    
    
    
    //explciaciones de cada uno de los estados dados como opcion de busqueda
    fill(0)
    push()
    textSize(12);
    text('Se entiende como anteriormente empleado, a alguien que alla estado contratado anteriormente y que este buscando empleo activamente', 110, height / 2 + (tamBot),200,tamBot*5);
    
    text('Se entiende como desempleados, a todos aquellos que estan en la capacidad de ejercer una labor pero no estan trabajando y no buscan empleo activamente', width / 2 - 120, height / 2 + (tamBot),200,tamBot*5);
    
     text('Se entiende como primer empleo, a todos aquellos que estan en la capacidad de ejercer recientemente y buscan empleo activamente', width / 2 + 110, height / 2 + (tamBot),180,tamBot*4);
    
    pop();


    
    
    
    
    
    //posicion y texto del boton de reinicio
    tamBot = 80;
    botx = width / 2 - (tamBot * 1.8);
    boty = width/2+ 120;



    //boton de reinicio
    fill(255);
    noStroke();




    rect(botx, boty, tamBot * 3, tamBot);
    flecha.resize(width, height);
    flecha.resize(tamBot, tamBot);

    fill(0)
    textSize(60);
    text('SALIR', botx + 40, boty + tamBot - 20)


  }


  //-----------------------------------------------------------------------------





  //se comprueba el estado que se quiere mostrar
  
  
  ///Estado 2 muestra las barras de informacion segun la eleccion del estado 1

  if (estadoGeneral == 2) {
 
    
    //volver a dibujar el fondo para ocultar los estados anteriores
    image(fondo, 0, 0)
    //Borrar esta parte para recuperar el efecto filter filter(BLUR, 7);
    




    //boton de reinicio

    botx = (width - tamBot) - 25;
    boty = 25;
    tamBot = 40;
    fill(255);
    noStroke();
    textSize(20);

    text('Reiniciar', botx - tamBot - 50, boty + (tamBot / 2))
    rect(botx, boty, tamBot, tamBot);
    flecha.resize(width, height);
    flecha.resize(tamBot, tamBot);
    image(flecha, botx, boty)




//codigo de color que acompaña la infografia que se esta msotrando al usuario



    //cuadro superiores Hombre
    fill(60, 150, 200)
    rect(10, 30, 35, 35)


    //cuadro superiores Mujeres
    fill(200, 150, 200)
    rect(10, 80, 35, 35)

    fill(220)
    textSize(30)
    text('Hombres', 60, 55)
    text('Mujeres', 60, 112)





    //verifica el estado de l bariable "estoBarras" la cual determina cual informacion debe buscar en la
    //base de datos

    if (estadoBarras == 1) {
      estadoDeseado = 'First job seekers';

      estadoDeseado1 = 'Primeros empleo';

      for (i = 0; i < numFilas; i++) {
        if (tablaDesempleo.getString(i, 6) == 'First job seekers') {

          multArray[i] = tablaDesempleo.getNum(i, 7);

        } else {
          multArray[i] = 0;
        }
      }
    }


    if (estadoBarras == 2) {
      estadoDeseado = 'Unemployed';
      estadoDeseado1 = 'Desempleado';

      for (i = 0; i < numFilas; i++) {
        if (tablaDesempleo.getString(i, 6) == 'Unemployed') {

          multArray[i] = tablaDesempleo.getNum(i, 7);

        } else {
          multArray[i] = 0;
        }
      }



    }


    if (estadoBarras == 3) {
      estadoDeseado1 = 'Anteriormente Empleado';
      estadoDeseado = 'Previously employed';

      for (i = 0; i < numFilas; i++) {
        if (tablaDesempleo.getString(i, 6) == 'Unemployed') {

          multArray[i] = tablaDesempleo.getNum(i, 7);

        } else {
          multArray[i] = 0;
        }
      }



    }


    // print(max(multArray));

    valorMax = max(multArray);




    //----------------------------------------------------

    
    //Recuadro que acompaña el texto superior para que sea mas facil su lectura
    
    fill(255)
    rect(width / 2 - textWidth(estadoDeseado+"ss"), 185,textWidth('Hombres y Mujeres ' + estadoDeseado1+"sss"),100)


   //texto del centro superior que informa cual es la categoria que se esta viendo en este momento
    fill(0)
    textSize(30)
    text('Hombres y Mujeres ' + estadoDeseado1+'s', width / 2 - textWidth(estadoDeseado+"s"), 240)



    
    //este for busca entre todas las filas de la base de datos de la tabla de desempleo
    for ( i = 0; i < numFilas; i++) {

      ano = tablaDesempleo.getString(i, 1);
      gene = tablaDesempleo.getString(i, 2);
      estado = tablaDesempleo.getString(i, 6);
      value = tablaDesempleo.getNum(i, 7);



   //este for verifica la informacion para que la informacion sea separada por el año correspondiente
      for (v = 1975; v <= 2008; v++) {


        
        //los siguientes 3 if, analisan las condiciones para separar la informacion
        //dependiendo el genero, del año, y el estado del desempleado, sacados de la tabla cvs
        if (ano == v && gene == "Total men and women" && estado == estadoDeseado) {


          firstJob = value;

          altura = map(firstJob, 0, valorMax, 0, height / 2)
          ancho = width / 33;
          posY = height - altura;
          posX = map(ano, 1975, 2009, 0, width - 1);
          // print(firstJob)


          //esta parte del codigo dibuja las barras verticales para ambos generos unidos, representada por
          //el color gris
          push()
          translate(posX + (ancho - 3), height - altura)
          rotate(-HALF_PI)
          fill(220)
          text(ano, 0, 0)
          pop()

          stroke(1);
          fill(220);
        }

        
        // esta seccion se encarga de crear botones sobre las barras de informacion
        //de hombres y mujeres jntas para que cada una se vuelva interactiva
        
        
        
        var boton=[];
        
        boton[v] =new botones(posX, posY, ancho, altura,v);
        //boton[v].dibujarse();
   
        
        
        //si se preciona una de las barras en este estado, 
    //se muestra informacion especifica de ese año
 
    for (var i = 0; i < touches.length; i++) {

     touchX= touches[i].x;
     touchY= touches[i].y;
          
        if (touchX>=boton[v].posX&&
        touchX<=boton[v].posX+ancho &&
        touchY>=boton[v].posY)
    {
      boton[v].tocar();
      boton[v].dibujarse();
      
      
      setTimeout(cambio(3),20000);      
      anoFinal = boton[v].ano;

    }

    }
        //rect(posX, posY, ancho, altura);

        
        //este if verifica la informaicon de los hombres
        if (ano == v && gene == "Men" && estado == estadoDeseado) {
          firstJob = value;

          
          
          //esta parte del codigo dibuja las barras verticales para los hombres, representada por
          //el color azul
          altura = map(firstJob, 0, valorMax, 0, height / 2)
          ancho = width / 66;
          posY = height - altura;
          posX = map(ano, 1975, 2009, 0, width - 1);


          fill(60, 150, 200);
          noStroke()



        }


        
        //este if verifica la informacion de las mujeres
        if (ano == v && gene == "Women" && estado == estadoDeseado) {
          firstJob = value;
          
          
          
          //esta parte del codigo dibuja las barras verticales para las mujeres, representada por
          //el color rosa

          altura = map(firstJob, 0, valorMax, 0, height / 2)
          ancho = width / 66;
          posY = height - altura;
          posX = (map(ano, 1975, 2009, 0, width - 1) + 13.5);


          fill(200, 150, 200);
          noStroke()


        }
      }
    
       
        
        rect(posX, posY, ancho, altura);
    
    
    
    
    
    
    }    
        

  }
  
  //-----------------------------------------------------
  
  
  //Parte del codigo que muestra la 3ra fase del codigo dependiendo de las elecciones hechas en los anteriores estados
  
  if (estadoGeneral == 3) {
  
    
      image(fondo,0,0)
  
    
for(w=0;w<numFilas1;w++)
{
  
  if(tablaPoblacion.getNum(w,1)==anoFinal)
         {
           var j= tablaPoblacion.getString(w,1);
           var ambos= tablaPoblacion.getNum(w,2);
                    print(ambos);
         }
}
    
    
    
    for(w=0;w<numFilas;w++)
{
  
  if(tablaDesempleo.getNum(w,1)==anoFinal&&
    tablaDesempleo.getString(w,2)=="Total men and women")
  {
  var y= tablaDesempleo.getNum(w,7)*1000;
    
  }

  
  if(tablaDesempleo.getNum(w,1)==anoFinal&&
    tablaDesempleo.getString(w,2)=="Men")
  {
   MenDiam= tablaDesempleo.getNum(w,7);
  }
  
}
    
    
    
   var final= ((y*100)/ambos)+0.1;
    final=nf(final, [2], [2])
   
    
    
    
    //variable de un texto base
    var z= 'Durante el año ' + anoFinal + ' en Colombia existia una poblacion de '+ambos+' personas en estado '+ "´"+ estadoDeseado1+"´"+ ' lo cual representa un '+final+'% de la poblacion';
   
    
    
    //esferas que representan visualmente el porcentaje que se esta hablando en la parte superior
    ambos=map(ambos,0,45000000,0,width/2)
    
    //se exagera el numero de y para que se pueda percibir mas facilmente dentro de la escala pero aun asi manteniendo una coeherencia
    y=map(y,0,40000000,0,width/2)
    
    push()
    fill(220);
    ellipse(width/2,height/2,ambos,ambos);
    fill(160);
    ellipse(width/2,height/2,y,y);
    fill(0);
    textSize(12)
    text('porcectaje'+final,width/2+10,height/2)
    pop()
  
    
    
    
    
    //Recuadro que acompaña el texto superior para que sea mas facil su lectura
        
    fill(255)
    rect(width / 2 - (textWidth(z)/2), 185,textWidth(z)+20,100);

    
    //texto del centro superior que informa cual es la categoria que se esta viendo en este momento
 
    
    push()
    fill(0)
    textSize(20)
    textAlign(CENTER);
   // text(z, width / 2 - (textWidth(z)/2), 240,textWidth(z)+20,200)
    text(z, (width / 2) - (textWidth(z)/3), 240,width,600)

    pop()
 //posicion y texto del boton de reinicio
    tamBot = 80;
    botx = width / 2 - (tamBot * 1.8)
    boty = width / 2 + width / 4



    //boton de reinicio
    fill(255);
    noStroke();




    rect(botx, boty, tamBot * 3, tamBot);
    flecha.resize(width, height);
    flecha.resize(tamBot, tamBot);

    fill(0)
    textSize(60);
    text('SALIR', botx + 40, boty + tamBot - 20)

  
  }






  //esta seccion concierne a los botones de reinicio y salida y su comportamiento segun el estado general


  //se comprueba en cualquier momento touch() toca el boton de reinicio
  
  
  
   for (var h = 0; h < touches.length; h++) {

    touchX= touches[h].x;
    touchY= touches[h].y;
     
  
  if (dist(mouseX, mouseY, botx+tamBot, boty+tamBot) < tamBot - 10){

    
    if(estadoGeneral==1||estadoGeneral==3)
    {
    estadoGeneral = 0;
     frameCount=0;
      print('aqui se reinicia  0')
    }
    
    
    else{

    
    estadoGeneral = 1;
    print('aqui se reinicia')
  
  }


  }

}
  
}




//funcion creada para poder hacer un cambio con delay dependiendo de la situacion
function cambio(v)
{
 estadoGeneral=v;

}


//funcion para crear los botones invisibles con los que se puede intereactuar con las barras creadas en
//los if dentro del draw
function botones(posX, posY, ancho, altura,ano)
{
  
  //variables de cada Boton invisible que se crea sobre las barras
  this.posX=posX;
  this.posY=posY;
  this.ancho=ancho;
  this.altura=altura;
  this.ano=ano;
   
  
  //esta funcion se encarga de retornar segun si el area del boton fue tocado
  this.tocar = function() {
 
    
    //print('aqui funciona'+this.ano);
    
  }
  
  
  
  //esta funcion se encarga de dibujar el boton
  this.dibujarse = function() {

{

  fill(255,255,0)
  noStroke();
  rect(this.posX,this.posY,this.ancho=ancho,this.altura)


}

 
  
  
 }

}




function cargarfondo(){


  //se carga y se pone la imagen como fondo de pantalla
  fondo.resize(width, height);
  image(fondo, 0, 0)
  //filter(BLUR, 7);




}


