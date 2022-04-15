//import
const Prompt = require("prompt-sync")();

//Entradas
let line = Prompt().split(' ');
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let C = parseInt(line[2]);

//Processamento
let result = parseInt((A + B + Math.abs(A - B)) / 2);

let maior = parseInt((result + C + Math.abs(result - C)) / 2);
//Saida
console.log(`${maior} eh o maior`);