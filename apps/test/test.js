var variable = "teste";
Bangle.buzz(100, 1);

function drawtext() {

  Bangle.buzz(200, 1);
  g.clear();
  // draw the current counter value
  g.drawString(variable, g.getWidth()/2, g.getHeight()/2);
  // optional - this keeps the watch LCD lit up
  g.flip();
}
drawtext();
