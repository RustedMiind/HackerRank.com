"use strict";
function libraryFine(d1, m1, y1, d2, m2, y2) {
    const date1 = new Date(y1, m1, d1), date2 = new Date(y2, m2, d2);
    function calcDate(date1, date2) {
        var diff = Math.floor(date1.getTime() - date2.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 30.1);
        var years = Math.floor(months / 12);
        return [days, months, years];
    }
    const [days, months, years] = calcDate(date1, date2);
    if (years > 0) {
        return 10000;
    }
    else if (months > 0) {
        return months * 500;
    }
    else if (days > 0) {
        return days * 15;
    }
    else {
        return 0;
    }
}
console.log(libraryFine(1, 1, 2015, 31, 12, 2014));
