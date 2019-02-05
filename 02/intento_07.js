

function setup() {
  createCanvas(200,200);
  background(255);
  fill(0);
  noStroke();
  quad(95, 95, 175, 95, 175, 175, 95, 175);
  fill(0);
  noStroke();
  
  
  var posXIni = 15;
var posYIni = 15;
var posX = 25;
var posY = 25;

var posXX = 35;
var posYY = 15;
var x4 = 45;
var y4 = 25;
  
  for (j = 0; j < 2; j++) {
  for (i = 0; i < 2; i++) {
      
      
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  posXIni = 15;
  posX = 25;
  posYIni = 55;
  posY = 65;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 35;
  x4 = 45;
  posYY = 55;
  y4 = 65;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  
  posXIni = 35;
  posX = 45;
  posYIni = 35;
  posY = 45;
  //Triangulos inferiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 15;
  x4 = 25;
  posYY = 35;
  y4 = 45;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  posXIni = 35;
  posX = 45;
  posYIni = 75;
  posY = 85;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 15;
  x4 = 25;
  posYY = 75;
  y4 = 85;
  //Triangulos superiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }
  

  posXIni = 25;
  posX = 35;
  posYIni = 45;
  posY = 55;
  //Triangulos inferiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 05;
  x4 = 15;
  posYY = 45;
  y4 = 55;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  posXIni = 25;
  posX = 35;
  posYIni = 85;
  posY = 95;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 05;
  x4 = 15;
  posYY = 85;
  y4 = 95;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }
  
  posXIni = 15;
  posYIni = 25;
  posX = 25;
  posY = 35;

  
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 10;
    posX = posX + 10;
  }

  posYIni = 25;
  posX = 25;
  posXX = 35;
  posYY = 35;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posX, posYIni, posXX, posYIni, posXX, posYY);
      posX = posX + 10;
      posXX = posXX + 10;
    }
    posX = posX + 20;
    posXX = posXX + 20;
  } {
    fill(255);
    triangle(25, 25, 25, 35, 35, 35)
  }
  fill(0);
  posXIni = 15;
  posYIni = 65;
  posX = 25;
  posY = 75;

  
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 10;
    posX = posX + 10;
  }

  posYIni = 65;
  posX = 25;
  posXX = 35;
  posYY = 75;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posX, posYIni, posXX, posYIni, posXX, posYY);
      posX = posX + 10;
      posXX = posXX + 10;
    }
    posX = posX + 20;
    posXX = posXX + 20;
  } {
    fill(255);
    triangle(25, 65, 25, 75, 35, 75)
  }
  
  
  fill(255);
  triangle(03, 45, 15, 45, 15, 56);

  fill(255);
  triangle(03, 85, 15, 85, 15, 96);
  triangle(03, 85, 15, 85, 15, 96);
  fill(0);
  triangle(85, 85, 95, 85, 95, 95);
  triangle(85, 45, 95, 45, 95, 55);
  triangle(85, 65, 85, 75, 95, 75);
  triangle(85, 25, 85, 35, 95, 35);



  posXIni = 15 + 80;
  posYIni = 15 + 90;
  posX = 25 + 80;
  posY = 25 + 90;
  posXX = 35 + 80;
  posYY = 15 + 90;
  x4 = 45 + 80;
  y4 = 25 + 90;

  fill(255);

  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }

  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  posXIni = 15 + 80;
  posX = 25 + 80;
  posYIni = 55 + 90;
  posY = 65 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 35 + 80;
  x4 = 45 + 80;
  posYY = 55 + 90;
  y4 = 65 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  

  posXIni = 35 + 80;
  posX = 45 + 80;
  posYIni = 35 + 90;
  posY = 45 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 15 + 80;
  x4 = 25 + 80;
  posYY = 35 + 90;
  y4 = 45 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  posXIni = 35 + 80;
  posX = 45 + 80;
  posYIni = 75 + 90;
  posY = 85 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 15 + 80;
  x4 = 25 + 80;
  posYY = 75 + 90;
  y4 = 85 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }
  
  posXIni = 25 + 80;
  posX = 35 + 80;
  posYIni = 45 + 90;
  posY = 55 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 05 + 80;
  x4 = 15 + 80;
  posYY = 45 + 90;
  y4 = 55 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

  posXIni = 25 + 80;
  posX = 35 + 80;
  posYIni = 85 + 90;
  posY = 95 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 05 + 80;
  x4 = 15 + 80;
  posYY = 85 + 90;
  y4 = 95 + 90;
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }
  
  
  
  posXIni = 15 + 80;
  posYIni = 25 + 90;
  posX = 25 + 80;
  posY = 35 + 90;
  
  
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 10;
    posX = posX + 10;
  }

  posYIni = 25 + 90;
  posX = 25 + 80;
  posXX = 35 + 80;
  posYY = 35 + 90;
  
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posX, posYIni, posXX, posYIni, posXX, posYY);
      posX = posX + 10;
      posXX = posXX + 10;
    }
    posX = posX + 20;
    posXX = posXX + 20;
  } 
    fill(255);
    triangle(105, 115, 105, 125, 115, 125)
    triangle(105, 155, 115, 165, 105, 165)
    triangle(165, 155, 175, 165, 165, 165)
  
  posXIni = 15 + 80;
  posYIni = 65 + 90;
  posX = 25 + 80;
  posY = 75 + 90;

  
  
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 10;
    posX = posX + 10;
  }

  posYIni = 65 + 90;
  posX = 25 + 80;
  posXX = 35 + 80;
  posYY = 75 + 90;
  
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posX, posYIni, posXX, posYIni, posXX, posYY);
      posX = posX + 10;
      posXX = posXX + 10;
    }
    posX = posX + 20;
    posXX = posXX + 20;
  }
  posXIni = 25 + 80;
  posX = 35 + 80;
  posYIni = 45 + 50;
  posY = 55 + 50;
  
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXIni, posYIni, posXIni, posY, posX, posY);
      posXIni = posXIni + 10;
      posX = posX + 10;
    }
    posXIni = posXIni + 20;
    posX = posX + 20;
  }


  posXX = 05 + 80;
  x4 = 15 + 80;
  posYY = 45 + 50;
  y4 = 55 + 50;
  
  
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(posXX, posYY, x4, posYY, x4, y4);
      posXX = posXX + 10;
      x4 = x4 + 10;
    }
    posXX = posXX + 20;
    x4 = x4 + 20;
  }

      fill(0);
    triangle(25 + 80, 65 + 90, 25 + 80, 75 + 90, 35 + 80, 75 + 90)
  fill(255)
  triangle(03 + 80, 45 + 90, 15 + 80, 45 + 90, 15 + 80, 56 + 90);

  fill(255);
  triangle(03 + 80, 85 + 90, 15 + 80, 85 + 90, 15 + 80, 96 + 90);
  triangle(03 + 80, 85 + 90, 15 + 80, 85 + 90, 15 + 80, 96 + 90);
  triangle(85 + 80, 85 + 90, 95 + 80, 85 + 90, 95 + 80, 95 + 90);
  triangle(85 + 80, 45 + 90, 95 + 80, 45 + 90, 95 + 80, 55 + 90);
  triangle(85 + 80, 25 + 90, 85 + 80, 35 + 90, 95 + 80, 35 + 90);

  posXIni = 15 + 80;
  posYIni = 15;
  posX = 25 + 80;
  posY = 25;
  posXX = 35 + 80;
  posYY = 15;
  x4 = 45 + 80;
  y4 = 25;

  {
    fill(0);
    noStroke();
    
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 20;
      posX = posX + 20;
    }

    
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
        posXX = posXX + 10;
        x4 = x4 + 10;
      }
      posXX = posXX + 20;
      x4 = x4 + 20;
    }

    posXIni = 15 + 80;
    posX = 25 + 80;
    posYIni = 55;
    posY = 65;
    
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 20;
      posX = posX + 20;
    }


    posXX = 35 + 80;
    x4 = 45 + 80;
    posYY = 55;
    y4 = 65;
    
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
        posXX = posXX + 10;
        x4 = x4 + 10;
      }
      posXX = posXX + 20;
      x4 = x4 + 20;
    }

    
    posXIni = 35 + 80;
    posX = 45 + 80;
    posYIni = 35;
    posY = 45;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 20;
      posX = posX + 20;
    }


    posXX = 15 + 80;
    x4 = 25 + 80;
    posYY = 35;
    y4 = 45;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
        posXX = posXX + 10;
        x4 = x4 + 10;
      }
      posXX = posXX + 20;
      x4 = x4 + 20;
    }

    posXIni = 35 + 80;
    posX = 45 + 80;
    posYIni = 75;
    posY = 85;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 20;
      posX = posX + 20;
    }


    posXX = 15 + 80;
    x4 = 25 + 80;
    posYY = 75;
    y4 = 85;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
        posXX = posXX + 10;
        x4 = x4 + 10;
      }
      posXX = posXX + 20;
      x4 = x4 + 20;
    }
    
    posXIni = 25 + 80;
    posX = 35 + 80;
    posYIni = 45;
    posY = 55;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 20;
      posX = posX + 20;
    }


    posXX = 05 + 80;
    x4 = 15 + 80;
    posYY = 45;
    y4 = 55;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXX, posYY + 10, x4, posYY, x4, y4);
        posXX = posXX + 10;
        x4 = x4 + 10;
      }
      posXX = posXX + 20;
      x4 = x4 + 20;
    }

    posXIni = 25 + 80;
    posX = 35 + 80;
    posYIni = 85;
    posY = 95;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 20;
      posX = posX + 20;
    }


    posXX = 05 + 80;
    x4 = 15 + 80;
    posYY = 85;
    y4 = 95;
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posXX, posYY + 10, x4, posYY, x4, y4);
        posXX = posXX + 10;
        x4 = x4 + 10;
      }
      posXX = posXX + 20;
      x4 = x4 + 20;
    }
    
    
    posXIni = 15 + 80;
    posYIni = 25;
    posX = 25 + 80;
    posY = 35;

    
    
    for (u = 0; u < 2; u++) {
      for (p = 0; p < 2; p++) {
        triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 10;
      posX = posX + 10;
    }

    posYIni = 25;
    posX = 25 + 80;
    posXX = 35 + 80;
    posYY = 35;
    
    
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posX, posYIni + 10, posXX, posYIni, posXX, posYY);
        posX = posX + 10;
        posXX = posXX + 10;
      }
      posX = posX + 20;
      posXX = posXX + 20;
    } {
      fill(255);
      triangle(25, 25, 25, 35, 35, 35)
    }
    fill(0);
    posXIni = 15 + 80;
    posYIni = 65;
    posX = 25 + 80;
    posY = 75;

    
    for (u = 0; u < 2; u++) {
      for (p = 0; p < 2; p++) {
        triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
        posXIni = posXIni + 10;
        posX = posX + 10;
      }
      posXIni = posXIni + 10;
      posX = posX + 10;
    }

    posYIni = 65;
    posX = 25 + 80;
    posXX = 35 + 80;
    posYY = 75;
    
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(posX, posYIni + 10, posXX, posYIni, posXX, posYY);
        posX = posX + 10;
        posXX = posXX + 10;
      }
      posX = posX + 20;
      posXX = posXX + 20;
    } {
      fill(255);
      triangle(25, 65, 25, 75, 35, 75)
    }
    
    fill(255);
    triangle(03, 45, 15, 45, 15, 56);
    triangle(03, 85, 15, 85, 15, 96);
    triangle(03, 85, 15, 85, 15, 96);
    fill(0);
    triangle(85, 85, 95, 85, 95, 95);
    triangle(85, 45, 95, 45, 95, 55);
    triangle(85, 65, 85, 75, 95, 75);
    triangle(85, 25, 85, 35, 95, 35);
    triangle(175, 55, 175, 45, 165, 55);
    triangle(175, 55 + 40, 175, 45 + 40, 165, 55 + 40);
    triangle(165, 65, 165, 75, 175, 65);
    triangle(165, 25, 165, 35, 175, 25);
    fill(255);
    triangle(105, 25, 115, 25, 105, 35);
    triangle(85, 45, 85, 55, 95, 55);
    triangle(85, 85, 85, 95, 95, 95);
    triangle(105, 65, 115, 65, 105, 75);
    posXIni = 15 + 80;
    posYIni = 15;
    posX = 25 + 80;
    posY = 25;
    posXX = 35 + 80;
    posYY = 15;
    x4 = 45 + 80;
    y4 = 25;

    {
      fill(0);
      noStroke();
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }

      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }

      posXIni = 15;
      posX = 25;
      posYIni = 55 + 70;
      posY = 65 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }


      posXX = 35;
      x4 = 45;
      posYY = 55 + 70;
      y4 = 65 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }

        posXIni = 15;
      posX = 25;
      posYIni = 55 + 110;
      posY = 65 + 110;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }


      posXX = 35;
      x4 = 45;
      posYY = 55 + 110;
      y4 = 65 + 110;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }
      
      posXIni = 35;
      posX = 45;
      posYIni = 35 + 70;
      posY = 45 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }


      posXX = 15;
      x4 = 25;
      posYY = 35 + 70;
      y4 = 45 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }

      posXIni = 35;
      posX = 45;
      posYIni = 75 + 70;
      posY = 85 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni + 10, posYIni, posXIni, posY, posX, posY);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }


      posXX = 15;
      x4 = 25;
      posYY = 75 + 70;
      y4 = 85 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY, x4, posYY, x4 - 10, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }
      
      posXIni = 25;
      posX = 35;
      posYIni = 45 + 70;
      posY = 55 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }


      posXX = 05;
      x4 = 15;
      posYY = 45 + 70;
      y4 = 55 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY + 10, x4, posYY, x4, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }

      posXIni = 25;
      posX = 35;
      posYIni = 85 + 70;
      posY = 95 + 70;
      
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 20;
        posX = posX + 20;
      }


      posXX = 05;
      x4 = 15;
      posYY = 85 + 70;
      y4 = 95 + 70;
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posXX, posYY + 10, x4, posYY, x4, y4);
          posXX = posXX + 10;
          x4 = x4 + 10;
        }
        posXX = posXX + 20;
        x4 = x4 + 20;
      }
      
      
      posXIni = 15;
      posYIni = 25 + 70;
      posX = 25;
      posY = 35 + 70;

      
      for (u = 0; u < 2; u++) {
        for (p = 0; p < 2; p++) {
          triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 10;
        posX = posX + 10;
      }

      posYIni = 25 + 70;
      posX = 25;
      posXX = 35;
      posYY = 35 + 70;
      
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posX, posYIni + 10, posXX, posYIni, posXX, posYY);
          posX = posX + 10;
          posXX = posXX + 10;
        }
        posX = posX + 20;
        posXX = posXX + 20;
      } {
        fill(255);
        triangle(25, 25, 25, 35, 35, 35)
      }
      fill(0);
      posXIni = 15;
      posYIni = 65 + 70;
      posX = 25;
      posY = 75 + 70;

      
      for (u = 0; u < 2; u++) {
        for (p = 0; p < 2; p++) {
          triangle(posXIni, posYIni, posXIni, posY, posX, posY - 10);
          posXIni = posXIni + 10;
          posX = posX + 10;
        }
        posXIni = posXIni + 10;
        posX = posX + 10;
      }

      posYIni = 65 + 70;
      posX = 25;
      posXX = 35;
      posYY = 75 + 70;
      
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(posX, posYIni + 10, posXX, posYIni, posXX, posYY);
          posX = posX + 10;
          posXX = posXX + 10;
        }
        posX = posX + 20;
        posXX = posXX + 20;
      } {
        fill(255);
        triangle(25, 65, 25, 75, 35, 75);
        quad(0, 15, 15, 15, 15, 400, 0, 400);
        triangle(25,95,25,105,35,95);
        triangle(25,135,25,145,35,135);
        fill(0);
        triangle(85,105,85,95,95,95);
        triangle(85,145,85,135,95,135);
        triangle(95,115,95,125,85,125);
        triangle(95,155,95,165,85,165);
      }
    }
  }
  
}
function draw() {
  
}
