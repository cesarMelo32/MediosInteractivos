var datos;
var datosUbi;
var cuantos;
var miFoto;

//estados de pantalla
var inicio = true;
var Atlantic = false;
var Southeast = false;
var Central = false;
var Northwest = false;


//equipos division atlantic

var BostonCeltics=false;
var BrooklynNets=false;
var NewYorkKnicks=false;
var Philadelphia=false;
var TorontoRaptors=false;


function setup() {



  createCanvas(800, 500);
}


function preload() {

  datos = loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/nba_teams.json");



  //Estadios
  foto0 = loadImage('Wallpaper_0.jpg');
  foto1 = loadImage('air_canada_centre.jpg');
  foto2 = loadImage('amway_center.jpg');
  foto3 = loadImage('att_center.jpg');
  foto4 = loadImage('american_airlines_arena.jpg');
  foto5 = loadImage('bankers_life_fieldhouse.jpg');
  foto6 = loadImage('auburn_hills.jpg');
  foto7 = loadImage('barclay.jpg');
  foto8 = loadImage('bmo_harris_bradley.jpeg');
  foto9 = loadImage('chesapeake_arena.jpg');
  foto10 = loadImage('fondo.jpg');
  foto11 = loadImage('madison_square_garden.jpg');
  foto12 = loadImage('moda_center.jpg');
  foto13 = loadImage('philips_arena.jpg');
  foto14 = loadImage('quicken_loans_arena.jpg');
  foto15 = loadImage('pepsi_center.jpg');
  foto16 = loadImage('target_center.jpg');
  foto17= loadImage('td_garden.jpg');
  foto18=loadImage('wells_fargo.jpg')
}



