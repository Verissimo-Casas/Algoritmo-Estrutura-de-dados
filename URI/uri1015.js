//import
const Prompt = require('prompt-sync')();

//Entrada

const line1 = Prompt().split(' ');
let x1 = parseFloat(line1[0]);
let y1 = parseFloat(line1[1]);

const line2 = Prompt().split(' ');
let x2 = parseFloat(line2[0]);
let y2 = parseFloat(line2[1]);

//Processamento

Distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4);

//Saida
console.log(Distancia);