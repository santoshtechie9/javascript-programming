
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