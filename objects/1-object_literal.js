
// in java script there are different ways to create an object
// object literals
// function constructors

// here is the object literal method of creating objects

var employee = {
    empName: "Sans",
    empId: 3456,
    department: "BI",
    salary: 90000
}

console.log(employee);

// access elements of an object with objectname.property syntax
console.log("Name =" +employee.empName);
console.log("Name = "+ employee["empName"]);

