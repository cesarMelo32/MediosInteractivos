var miFoto;
var miPan;
var x=0;
function preload()
{
//si esta imagen se mueve al draw() no tendra oportunidad de ser cargada
//correctamente

miFoto=loadImage('piano.jpg');
 
  x= loadSound('Hey_jude.mp3');
  y=loadSound('let_it_be.mp3');
  miCancion=x;
  miCancionY=y;
}


function setup() {
createCanvas(1400, 1400);
background(220);

amplitude = new p5.Amplitude();
  
  
miCancion.play();
miCancionY.play();
miFoto.loadPixels() ;
  
  sliderRate =createSlider(0,1.5,1,0.01);
   sliderRate2 =createSlider(0,1.5,1,0.01);
 
  miFoto.resize(width,height);
  image(miFoto, 0,0);
  
}





function mouseClicked()
{
  miCancion.jump(random(0,300));
  miCancionY.jump(random(0,300));
}



function draw() {
  

  
  yR=random(0,height);
  xR=random(0,width/2);
  xR2=random(width/2,width);
  
  
  
 miCancion.rate(sliderRate.value());
  
 miCancionY.rate(sliderRate2.value());



  c=map(sliderRate.value(),0,1.5,30,60);
  
  frameRate(c);



  
  
  vol= map(mouseY,height,0,0.0,1.1);
  miCancion.setVolume(vol);
  
  miVolumen= map(mouseX,0,width,0,1);
  miVolumen2= map(mouseX,0,width,1,0);
  
  miCancion.setVolume(miVolumen);
  miCancionY.setVolume(miVolumen2);
 
  
  //flores que aparecen en la parte izquierda para "let it be"
  
  if(mouseX<(width/2))
  { push()
    translate(xR,yR);
    for(i=0;i<random(200);i++)
    {
   
     
  noStroke();
      fill(random(0,100),random(0,180),random(0,255));
  for (let i = 0; i < 10; i ++) {
   
    
    ellipse(0, 15, 5, 20);
    rotate(PI/5);
    
  }
  }
   pop()
   
   
  }
  
  
  
  
  
    //flores que aparecen en la parte derecha para "hey jude"
  
  if(mouseX>(width/2))
  { push()
    translate(xR2,yR);
    for(i=0;i<random(200);i++)
    {
   
     
  noStroke();
      fill(random(0,255),random(0,255),random(0,100));
  for (let i = 0; i < 10; i ++) {
   
    
    ellipse(0, 15, 5, 20);
    rotate(PI/5);
    
  }
  }
   pop()
  }
  
  
  
  

  
}
