var i = 0;

var verts = [-5,-5, 5,-5, 5,5, -5,5];

function draw(){
  g.clear();
  var verts2 = g.transformVertices(verts, {x:g.getWidth()/2, y:g.getHeight()/2,scale:8, rotate:i});

  g.fillPoly(verts2);
  
  i+=0.5;
  
}

var interval = setInterval(draw, 50);
