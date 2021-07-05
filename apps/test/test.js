function draw() {
  // work out how to display the current time
  
  var time = "teste display";

  // Reset the state of the graphics library
  g.reset();
  // draw the current time
  g.setFont("Vector",50);
  g.drawString(time, 50, 50, true);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
