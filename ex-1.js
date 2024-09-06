// Exercise #1: For Each Function

function forEach(array, operation) {
  const result = [];
  for (let i = 0 ; i < array.lenght; i++) {
    operation(array[i]);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function add5000(oldSalary) {
  newEmployeeSalaries.push(oldSalary + 5000); 
}
forEach(employeeSalaries, add5000);
console.log(newEmployeeSalaries); 
