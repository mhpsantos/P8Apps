(function(){
  var chargingBat = require("heatshrink").decompress(atob("iEQ4MA/4ACBw3Avu4weE2+E1/n1/H0eUwcEu14ggYGA="));
  var fullBat = require("heatshrink").decompress(atob("iEQ4MA/4ACB49//GAgm/+m/+4BC+gJBBoIXH"));
  var halfBat = require("heatshrink").decompress(atob("iEQ4MA/4ACB49//GAgm+AIMHAIUEBIINBC44"));
  var emptyBat = require("heatshrink").decompress(atob("iEQ4MA/4ACB49//GAggBCg4BCA4QNBC44A=="));
  
  E.getBattery = function (){
    var v = P8.batV();
    v = v<3.7?3.7:v;
    return Math.floor((v-3.7)*200);
  }
  
  function draw() {
    g.reset(); // reset the graphics context to defaults (color/font/etc)
      // add your code
    var batLevel = E.getBattery(); 
    
     g.drawString(batLevel, 50, 50);
  }

  // add your widget
  WIDGETS["batwidget"]={
    area:"tr", // tl (top left), tr (top right), bl (bottom left), br (bottom right)
    width: 28, // how wide is the widget? You can change this and call Bangle.drawWidgets() to re-layout
    draw:draw // called to draw the widget
  };
})()