function draw() {
  background(220);



  if (inicio == true) {
    miFoto = foto10;

    miFoto.resize(width, height);
    image(miFoto, 0, 0);
    frameRate(1)




    push()
    translate(25, -8)
    fill(255, 95)
    rect(width / 8, height / 4, width / 4, height / 4);
    rect(width / 8, height / 2 + (20), width / 4, height / 4);

    rect(width / 2, height / 4, width / 4, height / 4);
    rect(width / 2, height / 2 + (20), width / 4, height / 4);


    fill(5)
    textSize(45)
    text('Atlantic', 130, 205)
    text('Central', 430, 205)

    textSize(40)
    text('Southeast', 110, 345)
    text('Northwest', 410, 345)
    pop()




  }


  if (Atlantic == true) {
    miFoto = foto0;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);

    fill(255, 99);
    rect(width / 2 - 46, 10, 110, 45);
    fill(255)
    textSize(30)
    text('Atlantic', width / 2 - 40, 40)


    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);



    //lista de equipos
    for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].division == 'Atlantic') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;

        altura = map(i, 0, 21, 15, height);


        textSize(15);
        push()
        translate(300, 140 + (altura))
        text((i + 1) + "  " + name, 10, 0 + (altura))
        text(division, 200, 0 + (altura))
        text(conference, 280, 0 + (altura))

        rect(0, (-20) + (altura), 360, 25)
        pop()
      }
    }


  }

  
  if (Southeast == true) {
    miFoto = foto0;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);

    fill(255, 99);
    rect(width / 2 - 46, 10, 150, 45);
    fill(255)
    textSize(30)
    text('Southeast', width / 2 - 40, 40)


    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);



    //lista de equipos
    for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].division == 'Southeast') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;

        altura = map(i, 0, 21, 15, height);


        textSize(15);
      
        push()
        translate(300, -335+ (altura))
        text((i + 1) + "  " + name, 10, 0 + (altura))
        text(division, 200, 0 + (altura))
        text(conference, 280, 0 + (altura))
        rect(0, (-18) + (altura), 360, 25)
        pop()
      }
    }


  }

  if (Central == true) {
        miFoto = foto0;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);

    fill(255, 99);
    rect(width / 2 - 46, 10, 110, 45);
    fill(255)
    textSize(30)
    text('Central', width / 2 - 40, 40)


    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);



    //lista de equipos
    for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].division == 'Central') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;

        altura = map(i, 0, 21, 15, height);


        textSize(15);
        push()
        translate(300, -140 + (altura))
        text((i + 1) + "  " + name, 10, 0 + (altura))
        text(division, 200, 0 + (altura))
        text(conference, 280, 0 + (altura))

        rect(0, (-20) + (altura), 360, 25)
        pop()
      }
    }
  }

  
  
  if (Northwest == true) {
    miFoto = foto0;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);

    fill(255, 99);
    rect(width / 2 - 46, 10, 150, 45);
    fill(255)
    textSize(30)
    text('Northwest', width / 2 - 40, 40)


    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);
     
      //lista de equipos NorthWest
    for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].division == 'Northwest') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;

        altura = map(i, 0, 21, 15, height);


        textSize(15);
        push()
        translate(300, -580 + (altura))
        text((i + 1) + "  " + name, 10, 0 + (altura))
        text(division, 200, 0 + (altura))
        text(conference, 280, 0 + (altura))

        rect(0, (-20) + (altura), 360, 25)
        pop()
      }
    }
    
    
    
  }

  
  if(BostonCeltics==true)
  { 
    miFoto = foto17;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);
    
    
    inicio=false;
    
    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);
    
    fill(255, 99);
    fill(0)
    rect(width / 2 - 46, 10, 200, 45);
    fill(255)
    textSize(30)
    text('Boston Celtics', width / 2 - 40, 40)
    
    
    
     for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].name =='Boston Celtics') {
       var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;
        var state = datos.nba_teams[i].state;
        var stadium = datos.nba_teams[i].stadium;

        textSize(35);
        
        posX=(width/2)-40;
        
        rect(posX,80,380,40)
        rect(posX,130,380,40)
        rect(posX,190,380,40)
        rect(posX,250,380,40)
        rect(posX,310,380,40)
        
        posX=posX+5
        
        fill(0);
        text("Name: " + name, posX, 110)
        text("Division: "+division, posX, 160)
        text("Conference: "+conference, posX, 220)
        text("State: " + state, posX, 280)
        textSize(24)
        text("Stadium:  " + stadium, posX, 340)
        
      }
    
  
   }
  
  }
  
  
  
  if(BrooklynNets==true)
    { 
    miFoto = foto7;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);
    
    
    inicio=false;
    
    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);
    
    fill(255, 99);
    fill(0)
    rect(width / 2 - 46, 10, 200, 45);
    fill(255)
    textSize(30)
    text('Brooklyn Nets', width / 2 - 40, 40)
    
    
    
     for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].name =='Brooklyn Nets') {
       var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;
        var state = datos.nba_teams[i].state;
        var stadium = datos.nba_teams[i].stadium;

        textSize(35);
        
        posX=(width/2)-40;
        
        rect(posX,80,380,40)
        rect(posX,130,380,40)
        rect(posX,190,380,40)
        rect(posX,250,380,40)
        rect(posX,310,380,40)
        
        posX=posX+5
        
        fill(0);
        text("Name: " + name, posX, 110)
        text("Division: "+division, posX, 160)
        text("Conference: "+conference, posX, 220)
        text("State: " + state, posX, 280)
        textSize(24)
        text("Stadium:  " + stadium, posX, 340)
        
      }
    
  
   }
  
  }
  
  
  
  
  
   if(NewYorkKnicks==true)
    { 
    miFoto = foto11;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);
    
    
    inicio=false;
    
    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);
    
    fill(255, 99);
    fill(0)
    rect(width / 2 - 46, 10, 270, 45);
    fill(255)
    textSize(30)
    text('New York Knicks', width / 2 - 40, 40)
    
    
    
     for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].name =='New York Knicks') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;
        var state = datos.nba_teams[i].state;
        var stadium = datos.nba_teams[i].stadium;

        textSize(35);
        
        posX=(width/2)-40;
        
        rect(posX,80,380,40)
        rect(posX,130,380,40)
        rect(posX,190,380,40)
        rect(posX,250,380,40)
        rect(posX,310,380,40)
        
        posX=posX+5
        
        fill(0);
        text("Name: " + name, posX, 110)
        text("Division: "+division, posX, 160)
        text("Conference: "+conference, posX, 220)
        text("State: " + state, posX, 280)
        textSize(24)
        text("Stadium:  " + stadium, posX, 340)
        
      }
    
  
   }
  
  }
  
  
  
  
  
  if(Philadelphia==true)
    { 
    miFoto = foto18;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);
    
    
    inicio=false;
    
    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);
    
    fill(255, 99);
    fill(0)
    rect(width / 2 - 46, 10, 270, 45);
    fill(255)
    textSize(30)
    text('Philadelphia 76ers', width / 2 - 40, 40)
    
    
    
     for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].name =='Philadelphia 76ers') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;
        var state = datos.nba_teams[i].state;
        var stadium = datos.nba_teams[i].stadium;

        textSize(35);
        
        posX=(width/2)-40;
        
        rect(posX,80,380,40)
        rect(posX,130,380,40)
        rect(posX,190,380,40)
        rect(posX,250,380,40)
        rect(posX,310,380,40)
        
        posX=posX+5
        
        fill(0);
        text("Name: " + name, posX, 110)
        text("Division: "+division, posX, 160)
        text("Conference: "+conference, posX, 220)
        text("State: " + state, posX, 280)
        textSize(24)
        text("Stadium:  " + stadium, posX, 340)
        
      }
    
  
   }
  
  }
  
  
  
  
  
  if(TorontoRaptors==true)
    { 
    miFoto = foto1;
    miFoto.resize(width, height);
    image(miFoto, 0, 0);
    
    
    inicio=false;
    
    //Boton de reset
    fill(255, 99);
    rect(10, 15, 90, 50);
    
    fill(255, 99);
    fill(0)
    rect(width / 2 - 46, 10, 270, 45);
    fill(255)
    textSize(30)
    text('Toronto Raptors', width / 2 - 40, 40)
    
    
    
     for (i = 0; i < 20; i++) {

      if (datos.nba_teams[i].name =='Toronto Raptors') {
        var conference = datos.nba_teams[i].conference;
        var division = datos.nba_teams[i].division;
        var name = datos.nba_teams[i].name;
        var state = datos.nba_teams[i].state;
        var stadium = datos.nba_teams[i].stadium;

        textSize(35);
        
        posX=(width/2)-40;
        
        rect(posX,80,380,40)
        rect(posX,130,380,40)
        rect(posX,190,380,40)
        rect(posX,250,380,40)
        rect(posX,310,380,40)
        
        posX=posX+5
        
        fill(0);
        text("Name: " + name, posX, 110)
        text("Division: "+division, posX, 160)
        text("Conference: "+conference, posX, 220)
        text("State: " + state, posX, 280)
        textSize(24)
        text("Stadium:  " + stadium, posX, 340)
        
      }
    
  
   }
  
  }
  
  
  
  
  
  


}



