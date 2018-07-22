
// function constructor. In javascipt there is no concept of classes. A function can be used to create object with a new keyword. 
//This way of creating objects is called functional constructor

function Employee(empName, empId,dept,salary){
    this.empName=empId;
    this.empId=empId;
    this.dept=dept;
    this.salary=salary;
} 

var emp1 = new Employee("Sans",3456,"BI",90000);
var emp2 = new Employee("Sri",3457,"PM",89000);
var emp3 = new Employee("Sup",3457,"Open",79000);

console.log(emp1);
console.log(emp2);
console.log(emp3);

var Employee1 = function(empName,empId,dept,salary){
    this.empName=empName;
    this.empId=empId;
    this.dept=dept;
    this.salary= salary;
}

var emp4 = new Employee1("Sam",3897,"Tech",10000);
console.log(emp4);
