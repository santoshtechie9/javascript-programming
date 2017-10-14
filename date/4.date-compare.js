
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