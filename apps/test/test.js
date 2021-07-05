require("Font7x11Numeric7Seg").add(Graphics);

function draw() {
  // Reset the state of the graphics library
  g.reset();
  // draw the current time (4x size 7 segment)
  g.setFont("7x11Numeric7Seg",4);
  g.setFontAlign(0,0); // align center
  g.drawString("1234567890", 0, 0, true /*clear background*/);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
