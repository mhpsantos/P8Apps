(function(){
 var imgbat = require("heatshrink").decompress(atob("nlWhH+AH4A/AH4AHwoAQHXQ8pHf47rF6YAXHXQ8OHVo8NHf47/Hf47/Hf47/Hf47/Hf47/Hf47r1I766Y756Z351I766ayTHco6BHfCxBHfI6CdyY7jHQQ73WIayUHcQ6DHew6EHeqxEdyo7gOwo70HQqyVHbyxFHeo6GHeY6Hdyo7cWI47zHQ6yWHbY6IHeKxIABa9MHbI6TQJo7YHUI7YWMKzbQKQYOHdYYPHcK9IWJw7sDKA7hHTA7pWKA7qDKQ7gdwwaTHcyxSHcR2ZHcwZUHcqxUHcLuEHSo7kHSw7gWLI7kHS47iHTA7fdwKxYHcQ6ZHb46bO8A76ADg7/Hf47/Hf47/Hf47/Hf47/Hf47/HbY8uHRg8tHRwA/AH4AsA=="));
  
  E.getBattery = function() {
        var a = P8.batV();
        return Math.floor(200 * ((3.7 > a ? 3.7 : a) - 3.7));
  };
  
 function anim() {
  var mx = 120, my = 120, a = 50;
   g.clear();
   /* we don't use any kind of buffering here. Just draw one image
   at a time (image contains a background) too, and there is minimal
   flicker. */  
   g.setFont("Vector",50).setRotation(3).drawString(a,100, 200);
   g.setRotation(0);
   g.drawImage(imgbat, mx,my,{rotate:Math.sin(getTime()*2)*0.5-Math.PI/2});
 }


  if(P8.isPower()){
    P8.wake();
    g.clear();
    setTimeout(anim, 100);
    setInterval(anim, 20);
  }
 })()
