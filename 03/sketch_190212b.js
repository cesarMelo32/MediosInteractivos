// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;


var x=255;

var y=0.5;
var i=0;

anochecer=true;

function setup() {
  createCanvas(1000, 400);

  // Define colors
  b1 = color(255);
  b2 = color(0);
}

function draw() {
  
  
  c1 = color(0+(x/3),0+(x/4),0+(x/4));
  c2 = color(155+x, 22+(x/2), 13+(x/4));

  
  
  // Background
  setGradient(0, 0,width/2, height, b1, b2, X_AXIS);
  setGradient(width/2, 0, width / 2, height, b2, b1, X_AXIS);
  // Foreground
  setGradient(0, 0, 1000, 400, c1, c2, Y_AXIS);
  //setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  
  if(anochecer==true)
  {
  x=x+y;
    i= i+0.5;
    
  }
  
  if(anochecer==false)
  {
  
    x=x-y;
    
    i=i-0.5;
    
  }
  
  if(x>255||x<=0)
  {
    anochecer=!anochecer;
    
  }
  
  noStroke();
  fill(245);
  
  
  
    fill(255,255-(x/3.4),255-x);
  
  
  ellipse(width/2,height/2,250+i,250+i)
  
  
  
  fill(220,210,220);
  
  ellipse(440,height/2-(i/18), 30+(i/16),30+(i/16))
  
  
  fill(220,220,230);
  ellipse(460+(x/26),height/2-(i*0.0005), 40+(i/16),40+(i/16))
  
  
  fill(210,210,240);
  ellipse(470+(x/26),170-(i/32), 20+(i/16),20+(i/16))
  
  
  fill(230,230,240);
  ellipse(520+(x/26),200-(i/32), 20+(i/16),20+(i/16))
  
  
  
  if(x>25)
     {
   fill(245-(i*50),245-(x*-1),255-(x*-1));
  
}
  else{
     fill(245-(i*50),70-(x*-1),0);
  
  }
      
  ellipse(width/2,height/2,i,i);
 
  
    
}

function setGradient(x, y, w, h, c1, c2, axis) {
  

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i=y; i<=y+h; i++) {
      let inter=map(i, y, y + h, 0, 1);
      let c=lerpColor(c1, c2, inter);
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
