const employee = { 
    name: "Sam",
    streetAddress: "11 Broadway"
}
// let employee = Object();

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = { ...employee}
    newEmployee[name]= value;
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name]=value
    return employee
}
function deleteFromEmployeeByKey (employee, name) {
    const newEmployee2 = { ...employee}
    delete newEmployee2[name];
    return newEmployee2
}
function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee[name]
    return employee
}








// employee["street address"]
// updateEmployeeWithKeyAndValue(employee, "name", "Sam")
// updateEmployeeWithKeyAndValue(employee, "street address", "11 Broadway")

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key]= value;
//     return employee["street address"]
// }
//updateEmployeeWithKeyAndValue("Sam", "street address", "11 Broadway")