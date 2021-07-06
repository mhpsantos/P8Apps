var numerals = {
  0:[[9,1,82,1,90,9,90,92,82,100,9,100,1,92,1,9, 9,1],[30,25,61,25,69,33,69,67,61,75,30,75,22,67,22,33, 30,25]],
  1:[[50,1,82,1,90,9,90,92,82,100,73,100,65,92,65,27,50,27,42,19,42,9, 50,1]],
  2:[[9,1,82,1,90,9,90,53,82,61,21,61,21,74,82,74,90,82,90,92,82,100,9,100,1,92,1,48,9,40,70,40,70,27,9,27,1,19,1,9, 9,1]],
  3:[[9,1,82,1,90,9,90,92,82,100,9,100,1,92,1,82,9,74,70,74,70,61,9,61,1,53,1,48,9,40,70,40,70,27,9,27,1,19,1,9, 9,1]],
  4:[[9,1,14,1,22,9,22,36,69,36,69,9,77,1,82,1,90,9,90,92,82,100,78,100,70,92,70,61,9,61,1,53,1,9, 9,1]],
  5:[[9,1,82,1,90,9,90,19,82,27,21,27,21,40,82,40,90,48,90,92,82,100,9,100,1,92,1,82,9,74,71,74,71,61,9,61,1,53,1,9, 9,1]],
  6:[[9,1,82,1,90,9,90,19,82,27,22,27,22,40,82,40,90,48,90,92,82,100,9,100,1,92,1,9, 9,1],[22,60,69,60,69,74,22,74, 22,60]],
  7:[[9,1,82,1,90,9,90,15,20,98,9,98,1,90,1,86,56,22,9,22,1,14,1,9, 9,1]],
  8:[[9,1,82,1,90,9,90,92,82,100,9,100,1,92,1,9,9,1],[22,27,69,27,69,43,22,43, 22,27],[22,58,69,58,69,74,22,74,22,58]],
  9:[[9,1,82,1,90,9,90,92,82,100,9,100,1,92,1,82,9,74,69,74,69,61,9,61,1,53,1,9, 9,1],[22,27,69,27,69,41,22,41, 22,27]],
};


function transformN(n,i,tx,ty){
  return g.transformVertices(numerals[n][i],{x:tx,y:ty,scale:1.1});
}


function drawH1(n){
  layer1 = transformN(n, 0, 30, 5);
  layer2 = transformN(n, 1, 30, 5);
  layer3 = transformN(n, 2, 30, 5);
  g.setColor(0xff5555)
  g.fillPoly(layer1);
  g.setColor(0,0,0);
  g.fillPoly(layer2);
  g.fillPoly(layer3);
}
function drawH2(n){
  layer1 = transformN(n, 0, 140, 5);
  layer2 = transformN(n, 1, 140, 5);
  layer3 = transformN(n, 2, 140, 5);
  g.setColor(0xff5555)
  g.fillPoly(layer1);
  g.setColor(0,0,0);
  g.fillPoly(layer2);
  g.fillPoly(layer3);
}
function drawM1(n){
  layer1 = transformN(n, 0, 30, 125);
  layer2 = transformN(n, 1, 30, 125);
  layer3 = transformN(n, 2, 30, 125);
  g.setColor(0xffffff)
  g.fillPoly(layer1);
  g.setColor(0,0,0);
  g.fillPoly(layer2);
  g.fillPoly(layer3);
}
function drawM2(n){
  layer1 = transformN(n, 0, 140, 125);
  layer2 = transformN(n, 1, 140, 125);
  layer3 = transformN(n, 2, 140, 125);
  g.setColor(0xffffff)
  g.fillPoly(layer1);
  g.setColor(0,0,0);
  g.fillPoly(layer2);
  g.fillPoly(layer3);
}

function drawTime(){
  
  g.clear();
  
  var hour = ("0"+(new Date()).getHours());
  var min = new Date().getMinutes();
  
  if(hour<10) {
    hour = ("0"+(new Date()).getHours()).substr(-2);
  }else{
    hour = ("0"+(new Date()).getHours()).substr(1,2);
  }
  
  
  if(min<10) {
    min = ("0"+(new Date()).getMinutes()).substr(-2);
  }else{
    min = ("0"+(new Date()).getMinutes()).substr(1,2);
  }
  
  drawH1(hour[0]);
  drawH2(hour[1]);
  drawM1(min[0]);
  drawM2(min[1]);
   
  g.setFont("Vector");
  g.drawString("TESTE");
}

function stopDraw() {
  if(intervalRefSec) {
    secondInterval=clearInterval(secondInterval);
  }
  g.clear();
}

function startDraw(){
  g.reset();
  secondInterval = setInterval(drawTime,1000);
}

g.clear();
// draw immediately at first
drawTime();

P8.on('sleep',function(b) {
  if (!b) {
      startDraw();
  } else {
      stopDraw();
  }
});
