// declare two string varaiables in java script
var text1 = "It's alright";
var text2 = "John Doe";

//prints the variables on console 
console.log("text1 = " + text1);
console.log("text2 = " + text2);

// declare two string varaiables with double quotes in it
var text3 = "\It's alright\", said John";
console.log("text3 = " + text3);

// "\"" - backslash or "+" - plus for line break
var text4 = "Companies including Alibaba, Lexus, and Uber use both human and automated \
customer service to deliver the best results, according to a report from MIT Technology Review \
and Genesys.";
console.log("text4 = " + text4);

// String can also be a object. To create a string object follwo the syntax below
var strObject = new String("Hello World");

console.log(" type of text1 = " + typeof text1);
console.log(" type of strObject = " + typeof strObject);


// In javascript you can compare the data types of two variables using "===" operator 
// when the datatypes match ture is returned otherwise false is returned

console.log("text1 === text2" + text1 === text2);
console.log("text1 === strObject" + text1 === strObject);


// code to execute the javascript in jsbin
/*
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p> 

<script>
var txt = "\"Hello World!\"";
document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>
*/