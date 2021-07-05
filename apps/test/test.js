var variable = "clear";


function draw() {

  
  g.clear();
  g.fillRect(0, 0, 239, 20); 
  g.setFont("Vector", 50);
  g.setFontAlign(0,0);
  g.drawString(variable);
  g.flip();
}

g.clear();

setTimeout(()=>{draw();},500);