function mouseClicked() {

  if (inicio == true) {
    if (mouseX >= width / 8 && mouseY <= height / 2 && mouseX <= width / 2 && mouseY <= height / 2) {
      Atlantic = true;
      inicio = false;

      print('col');
    }

    if (mouseX >= width / 8 && mouseY >= height / 2 && mouseX <= width / 2 && mouseY >= height / 4) {
      Southeast = true;
      inicio = false;
      print('locx');
    }
        
        if (mouseX>=width/2 && mouseY <= height / 2 && mouseX<=width && mouseY<=height/2) {
      Central = true;
      inicio = false;

      print('col');
    }
        if (mouseX>=width/2 && mouseY <= height && mouseX<=width && mouseY>=height/2) {
      Northwest = true;
      inicio = false;

      print('col36');
    }

  
  }
  
 
  
  
  
  

  if (mouseX >= 10 && mouseY >= 15 && mouseX <= 90 && mouseY <= 50 && inicio == false) {

    inicio = true;
    Atlantic = false;
    Southeast = false;
    Central = false;
    Northwest = false;
    
    
    BostonCeltics=false;
    BrooklynNets=false;
    NewYorkKnicks=false;
    Philadelphia=false;
    TorontoRaptors=false;
    print('reset');
  }
  
  
  
  
  if(inicio==false&&Atlantic==true)
  {
     if((mouseX>=300&&mouseY>=150&&mouseX<=663&&mouseY<=175))
     {
     BostonCeltics=true;
     print('auch');
     }
   
    
     if((mouseX>=300&&mouseY>=195&&mouseX<=663&&mouseY<=215))
     {
     BrooklynNets=true;
     print('auch33');
     }
       
       
  
     if((mouseX>=300&&mouseY>=245&&mouseX<=663&&mouseY<=285))
     {
     NewYorkKnicks=true;
     print('auch39');
     }
    
     if((mouseX>=300&&mouseY>=290&&mouseX<=663&&mouseY<=315))
     {
     Philadelphia=true;
     print('auch99');
     }
    
      if((mouseX>=300&&mouseY>=330&&mouseX<=663&&mouseY<=360))
     {
     TorontoRaptors=true;
     print('auch69');
     }
       
       
  }
  
  
  
  
}

function letterCounter(x) {
  return x.replace(/[^a-zA-Z]/g, '').length;
}