
function print() {
  var testVar = "teste";
  g.clear();
  // draw the current counter value
  g.drawString(testVar, g.getWidth()/2, g.getHeight()/2);
  // optional - this keeps the watch LCD lit up
  g.flip();
}

print();
