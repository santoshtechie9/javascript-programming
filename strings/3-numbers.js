//Numbers in Javascript

/*
Javascript has only one type of numeric type called "Numbers". 
Javascript numbers are 64 bit floating point numbers. 
In Javascript numbers do not have further classification like int,long, float, double like you find
in most of the other programming languages.
In Javascript numbers are always stored as double precision 64-bit following the IEEE 754 format.

64 -bit
0-51 - number
52-62 - exponent
63 - sign
*/

var number = 143;              // number with out decimal
var number1 = 143.0;           // number with decimal
var expoNum = 123e5;         // exponent
var negExpoNum  = 123e-5;   // -ve exponent number

console.log(number);
console.log(number1);
console.log(expoNum);
console.log(negExpoNum);


/*
Javascript keeps precision for integers for upto 15 digits.
Floating point arithematic is accurate up to 17 decimals.
Floating point arithemation is not always accurate in javascript. 
*/

var num1 = 999999999999999;
var num2 = 9999999999999999;

console.log(num1, num2); // you can check the precision here

// Number system
// decimal base 10
// binary base 2
// hexadecimal base 16
// octal base 8

// In this example I am going to show you how to convert number from one number system to another in javascript

var number1 = 1024;

console.log("decimal value = " + number1);
console.log("binary value = " + number1.toString(2));
console.log("hexa decimal value = " + number1.toString(16).toString(10));
console.log("octal value = " + number1.toString(8));





