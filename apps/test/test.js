var i = 0;

var verts = [-5,-5, 5,-5, 5,5, -5,5];

function draw(){
  g.clear();
  if(i%2==0){
    scale = 0.5;
  }else{
    scale=0.75;
  }
  var verts2 = g.transformVertices(verts, {x:g.getWidth()/2, y:g.getHeight()/2,scale:3+scale, rotate:0});

  g.fillPoly(verts2);
  
  i++;
  
}

var interval = setInterval(draw, 500);
