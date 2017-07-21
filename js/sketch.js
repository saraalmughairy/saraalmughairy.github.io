// var yoff = 0.0;        // 2nd dimension of perlin noise

// function setup() {
//   canvas = createCanvas(windowWidth, 500);
//   canvas.parent("p5");
// }

// function draw() {
//   background(255);
//   noStroke();

//   fill(230,91,108);
//   // We are going to draw a polygon out of the wave points
//   beginShape(); 
  
//   var xoff = 0;       // Option #1: 2D Noise
//   // var xoff = yoff; // Option #2: 1D Noise
  
//   // Iterate over horizontal pixels
//   for (var x = 0; x <= width; x += 10) {
//     // Calculate a y value according to noise, map to 
    
//     // Option #1: 2D Noise
//     var y = map(noise(xoff, yoff), 0, 1, 200,300);

//     // Option #2: 1D Noise
//     // var y = map(noise(xoff), 0, 1, 200,300);
    
//     // Set the vertex
//     vertex(x, y); 
//     // Increment x dimension for noise
//     xoff += 0.03;
//   }
//   // increment y dimension for noise
//   yoff += 0.01;
//   vertex(width, height);
//   vertex(0, height);
//   endShape(CLOSE);
// }








// var xspacing = 16;    // Distance between each horizontal location
// var w;                // Width of entire wave
// var theta = 0.0;      // Start angle at 0
// var amplitude = 75.0; // Height of wave
// var period = 500.0;   // How many pixels before the wave repeats
// var dx;               // Value for incrementing x
// var yvalues;  // Using an array to store height values for the wave

// function setup() {
//   var canvas = createCanvas(windowWidth, 400);
//     canvas.parent('p5');

//   w = width+16;
//   dx = (TWO_PI / period) * xspacing;
//   yvalues = new Array(floor(w/xspacing));
// }

// function draw() {
//   background(255);
//   calcWave();
//   renderWave();
// }

// function calcWave() {
//   // Increment theta (try different values for 
//   // 'angular velocity' here)
//   theta += 0.02;

//   // For every x value, calculate a y value with sine function
//   var x = theta;
//   for (var i = 0; i < yvalues.length; i++) {
//     yvalues[i] = sin(x)*amplitude;
//     x+=dx;
//   }
// }

// function renderWave() {
//   noStroke();
// fill(230,91,108); //pink
//   //fill(65,74,107); //blue
//   // A simple way to draw the wave with an ellipse at each location
//   for (var x = 0; x < yvalues.length; x++) {
//     ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
//   }
// }


var tx,ty,start;
var center, position, velocity; 

function setup() {


canvas = createCanvas(windowWidth, 500);
canvas.parent("p5");

  

  background(255,255,255);
  tx = 0;
  ty = 10000;
  start = millis();
}

function draw() {
  
  var currentT = (millis() - start)/1000; 
  
  center = createVector(width/2,height/2);
  position = createVector(width/2,height/2);
  velocity = createVector(10,10);
  
  velocity.x = map(noise(tx),0,1,-500,500);
  velocity.y = map(noise(ty),0,1,-300,300);
  
  tx += 0.01;
  ty += 0.01;
  
  position.add(velocity);
  push();
  translate(width/2,height/2);
  
  position.sub(center);
  
  if(currentT <30){
   stroke(255,20,20,30);
  }else if(currentT <60){
   position.setMag(100);
   stroke(0,20);
  //}else if(currentT <60){
   //location.mult(0.5);
   //stroke(255,20,20,30); 
  }else {
   position.setMag(50);
   stroke(255,20,20,30);
  }
  
  //stroke(0,40);
  line(0,0,position.x, position.y);
  
  pop();
  
}
