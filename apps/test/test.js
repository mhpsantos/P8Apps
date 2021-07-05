var variable = "clear";


function drawtext() {

  
  g.clear();
  // draw the current counter value
  g.setFont("Vector", 50);
  g.setFontAlign(0,0);
  g.drawString(variable, 0, 0);
  // optional - this keeps the watch LCD lit up
  g.flip();
}

g.clear();

drawtext();

var interval = setInterval(drawtext, 1000);
