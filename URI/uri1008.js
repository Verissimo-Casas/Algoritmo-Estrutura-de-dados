//import
const Prompt = require("prompt-sync")();

//Entrada de dados
let employeeNumber = parseInt(Prompt());
let hoursWorked = parseInt(Prompt());
let salaryHours = parseFloat(Prompt());

//Processamento
Valor = hoursWorked * salaryHours;
let salaryFinal = Valor.toFixed(2);
//Saida
console.log(`NUMBER = ${employeeNumber} \nSALARY = U$ ${salaryFinal}`);