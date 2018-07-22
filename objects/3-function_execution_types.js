
//The following example will show the different ways of executing functions in javascript


//Method #1 : in this method of calling function this refers to the global object.
function foo() {
    console.log("Hello, this inside foo function");
    console.log(this);
}

foo();    


//Method#2 : in this method of calling function this refer to the current object

var object = {};
object.foo = function(){
    console.log("Hello, this is foo function inside object");
    console.log(this);
}

object.foo();   

 //Method#3 : in this method of calling function this refers to an empty object
new foo(); 

//Method#4 : in this method the this reference is bind to the object passed as and argument 
foo.call({});


