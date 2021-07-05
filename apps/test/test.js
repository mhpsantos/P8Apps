var variable = "interval";


function drawtext() {

  
  g.clear();
  // draw the current counter value
  g.drawString(variable, g.getWidth()/2, g.getHeight()/2);
  // optional - this keeps the watch LCD lit up
  g.flip();
}

var interval = setInterval(drawtext, 1000);
