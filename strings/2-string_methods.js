

var text = "You Learn More From Failure Than From Success. \
            Don’t Let It Stop You. Failure Builds Character"

//length 
//length methods will return the total number of characters in a string.   
console.log("length = " + text.length);

//search
//to search for a character or a series of characters in a string use these methods
//indexOf()
//lastIndexOf()
//search()

//search for a word "Failure" in text. 
//It returns the position of first occurance.
console.log("indexOf = "+text.indexOf("Success"));

//It returns the posotion of first occurance from the end of string
console.log("lastIndexOf = "+text.lastIndexOf("Failure"));

//returns index. you can give regular expressions in search.
console.log("search = "+text.search("Success"));


//replace
console.log("replace = "+text.replace("Failure","Success"));

//Extract a character or a series of characters
//slice()
//substr()
//substring()

//slice. you can give -ve index to extract from the end.
console.log("slice = " + text.slice());
console.log("slice = " + text.slice(3));
console.log("slice = " + text.slice(3,8));
console.log("slice = " + text.slice(-8,-12));


//substring. It won't accept -ve index
console.log("substring = " + text.substring(3,8));

//substr.
console.log("substr = " + text.substr(3,8));


//Lower and Upper
console.log("lower = " + text.toLowerCase());
console.log("upper = " + text.toUpperCase());

// concatination
var text1 = "Hello ";
var text2 = "World!";
console.log("text1 + text2 = " + text1.concat(text2));

// Split string
console.log("split = ",text.split(' '));





