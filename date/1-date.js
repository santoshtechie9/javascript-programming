

// In this module you will learn how to work with dates in java script.
// you need to create a date object to work with dates in javascript.

// create a data object with current time.
var date = new Date();

console.log("current data = " + date);
console.log("JSON date = " +date.toJSON());
console.log(" Date String = " +date.toDateString());

// create a date object for give date.

// milliseconds format
var millisecToDate = new Date(1507998815369);
console.log("millisecToDate = " + millisecToDate);

// yyyy/mm/dd format
var date_yyyymmdd = new Date('2017/10/14');
console.log("date_yyyymmdd = " + date_yyyymmdd);

// years month day hours min sec format
//var yearMonDayHourMinSec = new Date('2017,10,14,09,30');
//console.log("yearMonDayHourMinSec = " + yearMonDayHourMinSec);

