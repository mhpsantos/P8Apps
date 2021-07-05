function draw() {
  // Reset the state of the graphics library
  g.reset();
  // Clear the area where we want to draw the time
  g.clearRect(-100,100,100,-100);
  // draw the current time
  g.setFontAlign(0,0);
  g.drawString("12345678890");
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
