//import
const Prompt = require('prompt-sync')();
BONUS = 0.15;

//Entrada de Dados
const nome = lines.shift();
let fixedSalary = parseFloat(lines.shift())
let totalSales = parseFloat(lines.shift())

//Processamento
let Valor = fixedSalary + (totalSales * BONUS);
let valor = Valor.toFixed(2); //traqueamento de casas decimais.

//Saida
console.log(`TOTAL = R$ ${valor}`);