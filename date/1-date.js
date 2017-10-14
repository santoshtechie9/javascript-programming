

// In this module you will learn how to work with dates in java script.
// you need to create a date object to work with dates in java script.

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


// Date Formats
// the date formats are ISO, short date, long date , full date

// ISO date format  YYYY-MM-DD
console.log("-----ISO DATE FORMAT-----");
var isoDateFormat = new Date("2017-10-12");
console.log("isoDateFormat = " + isoDateFormat);

// short date format  mm/dd/yyyy
console.log("-----SHORT DATE FORMAT-----");
var shortDateFormat = new Date("10/13/2017");
console.log("shortDateFormat = " + shortDateFormat);

// long date format  Oct 14 2017
console.log("-----LONG DATE FORMAT-----");
var longDateFormat = new Date("14 Oct 2017");
console.log("longDateFormat = " + longDateFormat);

// Full date format  Oct 14 2017
console.log("-----LONG DATE FORMAT-----");
var fullDateFormat = new Date("Sat Oct 15 2017 16:48:02 GMT+0000 (UTC)");
console.log("fullDateFormat = " + fullDateFormat);

/* 
date methods
there are a list of methods available to work with date objects.
set , get , parse, compare
*/

console.log("Day = " + date.getDay());
console.log("Month = " + date.getMonth());
console.log("Year = " + date.getFullYear());
console.log("Hour = " + date.getHours());
console.log("Min = " + date.getMinutes());
console.log("Sec = " + date.getSeconds());
console.log("Time = " + date.getTime());
console.log("UTC date = " + date.getUTCDate());


// compare dates
var today = new Date();
var givenDate = new Date();

givenDate.getFullYear(2016);
givenDate.setMonth(10);
givenDate.setDate(14);

console.log("givenDate = " + givenDate);
console.log("currentDate = " + today);

if( givenDate > today){
    console.log("given date is future date");
}else{
    console.log("given date is past date");
}




