
function KickWd(){
    if(!D17.read())E.kickWatchdog();
}
var wdint=setInterval(KickWd,5000); // 5 secs
E.enableWatchdog(20, false); // 20 secs
E.kickWatchdog();

const STOR = require("Storage");
const P8 = {
    ON_TIME: 10,
    BRIGHT : 3,
    FACEUP:true,
    VIBRATE:true,
    awake : true,
    charging: false,
    time_left:10,
    ticker:undefined,
    pressedtime:0,
    buzz: (v)=>{
        if (!P8.VIBRATE) return;
        v = v? v : 100;
        if (v<=50){
            digitalPulse(D16,true,v);
        } else {
            D16.set();
            setTimeout(()=>{D16.reset();},v);
        }
    },
    batV: () => {
        pinMode(D31,"analog",true);
        var v = 7.1 * analogRead(D31);
        pinMode(D31,"input",true); //power saving?
        return v;
    },
    isPower:()=>{return D19.read();},
    setLCDTimeout:(v)=>{P8.ON_TIME=v<5?5:v;},
    setLCDBrightness:(v)=>{P8.BRIGHT=v; brightness(v);},
    init:()=>{
            var s = STOR.readJSON("settings.json",1)||{ontime:10, bright:3, timezone:1,faceup:true,vibrate:true};
            P8.ON_TIME=s.ontime;
            P8.time_left=s.ontime;
            P8.BRIGHT=s.bright;
            P8.FACEUP=s.faceup;
            P8.VIBRATE=(typeof s.vibrate!='undefined')?s.vibrate:true;
            E.setTimeZone(s.timezone);
    },
    sleep:() => {
        P8.awake = false;
        brightness(0);
        TC.stop();
        clearWatch();
        P8.emit("sleep",true);
        g.lcd_sleep();
    },
    wake:()=> {
        P8.awake = true;
        P8.time_left = P8.ON_TIME;
        TC.start();
        g.lcd_wake();
        P8.emit("sleep",false);
        brightness(P8.BRIGHT);
        setWatch(()=>{load("launch.js")},BTN1,{edge:"rising",repeat:true});
    },
    tick:()=>{
        if (P8.awake) {
            P8.time_left--;
            var p = D19.read();
            if (p!=P8.charging) {P8.charging = p;  P8.emit("power",P8.charging);}
            if (P8.time_left<=0){
               if (global.ACCEL && ACCEL.faceup) {P8.time_left = P8.ON_TIME; return;}
               P8.emit("sleep",true);
               P8.sleep();
            }
        } else {
            if (BTN1.read()) P8.wake();
        }
    }
};

P8.init();
eval(STOR.read("lcd.js"));
var g = ST7789();
brightness(P8.BRIGHT);
eval(STOR.read("touch.js"));
TC.start();
TC.on('touch',(p)=>{P8.time_left=P8.ON_TIME;});
TC.on('swipe',(d)=>{P8.time_left=P8.ON_TIME;});
TC.on("longtouch", (p)=> {P8.time_left=P8.ON_TIME;if (D17.read()) reset(); else load("launch.js");});
setWatch(()=>{load("launch.js")},BTN1,{edge:"rising",repeat:true});
if (P8.FACEUP && STOR.read("accel.js")){ 
    eval(STOR.read("accel.js"));
    ACCEL.init();
    setInterval(ACCEL.check,200);
    ACCEL.on("faceup",()=>{if (!P8.awake) P8.wake();});
}
P8.ticker = setInterval(P8.tick,1000);
