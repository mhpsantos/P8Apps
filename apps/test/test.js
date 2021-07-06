var buf = Graphics.createArrayBuffer(240,240,1,{msb:true});
var img = require("heatshrink").decompress(atob("sFg4MA/4ACI/4AYgwLKh4LKj4LKn4LKv4LKSpUBBZUDBZUHBZUP//4LxLSB4BeIBYPwLxALB/wLKHpALDGA4vC//gI5JVIL4JtB/h3JJBCPCEwKnJEwOAX5AaBBY7XBDQJgIDQRgIDQQLHgwaCVJAaCPAkPPYoLEj5NEBYs/JokHSAgLFgYLEv4LFTggLMHYkBBaChFBYy3HBf4LuR4wLLWaLXWfZc/8ALJj/wHYn4BZMAAokfCIgAFh4pCsALGg5NCEwoLCRIQmHgf/QgJQEUIhsBOggLEFoLDGYoQtBEwQAFv4VBEwQAFn//8ABBBY0f/4ABMBIABMBIABMA45BAAJgHJAQLJh4jKGATDJKoJTHHoZrHBYaDHBYabHBYYKJZZAADLxAACLxIABLxUAsALKAH4ANA=="));

var i=0;

var verts = [-5,-5, 5,-5, 5,5, -5,5];

function flip() {
  g.drawImage({width:240,height:240,bpp:1,buffer:buf.buffer},0,0);
}

var interval = setInterval(function(){ 
  
    buf.clear();
    
    buf.drawImage(img, g.getWidth()/2, g.getHeight()/2,
            {scale:2, rotate:i});
    flip();

  
  i-=0.5;
}, 100);
