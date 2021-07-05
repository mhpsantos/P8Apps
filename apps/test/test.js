function draw() {
  // Reset the state of the graphics library
  g.reset();
  // Clear the area where we want to draw the time
   g.clearRect(50,50,100,120);
  // draw the current time
  g.drawString("12345678890", 50, 50, true);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
