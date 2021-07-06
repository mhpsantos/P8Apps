var img = require("heatshrink").decompress(atob("mEwwIYVwAFE4AFE8AFE+AFE/AEDh/8Aod//wFD///AgUD/4LDg/4C4cP4AjDj+AF4c/HYk+I4MEAoN8KYMMAoN4AQMeAo4nCj5XEh4FiFIQ7LAoRWBXwMBKwR+CSwkHgIFDh8DPAcfj54Dn//YAd//7MDUIgLBYoiWBAAZRCF4YFEg4FEI4IADKYIANA"));

var counter = 0;

function draw() {
  counter++;

  g.clear();
  // draw the current counter value
  g.drawImage(img, g.getWidth()/2, g.getHeight()/2,
            {scale:2, rotate:counter});

}

var interval = setInterval(draw, 300);
