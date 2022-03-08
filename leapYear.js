function leapYear(year){
    var leapYearCount = year/4;
    return leapYearCount;
}
var isItLeapYear = leapYear(2602);
console.log(isItLeapYear);