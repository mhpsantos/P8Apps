/* 
Copyright (c) 2015 Gordon Williams, Pur3 Ltd. See the file LICENSE for copying permission.

Updated for use in Twatch by Jeff Magee
 */
function loadAnim(){var a=Graphics.createArrayBuffer(240,240,1,{msb:!0}),c=require("heatshrink").decompress(atob("sFg4MA/4ACI/4AYgwLKh4LKj4LKn4LKv4LKSpUBBZUDBZUHBZUP//4LxLSB4BeIBYPwLxALB/wLKHpALDGA4vC//gI5JVIL4JtB/h3JJBCPCEwKnJEwOAX5AaBBY7XBDQJgIDQRgIDQQLHgwaCVJAaCPAkPPYoLEj5NEBYs/JokHSAgLFgYLEv4LFTggLMHYkBBaChFBYy3HBf4LuR4wLLWaLXWfZc/8ALJj/wHYn4BZMAAokfCIgAFh4pCsALGg5NCEwoLCRIQmHgf/QgJQEUIhsBOggLEFoLDGYoQtBEwQAFv4VBEwQAFn//8ABBBY0f/4ABMBIABMBIABMA45BAAJgHJAQLJh4jKGATDJKoJTHHoZrHBYaDHBYabHBYYKJZZAADLxAACLxIABLxUAsALKAH4ANA==")),
b=0;setInterval(function(){a.clear();a.drawImage(c,g.getWidth()/2,g.getHeight()/2,{scale:1,rotate:b});g.drawImage({width:240,height:240,bpp:1,buffer:a.buffer},0,0);b-=.5},100)};

function ST7789() {
    var LCD_WIDTH = 240;
    var LCD_HEIGHT = 240;
    var XOFF = 0;
    var YOFF = 0;
    var INVERSE = 1;
    var cmd = lcd_spi_unbuf.command;

    function dispinit(rst,fn) {
        if (rst) {
            digitalPulse(rst,0,10);
        } else {
            cmd(0x01); //ST7735_SWRESET: Software reset, 0 args, w/delay: 150 ms delay
        }
        setTimeout(function() {
        cmd(0x11); //SLPOUT
        setTimeout(function() {
            //MADCTL: Set Memory access control (directions), 1 arg: row addr/col addr, bottom to top refresh
            cmd(0x36, 0xC8);
            //COLMOD: Set color mode, 1 arg, no delay: 16-bit color
            cmd(0x3a, 0x05);
            //PORCTRL: Porch control
            cmd(0xb2, [0x0c, 0x0c, 0x00, 0x33, 0x33]);
            //GCTRL: Gate control
            cmd(0xb7, 0x00);
            // VCOMS: VCOMS setting
            cmd(0xbb, 0x3e);
            //LCMCTRL: CM control
            cmd(0xc0, 0xc0);
            //VDVVRHEN: VDV and VRH command enable
            cmd(0xc2, 0x01);
            // VRHS: VRH Set
            cmd(0xc3, 0x19);
            // VDVS: VDV Set
            cmd(0xc4, 0x20);
            //VCMOFSET: VCOM Offset Set .
            cmd(0xC5, 0xF);
            //PWCTRL1: Power Control 1
            cmd(0xD0, [0xA4, 0xA1]);
            // PVGAMCTRL: Positive Voltage Gamma Control
            cmd(0xe0, [0x70, 0x15, 0x20, 0x15, 0x10, 0x09, 0x48, 0x33, 0x53, 0x0B, 0x19, 0x15, 0x2a, 0x2f]);
            // NVGAMCTRL: Negative Voltage Gamma Contro
            cmd(0xe1, [0x70, 0x15, 0x20, 0x15, 0x10, 0x09, 0x48, 0x33, 0x53, 0x0B, 0x19, 0x15, 0x2a, 0x2f]);
            if (INVERSE) {
                //TFT_INVONN: Invert display, no args, no delay
                cmd(0x21);
            } else {
                //TFT_INVOFF: Don't invert display, no args, no delay
                cmd(0x20);
            }
            //TFT_NORON: Set Normal display on, no args, w/delay: 10 ms delay
            cmd(0x13);
            //TFT_DISPON: Set Main screen turn on, no args w/delay: 100 ms delay
            cmd(0x29);
            if (fn) fn();
          }, 50);
          }, 120);
    }

    function connect(options , callback) {
        var spi=options.spi, dc=options.dc, ce=options.cs, rst=options.rst;
        var g = lcd_spi_unbuf.connect(options.spi, {
            dc: options.dc,
            cs: options.cs,
            height: LCD_HEIGHT,
            width: LCD_WIDTH,
            colstart: XOFF,
            rowstart: YOFF
        });
        g.lcd_sleep = function(){cmd(0x10);cmd(0x28);};
        g.lcd_wake = function(){cmd(0x29);cmd(0x11);};
	g.setFontAlign(0,0);
        dispinit(rst, ()=>{
		g.clear().setFont("Vector",24),
		loadAnim();
	});
        return g;
    }

    //var spi = new SPI();
    SPI1.setup({sck:D2, mosi:D3, baud: 8000000});

    return connect({spi:SPI1, dc:D18, cs:D25, rst:D26});
}

//screen brightness function
function brightness(v) {
    v=v>7?1:v;	
	digitalWrite([D23,D22,D14],7-v);
}

E.showMessage = function(msg,title) {
    if (!P8.awake) P8.wake();
    g.clear(1); // clear screen
    g.reset().setFont("Vector",24).setFontAlign(0,0);
    var W = g.getWidth();
    var H = g.getHeight();
    if (title) {
      g.drawString(title,W/2,24);
      var w = (g.stringWidth(title)+16)/2;
      g.fillRect((W/2)-w,34,(W/2)+w,34);
    }
    var lines = msg.split("\n");
    var offset = (H - lines.length*24)/2;
    lines.forEach((line,y)=>g.drawString(line,W/2,offset + y*24));
    g.flip();
  };
  
