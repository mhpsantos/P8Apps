(() => {
  var chargingBat = require("heatshrink").decompress(atob("sFg4MA/4ACI/4A/ACsPBZUfBa0/BZV+Ba3+BasBBa0DBZUH/gLVh4LWj4LWn4LKv/4Bav/BasBBa0DBZnwUxILKh4LMAAINHj4LWn4LC8ALSv4LC4CaHAAWABaKaBAASmIBZKaBAAP+BaSmBAAP8TRTMHBZ7MXTQ4LPUw7YDUw4LPBRALNTQ4LPUw4ACn6aHBZ6aJBZqaJBZqmJgF/TRILNBRILMvwLWvgLKTRQLMTRQA/AH4ALA"));
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
     if(batLevel >= 75){
     g.drawImage(fullBat,210,0,{scale:2}); 
    }else if(batLevel >= 10){
      g.drawImage(halfBat,210,0,{scale:2});
    }else{
      g.drawImage(emptyBat,210,0,{scale:2});
    }
    if(P8.isPower()){
      g.drawImage(chargingBat, 180, 0,{scale:0.28});
    }
  }

  // add your widget
  WIDGETS["batwidget"]={
    area:"tr", // tl (top left), tr (top right), bl (bottom left), br (bottom right)
    width: 28, // how wide is the widget? You can change this and call Bangle.drawWidgets() to re-layout
    draw:draw // called to draw the widget
  };
})()
