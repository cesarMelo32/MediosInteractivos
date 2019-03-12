

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

miSeg=second();
  
  miSegMod=map(miSeg,0,59,0,300);
miHor=hour();
miMin=minute();
miDay=day();
  
  
  push()
  translate(30,30)
  
  
  for(i=0;i<(59-miMin);i++){
    
    stroke(250,180,36);
    strokeWeight(3);
    x=miMin;
    line(i*11,-30,i*11,900);
     
       
  }
  pop()
  
  
  
  if(miSeg<30)
     {
  fill(100,180,69);
     }
  if(miSeg>=30&&miSeg<50)
     {
  fill(250,180,69);
     }
if(miSeg>=50&&miSeg<60)
     {
  fill(250,80,69);
     }
  
  
  
  
  
  noStroke();
  rect((width/2)-70,height/2+miSegMod,150,300-miSegMod);
  
  
  
  noFill();
  stroke(0);
  strokeWeight(5)
  rect((width/2)-70,height/2,150,300);
  rect((width/2)-30,height/2-50,70,50);
  
  
  
     push()
    translate(width-70,0)
  for(i=0;i<(24-miHor);i++){
    noStroke();
   
    
    translate(0,i+65)
    translate(0,-5)
    
  for (let w = 0; w < 10; w ++) {
  
    fill(250,180,36);
    ellipse(0, 20, 10, 20);
    rotate(PI/5);
    
  }
    
  }

  pop()
  
//minutos  
  
  
  
  
  
  


}
