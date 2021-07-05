function draw() {
  // work out how to display the current time
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  var time = h + ":" + ("0"+m).substr(-2);

  // Reset the state of the graphics library
  g.reset();
  // Clear the area where we want to draw the time
  g.clearRect(50,50,240,240);
  // draw the current time
  g.drawString(time, 50, 50);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
var secondInterval = setInterval(draw, 1000);
