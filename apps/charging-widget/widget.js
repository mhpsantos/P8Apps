(function(){WIDGETS.mywidget={area:"tl",width:28,draw:function(){P8.isPower()&&(g.clear(),g.reset(),E.getBattery=function(){var a=P8.batV();return Math.floor(200*((3.7>a?3.7:a)-3.7))},g.setFont("Vector",50),g.drawString(E.getBattery,94,94))}}})();
