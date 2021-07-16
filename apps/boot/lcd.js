var img = require("heatshrink").decompress(atob("sFg4MA/4ACI/8AgILKgYLKg4LKh4LKj4LKn4LKv4LKSpUBBZUDBZUHBZUP//4LxLSB4BeIBYPwLxALB/wLKHpAjCGBA7C//gKZAABKo5rBAIP8QZJIITYQyBWZIyBwDLIEwILHcYImBMBAmCMBAmCBYkMMAQmCVIkOMAQmCPAgsCgImCBYpNEBYs/JokHSAgLFgYLEv4LFTggLMHYkBBbjFGAwgL/Bdabja677Ln/gBZMf+A7E/ALHJQQLFAoQyCuALDh4pCGQUwBYcHJoQyEBYaVCFghND/45BKAhND/45BOggLEFoLDGYoQtBEwQAFv4VBEwQAFn//8ABBBY0f/4ABMBIABMBIABMA45BAAJgHJAQLJh4jKGAQ7HKoZTHHoZrHBYaDHBYabHBYYKJZZAADLxAACLxIABLxUALxUALxUALxQA2A"))

function draw(){
  g.clear();
  g.drawImage(img, 120,120,{rotate:(getTime()*-1*5)});

}

function anim(){
  setInterval(draw,20);
}


function ST7789() {

    function e(b, f) {
        b ? digitalPulse(b, 0, 10) : a(1);
        setTimeout(function() {
            a(17);
            setTimeout(function() {
                a(54, 200);
                a(58, 5);
                a(178, [12, 12, 0, 51, 51]);
                a(183, 0);
                a(187, 62);
                a(192, 192);
                a(194, 1);
                a(195, 25);
                a(196, 32);
                a(197, 15);
                a(208, [164, 161]);
                a(224, [112, 21, 32, 21, 16, 9, 72, 51, 83, 11, 25, 21, 42, 47]);
                a(225, [112, 21, 32, 21, 16, 9, 72, 51, 83, 11, 25, 21, 42, 47]);
                a(33);
                a(19);
                a(41);
                f && f()
            }, 50)
        }, 120)
    }
    var a = lcd_spi_unbuf.command;
    SPI1.setup({
        sck: D2,
        mosi: D3,
        baud: 8E6
    });
    return function(b, f) {
        var d = b.rst,
            c = lcd_spi_unbuf.connect(b.spi, {
                dc: b.dc,
                cs: b.cs,
                height: 240,
                width: 240,
                colstart: 0,
                rowstart: 0
            });
        c.lcd_sleep = function() {
            a(16);
            a(40)
        };
        c.lcd_wake = function() {
            a(41);
            a(17)
        };
        c.setFontAlign(0, 0);
        e(d, function() {
            anim();
        });
        return c
    }({
        spi: SPI1,
        dc: D18,
        cs: D25,
        rst: D26
    })
}

function brightness(e) {
    digitalWrite([D23, D22, D14], 7 - (7 < e ? 1 : e))
}
E.showMessage = function(e, a) {
    P8.awake || P8.wake();
    g.clear(1);
    g.reset().setFont("Vector", 24).setFontAlign(0, 0);
    var b = g.getWidth(),
        f = g.getHeight();
    if (a) {
        g.drawString(a, b / 2, 24);
        var d = (g.stringWidth(a) + 16) / 2;
        g.fillRect(b / 2 - d, 34, b / 2 + d, 34)
    }
    d = e.split("\n");
    var c = (f - 24 * d.length) / 2;
    d.forEach(function(h, k) {
        return g.drawString(h, b / 2, c + 24 * k)
    });
    g.flip()
};
