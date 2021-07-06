var buf = Graphics.createArrayBuffer(240,240,1,{msb:true});
var i=0;

var verts = [-5,-5, 5,-5, 5,5, -5,5];

function flip() {
  g.drawImage({width:240,height:240,bpp:1,buffer:buf.buffer},0,0);
}

var interval = setInterval(function(){ 
  
    buf.clear();
    var verts2 = g.transformVertices(verts,{x:g.getWidth()/2,y:g.getHeight()/2,scale:4, rotate:i});
    buf.fillPoly(verts2, true);
    flip();

  
  i+=0.5;
}, 300);
