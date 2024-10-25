function setup() {
    createCanvas(480, 480);
    background(200);
  
  
    // Draw the hair (long and brown)
    noStroke();
    fill(139, 69, 19); // Brown color for hair
  
    // Right side of the hair
    ellipse(285, 180, 335, 340); 
  
    // Left side of the hair
    ellipse(195.5, 170, 316, 340); 
  
    // Hair over shoulders
    rect(40, 195, 280, 285); // Left side
    rect(170, 205, 280, 285); // Right side
    
    fill(246,207,175);
    noStroke ();
    quad (180,420, 305,420,320,480,160,480);
    
    noStroke ();
    ellipse (95,270,50,90)
    ellipse (393,270,50,90)
    
    
     // Draw the face (base circle)
    fill(255, 224, 189); // Light skin color
    noStroke();
    ellipse(245,245,320,420); // Center face
    
   
    fill(255,255,255);
    ellipse (167,235,80,40);
    fill(0,0,0);
    ellipse(170, 235, 38, 38);
    
    noStroke();
    fill(139, 69, 19); // Brown color for hair
    
    
  
    
    // Top part of the hair (to cover face edges)
    translate(220, 85);
    rotate(PI / 4);
    ellipse (-10,85,110,300);
    //top right
    translate(1,28);
    rotate(PI / -2);
    ellipse (85,115,75,250)
    
    
  
  }
  
  function draw() {
     strokeWeight (2);
    fill(255,255,255);
    noStroke ();
    fill(139, 69, 19);
    quad (210,167, 205,157,130,165,115,170);
    quad (280,167, 283,157,370,165,365,170);
  
    
    
    strokeWeight (2);
    fill(255,255,255);
    noStroke ();
    
    ellipse (320,235,80,40);
    fill (0,0,0);
    noStroke ();
    
    ellipse (320, 235, 38,38);
    
    fill(246,207,175);
    noStroke ();
    ellipse (266,306, 28,28);
    ellipse (220,306, 28,28);
    quad (230,230, 255,230,265,320,220,320);
    
    fill(211,130,123);
    noStroke ();
    ellipse (244,370,120,35)
    stroke(125,60,63);
    
    noFill();
    stroke(125,60,63);
    arc(244, 367, 115, 15.5, 0, PI,TWO_PI);
    
  }
  
  
  