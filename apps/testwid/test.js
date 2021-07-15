(function(){
 g.clear().flip();
 var imgbat = require("heatshrink").decompress(atob("nlWhH+AH4A/AH4AHwoAQHXQ8pHf47rF6YAXHXQ8OHVo8NHf47/Hf47/Hf47/Hf47/Hf47/Hf47r1I766Y756Z351I766ayTHco6BHfCxBHfI6CdyY7jHQQ73WIayUHcQ6DHew6EHeqxEdyo7gOwo70HQqyVHbyxFHeo6GHeY6Hdyo7cWI47zHQ6yWHbY6IHeKxIABa9MHbI6TQJo7YHUI7YWMKzbQKQYOHdYYPHcK9IWJw7sDKA7hHTA7pWKA7qDKQ7gdwwaTHcyxSHcR2ZHcwZUHcqxUHcLuEHSo7kHSw7gWLI7kHS47iHTA7fdwKxYHcQ6ZHb46bO8A76ADg7/Hf47/Hf47/Hf47/Hf47/Hf47/HbY8uHRg8tHRwA/AH4AsA=="));

  var W=240,H=240;

 function anim() {
   /* we don't use any kind of buffering here. Just draw one image
   at a time (image contains a background) too, and there is minimal
   flicker. */  
   var mx = 120, my = 120
   g.drawImage(imgbat, mx,my,{rotate:Math.sin(getTime()*2)*0.5-Math.PI/2});
   g.flip();
 }

  if(P8.isPower()){
    setTimeout(anim, 100);
    g.clear();
    load();
    setInterval(anim, 20);
  }
 })()
