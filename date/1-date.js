

// In this module you will learn how to work with dates in java script.


// create a data object with current time.
var date = new Date();

console.log("current data = " + date);
console.log("Day = " + date.getDay());
console.log("Month = " + date.getMonth());
console.log("Year = " + date.getFullYear());
console.log("Hour = " + date.getHours());
console.log("Min = " + date.getMinutes());
console.log("Sec = " + date.getSeconds());
console.log("Time = " + date.getTime());
console.log("UTC data = " + date.getUTCDate());
console.log("JSON data = " +date.toJSON());
