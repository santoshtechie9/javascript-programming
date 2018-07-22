
// compare dates
var today = new Date();
var givenDate = new Date();

givenDate.setFullYear(2016,10,26);
givenDate.setHours(1);
givenDate.setMinutes(4);
givenDate.setSeconds(3);

console.log("givenDate = " + givenDate);
console.log("currentDate = " + today);
/*  */
if( givenDate > today){
    console.log("given date is future date");
}else{
    console.log("given date is past date");
}