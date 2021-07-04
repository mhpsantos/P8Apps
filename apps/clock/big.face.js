(() => {

    function getFace(){

    function drawTime(d) {
        g.reset();
        var da = d.toString().split(" ");
        var time = da[4].substr(0, 5).split(":");
        var hours = time[0],
          minutes = time[1];
        var widths = atob("BQkNBwoLDAsMCgsMBQ==");
        var font = atob("AAAAAAwAAMAADAAAAAAAAABwAD8AH+AH8AP8AP4ADwAAgAAAAAAf4Af/gP/8DgPAwAwMAMDgHA+HwH/4A/8AD+AAAABwAA4AAP/8D//A//wAAAAAAAAAwOAcDgfAwPwMH8DD7A78wP+MB+DAPAwEAIDgHA5hwMYMDGDAzwwO8cD//Af/gDHwAAAAAAAADgAD4AB+AB9gB8YA8GAP/8D//A//wABgAAYAAAgP8cD/HA/wwMYMDGDAxxwMf8DD+AwfAAAAAB8AB/gA/8AfHAPgwP4MD2DA5xwIf8AD+AAfAAAADAAAwAAMAcDA/Aw/wN/wD/gA/gAPAAAAAAAGAH34D//A/5wOcMDDDAwwwOecD//AffgDjwA+AAfwAP+EDjjA4bwMH8DB+A4+AP/AB/gAPgAAAAAAAAGAwBgMAYDAAAA=");
        var scale = 1; // size multiplier for this font
        g.setFontCustom(font, 46, widths, 20+(scale<<8)+(1<<16));
        g.clearRect(0,24,239,239);
        g.setColor(1,1,1);
        //g.setFont("Vector",132);
        g.drawString(hours,50,24,true);
        g.drawString(minutes,50,132,true);
      }

    function onSecond(){
       var t = new Date();
       if (t.getSeconds() === 0) drawTime(t);
    }

    function drawAll(){
       drawTime(new Date());
    }

    return {init:drawAll, tick:onSecond};
    }

  return getFace;

})();
