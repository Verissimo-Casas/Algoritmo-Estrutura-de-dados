//import
const Prompt = require("prompt-sync")();

//Entrada
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

//Processamento

DIFERENCA = (A * B - C * D);

//Saida
console.log(`DIFERENCA = ${DIFERENCA}`);