const maxX = 240;
const maxY = 240;
const rowN = 7;
const colN = 7;
const headerH = maxY / 7;
const rowH = (maxY - headerH) / rowN;
const colW = maxX / colN;
const headerColor = "#2962ff";
const daysColor = "#ffffff";
const weekendColor = "#e3f2fd";
const weekdaysColor = "#ffffff";
const color5 = "#03A696";
const black = "#000000";
const white = "#ffffff";
const gray1 = "#444444";
const gray2 = "#888888";
const gray3 = "#bbbbbb";
const red = "#ff0000";
const blue = "#2962ff";

function drawCalendar(date) {
  g.setBgColor(weekdaysColor);
  g.clearRect(0, 0, maxX, maxY);
  g.setBgColor(headerColor);
  g.clearRect(0, 0, maxX, headerH);
  g.setBgColor(daysColor);
  g.clearRect(0, headerH, maxX, headerH + rowH);
  g.setBgColor(weekendColor);
  g.clearRect(colW * 5, headerH + rowH, maxX, maxY);
  for (let y = headerH; y < maxY; y += rowH) {
    g.drawLine(0, y, maxX, y);
  }
  for (let x = 0; x < maxX; x += colW) {
    g.drawLine(x, headerH, x, maxY);
  }

  const month = date.getMonth();
  const year = date.getFullYear();
  const monthMap = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };
  g.setFontAlign(0, 0);
  g.setFont("6x8", 2);
  g.setColor(black);//header and week text color
  g.drawString(`${monthMap[month]} ${year}`, maxX / 2, headerH / 2);
  g.drawPoly([10, headerH / 2, 20, 10, 20, headerH - 10], true);
  g.drawPoly(
    [maxX - 10, headerH / 2, maxX - 20, 10, maxX - 20, headerH - 10],
    true
  );

  g.setFont("6x8", 2);
  const dowLbls = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  dowLbls.forEach((lbl, i) => {
    g.drawString(lbl, i * colW + colW / 2, headerH + rowH / 2);
  });

  date.setDate(1);
  const dow = date.getDay();
  const dowNorm = dow === 0 ? 7 : dow;

  const monthMaxDayMap = {
    0: 31,
    1: (2020 - year) % 4 === 0 ? 29 : 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
  };

  let days = [];
  let nextMonthDay = 1;
  let thisMonthDay = 51;
  let prevMonthDay = monthMaxDayMap[month > 0 ? month - 1 : 11] - dowNorm;
  for (let i = 0; i < colN * (rowN - 1) + 1; i++) {
    if (i < dowNorm) {
      days.push(prevMonthDay);
      prevMonthDay++;
    } else if (thisMonthDay <= monthMaxDayMap[month] + 50) {
      days.push(thisMonthDay);
      thisMonthDay++;
    } else {
      days.push(nextMonthDay);
      nextMonthDay++;
    }
  }

  let i = 0;
  for (y = 0; y < rowN - 1; y++) {
    for (x = 0; x < colN; x++) {
      i++;
      const day = days[i];
      const isToday =
        today.year === year && today.month === month && today.day === day - 50;
      if (isToday) {
        g.setColor(blue);
        g.drawRect(
          x * colW,
          y * rowH + headerH + rowH,
          x * colW + colW - 1,
          y * rowH + headerH + rowH + rowH
        );
      }
      g.setColor(day < 50 ? gray3 : black);
      g.drawString(
        (day > 50 ? day - 50 : day).toString(),
        x * colW + colW / 2,
        headerH + rowH + y * rowH + rowH / 2
      );
    }
  }
}

const date = new Date();
const today = {
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear()
};

setTimeout(()=>{drawCalendar(date);},500);

TC.on("swipe",(dir)=>{
    if (dir==TC.RIGHT) {
      const month = date.getMonth();
      const prevMonth = month > 0 ? month - 1 : 11;
      if (prevMonth === 11) date.setFullYear(date.getFullYear() - 1);
      date.setMonth(prevMonth);
      drawCalendar(date);
    } else if (dir==TC.LEFT) {
      const month = date.getMonth();
      const prevMonth = month < 11 ? month + 1 : 0;
      if (prevMonth === 0) date.setFullYear(date.getFullYear() + 1);
      date.setMonth(month + 1);
      drawCalendar(date);
   }
});